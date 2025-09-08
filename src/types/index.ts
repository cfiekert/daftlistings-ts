// Core API response types
export interface DaftApiResponse {
  listings: DaftListing[];
  paging: {
    totalResults: number;
    from: number;
    pagesize: number;
  };
}

export interface DaftListing {
  listing: ListingData;
}

export interface ListingData {
  id: string;
  title: string;
  price: string;
  publishDate: number;
  daftShortcode: string;
  sections: string[];
  saleType: string;
  category: string;
  featuredLevel: number;
  point: {
    coordinates: [number, number]; // [longitude, latitude]
  };
  seller: {
    sellerId: string;
    name: string;
    branch: string;
    sellerType: string;
  };
  seoFriendlyPath: string;
  media: {
    images: ImageData[];
    totalImages: number;
    hasVideo: boolean;
    hasVirtualTour: boolean;
    hasBrochure: boolean;
    brochure?: BrochureData;
  };
  ber: {
    rating: string;
  };
  propertyType?: string;
  numBedrooms?: string;
  numBathrooms?: string;
  floorArea?: {
    value: number;
    unit: string;
  };
  prs?: {
    subUnits: SubUnitData[];
  };
  newHome?: {
    subUnits: SubUnitData[];
  };
}

export interface SubUnitData {
  propertyType?: string;
  numBedrooms?: string;
  numBathrooms?: string;
  price?: string;
  [key: string]: any;
}

export interface ImageData {
  id: string;
  url: string;
  caption?: string;
}

export interface BrochureData {
  id: string;
  url: string;
}

// Search filter types
export interface Filter {
  name: string;
  values: (string | boolean)[];
}

export interface RangeFilter {
  name: string;
  from: string;
  to: string;
}

export interface GeoFilter {
  storedShapeIds: string[];
  geoSearchType: "STORED_SHAPES";
}

export interface SearchPayload {
  section?: string;
  filters?: Filter[];
  andFilters?: Filter[];
  ranges?: RangeFilter[];
  geoFilter?: GeoFilter;
  sort?: string;
  paging: {
    from: string;
    pagesize: string;
  };
}

// Location data
export interface LocationData {
  id: string;
  displayName: string;
  displayValue: string;
}

// Mapping data for visualization
export interface MappingData {
  monthly_price: number | string;
  latitude: number;
  longitude: number;
  bedrooms: string;
  bathrooms: string;
  daft_link: string;
}

// Distance calculation types
export type Coordinate = [number, number]; // [latitude, longitude]
export type DistanceUnit = "km" | "miles";

// Error types
export class DaftError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = "DaftError";
  }
}

export class ValidationError extends DaftError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

export class NetworkError extends DaftError {
  constructor(message: string) {
    super(message, "NETWORK_ERROR");
    this.name = "NetworkError";
  }
}
