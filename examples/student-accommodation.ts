import { Daft, SearchType, PropertyType, Facility, SuitableFor } from "../src";

async function studentAccommodationSearch() {
  const daft = new Daft();

  // Set student accommodation search parameters
  daft.setSearchType(SearchType.STUDENT_ACCOMMODATION);
  daft.setPropertyType(PropertyType.APARTMENT);
  daft.setMinPrice(400);
  daft.setMaxPrice(800);
  daft.setSuitability(SuitableFor.FEMALE);
  daft.setFacility(Facility.INTERNET);
  daft.setFacility(Facility.WASHING_MACHINE);
  daft.setFacility(Facility.ENSUITE);

  try {
    const listings = await daft.search(1);

    console.log(`Found ${listings.length} student accommodation listings`);

    listings.forEach((listing, index) => {
      console.log(`\n${index + 1}. ${listing.title}`);
      console.log(`   Price: ${listing.price}`);
      console.log(`   Monthly Price: €${listing.monthlyPrice}`);
      console.log(`   Bedrooms: ${listing.bedrooms}`);
      console.log(`   Link: ${listing.daftLink}`);
    });
  } catch (error) {
    console.error("Student accommodation search failed:", error);
  }
}

studentAccommodationSearch();
