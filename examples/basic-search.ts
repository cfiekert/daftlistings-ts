import { Daft, SearchType, PropertyType, Location } from "../src";

async function basicSearch() {
  const daft = new Daft();

  // Set search parameters
  daft.setSearchType(SearchType.RESIDENTIAL_RENT);
  daft.setPropertyType(PropertyType.APARTMENT);
  daft.setMinBeds(2);
  daft.setMaxBeds(3);
  daft.setMinPrice(1000);
  daft.setMaxPrice(2000);
  daft.setLocation(Location.DUBLIN_2);

  try {
    const listings = await daft.search(2); // Search first 2 pages

    console.log(`Found ${listings.length} listings`);

    listings.forEach((listing, index) => {
      console.log(`\n${index + 1}. ${listing.title}`);
      console.log(`   Price: ${listing.price}`);
      console.log(`   Bedrooms: ${listing.bedrooms}`);
      console.log(`   Bathrooms: ${listing.bathrooms}`);
      console.log(`   Link: ${listing.daftLink}`);
    });
  } catch (error) {
    console.error("Search failed:", error);
  }
}

basicSearch();
