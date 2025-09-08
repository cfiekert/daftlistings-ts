import { Daft, SearchType, PropertyType, Facility, SortType } from "../src";

async function commercialSearch() {
  const daft = new Daft();

  // Set commercial search parameters
  daft.setSearchType(SearchType.COMMERCIAL_RENT);
  daft.setPropertyType(PropertyType.OFFICE_SPACE);
  daft.setMinFloorSize(100);
  daft.setMaxFloorSize(500);
  daft.setMinPrice(2000);
  daft.setMaxPrice(10000);
  daft.setFacility(Facility.PARKING);
  daft.setFacility(Facility.MEETING_ROOMS);
  daft.setSortType(SortType.PRICE_ASC);

  try {
    const listings = await daft.search(1);

    console.log(`Found ${listings.length} commercial listings`);

    listings.forEach((listing, index) => {
      console.log(`\n${index + 1}. ${listing.title}`);
      console.log(`   Price: ${listing.price}`);
      console.log(`   Size: ${listing.sizeMetersSquared} m²`);
      console.log(`   BER: ${listing.ber}`);
      console.log(`   Link: ${listing.daftLink}`);
    });
  } catch (error) {
    console.error("Commercial search failed:", error);
  }
}

commercialSearch();
