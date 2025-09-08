import { ListingData, MappingData, Coordinate, DaftError } from "./types";

export class Listing {
  private readonly _result: ListingData;
  private static readonly BASE_URL = "http://www.daft.ie";

  constructor(result: { listing: ListingData }) {
    this._result = result.listing;
  }

  get id(): string {
    return this._result.id;
  }

  get agentId(): string {
    return this._result.seller.sellerId;
  }

  get agentName(): string {
    return this._result.seller.name;
  }

  get agentBranch(): string {
    return this._result.seller.branch;
  }

  get agentSellerType(): string {
    return this._result.seller.sellerType;
  }

  get daftLink(): string {
    return `${Listing.BASE_URL}${this._result.seoFriendlyPath}`;
  }

  get latitude(): number {
    return this._result.point.coordinates[1];
  }

  get longitude(): number {
    return this._result.point.coordinates[0];
  }

  get title(): string {
    return this._result.title;
  }

  get monthlyPrice(): number | string {
    const priceStr = this._result.price;
    if (priceStr === "Price on Application") {
      return priceStr;
    }

    const euroPosition = priceStr.indexOf("€");
    if (euroPosition === -1) {
      return "Price on Application";
    }

    const cleanPrice = priceStr.substring(euroPosition).replace(/,/g, "");
    const parts = cleanPrice.toLowerCase().split(" ");
    const priceNum = parseInt(parts[0]?.substring(1) ?? "0", 10);

    if (isNaN(priceNum)) {
      return "Price on Application";
    }

    if (parts[parts.length - 1] === "week") {
      return Math.round((priceNum * 30) / 7);
    }

    return priceNum;
  }

  get price(): string {
    return this._result.price;
  }

  get bathrooms(): string | undefined {
    return this._result.numBathrooms;
  }

  get bedrooms(): string | undefined {
    return this._result.numBedrooms;
  }

  get publishDate(): string {
    const date = new Date(this._result.publishDate);
    return date.toISOString();
  }

  get shortcode(): string {
    return this._result.daftShortcode;
  }

  get sections(): string[] {
    return this._result.sections;
  }

  get saleType(): string {
    return this._result.saleType;
  }

  get images(): any[] {
    return this._result.media.images;
  }

  get brochure(): any | null {
    return this.hasBrochure ? this._result.media.brochure : null;
  }

  get totalImages(): number {
    return this._result.media.totalImages;
  }

  get hasVideo(): boolean {
    return this._result.media.hasVideo;
  }

  get hasVirtualTour(): boolean {
    return this._result.media.hasVirtualTour;
  }

  get hasBrochure(): boolean {
    return this._result.media.hasBrochure;
  }

  get ber(): string {
    return this._result.ber.rating;
  }

  get category(): string {
    return this._result.category;
  }

  get featuredLevel(): number {
    return this._result.featuredLevel;
  }

  get sizeMetersSquared(): number | string {
    try {
      if (this._result.floorArea?.unit !== "METRES_SQUARED") {
        return "N/A";
      }
      return this._result.floorArea?.value ?? "N/A";
    } catch {
      return "N/A";
    }
  }

  asDict(): ListingData {
    return this._result;
  }

  asDictForMapping(): MappingData {
    const mappingDict: MappingData = {
      monthly_price: this.monthlyPrice,
      latitude: this.latitude,
      longitude: this.longitude,
      bedrooms: this.bedrooms || "1+ bed",
      bathrooms: this.bathrooms || "1+ bath",
      daft_link: this.daftLink,
    };

    return mappingDict;
  }

  distanceTo(location: Listing | Coordinate): number {
    /**
     * This method gives the distance in km as the crow flies from the listing
     * to the given location.
     * @param location - Listing or a coordinate [latitude, longitude] pair.
     * @returns distance to location in km.
     */
    const EARTH_RADIUS_KM = 6371;

    if (this.latitude == null || this.longitude == null) {
      throw new DaftError("Self missing location data.");
    }

    let targetLat: number;
    let targetLon: number;

    if (location instanceof Listing) {
      if (location.latitude == null || location.longitude == null) {
        throw new DaftError("Argument missing location data.");
      }
      targetLat = location.latitude;
      targetLon = location.longitude;
    } else if (Array.isArray(location) && location.length === 2) {
      [targetLat, targetLon] = location;
    } else {
      throw new DaftError(
        "Argument should be Listing or a coordinate [latitude, longitude] pair."
      );
    }

    const dLon = this.toRadians(this.longitude) - this.toRadians(targetLon);
    const lat1 = this.toRadians(this.latitude);
    const lat2 = this.toRadians(targetLat);

    const dSigma =
      2 *
      Math.asin(
        Math.sqrt(
          Math.sin((lat1 - lat2) / 2) * Math.sin((lat1 - lat2) / 2) +
            Math.cos(lat1) *
              Math.cos(lat2) *
              Math.sin(dLon / 2) *
              Math.sin(dLon / 2)
        )
      );

    return EARTH_RADIUS_KM * dSigma;
  }

  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}
