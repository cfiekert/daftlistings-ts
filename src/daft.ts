import axios, { AxiosResponse } from "axios";
import {
  DaftApiResponse,
  SearchPayload,
  Filter,
  RangeFilter,
  GeoFilter,
  DaftError,
  NetworkError,
  ValidationError,
} from "./types";
import { Listing } from "./listing";
import { Location } from "./enums/location";
import {
  SearchType,
  PropertyType,
  SuitableFor,
  SortType,
  Facility,
  AddedSince,
  Ber,
  Distance,
} from "./enums";

export class Daft {
  private static readonly ENDPOINT =
    "https://gateway.daft.ie/api/v2/ads/listings";
  private static readonly HEADER = {
    "User-Agent": "",
    "Content-Type": "application/json",
    brand: "daft",
    platform: "web",
  };
  private static readonly PAGE_SIZE = 50;
  private static readonly PAGE_0 = {
    from: "0",
    pagesize: Daft.PAGE_SIZE.toString(),
  };

  private _section?: string;
  private _filters: Filter[] = [];
  private _andFilters: Filter[] = [];
  private _ranges: RangeFilter[] = [];
  private _geoFilter?: GeoFilter;
  private _sortFilter?: string;
  private _totalResults = 0;

  get totalResults(): number {
    return this._totalResults;
  }

  private setRangeTo(name: string, to: string): void {
    const existingRange = this._ranges.find((r) => r.name === name);
    if (existingRange) {
      existingRange.to = to;
    } else {
      this._ranges.push({ name, from: "0", to });
    }
  }

  private setRangeFrom(name: string, from: string): void {
    const existingRange = this._ranges.find((r) => r.name === name);
    if (existingRange) {
      existingRange.from = from;
    } else {
      this._ranges.push({ name, from, to: "1000000000" });
    }
  }

  private addFilter(name: string, value: string | boolean): void {
    const existingFilter = this._filters.find((f) => f.name === name);
    if (existingFilter) {
      if (!existingFilter.values.includes(value)) {
        existingFilter.values.push(value);
      }
    } else {
      this._filters.push({ name, values: [value] });
    }
  }

  private addAndFilter(name: string, value: string): void {
    const existingFilter = this._andFilters.find((f) => f.name === name);
    if (existingFilter) {
      if (!existingFilter.values.includes(value)) {
        existingFilter.values.push(value);
      }
    } else {
      this._andFilters.push({ name, values: [value] });
    }
  }

  private addSortFilter(sortFilter: string): void {
    this._sortFilter = sortFilter;
  }

  private addGeoFilter(id: string): void {
    if (this._geoFilter) {
      if (!this._geoFilter.storedShapeIds.includes(id)) {
        this._geoFilter.storedShapeIds.push(id);
      }
    } else {
      this._geoFilter = {
        storedShapeIds: [id],
        geoSearchType: "STORED_SHAPES",
      };
    }
  }

  setSearchType(searchType: SearchType): void {
    this._section = searchType;
  }

  setPropertyType(propertyType: PropertyType): void {
    this.addFilter("propertyType", propertyType);
  }

  setMinBeds(minBeds: number): void {
    this.setRangeFrom("numBeds", minBeds.toString());
  }

  setMaxBeds(maxBeds: number): void {
    this.setRangeTo("numBeds", maxBeds.toString());
  }

  setMinBaths(minBaths: number): void {
    this.setRangeFrom("numBaths", minBaths.toString());
  }

  setMaxBaths(maxBaths: number): void {
    this.setRangeTo("numBaths", maxBaths.toString());
  }

  setMinPrice(minPrice: number): void {
    if (!this._section) {
      throw new ValidationError("Must set search_type before price.");
    }

    const rentalSections = [
      SearchType.RESIDENTIAL_RENT,
      SearchType.COMMERCIAL_RENT,
      SearchType.SHARING,
      SearchType.STUDENT_ACCOMMODATION,
    ];

    if (rentalSections.includes(this._section as SearchType)) {
      this.setRangeFrom("rentalPrice", minPrice.toString());
    } else {
      this.setRangeFrom("salePrice", minPrice.toString());
    }
  }

  setMaxPrice(maxPrice: number): void {
    if (!this._section) {
      throw new ValidationError("Must set search_type before price.");
    }

    const rentalSections = [
      SearchType.RESIDENTIAL_RENT,
      SearchType.COMMERCIAL_RENT,
      SearchType.SHARING,
      SearchType.STUDENT_ACCOMMODATION,
    ];

    if (rentalSections.includes(this._section as SearchType)) {
      this.setRangeTo("rentalPrice", maxPrice.toString());
    } else {
      this.setRangeTo("salePrice", maxPrice.toString());
    }
  }

  setSuitability(suitability: SuitableFor): void {
    this.addFilter("suitableFor", suitability);
  }

  setOwnerOccupied(ownerOccupied: boolean): void {
    this.addFilter("ownerOccupied", ownerOccupied);
  }

  setMinTenants(numTenants: number): void {
    this.setRangeFrom("numTenants", numTenants.toString());
  }

  setMaxTenants(numTenants: number): void {
    this.setRangeTo("numTenants", numTenants.toString());
  }

  setMinLease(minLease: number): void {
    // Measured in months
    this.setRangeFrom("leaseLength", minLease.toString());
  }

  setMaxLease(maxLease: number): void {
    // Measured in months
    this.setRangeTo("leaseLength", maxLease.toString());
  }

  setMinFloorSize(minFloorSize: number): void {
    this.setRangeFrom("floorSize", minFloorSize.toString());
  }

  setMaxFloorSize(maxFloorSize: number): void {
    this.setRangeTo("floorSize", maxFloorSize.toString());
  }

  setAddedSince(addedSince: AddedSince): void {
    this.setRangeFrom("firstPublishDate", addedSince);
    this.setRangeTo("firstPublishDate", "");
  }

  setMinBer(ber: Ber): void {
    this.setRangeFrom("ber", ber.toString());
  }

  setMaxBer(ber: Ber): void {
    this.setRangeTo("ber", ber.toString());
  }

  setLocation(
    location: Location | string | (Location | string)[],
    distance: Distance = Distance.KM0
  ): void {
    if (location instanceof Location) {
      this.addGeoFilter(location.value.id + distance);
    } else if (typeof location === "string") {
      const bestMatch = this.getBestMatch(location);
      this.addGeoFilter(bestMatch.value.id + distance);
    } else if (Array.isArray(location)) {
      for (const area of location) {
        if (area instanceof Location) {
          this.addGeoFilter(area.value.id + distance);
        } else if (typeof area === "string") {
          const bestMatch = this.getBestMatch(area);
          this.addGeoFilter(bestMatch.value.id + distance);
        } else {
          throw new ValidationError(
            "List values must be of type Location or string."
          );
        }
      }
    } else {
      throw new ValidationError("Argument must be Location, list, or string.");
    }
  }

  setFacility(facility: Facility): void {
    if (!this._section) {
      throw new ValidationError("SearchType must be set before Facility");
    }

    if (!facility.validTypes.includes(this._section as SearchType)) {
      const compatibleFacilities = Object.values(Facility)
        .filter((f) => f.validTypes.includes(this._section as SearchType))
        .map((f) => f.constructor.name);

      throw new ValidationError(
        `Facility ${facility.constructor.name} incompatible with SearchType ${this._section}\n` +
          `The following facilities are compatible with this SearchType:\n${compatibleFacilities.join(
            ", "
          )}`
      );
    }

    this.addAndFilter("facilities", facility.value);
  }

  setSortType(sortType: SortType): void {
    this.addSortFilter(sortType);
  }

  private getBestMatch(location: string): Location {
    const regex = /[^a-zA-Z0-9]/g;
    const searchTerm = location.replace(regex, " ").toLowerCase();
    let bestScore = 0;
    let bestMatch: Location | null = null;

    // Import ALL_LOCATIONS dynamically to avoid circular dependency
    const { ALL_LOCATIONS } = require("./enums/location");

    for (const loc of ALL_LOCATIONS) {
      const displayValue = loc.value.displayValue
        .replace(regex, " ")
        .toLowerCase();
      const similarity = this.calculateSimilarity(searchTerm, displayValue);

      if (similarity > bestScore) {
        bestScore = similarity;
        bestMatch = loc;
      }
    }

    if (!bestMatch) {
      throw new ValidationError(`No matching location found for: ${location}`);
    }

    return bestMatch;
  }

  private calculateSimilarity(str1: string, str2: string): number {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;

    if (longer.length === 0) {
      return 1.0;
    }

    const editDistance = this.levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  }

  private levenshteinDistance(str1: string, str2: string): number {
    const matrix: number[][] = Array(str2.length + 1)
      .fill(null)
      .map(() => Array(str1.length + 1).fill(0));

    for (let i = 0; i <= str1.length; i++) {
      matrix[0]![i] = i;
    }

    for (let j = 0; j <= str2.length; j++) {
      matrix[j]![0] = j;
    }

    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j]![i] = Math.min(
          matrix[j]![i - 1]! + 1,
          matrix[j - 1]![i]! + 1,
          matrix[j - 1]![i - 1]! + indicator
        );
      }
    }

    return matrix[str2.length]![str1.length]!;
  }

  private makePayload(): SearchPayload {
    const payload: SearchPayload = {
      paging: { ...Daft.PAGE_0 },
    };

    if (this._section) {
      payload.section = this._section;
    }
    if (this._filters.length > 0) {
      payload.filters = this._filters;
    }
    if (this._andFilters.length > 0) {
      payload.andFilters = this._andFilters;
    }
    if (this._ranges.length > 0) {
      payload.ranges = this._ranges;
    }
    if (this._geoFilter) {
      payload.geoFilter = this._geoFilter;
    }
    if (this._sortFilter) {
      payload.sort = this._sortFilter;
    }

    return payload;
  }

  async search(maxPages?: number): Promise<Listing[]> {
    console.log("Searching...");

    try {
      const payload = this.makePayload();
      const response: AxiosResponse<DaftApiResponse> = await axios.post(
        Daft.ENDPOINT,
        payload,
        { headers: Daft.HEADER }
      );

      let listings = response.data.listings;
      const resultsCount = response.data.paging.totalResults;
      const totalPages = Math.ceil(resultsCount / Daft.PAGE_SIZE);
      const limit = maxPages ? Math.min(maxPages, totalPages) : totalPages;

      // Fetch additional pages
      for (let page = 1; page < limit; page++) {
        const pagePayload = { ...payload };
        pagePayload.paging.from = (page * Daft.PAGE_SIZE).toString();

        const pageResponse: AxiosResponse<DaftApiResponse> = await axios.post(
          Daft.ENDPOINT,
          pagePayload,
          { headers: Daft.HEADER }
        );

        listings = listings.concat(pageResponse.data.listings);
      }

      // Expand grouped listings as individual listings
      const expandedListings = this.expandGroupedListings(listings);
      this._totalResults = expandedListings.length;

      console.log(`Search complete. Found ${this.totalResults} listings.`);

      return expandedListings.map((l) => new Listing(l));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new NetworkError(`Network error: ${error.message}`);
      }
      throw new DaftError(
        `Search failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  private expandGroupedListings(listings: any[]): any[] {
    const expandedListings: any[] = [];

    for (const listing of listings) {
      // Handle newHome type searches
      if (listing.listing.newHome && listing.listing.newHome.subUnits) {
        listing.listing.prs = listing.listing.newHome;
        delete listing.listing.newHome;
      }

      try {
        const numSubUnits = listing.listing.prs?.subUnits?.length || 0;

        if (numSubUnits > 0) {
          for (let i = 0; i < numSubUnits; i++) {
            const copy = JSON.parse(JSON.stringify(listing));
            const subUnit = copy.listing.prs.subUnits[i];

            for (const key of Object.keys(subUnit)) {
              copy.listing[key] = subUnit[key];
            }

            // Studios do not have a 'numBedrooms' so set it separately
            if (copy.listing.propertyType === "Studio") {
              copy.listing.numBedrooms = "1 bed";
            }

            expandedListings.push(copy);
          }
        } else {
          // Handle ungrouped listings
          if (listing.listing.propertyType === "Studio") {
            listing.listing.numBedrooms = "1 bed";
          }
          expandedListings.push(listing);
        }
      } catch {
        // Handle ungrouped listings
        if (listing.listing.propertyType === "Studio") {
          listing.listing.numBedrooms = "1 bed";
        }
        expandedListings.push(listing);
      }
    }

    return expandedListings;
  }
}
