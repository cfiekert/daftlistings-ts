# DaftListings TypeScript

A TypeScript library that enables programmatic interaction with daft.ie. Daft.ie has nationwide coverage and contains about 80% of the total available properties in Ireland.

This is a TypeScript port of the original Python [daftlistings](https://github.com/AnthonyBloomer/daftlistings) library.

## Installation

```bash
npm install daftlistings-ts
```

## Quick Start

```typescript
import { Daft, SearchType, PropertyType, Location } from "daftlistings-ts";

async function searchProperties() {
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

    listings.forEach((listing) => {
      console.log(`${listing.title} - ${listing.price}`);
      console.log(
        `Bedrooms: ${listing.bedrooms}, Bathrooms: ${listing.bathrooms}`
      );
      console.log(`Link: ${listing.daftLink}`);
    });
  } catch (error) {
    console.error("Search failed:", error);
  }
}

searchProperties();
```

## Features

- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Async/Await**: Modern async/await syntax for all API calls
- **Comprehensive Search**: Support for all Daft.ie search parameters
- **Location Support**: Built-in support for all Irish locations
- **Facility Filtering**: Advanced facility filtering for properties
- **Error Handling**: Proper error handling with custom error types
- **Distance Calculations**: Built-in distance calculation between properties

## API Reference

### Daft Class

The main class for searching properties on Daft.ie.

#### Methods

##### Search Configuration

- `setSearchType(type: SearchType)` - Set the type of search (rental, sale, etc.)
- `setPropertyType(type: PropertyType)` - Set the property type (apartment, house, etc.)
- `setLocation(location: Location | string | (Location | string)[], distance?: Distance)` - Set search location
- `setMinBeds(beds: number)` - Set minimum number of bedrooms
- `setMaxBeds(beds: number)` - Set maximum number of bedrooms
- `setMinBaths(baths: number)` - Set minimum number of bathrooms
- `setMaxBaths(baths: number)` - Set maximum number of bathrooms
- `setMinPrice(price: number)` - Set minimum price
- `setMaxPrice(price: number)` - Set maximum price
- `setSuitability(suitability: SuitableFor)` - Set suitability (male/female)
- `setOwnerOccupied(occupied: boolean)` - Set owner occupied filter
- `setMinTenants(tenants: number)` - Set minimum number of tenants
- `setMaxTenants(tenants: number)` - Set maximum number of tenants
- `setMinLease(months: number)` - Set minimum lease length in months
- `setMaxLease(months: number)` - Set maximum lease length in months
- `setMinFloorSize(size: number)` - Set minimum floor size
- `setMaxFloorSize(size: number)` - Set maximum floor size
- `setAddedSince(addedSince: AddedSince)` - Set when property was added
- `setMinBer(ber: Ber)` - Set minimum BER rating
- `setMaxBer(ber: Ber)` - Set maximum BER rating
- `setFacility(facility: Facility)` - Add a facility filter
- `setSortType(sortType: SortType)` - Set sort order

##### Search Execution

- `search(maxPages?: number): Promise<Listing[]>` - Execute the search

### Listing Class

Represents an individual property listing.

#### Properties

- `id: string` - Unique listing ID
- `title: string` - Property title
- `price: string` - Price as displayed on Daft.ie
- `monthlyPrice: number | string` - Monthly price (converted from weekly if needed)
- `bedrooms: string | undefined` - Number of bedrooms
- `bathrooms: string | undefined` - Number of bathrooms
- `latitude: number` - Property latitude
- `longitude: number` - Property longitude
- `daftLink: string` - Direct link to the property on Daft.ie
- `agentName: string` - Agent name
- `agentBranch: string` - Agent branch
- `ber: string` - BER rating
- `publishDate: string` - Publication date
- `images: any[]` - Property images
- `hasVideo: boolean` - Whether property has video
- `hasVirtualTour: boolean` - Whether property has virtual tour
- `hasBrochure: boolean` - Whether property has brochure
- `sizeMetersSquared: number | string` - Floor area in square meters

#### Methods

- `asDict(): ListingData` - Get raw listing data
- `asDictForMapping(): MappingData` - Get data formatted for mapping
- `distanceTo(location: Listing | Coordinate): number` - Calculate distance to another location

### Enums

#### SearchType

- `RESIDENTIAL_SALE` - Residential properties for sale
- `RESIDENTIAL_RENT` - Residential properties for rent
- `COMMERCIAL_SALE` - Commercial properties for sale
- `COMMERCIAL_RENT` - Commercial properties for rent
- `SHARING` - Room sharing
- `STUDENT_ACCOMMODATION` - Student accommodation
- `NEW_HOMES` - New homes

#### PropertyType

- `HOUSE` - Houses
- `DETACHED_HOUSE` - Detached houses
- `SEMI_DETACHED_HOUSE` - Semi-detached houses
- `TERRACED_HOUSE` - Terraced houses
- `APARTMENT` - Apartments
- `STUDIO_APARTMENT` - Studio apartments
- `OFFICE_SPACE` - Office spaces
- `RETAIL_UNIT` - Retail units
- And many more...

#### Facility

- `PARKING` - Parking available
- `INTERNET` - Internet included
- `WASHING_MACHINE` - Washing machine
- `DISHWASHER` - Dishwasher
- `CENTRAL_HEATING` - Central heating
- And many more...

## Examples

### Basic Residential Search

```typescript
import { Daft, SearchType, PropertyType, Location } from "daftlistings-ts";

const daft = new Daft();
daft.setSearchType(SearchType.RESIDENTIAL_RENT);
daft.setPropertyType(PropertyType.APARTMENT);
daft.setMinBeds(2);
daft.setMaxBeds(3);
daft.setMinPrice(1000);
daft.setMaxPrice(2000);
daft.setLocation(Location.DUBLIN_2);

const listings = await daft.search();
```

### Commercial Search with Facilities

```typescript
import { Daft, SearchType, PropertyType, Facility } from "daftlistings-ts";

const daft = new Daft();
daft.setSearchType(SearchType.COMMERCIAL_RENT);
daft.setPropertyType(PropertyType.OFFICE_SPACE);
daft.setMinFloorSize(100);
daft.setMaxFloorSize(500);
daft.setFacility(Facility.PARKING);
daft.setFacility(Facility.MEETING_ROOMS);

const listings = await daft.search();
```

### Student Accommodation

```typescript
import { Daft, SearchType, SuitableFor, Facility } from "daftlistings-ts";

const daft = new Daft();
daft.setSearchType(SearchType.STUDENT_ACCOMMODATION);
daft.setSuitability(SuitableFor.FEMALE);
daft.setFacility(Facility.INTERNET);
daft.setFacility(Facility.ENSUITE);

const listings = await daft.search();
```

### Distance Calculation

```typescript
const listing1 = listings[0];
const listing2 = listings[1];

// Calculate distance between two listings
const distance = listing1.distanceTo(listing2);
console.log(`Distance: ${distance.toFixed(2)} km`);

// Calculate distance to coordinates
const distanceToCoords = listing1.distanceTo([53.3498, -6.2603]); // Dublin city center
console.log(
  `Distance to Dublin city center: ${distanceToCoords.toFixed(2)} km`
);
```

## Error Handling

The library provides custom error types for better error handling:

```typescript
import { DaftError, ValidationError, NetworkError } from "daftlistings-ts";

try {
  const listings = await daft.search();
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation error:", error.message);
  } else if (error instanceof NetworkError) {
    console.error("Network error:", error.message);
  } else if (error instanceof DaftError) {
    console.error("Daft error:", error.message);
  } else {
    console.error("Unknown error:", error);
  }
}
```

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Original Python Library

This TypeScript library is based on the original Python [daftlistings](https://github.com/AnthonyBloomer/daftlistings) library by Anthony Bloomer.
