import { Daft, SearchType, PropertyType, Location } from "../dist";

async function runExample() {
  console.log("🚀 DaftListings TypeScript Example");
  console.log("=====================================\n");

  const daft = new Daft();

  // Set search parameters
  daft.setSearchType(SearchType.RESIDENTIAL_RENT);
  daft.setPropertyType(PropertyType.APARTMENT);
  daft.setMinBeds(1);
  daft.setMaxBeds(2);
  daft.setMinPrice(800);
  daft.setMaxPrice(1500);
  daft.setLocation(Location.DUBLIN_2_DUBLIN);

  try {
    console.log("Searching for properties...");
    const listings = await daft.search(1); // Search first page only for demo

    console.log(`\n✅ Found ${listings.length} listings\n`);

    if (listings.length > 0) {
      console.log("📋 Sample listings:");
      console.log("==================");

      listings.slice(0, 3).forEach((listing, index) => {
        console.log(`\n${index + 1}. ${listing.title}`);
        console.log(`   💰 Price: ${listing.price}`);
        console.log(`   🛏️  Bedrooms: ${listing.bedrooms || "N/A"}`);
        console.log(`   🚿 Bathrooms: ${listing.bathrooms || "N/A"}`);
        console.log(
          `   📍 Location: ${listing.latitude}, ${listing.longitude}`
        );
        console.log(`   🔗 Link: ${listing.daftLink}`);
      });
    }

    console.log("\n🎉 Example completed successfully!");
  } catch (error) {
    console.error("❌ Search failed:", error);
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  runExample();
}
