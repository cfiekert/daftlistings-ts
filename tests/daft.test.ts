import { Daft, SearchType, PropertyType, Location } from "../src";

describe("Daft", () => {
  let daft: Daft;

  beforeEach(() => {
    daft = new Daft();
  });

  test("should create a new Daft instance", () => {
    expect(daft).toBeInstanceOf(Daft);
    expect(daft.totalResults).toBe(0);
  });

  test("should set search type", () => {
    daft.setSearchType(SearchType.RESIDENTIAL_RENT);
    // Note: We can't easily test private properties, but we can test that no error is thrown
    expect(() => daft.setSearchType(SearchType.RESIDENTIAL_RENT)).not.toThrow();
  });

  test("should set property type", () => {
    expect(() => daft.setPropertyType(PropertyType.APARTMENT)).not.toThrow();
  });

  test("should set location", () => {
    expect(() => daft.setLocation(Location.DUBLIN_2_DUBLIN)).not.toThrow();
    expect(() => daft.setLocation("Dublin")).not.toThrow();
  });

  test("should set price range", () => {
    daft.setSearchType(SearchType.RESIDENTIAL_RENT);
    expect(() => daft.setMinPrice(1000)).not.toThrow();
    expect(() => daft.setMaxPrice(2000)).not.toThrow();
  });

  test("should throw error when setting price without search type", () => {
    expect(() => daft.setMinPrice(1000)).toThrow(
      "Must set search_type before price."
    );
    expect(() => daft.setMaxPrice(2000)).toThrow(
      "Must set search_type before price."
    );
  });

  test("should set bed and bath counts", () => {
    expect(() => daft.setMinBeds(2)).not.toThrow();
    expect(() => daft.setMaxBeds(3)).not.toThrow();
    expect(() => daft.setMinBaths(1)).not.toThrow();
    expect(() => daft.setMaxBaths(2)).not.toThrow();
  });
});
