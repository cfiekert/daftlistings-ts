// Search Types
export enum SearchType {
  RESIDENTIAL_SALE = "residential-for-sale",
  RESIDENTIAL_RENT = "residential-to-rent",
  COMMERCIAL_SALE = "commercial-for-sale",
  COMMERCIAL_RENT = "commercial-for-rent",
  SHARING = "sharing",
  STUDENT_ACCOMMODATION = "student-accommodation-to-share",
  NEW_HOMES = "new-homes",
}

// Property Types
export enum PropertyType {
  HOUSE = "houses",
  DETACHED_HOUSE = "detached-houses",
  SEMI_DETACHED_HOUSE = "semi-detached-houses",
  TERRACED_HOUSE = "terraced-houses",
  END_OF_TERRACE_HOUSE = "end-of-terrace-houses",
  TOWNHOUSE = "townhouses",
  DUPLEX = "duplexes",
  BUNGALOW = "bungalows",
  APARTMENT = "apartments",
  STUDIO_APARTMENT = "studio-apartments",
  SITE = "sites",
  OFFICE_SPACE = "office-spaces",
  RETAIL_UNIT = "retail-units",
  INDUSTRIAL_UNIT = "industrial-units",
  INDUSTRIAL_SITES = "industrial-sites",
  RESTAURANTS_BARS_HOTELS = "restaurants-bars-hotels",
  COMMERCIAL_SITES = "commercial-sites",
  AGRICULTURAL_LAND = "agricultural-land",
  DEVELOPMENT_LAND = "development-land",
  INVESTMENT_PROPERTY = "investment-properties",
}

// Suitability
export enum SuitableFor {
  MALE = "male",
  FEMALE = "female",
}

// Sort Types
export enum SortType {
  PUBLISH_DATE_DESC = "publishDateDesc",
  PRICE_ASC = "priceAsc",
  PRICE_DESC = "priceDesc",
}

// BER Ratings
export enum Ber {
  A1 = 0,
  A2 = 1,
  A3 = 2,
  B1 = 3,
  B2 = 4,
  B3 = 5,
  C1 = 6,
  C2 = 7,
  C3 = 8,
  D1 = 9,
  D2 = 10,
  E1 = 11,
  E2 = 12,
  F = 13,
  G = 14,
}

// Added Since
export enum AddedSince {
  DAYS_3 = "now-3d/d",
  DAYS_7 = "now-7d/d",
  DAYS_14 = "now-14d/d",
  DAYS_30 = "now-30d/d",
}

// Distance
export enum Distance {
  KM0 = "",
  KM1 = "_1000",
  KM3 = "_3000",
  KM5 = "_5000",
  KM10 = "_10000",
  KM20 = "_20000",
}

// Misc Filters
export enum MiscFilter {
  VIRTUAL_TOUR = "virtual-tour",
  VIDEO = "video",
  AUCTION = "auction",
  AVAILABLE = "published",
  SALE_AGREED = "sale-agreed",
  UNFURNISHED = "unfurnished",
  ALARM = "alarm",
  CENTRAL_HEATING_GAS = "gas-fired-central-heating",
  CENTRAL_HEATING_OIL = "oil-fired-central-heating",
  PARKING = "parking",
  WHEELCHAIR_ACCESS = "wheelchair-access",
  WIRED_FOR_CABLE_TELEVISION = "wired-for-cable-television",
  CAT_5_CABLING = "cat-5-cabling",
  CAT_6_CABLING = "cat-6-data-cabling",
  KITCHEN_AREA = "kitchen-area",
  MEETING_ROOMS = "meeting-rooms",
  RECEPTION = "reception",
  PHONE_LINES = "phone-lines",
  TOILETS = "toilets",
}

// Facility class with validation
export class Facility {
  public readonly value: string;
  public readonly validTypes: SearchType[];

  constructor(value: string, validTypes: SearchType[]) {
    this.value = value;
    this.validTypes = validTypes;
  }

  // Residential facilities
  static readonly ALARM = new Facility("alarm", [
    SearchType.RESIDENTIAL_SALE,
    SearchType.RESIDENTIAL_RENT,
    SearchType.COMMERCIAL_SALE,
    SearchType.COMMERCIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly CENTRAL_HEATING_GAS = new Facility(
    "gas-fired-central-heating",
    [SearchType.RESIDENTIAL_SALE]
  );

  static readonly CENTRAL_HEATING_OIL = new Facility(
    "oil-fired-central-heating",
    [SearchType.RESIDENTIAL_SALE]
  );

  static readonly PARKING = new Facility("parking", [
    SearchType.RESIDENTIAL_SALE,
    SearchType.RESIDENTIAL_RENT,
    SearchType.COMMERCIAL_SALE,
    SearchType.COMMERCIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly WHEELCHAIR_ACCESS = new Facility("wheelchair-access", [
    SearchType.RESIDENTIAL_SALE,
    SearchType.RESIDENTIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly WIRED_FOR_CABLE_TELEVISION = new Facility(
    "wired-for-cable-television",
    [SearchType.RESIDENTIAL_SALE]
  );

  static readonly CABLE_TELEVISION = new Facility("cable-television", [
    SearchType.RESIDENTIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly DISHWASHER = new Facility("dishwasher", [
    SearchType.RESIDENTIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly GARDEN_PATIO_BALCONY = new Facility("garden-patio-balcony", [
    SearchType.RESIDENTIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly CENTRAL_HEATING = new Facility("central-heating", [
    SearchType.RESIDENTIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly INTERNET = new Facility("internet", [
    SearchType.RESIDENTIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly MICROWAVE = new Facility("microwave", [
    SearchType.RESIDENTIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly PETS_ALLOWED = new Facility("pets-allowed", [
    SearchType.RESIDENTIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly SMOKING = new Facility("smoking", [
    SearchType.RESIDENTIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly SERVICED_PROPERTY = new Facility("serviced-property", [
    SearchType.RESIDENTIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly DRYER = new Facility("dryer", [
    SearchType.RESIDENTIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly WASHING_MACHINE = new Facility("washing-machine", [
    SearchType.RESIDENTIAL_RENT,
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  static readonly ENSUITE = new Facility("ensuite", [
    SearchType.SHARING,
    SearchType.STUDENT_ACCOMMODATION,
  ]);

  // Commercial facilities
  static readonly CAT_5_CABLING = new Facility("cat-5-cabling", [
    SearchType.COMMERCIAL_SALE,
    SearchType.COMMERCIAL_RENT,
  ]);

  static readonly CAT_6_CABLING = new Facility("cat-6-data-cabling", [
    SearchType.COMMERCIAL_SALE,
    SearchType.COMMERCIAL_RENT,
  ]);

  static readonly KITCHEN_AREA = new Facility("kitchen-area", [
    SearchType.COMMERCIAL_SALE,
    SearchType.COMMERCIAL_RENT,
  ]);

  static readonly MEETING_ROOMS = new Facility("meeting-rooms", [
    SearchType.COMMERCIAL_SALE,
    SearchType.COMMERCIAL_RENT,
  ]);

  static readonly RECEPTION = new Facility("reception", [
    SearchType.COMMERCIAL_SALE,
    SearchType.COMMERCIAL_RENT,
  ]);

  static readonly PHONE_LINES = new Facility("phone-lines", [
    SearchType.COMMERCIAL_SALE,
    SearchType.COMMERCIAL_RENT,
  ]);

  static readonly TOILETS = new Facility("toilets", [
    SearchType.COMMERCIAL_SALE,
    SearchType.COMMERCIAL_RENT,
  ]);
}
