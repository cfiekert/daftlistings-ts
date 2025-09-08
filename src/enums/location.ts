import { LocationData } from "../types";

export class Location {
  public readonly value: LocationData;

  constructor(value: LocationData) {
    this.value = value;
  }

  static readonly ABBEY_GALWAY = new Location({
    id: "1908",
    displayName: "Abbey, Galway",
    displayValue: "abbey-galway",
  });

  static readonly ABBEYDORNEY_KERRY = new Location({
    id: "2679",
    displayName: "Abbeydorney, Kerry",
    displayValue: "abbeydorney-kerry",
  });

  static readonly ABBEYFEALE_KERRY = new Location({
    id: "2680",
    displayName: "Abbeyfeale, Kerry",
    displayValue: "abbeyfeale-kerry",
  });

  static readonly ABBEYFEALE_LIMERICK = new Location({
    id: "2874",
    displayName: "Abbeyfeale, Limerick",
    displayValue: "abbeyfeale-limerick",
  });

  static readonly ABBEYKNOCKMOY_GALWAY = new Location({
    id: "1909",
    displayName: "Abbeyknockmoy, Galway",
    displayValue: "abbeyknockmoy-galway",
  });

  static readonly ABBEYLARA_LONGFORD = new Location({
    id: "3126",
    displayName: "Abbeylara, Longford",
    displayValue: "abbeylara-longford",
  });

  static readonly ABBEYLEIX_LAOIS = new Location({
    id: "2836",
    displayName: "Abbeyleix, Laois",
    displayValue: "abbeyleix-laois",
  });

  static readonly ABBEYSHRULE_LONGFORD = new Location({
    id: "3127",
    displayName: "Abbeyshrule, Longford",
    displayValue: "abbeyshrule-longford",
  });

  static readonly ABINGTON_LIMERICK = new Location({
    id: "2875",
    displayName: "Abington, Limerick",
    displayValue: "abington-limerick",
  });

  static readonly ACHILL_SOUND_MAYO = new Location({
    id: "3093",
    displayName: "Achill Sound, Mayo",
    displayValue: "achill-sound-mayo",
  });

  static readonly ACHILL_MAYO = new Location({
    id: "3092",
    displayName: "Achill, Mayo",
    displayValue: "achill-mayo",
  });

  static readonly ACHONRY_SLIGO = new Location({
    id: "3472",
    displayName: "Achonry, Sligo",
    displayValue: "achonry-sligo",
  });

  static readonly ACLARE_SLIGO = new Location({
    id: "3473",
    displayName: "Aclare, Sligo",
    displayValue: "aclare-sligo",
  });

  static readonly ADAMSTOWN_DUBLIN = new Location({
    id: "349",
    displayName: "Adamstown, Dublin",
    displayValue: "adamstown-dublin",
  });

  static readonly ADAMSTOWN_WEXFORD = new Location({
    id: "3814",
    displayName: "Adamstown, Wexford",
    displayValue: "adamstown-wexford",
  });

  static readonly ADARE_LIMERICK = new Location({
    id: "2876",
    displayName: "Adare, Limerick",
    displayValue: "adare-limerick",
  });

  static readonly ADRIGOLE_CORK = new Location({
    id: "1683",
    displayName: "Adrigole, Cork",
    displayValue: "adrigole-cork",
  });

  static readonly AGHABOE_LAOIS = new Location({
    id: "2837",
    displayName: "Aghaboe, Laois",
    displayValue: "aghaboe-laois",
  });

  static readonly AGHABOG_MONAGHAN = new Location({
    id: "3339",
    displayName: "Aghabog, Monaghan",
    displayValue: "aghabog-monaghan",
  });

  static readonly AGHABULLOGUE_CORK = new Location({
    id: "1684",
    displayName: "Aghabullogue, Cork",
    displayValue: "aghabullogue-cork",
  });

  static readonly AGHACASHEL_LEITRIM = new Location({
    id: "2298",
    displayName: "Aghacashel, Leitrim",
    displayValue: "aghacashel-leitrim",
  });

  static readonly AGHADA_CORK = new Location({
    id: "1685",
    displayName: "Aghada, Cork",
    displayValue: "aghada-cork",
  });

  static readonly AGHADIFFIN_MAYO = new Location({
    id: "3145",
    displayName: "Aghadiffin, Mayo",
    displayValue: "aghadiffin-mayo",
  });

  static readonly AGHADOE_KERRY = new Location({
    id: "2681",
    displayName: "Aghadoe, Kerry",
    displayValue: "aghadoe-kerry",
  });

  static readonly AGHADOON_MAYO = new Location({
    id: "3146",
    displayName: "Aghadoon, Mayo",
    displayValue: "aghadoon-mayo",
  });

  static readonly AGHADOWEY_DERRY = new Location({
    id: "491",
    displayName: "Aghadowey, Derry",
    displayValue: "aghadowey-derry",
  });

  static readonly AGHAGALLON_ANTRIM = new Location({
    id: "1258",
    displayName: "Aghagallon, Antrim",
    displayValue: "aghagallon-antrim",
  });

  static readonly AGHAGOWER_MAYO = new Location({
    id: "3147",
    displayName: "Aghagower, Mayo",
    displayValue: "aghagower-mayo",
  });

  static readonly AGHALEE_ANTRIM = new Location({
    id: "1259",
    displayName: "Aghalee, Antrim",
    displayValue: "aghalee-antrim",
  });

  static readonly AGHAMORE_LEITRIM = new Location({
    id: "848",
    displayName: "Aghamore, Leitrim",
    displayValue: "aghamore-leitrim",
  });

  static readonly AGHAMORE_MAYO = new Location({
    id: "3148",
    displayName: "Aghamore, Mayo",
    displayValue: "aghamore-mayo",
  });

  static readonly AGHAVILLE_CORK = new Location({
    id: "338",
    displayName: "Aghaville, Cork",
    displayValue: "aghaville-cork",
  });

  static readonly AGHLEAM_MAYO = new Location({
    id: "3171",
    displayName: "Aghleam, Mayo",
    displayValue: "aghleam-mayo",
  });

  static readonly AGHNABLANEY_FERMANAGH = new Location({
    id: "2177",
    displayName: "Aghnablaney, Fermanagh",
    displayValue: "aghnablaney-fermanagh",
  });

  static readonly AGHOWLE_WICKLOW = new Location({
    id: "3967",
    displayName: "Aghowle, Wicklow",
    displayValue: "aghowle-wicklow",
  });

  static readonly AGLISH_TIPPERARY = new Location({
    id: "3407",
    displayName: "Aglish, Tipperary",
    displayValue: "aglish-tipperary",
  });

  static readonly AGLISH_WATERFORD = new Location({
    id: "1934",
    displayName: "Aglish, Waterford",
    displayValue: "aglish-waterford",
  });

  static readonly AHAKISTA_CORK = new Location({
    id: "1686",
    displayName: "Ahakista, Cork",
    displayValue: "ahakista-cork",
  });

  static readonly AHANE_LIMERICK = new Location({
    id: "2877",
    displayName: "Ahane, Limerick",
    displayValue: "ahane-limerick",
  });

  static readonly AHARNEY_OFFALY = new Location({
    id: "598",
    displayName: "Aharney, Offaly",
    displayValue: "aharney-offaly",
  });

  static readonly AHASCRAGH_GALWAY = new Location({
    id: "1910",
    displayName: "Ahascragh, Galway",
    displayValue: "ahascragh-galway",
  });

  static readonly AHENNY_TIPPERARY = new Location({
    id: "3408",
    displayName: "Ahenny, Tipperary",
    displayValue: "ahenny-tipperary",
  });

  static readonly AHERLA_CORK = new Location({
    id: "1687",
    displayName: "Aherla, Cork",
    displayValue: "aherla-cork",
  });

  static readonly AHERLOW_TIPPERARY = new Location({
    id: "3480",
    displayName: "Aherlow, Tipperary",
    displayValue: "aherlow-tipperary",
  });

  static readonly AHOGHILL_ANTRIM = new Location({
    id: "1260",
    displayName: "Ahoghill, Antrim",
    displayValue: "ahoghill-antrim",
  });

  static readonly AILLE_GALWAY = new Location({
    id: "670",
    displayName: "Aille, Galway",
    displayValue: "aille-galway",
  });

  static readonly ALBERTBRIDGE_ROAD_DOWN = new Location({
    id: "1761",
    displayName: "Albertbridge road, Down",
    displayValue: "albertbridge-road-down",
  });

  static readonly ALDERGROVE_ANTRIM = new Location({
    id: "1261",
    displayName: "Aldergrove, Antrim",
    displayValue: "aldergrove-antrim",
  });

  static readonly ALL_HALLOWS_COLLEGE_DUBLIN = new Location({
    id: "4313",
    displayName: "All Hallows College, Dublin",
    displayValue: "all-hallows-college-dublin",
  });

  static readonly ALLEN_KILDARE = new Location({
    id: "2486",
    displayName: "Allen, Kildare",
    displayValue: "allen-kildare",
  });

  static readonly ALLENWOOD_KILDARE = new Location({
    id: "2487",
    displayName: "Allenwood, Kildare",
    displayValue: "allenwood-kildare",
  });

  static readonly ALLIHIES_CORK = new Location({
    id: "1688",
    displayName: "Allihies, Cork",
    displayValue: "allihies-cork",
  });

  static readonly ALLOON_LOWER_GALWAY = new Location({
    id: "656",
    displayName: "Alloon Lower, Galway",
    displayValue: "alloon-lower-galway",
  });

  static readonly ALTAGOWLAN_ROSCOMMON = new Location({
    id: "3387",
    displayName: "Altagowlan, Roscommon",
    displayValue: "altagowlan-roscommon",
  });

  static readonly ALTNAPASTE_DONEGAL = new Location({
    id: "1300",
    displayName: "Altnapaste, Donegal",
    displayValue: "altnapaste-donegal",
  });

  static readonly AMERICAN_COLLEGE_DUBLIN_DUBLIN = new Location({
    id: "4314",
    displayName: "American College Dublin, Dublin",
    displayValue: "american-college-dublin-dublin",
  });

  static readonly AN_GEATA_MOR_MAYO = new Location({
    id: "951",
    displayName: "An Geata Mor, Mayo",
    displayValue: "an-geata-mor-mayo",
  });

  static readonly ANASCAUL_KERRY = new Location({
    id: "2682",
    displayName: "Anascaul, Kerry",
    displayValue: "anascaul-kerry",
  });

  static readonly ANDERSONSTOWN_ANTRIM = new Location({
    id: "1262",
    displayName: "Andersonstown, Antrim",
    displayValue: "andersonstown-antrim",
  });

  static readonly ANGLESBORO_LIMERICK = new Location({
    id: "2878",
    displayName: "Anglesboro, Limerick",
    displayValue: "anglesboro-limerick",
  });

  static readonly ANNACARRIGA_CLARE = new Location({
    id: "268",
    displayName: "Annacarriga, Clare",
    displayValue: "annacarriga-clare",
  });

  static readonly ANNACARTY_TIPPERARY = new Location({
    id: "3481",
    displayName: "Annacarty, Tipperary",
    displayValue: "annacarty-tipperary",
  });

  static readonly ANNACLONE_DOWN = new Location({
    id: "621",
    displayName: "Annaclone, Down",
    displayValue: "annaclone-down",
  });

  static readonly ANNACLOY_DOWN = new Location({
    id: "622",
    displayName: "Annacloy, Down",
    displayValue: "annacloy-down",
  });

  static readonly ANNACOTTY_LIMERICK = new Location({
    id: "2879",
    displayName: "Annacotty, Limerick",
    displayValue: "annacotty-limerick",
  });

  static readonly ANNADALE_ANTRIM = new Location({
    id: "1263",
    displayName: "Annadale, Antrim",
    displayValue: "annadale-antrim",
  });

  static readonly ANNADUFF_LEITRIM = new Location({
    id: "2299",
    displayName: "Annaduff, Leitrim",
    displayValue: "annaduff-leitrim",
  });

  static readonly ANNAGASSAN_LOUTH = new Location({
    id: "3009",
    displayName: "Annagassan, Louth",
    displayValue: "annagassan-louth",
  });

  static readonly ANNAGHDOWN_GALWAY = new Location({
    id: "2326",
    displayName: "Annaghdown, Galway",
    displayValue: "annaghdown-galway",
  });

  static readonly ANNAGRY_DONEGAL = new Location({
    id: "1301",
    displayName: "Annagry, Donegal",
    displayValue: "annagry-donegal",
  });

  static readonly ANNAHILT_DOWN = new Location({
    id: "1762",
    displayName: "Annahilt, Down",
    displayValue: "annahilt-down",
  });

  static readonly ANNALLONG_DOWN = new Location({
    id: "1763",
    displayName: "Annallong, Down",
    displayValue: "annallong-down",
  });

  static readonly ANNAMOE_WICKLOW = new Location({
    id: "3968",
    displayName: "Annamoe, Wicklow",
    displayValue: "annamoe-wicklow",
  });

  static readonly ANNAYALLA_MONAGHAN = new Location({
    id: "3340",
    displayName: "Annayalla, Monaghan",
    displayValue: "annayalla-monaghan",
  });

  static readonly ANNESTOWN_WATERFORD = new Location({
    id: "1935",
    displayName: "Annestown, Waterford",
    displayValue: "annestown-waterford",
  });

  static readonly ANNFIELD_TIPPERARY = new Location({
    id: "3482",
    displayName: "Annfield, Tipperary",
    displayValue: "annfield-tipperary",
  });

  static readonly ANTRIM_ROAD_ANTRIM = new Location({
    id: "1265",
    displayName: "Antrim Road, Antrim",
    displayValue: "antrim-road-antrim",
  });

  static readonly ANTRIM_ANTRIM = new Location({
    id: "1264",
    displayName: "Antrim, Antrim",
    displayValue: "antrim-antrim",
  });

  static readonly ARAGLIN_CORK = new Location({
    id: "1689",
    displayName: "Araglin, Cork",
    displayValue: "araglin-cork",
  });

  static readonly ARAN_ISLANDS_GALWAY = new Location({
    id: "658",
    displayName: "Aran Islands, Galway",
    displayValue: "aran-islands-galway",
  });

  static readonly ARBOUR_HILL_DUBLIN = new Location({
    id: "2035",
    displayName: "Arbour Hill, Dublin",
    displayValue: "arbour-hill-dublin",
  });

  static readonly ARCHERSTOWN_WESTMEATH = new Location({
    id: "3724",
    displayName: "Archerstown, Westmeath",
    displayValue: "archerstown-westmeath",
  });

  static readonly ARD_NA_GREINE_DUBLIN = new Location({
    id: "677",
    displayName: "Ard Na Greine, Dublin",
    displayValue: "ard-na-greine-dublin",
  });

  static readonly ARD_GALWAY = new Location({
    id: "2327",
    displayName: "Ard, Galway",
    displayValue: "ard-galway",
  });

  static readonly ARDAGH_DONEGAL = new Location({
    id: "1339",
    displayName: "Ardagh, Donegal",
    displayValue: "ardagh-donegal",
  });

  static readonly ARDAGH_LIMERICK = new Location({
    id: "2880",
    displayName: "Ardagh, Limerick",
    displayValue: "ardagh-limerick",
  });

  static readonly ARDAGH_LONGFORD = new Location({
    id: "3128",
    displayName: "Ardagh, Longford",
    displayValue: "ardagh-longford",
  });

  static readonly ARDAMINE_WEXFORD = new Location({
    id: "3815",
    displayName: "Ardamine, Wexford",
    displayValue: "ardamine-wexford",
  });

  static readonly ARDAN_OFFALY = new Location({
    id: "1159",
    displayName: "Ardan, Offaly",
    displayValue: "ardan-offaly",
  });

  static readonly ARDANAIRY_WICKLOW = new Location({
    id: "1328",
    displayName: "Ardanairy, Wicklow",
    displayValue: "ardanairy-wicklow",
  });

  static readonly ARDANEW_MEATH = new Location({
    id: "1037",
    displayName: "Ardanew, Meath",
    displayValue: "ardanew-meath",
  });

  static readonly ARDARA_DONEGAL = new Location({
    id: "1340",
    displayName: "Ardara, Donegal",
    displayValue: "ardara-donegal",
  });

  static readonly ARDATTIN_CARLOW = new Location({
    id: "1809",
    displayName: "Ardattin, Carlow",
    displayValue: "ardattin-carlow",
  });

  static readonly ARDBOE_TYRONE = new Location({
    id: "3644",
    displayName: "Ardboe, Tyrone",
    displayValue: "ardboe-tyrone",
  });

  static readonly ARDCATH_MEATH = new Location({
    id: "3281",
    displayName: "Ardcath, Meath",
    displayValue: "ardcath-meath",
  });

  static readonly ARDCLOON_GALWAY = new Location({
    id: "671",
    displayName: "Ardcloon, Galway",
    displayValue: "ardcloon-galway",
  });

  static readonly ARDCRONY_TIPPERARY = new Location({
    id: "3483",
    displayName: "Ardcrony, Tipperary",
    displayValue: "ardcrony-tipperary",
  });

  static readonly ARDEA_KERRY = new Location({
    id: "2683",
    displayName: "Ardea, Kerry",
    displayValue: "ardea-kerry",
  });

  static readonly ARDEE_AND_SURROUNDS_LOUTH = new Location({
    id: "4055",
    displayName: "Ardee (& Surrounds), Louth",
    displayValue: "ardee-and-surrounds-louth",
  });

  static readonly ARDEE_LOUTH = new Location({
    id: "3010",
    displayName: "Ardee, Louth",
    displayValue: "ardee-louth",
  });

  static readonly ARDFERT_KERRY = new Location({
    id: "2684",
    displayName: "Ardfert, Kerry",
    displayValue: "ardfert-kerry",
  });

  static readonly ARDFIELD_CORK = new Location({
    id: "1690",
    displayName: "Ardfield, Cork",
    displayValue: "ardfield-cork",
  });

  static readonly ARDFINNAN_TIPPERARY = new Location({
    id: "3484",
    displayName: "Ardfinnan, Tipperary",
    displayValue: "ardfinnan-tipperary",
  });

  static readonly ARDGEHANE_CORK = new Location({
    id: "326",
    displayName: "Ardgehane, Cork",
    displayValue: "ardgehane-cork",
  });

  static readonly ARDGLASS_CORK = new Location({
    id: "327",
    displayName: "Ardglass, Cork",
    displayValue: "ardglass-cork",
  });

  static readonly ARDGLASS_DOWN = new Location({
    id: "1764",
    displayName: "Ardglass, Down",
    displayValue: "ardglass-down",
  });

  static readonly ARDGROOM_CORK = new Location({
    id: "1691",
    displayName: "Ardgroom, Cork",
    displayValue: "ardgroom-cork",
  });

  static readonly ARDKEEN_DOWN = new Location({
    id: "1765",
    displayName: "Ardkeen, Down",
    displayValue: "ardkeen-down",
  });

  static readonly ARDKEEN_WATERFORD = new Location({
    id: "161",
    displayName: "Ardkeen, Waterford",
    displayValue: "ardkeen-waterford",
  });

  static readonly ARDLEA_LAOIS = new Location({
    id: "2838",
    displayName: "Ardlea, Laois",
    displayValue: "ardlea-laois",
  });

  static readonly ARDLOUGHER_CAVAN = new Location({
    id: "227",
    displayName: "Ardlougher, Cavan",
    displayValue: "ardlougher-cavan",
  });

  static readonly ARDMILLAN_DOWN = new Location({
    id: "2034",
    displayName: "Ardmillan, Down",
    displayValue: "ardmillan-down",
  });

  static readonly ARDMORE_DERRY = new Location({
    id: "492",
    displayName: "Ardmore, Derry",
    displayValue: "ardmore-derry",
  });

  static readonly ARDMORE_GALWAY = new Location({
    id: "672",
    displayName: "Ardmore, Galway",
    displayValue: "ardmore-galway",
  });

  static readonly ARDMORE_WATERFORD = new Location({
    id: "1936",
    displayName: "Ardmore, Waterford",
    displayValue: "ardmore-waterford",
  });

  static readonly ARDMORNEY_WESTMEATH = new Location({
    id: "3725",
    displayName: "Ardmorney, Westmeath",
    displayValue: "ardmorney-westmeath",
  });

  static readonly ARDMOY_SLIGO = new Location({
    id: "3474",
    displayName: "Ardmoy, Sligo",
    displayValue: "ardmoy-sligo",
  });

  static readonly ARDNACRUSHA_CLARE = new Location({
    id: "1542",
    displayName: "Ardnacrusha, Clare",
    displayValue: "ardnacrusha-clare",
  });

  static readonly ARDNADOMAN_GALWAY = new Location({
    id: "673",
    displayName: "Ardnadoman, Galway",
    displayValue: "ardnadoman-galway",
  });

  static readonly ARDNAGREEVAGH_GALWAY = new Location({
    id: "674",
    displayName: "Ardnagreevagh, Galway",
    displayValue: "ardnagreevagh-galway",
  });

  static readonly ARDNASODAN_GALWAY = new Location({
    id: "2328",
    displayName: "Ardnasodan, Galway",
    displayValue: "ardnasodan-galway",
  });

  static readonly ARDOYNE_ANTRIM = new Location({
    id: "267",
    displayName: "Ardoyne, Antrim",
    displayValue: "ardoyne-antrim",
  });

  static readonly ARDPATRICK_LIMERICK = new Location({
    id: "2881",
    displayName: "Ardpatrick, Limerick",
    displayValue: "ardpatrick-limerick",
  });

  static readonly ARDRAHAN_GALWAY = new Location({
    id: "2329",
    displayName: "Ardrahan, Galway",
    displayValue: "ardrahan-galway",
  });

  static readonly ARDSCULL_KILDARE = new Location({
    id: "2488",
    displayName: "Ardscull, Kildare",
    displayValue: "ardscull-kildare",
  });

  static readonly ARDSHANKILL_FERMANAGH = new Location({
    id: "2178",
    displayName: "Ardshankill, Fermanagh",
    displayValue: "ardshankill-fermanagh",
  });

  static readonly ARIGNA_ROSCOMMON = new Location({
    id: "3388",
    displayName: "Arigna, Roscommon",
    displayValue: "arigna-roscommon",
  });

  static readonly ARKLOW_AND_SURROUNDS_WICKLOW = new Location({
    id: "4056",
    displayName: "Arklow (& Surrounds), Wicklow",
    displayValue: "arklow-and-surrounds-wicklow",
  });

  static readonly ARKLOW_WICKLOW = new Location({
    id: "3969",
    displayName: "Arklow, Wicklow",
    displayValue: "arklow-wicklow",
  });

  static readonly ARLESS_LAOIS = new Location({
    id: "841",
    displayName: "Arless, Laois",
    displayValue: "arless-laois",
  });

  static readonly ARMAGH_ARMAGH = new Location({
    id: "1460",
    displayName: "Armagh, Armagh",
    displayValue: "armagh-armagh",
  });

  static readonly ARMOY_ANTRIM = new Location({
    id: "153",
    displayName: "Armoy, Antrim",
    displayValue: "armoy-antrim",
  });

  static readonly ARRANMORE_DONEGAL = new Location({
    id: "1341",
    displayName: "Arranmore, Donegal",
    displayValue: "arranmore-donegal",
  });

  static readonly ARRYHEERNABIN_DONEGAL = new Location({
    id: "511",
    displayName: "Arryheernabin, Donegal",
    displayValue: "arryheernabin-donegal",
  });

  static readonly ARTANE_DUBLIN = new Location({
    id: "1863",
    displayName: "Artane, Dublin",
    displayValue: "artane-dublin",
  });

  static readonly ARTHURSTOWN_WEXFORD = new Location({
    id: "3816",
    displayName: "Arthurstown, Wexford",
    displayValue: "arthurstown-wexford",
  });

  static readonly ARTICLAVE_DERRY = new Location({
    id: "493",
    displayName: "Articlave, Derry",
    displayValue: "articlave-derry",
  });

  static readonly ARTIGARVAN_TYRONE = new Location({
    id: "3645",
    displayName: "Artigarvan, Tyrone",
    displayValue: "artigarvan-tyrone",
  });

  static readonly ARVA_CAVAN = new Location({
    id: "1492",
    displayName: "Arva, Cavan",
    displayValue: "arva-cavan",
  });

  static readonly ASHBOURNE_AND_SURROUNDS_MEATH = new Location({
    id: "4057",
    displayName: "Ashbourne (& Surrounds), Meath",
    displayValue: "ashbourne-and-surrounds-meath",
  });

  static readonly ASHBOURNE_MEATH = new Location({
    id: "3282",
    displayName: "Ashbourne, Meath",
    displayValue: "ashbourne-meath",
  });

  static readonly ASHFORD_LIMERICK = new Location({
    id: "2882",
    displayName: "Ashford, Limerick",
    displayValue: "ashford-limerick",
  });

  static readonly ASHFORD_WICKLOW = new Location({
    id: "3970",
    displayName: "Ashford, Wicklow",
    displayValue: "ashford-wicklow",
  });

  static readonly ASHINGTON_DUBLIN = new Location({
    id: "2039",
    displayName: "Ashington, Dublin",
    displayValue: "ashington-dublin",
  });

  static readonly ASHTON_CORK = new Location({
    id: "1122",
    displayName: "Ashton, Cork",
    displayValue: "ashton-cork",
  });

  static readonly ASHTOWN_DUBLIN = new Location({
    id: "2040",
    displayName: "Ashtown, Dublin",
    displayValue: "ashtown-dublin",
  });

  static readonly ASKAMORE_WEXFORD = new Location({
    id: "3817",
    displayName: "Askamore, Wexford",
    displayValue: "askamore-wexford",
  });

  static readonly ASKANAGAP_WICKLOW = new Location({
    id: "3971",
    displayName: "Askanagap, Wicklow",
    displayValue: "askanagap-wicklow",
  });

  static readonly ASKEATON_LIMERICK = new Location({
    id: "2883",
    displayName: "Askeaton, Limerick",
    displayValue: "askeaton-limerick",
  });

  static readonly ASKILL_LEITRIM = new Location({
    id: "2300",
    displayName: "Askill, Leitrim",
    displayValue: "askill-leitrim",
  });

  static readonly ASTEE_KERRY = new Location({
    id: "2685",
    displayName: "Astee, Kerry",
    displayValue: "astee-kerry",
  });

  static readonly ATHBOY_MEATH = new Location({
    id: "3283",
    displayName: "Athboy, Meath",
    displayValue: "athboy-meath",
  });

  static readonly ATHDOWN_WICKLOW = new Location({
    id: "3972",
    displayName: "Athdown, Wicklow",
    displayValue: "athdown-wicklow",
  });

  static readonly ATHEA_LIMERICK = new Location({
    id: "2884",
    displayName: "Athea, Limerick",
    displayValue: "athea-limerick",
  });

  static readonly ATHENRY_AND_SURROUNDS_GALWAY = new Location({
    id: "4058",
    displayName: "Athenry (& Surrounds), Galway",
    displayValue: "athenry-and-surrounds-galway",
  });

  static readonly ATHENRY_GALWAY = new Location({
    id: "2330",
    displayName: "Athenry, Galway",
    displayValue: "athenry-galway",
  });

  static readonly ATHGARVAN_KILDARE = new Location({
    id: "2489",
    displayName: "Athgarvan, Kildare",
    displayValue: "athgarvan-kildare",
  });

  static readonly ATHLACCA_LIMERICK = new Location({
    id: "2885",
    displayName: "Athlacca, Limerick",
    displayValue: "athlacca-limerick",
  });

  static readonly ATHLEAGUE_ROSCOMMON = new Location({
    id: "3389",
    displayName: "Athleague, Roscommon",
    displayValue: "athleague-roscommon",
  });

  static readonly ATHLONE_AND_SURROUNDS_ROSCOMMON = new Location({
    id: "4059",
    displayName: "Athlone (& Surrounds), Roscommon",
    displayValue: "athlone-and-surrounds-roscommon",
  });

  static readonly ATHLONE_AND_SURROUNDS_WESTMEATH = new Location({
    id: "4060",
    displayName: "Athlone (& Surrounds), Westmeath",
    displayValue: "athlone-and-surrounds-westmeath",
  });

  static readonly ATHLONE_INSTITUTE_OF_TECHNOLOGY_WESTMEATH = new Location({
    id: "4305",
    displayName: "Athlone Institute of Technology, Westmeath",
    displayValue: "athlone-institute-of-technology-westmeath",
  });

  static readonly ATHLONE_ROSCOMMON = new Location({
    id: "3390",
    displayName: "Athlone, Roscommon",
    displayValue: "athlone-roscommon",
  });

  static readonly ATHLONE_WESTMEATH = new Location({
    id: "3749",
    displayName: "Athlone, Westmeath",
    displayValue: "athlone-westmeath",
  });

  static readonly ATHLUMNEY_MEATH = new Location({
    id: "3284",
    displayName: "Athlumney, Meath",
    displayValue: "athlumney-meath",
  });

  static readonly ATHNID_TIPPERARY = new Location({
    id: "1172",
    displayName: "Athnid, Tipperary",
    displayValue: "athnid-tipperary",
  });

  static readonly ATHY_AND_SURROUNDS_KILDARE = new Location({
    id: "4061",
    displayName: "Athy (& Surrounds), Kildare",
    displayValue: "athy-and-surrounds-kildare",
  });

  static readonly ATHY_KILDARE = new Location({
    id: "2490",
    displayName: "Athy, Kildare",
    displayValue: "athy-kildare",
  });

  static readonly ATTAVALLY_MAYO = new Location({
    id: "3140",
    displayName: "Attavally, Mayo",
    displayValue: "attavally-mayo",
  });

  static readonly ATTICAL_DOWN = new Location({
    id: "1784",
    displayName: "Attical, Down",
    displayValue: "attical-down",
  });

  static readonly ATTYMASS_MAYO = new Location({
    id: "3141",
    displayName: "Attymass, Mayo",
    displayValue: "attymass-mayo",
  });

  static readonly ATTYMON_GALWAY = new Location({
    id: "2331",
    displayName: "Attymon, Galway",
    displayValue: "attymon-galway",
  });

  static readonly AUCLOGGEEN_GALWAY = new Location({
    id: "2332",
    displayName: "Aucloggeen, Galway",
    displayValue: "aucloggeen-galway",
  });

  static readonly AUGHA_CARLOW = new Location({
    id: "1810",
    displayName: "Augha, Carlow",
    displayValue: "augha-carlow",
  });

  static readonly AUGHACASHEL_LEITRIM = new Location({
    id: "2301",
    displayName: "Aughacashel, Leitrim",
    displayValue: "aughacashel-leitrim",
  });

  static readonly AUGHACASLA_KERRY = new Location({
    id: "2686",
    displayName: "Aughacasla, Kerry",
    displayValue: "aughacasla-kerry",
  });

  static readonly AUGHAGAULT_DONEGAL = new Location({
    id: "512",
    displayName: "Aughagault, Donegal",
    displayValue: "aughagault-donegal",
  });

  static readonly AUGHAVANNAGH_WICKLOW = new Location({
    id: "3973",
    displayName: "Aughavannagh, Wicklow",
    displayValue: "aughavannagh-wicklow",
  });

  static readonly AUGHAVAS_LEITRIM = new Location({
    id: "2302",
    displayName: "Aughavas, Leitrim",
    displayValue: "aughavas-leitrim",
  });

  static readonly AUGHER_TYRONE = new Location({
    id: "3646",
    displayName: "Augher, Tyrone",
    displayValue: "augher-tyrone",
  });

  static readonly AUGHILS_KERRY = new Location({
    id: "721",
    displayName: "Aughils, Kerry",
    displayValue: "aughils-kerry",
  });

  static readonly AUGHINISH_CLARE = new Location({
    id: "282",
    displayName: "Aughinish, Clare",
    displayValue: "aughinish-clare",
  });

  static readonly AUGHKEELY_DONEGAL = new Location({
    id: "513",
    displayName: "Aughkeely, Donegal",
    displayValue: "aughkeely-donegal",
  });

  static readonly AUGHNACLIFFE_LONGFORD = new Location({
    id: "3129",
    displayName: "Aughnacliffe, Longford",
    displayValue: "aughnacliffe-longford",
  });

  static readonly AUGHNACLOY_TYRONE = new Location({
    id: "3647",
    displayName: "Aughnacloy, Tyrone",
    displayValue: "aughnacloy-tyrone",
  });

  static readonly AUGHNAMULLEN_MONAGHAN = new Location({
    id: "3341",
    displayName: "Aughnamullen, Monaghan",
    displayValue: "aughnamullen-monaghan",
  });

  static readonly AUGHNASHEELAN_LEITRIM = new Location({
    id: "2303",
    displayName: "Aughnasheelan, Leitrim",
    displayValue: "aughnasheelan-leitrim",
  });

  static readonly AUGHRIM_GALWAY = new Location({
    id: "2333",
    displayName: "Aughrim, Galway",
    displayValue: "aughrim-galway",
  });

  static readonly AUGHRIM_WICKLOW = new Location({
    id: "3974",
    displayName: "Aughrim, Wicklow",
    displayValue: "aughrim-wicklow",
  });

  static readonly AUGHRIS_SLIGO = new Location({
    id: "3475",
    displayName: "Aughris, Sligo",
    displayValue: "aughris-sligo",
  });

  static readonly AUGHRUS_MORE_GALWAY = new Location({
    id: "2334",
    displayName: "Aughrus More, Galway",
    displayValue: "aughrus-more-galway",
  });

  static readonly AVOCA_WICKLOW = new Location({
    id: "3975",
    displayName: "Avoca, Wicklow",
    displayValue: "avoca-wicklow",
  });

  static readonly AYLESBURY_DUBLIN = new Location({
    id: "2041",
    displayName: "Aylesbury, Dublin",
    displayValue: "aylesbury-dublin",
  });

  static readonly AYRFIELD_DUBLIN = new Location({
    id: "2044",
    displayName: "Ayrfield, Dublin",
    displayValue: "ayrfield-dublin",
  });

  static readonly BAGENALSTOWN_CARLOW = new Location({
    id: "1811",
    displayName: "Bagenalstown, Carlow",
    displayValue: "bagenalstown-carlow",
  });

  static readonly BAILIEBOROUGH_AND_SURROUNDS_CAVAN = new Location({
    id: "4062",
    displayName: "Bailieborough (& Surrounds), Cavan",
    displayValue: "bailieborough-and-surrounds-cavan",
  });

  static readonly BAILIEBOROUGH_CAVAN = new Location({
    id: "1802",
    displayName: "Bailieborough, Cavan",
    displayValue: "bailieborough-cavan",
  });

  static readonly BALBRIGGAN_AND_SURROUNDS_DUBLIN = new Location({
    id: "4063",
    displayName: "Balbriggan (& Surrounds), Dublin",
    displayValue: "balbriggan-and-surrounds-dublin",
  });

  static readonly BALBRIGGAN_DUBLIN = new Location({
    id: "2045",
    displayName: "Balbriggan, Dublin",
    displayValue: "balbriggan-dublin",
  });

  static readonly BALDONNELL_DUBLIN = new Location({
    id: "2046",
    displayName: "Baldonnell, Dublin",
    displayValue: "baldonnell-dublin",
  });

  static readonly BALDOYLE_DUBLIN = new Location({
    id: "2047",
    displayName: "Baldoyle, Dublin",
    displayValue: "baldoyle-dublin",
  });

  static readonly BALDWINSTOWN_WEXFORD = new Location({
    id: "3818",
    displayName: "Baldwinstown, Wexford",
    displayValue: "baldwinstown-wexford",
  });

  static readonly BALGRIFFIN_DUBLIN = new Location({
    id: "2048",
    displayName: "Balgriffin, Dublin",
    displayValue: "balgriffin-dublin",
  });

  static readonly BALLA_MAYO = new Location({
    id: "3142",
    displayName: "Balla, Mayo",
    displayValue: "balla-mayo",
  });

  static readonly BALLACOLLA_LAOIS = new Location({
    id: "2840",
    displayName: "Ballacolla, Laois",
    displayValue: "ballacolla-laois",
  });

  static readonly BALLAGH_FERMANAGH = new Location({
    id: "1105",
    displayName: "Ballagh, Fermanagh",
    displayValue: "ballagh-fermanagh",
  });

  static readonly BALLAGH_GALWAY = new Location({
    id: "2342",
    displayName: "Ballagh, Galway",
    displayValue: "ballagh-galway",
  });

  static readonly BALLAGH_LIMERICK = new Location({
    id: "2886",
    displayName: "Ballagh, Limerick",
    displayValue: "ballagh-limerick",
  });

  static readonly BALLAGH_ROSCOMMON = new Location({
    id: "3391",
    displayName: "Ballagh, Roscommon",
    displayValue: "ballagh-roscommon",
  });

  static readonly BALLAGH_TIPPERARY = new Location({
    id: "3485",
    displayName: "Ballagh, Tipperary",
    displayValue: "ballagh-tipperary",
  });

  static readonly BALLAGHADERREEN_ROSCOMMON = new Location({
    id: "3392",
    displayName: "Ballaghaderreen, Roscommon",
    displayValue: "ballaghaderreen-roscommon",
  });

  static readonly BALLAGHBEHY_LIMERICK = new Location({
    id: "2887",
    displayName: "Ballaghbehy, Limerick",
    displayValue: "ballaghbehy-limerick",
  });

  static readonly BALLAGHKEEN_WEXFORD = new Location({
    id: "3819",
    displayName: "Ballaghkeen, Wexford",
    displayValue: "ballaghkeen-wexford",
  });

  static readonly BALLAGHMORE_LAOIS = new Location({
    id: "2841",
    displayName: "Ballaghmore, Laois",
    displayValue: "ballaghmore-laois",
  });

  static readonly BALLAGHNATRILLICK_SLIGO = new Location({
    id: "3476",
    displayName: "Ballaghnatrillick, Sligo",
    displayValue: "ballaghnatrillick-sligo",
  });

  static readonly BALLARD_GALWAY = new Location({
    id: "2357",
    displayName: "Ballard, Galway",
    displayValue: "ballard-galway",
  });

  static readonly BALLARD_WICKLOW = new Location({
    id: "3976",
    displayName: "Ballard, Wicklow",
    displayValue: "ballard-wicklow",
  });

  static readonly BALLARDIGGAN_GALWAY = new Location({
    id: "2358",
    displayName: "Ballardiggan, Galway",
    displayValue: "ballardiggan-galway",
  });

  static readonly BALLEEN_KILKENNY = new Location({
    id: "2762",
    displayName: "Balleen, Kilkenny",
    displayValue: "balleen-kilkenny",
  });

  static readonly BALLICKMOYLER_LAOIS = new Location({
    id: "2842",
    displayName: "Ballickmoyler, Laois",
    displayValue: "ballickmoyler-laois",
  });

  static readonly BALLINA_AND_SURROUNDS_MAYO = new Location({
    id: "4064",
    displayName: "Ballina (& Surrounds), Mayo",
    displayValue: "ballina-and-surrounds-mayo",
  });

  static readonly BALLINA_MAYO = new Location({
    id: "3143",
    displayName: "Ballina, Mayo",
    displayValue: "ballina-mayo",
  });

  static readonly BALLINA_TIPPERARY = new Location({
    id: "3486",
    displayName: "Ballina, Tipperary",
    displayValue: "ballina-tipperary",
  });

  static readonly BALLINABARNA_WEXFORD = new Location({
    id: "1248",
    displayName: "Ballinabarna, Wexford",
    displayValue: "ballinabarna-wexford",
  });

  static readonly BALLINABOOLA_WEXFORD = new Location({
    id: "3820",
    displayName: "Ballinaboola, Wexford",
    displayValue: "ballinaboola-wexford",
  });

  static readonly BALLINABOY_GALWAY = new Location({
    id: "2359",
    displayName: "Ballinaboy, Galway",
    displayValue: "ballinaboy-galway",
  });

  static readonly BALLINABRACKEY_MEATH = new Location({
    id: "3285",
    displayName: "Ballinabrackey, Meath",
    displayValue: "ballinabrackey-meath",
  });

  static readonly BALLINABRANAGH_CARLOW = new Location({
    id: "1812",
    displayName: "Ballinabranagh, Carlow",
    displayValue: "ballinabranagh-carlow",
  });

  static readonly BALLINACARROW_SLIGO = new Location({
    id: "3477",
    displayName: "Ballinacarrow, Sligo",
    displayValue: "ballinacarrow-sligo",
  });

  static readonly BALLINACLASH_WICKLOW = new Location({
    id: "3977",
    displayName: "Ballinaclash, Wicklow",
    displayValue: "ballinaclash-wicklow",
  });

  static readonly BALLINACOR_WICKLOW = new Location({
    id: "3978",
    displayName: "Ballinacor, Wicklow",
    displayValue: "ballinacor-wicklow",
  });

  static readonly BALLINACURRA_LIMERICK = new Location({
    id: "2615",
    displayName: "Ballinacurra, Limerick",
    displayValue: "ballinacurra-limerick",
  });

  static readonly BALLINADEE_CORK = new Location({
    id: "1202",
    displayName: "Ballinadee, Cork",
    displayValue: "ballinadee-cork",
  });

  static readonly BALLINAFAD_GALWAY = new Location({
    id: "2360",
    displayName: "Ballinafad, Galway",
    displayValue: "ballinafad-galway",
  });

  static readonly BALLINAFAD_SLIGO = new Location({
    id: "3478",
    displayName: "Ballinafad, Sligo",
    displayValue: "ballinafad-sligo",
  });

  static readonly BALLINAGAR_OFFALY = new Location({
    id: "599",
    displayName: "Ballinagar, Offaly",
    displayValue: "ballinagar-offaly",
  });

  static readonly BALLINAGARE_ROSCOMMON = new Location({
    id: "3393",
    displayName: "Ballinagare, Roscommon",
    displayValue: "ballinagare-roscommon",
  });

  static readonly BALLINAGARRANE_LIMERICK = new Location({
    id: "866",
    displayName: "Ballinagarrane, Limerick",
    displayValue: "ballinagarrane-limerick",
  });

  static readonly BALLINAGH_CAVAN = new Location({
    id: "1803",
    displayName: "Ballinagh, Cavan",
    displayValue: "ballinagh-cavan",
  });

  static readonly BALLINAGLERAGH_LEITRIM = new Location({
    id: "2304",
    displayName: "Ballinagleragh, Leitrim",
    displayValue: "ballinagleragh-leitrim",
  });

  static readonly BALLINAGORE_WESTMEATH = new Location({
    id: "3750",
    displayName: "Ballinagore, Westmeath",
    displayValue: "ballinagore-westmeath",
  });

  static readonly BALLINAHEGLISH_ROSCOMMON = new Location({
    id: "3394",
    displayName: "Ballinaheglish, Roscommon",
    displayValue: "ballinaheglish-roscommon",
  });

  static readonly BALLINAHINCH_TIPPERARY = new Location({
    id: "3508",
    displayName: "Ballinahinch, Tipperary",
    displayValue: "ballinahinch-tipperary",
  });

  static readonly BALLINAHOW_KERRY = new Location({
    id: "2699",
    displayName: "Ballinahow, Kerry",
    displayValue: "ballinahow-kerry",
  });

  static readonly BALLINAHOW_TIPPERARY = new Location({
    id: "3509",
    displayName: "Ballinahow, Tipperary",
    displayValue: "ballinahow-tipperary",
  });

  static readonly BALLINAHOWN_WESTMEATH = new Location({
    id: "3751",
    displayName: "Ballinahown, Westmeath",
    displayValue: "ballinahown-westmeath",
  });

  static readonly BALLINAKILL_KILKENNY = new Location({
    id: "2763",
    displayName: "Ballinakill, Kilkenny",
    displayValue: "ballinakill-kilkenny",
  });

  static readonly BALLINAKILL_LAOIS = new Location({
    id: "2843",
    displayName: "Ballinakill, Laois",
    displayValue: "ballinakill-laois",
  });

  static readonly BALLINALACK_WESTMEATH = new Location({
    id: "3752",
    displayName: "Ballinalack, Westmeath",
    displayValue: "ballinalack-westmeath",
  });

  static readonly BALLINALEA_WICKLOW = new Location({
    id: "3979",
    displayName: "Ballinalea, Wicklow",
    displayValue: "ballinalea-wicklow",
  });

  static readonly BALLINALEE_LONGFORD = new Location({
    id: "3130",
    displayName: "Ballinalee, Longford",
    displayValue: "ballinalee-longford",
  });

  static readonly BALLINAMARA_KILKENNY = new Location({
    id: "2764",
    displayName: "Ballinamara, Kilkenny",
    displayValue: "ballinamara-kilkenny",
  });

  static readonly BALLINAMEEN_ROSCOMMON = new Location({
    id: "3395",
    displayName: "Ballinameen, Roscommon",
    displayValue: "ballinameen-roscommon",
  });

  static readonly BALLINAMONA_WATERFORD = new Location({
    id: "1937",
    displayName: "Ballinamona, Waterford",
    displayValue: "ballinamona-waterford",
  });

  static readonly BALLINAMORE_BRIDGE_GALWAY = new Location({
    id: "2361",
    displayName: "Ballinamore Bridge, Galway",
    displayValue: "ballinamore-bridge-galway",
  });

  static readonly BALLINAMORE_LEITRIM = new Location({
    id: "2305",
    displayName: "Ballinamore, Leitrim",
    displayValue: "ballinamore-leitrim",
  });

  static readonly BALLINAMUCK_LONGFORD = new Location({
    id: "3131",
    displayName: "Ballinamuck, Longford",
    displayValue: "ballinamuck-longford",
  });

  static readonly BALLINAMULT_WATERFORD = new Location({
    id: "1938",
    displayName: "Ballinamult, Waterford",
    displayValue: "ballinamult-waterford",
  });

  static readonly BALLINASCARTY_CORK = new Location({
    id: "1203",
    displayName: "Ballinascarty, Cork",
    displayValue: "ballinascarty-cork",
  });

  static readonly BALLINASCORNEY_DUBLIN = new Location({
    id: "2049",
    displayName: "Ballinascorney, Dublin",
    displayValue: "ballinascorney-dublin",
  });

  static readonly BALLINASLOE_AND_SURROUNDS_GALWAY = new Location({
    id: "4065",
    displayName: "Ballinasloe (& Surrounds), Galway",
    displayValue: "ballinasloe-and-surrounds-galway",
  });

  static readonly BALLINASLOE_GALWAY = new Location({
    id: "2362",
    displayName: "Ballinasloe, Galway",
    displayValue: "ballinasloe-galway",
  });

  static readonly BALLINASPICK_WATERFORD = new Location({
    id: "150",
    displayName: "Ballinaspick, Waterford",
    displayValue: "ballinaspick-waterford",
  });

  static readonly BALLINCLASHET_CORK = new Location({
    id: "339",
    displayName: "Ballinclashet, Cork",
    displayValue: "ballinclashet-cork",
  });

  static readonly BALLINCLEA_WICKLOW = new Location({
    id: "3980",
    displayName: "Ballinclea, Wicklow",
    displayValue: "ballinclea-wicklow",
  });

  static readonly BALLINCLOHER_KERRY = new Location({
    id: "2719",
    displayName: "Ballincloher, Kerry",
    displayValue: "ballincloher-kerry",
  });

  static readonly BALLINCOLLIG_CORK = new Location({
    id: "1204",
    displayName: "Ballincollig, Cork",
    displayValue: "ballincollig-cork",
  });

  static readonly BALLINCREA_KILKENNY = new Location({
    id: "2765",
    displayName: "Ballincrea, Kilkenny",
    displayValue: "ballincrea-kilkenny",
  });

  static readonly BALLINCROKIG_CORK = new Location({
    id: "1205",
    displayName: "Ballincrokig, Cork",
    displayValue: "ballincrokig-cork",
  });

  static readonly BALLINCURRIG_CORK = new Location({
    id: "340",
    displayName: "Ballincurrig, Cork",
    displayValue: "ballincurrig-cork",
  });

  static readonly BALLINDAGGAN_WEXFORD = new Location({
    id: "3821",
    displayName: "Ballindaggan, Wexford",
    displayValue: "ballindaggan-wexford",
  });

  static readonly BALLINDERREEN_GALWAY = new Location({
    id: "2363",
    displayName: "Ballinderreen, Galway",
    displayValue: "ballinderreen-galway",
  });

  static readonly BALLINDERRY_TIPPERARY = new Location({
    id: "3510",
    displayName: "Ballinderry, Tipperary",
    displayValue: "ballinderry-tipperary",
  });

  static readonly BALLINDERRY_WICKLOW = new Location({
    id: "3981",
    displayName: "Ballinderry, Wicklow",
    displayValue: "ballinderry-wicklow",
  });

  static readonly BALLINDINE_MAYO = new Location({
    id: "3144",
    displayName: "Ballindine, Mayo",
    displayValue: "ballindine-mayo",
  });

  static readonly BALLINDRAIT_DONEGAL = new Location({
    id: "1342",
    displayName: "Ballindrait, Donegal",
    displayValue: "ballindrait-donegal",
  });

  static readonly BALLINDUD_WATERFORD = new Location({
    id: "1939",
    displayName: "Ballindud, Waterford",
    displayValue: "ballindud-waterford",
  });

  static readonly BALLINEANIG_KERRY = new Location({
    id: "2720",
    displayName: "Ballineanig, Kerry",
    displayValue: "ballineanig-kerry",
  });

  static readonly BALLINEEN_CORK = new Location({
    id: "1206",
    displayName: "Ballineen, Cork",
    displayValue: "ballineen-cork",
  });

  static readonly BALLINFULL_SLIGO = new Location({
    id: "3479",
    displayName: "Ballinfull, Sligo",
    displayValue: "ballinfull-sligo",
  });

  static readonly BALLINGARRY_LIMERICK = new Location({
    id: "2616",
    displayName: "Ballingarry, Limerick",
    displayValue: "ballingarry-limerick",
  });

  static readonly BALLINGARRY_TIPPERARY = new Location({
    id: "3511",
    displayName: "Ballingarry, Tipperary",
    displayValue: "ballingarry-tipperary",
  });

  static readonly BALLINGEARY_CORK = new Location({
    id: "1207",
    displayName: "Ballingeary, Cork",
    displayValue: "ballingeary-cork",
  });

  static readonly BALLINGURTEEN_CORK = new Location({
    id: "342",
    displayName: "Ballingurteen, Cork",
    displayValue: "ballingurteen-cork",
  });

  static readonly BALLINHASSIG_CORK = new Location({
    id: "1208",
    displayName: "Ballinhassig, Cork",
    displayValue: "ballinhassig-cork",
  });

  static readonly BALLINKILLIN_CARLOW = new Location({
    id: "1813",
    displayName: "Ballinkillin, Carlow",
    displayValue: "ballinkillin-carlow",
  });

  static readonly BALLINLEENY_LIMERICK = new Location({
    id: "2617",
    displayName: "Ballinleeny, Limerick",
    displayValue: "ballinleeny-limerick",
  });

  static readonly BALLINLOGHIG_KERRY = new Location({
    id: "2721",
    displayName: "Ballinloghig, Kerry",
    displayValue: "ballinloghig-kerry",
  });

  static readonly BALLINLOUGH_CORK = new Location({
    id: "1209",
    displayName: "Ballinlough, Cork",
    displayValue: "ballinlough-cork",
  });

  static readonly BALLINLOUGH_MEATH = new Location({
    id: "3286",
    displayName: "Ballinlough, Meath",
    displayValue: "ballinlough-meath",
  });

  static readonly BALLINLOUGH_ROSCOMMON = new Location({
    id: "3396",
    displayName: "Ballinlough, Roscommon",
    displayValue: "ballinlough-roscommon",
  });

  static readonly BALLINLUSKA_CORK = new Location({
    id: "1959",
    displayName: "Ballinluska, Cork",
    displayValue: "ballinluska-cork",
  });

  static readonly BALLINODE_MONAGHAN = new Location({
    id: "3342",
    displayName: "Ballinode, Monaghan",
    displayValue: "ballinode-monaghan",
  });

  static readonly BALLINODE_SLIGO = new Location({
    id: "3487",
    displayName: "Ballinode, Sligo",
    displayValue: "ballinode-sligo",
  });

  static readonly BALLINORA_CORK = new Location({
    id: "1960",
    displayName: "Ballinora, Cork",
    displayValue: "ballinora-cork",
  });

  static readonly BALLINREA_CORK = new Location({
    id: "1595",
    displayName: "Ballinrea, Cork",
    displayValue: "ballinrea-cork",
  });

  static readonly BALLINROBE_MAYO = new Location({
    id: "3149",
    displayName: "Ballinrobe, Mayo",
    displayValue: "ballinrobe-mayo",
  });

  static readonly BALLINRUAN_CLARE = new Location({
    id: "1543",
    displayName: "Ballinruan, Clare",
    displayValue: "ballinruan-clare",
  });

  static readonly BALLINSKELLIGS_KERRY = new Location({
    id: "2722",
    displayName: "Ballinskelligs, Kerry",
    displayValue: "ballinskelligs-kerry",
  });

  static readonly BALLINSPITTLE_CORK = new Location({
    id: "1596",
    displayName: "Ballinspittle, Cork",
    displayValue: "ballinspittle-cork",
  });

  static readonly BALLINTEER_DUBLIN = new Location({
    id: "2050",
    displayName: "Ballinteer, Dublin",
    displayValue: "ballinteer-dublin",
  });

  static readonly BALLINTEMPLE_CORK = new Location({
    id: "1597",
    displayName: "Ballintemple, Cork",
    displayValue: "ballintemple-cork",
  });

  static readonly BALLINTEMPLE_GALWAY = new Location({
    id: "2367",
    displayName: "Ballintemple, Galway",
    displayValue: "ballintemple-galway",
  });

  static readonly BALLINTOGHER_SLIGO = new Location({
    id: "3488",
    displayName: "Ballintogher, Sligo",
    displayValue: "ballintogher-sligo",
  });

  static readonly BALLINTOY_ANTRIM = new Location({
    id: "269",
    displayName: "Ballintoy, Antrim",
    displayValue: "ballintoy-antrim",
  });

  static readonly BALLINTRA_DONEGAL = new Location({
    id: "1343",
    displayName: "Ballintra, Donegal",
    displayValue: "ballintra-donegal",
  });

  static readonly BALLINTRILLICK_SLIGO = new Location({
    id: "3489",
    displayName: "Ballintrillick, Sligo",
    displayValue: "ballintrillick-sligo",
  });

  static readonly BALLINTUBBER_MAYO = new Location({
    id: "3150",
    displayName: "Ballintubber, Mayo",
    displayValue: "ballintubber-mayo",
  });

  static readonly BALLINTUBBER_ROSCOMMON = new Location({
    id: "3397",
    displayName: "Ballintubber, Roscommon",
    displayValue: "ballintubber-roscommon",
  });

  static readonly BALLINTUBBERT_LAOIS = new Location({
    id: "2844",
    displayName: "Ballintubbert, Laois",
    displayValue: "ballintubbert-laois",
  });

  static readonly BALLINURE_CORK = new Location({
    id: "1217",
    displayName: "Ballinure, Cork",
    displayValue: "ballinure-cork",
  });

  static readonly BALLINURE_TIPPERARY = new Location({
    id: "3512",
    displayName: "Ballinure, Tipperary",
    displayValue: "ballinure-tipperary",
  });

  static readonly BALLINVARRY_KILKENNY = new Location({
    id: "2766",
    displayName: "Ballinvarry, Kilkenny",
    displayValue: "ballinvarry-kilkenny",
  });

  static readonly BALLINVEILTIG_CORK = new Location({
    id: "341",
    displayName: "Ballinveiltig, Cork",
    displayValue: "ballinveiltig-cork",
  });

  static readonly BALLINVOULTIG_CORK = new Location({
    id: "1218",
    displayName: "Ballinvoultig, Cork",
    displayValue: "ballinvoultig-cork",
  });

  static readonly BALLINVRINSIG_CORK = new Location({
    id: "343",
    displayName: "Ballinvrinsig, Cork",
    displayValue: "ballinvrinsig-cork",
  });

  static readonly BALLINVUSKIG_CORK = new Location({
    id: "1219",
    displayName: "Ballinvuskig, Cork",
    displayValue: "ballinvuskig-cork",
  });

  static readonly BALLISODARE_SLIGO = new Location({
    id: "3490",
    displayName: "Ballisodare, Sligo",
    displayValue: "ballisodare-sligo",
  });

  static readonly BALLITORE_KILDARE = new Location({
    id: "2491",
    displayName: "Ballitore, Kildare",
    displayValue: "ballitore-kildare",
  });

  static readonly BALLIVOR_MEATH = new Location({
    id: "3287",
    displayName: "Ballivor, Meath",
    displayValue: "ballivor-meath",
  });

  static readonly BALLON_CARLOW = new Location({
    id: "1814",
    displayName: "Ballon, Carlow",
    displayValue: "ballon-carlow",
  });

  static readonly BALLOOR_LEITRIM = new Location({
    id: "849",
    displayName: "Balloor, Leitrim",
    displayValue: "balloor-leitrim",
  });

  static readonly BALLOUGHTER_WEXFORD = new Location({
    id: "3822",
    displayName: "Balloughter, Wexford",
    displayValue: "balloughter-wexford",
  });

  static readonly BALLSBRIDGE_DUBLIN = new Location({
    id: "2051",
    displayName: "Ballsbridge, Dublin",
    displayValue: "ballsbridge-dublin",
  });

  static readonly BALLURE_DONEGAL = new Location({
    id: "1357",
    displayName: "Ballure, Donegal",
    displayValue: "ballure-donegal",
  });

  static readonly BALLYADAMS_LAOIS = new Location({
    id: "2845",
    displayName: "Ballyadams, Laois",
    displayValue: "ballyadams-laois",
  });

  static readonly BALLYAGRAN_LIMERICK = new Location({
    id: "2618",
    displayName: "Ballyagran, Limerick",
    displayValue: "ballyagran-limerick",
  });

  static readonly BALLYALLINAN_LIMERICK = new Location({
    id: "2619",
    displayName: "Ballyallinan, Limerick",
    displayValue: "ballyallinan-limerick",
  });

  static readonly BALLYANEEN_WATERFORD = new Location({
    id: "117",
    displayName: "Ballyaneen, Waterford",
    displayValue: "ballyaneen-waterford",
  });

  static readonly BALLYBANE_GALWAY = new Location({
    id: "2368",
    displayName: "Ballybane, Galway",
    displayValue: "ballybane-galway",
  });

  static readonly BALLYBANNON_CARLOW = new Location({
    id: "207",
    displayName: "Ballybannon, Carlow",
    displayValue: "ballybannon-carlow",
  });

  static readonly BALLYBAY_AND_SURROUNDS_MONAGHAN = new Location({
    id: "4066",
    displayName: "Ballybay (& Surrounds), Monaghan",
    displayValue: "ballybay-and-surrounds-monaghan",
  });

  static readonly BALLYBAY_MONAGHAN = new Location({
    id: "3343",
    displayName: "Ballybay, Monaghan",
    displayValue: "ballybay-monaghan",
  });

  static readonly BALLYBEG_TIPPERARY = new Location({
    id: "1173",
    displayName: "Ballybeg, Tipperary",
    displayValue: "ballybeg-tipperary",
  });

  static readonly BALLYBODEN_DUBLIN = new Location({
    id: "2052",
    displayName: "Ballyboden, Dublin",
    displayValue: "ballyboden-dublin",
  });

  static readonly BALLYBOFEY_AND_SURROUNDS_DONEGAL = new Location({
    id: "4067",
    displayName: "Ballybofey (& Surrounds), Donegal",
    displayValue: "ballybofey-and-surrounds-donegal",
  });

  static readonly BALLYBOFEY_DONEGAL = new Location({
    id: "1358",
    displayName: "Ballybofey, Donegal",
    displayValue: "ballybofey-donegal",
  });

  static readonly BALLYBOGY_ANTRIM = new Location({
    id: "270",
    displayName: "Ballybogy, Antrim",
    displayValue: "ballybogy-antrim",
  });

  static readonly BALLYBOUGH_DUBLIN = new Location({
    id: "2055",
    displayName: "Ballybough, Dublin",
    displayValue: "ballybough-dublin",
  });

  static readonly BALLYBOUGHAL_DUBLIN = new Location({
    id: "2056",
    displayName: "Ballyboughal, Dublin",
    displayValue: "ballyboughal-dublin",
  });

  static readonly BALLYBOY_OFFALY = new Location({
    id: "600",
    displayName: "Ballyboy, Offaly",
    displayValue: "ballyboy-offaly",
  });

  static readonly BALLYBRACK_DUBLIN = new Location({
    id: "2057",
    displayName: "Ballybrack, Dublin",
    displayValue: "ballybrack-dublin",
  });

  static readonly BALLYBRACK_KERRY = new Location({
    id: "2723",
    displayName: "Ballybrack, Kerry",
    displayValue: "ballybrack-kerry",
  });

  static readonly BALLYBRIT_GALWAY = new Location({
    id: "2369",
    displayName: "Ballybrit, Galway",
    displayValue: "ballybrit-galway",
  });

  static readonly BALLYBRITTAS_LAOIS = new Location({
    id: "2846",
    displayName: "Ballybrittas, Laois",
    displayValue: "ballybrittas-laois",
  });

  static readonly BALLYBROMMEL_CARLOW = new Location({
    id: "198",
    displayName: "Ballybrommel, Carlow",
    displayValue: "ballybrommel-carlow",
  });

  static readonly BALLYBROOD_LIMERICK = new Location({
    id: "2620",
    displayName: "Ballybrood, Limerick",
    displayValue: "ballybrood-limerick",
  });

  static readonly BALLYBROPHY_LAOIS = new Location({
    id: "2847",
    displayName: "Ballybrophy, Laois",
    displayValue: "ballybrophy-laois",
  });

  static readonly BALLYBRYAN_OFFALY = new Location({
    id: "1157",
    displayName: "Ballybryan, Offaly",
    displayValue: "ballybryan-offaly",
  });

  static readonly BALLYBUNION_KERRY = new Location({
    id: "2724",
    displayName: "Ballybunion, Kerry",
    displayValue: "ballybunion-kerry",
  });

  static readonly BALLYBURDEN_CORK = new Location({
    id: "352",
    displayName: "Ballyburden, Cork",
    displayValue: "ballyburden-cork",
  });

  static readonly BALLYBURKE_GALWAY = new Location({
    id: "2370",
    displayName: "Ballyburke, Galway",
    displayValue: "ballyburke-galway",
  });

  static readonly BALLYCAHILL_TIPPERARY = new Location({
    id: "1174",
    displayName: "Ballycahill, Tipperary",
    displayValue: "ballycahill-tipperary",
  });

  static readonly BALLYCALLAN_KILKENNY = new Location({
    id: "2767",
    displayName: "Ballycallan, Kilkenny",
    displayValue: "ballycallan-kilkenny",
  });

  static readonly BALLYCANEW_WEXFORD = new Location({
    id: "3823",
    displayName: "Ballycanew, Wexford",
    displayValue: "ballycanew-wexford",
  });

  static readonly BALLYCARNEY_WEXFORD = new Location({
    id: "3824",
    displayName: "Ballycarney, Wexford",
    displayValue: "ballycarney-wexford",
  });

  static readonly BALLYCARRY_ANTRIM = new Location({
    id: "271",
    displayName: "Ballycarry, Antrim",
    displayValue: "ballycarry-antrim",
  });

  static readonly BALLYCASTLE_ANTRIM = new Location({
    id: "272",
    displayName: "Ballycastle, Antrim",
    displayValue: "ballycastle-antrim",
  });

  static readonly BALLYCASTLE_MAYO = new Location({
    id: "3151",
    displayName: "Ballycastle, Mayo",
    displayValue: "ballycastle-mayo",
  });

  static readonly BALLYCLARE_ANTRIM = new Location({
    id: "273",
    displayName: "Ballyclare, Antrim",
    displayValue: "ballyclare-antrim",
  });

  static readonly BALLYCLARE_ROSCOMMON = new Location({
    id: "3409",
    displayName: "Ballyclare, Roscommon",
    displayValue: "ballyclare-roscommon",
  });

  static readonly BALLYCLERAHAN_TIPPERARY = new Location({
    id: "655",
    displayName: "Ballyclerahan, Tipperary",
    displayValue: "ballyclerahan-tipperary",
  });

  static readonly BALLYCLERY_GALWAY = new Location({
    id: "2371",
    displayName: "Ballyclery, Galway",
    displayValue: "ballyclery-galway",
  });

  static readonly BALLYCLOUGH_CORK = new Location({
    id: "1220",
    displayName: "Ballyclough, Cork",
    displayValue: "ballyclough-cork",
  });

  static readonly BALLYCLOUGH_LIMERICK = new Location({
    id: "2621",
    displayName: "Ballyclough, Limerick",
    displayValue: "ballyclough-limerick",
  });

  static readonly BALLYCOLLA_LAOIS = new Location({
    id: "2848",
    displayName: "Ballycolla, Laois",
    displayValue: "ballycolla-laois",
  });

  static readonly BALLYCOMMON_TIPPERARY = new Location({
    id: "933",
    displayName: "Ballycommon, Tipperary",
    displayValue: "ballycommon-tipperary",
  });

  static readonly BALLYCONNEELY_GALWAY = new Location({
    id: "2372",
    displayName: "Ballyconneely, Galway",
    displayValue: "ballyconneely-galway",
  });

  static readonly BALLYCONNELL_CAVAN = new Location({
    id: "1804",
    displayName: "Ballyconnell, Cavan",
    displayValue: "ballyconnell-cavan",
  });

  static readonly BALLYCONNELL_SLIGO = new Location({
    id: "3491",
    displayName: "Ballyconnell, Sligo",
    displayValue: "ballyconnell-sligo",
  });

  static readonly BALLYCONNELL_WICKLOW = new Location({
    id: "3982",
    displayName: "Ballyconnell, Wicklow",
    displayValue: "ballyconnell-wicklow",
  });

  static readonly BALLYCONNIGAR_WEXFORD = new Location({
    id: "3825",
    displayName: "Ballyconnigar, Wexford",
    displayValue: "ballyconnigar-wexford",
  });

  static readonly BALLYCOOLIN_DUBLIN = new Location({
    id: "2058",
    displayName: "Ballycoolin, Dublin",
    displayValue: "ballycoolin-dublin",
  });

  static readonly BALLYCORICK_CLARE = new Location({
    id: "283",
    displayName: "Ballycorick, Clare",
    displayValue: "ballycorick-clare",
  });

  static readonly BALLYCORUS_DUBLIN = new Location({
    id: "2059",
    displayName: "Ballycorus, Dublin",
    displayValue: "ballycorus-dublin",
  });

  static readonly BALLYCOTTON_CORK = new Location({
    id: "1221",
    displayName: "Ballycotton, Cork",
    displayValue: "ballycotton-cork",
  });

  static readonly BALLYCROSSAUN_GALWAY = new Location({
    id: "663",
    displayName: "Ballycrossaun, Galway",
    displayValue: "ballycrossaun-galway",
  });

  static readonly BALLYCROY_MAYO = new Location({
    id: "3152",
    displayName: "Ballycroy, Mayo",
    displayValue: "ballycroy-mayo",
  });

  static readonly BALLYCULLANE_WEXFORD = new Location({
    id: "3826",
    displayName: "Ballycullane, Wexford",
    displayValue: "ballycullane-wexford",
  });

  static readonly BALLYCULLEN_DUBLIN = new Location({
    id: "2060",
    displayName: "Ballycullen, Dublin",
    displayValue: "ballycullen-dublin",
  });

  static readonly BALLYCULLEN_WICKLOW = new Location({
    id: "3983",
    displayName: "Ballycullen, Wicklow",
    displayValue: "ballycullen-wicklow",
  });

  static readonly BALLYCUMBER_OFFALY = new Location({
    id: "601",
    displayName: "Ballycumber, Offaly",
    displayValue: "ballycumber-offaly",
  });

  static readonly BALLYCUMMIN_LIMERICK = new Location({
    id: "2622",
    displayName: "Ballycummin, Limerick",
    displayValue: "ballycummin-limerick",
  });

  static readonly BALLYDANGAN_ROSCOMMON = new Location({
    id: "3410",
    displayName: "Ballydangan, Roscommon",
    displayValue: "ballydangan-roscommon",
  });

  static readonly BALLYDAVID_GALWAY = new Location({
    id: "2373",
    displayName: "Ballydavid, Galway",
    displayValue: "ballydavid-galway",
  });

  static readonly BALLYDAVID_KERRY = new Location({
    id: "2725",
    displayName: "Ballydavid, Kerry",
    displayValue: "ballydavid-kerry",
  });

  static readonly BALLYDAVIS_LAOIS = new Location({
    id: "2849",
    displayName: "Ballydavis, Laois",
    displayValue: "ballydavis-laois",
  });

  static readonly BALLYDEHOB_CORK = new Location({
    id: "1222",
    displayName: "Ballydehob, Cork",
    displayValue: "ballydehob-cork",
  });

  static readonly BALLYDESMOND_CORK = new Location({
    id: "1223",
    displayName: "Ballydesmond, Cork",
    displayValue: "ballydesmond-cork",
  });

  static readonly BALLYDONEGAN_CORK = new Location({
    id: "1224",
    displayName: "Ballydonegan, Cork",
    displayValue: "ballydonegan-cork",
  });

  static readonly BALLYDUFF_KERRY = new Location({
    id: "2726",
    displayName: "Ballyduff, Kerry",
    displayValue: "ballyduff-kerry",
  });

  static readonly BALLYDUFF_WATERFORD = new Location({
    id: "1940",
    displayName: "Ballyduff, Waterford",
    displayValue: "ballyduff-waterford",
  });

  static readonly BALLYDUFF_WEXFORD = new Location({
    id: "3878",
    displayName: "Ballyduff, Wexford",
    displayValue: "ballyduff-wexford",
  });

  static readonly BALLYEDMOND_WEXFORD = new Location({
    id: "3879",
    displayName: "Ballyedmond, Wexford",
    displayValue: "ballyedmond-wexford",
  });

  static readonly BALLYFAD_WEXFORD = new Location({
    id: "3880",
    displayName: "Ballyfad, Wexford",
    displayValue: "ballyfad-wexford",
  });

  static readonly BALLYFAIR_KILDARE = new Location({
    id: "2492",
    displayName: "Ballyfair, Kildare",
    displayValue: "ballyfair-kildare",
  });

  static readonly BALLYFARNAGH_MAYO = new Location({
    id: "3153",
    displayName: "Ballyfarnagh, Mayo",
    displayValue: "ballyfarnagh-mayo",
  });

  static readonly BALLYFARNON_ROSCOMMON = new Location({
    id: "3411",
    displayName: "Ballyfarnon, Roscommon",
    displayValue: "ballyfarnon-roscommon",
  });

  static readonly BALLYFEARD_CORK = new Location({
    id: "1225",
    displayName: "Ballyfeard, Cork",
    displayValue: "ballyfeard-cork",
  });

  static readonly BALLYFERMOT_COLLEGE_OF_FURTHER_EDUCATION_DUBLIN =
    new Location({
      id: "4359",
      displayName: "Ballyfermot College of Further Education, Dublin",
      displayValue: "ballyfermot-college-of-further-education-dublin",
    });

  static readonly BALLYFERMOT_DUBLIN = new Location({
    id: "2061",
    displayName: "Ballyfermot, Dublin",
    displayValue: "ballyfermot-dublin",
  });

  static readonly BALLYFERRITER_KERRY = new Location({
    id: "2727",
    displayName: "Ballyferriter, Kerry",
    displayValue: "ballyferriter-kerry",
  });

  static readonly BALLYFIN_LAOIS = new Location({
    id: "2850",
    displayName: "Ballyfin, Laois",
    displayValue: "ballyfin-laois",
  });

  static readonly BALLYFINAGHY_ANTRIM = new Location({
    id: "303",
    displayName: "Ballyfinaghy, Antrim",
    displayValue: "ballyfinaghy-antrim",
  });

  static readonly BALLYFORAN_ROSCOMMON = new Location({
    id: "3412",
    displayName: "Ballyforan, Roscommon",
    displayValue: "ballyforan-roscommon",
  });

  static readonly BALLYFORE_OFFALY = new Location({
    id: "602",
    displayName: "Ballyfore, Offaly",
    displayValue: "ballyfore-offaly",
  });

  static readonly BALLYFOYLE_KILKENNY = new Location({
    id: "2768",
    displayName: "Ballyfoyle, Kilkenny",
    displayValue: "ballyfoyle-kilkenny",
  });

  static readonly BALLYGAR_GALWAY = new Location({
    id: "2374",
    displayName: "Ballygar, Galway",
    displayValue: "ballygar-galway",
  });

  static readonly BALLYGARRETT_WEXFORD = new Location({
    id: "3881",
    displayName: "Ballygarrett, Wexford",
    displayValue: "ballygarrett-wexford",
  });

  static readonly BALLYGARRIES_MAYO = new Location({
    id: "3154",
    displayName: "Ballygarries, Mayo",
    displayValue: "ballygarries-mayo",
  });

  static readonly BALLYGARVAN_CORK = new Location({
    id: "1226",
    displayName: "Ballygarvan, Cork",
    displayValue: "ballygarvan-cork",
  });

  static readonly BALLYGAWLEY_SLIGO = new Location({
    id: "3492",
    displayName: "Ballygawley, Sligo",
    displayValue: "ballygawley-sligo",
  });

  static readonly BALLYGAWLEY_TYRONE = new Location({
    id: "3648",
    displayName: "Ballygawley, Tyrone",
    displayValue: "ballygawley-tyrone",
  });

  static readonly BALLYGLASS_MAYO = new Location({
    id: "3155",
    displayName: "Ballyglass, Mayo",
    displayValue: "ballyglass-mayo",
  });

  static readonly BALLYGLUNIN_GALWAY = new Location({
    id: "2375",
    displayName: "Ballyglunin, Galway",
    displayValue: "ballyglunin-galway",
  });

  static readonly BALLYGOMARTIN_ANTRIM = new Location({
    id: "274",
    displayName: "Ballygomartin, Antrim",
    displayValue: "ballygomartin-antrim",
  });

  static readonly BALLYGORMAN_DONEGAL = new Location({
    id: "1359",
    displayName: "Ballygorman, Donegal",
    displayValue: "ballygorman-donegal",
  });

  static readonly BALLYGOWAN_DOWN = new Location({
    id: "1785",
    displayName: "Ballygowan, Down",
    displayValue: "ballygowan-down",
  });

  static readonly BALLYGRENNAN_LIMERICK = new Location({
    id: "2633",
    displayName: "Ballygrennan, Limerick",
    displayValue: "ballygrennan-limerick",
  });

  static readonly BALLYGRIFFIN_KILKENNY = new Location({
    id: "2769",
    displayName: "Ballygriffin, Kilkenny",
    displayValue: "ballygriffin-kilkenny",
  });

  static readonly BALLYGRIFFIN_TIPPERARY = new Location({
    id: "1175",
    displayName: "Ballygriffin, Tipperary",
    displayValue: "ballygriffin-tipperary",
  });

  static readonly BALLYGUNNER_WATERFORD = new Location({
    id: "1941",
    displayName: "Ballygunner, Waterford",
    displayValue: "ballygunner-waterford",
  });

  static readonly BALLYHACK_WEXFORD = new Location({
    id: "3882",
    displayName: "Ballyhack, Wexford",
    displayValue: "ballyhack-wexford",
  });

  static readonly BALLYHACKAMORE_ANTRIM = new Location({
    id: "277",
    displayName: "Ballyhackamore, Antrim",
    displayValue: "ballyhackamore-antrim",
  });

  static readonly BALLYHACKET_CARLOW = new Location({
    id: "208",
    displayName: "Ballyhacket, Carlow",
    displayValue: "ballyhacket-carlow",
  });

  static readonly BALLYHAGHT_LIMERICK = new Location({
    id: "868",
    displayName: "Ballyhaght, Limerick",
    displayValue: "ballyhaght-limerick",
  });

  static readonly BALLYHAHILL_LIMERICK = new Location({
    id: "2634",
    displayName: "Ballyhahill, Limerick",
    displayValue: "ballyhahill-limerick",
  });

  static readonly BALLYHAISE_CAVAN = new Location({
    id: "1805",
    displayName: "Ballyhaise, Cavan",
    displayValue: "ballyhaise-cavan",
  });

  static readonly BALLYHALBERT_DOWN = new Location({
    id: "1786",
    displayName: "Ballyhalbert, Down",
    displayValue: "ballyhalbert-down",
  });

  static readonly BALLYHALE_GALWAY = new Location({
    id: "2376",
    displayName: "Ballyhale, Galway",
    displayValue: "ballyhale-galway",
  });

  static readonly BALLYHALE_KILKENNY = new Location({
    id: "2770",
    displayName: "Ballyhale, Kilkenny",
    displayValue: "ballyhale-kilkenny",
  });

  static readonly BALLYHAR_KERRY = new Location({
    id: "2728",
    displayName: "Ballyhar, Kerry",
    displayValue: "ballyhar-kerry",
  });

  static readonly BALLYHAUNIS_MAYO = new Location({
    id: "3156",
    displayName: "Ballyhaunis, Mayo",
    displayValue: "ballyhaunis-mayo",
  });

  static readonly BALLYHEAN_MAYO = new Location({
    id: "3157",
    displayName: "Ballyhean, Mayo",
    displayValue: "ballyhean-mayo",
  });

  static readonly BALLYHEAR_GALWAY = new Location({
    id: "667",
    displayName: "Ballyhear, Galway",
    displayValue: "ballyhear-galway",
  });

  static readonly BALLYHEELAN_CAVAN = new Location({
    id: "1806",
    displayName: "Ballyheelan, Cavan",
    displayValue: "ballyheelan-cavan",
  });

  static readonly BALLYHEERIN_DONEGAL = new Location({
    id: "522",
    displayName: "Ballyheerin, Donegal",
    displayValue: "ballyheerin-donegal",
  });

  static readonly BALLYHEIGUE_KERRY = new Location({
    id: "2729",
    displayName: "Ballyheigue, Kerry",
    displayValue: "ballyheigue-kerry",
  });

  static readonly BALLYHILLIN_DONEGAL = new Location({
    id: "1360",
    displayName: "Ballyhillin, Donegal",
    displayValue: "ballyhillin-donegal",
  });

  static readonly BALLYHOE_MEATH = new Location({
    id: "3288",
    displayName: "Ballyhoe, Meath",
    displayValue: "ballyhoe-meath",
  });

  static readonly BALLYHOGUE_WEXFORD = new Location({
    id: "3883",
    displayName: "Ballyhogue, Wexford",
    displayValue: "ballyhogue-wexford",
  });

  static readonly BALLYHOLME_DOWN = new Location({
    id: "1787",
    displayName: "Ballyholme, Down",
    displayValue: "ballyholme-down",
  });

  static readonly BALLYHOOLY_CORK = new Location({
    id: "1227",
    displayName: "Ballyhooly, Cork",
    displayValue: "ballyhooly-cork",
  });

  static readonly BALLYHORNAN_DOWN = new Location({
    id: "1788",
    displayName: "Ballyhornan, Down",
    displayValue: "ballyhornan-down",
  });

  static readonly BALLYHUPPAHANE_LAOIS = new Location({
    id: "2851",
    displayName: "Ballyhuppahane, Laois",
    displayValue: "ballyhuppahane-laois",
  });

  static readonly BALLYJAMESDUFF_CAVAN = new Location({
    id: "1807",
    displayName: "Ballyjamesduff, Cavan",
    displayValue: "ballyjamesduff-cavan",
  });

  static readonly BALLYKEAN_OFFALY = new Location({
    id: "1160",
    displayName: "Ballykean, Offaly",
    displayValue: "ballykean-offaly",
  });

  static readonly BALLYKEEFE_KILKENNY = new Location({
    id: "2771",
    displayName: "Ballykeefe, Kilkenny",
    displayValue: "ballykeefe-kilkenny",
  });

  static readonly BALLYKEEL_ANTRIM = new Location({
    id: "316",
    displayName: "Ballykeel, Antrim",
    displayValue: "ballykeel-antrim",
  });

  static readonly BALLYKEEL_DOWN = new Location({
    id: "1789",
    displayName: "Ballykeel, Down",
    displayValue: "ballykeel-down",
  });

  static readonly BALLYKEERAN_WESTMEATH = new Location({
    id: "3753",
    displayName: "Ballykeeran, Westmeath",
    displayValue: "ballykeeran-westmeath",
  });

  static readonly BALLYKELLY_DERRY = new Location({
    id: "1214",
    displayName: "Ballykelly, Derry",
    displayValue: "ballykelly-derry",
  });

  static readonly BALLYKEOGHAN_KILKENNY = new Location({
    id: "2772",
    displayName: "Ballykeoghan, Kilkenny",
    displayValue: "ballykeoghan-kilkenny",
  });

  static readonly BALLYKILLEEN_OFFALY = new Location({
    id: "1161",
    displayName: "Ballykilleen, Offaly",
    displayValue: "ballykilleen-offaly",
  });

  static readonly BALLYKNOCKAN_WICKLOW = new Location({
    id: "3984",
    displayName: "Ballyknockan, Wicklow",
    displayValue: "ballyknockan-wicklow",
  });

  static readonly BALLYLACY_WEXFORD = new Location({
    id: "3884",
    displayName: "Ballylacy, Wexford",
    displayValue: "ballylacy-wexford",
  });

  static readonly BALLYLAGHNAN_CLARE = new Location({
    id: "1544",
    displayName: "Ballylaghnan, Clare",
    displayValue: "ballylaghnan-clare",
  });

  static readonly BALLYLANDERS_LIMERICK = new Location({
    id: "2635",
    displayName: "Ballylanders, Limerick",
    displayValue: "ballylanders-limerick",
  });

  static readonly BALLYLANEEN_WATERFORD = new Location({
    id: "1942",
    displayName: "Ballylaneen, Waterford",
    displayValue: "ballylaneen-waterford",
  });

  static readonly BALLYLEAGUE_ROSCOMMON = new Location({
    id: "3413",
    displayName: "Ballyleague, Roscommon",
    displayValue: "ballyleague-roscommon",
  });

  static readonly BALLYLESSON_DOWN = new Location({
    id: "1790",
    displayName: "Ballylesson, Down",
    displayValue: "ballylesson-down",
  });

  static readonly BALLYLICKEY_CORK = new Location({
    id: "1228",
    displayName: "Ballylickey, Cork",
    displayValue: "ballylickey-cork",
  });

  static readonly BALLYLIFFIN_DONEGAL = new Location({
    id: "1361",
    displayName: "Ballyliffin, Donegal",
    displayValue: "ballyliffin-donegal",
  });

  static readonly BALLYLINE_KILKENNY = new Location({
    id: "2773",
    displayName: "Ballyline, Kilkenny",
    displayValue: "ballyline-kilkenny",
  });

  static readonly BALLYLONGFORD_KERRY = new Location({
    id: "2730",
    displayName: "Ballylongford, Kerry",
    displayValue: "ballylongford-kerry",
  });

  static readonly BALLYLOOBY_TIPPERARY = new Location({
    id: "934",
    displayName: "Ballylooby, Tipperary",
    displayValue: "ballylooby-tipperary",
  });

  static readonly BALLYLUCAS_WEXFORD = new Location({
    id: "3827",
    displayName: "Ballylucas, Wexford",
    displayValue: "ballylucas-wexford",
  });

  static readonly BALLYLYNAN_LAOIS = new Location({
    id: "2852",
    displayName: "Ballylynan, Laois",
    displayValue: "ballylynan-laois",
  });

  static readonly BALLYMACARBRY_WATERFORD = new Location({
    id: "1943",
    displayName: "Ballymacarbry, Waterford",
    displayValue: "ballymacarbry-waterford",
  });

  static readonly BALLYMACARRETT_DOWN = new Location({
    id: "1791",
    displayName: "Ballymacarrett, Down",
    displayValue: "ballymacarrett-down",
  });

  static readonly BALLYMACAW_WATERFORD = new Location({
    id: "1944",
    displayName: "Ballymacaw, Waterford",
    displayValue: "ballymacaw-waterford",
  });

  static readonly BALLYMACELLIGOTT_KERRY = new Location({
    id: "2731",
    displayName: "Ballymacelligott, Kerry",
    displayValue: "ballymacelligott-kerry",
  });

  static readonly BALLYMACHUGH_CAVAN = new Location({
    id: "1493",
    displayName: "Ballymachugh, Cavan",
    displayValue: "ballymachugh-cavan",
  });

  static readonly BALLYMACK_KILKENNY = new Location({
    id: "2774",
    displayName: "Ballymack, Kilkenny",
    displayValue: "ballymack-kilkenny",
  });

  static readonly BALLYMACKEY_TIPPERARY = new Location({
    id: "935",
    displayName: "Ballymackey, Tipperary",
    displayValue: "ballymackey-tipperary",
  });

  static readonly BALLYMACODA_CORK = new Location({
    id: "1229",
    displayName: "Ballymacoda, Cork",
    displayValue: "ballymacoda-cork",
  });

  static readonly BALLYMACURLEY_ROSCOMMON = new Location({
    id: "3414",
    displayName: "Ballymacurley, Roscommon",
    displayValue: "ballymacurley-roscommon",
  });

  static readonly BALLYMACWARD_GALWAY = new Location({
    id: "2377",
    displayName: "Ballymacward, Galway",
    displayValue: "ballymacward-galway",
  });

  static readonly BALLYMADOG_CORK = new Location({
    id: "344",
    displayName: "Ballymadog, Cork",
    displayValue: "ballymadog-cork",
  });

  static readonly BALLYMAGAN_DONEGAL = new Location({
    id: "708",
    displayName: "Ballymagan, Donegal",
    displayValue: "ballymagan-donegal",
  });

  static readonly BALLYMAGARAGHY_DONEGAL = new Location({
    id: "523",
    displayName: "Ballymagaraghy, Donegal",
    displayValue: "ballymagaraghy-donegal",
  });

  static readonly BALLYMAGARRY_ANTRIM = new Location({
    id: "304",
    displayName: "Ballymagarry, Antrim",
    displayValue: "ballymagarry-antrim",
  });

  static readonly BALLYMAGORRY_TYRONE = new Location({
    id: "3649",
    displayName: "Ballymagorry, Tyrone",
    displayValue: "ballymagorry-tyrone",
  });

  static readonly BALLYMAHON_LONGFORD = new Location({
    id: "3132",
    displayName: "Ballymahon, Longford",
    displayValue: "ballymahon-longford",
  });

  static readonly BALLYMAKEAGH_CORK = new Location({
    id: "354",
    displayName: "Ballymakeagh, Cork",
    displayValue: "ballymakeagh-cork",
  });

  static readonly BALLYMAKEERA_CORK = new Location({
    id: "1231",
    displayName: "Ballymakeera, Cork",
    displayValue: "ballymakeera-cork",
  });

  static readonly BALLYMAKENNY_LOUTH = new Location({
    id: "3011",
    displayName: "Ballymakenny, Louth",
    displayValue: "ballymakenny-louth",
  });

  static readonly BALLYMARTIN_DOWN = new Location({
    id: "1792",
    displayName: "Ballymartin, Down",
    displayValue: "ballymartin-down",
  });

  static readonly BALLYMARTLE_CORK = new Location({
    id: "1232",
    displayName: "Ballymartle, Cork",
    displayValue: "ballymartle-cork",
  });

  static readonly BALLYMENA_ANTRIM = new Location({
    id: "305",
    displayName: "Ballymena, Antrim",
    displayValue: "ballymena-antrim",
  });

  static readonly BALLYMITTY_WEXFORD = new Location({
    id: "3828",
    displayName: "Ballymitty, Wexford",
    displayValue: "ballymitty-wexford",
  });

  static readonly BALLYMOE_GALWAY = new Location({
    id: "2213",
    displayName: "Ballymoe, Galway",
    displayValue: "ballymoe-galway",
  });

  static readonly BALLYMONEEN_GALWAY = new Location({
    id: "2214",
    displayName: "Ballymoneen, Galway",
    displayValue: "ballymoneen-galway",
  });

  static readonly BALLYMONEY_ANTRIM = new Location({
    id: "200",
    displayName: "Ballymoney, Antrim",
    displayValue: "ballymoney-antrim",
  });

  static readonly BALLYMONEY_WEXFORD = new Location({
    id: "3829",
    displayName: "Ballymoney, Wexford",
    displayValue: "ballymoney-wexford",
  });

  static readonly BALLYMORE_EUSTACE_KILDARE = new Location({
    id: "2493",
    displayName: "Ballymore Eustace, Kildare",
    displayValue: "ballymore-eustace-kildare",
  });

  static readonly BALLYMORE_DONEGAL = new Location({
    id: "524",
    displayName: "Ballymore, Donegal",
    displayValue: "ballymore-donegal",
  });

  static readonly BALLYMORE_WESTMEATH = new Location({
    id: "3754",
    displayName: "Ballymore, Westmeath",
    displayValue: "ballymore-westmeath",
  });

  static readonly BALLYMORRIS_WICKLOW = new Location({
    id: "3985",
    displayName: "Ballymorris, Wicklow",
    displayValue: "ballymorris-wicklow",
  });

  static readonly BALLYMOTE_SLIGO = new Location({
    id: "3493",
    displayName: "Ballymote, Sligo",
    displayValue: "ballymote-sligo",
  });

  static readonly BALLYMOUNT_DUBLIN = new Location({
    id: "2062",
    displayName: "Ballymount, Dublin",
    displayValue: "ballymount-dublin",
  });

  static readonly BALLYMUN_DUBLIN = new Location({
    id: "2063",
    displayName: "Ballymun, Dublin",
    displayValue: "ballymun-dublin",
  });

  static readonly BALLYMURN_WEXFORD = new Location({
    id: "3830",
    displayName: "Ballymurn, Wexford",
    displayValue: "ballymurn-wexford",
  });

  static readonly BALLYMURPHY_ANTRIM = new Location({
    id: "306",
    displayName: "Ballymurphy, Antrim",
    displayValue: "ballymurphy-antrim",
  });

  static readonly BALLYMURPHY_CARLOW = new Location({
    id: "209",
    displayName: "Ballymurphy, Carlow",
    displayValue: "ballymurphy-carlow",
  });

  static readonly BALLYMURRAGH_LIMERICK = new Location({
    id: "2636",
    displayName: "Ballymurragh, Limerick",
    displayValue: "ballymurragh-limerick",
  });

  static readonly BALLYMURRAY_ROSCOMMON = new Location({
    id: "3415",
    displayName: "Ballymurray, Roscommon",
    displayValue: "ballymurray-roscommon",
  });

  static readonly BALLYNACALLAGH_CORK = new Location({
    id: "346",
    displayName: "Ballynacallagh, Cork",
    displayValue: "ballynacallagh-cork",
  });

  static readonly BALLYNACALLY_CLARE = new Location({
    id: "1545",
    displayName: "Ballynacally, Clare",
    displayValue: "ballynacally-clare",
  });

  static readonly BALLYNACARRICK_DONEGAL = new Location({
    id: "525",
    displayName: "Ballynacarrick, Donegal",
    displayValue: "ballynacarrick-donegal",
  });

  static readonly BALLYNACARRIGA_CORK = new Location({
    id: "1236",
    displayName: "Ballynacarriga, Cork",
    displayValue: "ballynacarriga-cork",
  });

  static readonly BALLYNACARRIGY_WESTMEATH = new Location({
    id: "3755",
    displayName: "Ballynacarrigy, Westmeath",
    displayValue: "ballynacarrigy-westmeath",
  });

  static readonly BALLYNACORRA_CORK = new Location({
    id: "355",
    displayName: "Ballynacorra, Cork",
    displayValue: "ballynacorra-cork",
  });

  static readonly BALLYNACOURTY_WATERFORD = new Location({
    id: "1945",
    displayName: "Ballynacourty, Waterford",
    displayValue: "ballynacourty-waterford",
  });

  static readonly BALLYNADRUMNY_KILDARE = new Location({
    id: "2494",
    displayName: "Ballynadrumny, Kildare",
    displayValue: "ballynadrumny-kildare",
  });

  static readonly BALLYNAFEIGH_ANTRIM = new Location({
    id: "1730",
    displayName: "Ballynafeigh, Antrim",
    displayValue: "ballynafeigh-antrim",
  });

  static readonly BALLYNAFID_WESTMEATH = new Location({
    id: "3756",
    displayName: "Ballynafid, Westmeath",
    displayValue: "ballynafid-westmeath",
  });

  static readonly BALLYNAGAUL_WATERFORD = new Location({
    id: "123",
    displayName: "Ballynagaul, Waterford",
    displayValue: "ballynagaul-waterford",
  });

  static readonly BALLYNAGREE_CORK = new Location({
    id: "356",
    displayName: "Ballynagree, Cork",
    displayValue: "ballynagree-cork",
  });

  static readonly BALLYNAGUILKEE_WATERFORD = new Location({
    id: "1946",
    displayName: "Ballynaguilkee, Waterford",
    displayValue: "ballynaguilkee-waterford",
  });

  static readonly BALLYNAHINCH_DOWN = new Location({
    id: "1793",
    displayName: "Ballynahinch, Down",
    displayValue: "ballynahinch-down",
  });

  static readonly BALLYNAHINCH_GALWAY = new Location({
    id: "2215",
    displayName: "Ballynahinch, Galway",
    displayValue: "ballynahinch-galway",
  });

  static readonly BALLYNAHOWN_GALWAY = new Location({
    id: "2216",
    displayName: "Ballynahown, Galway",
    displayValue: "ballynahown-galway",
  });

  static readonly BALLYNAKILL_CARLOW = new Location({
    id: "1815",
    displayName: "Ballynakill, Carlow",
    displayValue: "ballynakill-carlow",
  });

  static readonly BALLYNAKILL_OFFALY = new Location({
    id: "1162",
    displayName: "Ballynakill, Offaly",
    displayValue: "ballynakill-offaly",
  });

  static readonly BALLYNAKILL_WESTMEATH = new Location({
    id: "3757",
    displayName: "Ballynakill, Westmeath",
    displayValue: "ballynakill-westmeath",
  });

  static readonly BALLYNAKILLY_KERRY = new Location({
    id: "2732",
    displayName: "Ballynakilly, Kerry",
    displayValue: "ballynakilly-kerry",
  });

  static readonly BALLYNAMALLARD_FERMANAGH = new Location({
    id: "2179",
    displayName: "Ballynamallard, Fermanagh",
    displayValue: "ballynamallard-fermanagh",
  });

  static readonly BALLYNAMONA_CORK = new Location({
    id: "1239",
    displayName: "Ballynamona, Cork",
    displayValue: "ballynamona-cork",
  });

  static readonly BALLYNANTY_LIMERICK = new Location({
    id: "2888",
    displayName: "Ballynanty, Limerick",
    displayValue: "ballynanty-limerick",
  });

  static readonly BALLYNARE_MEATH = new Location({
    id: "1039",
    displayName: "Ballynare, Meath",
    displayValue: "ballynare-meath",
  });

  static readonly BALLYNASHANNAGH_DONEGAL = new Location({
    id: "526",
    displayName: "Ballynashannagh, Donegal",
    displayValue: "ballynashannagh-donegal",
  });

  static readonly BALLYNASKREENA_KERRY = new Location({
    id: "2733",
    displayName: "Ballynaskreena, Kerry",
    displayValue: "ballynaskreena-kerry",
  });

  static readonly BALLYNASTANGFORD_MAYO = new Location({
    id: "3158",
    displayName: "Ballynastangford, Mayo",
    displayValue: "ballynastangford-mayo",
  });

  static readonly BALLYNASTRAW_WEXFORD = new Location({
    id: "1254",
    displayName: "Ballynastraw, Wexford",
    displayValue: "ballynastraw-wexford",
  });

  static readonly BALLYNEETY_LIMERICK = new Location({
    id: "2889",
    displayName: "Ballyneety, Limerick",
    displayValue: "ballyneety-limerick",
  });

  static readonly BALLYNEIL_TIPPERARY = new Location({
    id: "1179",
    displayName: "Ballyneil, Tipperary",
    displayValue: "ballyneil-tipperary",
  });

  static readonly BALLYNOE_CORK = new Location({
    id: "1240",
    displayName: "Ballynoe, Cork",
    displayValue: "ballynoe-cork",
  });

  static readonly BALLYNOE_DOWN = new Location({
    id: "1794",
    displayName: "Ballynoe, Down",
    displayValue: "ballynoe-down",
  });

  static readonly BALLYNONTY_TIPPERARY = new Location({
    id: "936",
    displayName: "Ballynonty, Tipperary",
    displayValue: "ballynonty-tipperary",
  });

  static readonly BALLYNURE_ANTRIM = new Location({
    id: "1047",
    displayName: "Ballynure, Antrim",
    displayValue: "ballynure-antrim",
  });

  static readonly BALLYORGAN_LIMERICK = new Location({
    id: "2890",
    displayName: "Ballyorgan, Limerick",
    displayValue: "ballyorgan-limerick",
  });

  static readonly BALLYPATRICK_TIPPERARY = new Location({
    id: "1729",
    displayName: "Ballypatrick, Tipperary",
    displayValue: "ballypatrick-tipperary",
  });

  static readonly BALLYPHEHANE_CORK = new Location({
    id: "1241",
    displayName: "Ballyphehane, Cork",
    displayValue: "ballyphehane-cork",
  });

  static readonly BALLYPOREEN_TIPPERARY = new Location({
    id: "2089",
    displayName: "Ballyporeen, Tipperary",
    displayValue: "ballyporeen-tipperary",
  });

  static readonly BALLYQUIN_KERRY = new Location({
    id: "2734",
    displayName: "Ballyquin, Kerry",
    displayValue: "ballyquin-kerry",
  });

  static readonly BALLYRAGGET_KILKENNY = new Location({
    id: "2775",
    displayName: "Ballyragget, Kilkenny",
    displayValue: "ballyragget-kilkenny",
  });

  static readonly BALLYROAN_LAOIS = new Location({
    id: "2853",
    displayName: "Ballyroan, Laois",
    displayValue: "ballyroan-laois",
  });

  static readonly BALLYROBERT_ANTRIM = new Location({
    id: "1048",
    displayName: "Ballyrobert, Antrim",
    displayValue: "ballyrobert-antrim",
  });

  static readonly BALLYRODDY_ROSCOMMON = new Location({
    id: "3416",
    displayName: "Ballyroddy, Roscommon",
    displayValue: "ballyroddy-roscommon",
  });

  static readonly BALLYROE_KILDARE = new Location({
    id: "1156",
    displayName: "Ballyroe, Kildare",
    displayValue: "ballyroe-kildare",
  });

  static readonly BALLYROEBUCK_WEXFORD = new Location({
    id: "3831",
    displayName: "Ballyroebuck, Wexford",
    displayValue: "ballyroebuck-wexford",
  });

  static readonly BALLYRONAN_DERRY = new Location({
    id: "494",
    displayName: "Ballyronan, Derry",
    displayValue: "ballyronan-derry",
  });

  static readonly BALLYRONEY_DOWN = new Location({
    id: "1795",
    displayName: "Ballyroney, Down",
    displayValue: "ballyroney-down",
  });

  static readonly BALLYROON_CORK = new Location({
    id: "1242",
    displayName: "Ballyroon, Cork",
    displayValue: "ballyroon-cork",
  });

  static readonly BALLYRUSHBOY_DOWN = new Location({
    id: "1796",
    displayName: "Ballyrushboy, Down",
    displayValue: "ballyrushboy-down",
  });

  static readonly BALLYSAX_KILDARE = new Location({
    id: "2495",
    displayName: "Ballysax, Kildare",
    displayValue: "ballysax-kildare",
  });

  static readonly BALLYSHANNON_AND_SURROUNDS_DONEGAL = new Location({
    id: "4068",
    displayName: "Ballyshannon (& Surrounds), Donegal",
    displayValue: "ballyshannon-and-surrounds-donegal",
  });

  static readonly BALLYSHANNON_DONEGAL = new Location({
    id: "719",
    displayName: "Ballyshannon, Donegal",
    displayValue: "ballyshannon-donegal",
  });

  static readonly BALLYSHANNON_KILDARE = new Location({
    id: "2496",
    displayName: "Ballyshannon, Kildare",
    displayValue: "ballyshannon-kildare",
  });

  static readonly BALLYSHEEDY_LIMERICK = new Location({
    id: "2891",
    displayName: "Ballysheedy, Limerick",
    displayValue: "ballysheedy-limerick",
  });

  static readonly BALLYSILLAN_ANTRIM = new Location({
    id: "1049",
    displayName: "Ballysillan, Antrim",
    displayValue: "ballysillan-antrim",
  });

  static readonly BALLYSIMON_LIMERICK = new Location({
    id: "2892",
    displayName: "Ballysimon, Limerick",
    displayValue: "ballysimon-limerick",
  });

  static readonly BALLYSLOE_TIPPERARY = new Location({
    id: "2090",
    displayName: "Ballysloe, Tipperary",
    displayValue: "ballysloe-tipperary",
  });

  static readonly BALLYSTEEN_LIMERICK = new Location({
    id: "2893",
    displayName: "Ballysteen, Limerick",
    displayValue: "ballysteen-limerick",
  });

  static readonly BALLYTOOHY_MAYO = new Location({
    id: "953",
    displayName: "Ballytoohy, Mayo",
    displayValue: "ballytoohy-mayo",
  });

  static readonly BALLYTRUCKLE_WATERFORD = new Location({
    id: "3700",
    displayName: "Ballytruckle, Waterford",
    displayValue: "ballytruckle-waterford",
  });

  static readonly BALLYVARY_MAYO = new Location({
    id: "3159",
    displayName: "Ballyvary, Mayo",
    displayValue: "ballyvary-mayo",
  });

  static readonly BALLYVAUGHAN_CLARE = new Location({
    id: "1546",
    displayName: "Ballyvaughan, Clare",
    displayValue: "ballyvaughan-clare",
  });

  static readonly BALLYVOGE_CORK = new Location({
    id: "1243",
    displayName: "Ballyvoge, Cork",
    displayValue: "ballyvoge-cork",
  });

  static readonly BALLYVOLANE_CORK = new Location({
    id: "1244",
    displayName: "Ballyvolane, Cork",
    displayValue: "ballyvolane-cork",
  });

  static readonly BALLYVONEEN_GALWAY = new Location({
    id: "2217",
    displayName: "Ballyvoneen, Galway",
    displayValue: "ballyvoneen-galway",
  });

  static readonly BALLYVOURNEY_CORK = new Location({
    id: "1245",
    displayName: "Ballyvourney, Cork",
    displayValue: "ballyvourney-cork",
  });

  static readonly BALLYWALTER_DOWN = new Location({
    id: "1961",
    displayName: "Ballywalter, Down",
    displayValue: "ballywalter-down",
  });

  static readonly BALLYWARD_DOWN = new Location({
    id: "1962",
    displayName: "Ballyward, Down",
    displayValue: "ballyward-down",
  });

  static readonly BALLYWILLIAM_WEXFORD = new Location({
    id: "3832",
    displayName: "Ballywilliam, Wexford",
    displayValue: "ballywilliam-wexford",
  });

  static readonly BALNAMORE_ANTRIM = new Location({
    id: "1050",
    displayName: "Balnamore, Antrim",
    displayValue: "balnamore-antrim",
  });

  static readonly BALRATH_MEATH = new Location({
    id: "3289",
    displayName: "Balrath, Meath",
    displayValue: "balrath-meath",
  });

  static readonly BALROTHERY_DUBLIN = new Location({
    id: "2064",
    displayName: "Balrothery, Dublin",
    displayValue: "balrothery-dublin",
  });

  static readonly BALSCADDAN_DUBLIN = new Location({
    id: "2065",
    displayName: "Balscaddan, Dublin",
    displayValue: "balscaddan-dublin",
  });

  static readonly BALTIMORE_CORK = new Location({
    id: "1246",
    displayName: "Baltimore, Cork",
    displayValue: "baltimore-cork",
  });

  static readonly BALTINGLASS_WICKLOW = new Location({
    id: "3986",
    displayName: "Baltinglass, Wicklow",
    displayValue: "baltinglass-wicklow",
  });

  static readonly BALTRAY_LOUTH = new Location({
    id: "3012",
    displayName: "Baltray, Louth",
    displayValue: "baltray-louth",
  });

  static readonly BANADA_SLIGO = new Location({
    id: "3494",
    displayName: "Banada, Sligo",
    displayValue: "banada-sligo",
  });

  static readonly BANAGHER_OFFALY = new Location({
    id: "603",
    displayName: "Banagher, Offaly",
    displayValue: "banagher-offaly",
  });

  static readonly BANBRIDGE_DOWN = new Location({
    id: "1844",
    displayName: "Banbridge, Down",
    displayValue: "banbridge-down",
  });

  static readonly BANDON_AND_SURROUNDS_CORK = new Location({
    id: "4069",
    displayName: "Bandon (& Surrounds), Cork",
    displayValue: "bandon-and-surrounds-cork",
  });

  static readonly BANDON_CORK = new Location({
    id: "1247",
    displayName: "Bandon, Cork",
    displayValue: "bandon-cork",
  });

  static readonly BANDUFF_CORK = new Location({
    id: "1249",
    displayName: "Banduff, Cork",
    displayValue: "banduff-cork",
  });

  static readonly BANEMORE_LIMERICK = new Location({
    id: "2894",
    displayName: "Banemore, Limerick",
    displayValue: "banemore-limerick",
  });

  static readonly BANGOR_ERRIS_MAYO = new Location({
    id: "3160",
    displayName: "Bangor Erris, Mayo",
    displayValue: "bangor-erris-mayo",
  });

  static readonly BANGOR_DOWN = new Location({
    id: "1963",
    displayName: "Bangor, Down",
    displayValue: "bangor-down",
  });

  static readonly BANNA_KERRY = new Location({
    id: "2735",
    displayName: "Banna, Kerry",
    displayValue: "banna-kerry",
  });

  static readonly BANNAGHER_GALWAY = new Location({
    id: "2218",
    displayName: "Bannagher, Galway",
    displayValue: "bannagher-galway",
  });

  static readonly BANNOW_WEXFORD = new Location({
    id: "3833",
    displayName: "Bannow, Wexford",
    displayValue: "bannow-wexford",
  });

  static readonly BANOGUE_LIMERICK = new Location({
    id: "2895",
    displayName: "Banogue, Limerick",
    displayValue: "banogue-limerick",
  });

  static readonly BANSHA_TIPPERARY = new Location({
    id: "2091",
    displayName: "Bansha, Tipperary",
    displayValue: "bansha-tipperary",
  });

  static readonly BANTEER_CORK = new Location({
    id: "1250",
    displayName: "Banteer, Cork",
    displayValue: "banteer-cork",
  });

  static readonly BANTRY_AND_SURROUNDS_CORK = new Location({
    id: "4070",
    displayName: "Bantry (& Surrounds), Cork",
    displayValue: "bantry-and-surrounds-cork",
  });

  static readonly BANTRY_CORK = new Location({
    id: "1251",
    displayName: "Bantry, Cork",
    displayValue: "bantry-cork",
  });

  static readonly BAREFIELD_CLARE = new Location({
    id: "1547",
    displayName: "Barefield, Clare",
    displayValue: "barefield-clare",
  });

  static readonly BARLEY_COVE_CORK = new Location({
    id: "1252",
    displayName: "Barley Cove, Cork",
    displayValue: "barley-cove-cork",
  });

  static readonly BARNA_GALWAY = new Location({
    id: "2219",
    displayName: "Barna, Galway",
    displayValue: "barna-galway",
  });

  static readonly BARNA_LIMERICK = new Location({
    id: "2896",
    displayName: "Barna, Limerick",
    displayValue: "barna-limerick",
  });

  static readonly BARNA_OFFALY = new Location({
    id: "1163",
    displayName: "Barna, Offaly",
    displayValue: "barna-offaly",
  });

  static readonly BARNACAHOGE_MAYO = new Location({
    id: "3161",
    displayName: "Barnacahoge, Mayo",
    displayValue: "barnacahoge-mayo",
  });

  static readonly BARNADARRIG_WICKLOW = new Location({
    id: "3987",
    displayName: "Barnadarrig, Wicklow",
    displayValue: "barnadarrig-wicklow",
  });

  static readonly BARNADERG_GALWAY = new Location({
    id: "1899",
    displayName: "Barnaderg, Galway",
    displayValue: "barnaderg-galway",
  });

  static readonly BARNATRA_MAYO = new Location({
    id: "3162",
    displayName: "Barnatra, Mayo",
    displayValue: "barnatra-mayo",
  });

  static readonly BARNAVARA_CORK = new Location({
    id: "357",
    displayName: "Barnavara, Cork",
    displayValue: "barnavara-cork",
  });

  static readonly BARNESMORE_DONEGAL = new Location({
    id: "720",
    displayName: "Barnesmore, Donegal",
    displayValue: "barnesmore-donegal",
  });

  static readonly BARNTOWN_WEXFORD = new Location({
    id: "3834",
    displayName: "Barntown, Wexford",
    displayValue: "barntown-wexford",
  });

  static readonly BARNYCARROLL_MAYO = new Location({
    id: "3163",
    displayName: "Barnycarroll, Mayo",
    displayValue: "barnycarroll-mayo",
  });

  static readonly BARRACK_VILLAGE_KILKENNY = new Location({
    id: "804",
    displayName: "Barrack Village, Kilkenny",
    displayValue: "barrack-village-kilkenny",
  });

  static readonly BARRADUFF_KERRY = new Location({
    id: "2736",
    displayName: "Barraduff, Kerry",
    displayValue: "barraduff-kerry",
  });

  static readonly BARRIGONE_LIMERICK = new Location({
    id: "2897",
    displayName: "Barrigone, Limerick",
    displayValue: "barrigone-limerick",
  });

  static readonly BARRINGTONSBRIDGE_LIMERICK = new Location({
    id: "2898",
    displayName: "Barringtonsbridge, Limerick",
    displayValue: "barringtonsbridge-limerick",
  });

  static readonly BARRY_LONGFORD = new Location({
    id: "3133",
    displayName: "Barry, Longford",
    displayValue: "barry-longford",
  });

  static readonly BARTLEMY_CORK = new Location({
    id: "1253",
    displayName: "Bartlemy, Cork",
    displayValue: "bartlemy-cork",
  });

  static readonly BATTERSTOWN_MEATH = new Location({
    id: "3290",
    displayName: "Batterstown, Meath",
    displayValue: "batterstown-meath",
  });

  static readonly BAUNSKEHA_KILKENNY = new Location({
    id: "805",
    displayName: "Baunskeha, Kilkenny",
    displayValue: "baunskeha-kilkenny",
  });

  static readonly BAUNTLIEVE_CLARE = new Location({
    id: "275",
    displayName: "Bauntlieve, Clare",
    displayValue: "bauntlieve-clare",
  });

  static readonly BAWNBOY_CAVAN = new Location({
    id: "1494",
    displayName: "Bawnboy, Cavan",
    displayValue: "bawnboy-cavan",
  });

  static readonly BAYSIDE_DUBLIN = new Location({
    id: "691",
    displayName: "Bayside, Dublin",
    displayValue: "bayside-dublin",
  });

  static readonly BEAGH_GALWAY = new Location({
    id: "1900",
    displayName: "Beagh, Galway",
    displayValue: "beagh-galway",
  });

  static readonly BEAGH_LEITRIM = new Location({
    id: "2306",
    displayName: "Beagh, Leitrim",
    displayValue: "beagh-leitrim",
  });

  static readonly BEAL_KERRY = new Location({
    id: "1108",
    displayName: "Beal, Kerry",
    displayValue: "beal-kerry",
  });

  static readonly BEALACLUGGA_CLARE = new Location({
    id: "1548",
    displayName: "Bealaclugga, Clare",
    displayValue: "bealaclugga-clare",
  });

  static readonly BEALAD_CROSS_ROADS_CORK = new Location({
    id: "358",
    displayName: "Bealad Cross Roads, Cork",
    displayValue: "bealad-cross-roads-cork",
  });

  static readonly BEALAHA_CLARE = new Location({
    id: "1549",
    displayName: "Bealaha, Clare",
    displayValue: "bealaha-clare",
  });

  static readonly BEALDANGAN_GALWAY = new Location({
    id: "675",
    displayName: "Bealdangan, Galway",
    displayValue: "bealdangan-galway",
  });

  static readonly BEALIN_WESTMEATH = new Location({
    id: "3758",
    displayName: "Bealin, Westmeath",
    displayValue: "bealin-westmeath",
  });

  static readonly BEALNABLATH_CORK = new Location({
    id: "1266",
    displayName: "Bealnablath, Cork",
    displayValue: "bealnablath-cork",
  });

  static readonly BEARA_CORK = new Location({
    id: "1268",
    displayName: "Beara, Cork",
    displayValue: "beara-cork",
  });

  static readonly BEAUFORT_KERRY = new Location({
    id: "1110",
    displayName: "Beaufort, Kerry",
    displayValue: "beaufort-kerry",
  });

  static readonly BEAUMONT_DUBLIN = new Location({
    id: "692",
    displayName: "Beaumont, Dublin",
    displayValue: "beaumont-dublin",
  });

  static readonly BECTIVE_MEATH = new Location({
    id: "3291",
    displayName: "Bective, Meath",
    displayValue: "bective-meath",
  });

  static readonly BEECHMOUNT_ANTRIM = new Location({
    id: "1052",
    displayName: "Beechmount, Antrim",
    displayValue: "beechmount-antrim",
  });

  static readonly BEENNASKEHY_CORK = new Location({
    id: "347",
    displayName: "Beennaskehy, Cork",
    displayValue: "beennaskehy-cork",
  });

  static readonly BEERSBRIDGE_DOWN = new Location({
    id: "1975",
    displayName: "Beersbridge, Down",
    displayValue: "beersbridge-down",
  });

  static readonly BEKAN_MAYO = new Location({
    id: "3164",
    displayName: "Bekan, Mayo",
    displayValue: "bekan-mayo",
  });

  static readonly BELCARRA_MAYO = new Location({
    id: "3165",
    displayName: "Belcarra, Mayo",
    displayValue: "belcarra-mayo",
  });

  static readonly BELCLARE_GALWAY = new Location({
    id: "1901",
    displayName: "Belclare, Galway",
    displayValue: "belclare-galway",
  });

  static readonly BELCOO_FERMANAGH = new Location({
    id: "147",
    displayName: "Belcoo, Fermanagh",
    displayValue: "belcoo-fermanagh",
  });

  static readonly BELDERRIG_MAYO = new Location({
    id: "3166",
    displayName: "Belderrig, Mayo",
    displayValue: "belderrig-mayo",
  });

  static readonly BELFARSAD_MAYO = new Location({
    id: "3167",
    displayName: "Belfarsad, Mayo",
    displayValue: "belfarsad-mayo",
  });

  static readonly BELFAST_CITY = new Location({
    id: "36",
    displayName: "Belfast City",
    displayValue: "belfast-city",
  });

  static readonly BELFAST_CITY_CENTRE_ANTRIM = new Location({
    id: "52",
    displayName: "Belfast City Centre, Antrim",
    displayValue: "belfast-city-centre-antrim",
  });

  static readonly BELFAST_COMMUTER_TOWNS_ANTRIM = new Location({
    id: "55",
    displayName: "Belfast Commuter Towns, Antrim",
    displayValue: "belfast-commuter-towns-antrim",
  });

  static readonly BELFIELD_DUBLIN = new Location({
    id: "2066",
    displayName: "Belfield, Dublin",
    displayValue: "belfield-dublin",
  });

  static readonly BELGOOLY_CORK = new Location({
    id: "1269",
    displayName: "Belgooly, Cork",
    displayValue: "belgooly-cork",
  });

  static readonly BELLACORICK_MAYO = new Location({
    id: "3168",
    displayName: "Bellacorick, Mayo",
    displayValue: "bellacorick-mayo",
  });

  static readonly BELLADRIHID_SLIGO = new Location({
    id: "3495",
    displayName: "Belladrihid, Sligo",
    displayValue: "belladrihid-sligo",
  });

  static readonly BELLAGARVAUN_MAYO = new Location({
    id: "3169",
    displayName: "Bellagarvaun, Mayo",
    displayValue: "bellagarvaun-mayo",
  });

  static readonly BELLAGHY_DERRY = new Location({
    id: "495",
    displayName: "Bellaghy, Derry",
    displayValue: "bellaghy-derry",
  });

  static readonly BELLAGHY_SLIGO = new Location({
    id: "3496",
    displayName: "Bellaghy, Sligo",
    displayValue: "bellaghy-sligo",
  });

  static readonly BELLAHY_SLIGO = new Location({
    id: "3497",
    displayName: "Bellahy, Sligo",
    displayValue: "bellahy-sligo",
  });

  static readonly BELLANACARGY_CAVAN = new Location({
    id: "236",
    displayName: "Bellanacargy, Cavan",
    displayValue: "bellanacargy-cavan",
  });

  static readonly BELLANAGARE_ROSCOMMON = new Location({
    id: "1114",
    displayName: "Bellanagare, Roscommon",
    displayValue: "bellanagare-roscommon",
  });

  static readonly BELLANALECK_FERMANAGH = new Location({
    id: "2180",
    displayName: "Bellanaleck, Fermanagh",
    displayValue: "bellanaleck-fermanagh",
  });

  static readonly BELLANAMORE_DONEGAL = new Location({
    id: "518",
    displayName: "Bellanamore, Donegal",
    displayValue: "bellanamore-donegal",
  });

  static readonly BELLEEK_ARMAGH = new Location({
    id: "1606",
    displayName: "Belleek, Armagh",
    displayValue: "belleek-armagh",
  });

  static readonly BELLEEK_FERMANAGH = new Location({
    id: "2181",
    displayName: "Belleek, Fermanagh",
    displayValue: "belleek-fermanagh",
  });

  static readonly BELLEVUE_ANTRIM = new Location({
    id: "1054",
    displayName: "Bellevue, Antrim",
    displayValue: "bellevue-antrim",
  });

  static readonly BELLEWSTOWN_MEATH = new Location({
    id: "3292",
    displayName: "Bellewstown, Meath",
    displayValue: "bellewstown-meath",
  });

  static readonly BELLHARBOUR_CLARE = new Location({
    id: "1550",
    displayName: "Bellharbour, Clare",
    displayValue: "bellharbour-clare",
  });

  static readonly BELMONT_DOWN = new Location({
    id: "1976",
    displayName: "Belmont, Down",
    displayValue: "belmont-down",
  });

  static readonly BELMONT_OFFALY = new Location({
    id: "604",
    displayName: "Belmont, Offaly",
    displayValue: "belmont-offaly",
  });

  static readonly BELMULLET_MAYO = new Location({
    id: "3170",
    displayName: "Belmullet, Mayo",
    displayValue: "belmullet-mayo",
  });

  static readonly BELTRA_MAYO = new Location({
    id: "257",
    displayName: "Beltra, Mayo",
    displayValue: "beltra-mayo",
  });

  static readonly BELTRA_SLIGO = new Location({
    id: "3498",
    displayName: "Beltra, Sligo",
    displayValue: "beltra-sligo",
  });

  static readonly BELTURBET_CAVAN = new Location({
    id: "1495",
    displayName: "Belturbet, Cavan",
    displayValue: "belturbet-cavan",
  });

  static readonly BELVELLY_CORK = new Location({
    id: "1270",
    displayName: "Belvelly, Cork",
    displayValue: "belvelly-cork",
  });

  static readonly BELVILLE_MAYO = new Location({
    id: "958",
    displayName: "Belville, Mayo",
    displayValue: "belville-mayo",
  });

  static readonly BELVOIR_DOWN = new Location({
    id: "1977",
    displayName: "Belvoir, Down",
    displayValue: "belvoir-down",
  });

  static readonly BENBURB_TYRONE = new Location({
    id: "3650",
    displayName: "Benburb, Tyrone",
    displayValue: "benburb-tyrone",
  });

  static readonly BENDOORAGH_ANTRIM = new Location({
    id: "201",
    displayName: "Bendooragh, Antrim",
    displayValue: "bendooragh-antrim",
  });

  static readonly BENNEKERRY_CARLOW = new Location({
    id: "1670",
    displayName: "Bennekerry, Carlow",
    displayValue: "bennekerry-carlow",
  });

  static readonly BENNETTSBRIDGE_KILKENNY = new Location({
    id: "2776",
    displayName: "Bennettsbridge, Kilkenny",
    displayValue: "bennettsbridge-kilkenny",
  });

  static readonly BERAGH_TYRONE = new Location({
    id: "3651",
    displayName: "Beragh, Tyrone",
    displayValue: "beragh-tyrone",
  });

  static readonly BERE_ISLAND_CORK = new Location({
    id: "1271",
    displayName: "Bere Island, Cork",
    displayValue: "bere-island-cork",
  });

  static readonly BERRINGS_CORK = new Location({
    id: "1272",
    displayName: "Berrings, Cork",
    displayValue: "berrings-cork",
  });

  static readonly BESSBROOK_ARMAGH = new Location({
    id: "1461",
    displayName: "Bessbrook, Armagh",
    displayValue: "bessbrook-armagh",
  });

  static readonly BETTYSTOWN_AND_SURROUNDS_MEATH = new Location({
    id: "4071",
    displayName: "Bettystown (& Surrounds), Meath",
    displayValue: "bettystown-and-surrounds-meath",
  });

  static readonly BETTYSTOWN_MEATH = new Location({
    id: "3293",
    displayName: "Bettystown, Meath",
    displayValue: "bettystown-meath",
  });

  static readonly BILBOA_LAOIS = new Location({
    id: "2854",
    displayName: "Bilboa, Laois",
    displayValue: "bilboa-laois",
  });

  static readonly BILLIS_BRIDGE_CAVAN = new Location({
    id: "1496",
    displayName: "Billis Bridge, Cavan",
    displayValue: "billis-bridge-cavan",
  });

  static readonly BIRDHILL_TIPPERARY = new Location({
    id: "2092",
    displayName: "Birdhill, Tipperary",
    displayValue: "birdhill-tipperary",
  });

  static readonly BIRR_AND_SURROUNDS_OFFALY = new Location({
    id: "4072",
    displayName: "Birr (& Surrounds), Offaly",
    displayValue: "birr-and-surrounds-offaly",
  });

  static readonly BIRR_OFFALY = new Location({
    id: "605",
    displayName: "Birr, Offaly",
    displayValue: "birr-offaly",
  });

  static readonly BISHOPSTOWN_CORK = new Location({
    id: "1273",
    displayName: "Bishopstown, Cork",
    displayValue: "bishopstown-cork",
  });

  static readonly BLACK_LION_OFFALY = new Location({
    id: "1103",
    displayName: "Black Lion, Offaly",
    displayValue: "black-lion-offaly",
  });

  static readonly BLACKBULL_MEATH = new Location({
    id: "1040",
    displayName: "Blackbull, Meath",
    displayValue: "blackbull-meath",
  });

  static readonly BLACKLION_CAVAN = new Location({
    id: "1424",
    displayName: "Blacklion, Cavan",
    displayValue: "blacklion-cavan",
  });

  static readonly BLACKPOOL_CORK = new Location({
    id: "1274",
    displayName: "Blackpool, Cork",
    displayValue: "blackpool-cork",
  });

  static readonly BLACKROCK_CORK = new Location({
    id: "1275",
    displayName: "Blackrock, Cork",
    displayValue: "blackrock-cork",
  });

  static readonly BLACKROCK_DUBLIN = new Location({
    id: "2067",
    displayName: "Blackrock, Dublin",
    displayValue: "blackrock-dublin",
  });

  static readonly BLACKROCK_LOUTH = new Location({
    id: "3025",
    displayName: "Blackrock, Louth",
    displayValue: "blackrock-louth",
  });

  static readonly BLACKSKULL_DOWN = new Location({
    id: "1978",
    displayName: "Blackskull, Down",
    displayValue: "blackskull-down",
  });

  static readonly BLACKSTAFF_ANTRIM = new Location({
    id: "202",
    displayName: "Blackstaff, Antrim",
    displayValue: "blackstaff-antrim",
  });

  static readonly BLACKWATER_WEXFORD = new Location({
    id: "3835",
    displayName: "Blackwater, Wexford",
    displayValue: "blackwater-wexford",
  });

  static readonly BLACKWATERTOWN_ARMAGH = new Location({
    id: "1462",
    displayName: "Blackwatertown, Armagh",
    displayValue: "blackwatertown-armagh",
  });

  static readonly BLAINROE_WICKLOW = new Location({
    id: "3988",
    displayName: "Blainroe, Wicklow",
    displayValue: "blainroe-wicklow",
  });

  static readonly BLANCHARDSTOWN_DUBLIN = new Location({
    id: "2068",
    displayName: "Blanchardstown, Dublin",
    displayValue: "blanchardstown-dublin",
  });

  static readonly BLANEY_FERMANAGH = new Location({
    id: "2182",
    displayName: "Blaney, Fermanagh",
    displayValue: "blaney-fermanagh",
  });

  static readonly BLARNEY_CORK = new Location({
    id: "1276",
    displayName: "Blarney, Cork",
    displayValue: "blarney-cork",
  });

  static readonly BLEARY_DOWN = new Location({
    id: "1985",
    displayName: "Bleary, Down",
    displayValue: "bleary-down",
  });

  static readonly BLESSINGTON_AND_SURROUNDS_WICKLOW = new Location({
    id: "4073",
    displayName: "Blessington (& Surrounds), Wicklow",
    displayValue: "blessington-and-surrounds-wicklow",
  });

  static readonly BLESSINGTON_WICKLOW = new Location({
    id: "3989",
    displayName: "Blessington, Wicklow",
    displayValue: "blessington-wicklow",
  });

  static readonly BLOOMFIELD_DOWN = new Location({
    id: "1986",
    displayName: "Bloomfield, Down",
    displayValue: "bloomfield-down",
  });

  static readonly BLUE_BALL_OFFALY = new Location({
    id: "637",
    displayName: "Blue Ball, Offaly",
    displayValue: "blue-ball-offaly",
  });

  static readonly BLUEBELL_DUBLIN = new Location({
    id: "2069",
    displayName: "Bluebell, Dublin",
    displayValue: "bluebell-dublin",
  });

  static readonly BLUEFORD_CORK = new Location({
    id: "348",
    displayName: "Blueford, Cork",
    displayValue: "blueford-cork",
  });

  static readonly BOARDMILLS_DOWN = new Location({
    id: "613",
    displayName: "Boardmills, Down",
    displayValue: "boardmills-down",
  });

  static readonly BODYKE_CLARE = new Location({
    id: "1551",
    displayName: "Bodyke, Clare",
    displayValue: "bodyke-clare",
  });

  static readonly BOFEENAUN_MAYO = new Location({
    id: "258",
    displayName: "Bofeenaun, Mayo",
    displayValue: "bofeenaun-mayo",
  });

  static readonly BOGAY_DONEGAL = new Location({
    id: "722",
    displayName: "Bogay, Donegal",
    displayValue: "bogay-donegal",
  });

  static readonly BOGGAN_MEATH = new Location({
    id: "3294",
    displayName: "Boggan, Meath",
    displayValue: "boggan-meath",
  });

  static readonly BOGGAUN_TIPPERARY = new Location({
    id: "2093",
    displayName: "Boggaun, Tipperary",
    displayValue: "boggaun-tipperary",
  });

  static readonly BOHATCH_CLARE = new Location({
    id: "284",
    displayName: "Bohatch, Clare",
    displayValue: "bohatch-clare",
  });

  static readonly BOHAUN_MAYO = new Location({
    id: "259",
    displayName: "Bohaun, Mayo",
    displayValue: "bohaun-mayo",
  });

  static readonly BOHEESHIL_KERRY = new Location({
    id: "1306",
    displayName: "Boheeshil, Kerry",
    displayValue: "boheeshil-kerry",
  });

  static readonly BOHER_LIMERICK = new Location({
    id: "2899",
    displayName: "Boher, Limerick",
    displayValue: "boher-limerick",
  });

  static readonly BOHERAPHUCA_OFFALY = new Location({
    id: "1104",
    displayName: "Boheraphuca, Offaly",
    displayValue: "boheraphuca-offaly",
  });

  static readonly BOHERBUE_CORK = new Location({
    id: "1277",
    displayName: "Boherbue, Cork",
    displayValue: "boherbue-cork",
  });

  static readonly BOHEREEN_LIMERICK = new Location({
    id: "2900",
    displayName: "Bohereen, Limerick",
    displayValue: "bohereen-limerick",
  });

  static readonly BOHERLAHAN_TIPPERARY = new Location({
    id: "2094",
    displayName: "Boherlahan, Tipperary",
    displayValue: "boherlahan-tipperary",
  });

  static readonly BOHERMEEN_MEATH = new Location({
    id: "3295",
    displayName: "Bohermeen, Meath",
    displayValue: "bohermeen-meath",
  });

  static readonly BOHERMORE_GALWAY = new Location({
    id: "1902",
    displayName: "Bohermore, Galway",
    displayValue: "bohermore-galway",
  });

  static readonly BOHERNABREENA_DUBLIN = new Location({
    id: "2070",
    displayName: "Bohernabreena, Dublin",
    displayValue: "bohernabreena-dublin",
  });

  static readonly BOHERQUILL_WESTMEATH = new Location({
    id: "3759",
    displayName: "Boherquill, Westmeath",
    displayValue: "boherquill-westmeath",
  });

  static readonly BOHO_FERMANAGH = new Location({
    id: "2183",
    displayName: "Boho, Fermanagh",
    displayValue: "boho-fermanagh",
  });

  static readonly BOHOLA_MAYO = new Location({
    id: "260",
    displayName: "Bohola, Mayo",
    displayValue: "bohola-mayo",
  });

  static readonly BOLEY_KILDARE = new Location({
    id: "2497",
    displayName: "Boley, Kildare",
    displayValue: "boley-kildare",
  });

  static readonly BOLEYBEG_EAST_GALWAY = new Location({
    id: "676",
    displayName: "Boleybeg East, Galway",
    displayValue: "boleybeg-east-galway",
  });

  static readonly BOLEYBEG_GALWAY = new Location({
    id: "1903",
    displayName: "Boleybeg, Galway",
    displayValue: "boleybeg-galway",
  });

  static readonly BOLEYNASRUHAUN_GALWAY = new Location({
    id: "2378",
    displayName: "Boleynasruhaun, Galway",
    displayValue: "boleynasruhaun-galway",
  });

  static readonly BOLINGLANNA_MAYO = new Location({
    id: "961",
    displayName: "Bolinglanna, Mayo",
    displayValue: "bolinglanna-mayo",
  });

  static readonly BONANE_KERRY = new Location({
    id: "1307",
    displayName: "Bonane, Kerry",
    displayValue: "bonane-kerry",
  });

  static readonly BONNICONLON_MAYO = new Location({
    id: "261",
    displayName: "Bonniconlon, Mayo",
    displayValue: "bonniconlon-mayo",
  });

  static readonly BOOLA_WATERFORD = new Location({
    id: "3701",
    displayName: "Boola, Waterford",
    displayValue: "boola-waterford",
  });

  static readonly BOOLAKENNEDY_TIPPERARY = new Location({
    id: "2095",
    displayName: "Boolakennedy, Tipperary",
    displayValue: "boolakennedy-tipperary",
  });

  static readonly BOOLATTIN_WATERFORD = new Location({
    id: "151",
    displayName: "Boolattin, Waterford",
    displayValue: "boolattin-waterford",
  });

  static readonly BOOLAVOGUE_WEXFORD = new Location({
    id: "3836",
    displayName: "Boolavogue, Wexford",
    displayValue: "boolavogue-wexford",
  });

  static readonly BOOLTEENS_KERRY = new Location({
    id: "1308",
    displayName: "Boolteens, Kerry",
    displayValue: "boolteens-kerry",
  });

  static readonly BOOLYDUFF_CLARE = new Location({
    id: "280",
    displayName: "Boolyduff, Clare",
    displayValue: "boolyduff-clare",
  });

  static readonly BOOTERSTOWN_DUBLIN = new Location({
    id: "2071",
    displayName: "Booterstown, Dublin",
    displayValue: "booterstown-dublin",
  });

  static readonly BORNACOOLA_LEITRIM = new Location({
    id: "2307",
    displayName: "Bornacoola, Leitrim",
    displayValue: "bornacoola-leitrim",
  });

  static readonly BORNACOOLA_LONGFORD = new Location({
    id: "3134",
    displayName: "Bornacoola, Longford",
    displayValue: "bornacoola-longford",
  });

  static readonly BORRIS_CARLOW = new Location({
    id: "1671",
    displayName: "Borris, Carlow",
    displayValue: "borris-carlow",
  });

  static readonly BORRIS_IN_OSSORY_LAOIS = new Location({
    id: "2855",
    displayName: "Borris-in-Ossory, Laois",
    displayValue: "borris-in-ossory-laois",
  });

  static readonly BORRISOKANE_TIPPERARY = new Location({
    id: "2096",
    displayName: "Borrisokane, Tipperary",
    displayValue: "borrisokane-tipperary",
  });

  static readonly BORRISOLEIGH_TIPPERARY = new Location({
    id: "2097",
    displayName: "Borrisoleigh, Tipperary",
    displayValue: "borrisoleigh-tipperary",
  });

  static readonly BOSTON_CLARE = new Location({
    id: "1552",
    displayName: "Boston, Clare",
    displayValue: "boston-clare",
  });

  static readonly BOTANIC_ANTRIM = new Location({
    id: "203",
    displayName: "Botanic, Antrim",
    displayValue: "botanic-antrim",
  });

  static readonly BOULADUFF_TIPPERARY = new Location({
    id: "2143",
    displayName: "Bouladuff, Tipperary",
    displayValue: "bouladuff-tipperary",
  });

  static readonly BOYERSTOWN_MEATH = new Location({
    id: "3296",
    displayName: "Boyerstown, Meath",
    displayValue: "boyerstown-meath",
  });

  static readonly BOYLE_AND_SURROUNDS_ROSCOMMON = new Location({
    id: "4074",
    displayName: "Boyle (& Surrounds), Roscommon",
    displayValue: "boyle-and-surrounds-roscommon",
  });

  static readonly BOYLE_ROSCOMMON = new Location({
    id: "3417",
    displayName: "Boyle, Roscommon",
    displayValue: "boyle-roscommon",
  });

  static readonly BOYLE_SLIGO = new Location({
    id: "3499",
    displayName: "Boyle, Sligo",
    displayValue: "boyle-sligo",
  });

  static readonly BRACKAGH_OFFALY = new Location({
    id: "638",
    displayName: "Brackagh, Offaly",
    displayValue: "brackagh-offaly",
  });

  static readonly BRACKLIN_WESTMEATH = new Location({
    id: "1230",
    displayName: "Bracklin, Westmeath",
    displayValue: "bracklin-westmeath",
  });

  static readonly BRACKLOON_MAYO = new Location({
    id: "262",
    displayName: "Brackloon, Mayo",
    displayValue: "brackloon-mayo",
  });

  static readonly BRACKLOON_ROSCOMMON = new Location({
    id: "3418",
    displayName: "Brackloon, Roscommon",
    displayValue: "brackloon-roscommon",
  });

  static readonly BRACKNAGH_OFFALY = new Location({
    id: "639",
    displayName: "Bracknagh, Offaly",
    displayValue: "bracknagh-offaly",
  });

  static readonly BRACKNAGH_ROSCOMMON = new Location({
    id: "3419",
    displayName: "Bracknagh, Roscommon",
    displayValue: "bracknagh-roscommon",
  });

  static readonly BRACKWANSHA_MAYO = new Location({
    id: "3172",
    displayName: "Brackwansha, Mayo",
    displayValue: "brackwansha-mayo",
  });

  static readonly BRANDON_KERRY = new Location({
    id: "1309",
    displayName: "Brandon, Kerry",
    displayValue: "brandon-kerry",
  });

  static readonly BRANIEL_DOWN = new Location({
    id: "1987",
    displayName: "Braniel, Down",
    displayValue: "braniel-down",
  });

  static readonly BRANNOCKSTOWN_KILDARE = new Location({
    id: "2498",
    displayName: "Brannockstown, Kildare",
    displayValue: "brannockstown-kildare",
  });

  static readonly BRAY_WICKLOW = new Location({
    id: "3990",
    displayName: "Bray, Wicklow",
    displayValue: "bray-wicklow",
  });

  static readonly BREAFFY_MAYO = new Location({
    id: "3173",
    displayName: "Breaffy, Mayo",
    displayValue: "breaffy-mayo",
  });

  static readonly BREAGHVA_CLARE = new Location({
    id: "1553",
    displayName: "Breaghva, Clare",
    displayValue: "breaghva-clare",
  });

  static readonly BREANLOUGHAUN_GALWAY = new Location({
    id: "2393",
    displayName: "Breanloughaun, Galway",
    displayValue: "breanloughaun-galway",
  });

  static readonly BREE_WEXFORD = new Location({
    id: "3837",
    displayName: "Bree, Wexford",
    displayValue: "bree-wexford",
  });

  static readonly BREENAGH_DONEGAL = new Location({
    id: "723",
    displayName: "Breenagh, Donegal",
    displayValue: "breenagh-donegal",
  });

  static readonly BRIARFIELD_ROSCOMMON = new Location({
    id: "3420",
    displayName: "Briarfield, Roscommon",
    displayValue: "briarfield-roscommon",
  });

  static readonly BRIARHILL_GALWAY = new Location({
    id: "2404",
    displayName: "Briarhill, Galway",
    displayValue: "briarhill-galway",
  });

  static readonly BRICKEENS_MAYO = new Location({
    id: "300",
    displayName: "Brickeens, Mayo",
    displayValue: "brickeens-mayo",
  });

  static readonly BRICKETSTOWN_WEXFORD = new Location({
    id: "3838",
    displayName: "Bricketstown, Wexford",
    displayValue: "bricketstown-wexford",
  });

  static readonly BRIDEBRIDGE_CORK = new Location({
    id: "359",
    displayName: "Bridebridge, Cork",
    displayValue: "bridebridge-cork",
  });

  static readonly BRIDESWELL_ROSCOMMON = new Location({
    id: "3421",
    displayName: "Brideswell, Roscommon",
    displayValue: "brideswell-roscommon",
  });

  static readonly BRIDESWELL_WEXFORD = new Location({
    id: "3839",
    displayName: "Brideswell, Wexford",
    displayValue: "brideswell-wexford",
  });

  static readonly BRIDGELAND_WICKLOW = new Location({
    id: "1381",
    displayName: "Bridgeland, Wicklow",
    displayValue: "bridgeland-wicklow",
  });

  static readonly BRIDGEND_DONEGAL = new Location({
    id: "724",
    displayName: "Bridgend, Donegal",
    displayValue: "bridgend-donegal",
  });

  static readonly BRIDGETOWN_CLARE = new Location({
    id: "1554",
    displayName: "Bridgetown, Clare",
    displayValue: "bridgetown-clare",
  });

  static readonly BRIDGETOWN_DONEGAL = new Location({
    id: "725",
    displayName: "Bridgetown, Donegal",
    displayValue: "bridgetown-donegal",
  });

  static readonly BRIDGETOWN_WEXFORD = new Location({
    id: "3840",
    displayName: "Bridgetown, Wexford",
    displayValue: "bridgetown-wexford",
  });

  static readonly BRINLACK_DONEGAL = new Location({
    id: "726",
    displayName: "Brinlack, Donegal",
    displayValue: "brinlack-donegal",
  });

  static readonly BRITTAS_BAY_WICKLOW = new Location({
    id: "3992",
    displayName: "Brittas Bay, Wicklow",
    displayValue: "brittas-bay-wicklow",
  });

  static readonly BRITTAS_DUBLIN = new Location({
    id: "2072",
    displayName: "Brittas, Dublin",
    displayValue: "brittas-dublin",
  });

  static readonly BRITTAS_LIMERICK = new Location({
    id: "2901",
    displayName: "Brittas, Limerick",
    displayValue: "brittas-limerick",
  });

  static readonly BRITWAY_CORK = new Location({
    id: "1278",
    displayName: "Britway, Cork",
    displayValue: "britway-cork",
  });

  static readonly BROADFORD_CLARE = new Location({
    id: "1555",
    displayName: "Broadford, Clare",
    displayValue: "broadford-clare",
  });

  static readonly BROADFORD_KILDARE = new Location({
    id: "2499",
    displayName: "Broadford, Kildare",
    displayValue: "broadford-kildare",
  });

  static readonly BROADFORD_LIMERICK = new Location({
    id: "2902",
    displayName: "Broadford, Limerick",
    displayValue: "broadford-limerick",
  });

  static readonly BROADWAY_WEXFORD = new Location({
    id: "3841",
    displayName: "Broadway, Wexford",
    displayValue: "broadway-wexford",
  });

  static readonly BROCKAGH_DONEGAL = new Location({
    id: "527",
    displayName: "Brockagh, Donegal",
    displayValue: "brockagh-donegal",
  });

  static readonly BROCKAGH_GALWAY = new Location({
    id: "2405",
    displayName: "Brockagh, Galway",
    displayValue: "brockagh-galway",
  });

  static readonly BROOKEBOROUGH_FERMANAGH = new Location({
    id: "2184",
    displayName: "Brookeborough, Fermanagh",
    displayValue: "brookeborough-fermanagh",
  });

  static readonly BROOMFIELD_MONAGHAN = new Location({
    id: "3344",
    displayName: "Broomfield, Monaghan",
    displayValue: "broomfield-monaghan",
  });

  static readonly BROSNA_KERRY = new Location({
    id: "1310",
    displayName: "Brosna, Kerry",
    displayValue: "brosna-kerry",
  });

  static readonly BROSNA_OFFALY = new Location({
    id: "640",
    displayName: "Brosna, Offaly",
    displayValue: "brosna-offaly",
  });

  static readonly BROUGHAL_OFFALY = new Location({
    id: "641",
    displayName: "Broughal, Offaly",
    displayValue: "broughal-offaly",
  });

  static readonly BROUGHSHANE_ANTRIM = new Location({
    id: "204",
    displayName: "Broughshane, Antrim",
    displayValue: "broughshane-antrim",
  });

  static readonly BROWNSTOWN_WATERFORD = new Location({
    id: "152",
    displayName: "Brownstown, Waterford",
    displayValue: "brownstown-waterford",
  });

  static readonly BRUCKLESS_DONEGAL = new Location({
    id: "727",
    displayName: "Bruckless, Donegal",
    displayValue: "bruckless-donegal",
  });

  static readonly BRUFF_LIMERICK = new Location({
    id: "2903",
    displayName: "Bruff, Limerick",
    displayValue: "bruff-limerick",
  });

  static readonly BRUREE_LIMERICK = new Location({
    id: "2655",
    displayName: "Bruree, Limerick",
    displayValue: "bruree-limerick",
  });

  static readonly BRYANSFORD_DOWN = new Location({
    id: "1988",
    displayName: "Bryansford, Down",
    displayValue: "bryansford-down",
  });

  static readonly BUCKODE_LEITRIM = new Location({
    id: "2308",
    displayName: "Buckode, Leitrim",
    displayValue: "buckode-leitrim",
  });

  static readonly BULGADEN_LIMERICK = new Location({
    id: "2656",
    displayName: "Bulgaden, Limerick",
    displayValue: "bulgaden-limerick",
  });

  static readonly BULLAUN_GALWAY = new Location({
    id: "2406",
    displayName: "Bullaun, Galway",
    displayValue: "bullaun-galway",
  });

  static readonly BUNACURRY_MAYO = new Location({
    id: "301",
    displayName: "Bunacurry, Mayo",
    displayValue: "bunacurry-mayo",
  });

  static readonly BUNAW_KERRY = new Location({
    id: "738",
    displayName: "Bunaw, Kerry",
    displayValue: "bunaw-kerry",
  });

  static readonly BUNBEG_DONEGAL = new Location({
    id: "728",
    displayName: "Bunbeg, Donegal",
    displayValue: "bunbeg-donegal",
  });

  static readonly BUNBROSNA_WESTMEATH = new Location({
    id: "3760",
    displayName: "Bunbrosna, Westmeath",
    displayValue: "bunbrosna-westmeath",
  });

  static readonly BUNCLODY_CARLOW = new Location({
    id: "1672",
    displayName: "Bunclody, Carlow",
    displayValue: "bunclody-carlow",
  });

  static readonly BUNCLODY_WEXFORD = new Location({
    id: "3842",
    displayName: "Bunclody, Wexford",
    displayValue: "bunclody-wexford",
  });

  static readonly BUNCRANA_AND_SURROUNDS_DONEGAL = new Location({
    id: "4076",
    displayName: "Buncrana (& Surrounds), Donegal",
    displayValue: "buncrana-and-surrounds-donegal",
  });

  static readonly BUNCRANA_DONEGAL = new Location({
    id: "729",
    displayName: "Buncrana, Donegal",
    displayValue: "buncrana-donegal",
  });

  static readonly BUNDORAN_AND_SURROUNDS_DONEGAL = new Location({
    id: "4077",
    displayName: "Bundoran (& Surrounds), Donegal",
    displayValue: "bundoran-and-surrounds-donegal",
  });

  static readonly BUNDORAN_DONEGAL = new Location({
    id: "730",
    displayName: "Bundoran, Donegal",
    displayValue: "bundoran-donegal",
  });

  static readonly BUNLAHY_LONGFORD = new Location({
    id: "3135",
    displayName: "Bunlahy, Longford",
    displayValue: "bunlahy-longford",
  });

  static readonly BUNLICKY_LIMERICK = new Location({
    id: "874",
    displayName: "Bunlicky, Limerick",
    displayValue: "bunlicky-limerick",
  });

  static readonly BUNMAHON_WATERFORD = new Location({
    id: "3702",
    displayName: "Bunmahon, Waterford",
    displayValue: "bunmahon-waterford",
  });

  static readonly BUNNAFOLLISTRAN_MAYO = new Location({
    id: "3174",
    displayName: "Bunnafollistran, Mayo",
    displayValue: "bunnafollistran-mayo",
  });

  static readonly BUNNAGLASS_GALWAY = new Location({
    id: "2228",
    displayName: "Bunnaglass, Galway",
    displayValue: "bunnaglass-galway",
  });

  static readonly BUNNAHOWEN_MAYO = new Location({
    id: "3175",
    displayName: "Bunnahowen, Mayo",
    displayValue: "bunnahowen-mayo",
  });

  static readonly BUNNAHOWN_GALWAY = new Location({
    id: "2229",
    displayName: "Bunnahown, Galway",
    displayValue: "bunnahown-galway",
  });

  static readonly BUNNANADDEN_SLIGO = new Location({
    id: "3500",
    displayName: "Bunnanadden, Sligo",
    displayValue: "bunnanadden-sligo",
  });

  static readonly BUNNYCONNELLAN_MAYO = new Location({
    id: "3183",
    displayName: "Bunnyconnellan, Mayo",
    displayValue: "bunnyconnellan-mayo",
  });

  static readonly BUNRATTY_CLARE = new Location({
    id: "1556",
    displayName: "Bunratty, Clare",
    displayValue: "bunratty-clare",
  });

  static readonly BURNCHURCH_KILKENNY = new Location({
    id: "2777",
    displayName: "Burnchurch, Kilkenny",
    displayValue: "burnchurch-kilkenny",
  });

  static readonly BURNCOURT_TIPPERARY = new Location({
    id: "2210",
    displayName: "Burncourt, Tipperary",
    displayValue: "burncourt-tipperary",
  });

  static readonly BURNFOOT_DONEGAL = new Location({
    id: "731",
    displayName: "Burnfoot, Donegal",
    displayValue: "burnfoot-donegal",
  });

  static readonly BURNFORT_CORK = new Location({
    id: "1279",
    displayName: "Burnfort, Cork",
    displayValue: "burnfort-cork",
  });

  static readonly BURREN_COLLEGE_OF_ART_CLARE = new Location({
    id: "4306",
    displayName: "Burren College of Art, Clare",
    displayValue: "burren-college-of-art-clare",
  });

  static readonly BURREN_MAYO = new Location({
    id: "3184",
    displayName: "Burren, Mayo",
    displayValue: "burren-mayo",
  });

  static readonly BURRENFADA_CLARE = new Location({
    id: "286",
    displayName: "Burrenfada, Clare",
    displayValue: "burrenfada-clare",
  });

  static readonly BURROW_WEXFORD = new Location({
    id: "3843",
    displayName: "Burrow, Wexford",
    displayValue: "burrow-wexford",
  });

  static readonly BURT_DONEGAL = new Location({
    id: "732",
    displayName: "Burt, Donegal",
    displayValue: "burt-donegal",
  });

  static readonly BURTONPORT_DONEGAL = new Location({
    id: "733",
    displayName: "Burtonport, Donegal",
    displayValue: "burtonport-donegal",
  });

  static readonly BURTOWN_KILDARE = new Location({
    id: "2500",
    displayName: "Burtown, Kildare",
    displayValue: "burtown-kildare",
  });

  static readonly BUSHFIELD_TIPPERARY = new Location({
    id: "2211",
    displayName: "Bushfield, Tipperary",
    displayValue: "bushfield-tipperary",
  });

  static readonly BUSHMILLS_ANTRIM = new Location({
    id: "205",
    displayName: "Bushmills, Antrim",
    displayValue: "bushmills-antrim",
  });

  static readonly BUSHY_PARK_GALWAY = new Location({
    id: "1911",
    displayName: "Bushy Park, Galway",
    displayValue: "bushy-park-galway",
  });

  static readonly BUTLER_S_BRIDGE_CAVAN = new Location({
    id: "1425",
    displayName: "Butler's Bridge, Cavan",
    displayValue: "butler-s-bridge-cavan",
  });

  static readonly BUTLERSTOWN_CORK = new Location({
    id: "1280",
    displayName: "Butlerstown, Cork",
    displayValue: "butlerstown-cork",
  });

  static readonly BUTLERSTOWN_WATERFORD = new Location({
    id: "3703",
    displayName: "Butlerstown, Waterford",
    displayValue: "butlerstown-waterford",
  });

  static readonly BUTTEVANT_CORK = new Location({
    id: "1282",
    displayName: "Buttevant, Cork",
    displayValue: "buttevant-cork",
  });

  static readonly BWEENG_CORK = new Location({
    id: "1283",
    displayName: "Bweeng, Cork",
    displayValue: "bweeng-cork",
  });

  static readonly CABINTEELY_DUBLIN = new Location({
    id: "2073",
    displayName: "Cabinteely, Dublin",
    displayValue: "cabinteely-dublin",
  });

  static readonly CABRA_DUBLIN = new Location({
    id: "2074",
    displayName: "Cabra, Dublin",
    displayValue: "cabra-dublin",
  });

  static readonly CADAMSTOWN_KILDARE = new Location({
    id: "2501",
    displayName: "Cadamstown, Kildare",
    displayValue: "cadamstown-kildare",
  });

  static readonly CADAMSTOWN_OFFALY = new Location({
    id: "642",
    displayName: "Cadamstown, Offaly",
    displayValue: "cadamstown-offaly",
  });

  static readonly CAHER_CLARE = new Location({
    id: "1557",
    displayName: "Caher, Clare",
    displayValue: "caher-clare",
  });

  static readonly CAHER_MAYO = new Location({
    id: "3185",
    displayName: "Caher, Mayo",
    displayValue: "caher-mayo",
  });

  static readonly CAHERAGH_CORK = new Location({
    id: "1284",
    displayName: "Caheragh, Cork",
    displayValue: "caheragh-cork",
  });

  static readonly CAHERBARNAGH_CORK = new Location({
    id: "360",
    displayName: "Caherbarnagh, Cork",
    displayValue: "caherbarnagh-cork",
  });

  static readonly CAHERBARNAGH_KERRY = new Location({
    id: "1311",
    displayName: "Caherbarnagh, Kerry",
    displayValue: "caherbarnagh-kerry",
  });

  static readonly CAHERCONLISH_LIMERICK = new Location({
    id: "2698",
    displayName: "Caherconlish, Limerick",
    displayValue: "caherconlish-limerick",
  });

  static readonly CAHERCONNEL_CLARE = new Location({
    id: "288",
    displayName: "Caherconnel, Clare",
    displayValue: "caherconnel-clare",
  });

  static readonly CAHERDANIEL_KERRY = new Location({
    id: "1312",
    displayName: "Caherdaniel, Kerry",
    displayValue: "caherdaniel-kerry",
  });

  static readonly CAHERDAVIN_LIMERICK = new Location({
    id: "1825",
    displayName: "Caherdavin, Limerick",
    displayValue: "caherdavin-limerick",
  });

  static readonly CAHEREA_CLARE = new Location({
    id: "285",
    displayName: "Caherea, Clare",
    displayValue: "caherea-clare",
  });

  static readonly CAHERLISTRANE_GALWAY = new Location({
    id: "1912",
    displayName: "Caherlistrane, Galway",
    displayValue: "caherlistrane-galway",
  });

  static readonly CAHERMORE_CORK = new Location({
    id: "361",
    displayName: "Cahermore, Cork",
    displayValue: "cahermore-cork",
  });

  static readonly CAHERMORE_GALWAY = new Location({
    id: "2230",
    displayName: "Cahermore, Galway",
    displayValue: "cahermore-galway",
  });

  static readonly CAHERMURPHY_CLARE = new Location({
    id: "1558",
    displayName: "Cahermurphy, Clare",
    displayValue: "cahermurphy-clare",
  });

  static readonly CAHERNAHALLA_TIPPERARY = new Location({
    id: "3513",
    displayName: "Cahernahalla, Tipperary",
    displayValue: "cahernahalla-tipperary",
  });

  static readonly CAHERONAUN_GALWAY = new Location({
    id: "1913",
    displayName: "Caheronaun, Galway",
    displayValue: "caheronaun-galway",
  });

  static readonly CAHERSIVEEN_KERRY = new Location({
    id: "1313",
    displayName: "Cahersiveen, Kerry",
    displayValue: "cahersiveen-kerry",
  });

  static readonly CAHIR_AND_SURROUNDS_TIPPERARY = new Location({
    id: "4078",
    displayName: "Cahir (& Surrounds), Tipperary",
    displayValue: "cahir-and-surrounds-tipperary",
  });

  static readonly CAHIR_TIPPERARY = new Location({
    id: "3514",
    displayName: "Cahir, Tipperary",
    displayValue: "cahir-tipperary",
  });

  static readonly CAHORE_WEXFORD = new Location({
    id: "3844",
    displayName: "Cahore, Wexford",
    displayValue: "cahore-wexford",
  });

  static readonly CAIRNSHILL_DOWN = new Location({
    id: "1989",
    displayName: "Cairnshill, Down",
    displayValue: "cairnshill-down",
  });

  static readonly CALEDON_TYRONE = new Location({
    id: "3652",
    displayName: "Caledon, Tyrone",
    displayValue: "caledon-tyrone",
  });

  static readonly CALLAN_AND_SURROUNDS_KILKENNY = new Location({
    id: "4079",
    displayName: "Callan (& Surrounds), Kilkenny",
    displayValue: "callan-and-surrounds-kilkenny",
  });

  static readonly CALLAN_KILKENNY = new Location({
    id: "2778",
    displayName: "Callan, Kilkenny",
    displayValue: "callan-kilkenny",
  });

  static readonly CALLOW_GALWAY = new Location({
    id: "2231",
    displayName: "Callow, Galway",
    displayValue: "callow-galway",
  });

  static readonly CALLOW_MAYO = new Location({
    id: "3186",
    displayName: "Callow, Mayo",
    displayValue: "callow-mayo",
  });

  static readonly CALLOW_ROSCOMMON = new Location({
    id: "3422",
    displayName: "Callow, Roscommon",
    displayValue: "callow-roscommon",
  });

  static readonly CALRY_SLIGO = new Location({
    id: "3501",
    displayName: "Calry, Sligo",
    displayValue: "calry-sligo",
  });

  static readonly CALTRA_GALWAY = new Location({
    id: "1914",
    displayName: "Caltra, Galway",
    displayValue: "caltra-galway",
  });

  static readonly CALTRAGHLEA_GALWAY = new Location({
    id: "2232",
    displayName: "Caltraghlea, Galway",
    displayValue: "caltraghlea-galway",
  });

  static readonly CALVERSTOWN_KILDARE = new Location({
    id: "2502",
    displayName: "Calverstown, Kildare",
    displayValue: "calverstown-kildare",
  });

  static readonly CAMLOUGH_ARMAGH = new Location({
    id: "1664",
    displayName: "Camlough, Armagh",
    displayValue: "camlough-armagh",
  });

  static readonly CAMOLIN_WEXFORD = new Location({
    id: "3845",
    displayName: "Camolin, Wexford",
    displayValue: "camolin-wexford",
  });

  static readonly CAMP_KERRY = new Location({
    id: "1321",
    displayName: "Camp, Kerry",
    displayValue: "camp-kerry",
  });

  static readonly CAMPILE_WEXFORD = new Location({
    id: "3846",
    displayName: "Campile, Wexford",
    displayValue: "campile-wexford",
  });

  static readonly CAMROSS_LAOIS = new Location({
    id: "2856",
    displayName: "Camross, Laois",
    displayValue: "camross-laois",
  });

  static readonly CAMROSS_WEXFORD = new Location({
    id: "3847",
    displayName: "Camross, Wexford",
    displayValue: "camross-wexford",
  });

  static readonly CAMUS_GALWAY = new Location({
    id: "2233",
    displayName: "Camus, Galway",
    displayValue: "camus-galway",
  });

  static readonly CANNINGSTOWN_CAVAN = new Location({
    id: "1497",
    displayName: "Canningstown, Cavan",
    displayValue: "canningstown-cavan",
  });

  static readonly CAPE_CLEAR_CORK = new Location({
    id: "1662",
    displayName: "Cape Clear, Cork",
    displayValue: "cape-clear-cork",
  });

  static readonly CAPPAGH_WHITE_TIPPERARY = new Location({
    id: "334",
    displayName: "Cappagh White, Tipperary",
    displayValue: "cappagh-white-tipperary",
  });

  static readonly CAPPAGH_GALWAY = new Location({
    id: "2234",
    displayName: "Cappagh, Galway",
    displayValue: "cappagh-galway",
  });

  static readonly CAPPAGH_LIMERICK = new Location({
    id: "1826",
    displayName: "Cappagh, Limerick",
    displayValue: "cappagh-limerick",
  });

  static readonly CAPPAGH_TYRONE = new Location({
    id: "113",
    displayName: "Cappagh, Tyrone",
    displayValue: "cappagh-tyrone",
  });

  static readonly CAPPAGH_WATERFORD = new Location({
    id: "3704",
    displayName: "Cappagh, Waterford",
    displayValue: "cappagh-waterford",
  });

  static readonly CAPPAGHMORE_GALWAY = new Location({
    id: "680",
    displayName: "Cappaghmore, Galway",
    displayValue: "cappaghmore-galway",
  });

  static readonly CAPPALINNAN_LAOIS = new Location({
    id: "2857",
    displayName: "Cappalinnan, Laois",
    displayValue: "cappalinnan-laois",
  });

  static readonly CAPPAMORE_LIMERICK = new Location({
    id: "1827",
    displayName: "Cappamore, Limerick",
    displayValue: "cappamore-limerick",
  });

  static readonly CAPPANACREHA_MAYO = new Location({
    id: "3187",
    displayName: "Cappanacreha, Mayo",
    displayValue: "cappanacreha-mayo",
  });

  static readonly CAPPANRUSH_WESTMEATH = new Location({
    id: "3761",
    displayName: "Cappanrush, Westmeath",
    displayValue: "cappanrush-westmeath",
  });

  static readonly CAPPATAGGLE_GALWAY = new Location({
    id: "2235",
    displayName: "Cappataggle, Galway",
    displayValue: "cappataggle-galway",
  });

  static readonly CAPPAWHITE_TIPPERARY = new Location({
    id: "3542",
    displayName: "Cappawhite, Tipperary",
    displayValue: "cappawhite-tipperary",
  });

  static readonly CAPPEEN_CORK = new Location({
    id: "367",
    displayName: "Cappeen, Cork",
    displayValue: "cappeen-cork",
  });

  static readonly CAPPOQUIN_WATERFORD = new Location({
    id: "3705",
    displayName: "Cappoquin, Waterford",
    displayValue: "cappoquin-waterford",
  });

  static readonly CARAGH_LAKE_KERRY = new Location({
    id: "1322",
    displayName: "Caragh Lake, Kerry",
    displayValue: "caragh-lake-kerry",
  });

  static readonly CARBURY_KILDARE = new Location({
    id: "2503",
    displayName: "Carbury, Kildare",
    displayValue: "carbury-kildare",
  });

  static readonly CARGAN_ANTRIM = new Location({
    id: "216",
    displayName: "Cargan, Antrim",
    displayValue: "cargan-antrim",
  });

  static readonly CARK_DONEGAL = new Location({
    id: "528",
    displayName: "Cark, Donegal",
    displayValue: "cark-donegal",
  });

  static readonly CARLANSTOWN_MEATH = new Location({
    id: "3297",
    displayName: "Carlanstown, Meath",
    displayValue: "carlanstown-meath",
  });

  static readonly CARLINGFORD_LOUTH = new Location({
    id: "3026",
    displayName: "Carlingford, Louth",
    displayValue: "carlingford-louth",
  });

  static readonly CARLOW_COLLEGE_CARLOW = new Location({
    id: "4307",
    displayName: "Carlow College, Carlow",
    displayValue: "carlow-college-carlow",
  });

  static readonly CARLOW_INSTITUTE_OF_TECHNOLOGY_CARLOW = new Location({
    id: "4308",
    displayName: "Carlow Institute of Technology, Carlow",
    displayValue: "carlow-institute-of-technology-carlow",
  });

  static readonly CARLOW_TOWN_AND_SURROUNDS_CARLOW = new Location({
    id: "4080",
    displayName: "Carlow Town (& Surrounds), Carlow",
    displayValue: "carlow-town-and-surrounds-carlow",
  });

  static readonly CARLOW_TOWN_CARLOW = new Location({
    id: "1673",
    displayName: "Carlow Town, Carlow",
    displayValue: "carlow-town-carlow",
  });

  static readonly CARN_DONEGAL = new Location({
    id: "734",
    displayName: "Carn, Donegal",
    displayValue: "carn-donegal",
  });

  static readonly CARNA_GALWAY = new Location({
    id: "2236",
    displayName: "Carna, Galway",
    displayValue: "carna-galway",
  });

  static readonly CARNAGHAN_DONEGAL = new Location({
    id: "529",
    displayName: "Carnaghan, Donegal",
    displayValue: "carnaghan-donegal",
  });

  static readonly CARNAROSS_MEATH = new Location({
    id: "3298",
    displayName: "Carnaross, Meath",
    displayValue: "carnaross-meath",
  });

  static readonly CARNDONAGH_AND_SURROUNDS_DONEGAL = new Location({
    id: "4081",
    displayName: "Carndonagh (& Surrounds), Donegal",
    displayValue: "carndonagh-and-surrounds-donegal",
  });

  static readonly CARNDONAGH_DONEGAL = new Location({
    id: "735",
    displayName: "Carndonagh, Donegal",
    displayValue: "carndonagh-donegal",
  });

  static readonly CARNE_WEXFORD = new Location({
    id: "3848",
    displayName: "Carne, Wexford",
    displayValue: "carne-wexford",
  });

  static readonly CARNEW_WICKLOW = new Location({
    id: "3993",
    displayName: "Carnew, Wicklow",
    displayValue: "carnew-wicklow",
  });

  static readonly CARNEY_SLIGO = new Location({
    id: "3502",
    displayName: "Carney, Sligo",
    displayValue: "carney-sligo",
  });

  static readonly CARNEY_TIPPERARY = new Location({
    id: "3543",
    displayName: "Carney, Tipperary",
    displayValue: "carney-tipperary",
  });

  static readonly CARNLOUGH_ANTRIM = new Location({
    id: "1423",
    displayName: "Carnlough, Antrim",
    displayValue: "carnlough-antrim",
  });

  static readonly CARNMORE_GALWAY = new Location({
    id: "2237",
    displayName: "Carnmore, Galway",
    displayValue: "carnmore-galway",
  });

  static readonly CARNONEEN_GALWAY = new Location({
    id: "681",
    displayName: "Carnoneen, Galway",
    displayValue: "carnoneen-galway",
  });

  static readonly CARNOWEN_DONEGAL = new Location({
    id: "736",
    displayName: "Carnowen, Donegal",
    displayValue: "carnowen-donegal",
  });

  static readonly CARPENTERSTOWN_DUBLIN = new Location({
    id: "2075",
    displayName: "Carpenterstown, Dublin",
    displayValue: "carpenterstown-dublin",
  });

  static readonly CARRACASTLE_MAYO = new Location({
    id: "3188",
    displayName: "Carracastle, Mayo",
    displayValue: "carracastle-mayo",
  });

  static readonly CARRAGH_KILDARE = new Location({
    id: "2504",
    displayName: "Carragh, Kildare",
    displayValue: "carragh-kildare",
  });

  static readonly CARRAHOLLY_MAYO = new Location({
    id: "3189",
    displayName: "Carraholly, Mayo",
    displayValue: "carraholly-mayo",
  });

  static readonly CARRAROE_GALWAY = new Location({
    id: "2238",
    displayName: "Carraroe, Galway",
    displayValue: "carraroe-galway",
  });

  static readonly CARRAROE_SLIGO = new Location({
    id: "3503",
    displayName: "Carraroe, Sligo",
    displayValue: "carraroe-sligo",
  });

  static readonly CARRICK_DONEGAL = new Location({
    id: "737",
    displayName: "Carrick, Donegal",
    displayValue: "carrick-donegal",
  });

  static readonly CARRICK_WEXFORD = new Location({
    id: "3849",
    displayName: "Carrick, Wexford",
    displayValue: "carrick-wexford",
  });

  static readonly CARRICK_ON_SHANNON_AND_SURROUNDS_LEITRIM = new Location({
    id: "4083",
    displayName: "Carrick-on-Shannon (& Surrounds), Leitrim",
    displayValue: "carrick-on-shannon-and-surrounds-leitrim",
  });

  static readonly CARRICK_ON_SHANNON_AND_SURROUNDS_ROSCOMMON = new Location({
    id: "4084",
    displayName: "Carrick-on-Shannon (& Surrounds), Roscommon",
    displayValue: "carrick-on-shannon-and-surrounds-roscommon",
  });

  static readonly CARRICK_ON_SHANNON_LEITRIM = new Location({
    id: "2335",
    displayName: "Carrick-on-Shannon, Leitrim",
    displayValue: "carrick-on-shannon-leitrim",
  });

  static readonly CARRICK_ON_SHANNON_ROSCOMMON = new Location({
    id: "3423",
    displayName: "Carrick-on-Shannon, Roscommon",
    displayValue: "carrick-on-shannon-roscommon",
  });

  static readonly CARRICK_ON_SUIR_AND_SURROUNDS_TIPPERARY = new Location({
    id: "4085",
    displayName: "Carrick-on-Suir (& Surrounds), Tipperary",
    displayValue: "carrick-on-suir-and-surrounds-tipperary",
  });

  static readonly CARRICK_ON_SUIR_AND_SURROUNDS_WATERFORD = new Location({
    id: "4086",
    displayName: "Carrick-on-Suir (& Surrounds), Waterford",
    displayValue: "carrick-on-suir-and-surrounds-waterford",
  });

  static readonly CARRICK_ON_SUIR_TIPPERARY = new Location({
    id: "3545",
    displayName: "Carrick-on-Suir, Tipperary",
    displayValue: "carrick-on-suir-tipperary",
  });

  static readonly CARRICK_ON_SUIR_WATERFORD = new Location({
    id: "3706",
    displayName: "Carrick-on-Suir, Waterford",
    displayValue: "carrick-on-suir-waterford",
  });

  static readonly CARRICKABOY_CAVAN = new Location({
    id: "1498",
    displayName: "Carrickaboy, Cavan",
    displayValue: "carrickaboy-cavan",
  });

  static readonly CARRICKASHEDOGE_MONAGHAN = new Location({
    id: "1158",
    displayName: "Carrickashedoge, Monaghan",
    displayValue: "carrickashedoge-monaghan",
  });

  static readonly CARRICKBEG_TIPPERARY = new Location({
    id: "3544",
    displayName: "Carrickbeg, Tipperary",
    displayValue: "carrickbeg-tipperary",
  });

  static readonly CARRICKBOY_LONGFORD = new Location({
    id: "3136",
    displayName: "Carrickboy, Longford",
    displayValue: "carrickboy-longford",
  });

  static readonly CARRICKFERGUS_ANTRIM = new Location({
    id: "206",
    displayName: "Carrickfergus, Antrim",
    displayValue: "carrickfergus-antrim",
  });

  static readonly CARRICKFINN_DONEGAL = new Location({
    id: "745",
    displayName: "Carrickfinn, Donegal",
    displayValue: "carrickfinn-donegal",
  });

  static readonly CARRICKMACROSS_AND_SURROUNDS_MONAGHAN = new Location({
    id: "4082",
    displayName: "Carrickmacross (& Surrounds), Monaghan",
    displayValue: "carrickmacross-and-surrounds-monaghan",
  });

  static readonly CARRICKMACROSS_MONAGHAN = new Location({
    id: "3345",
    displayName: "Carrickmacross, Monaghan",
    displayValue: "carrickmacross-monaghan",
  });

  static readonly CARRICKMINES_DUBLIN = new Location({
    id: "2076",
    displayName: "Carrickmines, Dublin",
    displayValue: "carrickmines-dublin",
  });

  static readonly CARRICKMORE_TYRONE = new Location({
    id: "3653",
    displayName: "Carrickmore, Tyrone",
    displayValue: "carrickmore-tyrone",
  });

  static readonly CARRICKROE_MONAGHAN = new Location({
    id: "3346",
    displayName: "Carrickroe, Monaghan",
    displayValue: "carrickroe-monaghan",
  });

  static readonly CARRIG_BEG_CARLOW = new Location({
    id: "210",
    displayName: "Carrig Beg, Carlow",
    displayValue: "carrig-beg-carlow",
  });

  static readonly CARRIG_CORK = new Location({
    id: "362",
    displayName: "Carrig, Cork",
    displayValue: "carrig-cork",
  });

  static readonly CARRIGADROHID_CORK = new Location({
    id: "1663",
    displayName: "Carrigadrohid, Cork",
    displayValue: "carrigadrohid-cork",
  });

  static readonly CARRIGAGULLA_CORK = new Location({
    id: "363",
    displayName: "Carrigagulla, Cork",
    displayValue: "carrigagulla-cork",
  });

  static readonly CARRIGAHOLT_CLARE = new Location({
    id: "1559",
    displayName: "Carrigaholt, Clare",
    displayValue: "carrigaholt-clare",
  });

  static readonly CARRIGAHORIG_TIPPERARY = new Location({
    id: "3546",
    displayName: "Carrigahorig, Tipperary",
    displayValue: "carrigahorig-tipperary",
  });

  static readonly CARRIGALINE_AND_SURROUNDS_CORK = new Location({
    id: "4087",
    displayName: "Carrigaline (& Surrounds), Cork",
    displayValue: "carrigaline-and-surrounds-cork",
  });

  static readonly CARRIGALINE_CORK = new Location({
    id: "1285",
    displayName: "Carrigaline, Cork",
    displayValue: "carrigaline-cork",
  });

  static readonly CARRIGALLEN_LEITRIM = new Location({
    id: "2336",
    displayName: "Carrigallen, Leitrim",
    displayValue: "carrigallen-leitrim",
  });

  static readonly CARRIGAN_CAVAN = new Location({
    id: "228",
    displayName: "Carrigan, Cavan",
    displayValue: "carrigan-cavan",
  });

  static readonly CARRIGANS_DONEGAL = new Location({
    id: "747",
    displayName: "Carrigans, Donegal",
    displayValue: "carrigans-donegal",
  });

  static readonly CARRIGART_DONEGAL = new Location({
    id: "748",
    displayName: "Carrigart, Donegal",
    displayValue: "carrigart-donegal",
  });

  static readonly CARRIGATOGHER_TIPPERARY = new Location({
    id: "3547",
    displayName: "Carrigatogher, Tipperary",
    displayValue: "carrigatogher-tipperary",
  });

  static readonly CARRIGBYRNE_WEXFORD = new Location({
    id: "3850",
    displayName: "Carrigbyrne, Wexford",
    displayValue: "carrigbyrne-wexford",
  });

  static readonly CARRIGEEN_KILKENNY = new Location({
    id: "2779",
    displayName: "Carrigeen, Kilkenny",
    displayValue: "carrigeen-kilkenny",
  });

  static readonly CARRIGEEN_WATERFORD = new Location({
    id: "3707",
    displayName: "Carrigeen, Waterford",
    displayValue: "carrigeen-waterford",
  });

  static readonly CARRIGGOWER_WICKLOW = new Location({
    id: "3994",
    displayName: "Carriggower, Wicklow",
    displayValue: "carriggower-wicklow",
  });

  static readonly CARRIGKERRY_LIMERICK = new Location({
    id: "1828",
    displayName: "Carrigkerry, Limerick",
    displayValue: "carrigkerry-limerick",
  });

  static readonly CARRIGNAVAR_CORK = new Location({
    id: "1734",
    displayName: "Carrignavar, Cork",
    displayValue: "carrignavar-cork",
  });

  static readonly CARRIGROHANE_CORK = new Location({
    id: "1735",
    displayName: "Carrigrohane, Cork",
    displayValue: "carrigrohane-cork",
  });

  static readonly CARRIGTWOHILL_AND_SURROUNDS_CORK = new Location({
    id: "4088",
    displayName: "Carrigtwohill (& Surrounds), Cork",
    displayValue: "carrigtwohill-and-surrounds-cork",
  });

  static readonly CARRIGTWOHILL_CORK = new Location({
    id: "1736",
    displayName: "Carrigtwohill, Cork",
    displayValue: "carrigtwohill-cork",
  });

  static readonly CARRON_CLARE = new Location({
    id: "1560",
    displayName: "Carron, Clare",
    displayValue: "carron-clare",
  });

  static readonly CARROWBEHY_ROSCOMMON = new Location({
    id: "1066",
    displayName: "Carrowbehy, Roscommon",
    displayValue: "carrowbehy-roscommon",
  });

  static readonly CARROWDORE_DOWN = new Location({
    id: "1999",
    displayName: "Carrowdore, Down",
    displayValue: "carrowdore-down",
  });

  static readonly CARROWKEEL_DONEGAL = new Location({
    id: "749",
    displayName: "Carrowkeel, Donegal",
    displayValue: "carrowkeel-donegal",
  });

  static readonly CARROWKEEL_GALWAY = new Location({
    id: "2239",
    displayName: "Carrowkeel, Galway",
    displayValue: "carrowkeel-galway",
  });

  static readonly CARROWKEEL_SLIGO = new Location({
    id: "3504",
    displayName: "Carrowkeel, Sligo",
    displayValue: "carrowkeel-sligo",
  });

  static readonly CARROWKENNEDY_MAYO = new Location({
    id: "3190",
    displayName: "Carrowkennedy, Mayo",
    displayValue: "carrowkennedy-mayo",
  });

  static readonly CARROWMORE_GALWAY = new Location({
    id: "2240",
    displayName: "Carrowmore, Galway",
    displayValue: "carrowmore-galway",
  });

  static readonly CARROWMORE_MAYO = new Location({
    id: "3191",
    displayName: "Carrowmore, Mayo",
    displayValue: "carrowmore-mayo",
  });

  static readonly CARROWMORE_SLIGO = new Location({
    id: "3505",
    displayName: "Carrowmore, Sligo",
    displayValue: "carrowmore-sligo",
  });

  static readonly CARROWMOREKNOCK_GALWAY = new Location({
    id: "2407",
    displayName: "Carrowmoreknock, Galway",
    displayValue: "carrowmoreknock-galway",
  });

  static readonly CARROWNACON_MAYO = new Location({
    id: "3192",
    displayName: "Carrownacon, Mayo",
    displayValue: "carrownacon-mayo",
  });

  static readonly CARROWNEDEN_SLIGO = new Location({
    id: "3506",
    displayName: "Carrowneden, Sligo",
    displayValue: "carrowneden-sligo",
  });

  static readonly CARROWNTANLIS_GALWAY = new Location({
    id: "2408",
    displayName: "Carrowntanlis, Galway",
    displayValue: "carrowntanlis-galway",
  });

  static readonly CARROWREAGH_ROSCOMMON = new Location({
    id: "1067",
    displayName: "Carrowreagh, Roscommon",
    displayValue: "carrowreagh-roscommon",
  });

  static readonly CARROWREAGH_SLIGO = new Location({
    id: "3507",
    displayName: "Carrowreagh, Sligo",
    displayValue: "carrowreagh-sligo",
  });

  static readonly CARROWRORY_LONGFORD = new Location({
    id: "3137",
    displayName: "Carrowrory, Longford",
    displayValue: "carrowrory-longford",
  });

  static readonly CARROWTEIGE_MAYO = new Location({
    id: "3193",
    displayName: "Carrowteige, Mayo",
    displayValue: "carrowteige-mayo",
  });

  static readonly CARRYDUFF_DOWN = new Location({
    id: "2000",
    displayName: "Carryduff, Down",
    displayValue: "carryduff-down",
  });

  static readonly CASHEEN_GALWAY = new Location({
    id: "2415",
    displayName: "Casheen, Galway",
    displayValue: "casheen-galway",
  });

  static readonly CASHEL_AND_SURROUNDS_TIPPERARY = new Location({
    id: "4089",
    displayName: "Cashel (& Surrounds), Tipperary",
    displayValue: "cashel-and-surrounds-tipperary",
  });

  static readonly CASHEL_DONEGAL = new Location({
    id: "530",
    displayName: "Cashel, Donegal",
    displayValue: "cashel-donegal",
  });

  static readonly CASHEL_GALWAY = new Location({
    id: "2416",
    displayName: "Cashel, Galway",
    displayValue: "cashel-galway",
  });

  static readonly CASHEL_LAOIS = new Location({
    id: "2858",
    displayName: "Cashel, Laois",
    displayValue: "cashel-laois",
  });

  static readonly CASHEL_MAYO = new Location({
    id: "3194",
    displayName: "Cashel, Mayo",
    displayValue: "cashel-mayo",
  });

  static readonly CASHEL_TIPPERARY = new Location({
    id: "3548",
    displayName: "Cashel, Tipperary",
    displayValue: "cashel-tipperary",
  });

  static readonly CASHELGARRAN_SLIGO = new Location({
    id: "3515",
    displayName: "Cashelgarran, Sligo",
    displayValue: "cashelgarran-sligo",
  });

  static readonly CASHELMORE_DONEGAL = new Location({
    id: "531",
    displayName: "Cashelmore, Donegal",
    displayValue: "cashelmore-donegal",
  });

  static readonly CASHLA_GALWAY = new Location({
    id: "2417",
    displayName: "Cashla, Galway",
    displayValue: "cashla-galway",
  });

  static readonly CASLA_GALWAY = new Location({
    id: "682",
    displayName: "Casla, Galway",
    displayValue: "casla-galway",
  });

  static readonly CASSAGH_WEXFORD = new Location({
    id: "3851",
    displayName: "Cassagh, Wexford",
    displayValue: "cassagh-wexford",
  });

  static readonly CASTLEBALDWIN_SLIGO = new Location({
    id: "3516",
    displayName: "Castlebaldwin, Sligo",
    displayValue: "castlebaldwin-sligo",
  });

  static readonly CASTLEBAR_AND_SURROUNDS_MAYO = new Location({
    id: "4091",
    displayName: "Castlebar (& Surrounds), Mayo",
    displayValue: "castlebar-and-surrounds-mayo",
  });

  static readonly CASTLEBAR_MAYO = new Location({
    id: "3195",
    displayName: "Castlebar, Mayo",
    displayValue: "castlebar-mayo",
  });

  static readonly CASTLEBELLINGHAM_LOUTH = new Location({
    id: "3027",
    displayName: "Castlebellingham, Louth",
    displayValue: "castlebellingham-louth",
  });

  static readonly CASTLEBLAKENEY_GALWAY = new Location({
    id: "2418",
    displayName: "Castleblakeney, Galway",
    displayValue: "castleblakeney-galway",
  });

  static readonly CASTLEBLAYNEY_AND_SURROUNDS_MONAGHAN = new Location({
    id: "4092",
    displayName: "Castleblayney (& Surrounds), Monaghan",
    displayValue: "castleblayney-and-surrounds-monaghan",
  });

  static readonly CASTLEBLAYNEY_MONAGHAN = new Location({
    id: "350",
    displayName: "Castleblayney, Monaghan",
    displayValue: "castleblayney-monaghan",
  });

  static readonly CASTLEBRIDGE_WEXFORD = new Location({
    id: "3852",
    displayName: "Castlebridge, Wexford",
    displayValue: "castlebridge-wexford",
  });

  static readonly CASTLECARY_DONEGAL = new Location({
    id: "539",
    displayName: "Castlecary, Donegal",
    displayValue: "castlecary-donegal",
  });

  static readonly CASTLECAULFIELD_TYRONE = new Location({
    id: "3654",
    displayName: "Castlecaulfield, Tyrone",
    displayValue: "castlecaulfield-tyrone",
  });

  static readonly CASTLECOMER_KILKENNY = new Location({
    id: "2780",
    displayName: "Castlecomer, Kilkenny",
    displayValue: "castlecomer-kilkenny",
  });

  static readonly CASTLECONNELL_LIMERICK = new Location({
    id: "1851",
    displayName: "Castleconnell, Limerick",
    displayValue: "castleconnell-limerick",
  });

  static readonly CASTLECONOR_SLIGO = new Location({
    id: "3517",
    displayName: "Castleconor, Sligo",
    displayValue: "castleconor-sligo",
  });

  static readonly CASTLECOOTE_ROSCOMMON = new Location({
    id: "1068",
    displayName: "Castlecoote, Roscommon",
    displayValue: "castlecoote-roscommon",
  });

  static readonly CASTLECOR_CORK = new Location({
    id: "1737",
    displayName: "Castlecor, Cork",
    displayValue: "castlecor-cork",
  });

  static readonly CASTLECOVE_KERRY = new Location({
    id: "1323",
    displayName: "Castlecove, Kerry",
    displayValue: "castlecove-kerry",
  });

  static readonly CASTLECUFFE_LAOIS = new Location({
    id: "2859",
    displayName: "Castlecuffe, Laois",
    displayValue: "castlecuffe-laois",
  });

  static readonly CASTLEDAWSON_DERRY = new Location({
    id: "1948",
    displayName: "Castledawson, Derry",
    displayValue: "castledawson-derry",
  });

  static readonly CASTLEDERG_TYRONE = new Location({
    id: "3655",
    displayName: "Castlederg, Tyrone",
    displayValue: "castlederg-tyrone",
  });

  static readonly CASTLEDERMOT_KILDARE = new Location({
    id: "2505",
    displayName: "Castledermot, Kildare",
    displayValue: "castledermot-kildare",
  });

  static readonly CASTLEELLIS_WEXFORD = new Location({
    id: "1255",
    displayName: "Castleellis, Wexford",
    displayValue: "castleellis-wexford",
  });

  static readonly CASTLEFIN_DONEGAL = new Location({
    id: "750",
    displayName: "Castlefin, Donegal",
    displayValue: "castlefin-donegal",
  });

  static readonly CASTLEFREKE_CORK = new Location({
    id: "1738",
    displayName: "Castlefreke, Cork",
    displayValue: "castlefreke-cork",
  });

  static readonly CASTLEGAL_SLIGO = new Location({
    id: "3518",
    displayName: "Castlegal, Sligo",
    displayValue: "castlegal-sligo",
  });

  static readonly CASTLEGAR_GALWAY = new Location({
    id: "2419",
    displayName: "Castlegar, Galway",
    displayValue: "castlegar-galway",
  });

  static readonly CASTLEGREGORY_KERRY = new Location({
    id: "1324",
    displayName: "Castlegregory, Kerry",
    displayValue: "castlegregory-kerry",
  });

  static readonly CASTLEHILL_MAYO = new Location({
    id: "3196",
    displayName: "Castlehill, Mayo",
    displayValue: "castlehill-mayo",
  });

  static readonly CASTLEINCH_KILKENNY = new Location({
    id: "2781",
    displayName: "Castleinch, Kilkenny",
    displayValue: "castleinch-kilkenny",
  });

  static readonly CASTLEISLAND_AND_SURROUNDS_KERRY = new Location({
    id: "4093",
    displayName: "Castleisland (& Surrounds), Kerry",
    displayValue: "castleisland-and-surrounds-kerry",
  });

  static readonly CASTLEISLAND_KERRY = new Location({
    id: "1326",
    displayName: "Castleisland, Kerry",
    displayValue: "castleisland-kerry",
  });

  static readonly CASTLEJORDAN_MEATH = new Location({
    id: "3299",
    displayName: "Castlejordan, Meath",
    displayValue: "castlejordan-meath",
  });

  static readonly CASTLEKNOCK_DUBLIN = new Location({
    id: "2077",
    displayName: "Castleknock, Dublin",
    displayValue: "castleknock-dublin",
  });

  static readonly CASTLELYONS_CORK = new Location({
    id: "1739",
    displayName: "Castlelyons, Cork",
    displayValue: "castlelyons-cork",
  });

  static readonly CASTLEMAGNER_CORK = new Location({
    id: "1740",
    displayName: "Castlemagner, Cork",
    displayValue: "castlemagner-cork",
  });

  static readonly CASTLEMAHON_LIMERICK = new Location({
    id: "1852",
    displayName: "Castlemahon, Limerick",
    displayValue: "castlemahon-limerick",
  });

  static readonly CASTLEMAINE_KERRY = new Location({
    id: "1364",
    displayName: "Castlemaine, Kerry",
    displayValue: "castlemaine-kerry",
  });

  static readonly CASTLEMARTYR_CORK = new Location({
    id: "1741",
    displayName: "Castlemartyr, Cork",
    displayValue: "castlemartyr-cork",
  });

  static readonly CASTLEPLUNKETT_ROSCOMMON = new Location({
    id: "1088",
    displayName: "Castleplunkett, Roscommon",
    displayValue: "castleplunkett-roscommon",
  });

  static readonly CASTLEPOLLARD_WESTMEATH = new Location({
    id: "3762",
    displayName: "Castlepollard, Westmeath",
    displayValue: "castlepollard-westmeath",
  });

  static readonly CASTLEQUIN_KERRY = new Location({
    id: "1365",
    displayName: "Castlequin, Kerry",
    displayValue: "castlequin-kerry",
  });

  static readonly CASTLERAHAN_CAVAN = new Location({
    id: "1499",
    displayName: "Castlerahan, Cavan",
    displayValue: "castlerahan-cavan",
  });

  static readonly CASTLEREA_AND_SURROUNDS_ROSCOMMON = new Location({
    id: "4184",
    displayName: "Castlerea (& Surrounds), Roscommon",
    displayValue: "castlerea-and-surrounds-roscommon",
  });

  static readonly CASTLEREA_ROSCOMMON = new Location({
    id: "1089",
    displayName: "Castlerea, Roscommon",
    displayValue: "castlerea-roscommon",
  });

  static readonly CASTLEREAGH_ANTRIM = new Location({
    id: "217",
    displayName: "Castlereagh, Antrim",
    displayValue: "castlereagh-antrim",
  });

  static readonly CASTLEROCK_DERRY = new Location({
    id: "1949",
    displayName: "Castlerock, Derry",
    displayValue: "castlerock-derry",
  });

  static readonly CASTLEROE_DERRY = new Location({
    id: "485",
    displayName: "Castleroe, Derry",
    displayValue: "castleroe-derry",
  });

  static readonly CASTLESAMPSON_ROSCOMMON = new Location({
    id: "1090",
    displayName: "Castlesampson, Roscommon",
    displayValue: "castlesampson-roscommon",
  });

  static readonly CASTLESHANE_MONAGHAN = new Location({
    id: "441",
    displayName: "Castleshane, Monaghan",
    displayValue: "castleshane-monaghan",
  });

  static readonly CASTLETOWN_CLARE = new Location({
    id: "287",
    displayName: "Castletown, Clare",
    displayValue: "castletown-clare",
  });

  static readonly CASTLETOWN_CORK = new Location({
    id: "1742",
    displayName: "Castletown, Cork",
    displayValue: "castletown-cork",
  });

  static readonly CASTLETOWN_KILKENNY = new Location({
    id: "807",
    displayName: "Castletown, Kilkenny",
    displayValue: "castletown-kilkenny",
  });

  static readonly CASTLETOWN_LAOIS = new Location({
    id: "2860",
    displayName: "Castletown, Laois",
    displayValue: "castletown-laois",
  });

  static readonly CASTLETOWN_LIMERICK = new Location({
    id: "1853",
    displayName: "Castletown, Limerick",
    displayValue: "castletown-limerick",
  });

  static readonly CASTLETOWN_MEATH = new Location({
    id: "3300",
    displayName: "Castletown, Meath",
    displayValue: "castletown-meath",
  });

  static readonly CASTLETOWN_WESTMEATH = new Location({
    id: "3763",
    displayName: "Castletown, Westmeath",
    displayValue: "castletown-westmeath",
  });

  static readonly CASTLETOWN_WEXFORD = new Location({
    id: "3853",
    displayName: "Castletown, Wexford",
    displayValue: "castletown-wexford",
  });

  static readonly CASTLETOWN_GEOGHEGAN_WESTMEATH = new Location({
    id: "3764",
    displayName: "Castletown-Geoghegan, Westmeath",
    displayValue: "castletown-geoghegan-westmeath",
  });

  static readonly CASTLETOWNBERE_CORK = new Location({
    id: "1748",
    displayName: "Castletownbere, Cork",
    displayValue: "castletownbere-cork",
  });

  static readonly CASTLETOWNROCHE_CORK = new Location({
    id: "1749",
    displayName: "Castletownroche, Cork",
    displayValue: "castletownroche-cork",
  });

  static readonly CASTLETOWNSHEND_CORK = new Location({
    id: "1750",
    displayName: "Castletownshend, Cork",
    displayValue: "castletownshend-cork",
  });

  static readonly CASTLETROY_LIMERICK = new Location({
    id: "1854",
    displayName: "Castletroy, Limerick",
    displayValue: "castletroy-limerick",
  });

  static readonly CASTLEVILLE_MAYO = new Location({
    id: "969",
    displayName: "Castleville, Mayo",
    displayValue: "castleville-mayo",
  });

  static readonly CASTLEWARREN_KILKENNY = new Location({
    id: "2782",
    displayName: "Castlewarren, Kilkenny",
    displayValue: "castlewarren-kilkenny",
  });

  static readonly CASTLEWELLAN_DOWN = new Location({
    id: "2001",
    displayName: "Castlewellan, Down",
    displayValue: "castlewellan-down",
  });

  static readonly CAUSEWAY_KERRY = new Location({
    id: "1366",
    displayName: "Causeway, Kerry",
    displayValue: "causeway-kerry",
  });

  static readonly CAVAN_AND_SURROUNDS_CAVAN = new Location({
    id: "4094",
    displayName: "Cavan (& Surrounds), Cavan",
    displayValue: "cavan-and-surrounds-cavan",
  });

  static readonly CAVAN_CAVAN = new Location({
    id: "1500",
    displayName: "Cavan, Cavan",
    displayValue: "cavan-cavan",
  });

  static readonly CAVANAGARVAN_MONAGHAN = new Location({
    id: "442",
    displayName: "Cavanagarvan, Monaghan",
    displayValue: "cavanagarvan-monaghan",
  });

  static readonly CAVANGARDEN_DONEGAL = new Location({
    id: "532",
    displayName: "Cavangarden, Donegal",
    displayValue: "cavangarden-donegal",
  });

  static readonly CAVEHILL_ANTRIM = new Location({
    id: "218",
    displayName: "Cavehill, Antrim",
    displayValue: "cavehill-antrim",
  });

  static readonly CECILSTOWN_CORK = new Location({
    id: "364",
    displayName: "Cecilstown, Cork",
    displayValue: "cecilstown-cork",
  });

  static readonly CELBRIDGE_AND_SURROUNDS_KILDARE = new Location({
    id: "4095",
    displayName: "Celbridge (& Surrounds), Kildare",
    displayValue: "celbridge-and-surrounds-kildare",
  });

  static readonly CELBRIDGE_KILDARE = new Location({
    id: "2526",
    displayName: "Celbridge, Kildare",
    displayValue: "celbridge-kildare",
  });

  static readonly CHANONROCK_LOUTH = new Location({
    id: "941",
    displayName: "Chanonrock, Louth",
    displayValue: "chanonrock-louth",
  });

  static readonly CHAPELIZOD_DUBLIN = new Location({
    id: "2078",
    displayName: "Chapelizod, Dublin",
    displayValue: "chapelizod-dublin",
  });

  static readonly CHAPLETOWN_KERRY = new Location({
    id: "740",
    displayName: "Chapletown, Kerry",
    displayValue: "chapletown-kerry",
  });

  static readonly CHARLEMONT_ARMAGH = new Location({
    id: "1463",
    displayName: "Charlemont, Armagh",
    displayValue: "charlemont-armagh",
  });

  static readonly CHARLESTOWN_ARMAGH = new Location({
    id: "1464",
    displayName: "Charlestown, Armagh",
    displayValue: "charlestown-armagh",
  });

  static readonly CHARLESTOWN_MAYO = new Location({
    id: "3197",
    displayName: "Charlestown, Mayo",
    displayValue: "charlestown-mayo",
  });

  static readonly CHARLEVILLE_AND_SURROUNDS_CORK = new Location({
    id: "4187",
    displayName: "Charleville (& Surrounds), Cork",
    displayValue: "charleville-and-surrounds-cork",
  });

  static readonly CHARLEVILLE_CORK = new Location({
    id: "1751",
    displayName: "Charleville, Cork",
    displayValue: "charleville-cork",
  });

  static readonly CHEEKPOINT_WATERFORD = new Location({
    id: "3726",
    displayName: "Cheekpoint, Waterford",
    displayValue: "cheekpoint-waterford",
  });

  static readonly CHERRY_ORCHARD_DUBLIN = new Location({
    id: "753",
    displayName: "Cherry Orchard, Dublin",
    displayValue: "cherry-orchard-dublin",
  });

  static readonly CHERRYVILLE_KILDARE = new Location({
    id: "2527",
    displayName: "Cherryville, Kildare",
    displayValue: "cherryville-kildare",
  });

  static readonly CHERRYWOOD_DUBLIN = new Location({
    id: "2080",
    displayName: "Cherrywood, Dublin",
    displayValue: "cherrywood-dublin",
  });

  static readonly CHICHESTER_PARK_ANTRIM = new Location({
    id: "219",
    displayName: "Chichester Park, Antrim",
    displayValue: "chichester-park-antrim",
  });

  static readonly CHRISTCHURCH_DUBLIN = new Location({
    id: "2098",
    displayName: "Christchurch, Dublin",
    displayValue: "christchurch-dublin",
  });

  static readonly CHRUCHTOWN_WEXFORD = new Location({
    id: "3854",
    displayName: "Chruchtown, Wexford",
    displayValue: "chruchtown-wexford",
  });

  static readonly CHURCH_CROSS_CORK = new Location({
    id: "1752",
    displayName: "Church Cross, Cork",
    displayValue: "church-cross-cork",
  });

  static readonly CHURCH_TOWN_DONEGAL = new Location({
    id: "776",
    displayName: "Church Town, Donegal",
    displayValue: "church-town-donegal",
  });

  static readonly CHURCH_VILLAGE_MAYO = new Location({
    id: "3209",
    displayName: "Church Village, Mayo",
    displayValue: "church-village-mayo",
  });

  static readonly CHURCHFIELD_CORK = new Location({
    id: "1317",
    displayName: "Churchfield, Cork",
    displayValue: "churchfield-cork",
  });

  static readonly CHURCHILL_DONEGAL = new Location({
    id: "752",
    displayName: "Churchill, Donegal",
    displayValue: "churchill-donegal",
  });

  static readonly CHURCHSREET_ROSCOMMON = new Location({
    id: "1116",
    displayName: "Churchsreet, Roscommon",
    displayValue: "churchsreet-roscommon",
  });

  static readonly CHURCHTOWN_CORK = new Location({
    id: "1318",
    displayName: "Churchtown, Cork",
    displayValue: "churchtown-cork",
  });

  static readonly CHURCHTOWN_DUBLIN = new Location({
    id: "2099",
    displayName: "Churchtown, Dublin",
    displayValue: "churchtown-dublin",
  });

  static readonly CHURCHTOWN_WEXFORD = new Location({
    id: "3855",
    displayName: "Churchtown, Wexford",
    displayValue: "churchtown-wexford",
  });

  static readonly CITYWEST_DUBLIN = new Location({
    id: "2103",
    displayName: "Citywest, Dublin",
    displayValue: "citywest-dublin",
  });

  static readonly CLABBY_FERMANAGH = new Location({
    id: "2185",
    displayName: "Clabby, Fermanagh",
    displayValue: "clabby-fermanagh",
  });

  static readonly CLADDAGH_GALWAY = new Location({
    id: "2420",
    displayName: "Claddagh, Galway",
    displayValue: "claddagh-galway",
  });

  static readonly CLADDAGHDUFF_GALWAY = new Location({
    id: "2421",
    displayName: "Claddaghduff, Galway",
    displayValue: "claddaghduff-galway",
  });

  static readonly CLADY_MILLTOWN_ARMAGH = new Location({
    id: "1465",
    displayName: "Clady Milltown, Armagh",
    displayValue: "clady-milltown-armagh",
  });

  static readonly CLADY_ANTRIM = new Location({
    id: "220",
    displayName: "Clady, Antrim",
    displayValue: "clady-antrim",
  });

  static readonly CLADY_DERRY = new Location({
    id: "496",
    displayName: "Clady, Derry",
    displayValue: "clady-derry",
  });

  static readonly CLAGGAN_DONEGAL = new Location({
    id: "533",
    displayName: "Claggan, Donegal",
    displayValue: "claggan-donegal",
  });

  static readonly CLAGGAN_MAYO = new Location({
    id: "3210",
    displayName: "Claggan, Mayo",
    displayValue: "claggan-mayo",
  });

  static readonly CLANE_AND_SURROUNDS_KILDARE = new Location({
    id: "4096",
    displayName: "Clane (& Surrounds), Kildare",
    displayValue: "clane-and-surrounds-kildare",
  });

  static readonly CLANE_KILDARE = new Location({
    id: "2528",
    displayName: "Clane, Kildare",
    displayValue: "clane-kildare",
  });

  static readonly CLARA_KILKENNY = new Location({
    id: "2783",
    displayName: "Clara, Kilkenny",
    displayValue: "clara-kilkenny",
  });

  static readonly CLARA_OFFALY = new Location({
    id: "643",
    displayName: "Clara, Offaly",
    displayValue: "clara-offaly",
  });

  static readonly CLARA_WICKLOW = new Location({
    id: "1314",
    displayName: "Clara, Wicklow",
    displayValue: "clara-wicklow",
  });

  static readonly CLARAHILL_LAOIS = new Location({
    id: "2861",
    displayName: "Clarahill, Laois",
    displayValue: "clarahill-laois",
  });

  static readonly CLARECASTLE_CLARE = new Location({
    id: "1561",
    displayName: "Clarecastle, Clare",
    displayValue: "clarecastle-clare",
  });

  static readonly CLAREEN_OFFALY = new Location({
    id: "644",
    displayName: "Clareen, Offaly",
    displayValue: "clareen-offaly",
  });

  static readonly CLAREGALWAY_GALWAY = new Location({
    id: "2422",
    displayName: "Claregalway, Galway",
    displayValue: "claregalway-galway",
  });

  static readonly CLAREHALL_DUBLIN = new Location({
    id: "2105",
    displayName: "Clarehall, Dublin",
    displayValue: "clarehall-dublin",
  });

  static readonly CLAREMORRIS_AND_SURROUNDS_MAYO = new Location({
    id: "4090",
    displayName: "Claremorris (& Surrounds), Mayo",
    displayValue: "claremorris-and-surrounds-mayo",
  });

  static readonly CLAREMORRIS_MAYO = new Location({
    id: "3211",
    displayName: "Claremorris, Mayo",
    displayValue: "claremorris-mayo",
  });

  static readonly CLAREVIEW_LIMERICK = new Location({
    id: "1855",
    displayName: "Clareview, Limerick",
    displayValue: "clareview-limerick",
  });

  static readonly CLARINA_LIMERICK = new Location({
    id: "1856",
    displayName: "Clarina, Limerick",
    displayValue: "clarina-limerick",
  });

  static readonly CLARINBRIDGE_GALWAY = new Location({
    id: "2423",
    displayName: "Clarinbridge, Galway",
    displayValue: "clarinbridge-galway",
  });

  static readonly CLASH_NORTH_LIMERICK = new Location({
    id: "883",
    displayName: "Clash North, Limerick",
    displayValue: "clash-north-limerick",
  });

  static readonly CLASH_CORK = new Location({
    id: "365",
    displayName: "Clash, Cork",
    displayValue: "clash-cork",
  });

  static readonly CLASH_TIPPERARY = new Location({
    id: "3549",
    displayName: "Clash, Tipperary",
    displayValue: "clash-tipperary",
  });

  static readonly CLASHMORE_WATERFORD = new Location({
    id: "3727",
    displayName: "Clashmore, Waterford",
    displayValue: "clashmore-waterford",
  });

  static readonly CLAUDY_DERRY = new Location({
    id: "497",
    displayName: "Claudy, Derry",
    displayValue: "claudy-derry",
  });

  static readonly CLEARIESTOWN_WEXFORD = new Location({
    id: "3856",
    displayName: "Cleariestown, Wexford",
    displayValue: "cleariestown-wexford",
  });

  static readonly CLEGGAN_GALWAY = new Location({
    id: "2424",
    displayName: "Cleggan, Galway",
    displayValue: "cleggan-galway",
  });

  static readonly CLENNASCAUL_GALWAY = new Location({
    id: "683",
    displayName: "Clennascaul, Galway",
    displayValue: "clennascaul-galway",
  });

  static readonly CLERIHAN_TIPPERARY = new Location({
    id: "3550",
    displayName: "Clerihan, Tipperary",
    displayValue: "clerihan-tipperary",
  });

  static readonly CLIFDEN_GALWAY = new Location({
    id: "2247",
    displayName: "Clifden, Galway",
    displayValue: "clifden-galway",
  });

  static readonly CLIFF_DONEGAL = new Location({
    id: "541",
    displayName: "Cliff, Donegal",
    displayValue: "cliff-donegal",
  });

  static readonly CLIFFERNA_CAVAN = new Location({
    id: "229",
    displayName: "Clifferna, Cavan",
    displayValue: "clifferna-cavan",
  });

  static readonly CLIFFONEY_SLIGO = new Location({
    id: "3519",
    displayName: "Cliffoney, Sligo",
    displayValue: "cliffoney-sligo",
  });

  static readonly CLIFTONVILLE_ANTRIM = new Location({
    id: "222",
    displayName: "Cliftonville, Antrim",
    displayValue: "cliftonville-antrim",
  });

  static readonly CLOGGA_KILKENNY = new Location({
    id: "2784",
    displayName: "Clogga, Kilkenny",
    displayValue: "clogga-kilkenny",
  });

  static readonly CLOGGA_WICKLOW = new Location({
    id: "3995",
    displayName: "Clogga, Wicklow",
    displayValue: "clogga-wicklow",
  });

  static readonly CLOGH_MILLS_ANTRIM = new Location({
    id: "224",
    displayName: "Clogh Mills, Antrim",
    displayValue: "clogh-mills-antrim",
  });

  static readonly CLOGH_ANTRIM = new Location({
    id: "223",
    displayName: "Clogh, Antrim",
    displayValue: "clogh-antrim",
  });

  static readonly CLOGH_KILKENNY = new Location({
    id: "2785",
    displayName: "Clogh, Kilkenny",
    displayValue: "clogh-kilkenny",
  });

  static readonly CLOGH_WEXFORD = new Location({
    id: "3857",
    displayName: "Clogh, Wexford",
    displayValue: "clogh-wexford",
  });

  static readonly CLOGHAN_DONEGAL = new Location({
    id: "777",
    displayName: "Cloghan, Donegal",
    displayValue: "cloghan-donegal",
  });

  static readonly CLOGHAN_OFFALY = new Location({
    id: "645",
    displayName: "Cloghan, Offaly",
    displayValue: "cloghan-offaly",
  });

  static readonly CLOGHAN_WESTMEATH = new Location({
    id: "3765",
    displayName: "Cloghan, Westmeath",
    displayValue: "cloghan-westmeath",
  });

  static readonly CLOGHANE_KERRY = new Location({
    id: "1367",
    displayName: "Cloghane, Kerry",
    displayValue: "cloghane-kerry",
  });

  static readonly CLOGHARINKA_KILDARE = new Location({
    id: "2529",
    displayName: "Clogharinka, Kildare",
    displayValue: "clogharinka-kildare",
  });

  static readonly CLOGHAUN_GALWAY = new Location({
    id: "2248",
    displayName: "Cloghaun, Galway",
    displayValue: "cloghaun-galway",
  });

  static readonly CLOGHBOLEY_SLIGO = new Location({
    id: "3520",
    displayName: "Cloghboley, Sligo",
    displayValue: "cloghboley-sligo",
  });

  static readonly CLOGHBRACK_GALWAY = new Location({
    id: "2249",
    displayName: "Cloghbrack, Galway",
    displayValue: "cloghbrack-galway",
  });

  static readonly CLOGHBRACK_MEATH = new Location({
    id: "1042",
    displayName: "Cloghbrack, Meath",
    displayValue: "cloghbrack-meath",
  });

  static readonly CLOGHEEN_CORK = new Location({
    id: "1319",
    displayName: "Clogheen, Cork",
    displayValue: "clogheen-cork",
  });

  static readonly CLOGHEEN_TIPPERARY = new Location({
    id: "3551",
    displayName: "Clogheen, Tipperary",
    displayValue: "clogheen-tipperary",
  });

  static readonly CLOGHEENMILCON_CORK = new Location({
    id: "1964",
    displayName: "Clogheenmilcon, Cork",
    displayValue: "clogheenmilcon-cork",
  });

  static readonly CLOGHER_KERRY = new Location({
    id: "1368",
    displayName: "Clogher, Kerry",
    displayValue: "clogher-kerry",
  });

  static readonly CLOGHER_MAYO = new Location({
    id: "3212",
    displayName: "Clogher, Mayo",
    displayValue: "clogher-mayo",
  });

  static readonly CLOGHER_ROSCOMMON = new Location({
    id: "1726",
    displayName: "Clogher, Roscommon",
    displayValue: "clogher-roscommon",
  });

  static readonly CLOGHER_TYRONE = new Location({
    id: "3656",
    displayName: "Clogher, Tyrone",
    displayValue: "clogher-tyrone",
  });

  static readonly CLOGHERA_CLARE = new Location({
    id: "289",
    displayName: "Cloghera, Clare",
    displayValue: "cloghera-clare",
  });

  static readonly CLOGHERHEAD_LOUTH = new Location({
    id: "3028",
    displayName: "Clogherhead, Louth",
    displayValue: "clogherhead-louth",
  });

  static readonly CLOGHKEATING_LIMERICK = new Location({
    id: "884",
    displayName: "Cloghkeating, Limerick",
    displayValue: "cloghkeating-limerick",
  });

  static readonly CLOGHMACOO_MEATH = new Location({
    id: "3301",
    displayName: "Cloghmacoo, Meath",
    displayValue: "cloghmacoo-meath",
  });

  static readonly CLOGHMORE_MAYO = new Location({
    id: "3213",
    displayName: "Cloghmore, Mayo",
    displayValue: "cloghmore-mayo",
  });

  static readonly CLOGHRAN_DUBLIN = new Location({
    id: "2106",
    displayName: "Cloghran, Dublin",
    displayValue: "cloghran-dublin",
  });

  static readonly CLOGHROE_CORK = new Location({
    id: "1965",
    displayName: "Cloghroe, Cork",
    displayValue: "cloghroe-cork",
  });

  static readonly CLOGHROE_DONEGAL = new Location({
    id: "781",
    displayName: "Cloghroe, Donegal",
    displayValue: "cloghroe-donegal",
  });

  static readonly CLOHAMON_WEXFORD = new Location({
    id: "3858",
    displayName: "Clohamon, Wexford",
    displayValue: "clohamon-wexford",
  });

  static readonly CLOHERNAGH_WATERFORD = new Location({
    id: "3728",
    displayName: "Clohernagh, Waterford",
    displayValue: "clohernagh-waterford",
  });

  static readonly CLONAKENNY_TIPPERARY = new Location({
    id: "3552",
    displayName: "Clonakenny, Tipperary",
    displayValue: "clonakenny-tipperary",
  });

  static readonly CLONAKILTY_AND_SURROUNDS_CORK = new Location({
    id: "4098",
    displayName: "Clonakilty (& Surrounds), Cork",
    displayValue: "clonakilty-and-surrounds-cork",
  });

  static readonly CLONAKILTY_CORK = new Location({
    id: "1966",
    displayName: "Clonakilty, Cork",
    displayValue: "clonakilty-cork",
  });

  static readonly CLONALVY_MEATH = new Location({
    id: "3302",
    displayName: "Clonalvy, Meath",
    displayValue: "clonalvy-meath",
  });

  static readonly CLONARD_ANTRIM = new Location({
    id: "118",
    displayName: "Clonard, Antrim",
    displayValue: "clonard-antrim",
  });

  static readonly CLONARD_MEATH = new Location({
    id: "3303",
    displayName: "Clonard, Meath",
    displayValue: "clonard-meath",
  });

  static readonly CLONARD_WEXFORD = new Location({
    id: "3859",
    displayName: "Clonard, Wexford",
    displayValue: "clonard-wexford",
  });

  static readonly CLONASLEE_LAOIS = new Location({
    id: "2862",
    displayName: "Clonaslee, Laois",
    displayValue: "clonaslee-laois",
  });

  static readonly CLONAVOE_OFFALY = new Location({
    id: "646",
    displayName: "Clonavoe, Offaly",
    displayValue: "clonavoe-offaly",
  });

  static readonly CLONBERN_GALWAY = new Location({
    id: "2250",
    displayName: "Clonbern, Galway",
    displayValue: "clonbern-galway",
  });

  static readonly CLONBULLOGUE_OFFALY = new Location({
    id: "647",
    displayName: "Clonbullogue, Offaly",
    displayValue: "clonbullogue-offaly",
  });

  static readonly CLONBUR_GALWAY = new Location({
    id: "2251",
    displayName: "Clonbur, Galway",
    displayValue: "clonbur-galway",
  });

  static readonly CLONCAGH_LIMERICK = new Location({
    id: "1857",
    displayName: "Cloncagh, Limerick",
    displayValue: "cloncagh-limerick",
  });

  static readonly CLONCONNANE_LIMERICK = new Location({
    id: "885",
    displayName: "Clonconnane, Limerick",
    displayValue: "clonconnane-limerick",
  });

  static readonly CLONCULLEN_WESTMEATH = new Location({
    id: "3766",
    displayName: "Cloncullen, Westmeath",
    displayValue: "cloncullen-westmeath",
  });

  static readonly CLONCURRY_KILDARE = new Location({
    id: "2530",
    displayName: "Cloncurry, Kildare",
    displayValue: "cloncurry-kildare",
  });

  static readonly CLONDALKIN_DUBLIN = new Location({
    id: "2107",
    displayName: "Clondalkin, Dublin",
    displayValue: "clondalkin-dublin",
  });

  static readonly CLONDAW_WEXFORD = new Location({
    id: "3860",
    displayName: "Clondaw, Wexford",
    displayValue: "clondaw-wexford",
  });

  static readonly CLONDRA_LONGFORD = new Location({
    id: "3138",
    displayName: "Clondra, Longford",
    displayValue: "clondra-longford",
  });

  static readonly CLONDRINAGH_LIMERICK = new Location({
    id: "2716",
    displayName: "Clondrinagh, Limerick",
    displayValue: "clondrinagh-limerick",
  });

  static readonly CLONDROHID_CORK = new Location({
    id: "366",
    displayName: "Clondrohid, Cork",
    displayValue: "clondrohid-cork",
  });

  static readonly CLONDULANE_CORK = new Location({
    id: "1967",
    displayName: "Clondulane, Cork",
    displayValue: "clondulane-cork",
  });

  static readonly CLONEA_WATERFORD = new Location({
    id: "3729",
    displayName: "Clonea, Waterford",
    displayValue: "clonea-waterford",
  });

  static readonly CLONEE_DUBLIN = new Location({
    id: "819",
    displayName: "Clonee, Dublin",
    displayValue: "clonee-dublin",
  });

  static readonly CLONEE_MEATH = new Location({
    id: "3304",
    displayName: "Clonee, Meath",
    displayValue: "clonee-meath",
  });

  static readonly CLONEEN_TIPPERARY = new Location({
    id: "3553",
    displayName: "Cloneen, Tipperary",
    displayValue: "cloneen-tipperary",
  });

  static readonly CLONEGAL_CARLOW = new Location({
    id: "1674",
    displayName: "Clonegal, Carlow",
    displayValue: "clonegal-carlow",
  });

  static readonly CLONEGAL_WEXFORD = new Location({
    id: "3861",
    displayName: "Clonegal, Wexford",
    displayValue: "clonegal-wexford",
  });

  static readonly CLONEGAL_WICKLOW = new Location({
    id: "3996",
    displayName: "Clonegal, Wicklow",
    displayValue: "clonegal-wicklow",
  });

  static readonly CLONES_AND_SURROUNDS_MONAGHAN = new Location({
    id: "4099",
    displayName: "Clones (& Surrounds), Monaghan",
    displayValue: "clones-and-surrounds-monaghan",
  });

  static readonly CLONES_MONAGHAN = new Location({
    id: "443",
    displayName: "Clones, Monaghan",
    displayValue: "clones-monaghan",
  });

  static readonly CLONEVIN_WEXFORD = new Location({
    id: "1256",
    displayName: "Clonevin, Wexford",
    displayValue: "clonevin-wexford",
  });

  static readonly CLONFANLOUGH_OFFALY = new Location({
    id: "648",
    displayName: "Clonfanlough, Offaly",
    displayValue: "clonfanlough-offaly",
  });

  static readonly CLONFERT_GALWAY = new Location({
    id: "2252",
    displayName: "Clonfert, Galway",
    displayValue: "clonfert-galway",
  });

  static readonly CLONGEEN_WEXFORD = new Location({
    id: "3885",
    displayName: "Clongeen, Wexford",
    displayValue: "clongeen-wexford",
  });

  static readonly CLONGRIFFIN_DUBLIN = new Location({
    id: "820",
    displayName: "Clongriffin, Dublin",
    displayValue: "clongriffin-dublin",
  });

  static readonly CLONLARA_CLARE = new Location({
    id: "1562",
    displayName: "Clonlara, Clare",
    displayValue: "clonlara-clare",
  });

  static readonly CLONLEIGH_DONEGAL = new Location({
    id: "542",
    displayName: "Clonleigh, Donegal",
    displayValue: "clonleigh-donegal",
  });

  static readonly CLONLOST_WESTMEATH = new Location({
    id: "3767",
    displayName: "Clonlost, Westmeath",
    displayValue: "clonlost-westmeath",
  });

  static readonly CLONMACKEN_LIMERICK = new Location({
    id: "2904",
    displayName: "Clonmacken, Limerick",
    displayValue: "clonmacken-limerick",
  });

  static readonly CLONMACNOISE_OFFALY = new Location({
    id: "649",
    displayName: "Clonmacnoise, Offaly",
    displayValue: "clonmacnoise-offaly",
  });

  static readonly CLONMANTAGH_KILKENNY = new Location({
    id: "2786",
    displayName: "Clonmantagh, Kilkenny",
    displayValue: "clonmantagh-kilkenny",
  });

  static readonly CLONMANY_DONEGAL = new Location({
    id: "782",
    displayName: "Clonmany, Donegal",
    displayValue: "clonmany-donegal",
  });

  static readonly CLONMEL_AND_SURROUNDS_TIPPERARY = new Location({
    id: "4100",
    displayName: "Clonmel (& Surrounds), Tipperary",
    displayValue: "clonmel-and-surrounds-tipperary",
  });

  static readonly CLONMEL_TIPPERARY = new Location({
    id: "3554",
    displayName: "Clonmel, Tipperary",
    displayValue: "clonmel-tipperary",
  });

  static readonly CLONMELLON_WESTMEATH = new Location({
    id: "3768",
    displayName: "Clonmellon, Westmeath",
    displayValue: "clonmellon-westmeath",
  });

  static readonly CLONMORE_CARLOW = new Location({
    id: "1675",
    displayName: "Clonmore, Carlow",
    displayValue: "clonmore-carlow",
  });

  static readonly CLONMORE_TIPPERARY = new Location({
    id: "1176",
    displayName: "Clonmore, Tipperary",
    displayValue: "clonmore-tipperary",
  });

  static readonly CLONMULT_CORK = new Location({
    id: "1968",
    displayName: "Clonmult, Cork",
    displayValue: "clonmult-cork",
  });

  static readonly CLONOMY_OFFALY = new Location({
    id: "650",
    displayName: "Clonomy, Offaly",
    displayValue: "clonomy-offaly",
  });

  static readonly CLONOULTY_TIPPERARY = new Location({
    id: "3555",
    displayName: "Clonoulty, Tipperary",
    displayValue: "clonoulty-tipperary",
  });

  static readonly CLONROCHE_WEXFORD = new Location({
    id: "3886",
    displayName: "Clonroche, Wexford",
    displayValue: "clonroche-wexford",
  });

  static readonly CLONSHAUGH_DUBLIN = new Location({
    id: "821",
    displayName: "Clonshaugh, Dublin",
    displayValue: "clonshaugh-dublin",
  });

  static readonly CLONSILLA_DUBLIN = new Location({
    id: "823",
    displayName: "Clonsilla, Dublin",
    displayValue: "clonsilla-dublin",
  });

  static readonly CLONSKEAGH_DUBLIN = new Location({
    id: "824",
    displayName: "Clonskeagh, Dublin",
    displayValue: "clonskeagh-dublin",
  });

  static readonly CLONTARF_DUBLIN = new Location({
    id: "825",
    displayName: "Clontarf, Dublin",
    displayValue: "clontarf-dublin",
  });

  static readonly CLONTIBRET_MONAGHAN = new Location({
    id: "444",
    displayName: "Clontibret, Monaghan",
    displayValue: "clontibret-monaghan",
  });

  static readonly CLONTUBBRID_KILKENNY = new Location({
    id: "812",
    displayName: "Clontubbrid, Kilkenny",
    displayValue: "clontubbrid-kilkenny",
  });

  static readonly CLONYCAVAN_MEATH = new Location({
    id: "1043",
    displayName: "Clonycavan, Meath",
    displayValue: "clonycavan-meath",
  });

  static readonly CLONYGOWAN_OFFALY = new Location({
    id: "651",
    displayName: "Clonygowan, Offaly",
    displayValue: "clonygowan-offaly",
  });

  static readonly CLOONACOOL_SLIGO = new Location({
    id: "3521",
    displayName: "Cloonacool, Sligo",
    displayValue: "cloonacool-sligo",
  });

  static readonly CLOONBARD_ROSCOMMON = new Location({
    id: "1727",
    displayName: "Cloonbard, Roscommon",
    displayValue: "cloonbard-roscommon",
  });

  static readonly CLOONBOO_GALWAY = new Location({
    id: "2425",
    displayName: "Cloonboo, Galway",
    displayValue: "cloonboo-galway",
  });

  static readonly CLOONDAFF_MAYO = new Location({
    id: "970",
    displayName: "Cloondaff, Mayo",
    displayValue: "cloondaff-mayo",
  });

  static readonly CLOONE_GRANGE_LEITRIM = new Location({
    id: "850",
    displayName: "Cloone Grange, Leitrim",
    displayValue: "cloone-grange-leitrim",
  });

  static readonly CLOONE_LEITRIM = new Location({
    id: "2337",
    displayName: "Cloone, Leitrim",
    displayValue: "cloone-leitrim",
  });

  static readonly CLOONEEN_LONGFORD = new Location({
    id: "922",
    displayName: "Clooneen, Longford",
    displayValue: "clooneen-longford",
  });

  static readonly CLOONEY_CLARE = new Location({
    id: "1563",
    displayName: "Clooney, Clare",
    displayValue: "clooney-clare",
  });

  static readonly CLOONEY_DONEGAL = new Location({
    id: "783",
    displayName: "Clooney, Donegal",
    displayValue: "clooney-donegal",
  });

  static readonly CLOONFAD_ROSCOMMON = new Location({
    id: "1728",
    displayName: "Cloonfad, Roscommon",
    displayValue: "cloonfad-roscommon",
  });

  static readonly CLOONFALLAGH_MAYO = new Location({
    id: "3214",
    displayName: "Cloonfallagh, Mayo",
    displayValue: "cloonfallagh-mayo",
  });

  static readonly CLOONFINISH_MAYO = new Location({
    id: "3215",
    displayName: "Cloonfinish, Mayo",
    displayValue: "cloonfinish-mayo",
  });

  static readonly CLOONFOWER_ROSCOMMON = new Location({
    id: "3424",
    displayName: "Cloonfower, Roscommon",
    displayValue: "cloonfower-roscommon",
  });

  static readonly CLOONKEEN_MAYO = new Location({
    id: "3216",
    displayName: "Cloonkeen, Mayo",
    displayValue: "cloonkeen-mayo",
  });

  static readonly CLOONKEEN_ROSCOMMON = new Location({
    id: "3425",
    displayName: "Cloonkeen, Roscommon",
    displayValue: "cloonkeen-roscommon",
  });

  static readonly CLOONKEN_KERRY = new Location({
    id: "1369",
    displayName: "Cloonken, Kerry",
    displayValue: "cloonken-kerry",
  });

  static readonly CLOONLOOGH_SLIGO = new Location({
    id: "1346",
    displayName: "Cloonloogh, Sligo",
    displayValue: "cloonloogh-sligo",
  });

  static readonly CLOONLUSK_LIMERICK = new Location({
    id: "886",
    displayName: "Cloonlusk, Limerick",
    displayValue: "cloonlusk-limerick",
  });

  static readonly CLOONMINDA_GALWAY = new Location({
    id: "2426",
    displayName: "Cloonminda, Galway",
    displayValue: "cloonminda-galway",
  });

  static readonly CLOONMORE_MAYO = new Location({
    id: "3217",
    displayName: "Cloonmore, Mayo",
    displayValue: "cloonmore-mayo",
  });

  static readonly CLOONOON_GALWAY = new Location({
    id: "2457",
    displayName: "Cloonoon, Galway",
    displayValue: "cloonoon-galway",
  });

  static readonly CLOONTIA_MAYO = new Location({
    id: "3218",
    displayName: "Cloontia, Mayo",
    displayValue: "cloontia-mayo",
  });

  static readonly CLOONUSKER_CLARE = new Location({
    id: "290",
    displayName: "Cloonusker, Clare",
    displayValue: "cloonusker-clare",
  });

  static readonly CLOONYMORRIS_GALWAY = new Location({
    id: "2458",
    displayName: "Cloonymorris, Galway",
    displayValue: "cloonymorris-galway",
  });

  static readonly CLOONYQUIN_ROSCOMMON = new Location({
    id: "3426",
    displayName: "Cloonyquin, Roscommon",
    displayValue: "cloonyquin-roscommon",
  });

  static readonly CLORAN_WESTMEATH = new Location({
    id: "3769",
    displayName: "Cloran, Westmeath",
    displayValue: "cloran-westmeath",
  });

  static readonly CLOUGH_DOWN = new Location({
    id: "2002",
    displayName: "Clough, Down",
    displayValue: "clough-down",
  });

  static readonly CLOUGH_LAOIS = new Location({
    id: "291",
    displayName: "Clough, Laois",
    displayValue: "clough-laois",
  });

  static readonly CLOUGHDUV_CORK = new Location({
    id: "1332",
    displayName: "Cloughduv, Cork",
    displayValue: "cloughduv-cork",
  });

  static readonly CLOUGHJORDAN_OFFALY = new Location({
    id: "652",
    displayName: "Cloughjordan, Offaly",
    displayValue: "cloughjordan-offaly",
  });

  static readonly CLOUGHJORDAN_TIPPERARY = new Location({
    id: "3556",
    displayName: "Cloughjordan, Tipperary",
    displayValue: "cloughjordan-tipperary",
  });

  static readonly CLOVERHILL_CAVAN = new Location({
    id: "1501",
    displayName: "Cloverhill, Cavan",
    displayValue: "cloverhill-cavan",
  });

  static readonly CLOVERHILL_GALWAY = new Location({
    id: "685",
    displayName: "Cloverhill, Galway",
    displayValue: "cloverhill-galway",
  });

  static readonly CLOVERHILL_ROSCOMMON = new Location({
    id: "3427",
    displayName: "Cloverhill, Roscommon",
    displayValue: "cloverhill-roscommon",
  });

  static readonly CLOYDAH_CARLOW = new Location({
    id: "1677",
    displayName: "Cloydah, Carlow",
    displayValue: "cloydah-carlow",
  });

  static readonly CLOYNE_CORK = new Location({
    id: "1334",
    displayName: "Cloyne, Cork",
    displayValue: "cloyne-cork",
  });

  static readonly CLYBAUN_GALWAY = new Location({
    id: "2466",
    displayName: "Clybaun, Galway",
    displayValue: "clybaun-galway",
  });

  static readonly CLYNACARTAN_KERRY = new Location({
    id: "741",
    displayName: "Clynacartan, Kerry",
    displayValue: "clynacartan-kerry",
  });

  static readonly COACHFORD_CORK = new Location({
    id: "1335",
    displayName: "Coachford, Cork",
    displayValue: "coachford-cork",
  });

  static readonly COAGH_TYRONE = new Location({
    id: "3657",
    displayName: "Coagh, Tyrone",
    displayValue: "coagh-tyrone",
  });

  static readonly COALBROOK_TIPPERARY = new Location({
    id: "3557",
    displayName: "Coalbrook, Tipperary",
    displayValue: "coalbrook-tipperary",
  });

  static readonly COALISLAND_TYRONE = new Location({
    id: "3658",
    displayName: "Coalisland, Tyrone",
    displayValue: "coalisland-tyrone",
  });

  static readonly COAN_KILKENNY = new Location({
    id: "813",
    displayName: "Coan, Kilkenny",
    displayValue: "coan-kilkenny",
  });

  static readonly COBH_AND_SURROUNDS_CORK = new Location({
    id: "4102",
    displayName: "Cobh (& Surrounds), Cork",
    displayValue: "cobh-and-surrounds-cork",
  });

  static readonly COILL_DUBH_KILDARE = new Location({
    id: "2531",
    displayName: "Coill Dubh, Kildare",
    displayValue: "coill-dubh-kildare",
  });

  static readonly COLBINSTOWN_KILDARE = new Location({
    id: "2532",
    displayName: "Colbinstown, Kildare",
    displayValue: "colbinstown-kildare",
  });

  static readonly COLDWOOD_GALWAY = new Location({
    id: "2467",
    displayName: "Coldwood, Galway",
    displayValue: "coldwood-galway",
  });

  static readonly COLEHILL_LONGFORD = new Location({
    id: "3139",
    displayName: "Colehill, Longford",
    displayValue: "colehill-longford",
  });

  static readonly COLERAINE_DERRY = new Location({
    id: "1950",
    displayName: "Coleraine, Derry",
    displayValue: "coleraine-derry",
  });

  static readonly COLERAINE_OFFALY = new Location({
    id: "653",
    displayName: "Coleraine, Offaly",
    displayValue: "coleraine-offaly",
  });

  static readonly COLGAGH_SLIGO = new Location({
    id: "3522",
    displayName: "Colgagh, Sligo",
    displayValue: "colgagh-sligo",
  });

  static readonly COLLEGE_OF_COMPUTING_TECHNOLOGY_DUBLIN = new Location({
    id: "4374",
    displayName: "College of Computing Technology, Dublin",
    displayValue: "college-of-computing-technology-dublin",
  });

  static readonly COLLIN_GLEN_ANTRIM = new Location({
    id: "119",
    displayName: "Collin Glen, Antrim",
    displayValue: "collin-glen-antrim",
  });

  static readonly COLLINSTOWN_WESTMEATH = new Location({
    id: "1888",
    displayName: "Collinstown, Westmeath",
    displayValue: "collinstown-westmeath",
  });

  static readonly COLLINSWOOD_DUBLIN = new Location({
    id: "2108",
    displayName: "Collinswood, Dublin",
    displayValue: "collinswood-dublin",
  });

  static readonly COLLON_LOUTH = new Location({
    id: "3029",
    displayName: "Collon, Louth",
    displayValue: "collon-louth",
  });

  static readonly COLLOONEY_SLIGO = new Location({
    id: "3523",
    displayName: "Collooney, Sligo",
    displayValue: "collooney-sligo",
  });

  static readonly COLMANSTOWN_GALWAY = new Location({
    id: "2468",
    displayName: "Colmanstown, Galway",
    displayValue: "colmanstown-galway",
  });

  static readonly COL_ISTE_MHUIRE_MARINO_DUBLIN = new Location({
    id: "4315",
    displayName: "Coláiste Mhuire Marino, Dublin",
    displayValue: "col-iste-mhuire-marino-dublin",
  });

  static readonly COMBER_DOWN = new Location({
    id: "627",
    displayName: "Comber, Down",
    displayValue: "comber-down",
  });

  static readonly COMMONS_TIPPERARY = new Location({
    id: "3558",
    displayName: "Commons, Tipperary",
    displayValue: "commons-tipperary",
  });

  static readonly CONFEY_KILDARE = new Location({
    id: "2546",
    displayName: "Confey, Kildare",
    displayValue: "confey-kildare",
  });

  static readonly CONLIG_DOWN = new Location({
    id: "628",
    displayName: "Conlig, Down",
    displayValue: "conlig-down",
  });

  static readonly CONNA_CORK = new Location({
    id: "1337",
    displayName: "Conna, Cork",
    displayValue: "conna-cork",
  });

  static readonly CONNEMARA_GALWAY = new Location({
    id: "62",
    displayName: "Connemara, Galway",
    displayValue: "connemara-galway",
  });

  static readonly CONNOLLY_CLARE = new Location({
    id: "1564",
    displayName: "Connolly, Clare",
    displayValue: "connolly-clare",
  });

  static readonly CONNONAGH_CORK = new Location({
    id: "375",
    displayName: "Connonagh, Cork",
    displayValue: "connonagh-cork",
  });

  static readonly CONNOR_ANTRIM = new Location({
    id: "120",
    displayName: "Connor, Antrim",
    displayValue: "connor-antrim",
  });

  static readonly CONNSWATER_DOWN = new Location({
    id: "629",
    displayName: "Connswater, Down",
    displayValue: "connswater-down",
  });

  static readonly CONVOY_DONEGAL = new Location({
    id: "785",
    displayName: "Convoy, Donegal",
    displayValue: "convoy-donegal",
  });

  static readonly COOGUE_MAYO = new Location({
    id: "3229",
    displayName: "Coogue, Mayo",
    displayValue: "coogue-mayo",
  });

  static readonly COOKSTOWN_TYRONE = new Location({
    id: "3659",
    displayName: "Cookstown, Tyrone",
    displayValue: "cookstown-tyrone",
  });

  static readonly COOLA_SLIGO = new Location({
    id: "1138",
    displayName: "Coola, Sligo",
    displayValue: "coola-sligo",
  });

  static readonly COOLAGARRY_ROSCOMMON = new Location({
    id: "3428",
    displayName: "Coolagarry, Roscommon",
    displayValue: "coolagarry-roscommon",
  });

  static readonly COOLAGH_GALWAY = new Location({
    id: "2341",
    displayName: "Coolagh, Galway",
    displayValue: "coolagh-galway",
  });

  static readonly COOLANEY_SLIGO = new Location({
    id: "3524",
    displayName: "Coolaney, Sligo",
    displayValue: "coolaney-sligo",
  });

  static readonly COOLATTIN_WICKLOW = new Location({
    id: "3997",
    displayName: "Coolattin, Wicklow",
    displayValue: "coolattin-wicklow",
  });

  static readonly COOLBANAGHER_LAOIS = new Location({
    id: "292",
    displayName: "Coolbanagher, Laois",
    displayValue: "coolbanagher-laois",
  });

  static readonly COOLBAUN_KILKENNY = new Location({
    id: "2791",
    displayName: "Coolbaun, Kilkenny",
    displayValue: "coolbaun-kilkenny",
  });

  static readonly COOLBAWN_TIPPERARY = new Location({
    id: "3559",
    displayName: "Coolbawn, Tipperary",
    displayValue: "coolbawn-tipperary",
  });

  static readonly COOLBOY_WICKLOW = new Location({
    id: "3998",
    displayName: "Coolboy, Wicklow",
    displayValue: "coolboy-wicklow",
  });

  static readonly COOLCULL_WEXFORD = new Location({
    id: "3887",
    displayName: "Coolcull, Wexford",
    displayValue: "coolcull-wexford",
  });

  static readonly COOLDERRY_OFFALY = new Location({
    id: "654",
    displayName: "Coolderry, Offaly",
    displayValue: "coolderry-offaly",
  });

  static readonly COOLE_ABBEY_CORK = new Location({
    id: "376",
    displayName: "Coole Abbey, Cork",
    displayValue: "coole-abbey-cork",
  });

  static readonly COOLE_WESTMEATH = new Location({
    id: "1889",
    displayName: "Coole, Westmeath",
    displayValue: "coole-westmeath",
  });

  static readonly COOLEARAGH_KILDARE = new Location({
    id: "2547",
    displayName: "Coolearagh, Kildare",
    displayValue: "coolearagh-kildare",
  });

  static readonly COOLGRANGE_KILKENNY = new Location({
    id: "2805",
    displayName: "Coolgrange, Kilkenny",
    displayValue: "coolgrange-kilkenny",
  });

  static readonly COOLGREANY_WEXFORD = new Location({
    id: "3888",
    displayName: "Coolgreany, Wexford",
    displayValue: "coolgreany-wexford",
  });

  static readonly COOLKELURE_CORK = new Location({
    id: "1338",
    displayName: "Coolkelure, Cork",
    displayValue: "coolkelure-cork",
  });

  static readonly COOLMEEN_CLARE = new Location({
    id: "1565",
    displayName: "Coolmeen, Clare",
    displayValue: "coolmeen-clare",
  });

  static readonly COOLMINE_DUBLIN = new Location({
    id: "2112",
    displayName: "Coolmine, Dublin",
    displayValue: "coolmine-dublin",
  });

  static readonly COOLMORE_DONEGAL = new Location({
    id: "786",
    displayName: "Coolmore, Donegal",
    displayValue: "coolmore-donegal",
  });

  static readonly COOLOCK_DUBLIN = new Location({
    id: "2113",
    displayName: "Coolock, Dublin",
    displayValue: "coolock-dublin",
  });

  static readonly COOLRAIN_LAOIS = new Location({
    id: "293",
    displayName: "Coolrain, Laois",
    displayValue: "coolrain-laois",
  });

  static readonly COOLREE_WEXFORD = new Location({
    id: "3889",
    displayName: "Coolree, Wexford",
    displayValue: "coolree-wexford",
  });

  static readonly COOLROEBEG_KILKENNY = new Location({
    id: "826",
    displayName: "Coolroebeg, Kilkenny",
    displayValue: "coolroebeg-kilkenny",
  });

  static readonly COOLSHAGHTENA_ROSCOMMON = new Location({
    id: "3429",
    displayName: "Coolshaghtena, Roscommon",
    displayValue: "coolshaghtena-roscommon",
  });

  static readonly COOLTEIGE_ROSCOMMON = new Location({
    id: "3430",
    displayName: "Coolteige, Roscommon",
    displayValue: "coolteige-roscommon",
  });

  static readonly COOLYDUFF_CORK = new Location({
    id: "1969",
    displayName: "Coolyduff, Cork",
    displayValue: "coolyduff-cork",
  });

  static readonly COOLYMURRAGHUE_CORK = new Location({
    id: "377",
    displayName: "Coolymurraghue, Cork",
    displayValue: "coolymurraghue-cork",
  });

  static readonly COOMHOLA_CORK = new Location({
    id: "1970",
    displayName: "Coomhola, Cork",
    displayValue: "coomhola-cork",
  });

  static readonly COON_KILKENNY = new Location({
    id: "2806",
    displayName: "Coon, Kilkenny",
    displayValue: "coon-kilkenny",
  });

  static readonly COONAGH_LIMERICK = new Location({
    id: "2905",
    displayName: "Coonagh, Limerick",
    displayValue: "coonagh-limerick",
  });

  static readonly COORACLARE_CLARE = new Location({
    id: "1566",
    displayName: "Cooraclare, Clare",
    displayValue: "cooraclare-clare",
  });

  static readonly COORLEAGH_KILKENNY = new Location({
    id: "816",
    displayName: "Coorleagh, Kilkenny",
    displayValue: "coorleagh-kilkenny",
  });

  static readonly COORNAGILLAGH_KERRY = new Location({
    id: "1370",
    displayName: "Coornagillagh, Kerry",
    displayValue: "coornagillagh-kerry",
  });

  static readonly COOTEHALL_ROSCOMMON = new Location({
    id: "3431",
    displayName: "Cootehall, Roscommon",
    displayValue: "cootehall-roscommon",
  });

  static readonly COOTEHILL_AND_SURROUNDS_CAVAN = new Location({
    id: "4103",
    displayName: "Cootehill (& Surrounds), Cavan",
    displayValue: "cootehill-and-surrounds-cavan",
  });

  static readonly COOTEHILL_CAVAN = new Location({
    id: "1502",
    displayName: "Cootehill, Cavan",
    displayValue: "cootehill-cavan",
  });

  static readonly COPANY_DONEGAL = new Location({
    id: "787",
    displayName: "Copany, Donegal",
    displayValue: "copany-donegal",
  });

  static readonly COPPANAGH_CAVAN = new Location({
    id: "230",
    displayName: "Coppanagh, Cavan",
    displayValue: "coppanagh-cavan",
  });

  static readonly CORALSTOWN_WESTMEATH = new Location({
    id: "3770",
    displayName: "Coralstown, Westmeath",
    displayValue: "coralstown-westmeath",
  });

  static readonly CORBALLY_CORK = new Location({
    id: "1347",
    displayName: "Corbally, Cork",
    displayValue: "corbally-cork",
  });

  static readonly CORBALLY_KILDARE = new Location({
    id: "2548",
    displayName: "Corbally, Kildare",
    displayValue: "corbally-kildare",
  });

  static readonly CORBALLY_LIMERICK = new Location({
    id: "2906",
    displayName: "Corbally, Limerick",
    displayValue: "corbally-limerick",
  });

  static readonly CORBALLY_SLIGO = new Location({
    id: "3525",
    displayName: "Corbally, Sligo",
    displayValue: "corbally-sligo",
  });

  static readonly CORBAY_UPPER_LONGFORD = new Location({
    id: "937",
    displayName: "Corbay Upper, Longford",
    displayValue: "corbay-upper-longford",
  });

  static readonly CORCAGHAN_MONAGHAN = new Location({
    id: "445",
    displayName: "Corcaghan, Monaghan",
    displayValue: "corcaghan-monaghan",
  });

  static readonly CORCLOGH_MAYO = new Location({
    id: "3230",
    displayName: "Corclogh, Mayo",
    displayValue: "corclogh-mayo",
  });

  static readonly CORCULLEN_GALWAY = new Location({
    id: "2343",
    displayName: "Corcullen, Galway",
    displayValue: "corcullen-galway",
  });

  static readonly CORDAL_KERRY = new Location({
    id: "1371",
    displayName: "Cordal, Kerry",
    displayValue: "cordal-kerry",
  });

  static readonly CORDARRAGH_MAYO = new Location({
    id: "3231",
    displayName: "Cordarragh, Mayo",
    displayValue: "cordarragh-mayo",
  });

  static readonly CORDUFF_DUBLIN = new Location({
    id: "861",
    displayName: "Corduff, Dublin",
    displayValue: "corduff-dublin",
  });

  static readonly CORK_AIRPORT_BUSINESS_PARK_CORK = new Location({
    id: "368",
    displayName: "Cork Airport Business Park, Cork",
    displayValue: "cork-airport-business-park-cork",
  });

  static readonly CORK_CITY_CENTRE_CORK = new Location({
    id: "46",
    displayName: "Cork City Centre, Cork",
    displayValue: "cork-city-centre-cork",
  });

  static readonly CORK_CITY_SUBURBS_CORK = new Location({
    id: "47",
    displayName: "Cork City Suburbs, Cork",
    displayValue: "cork-city-suburbs-cork",
  });

  static readonly CORK_COLLEGE_OF_COMMERCE_CORK = new Location({
    id: "4369",
    displayName: "Cork College of Commerce, Cork",
    displayValue: "cork-college-of-commerce-cork",
  });

  static readonly CORK_COMMUTER_TOWNS_CORK = new Location({
    id: "48",
    displayName: "Cork Commuter Towns, Cork",
    displayValue: "cork-commuter-towns-cork",
  });

  static readonly CORK_INSTITUTE_OF_TECHNOLOGY_CLONAKILTY_AGRICULTURAL_COLLEGE_CORK =
    new Location({
      id: "4381",
      displayName:
        "Cork Institute of Technology - Clonakilty Agricultural College , Cork",
      displayValue:
        "cork-institute-of-technology-clonakilty-agricultural-college-cork",
    });

  static readonly CORK_INSTITUTE_OF_TECHNOLOGY_CRAWFORD_COLLEGE_OF_ART_AND_DESIGN_CORK =
    new Location({
      id: "4380",
      displayName:
        "Cork Institute of Technology - Crawford College of Art and Design, Cork",
      displayValue:
        "cork-institute-of-technology-crawford-college-of-art-and-design-cork",
    });

  static readonly CORK_INSTITUTE_OF_TECHNOLOGY_CORK = new Location({
    id: "4309",
    displayName: "Cork Institute of Technology, Cork",
    displayValue: "cork-institute-of-technology-cork",
  });

  static readonly CORK_SCHOOL_OF_MUSIC_CIT_CORK = new Location({
    id: "4310",
    displayName: "Cork School of Music CIT, Cork",
    displayValue: "cork-school-of-music-cit-cork",
  });

  static readonly CORKEY_ANTRIM = new Location({
    id: "121",
    displayName: "Corkey, Antrim",
    displayValue: "corkey-antrim",
  });

  static readonly CORLEA_LONGFORD = new Location({
    id: "2979",
    displayName: "Corlea, Longford",
    displayValue: "corlea-longford",
  });

  static readonly CORLEE_MAYO = new Location({
    id: "3232",
    displayName: "Corlee, Mayo",
    displayValue: "corlee-mayo",
  });

  static readonly CORLOUGH_CAVAN = new Location({
    id: "1503",
    displayName: "Corlough, Cavan",
    displayValue: "corlough-cavan",
  });

  static readonly CORNAFEAN_CAVAN = new Location({
    id: "1504",
    displayName: "Cornafean, Cavan",
    displayValue: "cornafean-cavan",
  });

  static readonly CORNAFULLA_ROSCOMMON = new Location({
    id: "3432",
    displayName: "Cornafulla, Roscommon",
    displayValue: "cornafulla-roscommon",
  });

  static readonly CORNAGILLAGH_DONEGAL = new Location({
    id: "545",
    displayName: "Cornagillagh, Donegal",
    displayValue: "cornagillagh-donegal",
  });

  static readonly CORNAMONA_GALWAY = new Location({
    id: "2344",
    displayName: "Cornamona, Galway",
    displayValue: "cornamona-galway",
  });

  static readonly CORNANAGH_MAYO = new Location({
    id: "3233",
    displayName: "Cornanagh, Mayo",
    displayValue: "cornanagh-mayo",
  });

  static readonly CORNELSCOURT_DUBLIN = new Location({
    id: "2114",
    displayName: "Cornelscourt, Dublin",
    displayValue: "cornelscourt-dublin",
  });

  static readonly COROFIN_CLARE = new Location({
    id: "1567",
    displayName: "Corofin, Clare",
    displayValue: "corofin-clare",
  });

  static readonly COROFIN_GALWAY = new Location({
    id: "2345",
    displayName: "Corofin, Galway",
    displayValue: "corofin-galway",
  });

  static readonly CORRACLOONA_LEITRIM = new Location({
    id: "2338",
    displayName: "Corracloona, Leitrim",
    displayValue: "corracloona-leitrim",
  });

  static readonly CORRAKYLE_CLARE = new Location({
    id: "307",
    displayName: "Corrakyle, Clare",
    displayValue: "corrakyle-clare",
  });

  static readonly CORRALEEHAN_LEITRIM = new Location({
    id: "2339",
    displayName: "Corraleehan, Leitrim",
    displayValue: "corraleehan-leitrim",
  });

  static readonly CORRANDULLA_GALWAY = new Location({
    id: "2346",
    displayName: "Corrandulla, Galway",
    displayValue: "corrandulla-galway",
  });

  static readonly CORRAREE_ROSCOMMON = new Location({
    id: "1117",
    displayName: "Corraree, Roscommon",
    displayValue: "corraree-roscommon",
  });

  static readonly CORRAWALEEN_LEITRIM = new Location({
    id: "2350",
    displayName: "Corrawaleen, Leitrim",
    displayValue: "corrawaleen-leitrim",
  });

  static readonly CORREAL_ROSCOMMON = new Location({
    id: "3433",
    displayName: "Correal, Roscommon",
    displayValue: "correal-roscommon",
  });

  static readonly CORRIES_CARLOW = new Location({
    id: "1678",
    displayName: "Corries, Carlow",
    displayValue: "corries-carlow",
  });

  static readonly CORRIGA_LEITRIM = new Location({
    id: "2351",
    displayName: "Corriga, Leitrim",
    displayValue: "corriga-leitrim",
  });

  static readonly CORRIGEENROE_ROSCOMMON = new Location({
    id: "3434",
    displayName: "Corrigeenroe, Roscommon",
    displayValue: "corrigeenroe-roscommon",
  });

  static readonly CORROY_MAYO = new Location({
    id: "3234",
    displayName: "Corroy, Mayo",
    displayValue: "corroy-mayo",
  });

  static readonly CORRY_LEITRIM = new Location({
    id: "2352",
    displayName: "Corry, Leitrim",
    displayValue: "corry-leitrim",
  });

  static readonly CORSTOWN_KILKENNY = new Location({
    id: "827",
    displayName: "Corstown, Kilkenny",
    displayValue: "corstown-kilkenny",
  });

  static readonly CORTOON_GALWAY = new Location({
    id: "2347",
    displayName: "Cortoon, Galway",
    displayValue: "cortoon-galway",
  });

  static readonly CORTOWN_MEATH = new Location({
    id: "3305",
    displayName: "Cortown, Meath",
    displayValue: "cortown-meath",
  });

  static readonly CORVALLEY_MAYO = new Location({
    id: "3235",
    displayName: "Corvalley, Mayo",
    displayValue: "corvalley-mayo",
  });

  static readonly CORVALLY_MONAGHAN = new Location({
    id: "1086",
    displayName: "Corvally, Monaghan",
    displayValue: "corvally-monaghan",
  });

  static readonly COSTELLO_GALWAY = new Location({
    id: "686",
    displayName: "Costello, Galway",
    displayValue: "costello-galway",
  });

  static readonly COURTMACSHERRY_CORK = new Location({
    id: "1349",
    displayName: "Courtmacsherry, Cork",
    displayValue: "courtmacsherry-cork",
  });

  static readonly COURTMATRIX_LIMERICK = new Location({
    id: "2907",
    displayName: "Courtmatrix, Limerick",
    displayValue: "courtmatrix-limerick",
  });

  static readonly COURTOWN_WEXFORD = new Location({
    id: "3890",
    displayName: "Courtown, Wexford",
    displayValue: "courtown-wexford",
  });

  static readonly CRAANFORD_WEXFORD = new Location({
    id: "3891",
    displayName: "Craanford, Wexford",
    displayValue: "craanford-wexford",
  });

  static readonly CRAFFIELD_WICKLOW = new Location({
    id: "3999",
    displayName: "Craffield, Wicklow",
    displayValue: "craffield-wicklow",
  });

  static readonly CRAIGAVAD_DOWN = new Location({
    id: "630",
    displayName: "Craigavad, Down",
    displayValue: "craigavad-down",
  });

  static readonly CRAIGAVON_ARMAGH = new Location({
    id: "1665",
    displayName: "Craigavon, Armagh",
    displayValue: "craigavon-armagh",
  });

  static readonly CRAIGS_ANTRIM = new Location({
    id: "136",
    displayName: "Craigs, Antrim",
    displayValue: "craigs-antrim",
  });

  static readonly CRAIQUES_KERRY = new Location({
    id: "742",
    displayName: "Craiques, Kerry",
    displayValue: "craiques-kerry",
  });

  static readonly CRANFORD_DONEGAL = new Location({
    id: "788",
    displayName: "Cranford, Donegal",
    displayValue: "cranford-donegal",
  });

  static readonly CRANNOGEBOY_DONEGAL = new Location({
    id: "546",
    displayName: "Crannogeboy, Donegal",
    displayValue: "crannogeboy-donegal",
  });

  static readonly CRANNY_CLARE = new Location({
    id: "1568",
    displayName: "Cranny, Clare",
    displayValue: "cranny-clare",
  });

  static readonly CRATLOE_CLARE = new Location({
    id: "1569",
    displayName: "Cratloe, Clare",
    displayValue: "cratloe-clare",
  });

  static readonly CRAUGHWELL_GALWAY = new Location({
    id: "2348",
    displayName: "Craughwell, Galway",
    displayValue: "craughwell-galway",
  });

  static readonly CRAWFORD_COLLEGE_OF_ART_AND_DESIGN_CORK = new Location({
    id: "4311",
    displayName: "Crawford College of Art & Design, Cork",
    displayValue: "crawford-college-of-art-and-design-cork",
  });

  static readonly CRAWFORDSBURN_DOWN = new Location({
    id: "631",
    displayName: "Crawfordsburn, Down",
    displayValue: "crawfordsburn-down",
  });

  static readonly CRAZY_CORNER_WESTMEATH = new Location({
    id: "1234",
    displayName: "Crazy Corner, Westmeath",
    displayValue: "crazy-corner-westmeath",
  });

  static readonly CREAGH_ROSCOMMON = new Location({
    id: "3435",
    displayName: "Creagh, Roscommon",
    displayValue: "creagh-roscommon",
  });

  static readonly CREAGHANROE_MONAGHAN = new Location({
    id: "446",
    displayName: "Creaghanroe, Monaghan",
    displayValue: "creaghanroe-monaghan",
  });

  static readonly CRECORA_LIMERICK = new Location({
    id: "2787",
    displayName: "Crecora, Limerick",
    displayValue: "crecora-limerick",
  });

  static readonly CREE_CLARE = new Location({
    id: "1570",
    displayName: "Cree, Clare",
    displayValue: "cree-clare",
  });

  static readonly CREEGH_CLARE = new Location({
    id: "1571",
    displayName: "Creegh, Clare",
    displayValue: "creegh-clare",
  });

  static readonly CREESLOUGH_DONEGAL = new Location({
    id: "789",
    displayName: "Creeslough, Donegal",
    displayValue: "creeslough-donegal",
  });

  static readonly CREEVAGH_MAYO = new Location({
    id: "3236",
    displayName: "Creevagh, Mayo",
    displayValue: "creevagh-mayo",
  });

  static readonly CREEVAGH_SLIGO = new Location({
    id: "3526",
    displayName: "Creevagh, Sligo",
    displayValue: "creevagh-sligo",
  });

  static readonly CREEVES_LIMERICK = new Location({
    id: "1869",
    displayName: "Creeves, Limerick",
    displayValue: "creeves-limerick",
  });

  static readonly CREGAGH_DOWN = new Location({
    id: "632",
    displayName: "Cregagh, Down",
    displayValue: "cregagh-down",
  });

  static readonly CREGG_CLARE = new Location({
    id: "1572",
    displayName: "Cregg, Clare",
    displayValue: "cregg-clare",
  });

  static readonly CREGG_SLIGO = new Location({
    id: "3527",
    displayName: "Cregg, Sligo",
    displayValue: "cregg-sligo",
  });

  static readonly CREGGAN_ARMAGH = new Location({
    id: "195",
    displayName: "Creggan, Armagh",
    displayValue: "creggan-armagh",
  });

  static readonly CREGGANBAUN_MAYO = new Location({
    id: "3237",
    displayName: "Cregganbaun, Mayo",
    displayValue: "cregganbaun-mayo",
  });

  static readonly CREGGAUN_LIMERICK = new Location({
    id: "2908",
    displayName: "Creggaun, Limerick",
    displayValue: "creggaun-limerick",
  });

  static readonly CREGGS_GALWAY = new Location({
    id: "1600",
    displayName: "Creggs, Galway",
    displayValue: "creggs-galway",
  });

  static readonly CREGGS_ROSCOMMON = new Location({
    id: "3436",
    displayName: "Creggs, Roscommon",
    displayValue: "creggs-roscommon",
  });

  static readonly CREGMORE_GALWAY = new Location({
    id: "1601",
    displayName: "Cregmore, Galway",
    displayValue: "cregmore-galway",
  });

  static readonly CRETTYARD_LAOIS = new Location({
    id: "294",
    displayName: "Crettyard, Laois",
    displayValue: "crettyard-laois",
  });

  static readonly CRINKILL_OFFALY = new Location({
    id: "3347",
    displayName: "Crinkill, Offaly",
    displayValue: "crinkill-offaly",
  });

  static readonly CROAGH_DONEGAL = new Location({
    id: "790",
    displayName: "Croagh, Donegal",
    displayValue: "croagh-donegal",
  });

  static readonly CROAGH_LIMERICK = new Location({
    id: "2909",
    displayName: "Croagh, Limerick",
    displayValue: "croagh-limerick",
  });

  static readonly CROAGHRIMBEG_MAYO = new Location({
    id: "3238",
    displayName: "Croaghrimbeg, Mayo",
    displayValue: "croaghrimbeg-mayo",
  });

  static readonly CROCKETS_TOWN_MAYO = new Location({
    id: "2220",
    displayName: "Crockets Town, Mayo",
    displayValue: "crockets-town-mayo",
  });

  static readonly CROCKMORE_DONEGAL = new Location({
    id: "550",
    displayName: "Crockmore, Donegal",
    displayValue: "crockmore-donegal",
  });

  static readonly CROGHAN_OFFALY = new Location({
    id: "3348",
    displayName: "Croghan, Offaly",
    displayValue: "croghan-offaly",
  });

  static readonly CROGHAN_ROSCOMMON = new Location({
    id: "3437",
    displayName: "Croghan, Roscommon",
    displayValue: "croghan-roscommon",
  });

  static readonly CROLLY_DONEGAL = new Location({
    id: "791",
    displayName: "Crolly, Donegal",
    displayValue: "crolly-donegal",
  });

  static readonly CROMANE_KERRY = new Location({
    id: "1372",
    displayName: "Cromane, Kerry",
    displayValue: "cromane-kerry",
  });

  static readonly CROMOGE_LAOIS = new Location({
    id: "295",
    displayName: "Cromoge, Laois",
    displayValue: "cromoge-laois",
  });

  static readonly CROOKEDWOOD_WESTMEATH = new Location({
    id: "3771",
    displayName: "Crookedwood, Westmeath",
    displayValue: "crookedwood-westmeath",
  });

  static readonly CROOKHAVEN_CORK = new Location({
    id: "1350",
    displayName: "Crookhaven, Cork",
    displayValue: "crookhaven-cork",
  });

  static readonly CROOKSTOWN_CORK = new Location({
    id: "1352",
    displayName: "Crookstown, Cork",
    displayValue: "crookstown-cork",
  });

  static readonly CROOKSTOWN_KILDARE = new Location({
    id: "2549",
    displayName: "Crookstown, Kildare",
    displayValue: "crookstown-kildare",
  });

  static readonly CROOM_LIMERICK = new Location({
    id: "2910",
    displayName: "Croom, Limerick",
    displayValue: "croom-limerick",
  });

  static readonly CROSS_KEYS_CAVAN = new Location({
    id: "1507",
    displayName: "Cross Keys, Cavan",
    displayValue: "cross-keys-cavan",
  });

  static readonly CROSS_KEYS_MEATH = new Location({
    id: "1044",
    displayName: "Cross Keys, Meath",
    displayValue: "cross-keys-meath",
  });

  static readonly CROSS_ROADS_DONEGAL = new Location({
    id: "792",
    displayName: "Cross Roads, Donegal",
    displayValue: "cross-roads-donegal",
  });

  static readonly CROSS_CLARE = new Location({
    id: "1573",
    displayName: "Cross, Clare",
    displayValue: "cross-clare",
  });

  static readonly CROSS_MAYO = new Location({
    id: "2221",
    displayName: "Cross, Mayo",
    displayValue: "cross-mayo",
  });

  static readonly CROSS_WATERFORD = new Location({
    id: "3730",
    displayName: "Cross, Waterford",
    displayValue: "cross-waterford",
  });

  static readonly CROSSABEG_WEXFORD = new Location({
    id: "3892",
    displayName: "Crossabeg, Wexford",
    displayValue: "crossabeg-wexford",
  });

  static readonly CROSSAGALLA_LIMERICK = new Location({
    id: "2928",
    displayName: "Crossagalla, Limerick",
    displayValue: "crossagalla-limerick",
  });

  static readonly CROSSAKIEL_MEATH = new Location({
    id: "3306",
    displayName: "Crossakiel, Meath",
    displayValue: "crossakiel-meath",
  });

  static readonly CROSSBARRY_CORK = new Location({
    id: "1353",
    displayName: "Crossbarry, Cork",
    displayValue: "crossbarry-cork",
  });

  static readonly CROSSBOYNE_MAYO = new Location({
    id: "2222",
    displayName: "Crossboyne, Mayo",
    displayValue: "crossboyne-mayo",
  });

  static readonly CROSSCONNELL_GALWAY = new Location({
    id: "2349",
    displayName: "Crossconnell, Galway",
    displayValue: "crossconnell-galway",
  });

  static readonly CROSSDONEY_CAVAN = new Location({
    id: "1505",
    displayName: "Crossdoney, Cavan",
    displayValue: "crossdoney-cavan",
  });

  static readonly CROSSEA_LONGFORD = new Location({
    id: "2980",
    displayName: "Crossea, Longford",
    displayValue: "crossea-longford",
  });

  static readonly CROSSERLOUGH_CAVAN = new Location({
    id: "1506",
    displayName: "Crosserlough, Cavan",
    displayValue: "crosserlough-cavan",
  });

  static readonly CROSSGAR_DOWN = new Location({
    id: "1071",
    displayName: "Crossgar, Down",
    displayValue: "crossgar-down",
  });

  static readonly CROSSHAVEN_CORK = new Location({
    id: "1354",
    displayName: "Crosshaven, Cork",
    displayValue: "crosshaven-cork",
  });

  static readonly CROSSMAGLEN_ARMAGH = new Location({
    id: "1466",
    displayName: "Crossmaglen, Armagh",
    displayValue: "crossmaglen-armagh",
  });

  static readonly CROSSMOLINA_MAYO = new Location({
    id: "2241",
    displayName: "Crossmolina, Mayo",
    displayValue: "crossmolina-mayo",
  });

  static readonly CROSSNA_ROSCOMMON = new Location({
    id: "3438",
    displayName: "Crossna, Roscommon",
    displayValue: "crossna-roscommon",
  });

  static readonly CROSSPATRICK_KILKENNY = new Location({
    id: "2807",
    displayName: "Crosspatrick, Kilkenny",
    displayValue: "crosspatrick-kilkenny",
  });

  static readonly CROSSWELL_GALWAY = new Location({
    id: "688",
    displayName: "Crosswell, Galway",
    displayValue: "crosswell-galway",
  });

  static readonly CROVE_DONEGAL = new Location({
    id: "547",
    displayName: "Crove, Donegal",
    displayValue: "crove-donegal",
  });

  static readonly CRUMLIN_ROAD_ANTRIM = new Location({
    id: "124",
    displayName: "Crumlin Road, Antrim",
    displayValue: "crumlin-road-antrim",
  });

  static readonly CRUMLIN_ANTRIM = new Location({
    id: "122",
    displayName: "Crumlin, Antrim",
    displayValue: "crumlin-antrim",
  });

  static readonly CRUMLIN_DUBLIN = new Location({
    id: "1848",
    displayName: "Crumlin, Dublin",
    displayValue: "crumlin-dublin",
  });

  static readonly CRUMLIN_GALWAY = new Location({
    id: "1602",
    displayName: "Crumlin, Galway",
    displayValue: "crumlin-galway",
  });

  static readonly CRUSHEEN_CLARE = new Location({
    id: "1574",
    displayName: "Crusheen, Clare",
    displayValue: "crusheen-clare",
  });

  static readonly CRUTT_KILKENNY = new Location({
    id: "2808",
    displayName: "Crutt, Kilkenny",
    displayValue: "crutt-kilkenny",
  });

  static readonly CUFFESGRANGE_KILKENNY = new Location({
    id: "2809",
    displayName: "Cuffesgrange, Kilkenny",
    displayValue: "cuffesgrange-kilkenny",
  });

  static readonly CUILKILLEW_MAYO = new Location({
    id: "2242",
    displayName: "Cuilkillew, Mayo",
    displayValue: "cuilkillew-mayo",
  });

  static readonly CUILMORE_MAYO = new Location({
    id: "2243",
    displayName: "Cuilmore, Mayo",
    displayValue: "cuilmore-mayo",
  });

  static readonly CULDAFF_DONEGAL = new Location({
    id: "793",
    displayName: "Culdaff, Donegal",
    displayValue: "culdaff-donegal",
  });

  static readonly CULFADDA_SLIGO = new Location({
    id: "3528",
    displayName: "Culfadda, Sligo",
    displayValue: "culfadda-sligo",
  });

  static readonly CULLAHILL_LAOIS = new Location({
    id: "296",
    displayName: "Cullahill, Laois",
    displayValue: "cullahill-laois",
  });

  static readonly CULLANE_LIMERICK = new Location({
    id: "2929",
    displayName: "Cullane, Limerick",
    displayValue: "cullane-limerick",
  });

  static readonly CULLEENS_SLIGO = new Location({
    id: "3529",
    displayName: "Culleens, Sligo",
    displayValue: "culleens-sligo",
  });

  static readonly CULLEN_CORK = new Location({
    id: "1355",
    displayName: "Cullen, Cork",
    displayValue: "cullen-cork",
  });

  static readonly CULLEN_TIPPERARY = new Location({
    id: "3560",
    displayName: "Cullen, Tipperary",
    displayValue: "cullen-tipperary",
  });

  static readonly CULLENSTOWN_WEXFORD = new Location({
    id: "3893",
    displayName: "Cullenstown, Wexford",
    displayValue: "cullenstown-wexford",
  });

  static readonly CULLIN_MAYO = new Location({
    id: "2244",
    displayName: "Cullin, Mayo",
    displayValue: "cullin-mayo",
  });

  static readonly CULLYBACKEY_ANTRIM = new Location({
    id: "125",
    displayName: "Cullybackey, Antrim",
    displayValue: "cullybackey-antrim",
  });

  static readonly CULLYFAD_LONGFORD = new Location({
    id: "2981",
    displayName: "Cullyfad, Longford",
    displayValue: "cullyfad-longford",
  });

  static readonly CULLYHANNA_ARMAGH = new Location({
    id: "1467",
    displayName: "Cullyhanna, Armagh",
    displayValue: "cullyhanna-armagh",
  });

  static readonly CULMORE_DERRY = new Location({
    id: "1598",
    displayName: "Culmore, Derry",
    displayValue: "culmore-derry",
  });

  static readonly CURRABINNY_CORK = new Location({
    id: "1356",
    displayName: "Currabinny, Cork",
    displayValue: "currabinny-cork",
  });

  static readonly CURRACLOE_WEXFORD = new Location({
    id: "3894",
    displayName: "Curracloe, Wexford",
    displayValue: "curracloe-wexford",
  });

  static readonly CURRAGH_WEST_GALWAY = new Location({
    id: "689",
    displayName: "Curragh West, Galway",
    displayValue: "curragh-west-galway",
  });

  static readonly CURRAGH_WATERFORD = new Location({
    id: "3731",
    displayName: "Curragh, Waterford",
    displayValue: "curragh-waterford",
  });

  static readonly CURRAGHA_MEATH = new Location({
    id: "3307",
    displayName: "Curragha, Meath",
    displayValue: "curragha-meath",
  });

  static readonly CURRAGHBONAUN_SLIGO = new Location({
    id: "1139",
    displayName: "Curraghbonaun, Sligo",
    displayValue: "curraghbonaun-sligo",
  });

  static readonly CURRAGHBOY_ROSCOMMON = new Location({
    id: "3439",
    displayName: "Curraghboy, Roscommon",
    displayValue: "curraghboy-roscommon",
  });

  static readonly CURRAGHCHASE_LIMERICK = new Location({
    id: "2930",
    displayName: "Curraghchase, Limerick",
    displayValue: "curraghchase-limerick",
  });

  static readonly CURRAGHROE_ROSCOMMON = new Location({
    id: "3440",
    displayName: "Curraghroe, Roscommon",
    displayValue: "curraghroe-roscommon",
  });

  static readonly CURRAGLASS_CORK = new Location({
    id: "369",
    displayName: "Curraglass, Cork",
    displayValue: "curraglass-cork",
  });

  static readonly CURRAHEEN_CORK = new Location({
    id: "1781",
    displayName: "Curraheen, Cork",
    displayValue: "curraheen-cork",
  });

  static readonly CURRAN_DERRY = new Location({
    id: "1951",
    displayName: "Curran, Derry",
    displayValue: "curran-derry",
  });

  static readonly CURRANS_KERRY = new Location({
    id: "1373",
    displayName: "Currans, Kerry",
    displayValue: "currans-kerry",
  });

  static readonly CURRAUN_GALWAY = new Location({
    id: "690",
    displayName: "Curraun, Galway",
    displayValue: "curraun-galway",
  });

  static readonly CURREENY_TIPPERARY = new Location({
    id: "3561",
    displayName: "Curreeny, Tipperary",
    displayValue: "curreeny-tipperary",
  });

  static readonly CURROW_KERRY = new Location({
    id: "1603",
    displayName: "Currow, Kerry",
    displayValue: "currow-kerry",
  });

  static readonly CURRY_MAYO = new Location({
    id: "2245",
    displayName: "Curry, Mayo",
    displayValue: "curry-mayo",
  });

  static readonly CURRY_SLIGO = new Location({
    id: "3530",
    displayName: "Curry, Sligo",
    displayValue: "curry-sligo",
  });

  static readonly CURRYGLASS_CORK = new Location({
    id: "378",
    displayName: "Curryglass, Cork",
    displayValue: "curryglass-cork",
  });

  static readonly CUSDUFF_CORK = new Location({
    id: "371",
    displayName: "Cusduff, Cork",
    displayValue: "cusduff-cork",
  });

  static readonly CUSHENDALL_ANTRIM = new Location({
    id: "127",
    displayName: "Cushendall, Antrim",
    displayValue: "cushendall-antrim",
  });

  static readonly CUSHENDUN_ANTRIM = new Location({
    id: "128",
    displayName: "Cushendun, Antrim",
    displayValue: "cushendun-antrim",
  });

  static readonly CUSHINA_OFFALY = new Location({
    id: "3349",
    displayName: "Cushina, Offaly",
    displayValue: "cushina-offaly",
  });

  static readonly DIT_GRANGEGORMAN_DUBLIN = new Location({
    id: "4362",
    displayName: "DIT Grangegorman, Dublin",
    displayValue: "dit-grangegorman-dublin",
  });

  static readonly DIT_MOUNT_STREET_DUBLIN = new Location({
    id: "4322",
    displayName: "DIT Mount Street, Dublin",
    displayValue: "dit-mount-street-dublin",
  });

  static readonly DAINGEAN_OFFALY = new Location({
    id: "3350",
    displayName: "Daingean, Offaly",
    displayValue: "daingean-offaly",
  });

  static readonly DALKEY_DUBLIN = new Location({
    id: "1849",
    displayName: "Dalkey, Dublin",
    displayValue: "dalkey-dublin",
  });

  static readonly DALYSTOWN_GALWAY = new Location({
    id: "1766",
    displayName: "Dalystown, Galway",
    displayValue: "dalystown-galway",
  });

  static readonly DAMASTOWN_DUBLIN = new Location({
    id: "1095",
    displayName: "Damastown, Dublin",
    displayValue: "damastown-dublin",
  });

  static readonly DAMERSTOWN_KILKENNY = new Location({
    id: "2810",
    displayName: "Damerstown, Kilkenny",
    displayValue: "damerstown-kilkenny",
  });

  static readonly DANESFORT_KILKENNY = new Location({
    id: "2811",
    displayName: "Danesfort, Kilkenny",
    displayValue: "danesfort-kilkenny",
  });

  static readonly DANESFORT_LONGFORD = new Location({
    id: "923",
    displayName: "Danesfort, Longford",
    displayValue: "danesfort-longford",
  });

  static readonly DANGAN_CORK = new Location({
    id: "1782",
    displayName: "Dangan, Cork",
    displayValue: "dangan-cork",
  });

  static readonly DANGAN_GALWAY = new Location({
    id: "2471",
    displayName: "Dangan, Galway",
    displayValue: "dangan-galway",
  });

  static readonly DANGAN_KILKENNY = new Location({
    id: "2815",
    displayName: "Dangan, Kilkenny",
    displayValue: "dangan-kilkenny",
  });

  static readonly DARBY_S_GAP_WEXFORD = new Location({
    id: "1257",
    displayName: "Darby's Gap, Wexford",
    displayValue: "darby-s-gap-wexford",
  });

  static readonly DARNDALE_DUBLIN = new Location({
    id: "2115",
    displayName: "Darndale, Dublin",
    displayValue: "darndale-dublin",
  });

  static readonly DARRAGH_CLARE = new Location({
    id: "1575",
    displayName: "Darragh, Clare",
    displayValue: "darragh-clare",
  });

  static readonly DARTRY_DUBLIN = new Location({
    id: "2118",
    displayName: "Dartry, Dublin",
    displayValue: "dartry-dublin",
  });

  static readonly DARVER_LOUTH = new Location({
    id: "3030",
    displayName: "Darver, Louth",
    displayValue: "darver-louth",
  });

  static readonly DAVIDSTOWN_WICKLOW = new Location({
    id: "4000",
    displayName: "Davidstown, Wicklow",
    displayValue: "davidstown-wicklow",
  });

  static readonly DAWROS_GALWAY = new Location({
    id: "696",
    displayName: "Dawros, Galway",
    displayValue: "dawros-galway",
  });

  static readonly DEANS_GRANGE_DUBLIN = new Location({
    id: "2119",
    displayName: "Deans Grange, Dublin",
    displayValue: "deans-grange-dublin",
  });

  static readonly DEELISH_CORK = new Location({
    id: "379",
    displayName: "Deelish, Cork",
    displayValue: "deelish-cork",
  });

  static readonly DELGANY_WICKLOW = new Location({
    id: "4001",
    displayName: "Delgany, Wicklow",
    displayValue: "delgany-wicklow",
  });

  static readonly DELPHI_MAYO = new Location({
    id: "971",
    displayName: "Delphi, Mayo",
    displayValue: "delphi-mayo",
  });

  static readonly DELVIN_WESTMEATH = new Location({
    id: "3772",
    displayName: "Delvin, Westmeath",
    displayValue: "delvin-westmeath",
  });

  static readonly DERNAGREE_CORK = new Location({
    id: "1783",
    displayName: "Dernagree, Cork",
    displayValue: "dernagree-cork",
  });

  static readonly DERRAVOHER_LIMERICK = new Location({
    id: "2911",
    displayName: "Derravoher, Limerick",
    displayValue: "derravoher-limerick",
  });

  static readonly DERREEN_CLARE = new Location({
    id: "1576",
    displayName: "Derreen, Clare",
    displayValue: "derreen-clare",
  });

  static readonly DERREEN_MAYO = new Location({
    id: "2253",
    displayName: "Derreen, Mayo",
    displayValue: "derreen-mayo",
  });

  static readonly DERREENDARRAGH_KERRY = new Location({
    id: "1604",
    displayName: "Derreendarragh, Kerry",
    displayValue: "derreendarragh-kerry",
  });

  static readonly DERREENY_CORK = new Location({
    id: "380",
    displayName: "Derreeny, Cork",
    displayValue: "derreeny-cork",
  });

  static readonly DERRIAGHY_ANTRIM = new Location({
    id: "129",
    displayName: "Derriaghy, Antrim",
    displayValue: "derriaghy-antrim",
  });

  static readonly DERRIES_OFFALY = new Location({
    id: "3351",
    displayName: "Derries, Offaly",
    displayValue: "derries-offaly",
  });

  static readonly DERRINTURN_KILDARE = new Location({
    id: "2550",
    displayName: "Derrinturn, Kildare",
    displayValue: "derrinturn-kildare",
  });

  static readonly DERRY_CITY_DERRY = new Location({
    id: "1952",
    displayName: "Derry City, Derry",
    displayValue: "derry-city-derry",
  });

  static readonly DERRY_SLIGO = new Location({
    id: "3531",
    displayName: "Derry, Sligo",
    displayValue: "derry-sligo",
  });

  static readonly DERRYBEG_DONEGAL = new Location({
    id: "794",
    displayName: "Derrybeg, Donegal",
    displayValue: "derrybeg-donegal",
  });

  static readonly DERRYBEG_LIMERICK = new Location({
    id: "2912",
    displayName: "Derrybeg, Limerick",
    displayValue: "derrybeg-limerick",
  });

  static readonly DERRYBOYE_DOWN = new Location({
    id: "1072",
    displayName: "Derryboye, Down",
    displayValue: "derryboye-down",
  });

  static readonly DERRYBRIEN_GALWAY = new Location({
    id: "697",
    displayName: "Derrybrien, Galway",
    displayValue: "derrybrien-galway",
  });

  static readonly DERRYCOOLY_OFFALY = new Location({
    id: "1329",
    displayName: "Derrycooly, Offaly",
    displayValue: "derrycooly-offaly",
  });

  static readonly DERRYDRUEL_DONEGAL = new Location({
    id: "796",
    displayName: "Derrydruel, Donegal",
    displayValue: "derrydruel-donegal",
  });

  static readonly DERRYERGLINNA_GALWAY = new Location({
    id: "699",
    displayName: "Derryerglinna, Galway",
    displayValue: "derryerglinna-galway",
  });

  static readonly DERRYFADDA_TIPPERARY = new Location({
    id: "3562",
    displayName: "Derryfadda, Tipperary",
    displayValue: "derryfadda-tipperary",
  });

  static readonly DERRYGOLAN_WESTMEATH = new Location({
    id: "3773",
    displayName: "Derrygolan, Westmeath",
    displayValue: "derrygolan-westmeath",
  });

  static readonly DERRYGONNELLY_FERMANAGH = new Location({
    id: "2186",
    displayName: "Derrygonnelly, Fermanagh",
    displayValue: "derrygonnelly-fermanagh",
  });

  static readonly DERRYGOOLIN_GALWAY = new Location({
    id: "2472",
    displayName: "Derrygoolin, Galway",
    displayValue: "derrygoolin-galway",
  });

  static readonly DERRYGROGAN_OFFALY = new Location({
    id: "3352",
    displayName: "Derrygrogan, Offaly",
    displayValue: "derrygrogan-offaly",
  });

  static readonly DERRYKEIGHAN_ANTRIM = new Location({
    id: "130",
    displayName: "Derrykeighan, Antrim",
    displayValue: "derrykeighan-antrim",
  });

  static readonly DERRYKNOCKANE_LIMERICK = new Location({
    id: "2913",
    displayName: "Derryknockane, Limerick",
    displayValue: "derryknockane-limerick",
  });

  static readonly DERRYLEA_GALWAY = new Location({
    id: "2473",
    displayName: "Derrylea, Galway",
    displayValue: "derrylea-galway",
  });

  static readonly DERRYLIN_FERMANAGH = new Location({
    id: "2187",
    displayName: "Derrylin, Fermanagh",
    displayValue: "derrylin-fermanagh",
  });

  static readonly DERRYLOUGH_DONEGAL = new Location({
    id: "551",
    displayName: "Derrylough, Donegal",
    displayValue: "derrylough-donegal",
  });

  static readonly DERRYMORE_KERRY = new Location({
    id: "1605",
    displayName: "Derrymore, Kerry",
    displayValue: "derrymore-kerry",
  });

  static readonly DERRYNABRIN_GALWAY = new Location({
    id: "2379",
    displayName: "Derrynabrin, Galway",
    displayValue: "derrynabrin-galway",
  });

  static readonly DERRYNANE_KERRY = new Location({
    id: "743",
    displayName: "Derrynane, Kerry",
    displayValue: "derrynane-kerry",
  });

  static readonly DERRYNEEN_GALWAY = new Location({
    id: "2380",
    displayName: "Derryneen, Galway",
    displayValue: "derryneen-galway",
  });

  static readonly DERRYRUSH_GALWAY = new Location({
    id: "2381",
    displayName: "Derryrush, Galway",
    displayValue: "derryrush-galway",
  });

  static readonly DERRYTRASNA_ARMAGH = new Location({
    id: "1468",
    displayName: "Derrytrasna, Armagh",
    displayValue: "derrytrasna-armagh",
  });

  static readonly DERRYVOHY_MAYO = new Location({
    id: "2254",
    displayName: "Derryvohy, Mayo",
    displayValue: "derryvohy-mayo",
  });

  static readonly DERRYWODE_GALWAY = new Location({
    id: "695",
    displayName: "Derrywode, Galway",
    displayValue: "derrywode-galway",
  });

  static readonly DERVOCK_ANTRIM = new Location({
    id: "89",
    displayName: "Dervock, Antrim",
    displayValue: "dervock-antrim",
  });

  static readonly DESERTMARTIN_DERRY = new Location({
    id: "1953",
    displayName: "Desertmartin, Derry",
    displayValue: "desertmartin-derry",
  });

  static readonly DILLONS_CROSS_CORK = new Location({
    id: "1971",
    displayName: "Dillons Cross, Cork",
    displayValue: "dillons-cross-cork",
  });

  static readonly DINGLE_KERRY = new Location({
    id: "1696",
    displayName: "Dingle, Kerry",
    displayValue: "dingle-kerry",
  });

  static readonly DOAGH_BEG_DONEGAL = new Location({
    id: "548",
    displayName: "Doagh Beg, Donegal",
    displayValue: "doagh-beg-donegal",
  });

  static readonly DOAGH_ANTRIM = new Location({
    id: "90",
    displayName: "Doagh, Antrim",
    displayValue: "doagh-antrim",
  });

  static readonly DOAGH_DONEGAL = new Location({
    id: "797",
    displayName: "Doagh, Donegal",
    displayValue: "doagh-donegal",
  });

  static readonly DOLLA_TIPPERARY = new Location({
    id: "3563",
    displayName: "Dolla, Tipperary",
    displayValue: "dolla-tipperary",
  });

  static readonly DOLLINGSTOWN_DOWN = new Location({
    id: "633",
    displayName: "Dollingstown, Down",
    displayValue: "dollingstown-down",
  });

  static readonly DOLLYMOUNT_DUBLIN = new Location({
    id: "2120",
    displayName: "Dollymount, Dublin",
    displayValue: "dollymount-dublin",
  });

  static readonly DOLPHIN_S_BARN_DUBLIN = new Location({
    id: "1027",
    displayName: "Dolphin's Barn, Dublin",
    displayValue: "dolphin-s-barn-dublin",
  });

  static readonly DONABATE_DUBLIN = new Location({
    id: "1870",
    displayName: "Donabate, Dublin",
    displayValue: "donabate-dublin",
  });

  static readonly DONACARNEY_AND_SURROUNDS_MEATH = new Location({
    id: "4104",
    displayName: "Donacarney (& Surrounds), Meath",
    displayValue: "donacarney-and-surrounds-meath",
  });

  static readonly DONACARNEY_MEATH = new Location({
    id: "3308",
    displayName: "Donacarney, Meath",
    displayValue: "donacarney-meath",
  });

  static readonly DONADEA_KILDARE = new Location({
    id: "2551",
    displayName: "Donadea, Kildare",
    displayValue: "donadea-kildare",
  });

  static readonly DONAGHADEE_DOWN = new Location({
    id: "634",
    displayName: "Donaghadee, Down",
    displayValue: "donaghadee-down",
  });

  static readonly DONAGHCLONEY_DOWN = new Location({
    id: "635",
    displayName: "Donaghcloney, Down",
    displayValue: "donaghcloney-down",
  });

  static readonly DONAGHMEDE_DUBLIN = new Location({
    id: "1871",
    displayName: "Donaghmede, Dublin",
    displayValue: "donaghmede-dublin",
  });

  static readonly DONAGHMORE_LAOIS = new Location({
    id: "297",
    displayName: "Donaghmore, Laois",
    displayValue: "donaghmore-laois",
  });

  static readonly DONAGHMORE_TYRONE = new Location({
    id: "3660",
    displayName: "Donaghmore, Tyrone",
    displayValue: "donaghmore-tyrone",
  });

  static readonly DONAGHPATRICK_MEATH = new Location({
    id: "1059",
    displayName: "Donaghpatrick, Meath",
    displayValue: "donaghpatrick-meath",
  });

  static readonly DONAMON_ROSCOMMON = new Location({
    id: "3441",
    displayName: "Donamon, Roscommon",
    displayValue: "donamon-roscommon",
  });

  static readonly DONARD_WEXFORD = new Location({
    id: "3895",
    displayName: "Donard, Wexford",
    displayValue: "donard-wexford",
  });

  static readonly DONARD_WICKLOW = new Location({
    id: "4002",
    displayName: "Donard, Wicklow",
    displayValue: "donard-wicklow",
  });

  static readonly DONASKEAGH_TIPPERARY = new Location({
    id: "3564",
    displayName: "Donaskeagh, Tipperary",
    displayValue: "donaskeagh-tipperary",
  });

  static readonly DONEGAL_TOWN_AND_SURROUNDS_DONEGAL = new Location({
    id: "4186",
    displayName: "Donegal Town (& Surrounds), Donegal",
    displayValue: "donegal-town-and-surrounds-donegal",
  });

  static readonly DONEGAL_TOWN_DONEGAL = new Location({
    id: "798",
    displayName: "Donegal Town, Donegal",
    displayValue: "donegal-town-donegal",
  });

  static readonly DONEGALL_ROAD_ANTRIM = new Location({
    id: "91",
    displayName: "Donegall Road, Antrim",
    displayValue: "donegall-road-antrim",
  });

  static readonly DONERAILE_CORK = new Location({
    id: "1972",
    displayName: "Doneraile, Cork",
    displayValue: "doneraile-cork",
  });

  static readonly DONNAGHMORE_MEATH = new Location({
    id: "1045",
    displayName: "Donnaghmore, Meath",
    displayValue: "donnaghmore-meath",
  });

  static readonly DONNYBROOK_CORK = new Location({
    id: "1973",
    displayName: "Donnybrook, Cork",
    displayValue: "donnybrook-cork",
  });

  static readonly DONNYBROOK_DUBLIN = new Location({
    id: "1872",
    displayName: "Donnybrook, Dublin",
    displayValue: "donnybrook-dublin",
  });

  static readonly DONNYCARNEY_DUBLIN = new Location({
    id: "1873",
    displayName: "Donnycarney, Dublin",
    displayValue: "donnycarney-dublin",
  });

  static readonly DONOHILL_TIPPERARY = new Location({
    id: "3565",
    displayName: "Donohill, Tipperary",
    displayValue: "donohill-tipperary",
  });

  static readonly DONORE_MEATH = new Location({
    id: "3309",
    displayName: "Donore, Meath",
    displayValue: "donore-meath",
  });

  static readonly DONOUGHMORE_CORK = new Location({
    id: "1974",
    displayName: "Donoughmore, Cork",
    displayValue: "donoughmore-cork",
  });

  static readonly DOOAGH_MAYO = new Location({
    id: "3239",
    displayName: "Dooagh, Mayo",
    displayValue: "dooagh-mayo",
  });

  static readonly DOOBEHY_MAYO = new Location({
    id: "974",
    displayName: "Doobehy, Mayo",
    displayValue: "doobehy-mayo",
  });

  static readonly DOOCASTLE_MAYO = new Location({
    id: "3240",
    displayName: "Doocastle, Mayo",
    displayValue: "doocastle-mayo",
  });

  static readonly DOOCASTLE_SLIGO = new Location({
    id: "3532",
    displayName: "Doocastle, Sligo",
    displayValue: "doocastle-sligo",
  });

  static readonly DOOCHARY_DONEGAL = new Location({
    id: "799",
    displayName: "Doochary, Donegal",
    displayValue: "doochary-donegal",
  });

  static readonly DOOEGA_MAYO = new Location({
    id: "3241",
    displayName: "Dooega, Mayo",
    displayValue: "dooega-mayo",
  });

  static readonly DOOGARY_CAVAN = new Location({
    id: "1508",
    displayName: "Doogary, Cavan",
    displayValue: "doogary-cavan",
  });

  static readonly DOOGHBEG_MAYO = new Location({
    id: "3242",
    displayName: "Dooghbeg, Mayo",
    displayValue: "dooghbeg-mayo",
  });

  static readonly DOOGORT_MAYO = new Location({
    id: "3243",
    displayName: "Doogort, Mayo",
    displayValue: "doogort-mayo",
  });

  static readonly DOOHOMA_MAYO = new Location({
    id: "3258",
    displayName: "Doohoma, Mayo",
    displayValue: "doohoma-mayo",
  });

  static readonly DOOKS_KERRY = new Location({
    id: "1697",
    displayName: "Dooks, Kerry",
    displayValue: "dooks-kerry",
  });

  static readonly DOOLIN_CLARE = new Location({
    id: "1577",
    displayName: "Doolin, Clare",
    displayValue: "doolin-clare",
  });

  static readonly DOON_GALWAY = new Location({
    id: "2382",
    displayName: "Doon, Galway",
    displayValue: "doon-galway",
  });

  static readonly DOON_LIMERICK = new Location({
    id: "2914",
    displayName: "Doon, Limerick",
    displayValue: "doon-limerick",
  });

  static readonly DOONAHA_EAST_CLARE = new Location({
    id: "1579",
    displayName: "Doonaha East, Clare",
    displayValue: "doonaha-east-clare",
  });

  static readonly DOONAHA_WEST_CLARE = new Location({
    id: "309",
    displayName: "Doonaha West, Clare",
    displayValue: "doonaha-west-clare",
  });

  static readonly DOONBEG_CLARE = new Location({
    id: "1580",
    displayName: "Doonbeg, Clare",
    displayValue: "doonbeg-clare",
  });

  static readonly DOONLOUGHAN_GALWAY = new Location({
    id: "2383",
    displayName: "Doonloughan, Galway",
    displayValue: "doonloughan-galway",
  });

  static readonly DOONMANAGH_KERRY = new Location({
    id: "744",
    displayName: "Doonmanagh, Kerry",
    displayValue: "doonmanagh-kerry",
  });

  static readonly DOORADOYLE_LIMERICK = new Location({
    id: "2915",
    displayName: "Dooradoyle, Limerick",
    displayValue: "dooradoyle-limerick",
  });

  static readonly DOOYORK_MAYO = new Location({
    id: "3260",
    displayName: "Dooyork, Mayo",
    displayValue: "dooyork-mayo",
  });

  static readonly DORE_DONEGAL = new Location({
    id: "800",
    displayName: "Dore, Donegal",
    displayValue: "dore-donegal",
  });

  static readonly DORRUSAWILLIN_LEITRIM = new Location({
    id: "2353",
    displayName: "Dorrusawillin, Leitrim",
    displayValue: "dorrusawillin-leitrim",
  });

  static readonly DORSET_COLLEGE_DUBLIN = new Location({
    id: "4360",
    displayName: "Dorset College, Dublin",
    displayValue: "dorset-college-dublin",
  });

  static readonly DOUGH_CORK = new Location({
    id: "381",
    displayName: "Dough, Cork",
    displayValue: "dough-cork",
  });

  static readonly DOUGHCLOYNE_CORK = new Location({
    id: "1375",
    displayName: "Doughcloyne, Cork",
    displayValue: "doughcloyne-cork",
  });

  static readonly DOUGHISKA_GALWAY = new Location({
    id: "2384",
    displayName: "Doughiska, Galway",
    displayValue: "doughiska-galway",
  });

  static readonly DOUGLAS_CORK = new Location({
    id: "1376",
    displayName: "Douglas, Cork",
    displayValue: "douglas-cork",
  });

  static readonly DOWDALLSHILL_LOUTH = new Location({
    id: "3035",
    displayName: "Dowdallshill, Louth",
    displayValue: "dowdallshill-louth",
  });

  static readonly DOWLING_KILKENNY = new Location({
    id: "828",
    displayName: "Dowling, Kilkenny",
    displayValue: "dowling-kilkenny",
  });

  static readonly DOWNHILL_DERRY = new Location({
    id: "1954",
    displayName: "Downhill, Derry",
    displayValue: "downhill-derry",
  });

  static readonly DOWNINGS_DONEGAL = new Location({
    id: "808",
    displayName: "Downings, Donegal",
    displayValue: "downings-donegal",
  });

  static readonly DOWNPATRICK_DOWN = new Location({
    id: "2003",
    displayName: "Downpatrick, Down",
    displayValue: "downpatrick-down",
  });

  static readonly DOWRA_CAVAN = new Location({
    id: "1509",
    displayName: "Dowra, Cavan",
    displayValue: "dowra-cavan",
  });

  static readonly DOWRA_LEITRIM = new Location({
    id: "2354",
    displayName: "Dowra, Leitrim",
    displayValue: "dowra-leitrim",
  });

  static readonly DRANGAN_TIPPERARY = new Location({
    id: "3566",
    displayName: "Drangan, Tipperary",
    displayValue: "drangan-tipperary",
  });

  static readonly DRAPERSTOWN_DERRY = new Location({
    id: "1955",
    displayName: "Draperstown, Derry",
    displayValue: "draperstown-derry",
  });

  static readonly DREENAGH_KERRY = new Location({
    id: "1698",
    displayName: "Dreenagh, Kerry",
    displayValue: "dreenagh-kerry",
  });

  static readonly DRIMNAGH_DUBLIN = new Location({
    id: "1874",
    displayName: "Drimnagh, Dublin",
    displayValue: "drimnagh-dublin",
  });

  static readonly DRIMOLEAGUE_CORK = new Location({
    id: "1377",
    displayName: "Drimoleague, Cork",
    displayValue: "drimoleague-cork",
  });

  static readonly DRINAGH_CORK = new Location({
    id: "1378",
    displayName: "Drinagh, Cork",
    displayValue: "drinagh-cork",
  });

  static readonly DRINAGH_WEXFORD = new Location({
    id: "3896",
    displayName: "Drinagh, Wexford",
    displayValue: "drinagh-wexford",
  });

  static readonly DRINAGHAN_SLIGO = new Location({
    id: "3533",
    displayName: "Drinaghan, Sligo",
    displayValue: "drinaghan-sligo",
  });

  static readonly DRING_LONGFORD = new Location({
    id: "2982",
    displayName: "Dring, Longford",
    displayValue: "dring-longford",
  });

  static readonly DRIPSEY_CORK = new Location({
    id: "1379",
    displayName: "Dripsey, Cork",
    displayValue: "dripsey-cork",
  });

  static readonly DROGHEDA_AND_SURROUNDS_LOUTH = new Location({
    id: "4105",
    displayName: "Drogheda (& Surrounds), Louth",
    displayValue: "drogheda-and-surrounds-louth",
  });

  static readonly DROGHEDA_AND_SURROUNDS_MEATH = new Location({
    id: "4106",
    displayName: "Drogheda (& Surrounds), Meath",
    displayValue: "drogheda-and-surrounds-meath",
  });

  static readonly DROGHEDA_LOUTH = new Location({
    id: "3036",
    displayName: "Drogheda, Louth",
    displayValue: "drogheda-louth",
  });

  static readonly DROGHEDA_MEATH = new Location({
    id: "3310",
    displayName: "Drogheda, Meath",
    displayValue: "drogheda-meath",
  });

  static readonly DROM_TIPPERARY = new Location({
    id: "3567",
    displayName: "Drom, Tipperary",
    displayValue: "drom-tipperary",
  });

  static readonly DROMAHAIR_LEITRIM = new Location({
    id: "2355",
    displayName: "Dromahair, Leitrim",
    displayValue: "dromahair-leitrim",
  });

  static readonly DROMAHANE_CORK = new Location({
    id: "1380",
    displayName: "Dromahane, Cork",
    displayValue: "dromahane-cork",
  });

  static readonly DROMARA_DOWN = new Location({
    id: "636",
    displayName: "Dromara, Down",
    displayValue: "dromara-down",
  });

  static readonly DROMARD_SLIGO = new Location({
    id: "3534",
    displayName: "Dromard, Sligo",
    displayValue: "dromard-sligo",
  });

  static readonly DROMASMOLE_CORK = new Location({
    id: "386",
    displayName: "Dromasmole, Cork",
    displayValue: "dromasmole-cork",
  });

  static readonly DROMBANE_TIPPERARY = new Location({
    id: "3568",
    displayName: "Drombane, Tipperary",
    displayValue: "drombane-tipperary",
  });

  static readonly DROMBANNA_LIMERICK = new Location({
    id: "2916",
    displayName: "Drombanna, Limerick",
    displayValue: "drombanna-limerick",
  });

  static readonly DROMCOLLIHER_LIMERICK = new Location({
    id: "2917",
    displayName: "Dromcolliher, Limerick",
    displayValue: "dromcolliher-limerick",
  });

  static readonly DROMIN_CORK = new Location({
    id: "1382",
    displayName: "Dromin, Cork",
    displayValue: "dromin-cork",
  });

  static readonly DROMIN_LIMERICK = new Location({
    id: "2918",
    displayName: "Dromin, Limerick",
    displayValue: "dromin-limerick",
  });

  static readonly DROMIN_LOUTH = new Location({
    id: "3037",
    displayName: "Dromin, Louth",
    displayValue: "dromin-louth",
  });

  static readonly DROMINA_CORK = new Location({
    id: "1383",
    displayName: "Dromina, Cork",
    displayValue: "dromina-cork",
  });

  static readonly DROMINEER_TIPPERARY = new Location({
    id: "3569",
    displayName: "Dromineer, Tipperary",
    displayValue: "dromineer-tipperary",
  });

  static readonly DROMISKIN_LOUTH = new Location({
    id: "3038",
    displayName: "Dromiskin, Louth",
    displayValue: "dromiskin-louth",
  });

  static readonly DROMKEEN_LIMERICK = new Location({
    id: "2919",
    displayName: "Dromkeen, Limerick",
    displayValue: "dromkeen-limerick",
  });

  static readonly DROMLEA_LEITRIM = new Location({
    id: "2356",
    displayName: "Dromlea, Leitrim",
    displayValue: "dromlea-leitrim",
  });

  static readonly DROMOD_LEITRIM = new Location({
    id: "2364",
    displayName: "Dromod, Leitrim",
    displayValue: "dromod-leitrim",
  });

  static readonly DROMORE_WEST_SLIGO = new Location({
    id: "3535",
    displayName: "Dromore West, Sligo",
    displayValue: "dromore-west-sligo",
  });

  static readonly DROMORE_DOWN = new Location({
    id: "2004",
    displayName: "Dromore, Down",
    displayValue: "dromore-down",
  });

  static readonly DROMORE_LIMERICK = new Location({
    id: "2717",
    displayName: "Dromore, Limerick",
    displayValue: "dromore-limerick",
  });

  static readonly DROMORE_TYRONE = new Location({
    id: "3661",
    displayName: "Dromore, Tyrone",
    displayValue: "dromore-tyrone",
  });

  static readonly DROMTRASNA_LIMERICK = new Location({
    id: "2718",
    displayName: "Dromtrasna, Limerick",
    displayValue: "dromtrasna-limerick",
  });

  static readonly DRUM_EAST_GALWAY = new Location({
    id: "2479",
    displayName: "Drum East, Galway",
    displayValue: "drum-east-galway",
  });

  static readonly DRUM_WEST_GALWAY = new Location({
    id: "2506",
    displayName: "Drum West, Galway",
    displayValue: "drum-west-galway",
  });

  static readonly DRUM_MONAGHAN = new Location({
    id: "499",
    displayName: "Drum, Monaghan",
    displayValue: "drum-monaghan",
  });

  static readonly DRUM_ROSCOMMON = new Location({
    id: "3442",
    displayName: "Drum, Roscommon",
    displayValue: "drum-roscommon",
  });

  static readonly DRUM_SLIGO = new Location({
    id: "1164",
    displayName: "Drum, Sligo",
    displayValue: "drum-sligo",
  });

  static readonly DRUMAHOE_DERRY = new Location({
    id: "1956",
    displayName: "Drumahoe, Derry",
    displayValue: "drumahoe-derry",
  });

  static readonly DRUMALEE_CAVAN = new Location({
    id: "231",
    displayName: "Drumalee, Cavan",
    displayValue: "drumalee-cavan",
  });

  static readonly DRUMANDOORA_CLARE = new Location({
    id: "310",
    displayName: "Drumandoora, Clare",
    displayValue: "drumandoora-clare",
  });

  static readonly DRUMANESS_DOWN = new Location({
    id: "2005",
    displayName: "Drumaness, Down",
    displayValue: "drumaness-down",
  });

  static readonly DRUMATOBER_GALWAY = new Location({
    id: "2385",
    displayName: "Drumatober, Galway",
    displayValue: "drumatober-galway",
  });

  static readonly DRUMBEG_DONEGAL = new Location({
    id: "549",
    displayName: "Drumbeg, Donegal",
    displayValue: "drumbeg-donegal",
  });

  static readonly DRUMBEG_DOWN = new Location({
    id: "2006",
    displayName: "Drumbeg, Down",
    displayValue: "drumbeg-down",
  });

  static readonly DRUMBO_DOWN = new Location({
    id: "2007",
    displayName: "Drumbo, Down",
    displayValue: "drumbo-down",
  });

  static readonly DRUMCAR_LOUTH = new Location({
    id: "3039",
    displayName: "Drumcar, Louth",
    displayValue: "drumcar-louth",
  });

  static readonly DRUMCLIFF_SLIGO = new Location({
    id: "3536",
    displayName: "Drumcliff, Sligo",
    displayValue: "drumcliff-sligo",
  });

  static readonly DRUMCONDRA_DUBLIN = new Location({
    id: "1875",
    displayName: "Drumcondra, Dublin",
    displayValue: "drumcondra-dublin",
  });

  static readonly DRUMCONG_LEITRIM = new Location({
    id: "2365",
    displayName: "Drumcong, Leitrim",
    displayValue: "drumcong-leitrim",
  });

  static readonly DRUMCONRATH_MEATH = new Location({
    id: "3311",
    displayName: "Drumconrath, Meath",
    displayValue: "drumconrath-meath",
  });

  static readonly DRUMCREE_WESTMEATH = new Location({
    id: "3774",
    displayName: "Drumcree, Westmeath",
    displayValue: "drumcree-westmeath",
  });

  static readonly DRUMDUFF_FERMANAGH = new Location({
    id: "626",
    displayName: "Drumduff, Fermanagh",
    displayValue: "drumduff-fermanagh",
  });

  static readonly DRUMFEA_CARLOW = new Location({
    id: "1679",
    displayName: "Drumfea, Carlow",
    displayValue: "drumfea-carlow",
  });

  static readonly DRUMFIN_SLIGO = new Location({
    id: "3537",
    displayName: "Drumfin, Sligo",
    displayValue: "drumfin-sligo",
  });

  static readonly DRUMFREE_DONEGAL = new Location({
    id: "809",
    displayName: "Drumfree, Donegal",
    displayValue: "drumfree-donegal",
  });

  static readonly DRUMGOFT_WICKLOW = new Location({
    id: "1316",
    displayName: "Drumgoft, Wicklow",
    displayValue: "drumgoft-wicklow",
  });

  static readonly DRUMKEARY_GALWAY = new Location({
    id: "2480",
    displayName: "Drumkeary, Galway",
    displayValue: "drumkeary-galway",
  });

  static readonly DRUMKEEN_DONEGAL = new Location({
    id: "810",
    displayName: "Drumkeen, Donegal",
    displayValue: "drumkeen-donegal",
  });

  static readonly DRUMKEERAN_LEITRIM = new Location({
    id: "2366",
    displayName: "Drumkeeran, Leitrim",
    displayValue: "drumkeeran-leitrim",
  });

  static readonly DRUMLISH_LONGFORD = new Location({
    id: "2983",
    displayName: "Drumlish, Longford",
    displayValue: "drumlish-longford",
  });

  static readonly DRUMLOSH_ROSCOMMON = new Location({
    id: "3443",
    displayName: "Drumlosh, Roscommon",
    displayValue: "drumlosh-roscommon",
  });

  static readonly DRUMMIN_CARLOW = new Location({
    id: "1692",
    displayName: "Drummin, Carlow",
    displayValue: "drummin-carlow",
  });

  static readonly DRUMMULLIN_ROSCOMMON = new Location({
    id: "3444",
    displayName: "Drummullin, Roscommon",
    displayValue: "drummullin-roscommon",
  });

  static readonly DRUMQUIN_TYRONE = new Location({
    id: "3662",
    displayName: "Drumquin, Tyrone",
    displayValue: "drumquin-tyrone",
  });

  static readonly DRUMRANEY_WESTMEATH = new Location({
    id: "3775",
    displayName: "Drumraney, Westmeath",
    displayValue: "drumraney-westmeath",
  });

  static readonly DRUMREAGH_MAYO = new Location({
    id: "2578",
    displayName: "Drumreagh, Mayo",
    displayValue: "drumreagh-mayo",
  });

  static readonly DRUMREE_MEATH = new Location({
    id: "2256",
    displayName: "Drumree, Meath",
    displayValue: "drumree-meath",
  });

  static readonly DRUMSHANBO_LEITRIM = new Location({
    id: "2553",
    displayName: "Drumshanbo, Leitrim",
    displayValue: "drumshanbo-leitrim",
  });

  static readonly DRUMSKELT_MONAGHAN = new Location({
    id: "1087",
    displayName: "Drumskelt, Monaghan",
    displayValue: "drumskelt-monaghan",
  });

  static readonly DRUMSNA_LEITRIM = new Location({
    id: "2554",
    displayName: "Drumsna, Leitrim",
    displayValue: "drumsna-leitrim",
  });

  static readonly DRUMSURN_DERRY = new Location({
    id: "1957",
    displayName: "Drumsurn, Derry",
    displayValue: "drumsurn-derry",
  });

  static readonly DUAGH_KERRY = new Location({
    id: "1699",
    displayName: "Duagh, Kerry",
    displayValue: "duagh-kerry",
  });

  static readonly DUALLA_TIPPERARY = new Location({
    id: "3570",
    displayName: "Dualla, Tipperary",
    displayValue: "dualla-tipperary",
  });

  static readonly DUBLIN_1_DUBLIN = new Location({
    id: "65",
    displayName: "Dublin 1, Dublin",
    displayValue: "dublin-1-dublin",
  });

  static readonly DUBLIN_10_DUBLIN = new Location({
    id: "75",
    displayName: "Dublin 10, Dublin",
    displayValue: "dublin-10-dublin",
  });

  static readonly DUBLIN_11_DUBLIN = new Location({
    id: "76",
    displayName: "Dublin 11, Dublin",
    displayValue: "dublin-11-dublin",
  });

  static readonly DUBLIN_12_DUBLIN = new Location({
    id: "77",
    displayName: "Dublin 12, Dublin",
    displayValue: "dublin-12-dublin",
  });

  static readonly DUBLIN_13_DUBLIN = new Location({
    id: "78",
    displayName: "Dublin 13, Dublin",
    displayValue: "dublin-13-dublin",
  });

  static readonly DUBLIN_14_DUBLIN = new Location({
    id: "79",
    displayName: "Dublin 14, Dublin",
    displayValue: "dublin-14-dublin",
  });

  static readonly DUBLIN_15_DUBLIN = new Location({
    id: "80",
    displayName: "Dublin 15, Dublin",
    displayValue: "dublin-15-dublin",
  });

  static readonly DUBLIN_16_DUBLIN = new Location({
    id: "81",
    displayName: "Dublin 16, Dublin",
    displayValue: "dublin-16-dublin",
  });

  static readonly DUBLIN_17_DUBLIN = new Location({
    id: "82",
    displayName: "Dublin 17, Dublin",
    displayValue: "dublin-17-dublin",
  });

  static readonly DUBLIN_18_DUBLIN = new Location({
    id: "83",
    displayName: "Dublin 18, Dublin",
    displayValue: "dublin-18-dublin",
  });

  static readonly DUBLIN_2_DUBLIN = new Location({
    id: "66",
    displayName: "Dublin 2, Dublin",
    displayValue: "dublin-2-dublin",
  });

  static readonly DUBLIN_20_DUBLIN = new Location({
    id: "84",
    displayName: "Dublin 20, Dublin",
    displayValue: "dublin-20-dublin",
  });

  static readonly DUBLIN_22_DUBLIN = new Location({
    id: "85",
    displayName: "Dublin 22, Dublin",
    displayValue: "dublin-22-dublin",
  });

  static readonly DUBLIN_24_DUBLIN = new Location({
    id: "86",
    displayName: "Dublin 24, Dublin",
    displayValue: "dublin-24-dublin",
  });

  static readonly DUBLIN_3_DUBLIN = new Location({
    id: "67",
    displayName: "Dublin 3, Dublin",
    displayValue: "dublin-3-dublin",
  });

  static readonly DUBLIN_4_DUBLIN = new Location({
    id: "68",
    displayName: "Dublin 4, Dublin",
    displayValue: "dublin-4-dublin",
  });

  static readonly DUBLIN_5_DUBLIN = new Location({
    id: "69",
    displayName: "Dublin 5, Dublin",
    displayValue: "dublin-5-dublin",
  });

  static readonly DUBLIN_6_DUBLIN = new Location({
    id: "70",
    displayName: "Dublin 6, Dublin",
    displayValue: "dublin-6-dublin",
  });

  static readonly DUBLIN_6W_DUBLIN = new Location({
    id: "71",
    displayName: "Dublin 6W, Dublin",
    displayValue: "dublin-6w-dublin",
  });

  static readonly DUBLIN_7_DUBLIN = new Location({
    id: "72",
    displayName: "Dublin 7, Dublin",
    displayValue: "dublin-7-dublin",
  });

  static readonly DUBLIN_8_DUBLIN = new Location({
    id: "73",
    displayName: "Dublin 8, Dublin",
    displayValue: "dublin-8-dublin",
  });

  static readonly DUBLIN_9_DUBLIN = new Location({
    id: "74",
    displayName: "Dublin 9, Dublin",
    displayValue: "dublin-9-dublin",
  });

  static readonly DUBLIN_BUSINESS_SCHOOL_DUBLIN = new Location({
    id: "4316",
    displayName: "Dublin Business School, Dublin",
    displayValue: "dublin-business-school-dublin",
  });

  static readonly DUBLIN_CITY = new Location({
    id: "33",
    displayName: "Dublin City",
    displayValue: "dublin-city",
  });

  static readonly DUBLIN_CITY_CENTRE_DUBLIN = new Location({
    id: "39",
    displayName: "Dublin City Centre, Dublin",
    displayValue: "dublin-city-centre-dublin",
  });

  static readonly DUBLIN_CITY_UNIVERSITY_ALL_HALLOWS_CAMPUS_DUBLIN =
    new Location({
      id: "4386",
      displayName: "Dublin City University - All hallows campus, Dublin",
      displayValue: "dublin-city-university-all-hallows-campus-dublin",
    });

  static readonly DUBLIN_CITY_UNIVERSITY_GLASNEVIN_CAMPUS_DUBLIN = new Location(
    {
      id: "4385",
      displayName: "Dublin City University - Glasnevin campus, Dublin",
      displayValue: "dublin-city-university-glasnevin-campus-dublin",
    }
  );

  static readonly DUBLIN_CITY_UNIVERSITY_DUBLIN = new Location({
    id: "4317",
    displayName: "Dublin City University, Dublin",
    displayValue: "dublin-city-university-dublin",
  });

  static readonly DUBLIN_COMMUTER_TOWNS_DUBLIN = new Location({
    id: "45",
    displayName: "Dublin Commuter Towns, Dublin",
    displayValue: "dublin-commuter-towns-dublin",
  });

  static readonly DUBLIN_INSTITUTE_OF_DESIGN_DUBLIN = new Location({
    id: "4364",
    displayName: "Dublin Institute of Design, Dublin",
    displayValue: "dublin-institute-of-design-dublin",
  });

  static readonly DUBLIN_INSTITUTE_OF_TECHNOLOGY_AUNGIER_ST_DUBLIN =
    new Location({
      id: "4321",
      displayName: "Dublin Institute of Technology Aungier St, Dublin",
      displayValue: "dublin-institute-of-technology-aungier-st-dublin",
    });

  static readonly DUBLIN_INSTITUTE_OF_TECHNOLOGY_BOLTON_ST_DUBLIN =
    new Location({
      id: "4318",
      displayName: "Dublin Institute of Technology Bolton St, Dublin",
      displayValue: "dublin-institute-of-technology-bolton-st-dublin",
    });

  static readonly DUBLIN_INSTITUTE_OF_TECHNOLOGY_CATHAL_BRUGHA_ST_DUBLIN =
    new Location({
      id: "4319",
      displayName: "Dublin Institute of Technology Cathal Brugha St, Dublin",
      displayValue: "dublin-institute-of-technology-cathal-brugha-st-dublin",
    });

  static readonly DUBLIN_INSTITUTE_OF_TECHNOLOGY_KEVIN_ST_DUBLIN = new Location(
    {
      id: "4320",
      displayName: "Dublin Institute of Technology Kevin St, Dublin",
      displayValue: "dublin-institute-of-technology-kevin-st-dublin",
    }
  );

  static readonly DUBLIN_INSTITUTE_OF_TECHNOLOGY_RATHMINES_DUBLIN =
    new Location({
      id: "4323",
      displayName: "Dublin Institute of Technology Rathmines, Dublin",
      displayValue: "dublin-institute-of-technology-rathmines-dublin",
    });

  static readonly DUBLIN_PIKE_CORK = new Location({
    id: "1384",
    displayName: "Dublin Pike, Cork",
    displayValue: "dublin-pike-cork",
  });

  static readonly DUFFY_KILDARE = new Location({
    id: "779",
    displayName: "Duffy, Kildare",
    displayValue: "duffy-kildare",
  });

  static readonly DULEEK_MEATH = new Location({
    id: "2953",
    displayName: "Duleek, Meath",
    displayValue: "duleek-meath",
  });

  static readonly DUN_LAOGHAIRE_INSTITUTE_OF_ART_DESIGN_AND_TECHNOLOGY_DUBLIN =
    new Location({
      id: "4324",
      displayName: "Dun Laoghaire Institute of Art Design & Technology, Dublin",
      displayValue:
        "dun-laoghaire-institute-of-art-design-and-technology-dublin",
    });

  static readonly DUN_LAOGHAIRE_DUBLIN = new Location({
    id: "1882",
    displayName: "Dun Laoghaire, Dublin",
    displayValue: "dun-laoghaire-dublin",
  });

  static readonly DUNADRY_ANTRIM = new Location({
    id: "92",
    displayName: "Dunadry, Antrim",
    displayValue: "dunadry-antrim",
  });

  static readonly DUNAFF_DONEGAL = new Location({
    id: "811",
    displayName: "Dunaff, Donegal",
    displayValue: "dunaff-donegal",
  });

  static readonly DUNAGHY_ANTRIM = new Location({
    id: "93",
    displayName: "Dunaghy, Antrim",
    displayValue: "dunaghy-antrim",
  });

  static readonly DUNANY_LOUTH = new Location({
    id: "3040",
    displayName: "Dunany, Louth",
    displayValue: "dunany-louth",
  });

  static readonly DUNBEN_KILKENNY = new Location({
    id: "822",
    displayName: "Dunben, Kilkenny",
    displayValue: "dunben-kilkenny",
  });

  static readonly DUNBOYNE_AND_SURROUNDS_MEATH = new Location({
    id: "4107",
    displayName: "Dunboyne (& Surrounds), Meath",
    displayValue: "dunboyne-and-surrounds-meath",
  });

  static readonly DUNBOYNE_MEATH = new Location({
    id: "2954",
    displayName: "Dunboyne, Meath",
    displayValue: "dunboyne-meath",
  });

  static readonly DUNCAIRN_ANTRIM = new Location({
    id: "94",
    displayName: "Duncairn, Antrim",
    displayValue: "duncairn-antrim",
  });

  static readonly DUNCANNON_WEXFORD = new Location({
    id: "3897",
    displayName: "Duncannon, Wexford",
    displayValue: "duncannon-wexford",
  });

  static readonly DUNCORMICK_WEXFORD = new Location({
    id: "3898",
    displayName: "Duncormick, Wexford",
    displayValue: "duncormick-wexford",
  });

  static readonly DUNDALK_AND_SURROUNDS_LOUTH = new Location({
    id: "4108",
    displayName: "Dundalk (& Surrounds), Louth",
    displayValue: "dundalk-and-surrounds-louth",
  });

  static readonly DUNDALK_INSTITUTE_OF_TECHNOLOGY_LOUTH = new Location({
    id: "4336",
    displayName: "Dundalk Institute of Technology, Louth",
    displayValue: "dundalk-institute-of-technology-louth",
  });

  static readonly DUNDALK_LOUTH = new Location({
    id: "3041",
    displayName: "Dundalk, Louth",
    displayValue: "dundalk-louth",
  });

  static readonly DUNDERROW_CORK = new Location({
    id: "1385",
    displayName: "Dunderrow, Cork",
    displayValue: "dunderrow-cork",
  });

  static readonly DUNDERRY_MEATH = new Location({
    id: "2955",
    displayName: "Dunderry, Meath",
    displayValue: "dunderry-meath",
  });

  static readonly DUNDONALD_DOWN = new Location({
    id: "2008",
    displayName: "Dundonald, Down",
    displayValue: "dundonald-down",
  });

  static readonly DUNDROD_ANTRIM = new Location({
    id: "95",
    displayName: "Dundrod, Antrim",
    displayValue: "dundrod-antrim",
  });

  static readonly DUNDRUM_DOWN = new Location({
    id: "2012",
    displayName: "Dundrum, Down",
    displayValue: "dundrum-down",
  });

  static readonly DUNDRUM_DUBLIN = new Location({
    id: "1881",
    displayName: "Dundrum, Dublin",
    displayValue: "dundrum-dublin",
  });

  static readonly DUNDRUM_TIPPERARY = new Location({
    id: "3571",
    displayName: "Dundrum, Tipperary",
    displayValue: "dundrum-tipperary",
  });

  static readonly DUNFANAGHY_DONEGAL = new Location({
    id: "814",
    displayName: "Dunfanaghy, Donegal",
    displayValue: "dunfanaghy-donegal",
  });

  static readonly DUNGANNON_TYRONE = new Location({
    id: "3663",
    displayName: "Dungannon, Tyrone",
    displayValue: "dungannon-tyrone",
  });

  static readonly DUNGANSTOWN_WEXFORD = new Location({
    id: "3899",
    displayName: "Dunganstown, Wexford",
    displayValue: "dunganstown-wexford",
  });

  static readonly DUNGARVAN_AND_SURROUNDS_WATERFORD = new Location({
    id: "4097",
    displayName: "Dungarvan (& Surrounds), Waterford",
    displayValue: "dungarvan-and-surrounds-waterford",
  });

  static readonly DUNGARVAN_KILKENNY = new Location({
    id: "2816",
    displayName: "Dungarvan, Kilkenny",
    displayValue: "dungarvan-kilkenny",
  });

  static readonly DUNGARVAN_WATERFORD = new Location({
    id: "3732",
    displayName: "Dungarvan, Waterford",
    displayValue: "dungarvan-waterford",
  });

  static readonly DUNGIVEN_DERRY = new Location({
    id: "1958",
    displayName: "Dungiven, Derry",
    displayValue: "dungiven-derry",
  });

  static readonly DUNGLOE_DONEGAL = new Location({
    id: "815",
    displayName: "Dungloe, Donegal",
    displayValue: "dungloe-donegal",
  });

  static readonly DUNGOURNEY_CORK = new Location({
    id: "1386",
    displayName: "Dungourney, Cork",
    displayValue: "dungourney-cork",
  });

  static readonly DUNHILL_WATERFORD = new Location({
    id: "3733",
    displayName: "Dunhill, Waterford",
    displayValue: "dunhill-waterford",
  });

  static readonly DUNIRY_GALWAY = new Location({
    id: "2507",
    displayName: "Duniry, Galway",
    displayValue: "duniry-galway",
  });

  static readonly DUNKERRIN_OFFALY = new Location({
    id: "3353",
    displayName: "Dunkerrin, Offaly",
    displayValue: "dunkerrin-offaly",
  });

  static readonly DUNKINEELY_DONEGAL = new Location({
    id: "817",
    displayName: "Dunkineely, Donegal",
    displayValue: "dunkineely-donegal",
  });

  static readonly DUNKITT_KILKENNY = new Location({
    id: "2817",
    displayName: "Dunkitt, Kilkenny",
    displayValue: "dunkitt-kilkenny",
  });

  static readonly DUNLAVIN_WICKLOW = new Location({
    id: "4003",
    displayName: "Dunlavin, Wicklow",
    displayValue: "dunlavin-wicklow",
  });

  static readonly DUNLEER_LOUTH = new Location({
    id: "3056",
    displayName: "Dunleer, Louth",
    displayValue: "dunleer-louth",
  });

  static readonly DUNLEWY_DONEGAL = new Location({
    id: "818",
    displayName: "Dunlewy, Donegal",
    displayValue: "dunlewy-donegal",
  });

  static readonly DUNLOY_ANTRIM = new Location({
    id: "1454",
    displayName: "Dunloy, Antrim",
    displayValue: "dunloy-antrim",
  });

  static readonly DUNMANUS_CORK = new Location({
    id: "387",
    displayName: "Dunmanus, Cork",
    displayValue: "dunmanus-cork",
  });

  static readonly DUNMANWAY_CORK = new Location({
    id: "1387",
    displayName: "Dunmanway, Cork",
    displayValue: "dunmanway-cork",
  });

  static readonly DUNMORE_EAST_WATERFORD = new Location({
    id: "3734",
    displayName: "Dunmore East, Waterford",
    displayValue: "dunmore-east-waterford",
  });

  static readonly DUNMORE_GALWAY = new Location({
    id: "2508",
    displayName: "Dunmore, Galway",
    displayValue: "dunmore-galway",
  });

  static readonly DUNMORE_KILKENNY = new Location({
    id: "2818",
    displayName: "Dunmore, Kilkenny",
    displayValue: "dunmore-kilkenny",
  });

  static readonly DUNMURRY_ANTRIM = new Location({
    id: "155",
    displayName: "Dunmurry, Antrim",
    displayValue: "dunmurry-antrim",
  });

  static readonly DUNNAMAGGAN_KILKENNY = new Location({
    id: "2819",
    displayName: "Dunnamaggan, Kilkenny",
    displayValue: "dunnamaggan-kilkenny",
  });

  static readonly DUNNAMANAGH_TYRONE = new Location({
    id: "3664",
    displayName: "Dunnamanagh, Tyrone",
    displayValue: "dunnamanagh-tyrone",
  });

  static readonly DUNQUIN_KERRY = new Location({
    id: "1705",
    displayName: "Dunquin, Kerry",
    displayValue: "dunquin-kerry",
  });

  static readonly DUNSANY_MEATH = new Location({
    id: "3203",
    displayName: "Dunsany, Meath",
    displayValue: "dunsany-meath",
  });

  static readonly DUNSHAUGHLIN_MEATH = new Location({
    id: "3204",
    displayName: "Dunshaughlin, Meath",
    displayValue: "dunshaughlin-meath",
  });

  static readonly DUNWORLY_CORK = new Location({
    id: "1388",
    displayName: "Dunworly, Cork",
    displayValue: "dunworly-cork",
  });

  static readonly DURROW_LAOIS = new Location({
    id: "298",
    displayName: "Durrow, Laois",
    displayValue: "durrow-laois",
  });

  static readonly DURRUS_CORK = new Location({
    id: "1389",
    displayName: "Durrus, Cork",
    displayValue: "durrus-cork",
  });

  static readonly DYSART_ROSCOMMON = new Location({
    id: "3445",
    displayName: "Dysart, Roscommon",
    displayValue: "dysart-roscommon",
  });

  static readonly DYSART_WESTMEATH = new Location({
    id: "3776",
    displayName: "Dysart, Westmeath",
    displayValue: "dysart-westmeath",
  });

  static readonly EASKEY_SLIGO = new Location({
    id: "3538",
    displayName: "Easkey, Sligo",
    displayValue: "easkey-sligo",
  });

  static readonly EAST_BELFAST_CITY_ANTRIM = new Location({
    id: "54",
    displayName: "East Belfast City, Antrim",
    displayValue: "east-belfast-city-antrim",
  });

  static readonly EAST_CORK_CORK = new Location({
    id: "64",
    displayName: "East Cork, Cork",
    displayValue: "east-cork-cork",
  });

  static readonly EAST_FERRY_CORK = new Location({
    id: "1390",
    displayName: "East Ferry, Cork",
    displayValue: "east-ferry-cork",
  });

  static readonly EAST_WALL_DUBLIN = new Location({
    id: "1883",
    displayName: "East Wall, Dublin",
    displayValue: "east-wall-dublin",
  });

  static readonly EDENDERRY_AND_SURROUNDS_OFFALY = new Location({
    id: "4109",
    displayName: "Edenderry (& Surrounds), Offaly",
    displayValue: "edenderry-and-surrounds-offaly",
  });

  static readonly EDENDERRY_OFFALY = new Location({
    id: "3354",
    displayName: "Edenderry, Offaly",
    displayValue: "edenderry-offaly",
  });

  static readonly EDENMORE_DUBLIN = new Location({
    id: "2122",
    displayName: "Edenmore, Dublin",
    displayValue: "edenmore-dublin",
  });

  static readonly EDERNEY_FERMANAGH = new Location({
    id: "2189",
    displayName: "Ederney, Fermanagh",
    displayValue: "ederney-fermanagh",
  });

  static readonly EDGEWORTHSTOWN_LONGFORD = new Location({
    id: "2984",
    displayName: "Edgeworthstown, Longford",
    displayValue: "edgeworthstown-longford",
  });

  static readonly EDMONDSTOWN_DUBLIN = new Location({
    id: "2125",
    displayName: "Edmondstown, Dublin",
    displayValue: "edmondstown-dublin",
  });

  static readonly EFFIN_LIMERICK = new Location({
    id: "2788",
    displayName: "Effin, Limerick",
    displayValue: "effin-limerick",
  });

  static readonly EGLINTON_DERRY = new Location({
    id: "1215",
    displayName: "Eglinton, Derry",
    displayValue: "eglinton-derry",
  });

  static readonly EGLISH_TYRONE = new Location({
    id: "3665",
    displayName: "Eglish, Tyrone",
    displayValue: "eglish-tyrone",
  });

  static readonly EIGHTER_CAVAN = new Location({
    id: "917",
    displayName: "Eighter, Cavan",
    displayValue: "eighter-cavan",
  });

  static readonly ELLISTRIN_DONEGAL = new Location({
    id: "837",
    displayName: "Ellistrin, Donegal",
    displayValue: "ellistrin-donegal",
  });

  static readonly ELPHIN_ROSCOMMON = new Location({
    id: "1858",
    displayName: "Elphin, Roscommon",
    displayValue: "elphin-roscommon",
  });

  static readonly ELTON_LIMERICK = new Location({
    id: "2789",
    displayName: "Elton, Limerick",
    displayValue: "elton-limerick",
  });

  static readonly EMLY_TIPPERARY = new Location({
    id: "3572",
    displayName: "Emly, Tipperary",
    displayValue: "emly-tipperary",
  });

  static readonly EMMOO_ROSCOMMON = new Location({
    id: "3446",
    displayName: "Emmoo, Roscommon",
    displayValue: "emmoo-roscommon",
  });

  static readonly EMYVALE_MONAGHAN = new Location({
    id: "500",
    displayName: "Emyvale, Monaghan",
    displayValue: "emyvale-monaghan",
  });

  static readonly ENFIELD_MEATH = new Location({
    id: "3205",
    displayName: "Enfield, Meath",
    displayValue: "enfield-meath",
  });

  static readonly ENNIS_AND_SURROUNDS_CLARE = new Location({
    id: "4110",
    displayName: "Ennis (& Surrounds), Clare",
    displayValue: "ennis-and-surrounds-clare",
  });

  static readonly ENNIS_ROAD_LIMERICK = new Location({
    id: "2790",
    displayName: "Ennis Road, Limerick",
    displayValue: "ennis-road-limerick",
  });

  static readonly ENNIS_CLARE = new Location({
    id: "1581",
    displayName: "Ennis, Clare",
    displayValue: "ennis-clare",
  });

  static readonly ENNISCORTHY_AND_SURROUNDS_WEXFORD = new Location({
    id: "4111",
    displayName: "Enniscorthy (& Surrounds), Wexford",
    displayValue: "enniscorthy-and-surrounds-wexford",
  });

  static readonly ENNISCORTHY_WEXFORD = new Location({
    id: "3900",
    displayName: "Enniscorthy, Wexford",
    displayValue: "enniscorthy-wexford",
  });

  static readonly ENNISCRONE_SLIGO = new Location({
    id: "3539",
    displayName: "Enniscrone, Sligo",
    displayValue: "enniscrone-sligo",
  });

  static readonly ENNISKEANE_CORK = new Location({
    id: "1391",
    displayName: "Enniskeane, Cork",
    displayValue: "enniskeane-cork",
  });

  static readonly ENNISKERRY_WICKLOW = new Location({
    id: "4004",
    displayName: "Enniskerry, Wicklow",
    displayValue: "enniskerry-wicklow",
  });

  static readonly ENNISKILLEN_FERMANAGH = new Location({
    id: "2190",
    displayName: "Enniskillen, Fermanagh",
    displayValue: "enniskillen-fermanagh",
  });

  static readonly ENNISTYMON_CLARE = new Location({
    id: "1582",
    displayName: "Ennistymon, Clare",
    displayValue: "ennistymon-clare",
  });

  static readonly ENNYBEGS_LONGFORD = new Location({
    id: "2985",
    displayName: "Ennybegs, Longford",
    displayValue: "ennybegs-longford",
  });

  static readonly ERRA_ROSCOMMON = new Location({
    id: "2030",
    displayName: "Erra, Roscommon",
    displayValue: "erra-roscommon",
  });

  static readonly ERRIFF_BRIDGE_MAYO = new Location({
    id: "979",
    displayName: "Erriff Bridge, Mayo",
    displayValue: "erriff-bridge-mayo",
  });

  static readonly ERRILL_LAOIS = new Location({
    id: "299",
    displayName: "Errill, Laois",
    displayValue: "errill-laois",
  });

  static readonly ERRISLANNAN_GALWAY = new Location({
    id: "2509",
    displayName: "Errislannan, Galway",
    displayValue: "errislannan-galway",
  });

  static readonly ESKER_SOUTH_LONGFORD = new Location({
    id: "938",
    displayName: "Esker South, Longford",
    displayValue: "esker-south-longford",
  });

  static readonly ESKER_GALWAY = new Location({
    id: "2510",
    displayName: "Esker, Galway",
    displayValue: "esker-galway",
  });

  static readonly ESKERAGH_MAYO = new Location({
    id: "2579",
    displayName: "Eskeragh, Mayo",
    displayValue: "eskeragh-mayo",
  });

  static readonly EYERIES_CORK = new Location({
    id: "1426",
    displayName: "Eyeries, Cork",
    displayValue: "eyeries-cork",
  });

  static readonly EYRECOURT_GALWAY = new Location({
    id: "2511",
    displayName: "Eyrecourt, Galway",
    displayValue: "eyrecourt-galway",
  });

  static readonly FAHA_WATERFORD = new Location({
    id: "3735",
    displayName: "Faha, Waterford",
    displayValue: "faha-waterford",
  });

  static readonly FAHAMORE_KERRY = new Location({
    id: "1706",
    displayName: "Fahamore, Kerry",
    displayValue: "fahamore-kerry",
  });

  static readonly FAHAN_DONEGAL = new Location({
    id: "838",
    displayName: "Fahan, Donegal",
    displayValue: "fahan-donegal",
  });

  static readonly FAHY_GALWAY = new Location({
    id: "2512",
    displayName: "Fahy, Galway",
    displayValue: "fahy-galway",
  });

  static readonly FAIR_GREEN_CLARE = new Location({
    id: "311",
    displayName: "Fair Green, Clare",
    displayValue: "fair-green-clare",
  });

  static readonly FAIRHILL_CORK = new Location({
    id: "1427",
    displayName: "Fairhill, Cork",
    displayValue: "fairhill-cork",
  });

  static readonly FAIRVIEW_DUBLIN = new Location({
    id: "2126",
    displayName: "Fairview, Dublin",
    displayValue: "fairview-dublin",
  });

  static readonly FAIRYMOUNT_ROSCOMMON = new Location({
    id: "2031",
    displayName: "Fairymount, Roscommon",
    displayValue: "fairymount-roscommon",
  });

  static readonly FAITHLEGG_WATERFORD = new Location({
    id: "3736",
    displayName: "Faithlegg, Waterford",
    displayValue: "faithlegg-waterford",
  });

  static readonly FALCARRAGH_DONEGAL = new Location({
    id: "839",
    displayName: "Falcarragh, Donegal",
    displayValue: "falcarragh-donegal",
  });

  static readonly FALLMORE_MAYO = new Location({
    id: "980",
    displayName: "Fallmore, Mayo",
    displayValue: "fallmore-mayo",
  });

  static readonly FALLS_PARK_ANTRIM = new Location({
    id: "1394",
    displayName: "Falls Park, Antrim",
    displayValue: "falls-park-antrim",
  });

  static readonly FALLS_ANTRIM = new Location({
    id: "159",
    displayName: "Falls, Antrim",
    displayValue: "falls-antrim",
  });

  static readonly FANAD_DONEGAL = new Location({
    id: "840",
    displayName: "Fanad, Donegal",
    displayValue: "fanad-donegal",
  });

  static readonly FANORE_CLARE = new Location({
    id: "1583",
    displayName: "Fanore, Clare",
    displayValue: "fanore-clare",
  });

  static readonly FARAHY_CORK = new Location({
    id: "1428",
    displayName: "Farahy, Cork",
    displayValue: "farahy-cork",
  });

  static readonly FARDRUM_WESTMEATH = new Location({
    id: "3777",
    displayName: "Fardrum, Westmeath",
    displayValue: "fardrum-westmeath",
  });

  static readonly FARMER_S_BRIDGE_KERRY = new Location({
    id: "1707",
    displayName: "Farmer's Bridge, Kerry",
    displayValue: "farmer-s-bridge-kerry",
  });

  static readonly FARMERS_CROSS_CORK = new Location({
    id: "382",
    displayName: "Farmers Cross, Cork",
    displayValue: "farmers-cross-cork",
  });

  static readonly FARNAGHT_LEITRIM = new Location({
    id: "2555",
    displayName: "Farnaght, Leitrim",
    displayValue: "farnaght-leitrim",
  });

  static readonly FARNANES_CORK = new Location({
    id: "1429",
    displayName: "Farnanes, Cork",
    displayValue: "farnanes-cork",
  });

  static readonly FARNOGE_KILKENNY = new Location({
    id: "2820",
    displayName: "Farnoge, Kilkenny",
    displayValue: "farnoge-kilkenny",
  });

  static readonly FARRAN_CORK = new Location({
    id: "1430",
    displayName: "Farran, Cork",
    displayValue: "farran-cork",
  });

  static readonly FARRANFORE_KERRY = new Location({
    id: "1708",
    displayName: "Farranfore, Kerry",
    displayValue: "farranfore-kerry",
  });

  static readonly FARRANREE_CORK = new Location({
    id: "1431",
    displayName: "Farranree, Cork",
    displayValue: "farranree-cork",
  });

  static readonly FARRANSHONE_LIMERICK = new Location({
    id: "2935",
    displayName: "Farranshone, Limerick",
    displayValue: "farranshone-limerick",
  });

  static readonly FASSAROE_WICKLOW = new Location({
    id: "4005",
    displayName: "Fassaroe, Wicklow",
    displayValue: "fassaroe-wicklow",
  });

  static readonly FAUGHART_LOUTH = new Location({
    id: "3057",
    displayName: "Faughart, Louth",
    displayValue: "faughart-louth",
  });

  static readonly FEAGARRID_WATERFORD = new Location({
    id: "1180",
    displayName: "Feagarrid, Waterford",
    displayValue: "feagarrid-waterford",
  });

  static readonly FEAKLE_CLARE = new Location({
    id: "1584",
    displayName: "Feakle, Clare",
    displayValue: "feakle-clare",
  });

  static readonly FEDAMORE_LIMERICK = new Location({
    id: "2936",
    displayName: "Fedamore, Limerick",
    displayValue: "fedamore-limerick",
  });

  static readonly FEEARD_CLARE = new Location({
    id: "308",
    displayName: "Feeard, Clare",
    displayValue: "feeard-clare",
  });

  static readonly FEENAGH_LIMERICK = new Location({
    id: "2937",
    displayName: "Feenagh, Limerick",
    displayValue: "feenagh-limerick",
  });

  static readonly FEENY_DERRY = new Location({
    id: "1216",
    displayName: "Feeny, Derry",
    displayValue: "feeny-derry",
  });

  static readonly FEEVAGH_ROSCOMMON = new Location({
    id: "2032",
    displayName: "Feevagh, Roscommon",
    displayValue: "feevagh-roscommon",
  });

  static readonly FENAGH_CARLOW = new Location({
    id: "1693",
    displayName: "Fenagh, Carlow",
    displayValue: "fenagh-carlow",
  });

  static readonly FENAGH_LEITRIM = new Location({
    id: "2556",
    displayName: "Fenagh, Leitrim",
    displayValue: "fenagh-leitrim",
  });

  static readonly FENIT_KERRY = new Location({
    id: "1709",
    displayName: "Fenit, Kerry",
    displayValue: "fenit-kerry",
  });

  static readonly FENOR_WATERFORD = new Location({
    id: "3737",
    displayName: "Fenor, Waterford",
    displayValue: "fenor-waterford",
  });

  static readonly FEOHANAGH_KERRY = new Location({
    id: "1710",
    displayName: "Feohanagh, Kerry",
    displayValue: "feohanagh-kerry",
  });

  static readonly FEOHANAGH_LIMERICK = new Location({
    id: "2938",
    displayName: "Feohanagh, Limerick",
    displayValue: "feohanagh-limerick",
  });

  static readonly FERBANE_OFFALY = new Location({
    id: "3355",
    displayName: "Ferbane, Offaly",
    displayValue: "ferbane-offaly",
  });

  static readonly FERMANAGH = new Location({
    id: "30",
    displayName: "Fermanagh (County)",
    displayValue: "fermanagh",
  });

  static readonly FERMOY_AND_SURROUNDS_CORK = new Location({
    id: "4112",
    displayName: "Fermoy (& Surrounds), Cork",
    displayValue: "fermoy-and-surrounds-cork",
  });

  static readonly FERMOY_CORK = new Location({
    id: "1432",
    displayName: "Fermoy, Cork",
    displayValue: "fermoy-cork",
  });

  static readonly FERNS_WEXFORD = new Location({
    id: "3901",
    displayName: "Ferns, Wexford",
    displayValue: "ferns-wexford",
  });

  static readonly FERRY_BRIDGE_LIMERICK = new Location({
    id: "2939",
    displayName: "Ferry Bridge, Limerick",
    displayValue: "ferry-bridge-limerick",
  });

  static readonly FERRYBANK_WATERFORD = new Location({
    id: "3738",
    displayName: "Ferrybank, Waterford",
    displayValue: "ferrybank-waterford",
  });

  static readonly FERRYBANK_WEXFORD = new Location({
    id: "3902",
    displayName: "Ferrybank, Wexford",
    displayValue: "ferrybank-wexford",
  });

  static readonly FERRYBANK_WICKLOW = new Location({
    id: "4007",
    displayName: "Ferrybank, Wicklow",
    displayValue: "ferrybank-wicklow",
  });

  static readonly FERRYCARRIG_WEXFORD = new Location({
    id: "3903",
    displayName: "Ferrycarrig, Wexford",
    displayValue: "ferrycarrig-wexford",
  });

  static readonly FETHARD_TIPPERARY = new Location({
    id: "3573",
    displayName: "Fethard, Tipperary",
    displayValue: "fethard-tipperary",
  });

  static readonly FETHARD_WEXFORD = new Location({
    id: "3904",
    displayName: "Fethard, Wexford",
    displayValue: "fethard-wexford",
  });

  static readonly FETHARD_ON_SEA_WEXFORD = new Location({
    id: "3905",
    displayName: "Fethard-On-Sea, Wexford",
    displayValue: "fethard-on-sea-wexford",
  });

  static readonly FEWS_WATERFORD = new Location({
    id: "3739",
    displayName: "Fews, Waterford",
    displayValue: "fews-waterford",
  });

  static readonly FIDDOWN_KILKENNY = new Location({
    id: "2821",
    displayName: "Fiddown, Kilkenny",
    displayValue: "fiddown-kilkenny",
  });

  static readonly FINAGHY_ANTRIM = new Location({
    id: "160",
    displayName: "Finaghy, Antrim",
    displayValue: "finaghy-antrim",
  });

  static readonly FINAVARRA_CLARE = new Location({
    id: "1585",
    displayName: "Finavarra, Clare",
    displayValue: "finavarra-clare",
  });

  static readonly FINEA_WESTMEATH = new Location({
    id: "1932",
    displayName: "Finea, Westmeath",
    displayValue: "finea-westmeath",
  });

  static readonly FINGLAS_DUBLIN = new Location({
    id: "2127",
    displayName: "Finglas, Dublin",
    displayValue: "finglas-dublin",
  });

  static readonly FINNEA_CAVAN = new Location({
    id: "1106",
    displayName: "Finnea, Cavan",
    displayValue: "finnea-cavan",
  });

  static readonly FINNISGLIN_GALWAY = new Location({
    id: "2513",
    displayName: "Finnisglin, Galway",
    displayValue: "finnisglin-galway",
  });

  static readonly FINNY_MAYO = new Location({
    id: "2580",
    displayName: "Finny, Mayo",
    displayValue: "finny-mayo",
  });

  static readonly FINTONA_TYRONE = new Location({
    id: "3666",
    displayName: "Fintona, Tyrone",
    displayValue: "fintona-tyrone",
  });

  static readonly FINTOWN_DONEGAL = new Location({
    id: "859",
    displayName: "Fintown, Donegal",
    displayValue: "fintown-donegal",
  });

  static readonly FINUGE_KERRY = new Location({
    id: "1711",
    displayName: "Finuge, Kerry",
    displayValue: "finuge-kerry",
  });

  static readonly FIRHOUSE_DUBLIN = new Location({
    id: "1096",
    displayName: "Firhouse, Dublin",
    displayValue: "firhouse-dublin",
  });

  static readonly FIRIES_KERRY = new Location({
    id: "1712",
    displayName: "Firies, Kerry",
    displayValue: "firies-kerry",
  });

  static readonly FIRKEEL_CORK = new Location({
    id: "388",
    displayName: "Firkeel, Cork",
    displayValue: "firkeel-cork",
  });

  static readonly FISHERHILL_MAYO = new Location({
    id: "2581",
    displayName: "Fisherhill, Mayo",
    displayValue: "fisherhill-mayo",
  });

  static readonly FIVEALLEY_OFFALY = new Location({
    id: "3356",
    displayName: "Fivealley, Offaly",
    displayValue: "fivealley-offaly",
  });

  static readonly FIVEMILEBRIDGE_CORK = new Location({
    id: "383",
    displayName: "Fivemilebridge, Cork",
    displayValue: "fivemilebridge-cork",
  });

  static readonly FIVEMILETOWN_TYRONE = new Location({
    id: "3667",
    displayName: "Fivemiletown, Tyrone",
    displayValue: "fivemiletown-tyrone",
  });

  static readonly FLAGMOUNT_CLARE = new Location({
    id: "1586",
    displayName: "Flagmount, Clare",
    displayValue: "flagmount-clare",
  });

  static readonly FLAGMOUNT_KILKENNY = new Location({
    id: "2822",
    displayName: "Flagmount, Kilkenny",
    displayValue: "flagmount-kilkenny",
  });

  static readonly FOILYCLEARA_LIMERICK = new Location({
    id: "888",
    displayName: "Foilycleara, Limerick",
    displayValue: "foilycleara-limerick",
  });

  static readonly FONTSTOWN_KILDARE = new Location({
    id: "2552",
    displayName: "Fontstown, Kildare",
    displayValue: "fontstown-kildare",
  });

  static readonly FORDSTOWN_MEATH = new Location({
    id: "3206",
    displayName: "Fordstown, Meath",
    displayValue: "fordstown-meath",
  });

  static readonly FORE_WESTMEATH = new Location({
    id: "1933",
    displayName: "Fore, Westmeath",
    displayValue: "fore-westmeath",
  });

  static readonly FORKILL_ARMAGH = new Location({
    id: "1182",
    displayName: "Forkill, Armagh",
    displayValue: "forkill-armagh",
  });

  static readonly FORMOYLE_CLARE = new Location({
    id: "1587",
    displayName: "Formoyle, Clare",
    displayValue: "formoyle-clare",
  });

  static readonly FORMOYLE_LONGFORD = new Location({
    id: "939",
    displayName: "Formoyle, Longford",
    displayValue: "formoyle-longford",
  });

  static readonly FORMOYLE_MAYO = new Location({
    id: "2582",
    displayName: "Formoyle, Mayo",
    displayValue: "formoyle-mayo",
  });

  static readonly FORT_STEWART_DONEGAL = new Location({
    id: "554",
    displayName: "Fort Stewart, Donegal",
    displayValue: "fort-stewart-donegal",
  });

  static readonly FORTH_RIVER_ANTRIM = new Location({
    id: "162",
    displayName: "Forth River, Antrim",
    displayValue: "forth-river-antrim",
  });

  static readonly FORTHILL_LONGFORD = new Location({
    id: "924",
    displayName: "Forthill, Longford",
    displayValue: "forthill-longford",
  });

  static readonly FORTWILLIAM_ANTRIM = new Location({
    id: "163",
    displayName: "Fortwilliam, Antrim",
    displayValue: "fortwilliam-antrim",
  });

  static readonly FOSSA_KERRY = new Location({
    id: "1713",
    displayName: "Fossa, Kerry",
    displayValue: "fossa-kerry",
  });

  static readonly FOULKSMILLS_WEXFORD = new Location({
    id: "3906",
    displayName: "Foulksmills, Wexford",
    displayValue: "foulksmills-wexford",
  });

  static readonly FOUNTAIN_CROSS_CLARE = new Location({
    id: "1588",
    displayName: "Fountain Cross, Clare",
    displayValue: "fountain-cross-clare",
  });

  static readonly FOUNTAINSTOWN_CORK = new Location({
    id: "1808",
    displayName: "Fountainstown, Cork",
    displayValue: "fountainstown-cork",
  });

  static readonly FOUR_MILE_HOUSE_ROSCOMMON = new Location({
    id: "2033",
    displayName: "Four Mile House, Roscommon",
    displayValue: "four-mile-house-roscommon",
  });

  static readonly FOUR_ROADS_ROSCOMMON = new Location({
    id: "2086",
    displayName: "Four Roads, Roscommon",
    displayValue: "four-roads-roscommon",
  });

  static readonly FOX_AND_GEESE_DUBLIN = new Location({
    id: "2128",
    displayName: "Fox & Geese, Dublin",
    displayValue: "fox-and-geese-dublin",
  });

  static readonly FOXFORD_MAYO = new Location({
    id: "2583",
    displayName: "Foxford, Mayo",
    displayValue: "foxford-mayo",
  });

  static readonly FOXHALL_GALWAY = new Location({
    id: "2514",
    displayName: "Foxhall, Galway",
    displayValue: "foxhall-galway",
  });

  static readonly FOXROCK_DUBLIN = new Location({
    id: "2129",
    displayName: "Foxrock, Dublin",
    displayValue: "foxrock-dublin",
  });

  static readonly FOYNES_LIMERICK = new Location({
    id: "2940",
    displayName: "Foynes, Limerick",
    displayValue: "foynes-limerick",
  });

  static readonly FRANKFIELD_CORK = new Location({
    id: "1434",
    displayName: "Frankfield, Cork",
    displayValue: "frankfield-cork",
  });

  static readonly FREEMOUNT_CORK = new Location({
    id: "1435",
    displayName: "Freemount, Cork",
    displayValue: "freemount-cork",
  });

  static readonly FRENCHPARK_ROSCOMMON = new Location({
    id: "2087",
    displayName: "Frenchpark, Roscommon",
    displayValue: "frenchpark-roscommon",
  });

  static readonly FRESHFORD_KILKENNY = new Location({
    id: "2823",
    displayName: "Freshford, Kilkenny",
    displayValue: "freshford-kilkenny",
  });

  static readonly FREYNESTOWN_WICKLOW = new Location({
    id: "4008",
    displayName: "Freynestown, Wicklow",
    displayValue: "freynestown-wicklow",
  });

  static readonly FROSSES_DONEGAL = new Location({
    id: "860",
    displayName: "Frosses, Donegal",
    displayValue: "frosses-donegal",
  });

  static readonly FUERTY_ROSCOMMON = new Location({
    id: "2088",
    displayName: "Fuerty, Roscommon",
    displayValue: "fuerty-roscommon",
  });

  static readonly FUNSHIN_MORE_GALWAY = new Location({
    id: "2515",
    displayName: "Funshin More, Galway",
    displayValue: "funshin-more-galway",
  });

  static readonly FURBO_GALWAY = new Location({
    id: "2516",
    displayName: "Furbo, Galway",
    displayValue: "furbo-galway",
  });

  static readonly GAINESTOWN_WESTMEATH = new Location({
    id: "3778",
    displayName: "Gainestown, Westmeath",
    displayValue: "gainestown-westmeath",
  });

  static readonly GALBALLY_LIMERICK = new Location({
    id: "2941",
    displayName: "Galbally, Limerick",
    displayValue: "galbally-limerick",
  });

  static readonly GALBALLY_TYRONE = new Location({
    id: "3668",
    displayName: "Galbally, Tyrone",
    displayValue: "galbally-tyrone",
  });

  static readonly GALBALLY_WEXFORD = new Location({
    id: "3907",
    displayName: "Galbally, Wexford",
    displayValue: "galbally-wexford",
  });

  static readonly GALBOLIE_CAVAN = new Location({
    id: "1510",
    displayName: "Galbolie, Cavan",
    displayValue: "galbolie-cavan",
  });

  static readonly GALGORM_ANTRIM = new Location({
    id: "164",
    displayName: "Galgorm, Antrim",
    displayValue: "galgorm-antrim",
  });

  static readonly GALLARUS_KERRY = new Location({
    id: "754",
    displayName: "Gallarus, Kerry",
    displayValue: "gallarus-kerry",
  });

  static readonly GALLOPING_GREEN_DUBLIN = new Location({
    id: "1344",
    displayName: "Galloping Green, Dublin",
    displayValue: "galloping-green-dublin",
  });

  static readonly GALLOWSTOWN_ROSCOMMON = new Location({
    id: "3447",
    displayName: "Gallowstown, Roscommon",
    displayValue: "gallowstown-roscommon",
  });

  static readonly GALMOY_KILKENNY = new Location({
    id: "2824",
    displayName: "Galmoy, Kilkenny",
    displayValue: "galmoy-kilkenny",
  });

  static readonly GALWALLY_DOWN = new Location({
    id: "2013",
    displayName: "Galwally, Down",
    displayValue: "galwally-down",
  });

  static readonly GALWAY_CITY = new Location({
    id: "34",
    displayName: "Galway City",
    displayValue: "galway-city",
  });

  static readonly GALWAY_CITY_CENTRE_GALWAY = new Location({
    id: "49",
    displayName: "Galway City Centre, Galway",
    displayValue: "galway-city-centre-galway",
  });

  static readonly GALWAY_CITY_SUBURBS_GALWAY = new Location({
    id: "50",
    displayName: "Galway City Suburbs, Galway",
    displayValue: "galway-city-suburbs-galway",
  });

  static readonly GALWAY_COMMUTER_TOWNS_GALWAY = new Location({
    id: "51",
    displayName: "Galway Commuter Towns, Galway",
    displayValue: "galway-commuter-towns-galway",
  });

  static readonly GALWAYMAYO_INSTITUTE_OF_TECHNOLOGY_GALWAY = new Location({
    id: "4337",
    displayName: "GalwayMayo Institute of Technology, Galway",
    displayValue: "galwaymayo-institute-of-technology-galway",
  });

  static readonly GARADICE_MEATH = new Location({
    id: "1060",
    displayName: "Garadice, Meath",
    displayValue: "garadice-meath",
  });

  static readonly GARBALLY_GALWAY = new Location({
    id: "2518",
    displayName: "Garbally, Galway",
    displayValue: "garbally-galway",
  });

  static readonly GARNAVILLA_TIPPERARY = new Location({
    id: "1177",
    displayName: "Garnavilla, Tipperary",
    displayValue: "garnavilla-tipperary",
  });

  static readonly GARNERVILLE_DOWN = new Location({
    id: "2015",
    displayName: "Garnerville, Down",
    displayValue: "garnerville-down",
  });

  static readonly GARRANE_CORK = new Location({
    id: "1436",
    displayName: "Garrane, Cork",
    displayValue: "garrane-cork",
  });

  static readonly GARRANLAHAN_ROSCOMMON = new Location({
    id: "3448",
    displayName: "Garranlahan, Roscommon",
    displayValue: "garranlahan-roscommon",
  });

  static readonly GARRAUN_CLARE = new Location({
    id: "1589",
    displayName: "Garraun, Clare",
    displayValue: "garraun-clare",
  });

  static readonly GARRAUN_GALWAY = new Location({
    id: "2519",
    displayName: "Garraun, Galway",
    displayValue: "garraun-galway",
  });

  static readonly GARRAVAGH_CORK = new Location({
    id: "1437",
    displayName: "Garravagh, Cork",
    displayValue: "garravagh-cork",
  });

  static readonly GARRETTSTOWN_CORK = new Location({
    id: "1438",
    displayName: "Garrettstown, Cork",
    displayValue: "garrettstown-cork",
  });

  static readonly GARRISON_FERMANAGH = new Location({
    id: "2191",
    displayName: "Garrison, Fermanagh",
    displayValue: "garrison-fermanagh",
  });

  static readonly GARRISTOWN_DUBLIN = new Location({
    id: "1362",
    displayName: "Garristown, Dublin",
    displayValue: "garristown-dublin",
  });

  static readonly GARRISTOWN_MEATH = new Location({
    id: "3207",
    displayName: "Garristown, Meath",
    displayValue: "garristown-meath",
  });

  static readonly GARRYCLOONAGH_MAYO = new Location({
    id: "984",
    displayName: "Garrycloonagh, Mayo",
    displayValue: "garrycloonagh-mayo",
  });

  static readonly GARRYCULLEN_WEXFORD = new Location({
    id: "3908",
    displayName: "Garrycullen, Wexford",
    displayValue: "garrycullen-wexford",
  });

  static readonly GARRYFINE_LIMERICK = new Location({
    id: "2942",
    displayName: "Garryfine, Limerick",
    displayValue: "garryfine-limerick",
  });

  static readonly GARRYHILL_CARLOW = new Location({
    id: "1694",
    displayName: "Garryhill, Carlow",
    displayValue: "garryhill-carlow",
  });

  static readonly GARRYKENNEDY_TIPPERARY = new Location({
    id: "3579",
    displayName: "Garrykennedy, Tipperary",
    displayValue: "garrykennedy-tipperary",
  });

  static readonly GARRYOWEN_LIMERICK = new Location({
    id: "2956",
    displayName: "Garryowen, Limerick",
    displayValue: "garryowen-limerick",
  });

  static readonly GARRYSPILLANE_LIMERICK = new Location({
    id: "2957",
    displayName: "Garryspillane, Limerick",
    displayValue: "garryspillane-limerick",
  });

  static readonly GARRYVOE_CORK = new Location({
    id: "1439",
    displayName: "Garryvoe, Cork",
    displayValue: "garryvoe-cork",
  });

  static readonly GARVAGH_DERRY = new Location({
    id: "1287",
    displayName: "Garvagh, Derry",
    displayValue: "garvagh-derry",
  });

  static readonly GARVAGH_LEITRIM = new Location({
    id: "2557",
    displayName: "Garvagh, Leitrim",
    displayValue: "garvagh-leitrim",
  });

  static readonly GATTABAUN_KILKENNY = new Location({
    id: "832",
    displayName: "Gattabaun, Kilkenny",
    displayValue: "gattabaun-kilkenny",
  });

  static readonly GAWSWORTH_CORK = new Location({
    id: "389",
    displayName: "Gawsworth, Cork",
    displayValue: "gawsworth-cork",
  });

  static readonly GEASHILL_OFFALY = new Location({
    id: "3357",
    displayName: "Geashill, Offaly",
    displayValue: "geashill-offaly",
  });

  static readonly GEESALA_MAYO = new Location({
    id: "2584",
    displayName: "Geesala, Mayo",
    displayValue: "geesala-mayo",
  });

  static readonly GEEVAGH_SLIGO = new Location({
    id: "3540",
    displayName: "Geevagh, Sligo",
    displayValue: "geevagh-sligo",
  });

  static readonly GERAHIES_CORK = new Location({
    id: "1440",
    displayName: "Gerahies, Cork",
    displayValue: "gerahies-cork",
  });

  static readonly GILES_QUAY_LOUTH = new Location({
    id: "3058",
    displayName: "Giles Quay, Louth",
    displayValue: "giles-quay-louth",
  });

  static readonly GILFORD_DOWN = new Location({
    id: "2016",
    displayName: "Gilford, Down",
    displayValue: "gilford-down",
  });

  static readonly GILNAHIRK_DOWN = new Location({
    id: "2017",
    displayName: "Gilnahirk, Down",
    displayValue: "gilnahirk-down",
  });

  static readonly GLANDORE_CORK = new Location({
    id: "1441",
    displayName: "Glandore, Cork",
    displayValue: "glandore-cork",
  });

  static readonly GLANGEVLIN_CAVAN = new Location({
    id: "1511",
    displayName: "Glangevlin, Cavan",
    displayValue: "glangevlin-cavan",
  });

  static readonly GLANMIRE_CORK = new Location({
    id: "1442",
    displayName: "Glanmire, Cork",
    displayValue: "glanmire-cork",
  });

  static readonly GLANOE_KERRY = new Location({
    id: "746",
    displayName: "Glanoe, Kerry",
    displayValue: "glanoe-kerry",
  });

  static readonly GLANTANE_CORK = new Location({
    id: "1443",
    displayName: "Glantane, Cork",
    displayValue: "glantane-cork",
  });

  static readonly GLANWORTH_CORK = new Location({
    id: "1444",
    displayName: "Glanworth, Cork",
    displayValue: "glanworth-cork",
  });

  static readonly GLARRYFORD_ANTRIM = new Location({
    id: "165",
    displayName: "Glarryford, Antrim",
    displayValue: "glarryford-antrim",
  });

  static readonly GLASHEEN_CORK = new Location({
    id: "1445",
    displayName: "Glasheen, Cork",
    displayValue: "glasheen-cork",
  });

  static readonly GLASLOUGH_MONAGHAN = new Location({
    id: "501",
    displayName: "Glaslough, Monaghan",
    displayValue: "glaslough-monaghan",
  });

  static readonly GLASMULLAN_DONEGAL = new Location({
    id: "2009",
    displayName: "Glasmullan, Donegal",
    displayValue: "glasmullan-donegal",
  });

  static readonly GLASNEVIN_DUBLIN = new Location({
    id: "1363",
    displayName: "Glasnevin, Dublin",
    displayValue: "glasnevin-dublin",
  });

  static readonly GLASSILLAUN_MAYO = new Location({
    id: "986",
    displayName: "Glassillaun, Mayo",
    displayValue: "glassillaun-mayo",
  });

  static readonly GLASSON_WESTMEATH = new Location({
    id: "3779",
    displayName: "Glasson, Westmeath",
    displayValue: "glasson-westmeath",
  });

  static readonly GLASTHULE_DUBLIN = new Location({
    id: "2131",
    displayName: "Glasthule, Dublin",
    displayValue: "glasthule-dublin",
  });

  static readonly GLEN_OF_AHERLOW_TIPPERARY = new Location({
    id: "1925",
    displayName: "Glen of Aherlow, Tipperary",
    displayValue: "glen-of-aherlow-tipperary",
  });

  static readonly GLEN_DONEGAL = new Location({
    id: "2010",
    displayName: "Glen, Donegal",
    displayValue: "glen-donegal",
  });

  static readonly GLENADE_LEITRIM = new Location({
    id: "2558",
    displayName: "Glenade, Leitrim",
    displayValue: "glenade-leitrim",
  });

  static readonly GLENAGEARY_DUBLIN = new Location({
    id: "1884",
    displayName: "Glenageary, Dublin",
    displayValue: "glenageary-dublin",
  });

  static readonly GLENAMADDY_GALWAY = new Location({
    id: "2520",
    displayName: "Glenamaddy, Galway",
    displayValue: "glenamaddy-galway",
  });

  static readonly GLENAMOY_MAYO = new Location({
    id: "2601",
    displayName: "Glenamoy, Mayo",
    displayValue: "glenamoy-mayo",
  });

  static readonly GLENARIFF_ANTRIM = new Location({
    id: "166",
    displayName: "Glenariff, Antrim",
    displayValue: "glenariff-antrim",
  });

  static readonly GLENARM_ANTRIM = new Location({
    id: "167",
    displayName: "Glenarm, Antrim",
    displayValue: "glenarm-antrim",
  });

  static readonly GLENASMOLE_DUBLIN = new Location({
    id: "1885",
    displayName: "Glenasmole, Dublin",
    displayValue: "glenasmole-dublin",
  });

  static readonly GLENAVY_ANTRIM = new Location({
    id: "1395",
    displayName: "Glenavy, Antrim",
    displayValue: "glenavy-antrim",
  });

  static readonly GLENBEIGH_KERRY = new Location({
    id: "1714",
    displayName: "Glenbeigh, Kerry",
    displayValue: "glenbeigh-kerry",
  });

  static readonly GLENBOY_LEITRIM = new Location({
    id: "2559",
    displayName: "Glenboy, Leitrim",
    displayValue: "glenboy-leitrim",
  });

  static readonly GLENBROHANE_LIMERICK = new Location({
    id: "2958",
    displayName: "Glenbrohane, Limerick",
    displayValue: "glenbrohane-limerick",
  });

  static readonly GLENBROOK_CORK = new Location({
    id: "1446",
    displayName: "Glenbrook, Cork",
    displayValue: "glenbrook-cork",
  });

  static readonly GLENCAIRN_ANTRIM = new Location({
    id: "1396",
    displayName: "Glencairn, Antrim",
    displayValue: "glencairn-antrim",
  });

  static readonly GLENCAR_KERRY = new Location({
    id: "1715",
    displayName: "Glencar, Kerry",
    displayValue: "glencar-kerry",
  });

  static readonly GLENCAR_LEITRIM = new Location({
    id: "2560",
    displayName: "Glencar, Leitrim",
    displayValue: "glencar-leitrim",
  });

  static readonly GLENCAR_SLIGO = new Location({
    id: "3541",
    displayName: "Glencar, Sligo",
    displayValue: "glencar-sligo",
  });

  static readonly GLENCOLMCILLE_DONEGAL = new Location({
    id: "2011",
    displayName: "Glencolmcille, Donegal",
    displayValue: "glencolmcille-donegal",
  });

  static readonly GLENCORRIB_MAYO = new Location({
    id: "2602",
    displayName: "Glencorrib, Mayo",
    displayValue: "glencorrib-mayo",
  });

  static readonly GLENCREE_WICKLOW = new Location({
    id: "4009",
    displayName: "Glencree, Wicklow",
    displayValue: "glencree-wicklow",
  });

  static readonly GLENCULLEN_DUBLIN = new Location({
    id: "1886",
    displayName: "Glencullen, Dublin",
    displayValue: "glencullen-dublin",
  });

  static readonly GLENDALOUGH_WATERFORD = new Location({
    id: "1181",
    displayName: "Glendalough, Waterford",
    displayValue: "glendalough-waterford",
  });

  static readonly GLENDALOUGH_WICKLOW = new Location({
    id: "4010",
    displayName: "Glendalough, Wicklow",
    displayValue: "glendalough-wicklow",
  });

  static readonly GLENDERRY_KERRY = new Location({
    id: "755",
    displayName: "Glenderry, Kerry",
    displayValue: "glenderry-kerry",
  });

  static readonly GLENDINE_KILKENNY = new Location({
    id: "2827",
    displayName: "Glendine, Kilkenny",
    displayValue: "glendine-kilkenny",
  });

  static readonly GLENDORRAGHA_DONEGAL = new Location({
    id: "555",
    displayName: "Glendorragha, Donegal",
    displayValue: "glendorragha-donegal",
  });

  static readonly GLENDOWAN_DONEGAL = new Location({
    id: "943",
    displayName: "Glendowan, Donegal",
    displayValue: "glendowan-donegal",
  });

  static readonly GLENDREE_CLARE = new Location({
    id: "1590",
    displayName: "Glendree, Clare",
    displayValue: "glendree-clare",
  });

  static readonly GLENEALY_WICKLOW = new Location({
    id: "4011",
    displayName: "Glenealy, Wicklow",
    displayValue: "glenealy-wicklow",
  });

  static readonly GLENEELY_DONEGAL = new Location({
    id: "1829",
    displayName: "Gleneely, Donegal",
    displayValue: "gleneely-donegal",
  });

  static readonly GLENFARNE_LEITRIM = new Location({
    id: "2561",
    displayName: "Glenfarne, Leitrim",
    displayValue: "glenfarne-leitrim",
  });

  static readonly GLENFLESK_KERRY = new Location({
    id: "1716",
    displayName: "Glenflesk, Kerry",
    displayValue: "glenflesk-kerry",
  });

  static readonly GLENGARRIFF_CORK = new Location({
    id: "1447",
    displayName: "Glengarriff, Cork",
    displayValue: "glengarriff-cork",
  });

  static readonly GLENGORMLEY_ANTRIM = new Location({
    id: "1397",
    displayName: "Glengormley, Antrim",
    displayValue: "glengormley-antrim",
  });

  static readonly GLENISLAND_MAYO = new Location({
    id: "2603",
    displayName: "Glenisland, Mayo",
    displayValue: "glenisland-mayo",
  });

  static readonly GLENMALURE_WICKLOW = new Location({
    id: "4012",
    displayName: "Glenmalure, Wicklow",
    displayValue: "glenmalure-wicklow",
  });

  static readonly GLENMORE_CLARE = new Location({
    id: "1591",
    displayName: "Glenmore, Clare",
    displayValue: "glenmore-clare",
  });

  static readonly GLENMORE_KILKENNY = new Location({
    id: "2828",
    displayName: "Glenmore, Kilkenny",
    displayValue: "glenmore-kilkenny",
  });

  static readonly GLENNAGEVLAGH_GALWAY = new Location({
    id: "2521",
    displayName: "Glennagevlagh, Galway",
    displayValue: "glennagevlagh-galway",
  });

  static readonly GLENROE_LIMERICK = new Location({
    id: "2959",
    displayName: "Glenroe, Limerick",
    displayValue: "glenroe-limerick",
  });

  static readonly GLENTANE_GALWAY = new Location({
    id: "700",
    displayName: "Glentane, Galway",
    displayValue: "glentane-galway",
  });

  static readonly GLENTIES_DONEGAL = new Location({
    id: "1830",
    displayName: "Glenties, Donegal",
    displayValue: "glenties-donegal",
  });

  static readonly GLENTOGHER_DONEGAL = new Location({
    id: "556",
    displayName: "Glentogher, Donegal",
    displayValue: "glentogher-donegal",
  });

  static readonly GLENTRASNA_GALWAY = new Location({
    id: "2522",
    displayName: "Glentrasna, Galway",
    displayValue: "glentrasna-galway",
  });

  static readonly GLENVAR_DONEGAL = new Location({
    id: "1831",
    displayName: "Glenvar, Donegal",
    displayValue: "glenvar-donegal",
  });

  static readonly GLENVILLE_CORK = new Location({
    id: "1448",
    displayName: "Glenville, Cork",
    displayValue: "glenville-cork",
  });

  static readonly GLIN_LIMERICK = new Location({
    id: "2960",
    displayName: "Glin, Limerick",
    displayValue: "glin-limerick",
  });

  static readonly GLINSK_DONEGAL = new Location({
    id: "557",
    displayName: "Glinsk, Donegal",
    displayValue: "glinsk-donegal",
  });

  static readonly GLINSK_GALWAY = new Location({
    id: "2523",
    displayName: "Glinsk, Galway",
    displayValue: "glinsk-galway",
  });

  static readonly GLOUNTHAUNE_CORK = new Location({
    id: "1449",
    displayName: "Glounthaune, Cork",
    displayValue: "glounthaune-cork",
  });

  static readonly GLYNN_ANTRIM = new Location({
    id: "1398",
    displayName: "Glynn, Antrim",
    displayValue: "glynn-antrim",
  });

  static readonly GLYNN_WEXFORD = new Location({
    id: "3909",
    displayName: "Glynn, Wexford",
    displayValue: "glynn-wexford",
  });

  static readonly GNEEVGUILLA_KERRY = new Location({
    id: "1717",
    displayName: "Gneevguilla, Kerry",
    displayValue: "gneevguilla-kerry",
  });

  static readonly GOATSTOWN_DUBLIN = new Location({
    id: "1887",
    displayName: "Goatstown, Dublin",
    displayValue: "goatstown-dublin",
  });

  static readonly GOLDEN_TIPPERARY = new Location({
    id: "1926",
    displayName: "Golden, Tipperary",
    displayValue: "golden-tipperary",
  });

  static readonly GOLEEN_CORK = new Location({
    id: "1450",
    displayName: "Goleen, Cork",
    displayValue: "goleen-cork",
  });

  static readonly GOOLD_S_CROSS_TIPPERARY = new Location({
    id: "1927",
    displayName: "Goold's Cross, Tipperary",
    displayValue: "goold-s-cross-tipperary",
  });

  static readonly GORESBRIDGE_KILKENNY = new Location({
    id: "2829",
    displayName: "Goresbridge, Kilkenny",
    displayValue: "goresbridge-kilkenny",
  });

  static readonly GOREY_AND_SURROUNDS_WEXFORD = new Location({
    id: "4113",
    displayName: "Gorey (& Surrounds), Wexford",
    displayValue: "gorey-and-surrounds-wexford",
  });

  static readonly GOREY_WEXFORD = new Location({
    id: "3910",
    displayName: "Gorey, Wexford",
    displayValue: "gorey-wexford",
  });

  static readonly GORMANSTON_MEATH = new Location({
    id: "3208",
    displayName: "Gormanston, Meath",
    displayValue: "gormanston-meath",
  });

  static readonly GORT_AND_SURROUNDS_GALWAY = new Location({
    id: "4114",
    displayName: "Gort (& Surrounds), Galway",
    displayValue: "gort-and-surrounds-galway",
  });

  static readonly GORT_GALWAY = new Location({
    id: "2524",
    displayName: "Gort, Galway",
    displayValue: "gort-galway",
  });

  static readonly GORTAHORK_DONEGAL = new Location({
    id: "1832",
    displayName: "Gortahork, Donegal",
    displayValue: "gortahork-donegal",
  });

  static readonly GORTALEAM_GALWAY = new Location({
    id: "2525",
    displayName: "Gortaleam, Galway",
    displayValue: "gortaleam-galway",
  });

  static readonly GORTAREVAN_OFFALY = new Location({
    id: "1330",
    displayName: "Gortarevan, Offaly",
    displayValue: "gortarevan-offaly",
  });

  static readonly GORTAROO_CORK = new Location({
    id: "390",
    displayName: "Gortaroo, Cork",
    displayValue: "gortaroo-cork",
  });

  static readonly GORTATLEVA_GALWAY = new Location({
    id: "2533",
    displayName: "Gortatleva, Galway",
    displayValue: "gortatleva-galway",
  });

  static readonly GORTAWAY_DONEGAL = new Location({
    id: "944",
    displayName: "Gortaway, Donegal",
    displayValue: "gortaway-donegal",
  });

  static readonly GORTEENY_GALWAY = new Location({
    id: "701",
    displayName: "Gorteeny, Galway",
    displayValue: "gorteeny-galway",
  });

  static readonly GORTFADDA_SLIGO = new Location({
    id: "1165",
    displayName: "Gortfadda, Sligo",
    displayValue: "gortfadda-sligo",
  });

  static readonly GORTGARRIFF_CORK = new Location({
    id: "1451",
    displayName: "Gortgarriff, Cork",
    displayValue: "gortgarriff-cork",
  });

  static readonly GORTGARRIGAN_LEITRIM = new Location({
    id: "2573",
    displayName: "Gortgarrigan, Leitrim",
    displayValue: "gortgarrigan-leitrim",
  });

  static readonly GORTIN_TYRONE = new Location({
    id: "3669",
    displayName: "Gortin, Tyrone",
    displayValue: "gortin-tyrone",
  });

  static readonly GORTLETTERAGH_LEITRIM = new Location({
    id: "2574",
    displayName: "Gortletteragh, Leitrim",
    displayValue: "gortletteragh-leitrim",
  });

  static readonly GORTMORE_GALWAY = new Location({
    id: "2534",
    displayName: "Gortmore, Galway",
    displayValue: "gortmore-galway",
  });

  static readonly GORTMORE_MAYO = new Location({
    id: "2604",
    displayName: "Gortmore, Mayo",
    displayValue: "gortmore-mayo",
  });

  static readonly GORTNADEEVE_GALWAY = new Location({
    id: "2535",
    displayName: "Gortnadeeve, Galway",
    displayValue: "gortnadeeve-galway",
  });

  static readonly GORTNAHOO_TIPPERARY = new Location({
    id: "1928",
    displayName: "Gortnahoo, Tipperary",
    displayValue: "gortnahoo-tipperary",
  });

  static readonly GORTNAKESH_CAVAN = new Location({
    id: "1107",
    displayName: "Gortnakesh, Cavan",
    displayValue: "gortnakesh-cavan",
  });

  static readonly GORTNASILLAGH_ROSCOMMON = new Location({
    id: "3449",
    displayName: "Gortnasillagh, Roscommon",
    displayValue: "gortnasillagh-roscommon",
  });

  static readonly GORTREE_DONEGAL = new Location({
    id: "1833",
    displayName: "Gortree, Donegal",
    displayValue: "gortree-donegal",
  });

  static readonly GORTYMADDEN_GALWAY = new Location({
    id: "2536",
    displayName: "Gortymadden, Galway",
    displayValue: "gortymadden-galway",
  });

  static readonly GORVAGH_LEITRIM = new Location({
    id: "2575",
    displayName: "Gorvagh, Leitrim",
    displayValue: "gorvagh-leitrim",
  });

  static readonly GOULADOO_CORK = new Location({
    id: "391",
    displayName: "Gouladoo, Cork",
    displayValue: "gouladoo-cork",
  });

  static readonly GOULDAVOHER_LIMERICK = new Location({
    id: "2966",
    displayName: "Gouldavoher, Limerick",
    displayValue: "gouldavoher-limerick",
  });

  static readonly GOWLA_GALWAY = new Location({
    id: "2537",
    displayName: "Gowla, Galway",
    displayValue: "gowla-galway",
  });

  static readonly GOWLAUN_GALWAY = new Location({
    id: "2538",
    displayName: "Gowlaun, Galway",
    displayValue: "gowlaun-galway",
  });

  static readonly GOWLIN_CARLOW = new Location({
    id: "212",
    displayName: "Gowlin, Carlow",
    displayValue: "gowlin-carlow",
  });

  static readonly GOWRAN_KILKENNY = new Location({
    id: "2830",
    displayName: "Gowran, Kilkenny",
    displayValue: "gowran-kilkenny",
  });

  static readonly GRACEDIEU_WATERFORD = new Location({
    id: "3740",
    displayName: "Gracedieu, Waterford",
    displayValue: "gracedieu-waterford",
  });

  static readonly GRACEHILL_ANTRIM = new Location({
    id: "1399",
    displayName: "Gracehill, Antrim",
    displayValue: "gracehill-antrim",
  });

  static readonly GRAFFY_DONEGAL = new Location({
    id: "1834",
    displayName: "Graffy, Donegal",
    displayValue: "graffy-donegal",
  });

  static readonly GRAFTON_COLLEGE_OF_MANAGEMENT_SCIENCES_DUBLIN = new Location({
    id: "4371",
    displayName: "Grafton College of Management Sciences, Dublin",
    displayValue: "grafton-college-of-management-sciences-dublin",
  });

  static readonly GRAIGUE_HILL_CARLOW = new Location({
    id: "214",
    displayName: "Graigue Hill, Carlow",
    displayValue: "graigue-hill-carlow",
  });

  static readonly GRAIGUE_MORE_WEXFORD = new Location({
    id: "3911",
    displayName: "Graigue More, Wexford",
    displayValue: "graigue-more-wexford",
  });

  static readonly GRAIGUECULLEN_CARLOW = new Location({
    id: "1695",
    displayName: "Graiguecullen, Carlow",
    displayValue: "graiguecullen-carlow",
  });

  static readonly GRAIGUECULLEN_LAOIS = new Location({
    id: "2265",
    displayName: "Graiguecullen, Laois",
    displayValue: "graiguecullen-laois",
  });

  static readonly GRAIGUENAMANAGH_CARLOW = new Location({
    id: "211",
    displayName: "Graiguenamanagh, Carlow",
    displayValue: "graiguenamanagh-carlow",
  });

  static readonly GRAIGUENAMANAGH_KILKENNY = new Location({
    id: "2831",
    displayName: "Graiguenamanagh, Kilkenny",
    displayValue: "graiguenamanagh-kilkenny",
  });

  static readonly GRANABEG_WICKLOW = new Location({
    id: "1325",
    displayName: "Granabeg, Wicklow",
    displayValue: "granabeg-wicklow",
  });

  static readonly GRANAGH_LIMERICK = new Location({
    id: "2967",
    displayName: "Granagh, Limerick",
    displayValue: "granagh-limerick",
  });

  static readonly GRANARD_AND_SURROUNDS_LONGFORD = new Location({
    id: "4115",
    displayName: "Granard (& Surrounds), Longford",
    displayValue: "granard-and-surrounds-longford",
  });

  static readonly GRANARD_LONGFORD = new Location({
    id: "2986",
    displayName: "Granard, Longford",
    displayValue: "granard-longford",
  });

  static readonly GRAND_CANAL_DOCK_DUBLIN = new Location({
    id: "862",
    displayName: "Grand Canal Dock, Dublin",
    displayValue: "grand-canal-dock-dublin",
  });

  static readonly GRANEY_KILDARE = new Location({
    id: "2674",
    displayName: "Graney, Kildare",
    displayValue: "graney-kildare",
  });

  static readonly GRANGE_CASTLE_DUBLIN = new Location({
    id: "1097",
    displayName: "Grange Castle, Dublin",
    displayValue: "grange-castle-dublin",
  });

  static readonly GRANGE_CON_WICKLOW = new Location({
    id: "4013",
    displayName: "Grange Con, Wicklow",
    displayValue: "grange-con-wicklow",
  });

  static readonly GRANGE_CARLOW = new Location({
    id: "1700",
    displayName: "Grange, Carlow",
    displayValue: "grange-carlow",
  });

  static readonly GRANGE_CORK = new Location({
    id: "1452",
    displayName: "Grange, Cork",
    displayValue: "grange-cork",
  });

  static readonly GRANGE_KILDARE = new Location({
    id: "2675",
    displayName: "Grange, Kildare",
    displayValue: "grange-kildare",
  });

  static readonly GRANGE_KILKENNY = new Location({
    id: "2832",
    displayName: "Grange, Kilkenny",
    displayValue: "grange-kilkenny",
  });

  static readonly GRANGE_LIMERICK = new Location({
    id: "2968",
    displayName: "Grange, Limerick",
    displayValue: "grange-limerick",
  });

  static readonly GRANGE_LOUTH = new Location({
    id: "3059",
    displayName: "Grange, Louth",
    displayValue: "grange-louth",
  });

  static readonly GRANGE_SLIGO = new Location({
    id: "3331",
    displayName: "Grange, Sligo",
    displayValue: "grange-sligo",
  });

  static readonly GRANGE_WATERFORD = new Location({
    id: "3741",
    displayName: "Grange, Waterford",
    displayValue: "grange-waterford",
  });

  static readonly GRANGEBELLEW_LOUTH = new Location({
    id: "3060",
    displayName: "Grangebellew, Louth",
    displayValue: "grangebellew-louth",
  });

  static readonly GRANGEFORD_CARLOW = new Location({
    id: "1701",
    displayName: "Grangeford, Carlow",
    displayValue: "grangeford-carlow",
  });

  static readonly GRANGEGEETH_MEATH = new Location({
    id: "3220",
    displayName: "Grangegeeth, Meath",
    displayValue: "grangegeeth-meath",
  });

  static readonly GRANGEMOCKLER_TIPPERARY = new Location({
    id: "1929",
    displayName: "Grangemockler, Tipperary",
    displayValue: "grangemockler-tipperary",
  });

  static readonly GRANNAGH_GALWAY = new Location({
    id: "2539",
    displayName: "Grannagh, Galway",
    displayValue: "grannagh-galway",
  });

  static readonly GRANSHA_ANTRIM = new Location({
    id: "154",
    displayName: "Gransha, Antrim",
    displayValue: "gransha-antrim",
  });

  static readonly GRANTSTOWN_WATERFORD = new Location({
    id: "3684",
    displayName: "Grantstown, Waterford",
    displayValue: "grantstown-waterford",
  });

  static readonly GRASHNA_DOWN = new Location({
    id: "2018",
    displayName: "Grashna, Down",
    displayValue: "grashna-down",
  });

  static readonly GREAGH_LEITRIM = new Location({
    id: "2576",
    displayName: "Greagh, Leitrim",
    displayValue: "greagh-leitrim",
  });

  static readonly GREENAN_WICKLOW = new Location({
    id: "4014",
    displayName: "Greenan, Wicklow",
    displayValue: "greenan-wicklow",
  });

  static readonly GREENANSTOWN_MEATH = new Location({
    id: "1061",
    displayName: "Greenanstown, Meath",
    displayValue: "greenanstown-meath",
  });

  static readonly GREENCASTLE_DONEGAL = new Location({
    id: "1835",
    displayName: "Greencastle, Donegal",
    displayValue: "greencastle-donegal",
  });

  static readonly GREENCASTLE_TYRONE = new Location({
    id: "3670",
    displayName: "Greencastle, Tyrone",
    displayValue: "greencastle-tyrone",
  });

  static readonly GREENFIELD_CORK = new Location({
    id: "384",
    displayName: "Greenfield, Cork",
    displayValue: "greenfield-cork",
  });

  static readonly GREENFIELD_GALWAY = new Location({
    id: "702",
    displayName: "Greenfield, Galway",
    displayValue: "greenfield-galway",
  });

  static readonly GREENHILLS_DUBLIN = new Location({
    id: "2141",
    displayName: "Greenhills, Dublin",
    displayValue: "greenhills-dublin",
  });

  static readonly GREENISLAND_ANTRIM = new Location({
    id: "1400",
    displayName: "Greenisland, Antrim",
    displayValue: "greenisland-antrim",
  });

  static readonly GREENORE_LOUTH = new Location({
    id: "3061",
    displayName: "Greenore, Louth",
    displayValue: "greenore-louth",
  });

  static readonly GRENAGH_CORK = new Location({
    id: "1453",
    displayName: "Grenagh, Cork",
    displayValue: "grenagh-cork",
  });

  static readonly GREYABBEY_DOWN = new Location({
    id: "2019",
    displayName: "Greyabbey, Down",
    displayValue: "greyabbey-down",
  });

  static readonly GREYSTEEL_DERRY = new Location({
    id: "1288",
    displayName: "Greysteel, Derry",
    displayValue: "greysteel-derry",
  });

  static readonly GREYSTONES_WICKLOW = new Location({
    id: "4015",
    displayName: "Greystones, Wicklow",
    displayValue: "greystones-wicklow",
  });

  static readonly GRIFFITH_COLLEGE_DUBLIN_DUBLIN = new Location({
    id: "4325",
    displayName: "Griffith College Dublin, Dublin",
    displayValue: "griffith-college-dublin-dublin",
  });

  static readonly GROGAN_OFFALY = new Location({
    id: "3358",
    displayName: "Grogan, Offaly",
    displayValue: "grogan-offaly",
  });

  static readonly GROOMSPORT_DOWN = new Location({
    id: "96",
    displayName: "Groomsport, Down",
    displayValue: "groomsport-down",
  });

  static readonly GUBAVEENY_CAVAN = new Location({
    id: "1512",
    displayName: "Gubaveeny, Cavan",
    displayValue: "gubaveeny-cavan",
  });

  static readonly GULLADUFF_DERRY = new Location({
    id: "1289",
    displayName: "Gulladuff, Derry",
    displayValue: "gulladuff-derry",
  });

  static readonly GURRANABRAHER_CORK = new Location({
    id: "1519",
    displayName: "Gurranabraher, Cork",
    displayValue: "gurranabraher-cork",
  });

  static readonly GURTEEN_GALWAY = new Location({
    id: "2540",
    displayName: "Gurteen, Galway",
    displayValue: "gurteen-galway",
  });

  static readonly GURTEEN_LEITRIM = new Location({
    id: "2577",
    displayName: "Gurteen, Leitrim",
    displayValue: "gurteen-leitrim",
  });

  static readonly GURTEEN_SLIGO = new Location({
    id: "3332",
    displayName: "Gurteen, Sligo",
    displayValue: "gurteen-sligo",
  });

  static readonly GUSSERANE_WEXFORD = new Location({
    id: "3912",
    displayName: "Gusserane, Wexford",
    displayValue: "gusserane-wexford",
  });

  static readonly GWEEDORE_DONEGAL = new Location({
    id: "1836",
    displayName: "Gweedore, Donegal",
    displayValue: "gweedore-donegal",
  });

  static readonly GYLEEN_CORK = new Location({
    id: "1520",
    displayName: "Gyleen, Cork",
    displayValue: "gyleen-cork",
  });

  static readonly HACKETSTOWN_CARLOW = new Location({
    id: "1702",
    displayName: "Hacketstown, Carlow",
    displayValue: "hacketstown-carlow",
  });

  static readonly HALFWAY_CORK = new Location({
    id: "385",
    displayName: "Halfway, Cork",
    displayValue: "halfway-cork",
  });

  static readonly HAMILTONSBAWN_ARMAGH = new Location({
    id: "1183",
    displayName: "Hamiltonsbawn, Armagh",
    displayValue: "hamiltonsbawn-armagh",
  });

  static readonly HANNAHSTOWN_ANTRIM = new Location({
    id: "1401",
    displayName: "Hannahstown, Antrim",
    displayValue: "hannahstown-antrim",
  });

  static readonly HANOVER_QUAY_DUBLIN = new Location({
    id: "1029",
    displayName: "Hanover Quay, Dublin",
    displayValue: "hanover-quay-dublin",
  });

  static readonly HAROLD_S_CROSS_DUBLIN = new Location({
    id: "1030",
    displayName: "Harold's Cross, Dublin",
    displayValue: "harold-s-cross-dublin",
  });

  static readonly HARRISTOWN_KILKENNY = new Location({
    id: "2833",
    displayName: "Harristown, Kilkenny",
    displayValue: "harristown-kilkenny",
  });

  static readonly HARTSTOWN_DUBLIN = new Location({
    id: "1055",
    displayName: "Hartstown, Dublin",
    displayValue: "hartstown-dublin",
  });

  static readonly HEADFORD_ROAD_GALWAY = new Location({
    id: "2542",
    displayName: "Headford Road, Galway",
    displayValue: "headford-road-galway",
  });

  static readonly HEADFORD_GALWAY = new Location({
    id: "2541",
    displayName: "Headford, Galway",
    displayValue: "headford-galway",
  });

  static readonly HEIR_ISLAND_CORK = new Location({
    id: "392",
    displayName: "Heir Island, Cork",
    displayValue: "heir-island-cork",
  });

  static readonly HERBERTSTOWN_LIMERICK = new Location({
    id: "2969",
    displayName: "Herbertstown, Limerick",
    displayValue: "herbertstown-limerick",
  });

  static readonly HIGHWOOD_SLIGO = new Location({
    id: "3333",
    displayName: "Highwood, Sligo",
    displayValue: "highwood-sligo",
  });

  static readonly HILL_STREET_ROSCOMMON = new Location({
    id: "1119",
    displayName: "Hill Street, Roscommon",
    displayValue: "hill-street-roscommon",
  });

  static readonly HILLFOOT_DOWN = new Location({
    id: "97",
    displayName: "Hillfoot, Down",
    displayValue: "hillfoot-down",
  });

  static readonly HILLSBOROUGH_DOWN = new Location({
    id: "98",
    displayName: "Hillsborough, Down",
    displayValue: "hillsborough-down",
  });

  static readonly HILLTOWN_DOWN = new Location({
    id: "99",
    displayName: "Hilltown, Down",
    displayValue: "hilltown-down",
  });

  static readonly HILLTOWN_WEXFORD = new Location({
    id: "3913",
    displayName: "Hilltown, Wexford",
    displayValue: "hilltown-wexford",
  });

  static readonly HOLLYFORD_TIPPERARY = new Location({
    id: "1930",
    displayName: "Hollyford, Tipperary",
    displayValue: "hollyford-tipperary",
  });

  static readonly HOLLYFORT_WEXFORD = new Location({
    id: "3914",
    displayName: "Hollyfort, Wexford",
    displayValue: "hollyfort-wexford",
  });

  static readonly HOLLYHILL_CORK = new Location({
    id: "394",
    displayName: "Hollyhill, Cork",
    displayValue: "hollyhill-cork",
  });

  static readonly HOLLYMOUNT_MAYO = new Location({
    id: "2623",
    displayName: "Hollymount, Mayo",
    displayValue: "hollymount-mayo",
  });

  static readonly HOLLYSTOWN_DUBLIN = new Location({
    id: "1056",
    displayName: "Hollystown, Dublin",
    displayValue: "hollystown-dublin",
  });

  static readonly HOLLYWOOD_WICKLOW = new Location({
    id: "4016",
    displayName: "Hollywood, Wicklow",
    displayValue: "hollywood-wicklow",
  });

  static readonly HOLY_CROSS_TIPPERARY = new Location({
    id: "3574",
    displayName: "Holy Cross, Tipperary",
    displayValue: "holy-cross-tipperary",
  });

  static readonly HOLYCROSS_LIMERICK = new Location({
    id: "2970",
    displayName: "Holycross, Limerick",
    displayValue: "holycross-limerick",
  });

  static readonly HOLYCROSS_TIPPERARY = new Location({
    id: "1931",
    displayName: "Holycross, Tipperary",
    displayValue: "holycross-tipperary",
  });

  static readonly HOLYLANDS_ANTRIM = new Location({
    id: "1402",
    displayName: "Holylands, Antrim",
    displayValue: "holylands-antrim",
  });

  static readonly HOLYWOOD_DOWN = new Location({
    id: "100",
    displayName: "Holywood, Down",
    displayValue: "holywood-down",
  });

  static readonly HORSE_AND_JOCKEY_TIPPERARY = new Location({
    id: "3575",
    displayName: "Horse and Jockey, Tipperary",
    displayValue: "horse-and-jockey-tipperary",
  });

  static readonly HORSELEAP_OFFALY = new Location({
    id: "3359",
    displayName: "Horseleap, Offaly",
    displayValue: "horseleap-offaly",
  });

  static readonly HOSPITAL_LIMERICK = new Location({
    id: "2971",
    displayName: "Hospital, Limerick",
    displayValue: "hospital-limerick",
  });

  static readonly HOWTH_DUBLIN = new Location({
    id: "1057",
    displayName: "Howth, Dublin",
    displayValue: "howth-dublin",
  });

  static readonly HUGGINSTOWN_KILKENNY = new Location({
    id: "1818",
    displayName: "Hugginstown, Kilkenny",
    displayValue: "hugginstown-kilkenny",
  });

  static readonly HUNTSTOWN_DUBLIN = new Location({
    id: "1058",
    displayName: "Huntstown, Dublin",
    displayValue: "huntstown-dublin",
  });

  static readonly HURLERS_CROSS_CLARE = new Location({
    id: "1592",
    displayName: "Hurlers Cross, Clare",
    displayValue: "hurlers-cross-clare",
  });

  static readonly IBAT_COLLEGE_DUBLIN_TEMPLE_BAR_CAMPUS_DUBLIN = new Location({
    id: "4367",
    displayName: "IBAT College Dublin Temple Bar Campus, Dublin",
    displayValue: "ibat-college-dublin-temple-bar-campus-dublin",
  });

  static readonly ICD_BUSINESS_SCHOOL_DUBLIN = new Location({
    id: "4375",
    displayName: "ICD Business School, Dublin",
    displayValue: "icd-business-school-dublin",
  });

  static readonly IFSC_DUBLIN = new Location({
    id: "2144",
    displayName: "IFSC, Dublin",
    displayValue: "ifsc-dublin",
  });

  static readonly ILLAUNSTOOKAGH_KERRY = new Location({
    id: "751",
    displayName: "Illaunstookagh, Kerry",
    displayValue: "illaunstookagh-kerry",
  });

  static readonly ILLIES_DONEGAL = new Location({
    id: "1837",
    displayName: "Illies, Donegal",
    displayValue: "illies-donegal",
  });

  static readonly INAGH_CLARE = new Location({
    id: "1593",
    displayName: "Inagh, Clare",
    displayValue: "inagh-clare",
  });

  static readonly INCH_DONEGAL = new Location({
    id: "1838",
    displayName: "Inch, Donegal",
    displayValue: "inch-donegal",
  });

  static readonly INCH_KERRY = new Location({
    id: "1718",
    displayName: "Inch, Kerry",
    displayValue: "inch-kerry",
  });

  static readonly INCH_TIPPERARY = new Location({
    id: "3576",
    displayName: "Inch, Tipperary",
    displayValue: "inch-tipperary",
  });

  static readonly INCH_WEXFORD = new Location({
    id: "3915",
    displayName: "Inch, Wexford",
    displayValue: "inch-wexford",
  });

  static readonly INCHBEG_KILKENNY = new Location({
    id: "829",
    displayName: "Inchbeg, Kilkenny",
    displayValue: "inchbeg-kilkenny",
  });

  static readonly INCHICORE_DUBLIN = new Location({
    id: "2145",
    displayName: "Inchicore, Dublin",
    displayValue: "inchicore-dublin",
  });

  static readonly INCHIGEELAGH_CORK = new Location({
    id: "396",
    displayName: "Inchigeelagh, Cork",
    displayValue: "inchigeelagh-cork",
  });

  static readonly INCHNAMUCK_TIPPERARY = new Location({
    id: "3577",
    displayName: "Inchnamuck, Tipperary",
    displayValue: "inchnamuck-tipperary",
  });

  static readonly INDEPENDENT_COLLEGE_DUBLIN_DUBLIN = new Location({
    id: "4366",
    displayName: "Independent College Dublin, Dublin",
    displayValue: "independent-college-dublin-dublin",
  });

  static readonly INISHBOFIN_ISLAND_GALWAY = new Location({
    id: "2394",
    displayName: "Inishbofin Island, Galway",
    displayValue: "inishbofin-island-galway",
  });

  static readonly INISHCARRA_CORK = new Location({
    id: "393",
    displayName: "Inishcarra, Cork",
    displayValue: "inishcarra-cork",
  });

  static readonly INISHEER_GALWAY = new Location({
    id: "704",
    displayName: "Inisheer, Galway",
    displayValue: "inisheer-galway",
  });

  static readonly INISHMAAN_GALWAY = new Location({
    id: "2409",
    displayName: "Inishmaan, Galway",
    displayValue: "inishmaan-galway",
  });

  static readonly INISHMORE_GALWAY = new Location({
    id: "2410",
    displayName: "Inishmore, Galway",
    displayValue: "inishmore-galway",
  });

  static readonly INISHTURK_MAYO = new Location({
    id: "2624",
    displayName: "Inishturk, Mayo",
    displayValue: "inishturk-mayo",
  });

  static readonly INISTIOGE_KILKENNY = new Location({
    id: "1819",
    displayName: "Inistioge, Kilkenny",
    displayValue: "inistioge-kilkenny",
  });

  static readonly INNISCARRA_CORK = new Location({
    id: "397",
    displayName: "Inniscarra, Cork",
    displayValue: "inniscarra-cork",
  });

  static readonly INNISFAYE_ANTRIM = new Location({
    id: "1745",
    displayName: "Innisfaye, Antrim",
    displayValue: "innisfaye-antrim",
  });

  static readonly INNISHANNON_CORK = new Location({
    id: "398",
    displayName: "Innishannon, Cork",
    displayValue: "innishannon-cork",
  });

  static readonly INNISKEEN_MONAGHAN = new Location({
    id: "502",
    displayName: "Inniskeen, Monaghan",
    displayValue: "inniskeen-monaghan",
  });

  static readonly INSTITUTE_OF_TECHNOLOGY_BLANCHARDSTOWN_DUBLIN = new Location({
    id: "4326",
    displayName: "Institute of Technology Blanchardstown, Dublin",
    displayValue: "institute-of-technology-blanchardstown-dublin",
  });

  static readonly INSTITUTE_OF_TECHNOLOGY_SLIGO_SLIGO = new Location({
    id: "4346",
    displayName: "Institute of Technology Sligo, Sligo",
    displayValue: "institute-of-technology-sligo-sligo",
  });

  static readonly INSTITUTE_OF_TECHNOLOGY_TALLAGHT_DUBLIN = new Location({
    id: "4327",
    displayName: "Institute of Technology Tallaght, Dublin",
    displayValue: "institute-of-technology-tallaght-dublin",
  });

  static readonly INSTITUTE_OF_TECHNOLOGY_TRALEE_KERRY = new Location({
    id: "4349",
    displayName: "Institute of Technology Tralee, Kerry",
    displayValue: "institute-of-technology-tralee-kerry",
  });

  static readonly INVER_DONEGAL = new Location({
    id: "1839",
    displayName: "Inver, Donegal",
    displayValue: "inver-donegal",
  });

  static readonly INVER_MAYO = new Location({
    id: "2625",
    displayName: "Inver, Mayo",
    displayValue: "inver-mayo",
  });

  static readonly INVERIN_GALWAY = new Location({
    id: "2411",
    displayName: "Inverin, Galway",
    displayValue: "inverin-galway",
  });

  static readonly IRISH_COLLEGE_OF_HUMANITIES_AND_APPLIED_SCIENCES_LIMERICK =
    new Location({
      id: "4373",
      displayName: "Irish College of Humanities & Applied Sciences, Limerick",
      displayValue: "irish-college-of-humanities-and-applied-sciences-limerick",
    });

  static readonly IRISHTOWN_DUBLIN = new Location({
    id: "372",
    displayName: "Irishtown, Dublin",
    displayValue: "irishtown-dublin",
  });

  static readonly IRISHTOWN_MAYO = new Location({
    id: "2626",
    displayName: "Irishtown, Mayo",
    displayValue: "irishtown-mayo",
  });

  static readonly IRVINESTOWN_FERMANAGH = new Location({
    id: "2192",
    displayName: "Irvinestown, Fermanagh",
    displayValue: "irvinestown-fermanagh",
  });

  static readonly ISLANDBRIDGE_DUBLIN = new Location({
    id: "373",
    displayName: "Islandbridge, Dublin",
    displayValue: "islandbridge-dublin",
  });

  static readonly ISLANDEADY_MAYO = new Location({
    id: "2944",
    displayName: "Islandeady, Mayo",
    displayValue: "islandeady-mayo",
  });

  static readonly ISLANDMAGEE_ANTRIM = new Location({
    id: "1746",
    displayName: "Islandmagee, Antrim",
    displayValue: "islandmagee-antrim",
  });

  static readonly JAMESTOWN_LAOIS = new Location({
    id: "2266",
    displayName: "Jamestown, Laois",
    displayValue: "jamestown-laois",
  });

  static readonly JAMESTOWN_LEITRIM = new Location({
    id: "2863",
    displayName: "Jamestown, Leitrim",
    displayValue: "jamestown-leitrim",
  });

  static readonly JANESBORO_LIMERICK = new Location({
    id: "2978",
    displayName: "Janesboro, Limerick",
    displayValue: "janesboro-limerick",
  });

  static readonly JENKINSTOWN_KILKENNY = new Location({
    id: "1820",
    displayName: "Jenkinstown, Kilkenny",
    displayValue: "jenkinstown-kilkenny",
  });

  static readonly JENKINSTOWN_LOUTH = new Location({
    id: "3062",
    displayName: "Jenkinstown, Louth",
    displayValue: "jenkinstown-louth",
  });

  static readonly JOBSTOWN_DUBLIN = new Location({
    id: "435",
    displayName: "Jobstown, Dublin",
    displayValue: "jobstown-dublin",
  });

  static readonly JOHNSTOWN_BRIDGE_KILDARE = new Location({
    id: "2687",
    displayName: "Johnstown Bridge, Kildare",
    displayValue: "johnstown-bridge-kildare",
  });

  static readonly JOHNSTOWN_KILDARE = new Location({
    id: "2676",
    displayName: "Johnstown, Kildare",
    displayValue: "johnstown-kildare",
  });

  static readonly JOHNSTOWN_KILKENNY = new Location({
    id: "1821",
    displayName: "Johnstown, Kilkenny",
    displayValue: "johnstown-kilkenny",
  });

  static readonly JOHNSTOWN_MEATH = new Location({
    id: "3221",
    displayName: "Johnstown, Meath",
    displayValue: "johnstown-meath",
  });

  static readonly JOHNSTOWN_WICKLOW = new Location({
    id: "4017",
    displayName: "Johnstown, Wicklow",
    displayValue: "johnstown-wicklow",
  });

  static readonly JOHNSTOWNBRIDGE_KILDARE = new Location({
    id: "2677",
    displayName: "Johnstownbridge, Kildare",
    displayValue: "johnstownbridge-kildare",
  });

  static readonly JOHNSWELL_KILKENNY = new Location({
    id: "1822",
    displayName: "Johnswell, Kilkenny",
    displayValue: "johnswell-kilkenny",
  });

  static readonly JONESBOROUGH_ARMAGH = new Location({
    id: "1185",
    displayName: "Jonesborough, Armagh",
    displayValue: "jonesborough-armagh",
  });

  static readonly JORDAN_S_ISLAND_GALWAY = new Location({
    id: "705",
    displayName: "Jordan's Island, Galway",
    displayValue: "jordan-s-island-galway",
  });

  static readonly JULIANSTOWN_MEATH = new Location({
    id: "3222",
    displayName: "Julianstown, Meath",
    displayValue: "julianstown-meath",
  });

  static readonly KANTURK_AND_SURROUNDS_CORK = new Location({
    id: "4117",
    displayName: "Kanturk (& Surrounds), Cork",
    displayValue: "kanturk-and-surrounds-cork",
  });

  static readonly KANTURK_CORK = new Location({
    id: "399",
    displayName: "Kanturk, Cork",
    displayValue: "kanturk-cork",
  });

  static readonly KATESBRIDGE_DOWN = new Location({
    id: "101",
    displayName: "Katesbridge, Down",
    displayValue: "katesbridge-down",
  });

  static readonly KEADUE_ROSCOMMON = new Location({
    id: "3450",
    displayName: "Keadue, Roscommon",
    displayValue: "keadue-roscommon",
  });

  static readonly KEADY_ARMAGH = new Location({
    id: "1186",
    displayName: "Keady, Armagh",
    displayValue: "keady-armagh",
  });

  static readonly KEALKILL_CORK = new Location({
    id: "400",
    displayName: "Kealkill, Cork",
    displayValue: "kealkill-cork",
  });

  static readonly KEEAGH_GALWAY = new Location({
    id: "2412",
    displayName: "Keeagh, Galway",
    displayValue: "keeagh-galway",
  });

  static readonly KEELOGES_GALWAY = new Location({
    id: "2413",
    displayName: "Keeloges, Galway",
    displayValue: "keeloges-galway",
  });

  static readonly KEENAGH_LONGFORD = new Location({
    id: "2987",
    displayName: "Keenagh, Longford",
    displayValue: "keenagh-longford",
  });

  static readonly KEENAGH_MAYO = new Location({
    id: "2946",
    displayName: "Keenagh, Mayo",
    displayValue: "keenagh-mayo",
  });

  static readonly KEERAUN_GALWAY = new Location({
    id: "2414",
    displayName: "Keeraun, Galway",
    displayValue: "keeraun-galway",
  });

  static readonly KEERAUNNAGARK_GALWAY = new Location({
    id: "2427",
    displayName: "Keeraunnagark, Galway",
    displayValue: "keeraunnagark-galway",
  });

  static readonly KEEREEN_WATERFORD = new Location({
    id: "3685",
    displayName: "Keereen, Waterford",
    displayValue: "keereen-waterford",
  });

  static readonly KELLISTOWN_WEST_CARLOW = new Location({
    id: "1704",
    displayName: "Kellistown West, Carlow",
    displayValue: "kellistown-west-carlow",
  });

  static readonly KELLISTOWN_CARLOW = new Location({
    id: "1703",
    displayName: "Kellistown, Carlow",
    displayValue: "kellistown-carlow",
  });

  static readonly KELLS_AND_SURROUNDS_MEATH = new Location({
    id: "4101",
    displayName: "Kells (& Surrounds), Meath",
    displayValue: "kells-and-surrounds-meath",
  });

  static readonly KELLS_ANTRIM = new Location({
    id: "1747",
    displayName: "Kells, Antrim",
    displayValue: "kells-antrim",
  });

  static readonly KELLS_KERRY = new Location({
    id: "1719",
    displayName: "Kells, Kerry",
    displayValue: "kells-kerry",
  });

  static readonly KELLS_KILKENNY = new Location({
    id: "1823",
    displayName: "Kells, Kilkenny",
    displayValue: "kells-kilkenny",
  });

  static readonly KELLS_MEATH = new Location({
    id: "3223",
    displayName: "Kells, Meath",
    displayValue: "kells-meath",
  });

  static readonly KELLYSGROVE_GALWAY = new Location({
    id: "2428",
    displayName: "Kellysgrove, Galway",
    displayValue: "kellysgrove-galway",
  });

  static readonly KENMARE_AND_SURROUNDS_KERRY = new Location({
    id: "4118",
    displayName: "Kenmare (& Surrounds), Kerry",
    displayValue: "kenmare-and-surrounds-kerry",
  });

  static readonly KENMARE_KERRY = new Location({
    id: "1720",
    displayName: "Kenmare, Kerry",
    displayValue: "kenmare-kerry",
  });

  static readonly KENTFIELD_GALWAY = new Location({
    id: "2429",
    displayName: "Kentfield, Galway",
    displayValue: "kentfield-galway",
  });

  static readonly KENTSTOWN_MEATH = new Location({
    id: "3224",
    displayName: "Kentstown, Meath",
    displayValue: "kentstown-meath",
  });

  static readonly KERRY_PIKE_CORK = new Location({
    id: "401",
    displayName: "Kerry Pike, Cork",
    displayValue: "kerry-pike-cork",
  });

  static readonly KERRYKEEL_DONEGAL = new Location({
    id: "1840",
    displayName: "Kerrykeel, Donegal",
    displayValue: "kerrykeel-donegal",
  });

  static readonly KESH_FERMANAGH = new Location({
    id: "2193",
    displayName: "Kesh, Fermanagh",
    displayValue: "kesh-fermanagh",
  });

  static readonly KESH_SLIGO = new Location({
    id: "3334",
    displayName: "Kesh, Sligo",
    displayValue: "kesh-sligo",
  });

  static readonly KESHCARRIGAN_LEITRIM = new Location({
    id: "2864",
    displayName: "Keshcarrigan, Leitrim",
    displayValue: "keshcarrigan-leitrim",
  });

  static readonly KILANERIN_WEXFORD = new Location({
    id: "3916",
    displayName: "Kilanerin, Wexford",
    displayValue: "kilanerin-wexford",
  });

  static readonly KILANNY_LOUTH = new Location({
    id: "3063",
    displayName: "Kilanny, Louth",
    displayValue: "kilanny-louth",
  });

  static readonly KILBAHA_CLARE = new Location({
    id: "1594",
    displayName: "Kilbaha, Clare",
    displayValue: "kilbaha-clare",
  });

  static readonly KILBANE_LIMERICK = new Location({
    id: "2992",
    displayName: "Kilbane, Limerick",
    displayValue: "kilbane-limerick",
  });

  static readonly KILBANNON_GALWAY = new Location({
    id: "2430",
    displayName: "Kilbannon, Galway",
    displayValue: "kilbannon-galway",
  });

  static readonly KILBARRACK_DUBLIN = new Location({
    id: "437",
    displayName: "Kilbarrack, Dublin",
    displayValue: "kilbarrack-dublin",
  });

  static readonly KILBARRY_CORK = new Location({
    id: "402",
    displayName: "Kilbarry, Cork",
    displayValue: "kilbarry-cork",
  });

  static readonly KILBEACANTY_GALWAY = new Location({
    id: "2431",
    displayName: "Kilbeacanty, Galway",
    displayValue: "kilbeacanty-galway",
  });

  static readonly KILBEGGAN_WESTMEATH = new Location({
    id: "3780",
    displayName: "Kilbeggan, Westmeath",
    displayValue: "kilbeggan-westmeath",
  });

  static readonly KILBEHENNY_LIMERICK = new Location({
    id: "2993",
    displayName: "Kilbehenny, Limerick",
    displayValue: "kilbehenny-limerick",
  });

  static readonly KILBERRY_KILDARE = new Location({
    id: "2688",
    displayName: "Kilberry, Kildare",
    displayValue: "kilberry-kildare",
  });

  static readonly KILBERRY_MEATH = new Location({
    id: "3225",
    displayName: "Kilberry, Meath",
    displayValue: "kilberry-meath",
  });

  static readonly KILBREEDY_LIMERICK = new Location({
    id: "2994",
    displayName: "Kilbreedy, Limerick",
    displayValue: "kilbreedy-limerick",
  });

  static readonly KILBRICKAN_GALWAY = new Location({
    id: "706",
    displayName: "Kilbrickan, Galway",
    displayValue: "kilbrickan-galway",
  });

  static readonly KILBRICKEN_LAOIS = new Location({
    id: "2268",
    displayName: "Kilbricken, Laois",
    displayValue: "kilbricken-laois",
  });

  static readonly KILBRIDE_MEATH = new Location({
    id: "3226",
    displayName: "Kilbride, Meath",
    displayValue: "kilbride-meath",
  });

  static readonly KILBRIDE_WICKLOW = new Location({
    id: "4018",
    displayName: "Kilbride, Wicklow",
    displayValue: "kilbride-wicklow",
  });

  static readonly KILBRIEN_WATERFORD = new Location({
    id: "3686",
    displayName: "Kilbrien, Waterford",
    displayValue: "kilbrien-waterford",
  });

  static readonly KILBRIN_CORK = new Location({
    id: "403",
    displayName: "Kilbrin, Cork",
    displayValue: "kilbrin-cork",
  });

  static readonly KILBRITTAIN_CORK = new Location({
    id: "404",
    displayName: "Kilbrittain, Cork",
    displayValue: "kilbrittain-cork",
  });

  static readonly KILCAIMIN_GALWAY = new Location({
    id: "2432",
    displayName: "Kilcaimin, Galway",
    displayValue: "kilcaimin-galway",
  });

  static readonly KILCAR_DONEGAL = new Location({
    id: "1841",
    displayName: "Kilcar, Donegal",
    displayValue: "kilcar-donegal",
  });

  static readonly KILCARN_MEATH = new Location({
    id: "1062",
    displayName: "Kilcarn, Meath",
    displayValue: "kilcarn-meath",
  });

  static readonly KILCARRA_WICKLOW = new Location({
    id: "4019",
    displayName: "Kilcarra, Wicklow",
    displayValue: "kilcarra-wicklow",
  });

  static readonly KILCASH_TIPPERARY = new Location({
    id: "3578",
    displayName: "Kilcash, Tipperary",
    displayValue: "kilcash-tipperary",
  });

  static readonly KILCAVAN_LAOIS = new Location({
    id: "2269",
    displayName: "Kilcavan, Laois",
    displayValue: "kilcavan-laois",
  });

  static readonly KILCHREEST_GALWAY = new Location({
    id: "2433",
    displayName: "Kilchreest, Galway",
    displayValue: "kilchreest-galway",
  });

  static readonly KILCLARAN_CLARE = new Location({
    id: "1608",
    displayName: "Kilclaran, Clare",
    displayValue: "kilclaran-clare",
  });

  static readonly KILCLIEF_DOWN = new Location({
    id: "102",
    displayName: "Kilclief, Down",
    displayValue: "kilclief-down",
  });

  static readonly KILCLOGHER_CLARE = new Location({
    id: "313",
    displayName: "Kilclogher, Clare",
    displayValue: "kilclogher-clare",
  });

  static readonly KILCLONFERT_OFFALY = new Location({
    id: "3360",
    displayName: "Kilclonfert, Offaly",
    displayValue: "kilclonfert-offaly",
  });

  static readonly KILCLOON_MEATH = new Location({
    id: "3227",
    displayName: "Kilcloon, Meath",
    displayValue: "kilcloon-meath",
  });

  static readonly KILCLOONEY_DONEGAL = new Location({
    id: "558",
    displayName: "Kilclooney, Donegal",
    displayValue: "kilclooney-donegal",
  });

  static readonly KILCLOONEY_WATERFORD = new Location({
    id: "3687",
    displayName: "Kilclooney, Waterford",
    displayValue: "kilclooney-waterford",
  });

  static readonly KILCOCK_AND_SURROUNDS_KILDARE = new Location({
    id: "4119",
    displayName: "Kilcock (& Surrounds), Kildare",
    displayValue: "kilcock-and-surrounds-kildare",
  });

  static readonly KILCOCK_KILDARE = new Location({
    id: "2690",
    displayName: "Kilcock, Kildare",
    displayValue: "kilcock-kildare",
  });

  static readonly KILCOCK_MEATH = new Location({
    id: "3228",
    displayName: "Kilcock, Meath",
    displayValue: "kilcock-meath",
  });

  static readonly KILCOGY_CAVAN = new Location({
    id: "1513",
    displayName: "Kilcogy, Cavan",
    displayValue: "kilcogy-cavan",
  });

  static readonly KILCOLGAN_GALWAY = new Location({
    id: "2434",
    displayName: "Kilcolgan, Galway",
    displayValue: "kilcolgan-galway",
  });

  static readonly KILCOLMAN_CORK = new Location({
    id: "405",
    displayName: "Kilcolman, Cork",
    displayValue: "kilcolman-cork",
  });

  static readonly KILCOLMAN_LIMERICK = new Location({
    id: "2995",
    displayName: "Kilcolman, Limerick",
    displayValue: "kilcolman-limerick",
  });

  static readonly KILCOLTRIM_CARLOW = new Location({
    id: "225",
    displayName: "Kilcoltrim, Carlow",
    displayValue: "kilcoltrim-carlow",
  });

  static readonly KILCOMIN_OFFALY = new Location({
    id: "1333",
    displayName: "Kilcomin, Offaly",
    displayValue: "kilcomin-offaly",
  });

  static readonly KILCOMMON_TIPPERARY = new Location({
    id: "3580",
    displayName: "Kilcommon, Tipperary",
    displayValue: "kilcommon-tipperary",
  });

  static readonly KILCON_MAYO = new Location({
    id: "2947",
    displayName: "Kilcon, Mayo",
    displayValue: "kilcon-mayo",
  });

  static readonly KILCONIERON_GALWAY = new Location({
    id: "707",
    displayName: "Kilconieron, Galway",
    displayValue: "kilconieron-galway",
  });

  static readonly KILCONLY_GALWAY = new Location({
    id: "2435",
    displayName: "Kilconly, Galway",
    displayValue: "kilconly-galway",
  });

  static readonly KILCONLY_KERRY = new Location({
    id: "757",
    displayName: "Kilconly, Kerry",
    displayValue: "kilconly-kerry",
  });

  static readonly KILCONNEL_GALWAY = new Location({
    id: "2436",
    displayName: "Kilconnel, Galway",
    displayValue: "kilconnel-galway",
  });

  static readonly KILCOO_DOWN = new Location({
    id: "103",
    displayName: "Kilcoo, Down",
    displayValue: "kilcoo-down",
  });

  static readonly KILCOOLE_WICKLOW = new Location({
    id: "4020",
    displayName: "Kilcoole, Wicklow",
    displayValue: "kilcoole-wicklow",
  });

  static readonly KILCORMAC_OFFALY = new Location({
    id: "3361",
    displayName: "Kilcormac, Offaly",
    displayValue: "kilcormac-offaly",
  });

  static readonly KILCORNAN_LIMERICK = new Location({
    id: "2996",
    displayName: "Kilcornan, Limerick",
    displayValue: "kilcornan-limerick",
  });

  static readonly KILCOTTY_WEXFORD = new Location({
    id: "3917",
    displayName: "Kilcotty, Wexford",
    displayValue: "kilcotty-wexford",
  });

  static readonly KILCREDAN_CORK = new Location({
    id: "407",
    displayName: "Kilcredan, Cork",
    displayValue: "kilcredan-cork",
  });

  static readonly KILCROHANE_CORK = new Location({
    id: "408",
    displayName: "Kilcrohane, Cork",
    displayValue: "kilcrohane-cork",
  });

  static readonly KILCULLEN_KILDARE = new Location({
    id: "2691",
    displayName: "Kilcullen, Kildare",
    displayValue: "kilcullen-kildare",
  });

  static readonly KILCULLY_CORK = new Location({
    id: "409",
    displayName: "Kilcully, Cork",
    displayValue: "kilcully-cork",
  });

  static readonly KILCUMMIN_KERRY = new Location({
    id: "1721",
    displayName: "Kilcummin, Kerry",
    displayValue: "kilcummin-kerry",
  });

  static readonly KILCUMMIN_MAYO = new Location({
    id: "2948",
    displayName: "Kilcummin, Mayo",
    displayValue: "kilcummin-mayo",
  });

  static readonly KILCURLY_LOUTH = new Location({
    id: "949",
    displayName: "Kilcurly, Louth",
    displayValue: "kilcurly-louth",
  });

  static readonly KILCURRY_LOUTH = new Location({
    id: "3064",
    displayName: "Kilcurry, Louth",
    displayValue: "kilcurry-louth",
  });

  static readonly KILDALKEY_MEATH = new Location({
    id: "3244",
    displayName: "Kildalkey, Meath",
    displayValue: "kildalkey-meath",
  });

  static readonly KILDANGAN_KILDARE = new Location({
    id: "2692",
    displayName: "Kildangan, Kildare",
    displayValue: "kildangan-kildare",
  });

  static readonly KILDARE_AND_SURROUNDS_KILDARE = new Location({
    id: "4121",
    displayName: "Kildare (& Surrounds), Kildare",
    displayValue: "kildare-and-surrounds-kildare",
  });

  static readonly KILDARE_KILDARE = new Location({
    id: "2693",
    displayName: "Kildare, Kildare",
    displayValue: "kildare-kildare",
  });

  static readonly KILDAVIN_CARLOW = new Location({
    id: "1731",
    displayName: "Kildavin, Carlow",
    displayValue: "kildavin-carlow",
  });

  static readonly KILDERRY_KILKENNY = new Location({
    id: "1824",
    displayName: "Kilderry, Kilkenny",
    displayValue: "kilderry-kilkenny",
  });

  static readonly KILDIMO_LIMERICK = new Location({
    id: "2997",
    displayName: "Kildimo, Limerick",
    displayValue: "kildimo-limerick",
  });

  static readonly KILDINAN_CORK = new Location({
    id: "410",
    displayName: "Kildinan, Cork",
    displayValue: "kildinan-cork",
  });

  static readonly KILDORRERY_CORK = new Location({
    id: "411",
    displayName: "Kildorrery, Cork",
    displayValue: "kildorrery-cork",
  });

  static readonly KILDYSART_CLARE = new Location({
    id: "1816",
    displayName: "Kildysart, Clare",
    displayValue: "kildysart-clare",
  });

  static readonly KILEELY_LIMERICK = new Location({
    id: "3013",
    displayName: "Kileely, Limerick",
    displayValue: "kileely-limerick",
  });

  static readonly KILEENEENMORE_GALWAY = new Location({
    id: "2437",
    displayName: "Kileeneenmore, Galway",
    displayValue: "kileeneenmore-galway",
  });

  static readonly KILFEAKLE_TIPPERARY = new Location({
    id: "3581",
    displayName: "Kilfeakle, Tipperary",
    displayValue: "kilfeakle-tipperary",
  });

  static readonly KILFEARAGH_CLARE = new Location({
    id: "1609",
    displayName: "Kilfearagh, Clare",
    displayValue: "kilfearagh-clare",
  });

  static readonly KILFENORA_CLARE = new Location({
    id: "1610",
    displayName: "Kilfenora, Clare",
    displayValue: "kilfenora-clare",
  });

  static readonly KILFINANE_LIMERICK = new Location({
    id: "3014",
    displayName: "Kilfinane, Limerick",
    displayValue: "kilfinane-limerick",
  });

  static readonly KILFINNY_LIMERICK = new Location({
    id: "3015",
    displayName: "Kilfinny, Limerick",
    displayValue: "kilfinny-limerick",
  });

  static readonly KILFLYNN_KERRY = new Location({
    id: "1722",
    displayName: "Kilflynn, Kerry",
    displayValue: "kilflynn-kerry",
  });

  static readonly KILGARVAN_KERRY = new Location({
    id: "1723",
    displayName: "Kilgarvan, Kerry",
    displayValue: "kilgarvan-kerry",
  });

  static readonly KILGLASS_GALWAY = new Location({
    id: "2438",
    displayName: "Kilglass, Galway",
    displayValue: "kilglass-galway",
  });

  static readonly KILGLASS_ROSCOMMON = new Location({
    id: "3451",
    displayName: "Kilglass, Roscommon",
    displayValue: "kilglass-roscommon",
  });

  static readonly KILGLASS_SLIGO = new Location({
    id: "3335",
    displayName: "Kilglass, Sligo",
    displayValue: "kilglass-sligo",
  });

  static readonly KILGOBNET_KERRY = new Location({
    id: "1724",
    displayName: "Kilgobnet, Kerry",
    displayValue: "kilgobnet-kerry",
  });

  static readonly KILGOBNET_WATERFORD = new Location({
    id: "3688",
    displayName: "Kilgobnet, Waterford",
    displayValue: "kilgobnet-waterford",
  });

  static readonly KILGOWAN_KILDARE = new Location({
    id: "2694",
    displayName: "Kilgowan, Kildare",
    displayValue: "kilgowan-kildare",
  });

  static readonly KILJAMES_KILKENNY = new Location({
    id: "830",
    displayName: "Kiljames, Kilkenny",
    displayValue: "kiljames-kilkenny",
  });

  static readonly KILKEA_KILDARE = new Location({
    id: "2695",
    displayName: "Kilkea, Kildare",
    displayValue: "kilkea-kildare",
  });

  static readonly KILKEARY_TIPPERARY = new Location({
    id: "3582",
    displayName: "Kilkeary, Tipperary",
    displayValue: "kilkeary-tipperary",
  });

  static readonly KILKEASY_KILKENNY = new Location({
    id: "2792",
    displayName: "Kilkeasy, Kilkenny",
    displayValue: "kilkeasy-kilkenny",
  });

  static readonly KILKEE_CLARE = new Location({
    id: "1611",
    displayName: "Kilkee, Clare",
    displayValue: "kilkee-clare",
  });

  static readonly KILKEEL_DOWN = new Location({
    id: "104",
    displayName: "Kilkeel, Down",
    displayValue: "kilkeel-down",
  });

  static readonly KILKELLY_MAYO = new Location({
    id: "2949",
    displayName: "Kilkelly, Mayo",
    displayValue: "kilkelly-mayo",
  });

  static readonly KILKENNY_AND_SURROUNDS_KILKENNY = new Location({
    id: "4122",
    displayName: "Kilkenny (& Surrounds), Kilkenny",
    displayValue: "kilkenny-and-surrounds-kilkenny",
  });

  static readonly KILKENNY = new Location({
    id: "11",
    displayName: "Kilkenny (County)",
    displayValue: "kilkenny",
  });

  static readonly KILKENNY_WEST_WESTMEATH = new Location({
    id: "1235",
    displayName: "Kilkenny West, Westmeath",
    displayValue: "kilkenny-west-westmeath",
  });

  static readonly KILKENNY_KILKENNY = new Location({
    id: "2793",
    displayName: "Kilkenny, Kilkenny",
    displayValue: "kilkenny-kilkenny",
  });

  static readonly KILKERLEY_LOUTH = new Location({
    id: "3065",
    displayName: "Kilkerley, Louth",
    displayValue: "kilkerley-louth",
  });

  static readonly KILKERRIN_GALWAY = new Location({
    id: "2439",
    displayName: "Kilkerrin, Galway",
    displayValue: "kilkerrin-galway",
  });

  static readonly KILKIERAN_GALWAY = new Location({
    id: "2440",
    displayName: "Kilkieran, Galway",
    displayValue: "kilkieran-galway",
  });

  static readonly KILKIERNAN_KILKENNY = new Location({
    id: "831",
    displayName: "Kilkiernan, Kilkenny",
    displayValue: "kilkiernan-kilkenny",
  });

  static readonly KILKISHEN_CLARE = new Location({
    id: "1612",
    displayName: "Kilkishen, Clare",
    displayValue: "kilkishen-clare",
  });

  static readonly KILL_O_THE_GRANGE_DUBLIN = new Location({
    id: "2149",
    displayName: "Kill O' The Grange, Dublin",
    displayValue: "kill-o-the-grange-dublin",
  });

  static readonly KILL_CAVAN = new Location({
    id: "1514",
    displayName: "Kill, Cavan",
    displayValue: "kill-cavan",
  });

  static readonly KILL_KILDARE = new Location({
    id: "2696",
    displayName: "Kill, Kildare",
    displayValue: "kill-kildare",
  });

  static readonly KILL_WATERFORD = new Location({
    id: "3689",
    displayName: "Kill, Waterford",
    displayValue: "kill-waterford",
  });

  static readonly KILLABUNANE_KERRY = new Location({
    id: "761",
    displayName: "Killabunane, Kerry",
    displayValue: "killabunane-kerry",
  });

  static readonly KILLACLUG_CORK = new Location({
    id: "412",
    displayName: "Killaclug, Cork",
    displayValue: "killaclug-cork",
  });

  static readonly KILLACOLLA_LIMERICK = new Location({
    id: "3016",
    displayName: "Killacolla, Limerick",
    displayValue: "killacolla-limerick",
  });

  static readonly KILLADANGAN_MAYO = new Location({
    id: "3261",
    displayName: "Killadangan, Mayo",
    displayValue: "killadangan-mayo",
  });

  static readonly KILLADEAS_FERMANAGH = new Location({
    id: "2194",
    displayName: "Killadeas, Fermanagh",
    displayValue: "killadeas-fermanagh",
  });

  static readonly KILLADOON_MAYO = new Location({
    id: "3262",
    displayName: "Killadoon, Mayo",
    displayValue: "killadoon-mayo",
  });

  static readonly KILLADYSERT_CLARE = new Location({
    id: "1613",
    displayName: "Killadysert, Clare",
    displayValue: "killadysert-clare",
  });

  static readonly KILLAFEEN_GALWAY = new Location({
    id: "1135",
    displayName: "Killafeen, Galway",
    displayValue: "killafeen-galway",
  });

  static readonly KILLAG_WEXFORD = new Location({
    id: "3918",
    displayName: "Killag, Wexford",
    displayValue: "killag-wexford",
  });

  static readonly KILLAGHTEEN_LIMERICK = new Location({
    id: "898",
    displayName: "Killaghteen, Limerick",
    displayValue: "killaghteen-limerick",
  });

  static readonly KILLAHY_KILKENNY = new Location({
    id: "2794",
    displayName: "Killahy, Kilkenny",
    displayValue: "killahy-kilkenny",
  });

  static readonly KILLAKEE_DUBLIN = new Location({
    id: "438",
    displayName: "Killakee, Dublin",
    displayValue: "killakee-dublin",
  });

  static readonly KILLALA_MAYO = new Location({
    id: "3263",
    displayName: "Killala, Mayo",
    displayValue: "killala-mayo",
  });

  static readonly KILLALLON_MEATH = new Location({
    id: "3245",
    displayName: "Killallon, Meath",
    displayValue: "killallon-meath",
  });

  static readonly KILLALOE_CLARE = new Location({
    id: "1614",
    displayName: "Killaloe, Clare",
    displayValue: "killaloe-clare",
  });

  static readonly KILLAMERY_KILKENNY = new Location({
    id: "2795",
    displayName: "Killamery, Kilkenny",
    displayValue: "killamery-kilkenny",
  });

  static readonly KILLANE_OFFALY = new Location({
    id: "3362",
    displayName: "Killane, Offaly",
    displayValue: "killane-offaly",
  });

  static readonly KILLANENA_CLARE = new Location({
    id: "1615",
    displayName: "Killanena, Clare",
    displayValue: "killanena-clare",
  });

  static readonly KILLANNE_WEXFORD = new Location({
    id: "3862",
    displayName: "Killanne, Wexford",
    displayValue: "killanne-wexford",
  });

  static readonly KILLARD_CLARE = new Location({
    id: "1616",
    displayName: "Killard, Clare",
    displayValue: "killard-clare",
  });

  static readonly KILLARGA_LEITRIM = new Location({
    id: "2865",
    displayName: "Killarga, Leitrim",
    displayValue: "killarga-leitrim",
  });

  static readonly KILLARNEY_AND_SURROUNDS_KERRY = new Location({
    id: "4123",
    displayName: "Killarney (& Surrounds), Kerry",
    displayValue: "killarney-and-surrounds-kerry",
  });

  static readonly KILLARNEY_KERRY = new Location({
    id: "1725",
    displayName: "Killarney, Kerry",
    displayValue: "killarney-kerry",
  });

  static readonly KILLARONE_GALWAY = new Location({
    id: "1133",
    displayName: "Killarone, Galway",
    displayValue: "killarone-galway",
  });

  static readonly KILLASHEE_LONGFORD = new Location({
    id: "2988",
    displayName: "Killashee, Longford",
    displayValue: "killashee-longford",
  });

  static readonly KILLASSER_MAYO = new Location({
    id: "3264",
    displayName: "Killasser, Mayo",
    displayValue: "killasser-mayo",
  });

  static readonly KILLAVALLY_MAYO = new Location({
    id: "3265",
    displayName: "Killavally, Mayo",
    displayValue: "killavally-mayo",
  });

  static readonly KILLAVALLY_WESTMEATH = new Location({
    id: "3781",
    displayName: "Killavally, Westmeath",
    displayValue: "killavally-westmeath",
  });

  static readonly KILLAVIL_SLIGO = new Location({
    id: "1904",
    displayName: "Killavil, Sligo",
    displayValue: "killavil-sligo",
  });

  static readonly KILLAVULLEN_CORK = new Location({
    id: "413",
    displayName: "Killavullen, Cork",
    displayValue: "killavullen-cork",
  });

  static readonly KILLEA_DONEGAL = new Location({
    id: "1842",
    displayName: "Killea, Donegal",
    displayValue: "killea-donegal",
  });

  static readonly KILLEA_TIPPERARY = new Location({
    id: "3583",
    displayName: "Killea, Tipperary",
    displayValue: "killea-tipperary",
  });

  static readonly KILLEAGH_CORK = new Location({
    id: "414",
    displayName: "Killeagh, Cork",
    displayValue: "killeagh-cork",
  });

  static readonly KILLEANY_GALWAY = new Location({
    id: "709",
    displayName: "Killeany, Galway",
    displayValue: "killeany-galway",
  });

  static readonly KILLEDMOND_CARLOW = new Location({
    id: "1732",
    displayName: "Killedmond, Carlow",
    displayValue: "killedmond-carlow",
  });

  static readonly KILLEEDY_LIMERICK = new Location({
    id: "3017",
    displayName: "Killeedy, Limerick",
    displayValue: "killeedy-limerick",
  });

  static readonly KILLEEN_ARMAGH = new Location({
    id: "1187",
    displayName: "Killeen, Armagh",
    displayValue: "killeen-armagh",
  });

  static readonly KILLEEN_GALWAY = new Location({
    id: "2441",
    displayName: "Killeen, Galway",
    displayValue: "killeen-galway",
  });

  static readonly KILLEENARAN_GALWAY = new Location({
    id: "710",
    displayName: "Killeenaran, Galway",
    displayValue: "killeenaran-galway",
  });

  static readonly KILLEENS_CORK = new Location({
    id: "415",
    displayName: "Killeens, Cork",
    displayValue: "killeens-cork",
  });

  static readonly KILLEEVAN_MONAGHAN = new Location({
    id: "503",
    displayName: "Killeevan, Monaghan",
    displayValue: "killeevan-monaghan",
  });

  static readonly KILLEGLAN_ROSCOMMON = new Location({
    id: "1120",
    displayName: "Killeglan, Roscommon",
    displayValue: "killeglan-roscommon",
  });

  static readonly KILLEIGH_OFFALY = new Location({
    id: "3363",
    displayName: "Killeigh, Offaly",
    displayValue: "killeigh-offaly",
  });

  static readonly KILLENAGH_WEXFORD = new Location({
    id: "3863",
    displayName: "Killenagh, Wexford",
    displayValue: "killenagh-wexford",
  });

  static readonly KILLENARD_LAOIS = new Location({
    id: "2270",
    displayName: "Killenard, Laois",
    displayValue: "killenard-laois",
  });

  static readonly KILLENAULE_TIPPERARY = new Location({
    id: "3584",
    displayName: "Killenaule, Tipperary",
    displayValue: "killenaule-tipperary",
  });

  static readonly KILLERIG_CARLOW = new Location({
    id: "1733",
    displayName: "Killerig, Carlow",
    displayValue: "killerig-carlow",
  });

  static readonly KILLESHANDRA_CAVAN = new Location({
    id: "1515",
    displayName: "Killeshandra, Cavan",
    displayValue: "killeshandra-cavan",
  });

  static readonly KILLESHIL_OFFALY = new Location({
    id: "3364",
    displayName: "Killeshil, Offaly",
    displayValue: "killeshil-offaly",
  });

  static readonly KILLESHIN_CARLOW = new Location({
    id: "1778",
    displayName: "Killeshin, Carlow",
    displayValue: "killeshin-carlow",
  });

  static readonly KILLESHIN_LAOIS = new Location({
    id: "2271",
    displayName: "Killeshin, Laois",
    displayValue: "killeshin-laois",
  });

  static readonly KILLESTER_DUBLIN = new Location({
    id: "439",
    displayName: "Killester, Dublin",
    displayValue: "killester-dublin",
  });

  static readonly KILLIMER_CLARE = new Location({
    id: "1617",
    displayName: "Killimer, Clare",
    displayValue: "killimer-clare",
  });

  static readonly KILLIMOR_GALWAY = new Location({
    id: "2442",
    displayName: "Killimor, Galway",
    displayValue: "killimor-galway",
  });

  static readonly KILLINABOY_CLARE = new Location({
    id: "1618",
    displayName: "Killinaboy, Clare",
    displayValue: "killinaboy-clare",
  });

  static readonly KILLINASPICK_KILKENNY = new Location({
    id: "833",
    displayName: "Killinaspick, Kilkenny",
    displayValue: "killinaspick-kilkenny",
  });

  static readonly KILLINCHY_DOWN = new Location({
    id: "105",
    displayName: "Killinchy, Down",
    displayValue: "killinchy-down",
  });

  static readonly KILLINCOOLY_WEXFORD = new Location({
    id: "1267",
    displayName: "Killincooly, Wexford",
    displayValue: "killincooly-wexford",
  });

  static readonly KILLINEY_DUBLIN = new Location({
    id: "440",
    displayName: "Killiney, Dublin",
    displayValue: "killiney-dublin",
  });

  static readonly KILLINICK_WEXFORD = new Location({
    id: "3864",
    displayName: "Killinick, Wexford",
    displayValue: "killinick-wexford",
  });

  static readonly KILLINKERE_CAVAN = new Location({
    id: "255",
    displayName: "Killinkere, Cavan",
    displayValue: "killinkere-cavan",
  });

  static readonly KILLINNY_GALWAY = new Location({
    id: "2443",
    displayName: "Killinny, Galway",
    displayValue: "killinny-galway",
  });

  static readonly KILLINTHOMAS_KILDARE = new Location({
    id: "2697",
    displayName: "Killinthomas, Kildare",
    displayValue: "killinthomas-kildare",
  });

  static readonly KILLISKEA_OFFALY = new Location({
    id: "3365",
    displayName: "Killiskea, Offaly",
    displayValue: "killiskea-offaly",
  });

  static readonly KILLISKEY_WICKLOW = new Location({
    id: "4021",
    displayName: "Killiskey, Wicklow",
    displayValue: "killiskey-wicklow",
  });

  static readonly KILLMEY_KERRY = new Location({
    id: "2036",
    displayName: "Killmey, Kerry",
    displayValue: "killmey-kerry",
  });

  static readonly KILLOE_LONGFORD = new Location({
    id: "2989",
    displayName: "Killoe, Longford",
    displayValue: "killoe-longford",
  });

  static readonly KILLOGEARY_MAYO = new Location({
    id: "3266",
    displayName: "Killogeary, Mayo",
    displayValue: "killogeary-mayo",
  });

  static readonly KILLONECAHA_KERRY = new Location({
    id: "758",
    displayName: "Killonecaha, Kerry",
    displayValue: "killonecaha-kerry",
  });

  static readonly KILLORAN_GALWAY = new Location({
    id: "2444",
    displayName: "Killoran, Galway",
    displayValue: "killoran-galway",
  });

  static readonly KILLORGLIN_KERRY = new Location({
    id: "2037",
    displayName: "Killorglin, Kerry",
    displayValue: "killorglin-kerry",
  });

  static readonly KILLOSCOBE_GALWAY = new Location({
    id: "711",
    displayName: "Killoscobe, Galway",
    displayValue: "killoscobe-galway",
  });

  static readonly KILLOUGH_DOWN = new Location({
    id: "106",
    displayName: "Killough, Down",
    displayValue: "killough-down",
  });

  static readonly KILLOUGH_WICKLOW = new Location({
    id: "4022",
    displayName: "Killough, Wicklow",
    displayValue: "killough-wicklow",
  });

  static readonly KILLOWEN_DOWN = new Location({
    id: "107",
    displayName: "Killowen, Down",
    displayValue: "killowen-down",
  });

  static readonly KILLOWEN_WATERFORD = new Location({
    id: "3690",
    displayName: "Killowen, Waterford",
    displayValue: "killowen-waterford",
  });

  static readonly KILLUCAN_WESTMEATH = new Location({
    id: "3782",
    displayName: "Killucan, Westmeath",
    displayValue: "killucan-westmeath",
  });

  static readonly KILLUKIN_ROSCOMMON = new Location({
    id: "3452",
    displayName: "Killukin, Roscommon",
    displayValue: "killukin-roscommon",
  });

  static readonly KILLUMNEY_CORK = new Location({
    id: "416",
    displayName: "Killumney, Cork",
    displayValue: "killumney-cork",
  });

  static readonly KILLURIN_OFFALY = new Location({
    id: "3366",
    displayName: "Killurin, Offaly",
    displayValue: "killurin-offaly",
  });

  static readonly KILLURIN_WEXFORD = new Location({
    id: "3865",
    displayName: "Killurin, Wexford",
    displayValue: "killurin-wexford",
  });

  static readonly KILLURLY_KERRY = new Location({
    id: "759",
    displayName: "Killurly, Kerry",
    displayValue: "killurly-kerry",
  });

  static readonly KILLUSTY_TIPPERARY = new Location({
    id: "3585",
    displayName: "Killusty, Tipperary",
    displayValue: "killusty-tipperary",
  });

  static readonly KILLYBEGS_DONEGAL = new Location({
    id: "1843",
    displayName: "Killybegs, Donegal",
    displayValue: "killybegs-donegal",
  });

  static readonly KILLYCLOGHER_TYRONE = new Location({
    id: "3671",
    displayName: "Killyclogher, Tyrone",
    displayValue: "killyclogher-tyrone",
  });

  static readonly KILLYCLUG_DONEGAL = new Location({
    id: "966",
    displayName: "Killyclug, Donegal",
    displayValue: "killyclug-donegal",
  });

  static readonly KILLYGAR_LEITRIM = new Location({
    id: "863",
    displayName: "Killygar, Leitrim",
    displayValue: "killygar-leitrim",
  });

  static readonly KILLYGORDON_DONEGAL = new Location({
    id: "967",
    displayName: "Killygordon, Donegal",
    displayValue: "killygordon-donegal",
  });

  static readonly KILLYKEEN_CAVAN = new Location({
    id: "1516",
    displayName: "Killykeen, Cavan",
    displayValue: "killykeen-cavan",
  });

  static readonly KILLYLEA_ARMAGH = new Location({
    id: "1188",
    displayName: "Killylea, Armagh",
    displayValue: "killylea-armagh",
  });

  static readonly KILLYLEAGH_DOWN = new Location({
    id: "108",
    displayName: "Killyleagh, Down",
    displayValue: "killyleagh-down",
  });

  static readonly KILLYON_OFFALY = new Location({
    id: "3367",
    displayName: "Killyon, Offaly",
    displayValue: "killyon-offaly",
  });

  static readonly KILMACANOGUE_WICKLOW = new Location({
    id: "4023",
    displayName: "Kilmacanogue, Wicklow",
    displayValue: "kilmacanogue-wicklow",
  });

  static readonly KILMACOO_WICKLOW = new Location({
    id: "4024",
    displayName: "Kilmacoo, Wicklow",
    displayValue: "kilmacoo-wicklow",
  });

  static readonly KILMACOW_KILKENNY = new Location({
    id: "2796",
    displayName: "Kilmacow, Kilkenny",
    displayValue: "kilmacow-kilkenny",
  });

  static readonly KILMACOW_WATERFORD = new Location({
    id: "3691",
    displayName: "Kilmacow, Waterford",
    displayValue: "kilmacow-waterford",
  });

  static readonly KILMACRENAN_DONEGAL = new Location({
    id: "972",
    displayName: "Kilmacrenan, Donegal",
    displayValue: "kilmacrenan-donegal",
  });

  static readonly KILMACTEIGE_SLIGO = new Location({
    id: "1905",
    displayName: "Kilmacteige, Sligo",
    displayValue: "kilmacteige-sligo",
  });

  static readonly KILMACTHOMAS_WATERFORD = new Location({
    id: "3692",
    displayName: "Kilmacthomas, Waterford",
    displayValue: "kilmacthomas-waterford",
  });

  static readonly KILMACTRANNY_SLIGO = new Location({
    id: "1906",
    displayName: "Kilmactranny, Sligo",
    displayValue: "kilmactranny-sligo",
  });

  static readonly KILMACUD_DUBLIN = new Location({
    id: "498",
    displayName: "Kilmacud, Dublin",
    displayValue: "kilmacud-dublin",
  });

  static readonly KILMACURRAGH_WICKLOW = new Location({
    id: "4025",
    displayName: "Kilmacurragh, Wicklow",
    displayValue: "kilmacurragh-wicklow",
  });

  static readonly KILMAINE_MAYO = new Location({
    id: "3267",
    displayName: "Kilmaine, Mayo",
    displayValue: "kilmaine-mayo",
  });

  static readonly KILMAINHAM_DUBLIN = new Location({
    id: "2150",
    displayName: "Kilmainham, Dublin",
    displayValue: "kilmainham-dublin",
  });

  static readonly KILMAINHAMWOOD_MEATH = new Location({
    id: "3246",
    displayName: "Kilmainhamwood, Meath",
    displayValue: "kilmainhamwood-meath",
  });

  static readonly KILMALEY_CLARE = new Location({
    id: "1619",
    displayName: "Kilmaley, Clare",
    displayValue: "kilmaley-clare",
  });

  static readonly KILMALKEDAR_KERRY = new Location({
    id: "762",
    displayName: "Kilmalkedar, Kerry",
    displayValue: "kilmalkedar-kerry",
  });

  static readonly KILMALLOCK_LIMERICK = new Location({
    id: "3018",
    displayName: "Kilmallock, Limerick",
    displayValue: "kilmallock-limerick",
  });

  static readonly KILMANAGH_KILKENNY = new Location({
    id: "2797",
    displayName: "Kilmanagh, Kilkenny",
    displayValue: "kilmanagh-kilkenny",
  });

  static readonly KILMEAD_KILDARE = new Location({
    id: "2737",
    displayName: "Kilmead, Kildare",
    displayValue: "kilmead-kildare",
  });

  static readonly KILMEADAN_WATERFORD = new Location({
    id: "3693",
    displayName: "Kilmeadan, Waterford",
    displayValue: "kilmeadan-waterford",
  });

  static readonly KILMEAGE_KILDARE = new Location({
    id: "2738",
    displayName: "Kilmeage, Kildare",
    displayValue: "kilmeage-kildare",
  });

  static readonly KILMEEDY_LIMERICK = new Location({
    id: "3019",
    displayName: "Kilmeedy, Limerick",
    displayValue: "kilmeedy-limerick",
  });

  static readonly KILMEELICKIN_GALWAY = new Location({
    id: "712",
    displayName: "Kilmeelickin, Galway",
    displayValue: "kilmeelickin-galway",
  });

  static readonly KILMEENA_MAYO = new Location({
    id: "3268",
    displayName: "Kilmeena, Mayo",
    displayValue: "kilmeena-mayo",
  });

  static readonly KILMESSAN_MEATH = new Location({
    id: "3247",
    displayName: "Kilmessan, Meath",
    displayValue: "kilmessan-meath",
  });

  static readonly KILMICHAEL_CORK = new Location({
    id: "418",
    displayName: "Kilmichael, Cork",
    displayValue: "kilmichael-cork",
  });

  static readonly KILMICHAEL_WEXFORD = new Location({
    id: "3866",
    displayName: "Kilmichael, Wexford",
    displayValue: "kilmichael-wexford",
  });

  static readonly KILMIHIL_CLARE = new Location({
    id: "1620",
    displayName: "Kilmihil, Clare",
    displayValue: "kilmihil-clare",
  });

  static readonly KILMINCHY_LAOIS = new Location({
    id: "2272",
    displayName: "Kilminchy, Laois",
    displayValue: "kilminchy-laois",
  });

  static readonly KILMOGANNY_KILKENNY = new Location({
    id: "2798",
    displayName: "Kilmoganny, Kilkenny",
    displayValue: "kilmoganny-kilkenny",
  });

  static readonly KILMONA_CORK = new Location({
    id: "419",
    displayName: "Kilmona, Cork",
    displayValue: "kilmona-cork",
  });

  static readonly KILMOON_CORK = new Location({
    id: "420",
    displayName: "Kilmoon, Cork",
    displayValue: "kilmoon-cork",
  });

  static readonly KILMORE_QUAY_WEXFORD = new Location({
    id: "3868",
    displayName: "Kilmore Quay, Wexford",
    displayValue: "kilmore-quay-wexford",
  });

  static readonly KILMORE_ARMAGH = new Location({
    id: "1189",
    displayName: "Kilmore, Armagh",
    displayValue: "kilmore-armagh",
  });

  static readonly KILMORE_CLARE = new Location({
    id: "1621",
    displayName: "Kilmore, Clare",
    displayValue: "kilmore-clare",
  });

  static readonly KILMORE_DUBLIN = new Location({
    id: "2151",
    displayName: "Kilmore, Dublin",
    displayValue: "kilmore-dublin",
  });

  static readonly KILMORE_MAYO = new Location({
    id: "3269",
    displayName: "Kilmore, Mayo",
    displayValue: "kilmore-mayo",
  });

  static readonly KILMORE_ROSCOMMON = new Location({
    id: "3453",
    displayName: "Kilmore, Roscommon",
    displayValue: "kilmore-roscommon",
  });

  static readonly KILMORE_WEXFORD = new Location({
    id: "3867",
    displayName: "Kilmore, Wexford",
    displayValue: "kilmore-wexford",
  });

  static readonly KILMORNA_KERRY = new Location({
    id: "2038",
    displayName: "Kilmorna, Kerry",
    displayValue: "kilmorna-kerry",
  });

  static readonly KILMORONY_LAOIS = new Location({
    id: "845",
    displayName: "Kilmorony, Laois",
    displayValue: "kilmorony-laois",
  });

  static readonly KILMOVEE_MAYO = new Location({
    id: "3270",
    displayName: "Kilmovee, Mayo",
    displayValue: "kilmovee-mayo",
  });

  static readonly KILMUCKRIDGE_WEXFORD = new Location({
    id: "3869",
    displayName: "Kilmuckridge, Wexford",
    displayValue: "kilmuckridge-wexford",
  });

  static readonly KILMURRY_MCMAHON_CLARE = new Location({
    id: "1623",
    displayName: "Kilmurry Mcmahon, Clare",
    displayValue: "kilmurry-mcmahon-clare",
  });

  static readonly KILMURRY_CLARE = new Location({
    id: "1622",
    displayName: "Kilmurry, Clare",
    displayValue: "kilmurry-clare",
  });

  static readonly KILMURRY_CORK = new Location({
    id: "423",
    displayName: "Kilmurry, Cork",
    displayValue: "kilmurry-cork",
  });

  static readonly KILMURRY_LIMERICK = new Location({
    id: "3020",
    displayName: "Kilmurry, Limerick",
    displayValue: "kilmurry-limerick",
  });

  static readonly KILMURRY_WICKLOW = new Location({
    id: "4026",
    displayName: "Kilmurry, Wicklow",
    displayValue: "kilmurry-wicklow",
  });

  static readonly KILMURVY_GALWAY = new Location({
    id: "2445",
    displayName: "Kilmurvy, Galway",
    displayValue: "kilmurvy-galway",
  });

  static readonly KILMYSHALL_WEXFORD = new Location({
    id: "3870",
    displayName: "Kilmyshall, Wexford",
    displayValue: "kilmyshall-wexford",
  });

  static readonly KILNAGROSS_LEITRIM = new Location({
    id: "2866",
    displayName: "Kilnagross, Leitrim",
    displayValue: "kilnagross-leitrim",
  });

  static readonly KILNALAG_GALWAY = new Location({
    id: "2446",
    displayName: "Kilnalag, Galway",
    displayValue: "kilnalag-galway",
  });

  static readonly KILNALECK_CAVAN = new Location({
    id: "1517",
    displayName: "Kilnaleck, Cavan",
    displayValue: "kilnaleck-cavan",
  });

  static readonly KILNAMANAGH_DUBLIN = new Location({
    id: "2152",
    displayName: "Kilnamanagh, Dublin",
    displayValue: "kilnamanagh-dublin",
  });

  static readonly KILNAMANAGH_WEXFORD = new Location({
    id: "3871",
    displayName: "Kilnamanagh, Wexford",
    displayValue: "kilnamanagh-wexford",
  });

  static readonly KILNAMONA_CLARE = new Location({
    id: "1624",
    displayName: "Kilnamona, Clare",
    displayValue: "kilnamona-clare",
  });

  static readonly KILNAP_CORK = new Location({
    id: "1979",
    displayName: "Kilnap, Cork",
    displayValue: "kilnap-cork",
  });

  static readonly KILOSCULLY_TIPPERARY = new Location({
    id: "3586",
    displayName: "Kiloscully, Tipperary",
    displayValue: "kiloscully-tipperary",
  });

  static readonly KILPATRICK_CORK = new Location({
    id: "424",
    displayName: "Kilpatrick, Cork",
    displayValue: "kilpatrick-cork",
  });

  static readonly KILPEACAN_CROSS_ROADS_KERRY = new Location({
    id: "766",
    displayName: "Kilpeacan Cross Roads, Kerry",
    displayValue: "kilpeacan-cross-roads-kerry",
  });

  static readonly KILPEDDER_WICKLOW = new Location({
    id: "4027",
    displayName: "Kilpedder, Wicklow",
    displayValue: "kilpedder-wicklow",
  });

  static readonly KILPOOLE_WICKLOW = new Location({
    id: "4028",
    displayName: "Kilpoole, Wicklow",
    displayValue: "kilpoole-wicklow",
  });

  static readonly KILQUADE_WICKLOW = new Location({
    id: "4006",
    displayName: "Kilquade, Wicklow",
    displayValue: "kilquade-wicklow",
  });

  static readonly KILQUIGGUIN_WICKLOW = new Location({
    id: "4029",
    displayName: "Kilquigguin, Wicklow",
    displayValue: "kilquigguin-wicklow",
  });

  static readonly KILRANE_WEXFORD = new Location({
    id: "3872",
    displayName: "Kilrane, Wexford",
    displayValue: "kilrane-wexford",
  });

  static readonly KILREA_DERRY = new Location({
    id: "1290",
    displayName: "Kilrea, Derry",
    displayValue: "kilrea-derry",
  });

  static readonly KILREAN_DONEGAL = new Location({
    id: "973",
    displayName: "Kilrean, Donegal",
    displayValue: "kilrean-donegal",
  });

  static readonly KILREEKIL_GALWAY = new Location({
    id: "2447",
    displayName: "Kilreekil, Galway",
    displayValue: "kilreekil-galway",
  });

  static readonly KILRONAN_GALWAY = new Location({
    id: "2448",
    displayName: "Kilronan, Galway",
    displayValue: "kilronan-galway",
  });

  static readonly KILROOSKEY_ROSCOMMON = new Location({
    id: "3454",
    displayName: "Kilrooskey, Roscommon",
    displayValue: "kilrooskey-roscommon",
  });

  static readonly KILROSS_DONEGAL = new Location({
    id: "975",
    displayName: "Kilross, Donegal",
    displayValue: "kilross-donegal",
  });

  static readonly KILROSS_TIPPERARY = new Location({
    id: "3587",
    displayName: "Kilross, Tipperary",
    displayValue: "kilross-tipperary",
  });

  static readonly KILRUSH_AND_SURROUNDS_CLARE = new Location({
    id: "4124",
    displayName: "Kilrush (& Surrounds), Clare",
    displayValue: "kilrush-and-surrounds-clare",
  });

  static readonly KILRUSH_CLARE = new Location({
    id: "1625",
    displayName: "Kilrush, Clare",
    displayValue: "kilrush-clare",
  });

  static readonly KILSALLAGH_GALWAY = new Location({
    id: "2449",
    displayName: "Kilsallagh, Galway",
    displayValue: "kilsallagh-galway",
  });

  static readonly KILSALLAGH_MAYO = new Location({
    id: "3271",
    displayName: "Kilsallagh, Mayo",
    displayValue: "kilsallagh-mayo",
  });

  static readonly KILSALLAGHAN_DUBLIN = new Location({
    id: "2153",
    displayName: "Kilsallaghan, Dublin",
    displayValue: "kilsallaghan-dublin",
  });

  static readonly KILSARAN_LOUTH = new Location({
    id: "3066",
    displayName: "Kilsaran, Louth",
    displayValue: "kilsaran-louth",
  });

  static readonly KILSHANCHOE_KILDARE = new Location({
    id: "2739",
    displayName: "Kilshanchoe, Kildare",
    displayValue: "kilshanchoe-kildare",
  });

  static readonly KILSHANE_CROSS_DUBLIN = new Location({
    id: "2154",
    displayName: "Kilshane Cross, Dublin",
    displayValue: "kilshane-cross-dublin",
  });

  static readonly KILSHANNIG_KERRY = new Location({
    id: "2085",
    displayName: "Kilshannig, Kerry",
    displayValue: "kilshannig-kerry",
  });

  static readonly KILSHANNY_CLARE = new Location({
    id: "1626",
    displayName: "Kilshanny, Clare",
    displayValue: "kilshanny-clare",
  });

  static readonly KILSHANROE_KILDARE = new Location({
    id: "2740",
    displayName: "Kilshanroe, Kildare",
    displayValue: "kilshanroe-kildare",
  });

  static readonly KILSHEELAN_TIPPERARY = new Location({
    id: "3588",
    displayName: "Kilsheelan, Tipperary",
    displayValue: "kilsheelan-tipperary",
  });

  static readonly KILSKEER_MEATH = new Location({
    id: "3248",
    displayName: "Kilskeer, Meath",
    displayValue: "kilskeer-meath",
  });

  static readonly KILTALE_MEATH = new Location({
    id: "3249",
    displayName: "Kiltale, Meath",
    displayValue: "kiltale-meath",
  });

  static readonly KILTEALY_WEXFORD = new Location({
    id: "3873",
    displayName: "Kiltealy, Wexford",
    displayValue: "kiltealy-wexford",
  });

  static readonly KILTEEL_KILDARE = new Location({
    id: "2741",
    displayName: "Kilteel, Kildare",
    displayValue: "kilteel-kildare",
  });

  static readonly KILTEELY_LIMERICK = new Location({
    id: "3021",
    displayName: "Kilteely, Limerick",
    displayValue: "kilteely-limerick",
  });

  static readonly KILTEEVAN_ROSCOMMON = new Location({
    id: "3455",
    displayName: "Kilteevan, Roscommon",
    displayValue: "kilteevan-roscommon",
  });

  static readonly KILTEGAN_WICKLOW = new Location({
    id: "4030",
    displayName: "Kiltegan, Wicklow",
    displayValue: "kiltegan-wicklow",
  });

  static readonly KILTERNAN_DUBLIN = new Location({
    id: "2155",
    displayName: "Kilternan, Dublin",
    displayValue: "kilternan-dublin",
  });

  static readonly KILTIMAGH_MAYO = new Location({
    id: "3272",
    displayName: "Kiltimagh, Mayo",
    displayValue: "kiltimagh-mayo",
  });

  static readonly KILTIPPER_DUBLIN = new Location({
    id: "2156",
    displayName: "Kiltipper, Dublin",
    displayValue: "kiltipper-dublin",
  });

  static readonly KILTOBER_WESTMEATH = new Location({
    id: "3783",
    displayName: "Kiltober, Westmeath",
    displayValue: "kiltober-westmeath",
  });

  static readonly KILTOOM_ROSCOMMON = new Location({
    id: "3456",
    displayName: "Kiltoom, Roscommon",
    displayValue: "kiltoom-roscommon",
  });

  static readonly KILTORMER_GALWAY = new Location({
    id: "1847",
    displayName: "Kiltormer, Galway",
    displayValue: "kiltormer-galway",
  });

  static readonly KILTULLAGH_GALWAY = new Location({
    id: "1850",
    displayName: "Kiltullagh, Galway",
    displayValue: "kiltullagh-galway",
  });

  static readonly KILTYCLOGHER_LEITRIM = new Location({
    id: "2867",
    displayName: "Kiltyclogher, Leitrim",
    displayValue: "kiltyclogher-leitrim",
  });

  static readonly KILVINE_MAYO = new Location({
    id: "3273",
    displayName: "Kilvine, Mayo",
    displayValue: "kilvine-mayo",
  });

  static readonly KILWORTH_CAMP_CORK = new Location({
    id: "417",
    displayName: "Kilworth Camp, Cork",
    displayValue: "kilworth-camp-cork",
  });

  static readonly KILWORTH_CORK = new Location({
    id: "1980",
    displayName: "Kilworth, Cork",
    displayValue: "kilworth-cork",
  });

  static readonly KIMMAGE_DUBLIN = new Location({
    id: "2157",
    displayName: "Kimmage, Dublin",
    displayValue: "kimmage-dublin",
  });

  static readonly KINARD_LIMERICK = new Location({
    id: "2920",
    displayName: "Kinard, Limerick",
    displayValue: "kinard-limerick",
  });

  static readonly KINAWLEY_FERMANAGH = new Location({
    id: "2195",
    displayName: "Kinawley, Fermanagh",
    displayValue: "kinawley-fermanagh",
  });

  static readonly KINCASSLAGH_DONEGAL = new Location({
    id: "976",
    displayName: "Kincasslagh, Donegal",
    displayValue: "kincasslagh-donegal",
  });

  static readonly KINCON_MAYO = new Location({
    id: "3274",
    displayName: "Kincon, Mayo",
    displayValue: "kincon-mayo",
  });

  static readonly KINDROHID_DONEGAL = new Location({
    id: "561",
    displayName: "Kindrohid, Donegal",
    displayValue: "kindrohid-donegal",
  });

  static readonly KINDRUM_DONEGAL = new Location({
    id: "977",
    displayName: "Kindrum, Donegal",
    displayValue: "kindrum-donegal",
  });

  static readonly KINGARROW_DONEGAL = new Location({
    id: "568",
    displayName: "Kingarrow, Donegal",
    displayValue: "kingarrow-donegal",
  });

  static readonly KINGS_INNS_DUBLIN = new Location({
    id: "4372",
    displayName: "Kings Inns, Dublin",
    displayValue: "kings-inns-dublin",
  });

  static readonly KINGSCOURT_CAVAN = new Location({
    id: "1518",
    displayName: "Kingscourt, Cavan",
    displayValue: "kingscourt-cavan",
  });

  static readonly KINGSLAND_ROSCOMMON = new Location({
    id: "3457",
    displayName: "Kingsland, Roscommon",
    displayValue: "kingsland-roscommon",
  });

  static readonly KINGSTON_GALWAY = new Location({
    id: "2543",
    displayName: "Kingston, Galway",
    displayValue: "kingston-galway",
  });

  static readonly KINGSTOWN_GALWAY = new Location({
    id: "2544",
    displayName: "Kingstown, Galway",
    displayValue: "kingstown-galway",
  });

  static readonly KINGSWOOD_DUBLIN = new Location({
    id: "2158",
    displayName: "Kingswood, Dublin",
    displayValue: "kingswood-dublin",
  });

  static readonly KINLOUGH_LEITRIM = new Location({
    id: "2868",
    displayName: "Kinlough, Leitrim",
    displayValue: "kinlough-leitrim",
  });

  static readonly KINNADOOHY_MAYO = new Location({
    id: "3275",
    displayName: "Kinnadoohy, Mayo",
    displayValue: "kinnadoohy-mayo",
  });

  static readonly KINNEGAD_MEATH = new Location({
    id: "3250",
    displayName: "Kinnegad, Meath",
    displayValue: "kinnegad-meath",
  });

  static readonly KINNEGAD_WESTMEATH = new Location({
    id: "3784",
    displayName: "Kinnegad, Westmeath",
    displayValue: "kinnegad-westmeath",
  });

  static readonly KINNEGO_DONEGAL = new Location({
    id: "563",
    displayName: "Kinnego, Donegal",
    displayValue: "kinnego-donegal",
  });

  static readonly KINNITTY_OFFALY = new Location({
    id: "3368",
    displayName: "Kinnitty, Offaly",
    displayValue: "kinnitty-offaly",
  });

  static readonly KINSALE_AND_SURROUNDS_CORK = new Location({
    id: "4125",
    displayName: "Kinsale (& Surrounds), Cork",
    displayValue: "kinsale-and-surrounds-cork",
  });

  static readonly KINSALE_CORK = new Location({
    id: "1981",
    displayName: "Kinsale, Cork",
    displayValue: "kinsale-cork",
  });

  static readonly KINSALEBEG_WATERFORD = new Location({
    id: "3694",
    displayName: "Kinsalebeg, Waterford",
    displayValue: "kinsalebeg-waterford",
  });

  static readonly KINSEALY_DUBLIN = new Location({
    id: "2159",
    displayName: "Kinsealy, Dublin",
    displayValue: "kinsealy-dublin",
  });

  static readonly KINVARA_GALWAY = new Location({
    id: "2545",
    displayName: "Kinvara, Galway",
    displayValue: "kinvara-galway",
  });

  static readonly KIRCUBBIN_DOWN = new Location({
    id: "110",
    displayName: "Kircubbin, Down",
    displayValue: "kircubbin-down",
  });

  static readonly KISHKEAM_CORK = new Location({
    id: "1982",
    displayName: "Kishkeam, Cork",
    displayValue: "kishkeam-cork",
  });

  static readonly KITCONNELL_GALWAY = new Location({
    id: "714",
    displayName: "Kitconnell, Galway",
    displayValue: "kitconnell-galway",
  });

  static readonly KNAPPAGH_MAYO = new Location({
    id: "3276",
    displayName: "Knappagh, Mayo",
    displayValue: "knappagh-mayo",
  });

  static readonly KNIGHT_S_TOWN_KERRY = new Location({
    id: "2312",
    displayName: "Knight's Town, Kerry",
    displayValue: "knight-s-town-kerry",
  });

  static readonly KNOCK_CLARE = new Location({
    id: "1627",
    displayName: "Knock, Clare",
    displayValue: "knock-clare",
  });

  static readonly KNOCK_DOWN = new Location({
    id: "2020",
    displayName: "Knock, Down",
    displayValue: "knock-down",
  });

  static readonly KNOCK_MAYO = new Location({
    id: "3277",
    displayName: "Knock, Mayo",
    displayValue: "knock-mayo",
  });

  static readonly KNOCK_TIPPERARY = new Location({
    id: "3589",
    displayName: "Knock, Tipperary",
    displayValue: "knock-tipperary",
  });

  static readonly KNOCKADERRY_LIMERICK = new Location({
    id: "2921",
    displayName: "Knockaderry, Limerick",
    displayValue: "knockaderry-limerick",
  });

  static readonly KNOCKAINEY_LIMERICK = new Location({
    id: "2922",
    displayName: "Knockainey, Limerick",
    displayValue: "knockainey-limerick",
  });

  static readonly KNOCKAINY_LIMERICK = new Location({
    id: "905",
    displayName: "Knockainy, Limerick",
    displayValue: "knockainy-limerick",
  });

  static readonly KNOCKALOUGH_CLARE = new Location({
    id: "1628",
    displayName: "Knockalough, Clare",
    displayValue: "knockalough-clare",
  });

  static readonly KNOCKANANNA_WICKLOW = new Location({
    id: "4031",
    displayName: "Knockananna, Wicklow",
    displayValue: "knockananna-wicklow",
  });

  static readonly KNOCKANEVIN_CORK = new Location({
    id: "1983",
    displayName: "Knockanevin, Cork",
    displayValue: "knockanevin-cork",
  });

  static readonly KNOCKANILLAUN_MAYO = new Location({
    id: "2965",
    displayName: "Knockanillaun, Mayo",
    displayValue: "knockanillaun-mayo",
  });

  static readonly KNOCKANORE_WATERFORD = new Location({
    id: "3695",
    displayName: "Knockanore, Waterford",
    displayValue: "knockanore-waterford",
  });

  static readonly KNOCKANURE_ROAD_KERRY = new Location({
    id: "2386",
    displayName: "Knockanure Road, Kerry",
    displayValue: "knockanure-road-kerry",
  });

  static readonly KNOCKAUNALOUR_CORK = new Location({
    id: "421",
    displayName: "Knockaunalour, Cork",
    displayValue: "knockaunalour-cork",
  });

  static readonly KNOCKAUNNAGLASHY_KERRY = new Location({
    id: "767",
    displayName: "Knockaunnaglashy, Kerry",
    displayValue: "knockaunnaglashy-kerry",
  });

  static readonly KNOCKBOY_WATERFORD = new Location({
    id: "3696",
    displayName: "Knockboy, Waterford",
    displayValue: "knockboy-waterford",
  });

  static readonly KNOCKBRACK_DONEGAL = new Location({
    id: "569",
    displayName: "Knockbrack, Donegal",
    displayValue: "knockbrack-donegal",
  });

  static readonly KNOCKBRACKEN_DOWN = new Location({
    id: "2021",
    displayName: "Knockbracken, Down",
    displayValue: "knockbracken-down",
  });

  static readonly KNOCKBRANDON_WEXFORD = new Location({
    id: "3874",
    displayName: "Knockbrandon, Wexford",
    displayValue: "knockbrandon-wexford",
  });

  static readonly KNOCKBREDA_DOWN = new Location({
    id: "2022",
    displayName: "Knockbreda, Down",
    displayValue: "knockbreda-down",
  });

  static readonly KNOCKBRIDE_CAVAN = new Location({
    id: "1524",
    displayName: "Knockbride, Cavan",
    displayValue: "knockbride-cavan",
  });

  static readonly KNOCKBRIDGE_LOUTH = new Location({
    id: "3067",
    displayName: "Knockbridge, Louth",
    displayValue: "knockbridge-louth",
  });

  static readonly KNOCKBRIT_TIPPERARY = new Location({
    id: "1374",
    displayName: "Knockbrit, Tipperary",
    displayValue: "knockbrit-tipperary",
  });

  static readonly KNOCKBURDEN_CORK = new Location({
    id: "425",
    displayName: "Knockburden, Cork",
    displayValue: "knockburden-cork",
  });

  static readonly KNOCKCROGHERY_ROSCOMMON = new Location({
    id: "3458",
    displayName: "Knockcroghery, Roscommon",
    displayValue: "knockcroghery-roscommon",
  });

  static readonly KNOCKDRIN_WESTMEATH = new Location({
    id: "3785",
    displayName: "Knockdrin, Westmeath",
    displayValue: "knockdrin-westmeath",
  });

  static readonly KNOCKERRY_CLARE = new Location({
    id: "314",
    displayName: "Knockerry, Clare",
    displayValue: "knockerry-clare",
  });

  static readonly KNOCKFERRY_GALWAY = new Location({
    id: "2562",
    displayName: "Knockferry, Galway",
    displayValue: "knockferry-galway",
  });

  static readonly KNOCKLOFTY_TIPPERARY = new Location({
    id: "3590",
    displayName: "Knocklofty, Tipperary",
    displayValue: "knocklofty-tipperary",
  });

  static readonly KNOCKLONG_LIMERICK = new Location({
    id: "2923",
    displayName: "Knocklong, Limerick",
    displayValue: "knocklong-limerick",
  });

  static readonly KNOCKLOUGHRIM_DERRY = new Location({
    id: "1291",
    displayName: "Knockloughrim, Derry",
    displayValue: "knockloughrim-derry",
  });

  static readonly KNOCKLYON_DUBLIN = new Location({
    id: "2160",
    displayName: "Knocklyon, Dublin",
    displayValue: "knocklyon-dublin",
  });

  static readonly KNOCKMORE_MAYO = new Location({
    id: "2972",
    displayName: "Knockmore, Mayo",
    displayValue: "knockmore-mayo",
  });

  static readonly KNOCKMOURNE_CORK = new Location({
    id: "428",
    displayName: "Knockmourne, Cork",
    displayValue: "knockmourne-cork",
  });

  static readonly KNOCKNABOUL_KERRY = new Location({
    id: "2387",
    displayName: "Knocknaboul, Kerry",
    displayValue: "knocknaboul-kerry",
  });

  static readonly KNOCKNACARRA_GALWAY = new Location({
    id: "2563",
    displayName: "Knocknacarra, Galway",
    displayValue: "knocknacarra-galway",
  });

  static readonly KNOCKNACREE_KILDARE = new Location({
    id: "2742",
    displayName: "Knocknacree, Kildare",
    displayValue: "knocknacree-kildare",
  });

  static readonly KNOCKNAGONEY_DOWN = new Location({
    id: "623",
    displayName: "Knocknagoney, Down",
    displayValue: "knocknagoney-down",
  });

  static readonly KNOCKNAGOSHEL_KERRY = new Location({
    id: "2388",
    displayName: "Knocknagoshel, Kerry",
    displayValue: "knocknagoshel-kerry",
  });

  static readonly KNOCKNAGREE_CORK = new Location({
    id: "1984",
    displayName: "Knocknagree, Cork",
    displayValue: "knocknagree-cork",
  });

  static readonly KNOCKNAHEENY_CORK = new Location({
    id: "447",
    displayName: "Knocknaheeny, Cork",
    displayValue: "knocknaheeny-cork",
  });

  static readonly KNOCKNAHILAN_CORK = new Location({
    id: "429",
    displayName: "Knocknahilan, Cork",
    displayValue: "knocknahilan-cork",
  });

  static readonly KNOCKNALINA_MAYO = new Location({
    id: "2973",
    displayName: "Knocknalina, Mayo",
    displayValue: "knocknalina-mayo",
  });

  static readonly KNOCKNALOWER_MAYO = new Location({
    id: "2974",
    displayName: "Knocknalower, Mayo",
    displayValue: "knocknalower-mayo",
  });

  static readonly KNOCKRAHA_CORK = new Location({
    id: "448",
    displayName: "Knockraha, Cork",
    displayValue: "knockraha-cork",
  });

  static readonly KNOCKROBIN_WICKLOW = new Location({
    id: "4032",
    displayName: "Knockrobin, Wicklow",
    displayValue: "knockrobin-wicklow",
  });

  static readonly KNOCKS_CORK = new Location({
    id: "430",
    displayName: "Knocks, Cork",
    displayValue: "knocks-cork",
  });

  static readonly KNOCKS_LAOIS = new Location({
    id: "2273",
    displayName: "Knocks, Laois",
    displayValue: "knocks-laois",
  });

  static readonly KNOCKSKAGH_CORK = new Location({
    id: "426",
    displayName: "Knockskagh, Cork",
    displayValue: "knockskagh-cork",
  });

  static readonly KNOCKTOPHER_KILKENNY = new Location({
    id: "2799",
    displayName: "Knocktopher, Kilkenny",
    displayValue: "knocktopher-kilkenny",
  });

  static readonly KNOCKTOWN_WEXFORD = new Location({
    id: "3875",
    displayName: "Knocktown, Wexford",
    displayValue: "knocktown-wexford",
  });

  static readonly KNOCKUNDERVAUL_KERRY = new Location({
    id: "763",
    displayName: "Knockundervaul, Kerry",
    displayValue: "knockundervaul-kerry",
  });

  static readonly KNOCKVICAR_ROSCOMMON = new Location({
    id: "3459",
    displayName: "Knockvicar, Roscommon",
    displayValue: "knockvicar-roscommon",
  });

  static readonly KNUTTERY_CORK = new Location({
    id: "431",
    displayName: "Knuttery, Cork",
    displayValue: "knuttery-cork",
  });

  static readonly KYLEBRACK_GALWAY = new Location({
    id: "2564",
    displayName: "Kylebrack, Galway",
    displayValue: "kylebrack-galway",
  });

  static readonly KYLEMORE_GALWAY = new Location({
    id: "2565",
    displayName: "Kylemore, Galway",
    displayValue: "kylemore-galway",
  });

  static readonly KYLESALIA_GALWAY = new Location({
    id: "2566",
    displayName: "Kylesalia, Galway",
    displayValue: "kylesalia-galway",
  });

  static readonly LA_COLLEGE_OF_CREATIVE_ARTS_DUBLIN = new Location({
    id: "4378",
    displayName: "LA College of Creative Arts, Dublin",
    displayValue: "la-college-of-creative-arts-dublin",
  });

  static readonly LABAN_GALWAY = new Location({
    id: "2567",
    displayName: "Laban, Galway",
    displayValue: "laban-galway",
  });

  static readonly LABASHEEDA_CLARE = new Location({
    id: "1629",
    displayName: "Labasheeda, Clare",
    displayValue: "labasheeda-clare",
  });

  static readonly LACK_FERMANAGH = new Location({
    id: "2196",
    displayName: "Lack, Fermanagh",
    displayValue: "lack-fermanagh",
  });

  static readonly LACKAGH_GALWAY = new Location({
    id: "2568",
    displayName: "Lackagh, Galway",
    displayValue: "lackagh-galway",
  });

  static readonly LACKAGH_KILDARE = new Location({
    id: "2743",
    displayName: "Lackagh, Kildare",
    displayValue: "lackagh-kildare",
  });

  static readonly LACKAREAGH_CORK = new Location({
    id: "432",
    displayName: "Lackareagh, Cork",
    displayValue: "lackareagh-cork",
  });

  static readonly LACKAROE_WATERFORD = new Location({
    id: "3697",
    displayName: "Lackaroe, Waterford",
    displayValue: "lackaroe-waterford",
  });

  static readonly LACKEN_WICKLOW = new Location({
    id: "4033",
    displayName: "Lacken, Wicklow",
    displayValue: "lacken-wicklow",
  });

  static readonly LACKENSHONEEN_CORK = new Location({
    id: "427",
    displayName: "Lackenshoneen, Cork",
    displayValue: "lackenshoneen-cork",
  });

  static readonly LACONNELL_DONEGAL = new Location({
    id: "570",
    displayName: "Laconnell, Donegal",
    displayValue: "laconnell-donegal",
  });

  static readonly LADYBROOK_ANTRIM = new Location({
    id: "1404",
    displayName: "Ladybrook, Antrim",
    displayValue: "ladybrook-antrim",
  });

  static readonly LADYSBRIDGE_CORK = new Location({
    id: "458",
    displayName: "Ladysbridge, Cork",
    displayValue: "ladysbridge-cork",
  });

  static readonly LAFFANSBRIDGE_TIPPERARY = new Location({
    id: "3591",
    displayName: "Laffansbridge, Tipperary",
    displayValue: "laffansbridge-tipperary",
  });

  static readonly LAG_DONEGAL = new Location({
    id: "978",
    displayName: "Lag, Donegal",
    displayValue: "lag-donegal",
  });

  static readonly LAGGANSTOWN_TIPPERARY = new Location({
    id: "3592",
    displayName: "Lagganstown, Tipperary",
    displayValue: "lagganstown-tipperary",
  });

  static readonly LAGHY_DONEGAL = new Location({
    id: "981",
    displayName: "Laghy, Donegal",
    displayValue: "laghy-donegal",
  });

  static readonly LAGMORE_ANTRIM = new Location({
    id: "1405",
    displayName: "Lagmore, Antrim",
    displayValue: "lagmore-antrim",
  });

  static readonly LAHARDAUN_MAYO = new Location({
    id: "2975",
    displayName: "Lahardaun, Mayo",
    displayValue: "lahardaun-mayo",
  });

  static readonly LAHINCH_ROAD_CLARE = new Location({
    id: "315",
    displayName: "Lahinch Road, Clare",
    displayValue: "lahinch-road-clare",
  });

  static readonly LAHINCH_CLARE = new Location({
    id: "1630",
    displayName: "Lahinch, Clare",
    displayValue: "lahinch-clare",
  });

  static readonly LAKYLE_CLARE = new Location({
    id: "1631",
    displayName: "Lakyle, Clare",
    displayValue: "lakyle-clare",
  });

  static readonly LANESBOROUGH_LONGFORD = new Location({
    id: "2990",
    displayName: "Lanesborough, Longford",
    displayValue: "lanesborough-longford",
  });

  static readonly LANESBOROUGH_ROSCOMMON = new Location({
    id: "3460",
    displayName: "Lanesborough, Roscommon",
    displayValue: "lanesborough-roscommon",
  });

  static readonly LARACOR_MEATH = new Location({
    id: "1063",
    displayName: "Laracor, Meath",
    displayValue: "laracor-meath",
  });

  static readonly LARAGH_KILDARE = new Location({
    id: "2744",
    displayName: "Laragh, Kildare",
    displayValue: "laragh-kildare",
  });

  static readonly LARAGH_MONAGHAN = new Location({
    id: "504",
    displayName: "Laragh, Monaghan",
    displayValue: "laragh-monaghan",
  });

  static readonly LARAGH_WICKLOW = new Location({
    id: "4034",
    displayName: "Laragh, Wicklow",
    displayValue: "laragh-wicklow",
  });

  static readonly LARGAN_MAYO = new Location({
    id: "2976",
    displayName: "Largan, Mayo",
    displayValue: "largan-mayo",
  });

  static readonly LARGAN_SLIGO = new Location({
    id: "1166",
    displayName: "Largan, Sligo",
    displayValue: "largan-sligo",
  });

  static readonly LARGY_DONEGAL = new Location({
    id: "982",
    displayName: "Largy, Donegal",
    displayValue: "largy-donegal",
  });

  static readonly LARGYDONNELL_LEITRIM = new Location({
    id: "2869",
    displayName: "Largydonnell, Leitrim",
    displayValue: "largydonnell-leitrim",
  });

  static readonly LARNE_ANTRIM = new Location({
    id: "1406",
    displayName: "Larne, Antrim",
    displayValue: "larne-antrim",
  });

  static readonly LATTIN_TIPPERARY = new Location({
    id: "3593",
    displayName: "Lattin, Tipperary",
    displayValue: "lattin-tipperary",
  });

  static readonly LAUGHANSTOWN_DUBLIN = new Location({
    id: "1155",
    displayName: "Laughanstown, Dublin",
    displayValue: "laughanstown-dublin",
  });

  static readonly LAURAGH_KERRY = new Location({
    id: "2389",
    displayName: "Lauragh, Kerry",
    displayValue: "lauragh-kerry",
  });

  static readonly LAURELVALE_ARMAGH = new Location({
    id: "1190",
    displayName: "Laurelvale, Armagh",
    displayValue: "laurelvale-armagh",
  });

  static readonly LAURENCETOWN_GALWAY = new Location({
    id: "2569",
    displayName: "Laurencetown, Galway",
    displayValue: "laurencetown-galway",
  });

  static readonly LAVAGH_SLIGO = new Location({
    id: "1907",
    displayName: "Lavagh, Sligo",
    displayValue: "lavagh-sligo",
  });

  static readonly LAVALLY_GALWAY = new Location({
    id: "2570",
    displayName: "Lavally, Galway",
    displayValue: "lavally-galway",
  });

  static readonly LAVEY_CAVAN = new Location({
    id: "1525",
    displayName: "Lavey, Cavan",
    displayValue: "lavey-cavan",
  });

  static readonly LAW_SOCIETY_OF_IRELAND_EDUCATION_CENTRE_DUBLIN_DUBLIN =
    new Location({
      id: "4365",
      displayName: "Law Society of Ireland Education Centre Dublin, Dublin",
      displayValue: "law-society-of-ireland-education-centre-dublin-dublin",
    });

  static readonly LAWRENCETOWN_DOWN = new Location({
    id: "2023",
    displayName: "Lawrencetown, Down",
    displayValue: "lawrencetown-down",
  });

  static readonly LAYTOWN_AND_SURROUNDS_MEATH = new Location({
    id: "4127",
    displayName: "Laytown (& Surrounds), Meath",
    displayValue: "laytown-and-surrounds-meath",
  });

  static readonly LAYTOWN_MEATH = new Location({
    id: "3251",
    displayName: "Laytown, Meath",
    displayValue: "laytown-meath",
  });

  static readonly LEABGARROW_DONEGAL = new Location({
    id: "571",
    displayName: "Leabgarrow, Donegal",
    displayValue: "leabgarrow-donegal",
  });

  static readonly LEAMLARA_CORK = new Location({
    id: "459",
    displayName: "Leamlara, Cork",
    displayValue: "leamlara-cork",
  });

  static readonly LECARROW_LEITRIM = new Location({
    id: "2589",
    displayName: "Lecarrow, Leitrim",
    displayValue: "lecarrow-leitrim",
  });

  static readonly LECARROW_ROSCOMMON = new Location({
    id: "3461",
    displayName: "Lecarrow, Roscommon",
    displayValue: "lecarrow-roscommon",
  });

  static readonly LECKANARAINEY_LEITRIM = new Location({
    id: "2590",
    displayName: "Leckanarainey, Leitrim",
    displayValue: "leckanarainey-leitrim",
  });

  static readonly LECKANVY_MAYO = new Location({
    id: "1020",
    displayName: "Leckanvy, Mayo",
    displayValue: "leckanvy-mayo",
  });

  static readonly LECKAUN_LEITRIM = new Location({
    id: "2591",
    displayName: "Leckaun, Leitrim",
    displayValue: "leckaun-leitrim",
  });

  static readonly LECKEMY_DONEGAL = new Location({
    id: "567",
    displayName: "Leckemy, Donegal",
    displayValue: "leckemy-donegal",
  });

  static readonly LEENANE_GALWAY = new Location({
    id: "2571",
    displayName: "Leenane, Galway",
    displayValue: "leenane-galway",
  });

  static readonly LEGAN_LONGFORD = new Location({
    id: "2991",
    displayName: "Legan, Longford",
    displayValue: "legan-longford",
  });

  static readonly LEGGAH_LONGFORD = new Location({
    id: "2998",
    displayName: "Leggah, Longford",
    displayValue: "leggah-longford",
  });

  static readonly LEGONIEL_ANTRIM = new Location({
    id: "1407",
    displayName: "Legoniel, Antrim",
    displayValue: "legoniel-antrim",
  });

  static readonly LEHARDAN_DONEGAL = new Location({
    id: "572",
    displayName: "Lehardan, Donegal",
    displayValue: "lehardan-donegal",
  });

  static readonly LEHENAGHMORE_CORK = new Location({
    id: "461",
    displayName: "Lehenaghmore, Cork",
    displayValue: "lehenaghmore-cork",
  });

  static readonly LEIGHLINBRIDGE_CARLOW = new Location({
    id: "1780",
    displayName: "Leighlinbridge, Carlow",
    displayValue: "leighlinbridge-carlow",
  });

  static readonly LEITRIM_CLARE = new Location({
    id: "1632",
    displayName: "Leitrim, Clare",
    displayValue: "leitrim-clare",
  });

  static readonly LEITRIM_DOWN = new Location({
    id: "1302",
    displayName: "Leitrim, Down",
    displayValue: "leitrim-down",
  });

  static readonly LEITRIM_LEITRIM = new Location({
    id: "2592",
    displayName: "Leitrim, Leitrim",
    displayValue: "leitrim-leitrim",
  });

  static readonly LEIXLIP_AND_SURROUNDS_KILDARE = new Location({
    id: "4128",
    displayName: "Leixlip (& Surrounds), Kildare",
    displayValue: "leixlip-and-surrounds-kildare",
  });

  static readonly LEIXLIP_KILDARE = new Location({
    id: "2745",
    displayName: "Leixlip, Kildare",
    displayValue: "leixlip-kildare",
  });

  static readonly LEMANAGHAN_OFFALY = new Location({
    id: "3369",
    displayName: "Lemanaghan, Offaly",
    displayValue: "lemanaghan-offaly",
  });

  static readonly LEMYBRIEN_WATERFORD = new Location({
    id: "3698",
    displayName: "Lemybrien, Waterford",
    displayValue: "lemybrien-waterford",
  });

  static readonly LENABOY_GALWAY = new Location({
    id: "2572",
    displayName: "Lenaboy, Galway",
    displayValue: "lenaboy-galway",
  });

  static readonly LEOPARDSTOWN_DUBLIN = new Location({
    id: "2161",
    displayName: "Leopardstown, Dublin",
    displayValue: "leopardstown-dublin",
  });

  static readonly LERRIG_KERRY = new Location({
    id: "764",
    displayName: "Lerrig, Kerry",
    displayValue: "lerrig-kerry",
  });

  static readonly LETTERAGH_GALWAY = new Location({
    id: "2585",
    displayName: "Letteragh, Galway",
    displayValue: "letteragh-galway",
  });

  static readonly LETTERBARRA_DONEGAL = new Location({
    id: "983",
    displayName: "Letterbarra, Donegal",
    displayValue: "letterbarra-donegal",
  });

  static readonly LETTERBREEN_FERMANAGH = new Location({
    id: "2201",
    displayName: "Letterbreen, Fermanagh",
    displayValue: "letterbreen-fermanagh",
  });

  static readonly LETTERCALLOW_GALWAY = new Location({
    id: "2586",
    displayName: "Lettercallow, Galway",
    displayValue: "lettercallow-galway",
  });

  static readonly LETTERFINISH_KERRY = new Location({
    id: "765",
    displayName: "Letterfinish, Kerry",
    displayValue: "letterfinish-kerry",
  });

  static readonly LETTERFRACK_GALWAY = new Location({
    id: "1859",
    displayName: "Letterfrack, Galway",
    displayValue: "letterfrack-galway",
  });

  static readonly LETTERKELLY_CLARE = new Location({
    id: "317",
    displayName: "Letterkelly, Clare",
    displayValue: "letterkelly-clare",
  });

  static readonly LETTERKENNY_AND_SURROUNDS_DONEGAL = new Location({
    id: "4129",
    displayName: "Letterkenny (& Surrounds), Donegal",
    displayValue: "letterkenny-and-surrounds-donegal",
  });

  static readonly LETTERKENNY_INSTITUTE_OF_TECHNOLOGY_DONEGAL = new Location({
    id: "4339",
    displayName: "Letterkenny Institute of Technology, Donegal",
    displayValue: "letterkenny-institute-of-technology-donegal",
  });

  static readonly LETTERKENNY_DONEGAL = new Location({
    id: "985",
    displayName: "Letterkenny, Donegal",
    displayValue: "letterkenny-donegal",
  });

  static readonly LETTERLEAGUE_DONEGAL = new Location({
    id: "574",
    displayName: "Letterleague, Donegal",
    displayValue: "letterleague-donegal",
  });

  static readonly LETTERMACAWARD_DONEGAL = new Location({
    id: "987",
    displayName: "Lettermacaward, Donegal",
    displayValue: "lettermacaward-donegal",
  });

  static readonly LETTERMORE_GALWAY = new Location({
    id: "1860",
    displayName: "Lettermore, Galway",
    displayValue: "lettermore-galway",
  });

  static readonly LETTERMULLAN_GALWAY = new Location({
    id: "716",
    displayName: "Lettermullan, Galway",
    displayValue: "lettermullan-galway",
  });

  static readonly LICKETSTOWN_KILKENNY = new Location({
    id: "2800",
    displayName: "Licketstown, Kilkenny",
    displayValue: "licketstown-kilkenny",
  });

  static readonly LIFFORD_DONEGAL = new Location({
    id: "988",
    displayName: "Lifford, Donegal",
    displayValue: "lifford-donegal",
  });

  static readonly LIMAVADY_DERRY = new Location({
    id: "1599",
    displayName: "Limavady, Derry",
    displayValue: "limavady-derry",
  });

  static readonly LIMERICK = new Location({
    id: "17",
    displayName: "Limerick (County)",
    displayValue: "limerick",
  });

  static readonly LIMERICK_CITY = new Location({
    id: "37",
    displayName: "Limerick City",
    displayValue: "limerick-city",
  });

  static readonly LIMERICK_CITY_CENTRE_LIMERICK = new Location({
    id: "58",
    displayName: "Limerick City Centre, Limerick",
    displayValue: "limerick-city-centre-limerick",
  });

  static readonly LIMERICK_CITY_SUBURBS_LIMERICK = new Location({
    id: "59",
    displayName: "Limerick City Suburbs, Limerick",
    displayValue: "limerick-city-suburbs-limerick",
  });

  static readonly LIMERICK_COMMUTER_TOWNS_LIMERICK = new Location({
    id: "60",
    displayName: "Limerick Commuter Towns, Limerick",
    displayValue: "limerick-commuter-towns-limerick",
  });

  static readonly LIMERICK_INSTITUE_OF_TECHNOLOGY_LIT_TIPPERARY_TIPPERARY =
    new Location({
      id: "4348",
      displayName: "Limerick Institue of Technology LIT Tipperary, Tipperary",
      displayValue: "limerick-institue-of-technology-lit-tipperary-tipperary",
    });

  static readonly LIMERICK_INSTITUTE_OF_TECHNOLOGY_CLONMEL_DIGITAL_CAMPUS_TIPPERARY =
    new Location({
      id: "4390",
      displayName:
        "Limerick Institute of Technology - Clonmel Digital campus, Tipperary",
      displayValue:
        "limerick-institute-of-technology-clonmel-digital-campus-tipperary",
    });

  static readonly LIMERICK_INSTITUTE_OF_TECHNOLOGY_ENNIS_CAMPUS_CLARE =
    new Location({
      id: "4391",
      displayName: "Limerick Institute of Technology - Ennis campus, Clare",
      displayValue: "limerick-institute-of-technology-ennis-campus-clare",
    });

  static readonly LIMERICK_INSTITUTE_OF_TECHNOLOGY_MOYLISH_CAMPUS_LIMERICK =
    new Location({
      id: "4392",
      displayName:
        "Limerick Institute of Technology - Moylish campus, Limerick",
      displayValue: "limerick-institute-of-technology-moylish-campus-limerick",
    });

  static readonly LIMERICK_INSTITUTE_OF_TECHNOLOGY_LIMERICK = new Location({
    id: "4340",
    displayName: "Limerick Institute of Technology, Limerick",
    displayValue: "limerick-institute-of-technology-limerick",
  });

  static readonly LIMERICK_JUNCTION_TIPPERARY = new Location({
    id: "3594",
    displayName: "Limerick Junction, Tipperary",
    displayValue: "limerick-junction-tipperary",
  });

  static readonly LISACUL_ROSCOMMON = new Location({
    id: "3462",
    displayName: "Lisacul, Roscommon",
    displayValue: "lisacul-roscommon",
  });

  static readonly LISBANE_DOWN = new Location({
    id: "1303",
    displayName: "Lisbane, Down",
    displayValue: "lisbane-down",
  });

  static readonly LISBELLAW_FERMANAGH = new Location({
    id: "2202",
    displayName: "Lisbellaw, Fermanagh",
    displayValue: "lisbellaw-fermanagh",
  });

  static readonly LISBURN_ROAD_ANTRIM = new Location({
    id: "1797",
    displayName: "Lisburn Road, Antrim",
    displayValue: "lisburn-road-antrim",
  });

  static readonly LISBURN_ANTRIM = new Location({
    id: "1408",
    displayName: "Lisburn, Antrim",
    displayValue: "lisburn-antrim",
  });

  static readonly LISCANNOR_CLARE = new Location({
    id: "1633",
    displayName: "Liscannor, Clare",
    displayValue: "liscannor-clare",
  });

  static readonly LISCARNEY_MAYO = new Location({
    id: "2977",
    displayName: "Liscarney, Mayo",
    displayValue: "liscarney-mayo",
  });

  static readonly LISCARROL_CORK = new Location({
    id: "462",
    displayName: "Liscarrol, Cork",
    displayValue: "liscarrol-cork",
  });

  static readonly LISCOLMAN_ANTRIM = new Location({
    id: "1455",
    displayName: "Liscolman, Antrim",
    displayValue: "liscolman-antrim",
  });

  static readonly LISCOOLY_DONEGAL = new Location({
    id: "989",
    displayName: "Liscooly, Donegal",
    displayValue: "liscooly-donegal",
  });

  static readonly LISDOONVARNA_CLARE = new Location({
    id: "1634",
    displayName: "Lisdoonvarna, Clare",
    displayValue: "lisdoonvarna-clare",
  });

  static readonly LISDOWNEY_KILKENNY = new Location({
    id: "2801",
    displayName: "Lisdowney, Kilkenny",
    displayValue: "lisdowney-kilkenny",
  });

  static readonly LISDUFF_CAVAN = new Location({
    id: "1526",
    displayName: "Lisduff, Cavan",
    displayValue: "lisduff-cavan",
  });

  static readonly LISDUFF_LEITRIM = new Location({
    id: "2593",
    displayName: "Lisduff, Leitrim",
    displayValue: "lisduff-leitrim",
  });

  static readonly LISDUFF_OFFALY = new Location({
    id: "3370",
    displayName: "Lisduff, Offaly",
    displayValue: "lisduff-offaly",
  });

  static readonly LISGARODE_TIPPERARY = new Location({
    id: "3595",
    displayName: "Lisgarode, Tipperary",
    displayValue: "lisgarode-tipperary",
  });

  static readonly LISGOOLD_CORK = new Location({
    id: "463",
    displayName: "Lisgoold, Cork",
    displayValue: "lisgoold-cork",
  });

  static readonly LISHEENAKEERAN_GALWAY = new Location({
    id: "717",
    displayName: "Lisheenakeeran, Galway",
    displayValue: "lisheenakeeran-galway",
  });

  static readonly LISMACAFFREY_WESTMEATH = new Location({
    id: "3786",
    displayName: "Lismacaffrey, Westmeath",
    displayValue: "lismacaffrey-westmeath",
  });

  static readonly LISMOGHRY_DONEGAL = new Location({
    id: "575",
    displayName: "Lismoghry, Donegal",
    displayValue: "lismoghry-donegal",
  });

  static readonly LISMORE_AND_SURROUNDS_WATERFORD = new Location({
    id: "4130",
    displayName: "Lismore (& Surrounds), Waterford",
    displayValue: "lismore-and-surrounds-waterford",
  });

  static readonly LISMORE_WATERFORD = new Location({
    id: "3699",
    displayName: "Lismore, Waterford",
    displayValue: "lismore-waterford",
  });

  static readonly LISMOYLE_ROSCOMMON = new Location({
    id: "3463",
    displayName: "Lismoyle, Roscommon",
    displayValue: "lismoyle-roscommon",
  });

  static readonly LISNAGEER_CAVAN = new Location({
    id: "1527",
    displayName: "Lisnageer, Cavan",
    displayValue: "lisnageer-cavan",
  });

  static readonly LISNAGRY_LIMERICK = new Location({
    id: "2925",
    displayName: "Lisnagry, Limerick",
    displayValue: "lisnagry-limerick",
  });

  static readonly LISNAGUNOGUE_ANTRIM = new Location({
    id: "156",
    displayName: "Lisnagunogue, Antrim",
    displayValue: "lisnagunogue-antrim",
  });

  static readonly LISNALTY_LIMERICK = new Location({
    id: "2926",
    displayName: "Lisnalty, Limerick",
    displayValue: "lisnalty-limerick",
  });

  static readonly LISNARICK_FERMANAGH = new Location({
    id: "659",
    displayName: "Lisnarick, Fermanagh",
    displayValue: "lisnarick-fermanagh",
  });

  static readonly LISNASKEA_FERMANAGH = new Location({
    id: "2203",
    displayName: "Lisnaskea, Fermanagh",
    displayValue: "lisnaskea-fermanagh",
  });

  static readonly LISNAVAGH_CARLOW = new Location({
    id: "1476",
    displayName: "Lisnavagh, Carlow",
    displayValue: "lisnavagh-carlow",
  });

  static readonly LISPATRICK_CORK = new Location({
    id: "433",
    displayName: "Lispatrick, Cork",
    displayValue: "lispatrick-cork",
  });

  static readonly LISPOLE_KERRY = new Location({
    id: "2390",
    displayName: "Lispole, Kerry",
    displayValue: "lispole-kerry",
  });

  static readonly LISROE_CLARE = new Location({
    id: "318",
    displayName: "Lisroe, Clare",
    displayValue: "lisroe-clare",
  });

  static readonly LISRONAGH_TIPPERARY = new Location({
    id: "3596",
    displayName: "Lisronagh, Tipperary",
    displayValue: "lisronagh-tipperary",
  });

  static readonly LISRYAN_LONGFORD = new Location({
    id: "2999",
    displayName: "Lisryan, Longford",
    displayValue: "lisryan-longford",
  });

  static readonly LISSALWAY_ROSCOMMON = new Location({
    id: "3464",
    displayName: "Lissalway, Roscommon",
    displayValue: "lissalway-roscommon",
  });

  static readonly LISSAMONA_CORK = new Location({
    id: "464",
    displayName: "Lissamona, Cork",
    displayValue: "lissamona-cork",
  });

  static readonly LISSARDA_CORK = new Location({
    id: "465",
    displayName: "Lissarda, Cork",
    displayValue: "lissarda-cork",
  });

  static readonly LISSAVAIRD_CORK = new Location({
    id: "436",
    displayName: "Lissavaird, Cork",
    displayValue: "lissavaird-cork",
  });

  static readonly LISSELTON_KERRY = new Location({
    id: "2391",
    displayName: "Lisselton, Kerry",
    displayValue: "lisselton-kerry",
  });

  static readonly LISSINAGROAGH_LEITRIM = new Location({
    id: "2594",
    displayName: "Lissinagroagh, Leitrim",
    displayValue: "lissinagroagh-leitrim",
  });

  static readonly LISSINISKA_LEITRIM = new Location({
    id: "2595",
    displayName: "Lissiniska, Leitrim",
    displayValue: "lissiniska-leitrim",
  });

  static readonly LISSYCASEY_CLARE = new Location({
    id: "1635",
    displayName: "Lissycasey, Clare",
    displayValue: "lissycasey-clare",
  });

  static readonly LISTELLICK_KERRY = new Location({
    id: "2392",
    displayName: "Listellick, Kerry",
    displayValue: "listellick-kerry",
  });

  static readonly LISTERLIN_KILKENNY = new Location({
    id: "2802",
    displayName: "Listerlin, Kilkenny",
    displayValue: "listerlin-kilkenny",
  });

  static readonly LISTOWEL_AND_SURROUNDS_KERRY = new Location({
    id: "4131",
    displayName: "Listowel (& Surrounds), Kerry",
    displayValue: "listowel-and-surrounds-kerry",
  });

  static readonly LISTOWEL_KERRY = new Location({
    id: "2395",
    displayName: "Listowel, Kerry",
    displayValue: "listowel-kerry",
  });

  static readonly LITTLE_ISLAND_CORK = new Location({
    id: "466",
    displayName: "Little Island, Cork",
    displayValue: "little-island-cork",
  });

  static readonly LITTLETON_TIPPERARY = new Location({
    id: "3597",
    displayName: "Littleton, Tipperary",
    displayValue: "littleton-tipperary",
  });

  static readonly LIXNAW_KERRY = new Location({
    id: "2396",
    displayName: "Lixnaw, Kerry",
    displayValue: "lixnaw-kerry",
  });

  static readonly LOANENDS_ANTRIM = new Location({
    id: "1798",
    displayName: "Loanends, Antrim",
    displayValue: "loanends-antrim",
  });

  static readonly LOBINSTOWN_MEATH = new Location({
    id: "3252",
    displayName: "Lobinstown, Meath",
    displayValue: "lobinstown-meath",
  });

  static readonly LOMBARDSTOWN_CORK = new Location({
    id: "467",
    displayName: "Lombardstown, Cork",
    displayValue: "lombardstown-cork",
  });

  static readonly LONDONDERRY_DERRY = new Location({
    id: "1292",
    displayName: "Londonderry, Derry",
    displayValue: "londonderry-derry",
  });

  static readonly LONGFORD = new Location({
    id: "5",
    displayName: "Longford (County)",
    displayValue: "longford",
  });

  static readonly LONGFORD_TOWN_AND_SURROUNDS_LONGFORD = new Location({
    id: "4132",
    displayName: "Longford Town (& Surrounds), Longford",
    displayValue: "longford-town-and-surrounds-longford",
  });

  static readonly LONGFORD_TOWN_LONGFORD = new Location({
    id: "3000",
    displayName: "Longford Town, Longford",
    displayValue: "longford-town-longford",
  });

  static readonly LONGWOOD_MEATH = new Location({
    id: "3253",
    displayName: "Longwood, Meath",
    displayValue: "longwood-meath",
  });

  static readonly LORRHA_TIPPERARY = new Location({
    id: "3598",
    displayName: "Lorrha, Tipperary",
    displayValue: "lorrha-tipperary",
  });

  static readonly LOSKERAN_WATERFORD = new Location({
    id: "3708",
    displayName: "Loskeran, Waterford",
    displayValue: "loskeran-waterford",
  });

  static readonly LOSSET_CAVAN = new Location({
    id: "264",
    displayName: "Losset, Cavan",
    displayValue: "losset-cavan",
  });

  static readonly LOSSET_DONEGAL = new Location({
    id: "573",
    displayName: "Losset, Donegal",
    displayValue: "losset-donegal",
  });

  static readonly LOUGH_ARROW_SLIGO = new Location({
    id: "1915",
    displayName: "Lough Arrow, Sligo",
    displayValue: "lough-arrow-sligo",
  });

  static readonly LOUGH_GOWNA_CAVAN = new Location({
    id: "1528",
    displayName: "Lough Gowna, Cavan",
    displayValue: "lough-gowna-cavan",
  });

  static readonly LOUGHANAVALLEY_WESTMEATH = new Location({
    id: "3787",
    displayName: "Loughanavalley, Westmeath",
    displayValue: "loughanavalley-westmeath",
  });

  static readonly LOUGHANURE_DONEGAL = new Location({
    id: "990",
    displayName: "Loughanure, Donegal",
    displayValue: "loughanure-donegal",
  });

  static readonly LOUGHBRICKLAND_DOWN = new Location({
    id: "111",
    displayName: "Loughbrickland, Down",
    displayValue: "loughbrickland-down",
  });

  static readonly LOUGHDUFF_CAVAN = new Location({
    id: "278",
    displayName: "Loughduff, Cavan",
    displayValue: "loughduff-cavan",
  });

  static readonly LOUGHER_KERRY = new Location({
    id: "2397",
    displayName: "Lougher, Kerry",
    displayValue: "lougher-kerry",
  });

  static readonly LOUGHGALL_ARMAGH = new Location({
    id: "1191",
    displayName: "Loughgall, Armagh",
    displayValue: "loughgall-armagh",
  });

  static readonly LOUGHGLYNN_ROSCOMMON = new Location({
    id: "3465",
    displayName: "Loughglynn, Roscommon",
    displayValue: "loughglynn-roscommon",
  });

  static readonly LOUGHGUILE_ANTRIM = new Location({
    id: "1142",
    displayName: "Loughguile, Antrim",
    displayValue: "loughguile-antrim",
  });

  static readonly LOUGHILL_LIMERICK = new Location({
    id: "2927",
    displayName: "Loughill, Limerick",
    displayValue: "loughill-limerick",
  });

  static readonly LOUGHLINSTOWN_DUBLIN = new Location({
    id: "2162",
    displayName: "Loughlinstown, Dublin",
    displayValue: "loughlinstown-dublin",
  });

  static readonly LOUGHMOE_TIPPERARY = new Location({
    id: "3599",
    displayName: "Loughmoe, Tipperary",
    displayValue: "loughmoe-tipperary",
  });

  static readonly LOUGHMORNE_MONAGHAN = new Location({
    id: "505",
    displayName: "Loughmorne, Monaghan",
    displayValue: "loughmorne-monaghan",
  });

  static readonly LOUGHREA_AND_SURROUNDS_GALWAY = new Location({
    id: "4134",
    displayName: "Loughrea (& Surrounds), Galway",
    displayValue: "loughrea-and-surrounds-galway",
  });

  static readonly LOUGHREA_GALWAY = new Location({
    id: "1861",
    displayName: "Loughrea, Galway",
    displayValue: "loughrea-galway",
  });

  static readonly LOUGHSHINNY_DUBLIN = new Location({
    id: "2163",
    displayName: "Loughshinny, Dublin",
    displayValue: "loughshinny-dublin",
  });

  static readonly LOUISBURGH_MAYO = new Location({
    id: "3031",
    displayName: "Louisburgh, Mayo",
    displayValue: "louisburgh-mayo",
  });

  static readonly LOUTH_LOUTH = new Location({
    id: "3068",
    displayName: "Louth, Louth",
    displayValue: "louth-louth",
  });

  static readonly LOWER_BALLINDERRY_ANTRIM = new Location({
    id: "1143",
    displayName: "Lower Ballinderry, Antrim",
    displayValue: "lower-ballinderry-antrim",
  });

  static readonly LOWERTOWN_CORK = new Location({
    id: "469",
    displayName: "Lowertown, Cork",
    displayValue: "lowertown-cork",
  });

  static readonly LUCAN_DUBLIN = new Location({
    id: "2164",
    displayName: "Lucan, Dublin",
    displayValue: "lucan-dublin",
  });

  static readonly LUGGACURREN_LAOIS = new Location({
    id: "2274",
    displayName: "Luggacurren, Laois",
    displayValue: "luggacurren-laois",
  });

  static readonly LUKESWELL_KILKENNY = new Location({
    id: "2803",
    displayName: "Lukeswell, Kilkenny",
    displayValue: "lukeswell-kilkenny",
  });

  static readonly LULLYMORE_KILDARE = new Location({
    id: "2746",
    displayName: "Lullymore, Kildare",
    displayValue: "lullymore-kildare",
  });

  static readonly LURGAN_ARMAGH = new Location({
    id: "1192",
    displayName: "Lurgan, Armagh",
    displayValue: "lurgan-armagh",
  });

  static readonly LURGAN_ROSCOMMON = new Location({
    id: "3466",
    displayName: "Lurgan, Roscommon",
    displayValue: "lurgan-roscommon",
  });

  static readonly LURGANBOY_DONEGAL = new Location({
    id: "991",
    displayName: "Lurganboy, Donegal",
    displayValue: "lurganboy-donegal",
  });

  static readonly LURGANBOY_LEITRIM = new Location({
    id: "2596",
    displayName: "Lurganboy, Leitrim",
    displayValue: "lurganboy-leitrim",
  });

  static readonly LURRAGA_LIMERICK = new Location({
    id: "912",
    displayName: "Lurraga, Limerick",
    displayValue: "lurraga-limerick",
  });

  static readonly LUSK_AND_SURROUNDS_DUBLIN = new Location({
    id: "4135",
    displayName: "Lusk (& Surrounds), Dublin",
    displayValue: "lusk-and-surrounds-dublin",
  });

  static readonly LUSK_DUBLIN = new Location({
    id: "2165",
    displayName: "Lusk, Dublin",
    displayValue: "lusk-dublin",
  });

  static readonly LYCRACRUMPANE_KERRY = new Location({
    id: "2398",
    displayName: "Lycracrumpane, Kerry",
    displayValue: "lycracrumpane-kerry",
  });

  static readonly LYRENAGLOGH_WATERFORD = new Location({
    id: "3709",
    displayName: "Lyrenaglogh, Waterford",
    displayValue: "lyrenaglogh-waterford",
  });

  static readonly MAAM_CROSS_GALWAY = new Location({
    id: "1864",
    displayName: "Maam Cross, Galway",
    displayValue: "maam-cross-galway",
  });

  static readonly MAAS_DONEGAL = new Location({
    id: "992",
    displayName: "Maas, Donegal",
    displayValue: "maas-donegal",
  });

  static readonly MACKAN_FERMANAGH = new Location({
    id: "660",
    displayName: "Mackan, Fermanagh",
    displayValue: "mackan-fermanagh",
  });

  static readonly MACOSQUIN_DERRY = new Location({
    id: "1293",
    displayName: "Macosquin, Derry",
    displayValue: "macosquin-derry",
  });

  static readonly MACROOM_AND_SURROUNDS_CORK = new Location({
    id: "4136",
    displayName: "Macroom (& Surrounds), Cork",
    displayValue: "macroom-and-surrounds-cork",
  });

  static readonly MACROOM_CORK = new Location({
    id: "471",
    displayName: "Macroom, Cork",
    displayValue: "macroom-cork",
  });

  static readonly MADDEN_ARMAGH = new Location({
    id: "196",
    displayName: "Madden, Armagh",
    displayValue: "madden-armagh",
  });

  static readonly MADDENSTOWN_KILDARE = new Location({
    id: "2747",
    displayName: "Maddenstown, Kildare",
    displayValue: "maddenstown-kildare",
  });

  static readonly MADDOCKSTOWN_KILKENNY = new Location({
    id: "2804",
    displayName: "Maddockstown, Kilkenny",
    displayValue: "maddockstown-kilkenny",
  });

  static readonly MAGANEY_KILDARE = new Location({
    id: "2748",
    displayName: "Maganey, Kildare",
    displayValue: "maganey-kildare",
  });

  static readonly MAGHABERRY_ANTRIM = new Location({
    id: "1145",
    displayName: "Maghaberry, Antrim",
    displayValue: "maghaberry-antrim",
  });

  static readonly MAGHANLAWAUN_KERRY = new Location({
    id: "769",
    displayName: "Maghanlawaun, Kerry",
    displayValue: "maghanlawaun-kerry",
  });

  static readonly MAGHER_ARMAGH = new Location({
    id: "1193",
    displayName: "Magher, Armagh",
    displayValue: "magher-armagh",
  });

  static readonly MAGHERA_DERRY = new Location({
    id: "1295",
    displayName: "Maghera, Derry",
    displayValue: "maghera-derry",
  });

  static readonly MAGHERA_DONEGAL = new Location({
    id: "576",
    displayName: "Maghera, Donegal",
    displayValue: "maghera-donegal",
  });

  static readonly MAGHERABANE_DONEGAL = new Location({
    id: "577",
    displayName: "Magherabane, Donegal",
    displayValue: "magherabane-donegal",
  });

  static readonly MAGHERAFELT_DERRY = new Location({
    id: "1296",
    displayName: "Magherafelt, Derry",
    displayValue: "magherafelt-derry",
  });

  static readonly MAGHERALAVE_ANTRIM = new Location({
    id: "157",
    displayName: "Magheralave, Antrim",
    displayValue: "magheralave-antrim",
  });

  static readonly MAGHERALIN_DOWN = new Location({
    id: "112",
    displayName: "Magheralin, Down",
    displayValue: "magheralin-down",
  });

  static readonly MAGHERAMASON_TYRONE = new Location({
    id: "3672",
    displayName: "Magheramason, Tyrone",
    displayValue: "magheramason-tyrone",
  });

  static readonly MAGHERAMORNE_ANTRIM = new Location({
    id: "1146",
    displayName: "Magheramorne, Antrim",
    displayValue: "magheramorne-antrim",
  });

  static readonly MAGHERY_DONEGAL = new Location({
    id: "993",
    displayName: "Maghery, Donegal",
    displayValue: "maghery-donegal",
  });

  static readonly MAGILLIGAN_DERRY = new Location({
    id: "514",
    displayName: "Magilligan, Derry",
    displayValue: "magilligan-derry",
  });

  static readonly MAGLIN_CORK = new Location({
    id: "472",
    displayName: "Maglin, Cork",
    displayValue: "maglin-cork",
  });

  static readonly MAGUIRESBRIDGE_FERMANAGH = new Location({
    id: "661",
    displayName: "Maguiresbridge, Fermanagh",
    displayValue: "maguiresbridge-fermanagh",
  });

  static readonly MAHON_BRIDGE_WATERFORD = new Location({
    id: "3710",
    displayName: "Mahon Bridge, Waterford",
    displayValue: "mahon-bridge-waterford",
  });

  static readonly MAHON_CORK = new Location({
    id: "473",
    displayName: "Mahon, Cork",
    displayValue: "mahon-cork",
  });

  static readonly MAHOONAGH_LIMERICK = new Location({
    id: "2931",
    displayName: "Mahoonagh, Limerick",
    displayValue: "mahoonagh-limerick",
  });

  static readonly MAINHAM_KILDARE = new Location({
    id: "2749",
    displayName: "Mainham, Kildare",
    displayValue: "mainham-kildare",
  });

  static readonly MALAHIDE_DUBLIN = new Location({
    id: "2166",
    displayName: "Malahide, Dublin",
    displayValue: "malahide-dublin",
  });

  static readonly MALIN_BEG_DONEGAL = new Location({
    id: "578",
    displayName: "Malin Beg, Donegal",
    displayValue: "malin-beg-donegal",
  });

  static readonly MALIN_MORE_DONEGAL = new Location({
    id: "579",
    displayName: "Malin More, Donegal",
    displayValue: "malin-more-donegal",
  });

  static readonly MALIN_DONEGAL = new Location({
    id: "994",
    displayName: "Malin, Donegal",
    displayValue: "malin-donegal",
  });

  static readonly MALLOW_AND_SURROUNDS_CORK = new Location({
    id: "4138",
    displayName: "Mallow (& Surrounds), Cork",
    displayValue: "mallow-and-surrounds-cork",
  });

  static readonly MALLOW_CORK = new Location({
    id: "474",
    displayName: "Mallow, Cork",
    displayValue: "mallow-cork",
  });

  static readonly MALONE_ANTRIM = new Location({
    id: "1147",
    displayName: "Malone, Antrim",
    displayValue: "malone-antrim",
  });

  static readonly MANGER_DONEGAL = new Location({
    id: "580",
    displayName: "Manger, Donegal",
    displayValue: "manger-donegal",
  });

  static readonly MANOR_KILBRIDE_WICKLOW = new Location({
    id: "4035",
    displayName: "Manor Kilbride, Wicklow",
    displayValue: "manor-kilbride-wicklow",
  });

  static readonly MANORCUNNINGHAM_DONEGAL = new Location({
    id: "995",
    displayName: "Manorcunningham, Donegal",
    displayValue: "manorcunningham-donegal",
  });

  static readonly MANORHAMILTON_LEITRIM = new Location({
    id: "2597",
    displayName: "Manorhamilton, Leitrim",
    displayValue: "manorhamilton-leitrim",
  });

  static readonly MANSFIELDSTOWN_LOUTH = new Location({
    id: "945",
    displayName: "Mansfieldstown, Louth",
    displayValue: "mansfieldstown-louth",
  });

  static readonly MANTUA_ROSCOMMON = new Location({
    id: "3467",
    displayName: "Mantua, Roscommon",
    displayValue: "mantua-roscommon",
  });

  static readonly MANULLA_MAYO = new Location({
    id: "3033",
    displayName: "Manulla, Mayo",
    displayValue: "manulla-mayo",
  });

  static readonly MARBLE_HILL_DONEGAL = new Location({
    id: "581",
    displayName: "Marble Hill, Donegal",
    displayValue: "marble-hill-donegal",
  });

  static readonly MARDYKE_TIPPERARY = new Location({
    id: "148",
    displayName: "Mardyke, Tipperary",
    displayValue: "mardyke-tipperary",
  });

  static readonly MARINO_DUBLIN = new Location({
    id: "2167",
    displayName: "Marino, Dublin",
    displayValue: "marino-dublin",
  });

  static readonly MARKETHILL_ARMAGH = new Location({
    id: "1194",
    displayName: "Markethill, Armagh",
    displayValue: "markethill-armagh",
  });

  static readonly MARSHALSTOWN_WEXFORD = new Location({
    id: "3876",
    displayName: "Marshalstown, Wexford",
    displayValue: "marshalstown-wexford",
  });

  static readonly MARTINSTOWN_ANTRIM = new Location({
    id: "1148",
    displayName: "Martinstown, Antrim",
    displayValue: "martinstown-antrim",
  });

  static readonly MARTINSTOWN_LIMERICK = new Location({
    id: "2932",
    displayName: "Martinstown, Limerick",
    displayValue: "martinstown-limerick",
  });

  static readonly MARTINSTOWN_MEATH = new Location({
    id: "3254",
    displayName: "Martinstown, Meath",
    displayValue: "martinstown-meath",
  });

  static readonly MARY_IMMACULATE_COLLEGE_LIMERICK = new Location({
    id: "4341",
    displayName: "Mary Immaculate College, Limerick",
    displayValue: "mary-immaculate-college-limerick",
  });

  static readonly MASSHILL_SLIGO = new Location({
    id: "1916",
    displayName: "Masshill, Sligo",
    displayValue: "masshill-sligo",
  });

  static readonly MASTERGREEHY_KERRY = new Location({
    id: "2399",
    displayName: "Mastergreehy, Kerry",
    displayValue: "mastergreehy-kerry",
  });

  static readonly MASTERSTOWN_TIPPERARY = new Location({
    id: "3600",
    displayName: "Masterstown, Tipperary",
    displayValue: "masterstown-tipperary",
  });

  static readonly MATEHY_CORK = new Location({
    id: "434",
    displayName: "Matehy, Cork",
    displayValue: "matehy-cork",
  });

  static readonly MATER_DEI_INSTITUTE_OF_EDUCATION_DUBLIN = new Location({
    id: "4328",
    displayName: "Mater Dei Institute of Education, Dublin",
    displayValue: "mater-dei-institute-of-education-dublin",
  });

  static readonly MAUM_GALWAY = new Location({
    id: "1865",
    displayName: "Maum, Galway",
    displayValue: "maum-galway",
  });

  static readonly MAUMTRASNA_MAYO = new Location({
    id: "1022",
    displayName: "Maumtrasna, Mayo",
    displayValue: "maumtrasna-mayo",
  });

  static readonly MAURICESMILLS_CLARE = new Location({
    id: "1636",
    displayName: "Mauricesmills, Clare",
    displayValue: "mauricesmills-clare",
  });

  static readonly MAYFIELD_CORK = new Location({
    id: "475",
    displayName: "Mayfield, Cork",
    displayValue: "mayfield-cork",
  });

  static readonly MAYGLASS_WEXFORD = new Location({
    id: "3877",
    displayName: "Mayglass, Wexford",
    displayValue: "mayglass-wexford",
  });

  static readonly MAYNOOTH_AND_SURROUNDS_KILDARE = new Location({
    id: "4139",
    displayName: "Maynooth (& Surrounds), Kildare",
    displayValue: "maynooth-and-surrounds-kildare",
  });

  static readonly MAYNOOTH_UNIVERSITY_KILDARE = new Location({
    id: "4343",
    displayName: "Maynooth University, Kildare",
    displayValue: "maynooth-university-kildare",
  });

  static readonly MAYNOOTH_KILDARE = new Location({
    id: "2750",
    displayName: "Maynooth, Kildare",
    displayValue: "maynooth-kildare",
  });

  static readonly MAYOBRIDGE_DOWN = new Location({
    id: "114",
    displayName: "Mayobridge, Down",
    displayValue: "mayobridge-down",
  });

  static readonly MEANUS_LIMERICK = new Location({
    id: "2933",
    displayName: "Meanus, Limerick",
    displayValue: "meanus-limerick",
  });

  static readonly MEELICK_CLARE = new Location({
    id: "1637",
    displayName: "Meelick, Clare",
    displayValue: "meelick-clare",
  });

  static readonly MEELICK_GALWAY = new Location({
    id: "1866",
    displayName: "Meelick, Galway",
    displayValue: "meelick-galway",
  });

  static readonly MEELIN_CORK = new Location({
    id: "476",
    displayName: "Meelin, Cork",
    displayValue: "meelin-cork",
  });

  static readonly MEENACLADY_DONEGAL = new Location({
    id: "996",
    displayName: "Meenaclady, Donegal",
    displayValue: "meenaclady-donegal",
  });

  static readonly MEENACROSS_DONEGAL = new Location({
    id: "998",
    displayName: "Meenacross, Donegal",
    displayValue: "meenacross-donegal",
  });

  static readonly MEENANARWA_DONEGAL = new Location({
    id: "584",
    displayName: "Meenanarwa, Donegal",
    displayValue: "meenanarwa-donegal",
  });

  static readonly MEENANEARY_DONEGAL = new Location({
    id: "1000",
    displayName: "Meenaneary, Donegal",
    displayValue: "meenaneary-donegal",
  });

  static readonly MEENATOTAN_DONEGAL = new Location({
    id: "586",
    displayName: "Meenatotan, Donegal",
    displayValue: "meenatotan-donegal",
  });

  static readonly MEENAVEAN_DONEGAL = new Location({
    id: "582",
    displayName: "Meenavean, Donegal",
    displayValue: "meenavean-donegal",
  });

  static readonly MEENCORWICK_DONEGAL = new Location({
    id: "583",
    displayName: "Meencorwick, Donegal",
    displayValue: "meencorwick-donegal",
  });

  static readonly MEENGLASS_DONEGAL = new Location({
    id: "585",
    displayName: "Meenglass, Donegal",
    displayValue: "meenglass-donegal",
  });

  static readonly MEENLARAGH_DONEGAL = new Location({
    id: "1001",
    displayName: "Meenlaragh, Donegal",
    displayValue: "meenlaragh-donegal",
  });

  static readonly MEENREAGH_DONEGAL = new Location({
    id: "1002",
    displayName: "Meenreagh, Donegal",
    displayValue: "meenreagh-donegal",
  });

  static readonly MEENTULLYNAGARN_DONEGAL = new Location({
    id: "587",
    displayName: "Meentullynagarn, Donegal",
    displayValue: "meentullynagarn-donegal",
  });

  static readonly MEENYBRADDAN_DONEGAL = new Location({
    id: "589",
    displayName: "Meenybraddan, Donegal",
    displayValue: "meenybraddan-donegal",
  });

  static readonly MEIGH_ARMAGH = new Location({
    id: "1195",
    displayName: "Meigh, Armagh",
    displayValue: "meigh-armagh",
  });

  static readonly MENLO_GALWAY = new Location({
    id: "1867",
    displayName: "Menlo, Galway",
    displayValue: "menlo-galway",
  });

  static readonly MENLOUGH_GALWAY = new Location({
    id: "1868",
    displayName: "Menlough, Galway",
    displayValue: "menlough-galway",
  });

  static readonly MERLIN_PARK_GALWAY = new Location({
    id: "2588",
    displayName: "Merlin Park, Galway",
    displayValue: "merlin-park-galway",
  });

  static readonly MERLIN_GALWAY = new Location({
    id: "2587",
    displayName: "Merlin, Galway",
    displayValue: "merlin-galway",
  });

  static readonly MEROK_DOWN = new Location({
    id: "115",
    displayName: "Merok, Down",
    displayValue: "merok-down",
  });

  static readonly MERRION_DUBLIN = new Location({
    id: "2168",
    displayName: "Merrion, Dublin",
    displayValue: "merrion-dublin",
  });

  static readonly MERVUE_GALWAY = new Location({
    id: "2605",
    displayName: "Mervue, Galway",
    displayValue: "mervue-galway",
  });

  static readonly MIDDLETOWN_ARMAGH = new Location({
    id: "1196",
    displayName: "Middletown, Armagh",
    displayValue: "middletown-armagh",
  });

  static readonly MIDDLETOWN_DONEGAL = new Location({
    id: "1003",
    displayName: "Middletown, Donegal",
    displayValue: "middletown-donegal",
  });

  static readonly MIDFIELD_MAYO = new Location({
    id: "3095",
    displayName: "Midfield, Mayo",
    displayValue: "midfield-mayo",
  });

  static readonly MIDLETON_AND_SURROUNDS_CORK = new Location({
    id: "4140",
    displayName: "Midleton (& Surrounds), Cork",
    displayValue: "midleton-and-surrounds-cork",
  });

  static readonly MIDLETON_CORK = new Location({
    id: "477",
    displayName: "Midleton, Cork",
    displayValue: "midleton-cork",
  });

  static readonly MILEHOUSE_WEXFORD = new Location({
    id: "3919",
    displayName: "Milehouse, Wexford",
    displayValue: "milehouse-wexford",
  });

  static readonly MILEMILL_KILDARE = new Location({
    id: "2751",
    displayName: "Milemill, Kildare",
    displayValue: "milemill-kildare",
  });

  static readonly MILESTONE_TIPPERARY = new Location({
    id: "3601",
    displayName: "Milestone, Tipperary",
    displayValue: "milestone-tipperary",
  });

  static readonly MILFORD_ARMAGH = new Location({
    id: "1197",
    displayName: "Milford, Armagh",
    displayValue: "milford-armagh",
  });

  static readonly MILFORD_CORK = new Location({
    id: "478",
    displayName: "Milford, Cork",
    displayValue: "milford-cork",
  });

  static readonly MILFORD_DONEGAL = new Location({
    id: "1004",
    displayName: "Milford, Donegal",
    displayValue: "milford-donegal",
  });

  static readonly MILL_TOWN_MONAGHAN = new Location({
    id: "506",
    displayName: "Mill Town, Monaghan",
    displayValue: "mill-town-monaghan",
  });

  static readonly MILLBROOK_MEATH = new Location({
    id: "3255",
    displayName: "Millbrook, Meath",
    displayValue: "millbrook-meath",
  });

  static readonly MILLEEN_CORK = new Location({
    id: "479",
    displayName: "Milleen, Cork",
    displayValue: "milleen-cork",
  });

  static readonly MILLISLE_DOWN = new Location({
    id: "116",
    displayName: "Millisle, Down",
    displayValue: "millisle-down",
  });

  static readonly MILLROAD_WEXFORD = new Location({
    id: "1281",
    displayName: "Millroad, Wexford",
    displayValue: "millroad-wexford",
  });

  static readonly MILLSTREET_CORK = new Location({
    id: "480",
    displayName: "Millstreet, Cork",
    displayValue: "millstreet-cork",
  });

  static readonly MILLSTREET_WATERFORD = new Location({
    id: "3711",
    displayName: "Millstreet, Waterford",
    displayValue: "millstreet-waterford",
  });

  static readonly MILLTOWN_INSTITUTE_OF_THEOLOGY_AND_PHILOSOPHY_DUBLIN =
    new Location({
      id: "4329",
      displayName: "Milltown Institute of Theology & Philosophy, Dublin",
      displayValue: "milltown-institute-of-theology-and-philosophy-dublin",
    });

  static readonly MILLTOWN_ANTRIM = new Location({
    id: "1149",
    displayName: "Milltown, Antrim",
    displayValue: "milltown-antrim",
  });

  static readonly MILLTOWN_CAVAN = new Location({
    id: "1529",
    displayName: "Milltown, Cavan",
    displayValue: "milltown-cavan",
  });

  static readonly MILLTOWN_DUBLIN = new Location({
    id: "2169",
    displayName: "Milltown, Dublin",
    displayValue: "milltown-dublin",
  });

  static readonly MILLTOWN_GALWAY = new Location({
    id: "2606",
    displayName: "Milltown, Galway",
    displayValue: "milltown-galway",
  });

  static readonly MILLTOWN_KERRY = new Location({
    id: "2400",
    displayName: "Milltown, Kerry",
    displayValue: "milltown-kerry",
  });

  static readonly MILLTOWN_KILDARE = new Location({
    id: "2752",
    displayName: "Milltown, Kildare",
    displayValue: "milltown-kildare",
  });

  static readonly MILLTOWN_MAYO = new Location({
    id: "3096",
    displayName: "Milltown, Mayo",
    displayValue: "milltown-mayo",
  });

  static readonly MILLTOWN_WEXFORD = new Location({
    id: "3920",
    displayName: "Milltown, Wexford",
    displayValue: "milltown-wexford",
  });

  static readonly MILLTOWNPASS_WESTMEATH = new Location({
    id: "3788",
    displayName: "Milltownpass, Westmeath",
    displayValue: "milltownpass-westmeath",
  });

  static readonly MILTOWN_MALBAY_CLARE = new Location({
    id: "1638",
    displayName: "Miltown Malbay, Clare",
    displayValue: "miltown-malbay-clare",
  });

  static readonly MINANE_BRIDGE_CORK = new Location({
    id: "481",
    displayName: "Minane Bridge, Cork",
    displayValue: "minane-bridge-cork",
  });

  static readonly MITCHELSTOWN_AND_SURROUNDS_CORK = new Location({
    id: "4141",
    displayName: "Mitchelstown (& Surrounds), Cork",
    displayValue: "mitchelstown-and-surrounds-cork",
  });

  static readonly MITCHELSTOWN_CORK = new Location({
    id: "482",
    displayName: "Mitchelstown, Cork",
    displayValue: "mitchelstown-cork",
  });

  static readonly MOANMORE_CLARE = new Location({
    id: "1639",
    displayName: "Moanmore, Clare",
    displayValue: "moanmore-clare",
  });

  static readonly MOATE_WESTMEATH = new Location({
    id: "3789",
    displayName: "Moate, Westmeath",
    displayValue: "moate-westmeath",
  });

  static readonly MODEL_FARM_ROAD_CORK = new Location({
    id: "484",
    displayName: "Model Farm Road, Cork",
    displayValue: "model-farm-road-cork",
  });

  static readonly MODEL_VILLAGE_CORK = new Location({
    id: "543",
    displayName: "Model Village, Cork",
    displayValue: "model-village-cork",
  });

  static readonly MODELLIGO_WATERFORD = new Location({
    id: "3712",
    displayName: "Modelligo, Waterford",
    displayValue: "modelligo-waterford",
  });

  static readonly MODREENY_TIPPERARY = new Location({
    id: "149",
    displayName: "Modreeny, Tipperary",
    displayValue: "modreeny-tipperary",
  });

  static readonly MOGEELY_CORK = new Location({
    id: "544",
    displayName: "Mogeely, Cork",
    displayValue: "mogeely-cork",
  });

  static readonly MOGLASS_TIPPERARY = new Location({
    id: "3602",
    displayName: "Moglass, Tipperary",
    displayValue: "moglass-tipperary",
  });

  static readonly MOHIL_KILKENNY = new Location({
    id: "835",
    displayName: "Mohil, Kilkenny",
    displayValue: "mohil-kilkenny",
  });

  static readonly MOHILL_LEITRIM = new Location({
    id: "2598",
    displayName: "Mohill, Leitrim",
    displayValue: "mohill-leitrim",
  });

  static readonly MOIRA_DOWN = new Location({
    id: "1304",
    displayName: "Moira, Down",
    displayValue: "moira-down",
  });

  static readonly MONAGEA_LIMERICK = new Location({
    id: "2934",
    displayName: "Monagea, Limerick",
    displayValue: "monagea-limerick",
  });

  static readonly MONAGEER_WEXFORD = new Location({
    id: "3921",
    displayName: "Monageer, Wexford",
    displayValue: "monageer-wexford",
  });

  static readonly MONAGHAN_AND_SURROUNDS_MONAGHAN = new Location({
    id: "4143",
    displayName: "Monaghan (& Surrounds), Monaghan",
    displayValue: "monaghan-and-surrounds-monaghan",
  });

  static readonly MONAGHAN = new Location({
    id: "26",
    displayName: "Monaghan (County)",
    displayValue: "monaghan",
  });

  static readonly MONAGHAN_MONAGHAN = new Location({
    id: "507",
    displayName: "Monaghan, Monaghan",
    displayValue: "monaghan-monaghan",
  });

  static readonly MONALEEN_LIMERICK = new Location({
    id: "2943",
    displayName: "Monaleen, Limerick",
    displayValue: "monaleen-limerick",
  });

  static readonly MONAMOLIN_WEXFORD = new Location({
    id: "3922",
    displayName: "Monamolin, Wexford",
    displayValue: "monamolin-wexford",
  });

  static readonly MONARD_CORK = new Location({
    id: "1990",
    displayName: "Monard, Cork",
    displayValue: "monard-cork",
  });

  static readonly MONARD_TIPPERARY = new Location({
    id: "3603",
    displayName: "Monard, Tipperary",
    displayValue: "monard-tipperary",
  });

  static readonly MONASEED_WEXFORD = new Location({
    id: "3923",
    displayName: "Monaseed, Wexford",
    displayValue: "monaseed-wexford",
  });

  static readonly MONASTER_LIMERICK = new Location({
    id: "915",
    displayName: "Monaster, Limerick",
    displayValue: "monaster-limerick",
  });

  static readonly MONASTERADEN_SLIGO = new Location({
    id: "1917",
    displayName: "Monasteraden, Sligo",
    displayValue: "monasteraden-sligo",
  });

  static readonly MONASTERBOICE_LOUTH = new Location({
    id: "3069",
    displayName: "Monasterboice, Louth",
    displayValue: "monasterboice-louth",
  });

  static readonly MONASTEREVIN_AND_SURROUNDS_KILDARE = new Location({
    id: "4144",
    displayName: "Monasterevin (& Surrounds), Kildare",
    displayValue: "monasterevin-and-surrounds-kildare",
  });

  static readonly MONASTEREVIN_KILDARE = new Location({
    id: "2753",
    displayName: "Monasterevin, Kildare",
    displayValue: "monasterevin-kildare",
  });

  static readonly MONEA_FERMANAGH = new Location({
    id: "662",
    displayName: "Monea, Fermanagh",
    displayValue: "monea-fermanagh",
  });

  static readonly MONEEN_CLARE = new Location({
    id: "319",
    displayName: "Moneen, Clare",
    displayValue: "moneen-clare",
  });

  static readonly MONEEN_GALWAY = new Location({
    id: "2607",
    displayName: "Moneen, Galway",
    displayValue: "moneen-galway",
  });

  static readonly MONEYFLUGH_CORK = new Location({
    id: "1991",
    displayName: "Moneyflugh, Cork",
    displayValue: "moneyflugh-cork",
  });

  static readonly MONEYGALL_OFFALY = new Location({
    id: "3371",
    displayName: "Moneygall, Offaly",
    displayValue: "moneygall-offaly",
  });

  static readonly MONEYGOLD_SLIGO = new Location({
    id: "1918",
    displayName: "Moneygold, Sligo",
    displayValue: "moneygold-sligo",
  });

  static readonly MONEYLAHAN_SLIGO = new Location({
    id: "3336",
    displayName: "Moneylahan, Sligo",
    displayValue: "moneylahan-sligo",
  });

  static readonly MONEYMORE_DERRY = new Location({
    id: "1297",
    displayName: "Moneymore, Derry",
    displayValue: "moneymore-derry",
  });

  static readonly MONEYNEANY_DERRY = new Location({
    id: "510",
    displayName: "Moneyneany, Derry",
    displayValue: "moneyneany-derry",
  });

  static readonly MONEYREAGH_DOWN = new Location({
    id: "2024",
    displayName: "Moneyreagh, Down",
    displayValue: "moneyreagh-down",
  });

  static readonly MONEYSLANE_DOWN = new Location({
    id: "1862",
    displayName: "Moneyslane, Down",
    displayValue: "moneyslane-down",
  });

  static readonly MONILEA_WESTMEATH = new Location({
    id: "3790",
    displayName: "Monilea, Westmeath",
    displayValue: "monilea-westmeath",
  });

  static readonly MONIVEA_GALWAY = new Location({
    id: "2608",
    displayName: "Monivea, Galway",
    displayValue: "monivea-galway",
  });

  static readonly MONKSTOWN_AND_SURROUNDS_CORK = new Location({
    id: "4145",
    displayName: "Monkstown (& Surrounds), Cork",
    displayValue: "monkstown-and-surrounds-cork",
  });

  static readonly MONKSTOWN_CORK = new Location({
    id: "1992",
    displayName: "Monkstown, Cork",
    displayValue: "monkstown-cork",
  });

  static readonly MONKSTOWN_DUBLIN = new Location({
    id: "2170",
    displayName: "Monkstown, Dublin",
    displayValue: "monkstown-dublin",
  });

  static readonly MONROE_WESTMEATH = new Location({
    id: "3791",
    displayName: "Monroe, Westmeath",
    displayValue: "monroe-westmeath",
  });

  static readonly MONTENOTTE_CORK = new Location({
    id: "1993",
    displayName: "Montenotte, Cork",
    displayValue: "montenotte-cork",
  });

  static readonly MONTESSORI_COLLEGE_DUBLIN_DUBLIN = new Location({
    id: "4368",
    displayName: "Montessori College Dublin, Dublin",
    displayValue: "montessori-college-dublin-dublin",
  });

  static readonly MONTPELIER_LIMERICK = new Location({
    id: "3022",
    displayName: "Montpelier, Limerick",
    displayValue: "montpelier-limerick",
  });

  static readonly MOONCOIN_KILKENNY = new Location({
    id: "2812",
    displayName: "Mooncoin, Kilkenny",
    displayValue: "mooncoin-kilkenny",
  });

  static readonly MOONE_KILDARE = new Location({
    id: "2754",
    displayName: "Moone, Kildare",
    displayValue: "moone-kildare",
  });

  static readonly MOORD_WATERFORD = new Location({
    id: "3713",
    displayName: "Moord, Waterford",
    displayValue: "moord-waterford",
  });

  static readonly MOORFIELDS_ANTRIM = new Location({
    id: "1153",
    displayName: "Moorfields, Antrim",
    displayValue: "moorfields-antrim",
  });

  static readonly MORENANE_LIMERICK = new Location({
    id: "3023",
    displayName: "Morenane, Limerick",
    displayValue: "morenane-limerick",
  });

  static readonly MORNINGTON_AND_SURROUNDS_MEATH = new Location({
    id: "4146",
    displayName: "Mornington (& Surrounds), Meath",
    displayValue: "mornington-and-surrounds-meath",
  });

  static readonly MORNINGTON_MEATH = new Location({
    id: "3256",
    displayName: "Mornington, Meath",
    displayValue: "mornington-meath",
  });

  static readonly MOSNEY_MEATH = new Location({
    id: "1064",
    displayName: "Mosney, Meath",
    displayValue: "mosney-meath",
  });

  static readonly MOSS_SIDE_ANTRIM = new Location({
    id: "1409",
    displayName: "Moss-Side, Antrim",
    displayValue: "moss-side-antrim",
  });

  static readonly MOSSIDE_ANTRIM = new Location({
    id: "1154",
    displayName: "Mosside, Antrim",
    displayValue: "mosside-antrim",
  });

  static readonly MOSTRIM_LONGFORD = new Location({
    id: "3001",
    displayName: "Mostrim, Longford",
    displayValue: "mostrim-longford",
  });

  static readonly MOTHEL_WATERFORD = new Location({
    id: "3714",
    displayName: "Mothel, Waterford",
    displayValue: "mothel-waterford",
  });

  static readonly MOUNT_GARRET_KILKENNY = new Location({
    id: "2813",
    displayName: "Mount Garret, Kilkenny",
    displayValue: "mount-garret-kilkenny",
  });

  static readonly MOUNT_MERRION_DUBLIN = new Location({
    id: "2171",
    displayName: "Mount Merrion, Dublin",
    displayValue: "mount-merrion-dublin",
  });

  static readonly MOUNT_TALBOT_ROSCOMMON = new Location({
    id: "3468",
    displayName: "Mount Talbot, Roscommon",
    displayValue: "mount-talbot-roscommon",
  });

  static readonly MOUNT_TEMPLE_WESTMEATH = new Location({
    id: "3792",
    displayName: "Mount Temple, Westmeath",
    displayValue: "mount-temple-westmeath",
  });

  static readonly MOUNT_UNIACKE_CORK = new Location({
    id: "1994",
    displayName: "Mount Uniacke, Cork",
    displayValue: "mount-uniacke-cork",
  });

  static readonly MOUNTBELLEW_GALWAY = new Location({
    id: "2609",
    displayName: "Mountbellew, Galway",
    displayValue: "mountbellew-galway",
  });

  static readonly MOUNTBOLUS_OFFALY = new Location({
    id: "3372",
    displayName: "Mountbolus, Offaly",
    displayValue: "mountbolus-offaly",
  });

  static readonly MOUNTCHARLES_DONEGAL = new Location({
    id: "1005",
    displayName: "Mountcharles, Donegal",
    displayValue: "mountcharles-donegal",
  });

  static readonly MOUNTCOLLINS_LIMERICK = new Location({
    id: "3024",
    displayName: "Mountcollins, Limerick",
    displayValue: "mountcollins-limerick",
  });

  static readonly MOUNTHENRY_MAYO = new Location({
    id: "1023",
    displayName: "Mounthenry, Mayo",
    displayValue: "mounthenry-mayo",
  });

  static readonly MOUNTMELLICK_AND_SURROUNDS_LAOIS = new Location({
    id: "4147",
    displayName: "Mountmellick (& Surrounds), Laois",
    displayValue: "mountmellick-and-surrounds-laois",
  });

  static readonly MOUNTMELLICK_LAOIS = new Location({
    id: "2275",
    displayName: "Mountmellick, Laois",
    displayValue: "mountmellick-laois",
  });

  static readonly MOUNTNUGENT_CAVAN = new Location({
    id: "1530",
    displayName: "Mountnugent, Cavan",
    displayValue: "mountnugent-cavan",
  });

  static readonly MOUNTRATH_AND_SURROUNDS_LAOIS = new Location({
    id: "4185",
    displayName: "Mountrath (& Surrounds), Laois",
    displayValue: "mountrath-and-surrounds-laois",
  });

  static readonly MOUNTRATH_LAOIS = new Location({
    id: "2276",
    displayName: "Mountrath, Laois",
    displayValue: "mountrath-laois",
  });

  static readonly MOUNTSHANNON_CLARE = new Location({
    id: "1640",
    displayName: "Mountshannon, Clare",
    displayValue: "mountshannon-clare",
  });

  static readonly MOURN_ABBEY_CORK = new Location({
    id: "559",
    displayName: "Mourn Abbey, Cork",
    displayValue: "mourn-abbey-cork",
  });

  static readonly MOURNEABBEY_CORK = new Location({
    id: "560",
    displayName: "Mourneabbey, Cork",
    displayValue: "mourneabbey-cork",
  });

  static readonly MOVEEN_CLARE = new Location({
    id: "1641",
    displayName: "Moveen, Clare",
    displayValue: "moveen-clare",
  });

  static readonly MOVILLE_DONEGAL = new Location({
    id: "1006",
    displayName: "Moville, Donegal",
    displayValue: "moville-donegal",
  });

  static readonly MOWHAN_ARMAGH = new Location({
    id: "1199",
    displayName: "Mowhan, Armagh",
    displayValue: "mowhan-armagh",
  });

  static readonly MOY_TYRONE = new Location({
    id: "3673",
    displayName: "Moy, Tyrone",
    displayValue: "moy-tyrone",
  });

  static readonly MOYARD_GALWAY = new Location({
    id: "2610",
    displayName: "Moyard, Galway",
    displayValue: "moyard-galway",
  });

  static readonly MOYASTA_CLARE = new Location({
    id: "1642",
    displayName: "Moyasta, Clare",
    displayValue: "moyasta-clare",
  });

  static readonly MOYCULLEN_GALWAY = new Location({
    id: "2611",
    displayName: "Moycullen, Galway",
    displayValue: "moycullen-galway",
  });

  static readonly MOYDOW_LONGFORD = new Location({
    id: "3002",
    displayName: "Moydow, Longford",
    displayValue: "moydow-longford",
  });

  static readonly MOYGLASS_GALWAY = new Location({
    id: "2612",
    displayName: "Moyglass, Galway",
    displayValue: "moyglass-galway",
  });

  static readonly MOYLISH_LIMERICK = new Location({
    id: "3034",
    displayName: "Moylish, Limerick",
    displayValue: "moylish-limerick",
  });

  static readonly MOYLOUGH_GALWAY = new Location({
    id: "2613",
    displayName: "Moylough, Galway",
    displayValue: "moylough-galway",
  });

  static readonly MOYLOUGH_SLIGO = new Location({
    id: "1168",
    displayName: "Moylough, Sligo",
    displayValue: "moylough-sligo",
  });

  static readonly MOYMORE_CLARE = new Location({
    id: "320",
    displayName: "Moymore, Clare",
    displayValue: "moymore-clare",
  });

  static readonly MOYNALTY_MEATH = new Location({
    id: "3257",
    displayName: "Moynalty, Meath",
    displayValue: "moynalty-meath",
  });

  static readonly MOYNALVEY_MEATH = new Location({
    id: "263",
    displayName: "Moynalvey, Meath",
    displayValue: "moynalvey-meath",
  });

  static readonly MOYNE_LONGFORD = new Location({
    id: "3003",
    displayName: "Moyne, Longford",
    displayValue: "moyne-longford",
  });

  static readonly MOYNE_ROSCOMMON = new Location({
    id: "3469",
    displayName: "Moyne, Roscommon",
    displayValue: "moyne-roscommon",
  });

  static readonly MOYNE_TIPPERARY = new Location({
    id: "3604",
    displayName: "Moyne, Tipperary",
    displayValue: "moyne-tipperary",
  });

  static readonly MOYNE_WICKLOW = new Location({
    id: "4036",
    displayName: "Moyne, Wicklow",
    displayValue: "moyne-wicklow",
  });

  static readonly MOYROSS_LIMERICK = new Location({
    id: "3042",
    displayName: "Moyross, Limerick",
    displayValue: "moyross-limerick",
  });

  static readonly MOYRUS_GALWAY = new Location({
    id: "2614",
    displayName: "Moyrus, Galway",
    displayValue: "moyrus-galway",
  });

  static readonly MOYVALLEY_KILDARE = new Location({
    id: "2755",
    displayName: "Moyvalley, Kildare",
    displayValue: "moyvalley-kildare",
  });

  static readonly MOYVALLY_KILDARE = new Location({
    id: "795",
    displayName: "Moyvally, Kildare",
    displayValue: "moyvally-kildare",
  });

  static readonly MOYVANE_KERRY = new Location({
    id: "2401",
    displayName: "Moyvane, Kerry",
    displayValue: "moyvane-kerry",
  });

  static readonly MOYVOON_GALWAY = new Location({
    id: "1136",
    displayName: "Moyvoon, Galway",
    displayValue: "moyvoon-galway",
  });

  static readonly MOYVORE_WESTMEATH = new Location({
    id: "3793",
    displayName: "Moyvore, Westmeath",
    displayValue: "moyvore-westmeath",
  });

  static readonly MOYVOUGHLY_WESTMEATH = new Location({
    id: "3794",
    displayName: "Moyvoughly, Westmeath",
    displayValue: "moyvoughly-westmeath",
  });

  static readonly MUCKAMORE_ANTRIM = new Location({
    id: "1410",
    displayName: "Muckamore, Antrim",
    displayValue: "muckamore-antrim",
  });

  static readonly MUCKLAGH_OFFALY = new Location({
    id: "3373",
    displayName: "Mucklagh, Offaly",
    displayValue: "mucklagh-offaly",
  });

  static readonly MUCKLON_KILDARE = new Location({
    id: "2756",
    displayName: "Mucklon, Kildare",
    displayValue: "mucklon-kildare",
  });

  static readonly MUCKROSS_KERRY = new Location({
    id: "2402",
    displayName: "Muckross, Kerry",
    displayValue: "muckross-kerry",
  });

  static readonly MUFF_DONEGAL = new Location({
    id: "1007",
    displayName: "Muff, Donegal",
    displayValue: "muff-donegal",
  });

  static readonly MULGANNON_WEXFORD = new Location({
    id: "3932",
    displayName: "Mulgannon, Wexford",
    displayValue: "mulgannon-wexford",
  });

  static readonly MULHUDDART_DUBLIN = new Location({
    id: "2172",
    displayName: "Mulhuddart, Dublin",
    displayValue: "mulhuddart-dublin",
  });

  static readonly MULLAGH_CAVAN = new Location({
    id: "1531",
    displayName: "Mullagh, Cavan",
    displayValue: "mullagh-cavan",
  });

  static readonly MULLAGH_CLARE = new Location({
    id: "1643",
    displayName: "Mullagh, Clare",
    displayValue: "mullagh-clare",
  });

  static readonly MULLAGH_GALWAY = new Location({
    id: "1134",
    displayName: "Mullagh, Galway",
    displayValue: "mullagh-galway",
  });

  static readonly MULLAGH_MAYO = new Location({
    id: "3097",
    displayName: "Mullagh, Mayo",
    displayValue: "mullagh-mayo",
  });

  static readonly MULLAGH_MEATH = new Location({
    id: "1065",
    displayName: "Mullagh, Meath",
    displayValue: "mullagh-meath",
  });

  static readonly MULLAGHBAWN_ARMAGH = new Location({
    id: "1200",
    displayName: "Mullaghbawn, Armagh",
    displayValue: "mullaghbawn-armagh",
  });

  static readonly MULLAGHMORE_SLIGO = new Location({
    id: "1169",
    displayName: "Mullaghmore, Sligo",
    displayValue: "mullaghmore-sligo",
  });

  static readonly MULLAGHROE_SLIGO = new Location({
    id: "1919",
    displayName: "Mullaghroe, Sligo",
    displayValue: "mullaghroe-sligo",
  });

  static readonly MULLAN_MONAGHAN = new Location({
    id: "508",
    displayName: "Mullan, Monaghan",
    displayValue: "mullan-monaghan",
  });

  static readonly MULLANY_S_CROSS_SLIGO = new Location({
    id: "1167",
    displayName: "Mullany's Cross, Sligo",
    displayValue: "mullany-s-cross-sligo",
  });

  static readonly MULLARTOWN_DOWN = new Location({
    id: "2025",
    displayName: "Mullartown, Down",
    displayValue: "mullartown-down",
  });

  static readonly MULLEN_ROSCOMMON = new Location({
    id: "3470",
    displayName: "Mullen, Roscommon",
    displayValue: "mullen-roscommon",
  });

  static readonly MULLENBEG_KILKENNY = new Location({
    id: "836",
    displayName: "Mullenbeg, Kilkenny",
    displayValue: "mullenbeg-kilkenny",
  });

  static readonly MULLINAHONE_TIPPERARY = new Location({
    id: "3605",
    displayName: "Mullinahone, Tipperary",
    displayValue: "mullinahone-tipperary",
  });

  static readonly MULLINAVAT_KILKENNY = new Location({
    id: "2814",
    displayName: "Mullinavat, Kilkenny",
    displayValue: "mullinavat-kilkenny",
  });

  static readonly MULLINGAR_AND_SURROUNDS_WESTMEATH = new Location({
    id: "4148",
    displayName: "Mullingar (& Surrounds), Westmeath",
    displayValue: "mullingar-and-surrounds-westmeath",
  });

  static readonly MULLINGAR_WESTMEATH = new Location({
    id: "3795",
    displayName: "Mullingar, Westmeath",
    displayValue: "mullingar-westmeath",
  });

  static readonly MULRANNY_MAYO = new Location({
    id: "3098",
    displayName: "Mulranny, Mayo",
    displayValue: "mulranny-mayo",
  });

  static readonly MULTYFARNHAM_WESTMEATH = new Location({
    id: "3796",
    displayName: "Multyfarnham, Westmeath",
    displayValue: "multyfarnham-westmeath",
  });

  static readonly MUNGRET_LIMERICK = new Location({
    id: "3043",
    displayName: "Mungret, Limerick",
    displayValue: "mungret-limerick",
  });

  static readonly MURREAGH_KERRY = new Location({
    id: "2403",
    displayName: "Murreagh, Kerry",
    displayValue: "murreagh-kerry",
  });

  static readonly MURRINTOWN_WEXFORD = new Location({
    id: "3933",
    displayName: "Murrintown, Wexford",
    displayValue: "murrintown-wexford",
  });

  static readonly MURRISK_MAYO = new Location({
    id: "3099",
    displayName: "Murrisk, Mayo",
    displayValue: "murrisk-mayo",
  });

  static readonly MURROE_LIMERICK = new Location({
    id: "3044",
    displayName: "Murroe, Limerick",
    displayValue: "murroe-limerick",
  });

  static readonly MURROOGH_CLARE = new Location({
    id: "329",
    displayName: "Murroogh, Clare",
    displayValue: "murroogh-clare",
  });

  static readonly MURROOGH_GALWAY = new Location({
    id: "2627",
    displayName: "Murroogh, Galway",
    displayValue: "murroogh-galway",
  });

  static readonly MUSGRAVE_ANTRIM = new Location({
    id: "1411",
    displayName: "Musgrave, Antrim",
    displayValue: "musgrave-antrim",
  });

  static readonly MYRTLEVILLE_CORK = new Location({
    id: "562",
    displayName: "Myrtleville, Cork",
    displayValue: "myrtleville-cork",
  });

  static readonly MYSHALL_CARLOW = new Location({
    id: "1477",
    displayName: "Myshall, Carlow",
    displayValue: "myshall-carlow",
  });

  static readonly NAAS_AND_SURROUNDS_KILDARE = new Location({
    id: "4149",
    displayName: "Naas (& Surrounds), Kildare",
    displayValue: "naas-and-surrounds-kildare",
  });

  static readonly NAAS_KILDARE = new Location({
    id: "2757",
    displayName: "Naas, Kildare",
    displayValue: "naas-kildare",
  });

  static readonly NARAN_DONEGAL = new Location({
    id: "1008",
    displayName: "Naran, Donegal",
    displayValue: "naran-donegal",
  });

  static readonly NARRAGHMORE_KILDARE = new Location({
    id: "2758",
    displayName: "Narraghmore, Kildare",
    displayValue: "narraghmore-kildare",
  });

  static readonly NATIONAL_COLLEGE_OF_ART_AND_DESIGN_DUBLIN = new Location({
    id: "4330",
    displayName: "National College of Art and Design, Dublin",
    displayValue: "national-college-of-art-and-design-dublin",
  });

  static readonly NATIONAL_COLLEGE_OF_IRELAND_NCI_DUBLIN = new Location({
    id: "4331",
    displayName: "National College of Ireland NCI, Dublin",
    displayValue: "national-college-of-ireland-nci-dublin",
  });

  static readonly NATIONAL_MARITIME_COLLEGE_OF_IRELAND_CORK = new Location({
    id: "4363",
    displayName: "National Maritime College of Ireland, Cork",
    displayValue: "national-maritime-college-of-ireland-cork",
  });

  static readonly NATIONAL_UNIVERSITY_OF_IRELAND_GALWAY_NUIG_GALWAY =
    new Location({
      id: "4338",
      displayName: "National University of Ireland Galway NUIG, Galway",
      displayValue: "national-university-of-ireland-galway-nuig-galway",
    });

  static readonly NAUL_DUBLIN = new Location({
    id: "2173",
    displayName: "Naul, Dublin",
    displayValue: "naul-dublin",
  });

  static readonly NAUL_MEATH = new Location({
    id: "328",
    displayName: "Naul, Meath",
    displayValue: "naul-meath",
  });

  static readonly NAVAN_AND_SURROUNDS_MEATH = new Location({
    id: "4150",
    displayName: "Navan (& Surrounds), Meath",
    displayValue: "navan-and-surrounds-meath",
  });

  static readonly NAVAN_ROAD_D7_DUBLIN = new Location({
    id: "2174",
    displayName: "Navan Road (D7), Dublin",
    displayValue: "navan-road-d7-dublin",
  });

  static readonly NAVAN_MEATH = new Location({
    id: "330",
    displayName: "Navan, Meath",
    displayValue: "navan-meath",
  });

  static readonly NEALE_MAYO = new Location({
    id: "3100",
    displayName: "Neale, Mayo",
    displayValue: "neale-mayo",
  });

  static readonly NEALSTOWN_LAOIS = new Location({
    id: "2277",
    displayName: "Nealstown, Laois",
    displayValue: "nealstown-laois",
  });

  static readonly NENAGH_AND_SURROUNDS_TIPPERARY = new Location({
    id: "4152",
    displayName: "Nenagh (& Surrounds), Tipperary",
    displayValue: "nenagh-and-surrounds-tipperary",
  });

  static readonly NENAGH_TIPPERARY = new Location({
    id: "3606",
    displayName: "Nenagh, Tipperary",
    displayValue: "nenagh-tipperary",
  });

  static readonly NEW_BIRMINGHAM_TIPPERARY = new Location({
    id: "3607",
    displayName: "New Birmingham, Tipperary",
    displayValue: "new-birmingham-tipperary",
  });

  static readonly NEW_INN_CAVAN = new Location({
    id: "1532",
    displayName: "New Inn, Cavan",
    displayValue: "new-inn-cavan",
  });

  static readonly NEW_INN_GALWAY = new Location({
    id: "2630",
    displayName: "New Inn, Galway",
    displayValue: "new-inn-galway",
  });

  static readonly NEW_INN_TIPPERARY = new Location({
    id: "3610",
    displayName: "New Inn, Tipperary",
    displayValue: "new-inn-tipperary",
  });

  static readonly NEW_KILDIMO_LIMERICK = new Location({
    id: "3047",
    displayName: "New Kildimo, Limerick",
    displayValue: "new-kildimo-limerick",
  });

  static readonly NEW_LODGE_ANTRIM = new Location({
    id: "1412",
    displayName: "New Lodge, Antrim",
    displayValue: "new-lodge-antrim",
  });

  static readonly NEW_QUAY_CLARE = new Location({
    id: "1645",
    displayName: "New Quay, Clare",
    displayValue: "new-quay-clare",
  });

  static readonly NEW_ROSS_AND_SURROUNDS_WEXFORD = new Location({
    id: "4133",
    displayName: "New Ross (& Surrounds), Wexford",
    displayValue: "new-ross-and-surrounds-wexford",
  });

  static readonly NEW_ROSS_KILKENNY = new Location({
    id: "2826",
    displayName: "New Ross, Kilkenny",
    displayValue: "new-ross-kilkenny",
  });

  static readonly NEW_ROSS_WEXFORD = new Location({
    id: "3937",
    displayName: "New Ross, Wexford",
    displayValue: "new-ross-wexford",
  });

  static readonly NEWBARN_WEXFORD = new Location({
    id: "3934",
    displayName: "Newbarn, Wexford",
    displayValue: "newbarn-wexford",
  });

  static readonly NEWBAWN_WEXFORD = new Location({
    id: "3935",
    displayName: "Newbawn, Wexford",
    displayValue: "newbawn-wexford",
  });

  static readonly NEWBAY_WEXFORD = new Location({
    id: "3936",
    displayName: "Newbay, Wexford",
    displayValue: "newbay-wexford",
  });

  static readonly NEWBLISS_MONAGHAN = new Location({
    id: "509",
    displayName: "Newbliss, Monaghan",
    displayValue: "newbliss-monaghan",
  });

  static readonly NEWBRIDGE_AND_SURROUNDS_KILDARE = new Location({
    id: "4153",
    displayName: "Newbridge (& Surrounds), Kildare",
    displayValue: "newbridge-and-surrounds-kildare",
  });

  static readonly NEWBRIDGE_GALWAY = new Location({
    id: "2628",
    displayName: "Newbridge, Galway",
    displayValue: "newbridge-galway",
  });

  static readonly NEWBRIDGE_KILDARE = new Location({
    id: "2759",
    displayName: "Newbridge, Kildare",
    displayValue: "newbridge-kildare",
  });

  static readonly NEWBRIDGE_LIMERICK = new Location({
    id: "3045",
    displayName: "Newbridge, Limerick",
    displayValue: "newbridge-limerick",
  });

  static readonly NEWCASTLE_WEST_AND_SURROUNDS_LIMERICK = new Location({
    id: "4154",
    displayName: "Newcastle West (& Surrounds), Limerick",
    displayValue: "newcastle-west-and-surrounds-limerick",
  });

  static readonly NEWCASTLE_WEST_LIMERICK = new Location({
    id: "3046",
    displayName: "Newcastle West, Limerick",
    displayValue: "newcastle-west-limerick",
  });

  static readonly NEWCASTLE_DOWN = new Location({
    id: "2026",
    displayName: "Newcastle, Down",
    displayValue: "newcastle-down",
  });

  static readonly NEWCASTLE_DUBLIN = new Location({
    id: "2175",
    displayName: "Newcastle, Dublin",
    displayValue: "newcastle-dublin",
  });

  static readonly NEWCASTLE_GALWAY = new Location({
    id: "2629",
    displayName: "Newcastle, Galway",
    displayValue: "newcastle-galway",
  });

  static readonly NEWCASTLE_TIPPERARY = new Location({
    id: "3608",
    displayName: "Newcastle, Tipperary",
    displayValue: "newcastle-tipperary",
  });

  static readonly NEWCASTLE_WICKLOW = new Location({
    id: "4037",
    displayName: "Newcastle, Wicklow",
    displayValue: "newcastle-wicklow",
  });

  static readonly NEWCESTOWN_CORK = new Location({
    id: "565",
    displayName: "Newcestown, Cork",
    displayValue: "newcestown-cork",
  });

  static readonly NEWCHAPEL_TIPPERARY = new Location({
    id: "3609",
    displayName: "Newchapel, Tipperary",
    displayValue: "newchapel-tipperary",
  });

  static readonly NEWMARKET_ON_FERGUS_CLARE = new Location({
    id: "1644",
    displayName: "Newmarket on Fergus, Clare",
    displayValue: "newmarket-on-fergus-clare",
  });

  static readonly NEWMARKET_CORK = new Location({
    id: "566",
    displayName: "Newmarket, Cork",
    displayValue: "newmarket-cork",
  });

  static readonly NEWMARKET_KILKENNY = new Location({
    id: "2825",
    displayName: "Newmarket, Kilkenny",
    displayValue: "newmarket-kilkenny",
  });

  static readonly NEWMILLS_DONEGAL = new Location({
    id: "1009",
    displayName: "Newmills, Donegal",
    displayValue: "newmills-donegal",
  });

  static readonly NEWMILLS_TYRONE = new Location({
    id: "3674",
    displayName: "Newmills, Tyrone",
    displayValue: "newmills-tyrone",
  });

  static readonly NEWPARK_MUSIC_CENTRE_DUBLIN = new Location({
    id: "4361",
    displayName: "Newpark Music Centre, Dublin",
    displayValue: "newpark-music-centre-dublin",
  });

  static readonly NEWPORT_MAYO = new Location({
    id: "3101",
    displayName: "Newport, Mayo",
    displayValue: "newport-mayo",
  });

  static readonly NEWPORT_TIPPERARY = new Location({
    id: "3611",
    displayName: "Newport, Tipperary",
    displayValue: "newport-tipperary",
  });

  static readonly NEWRY_DOWN = new Location({
    id: "2027",
    displayName: "Newry, Down",
    displayValue: "newry-down",
  });

  static readonly NEWTOWN_CLOGHANS_MAYO = new Location({
    id: "3102",
    displayName: "Newtown Cloghans, Mayo",
    displayValue: "newtown-cloghans-mayo",
  });

  static readonly NEWTOWN_CUNNINGHAM_DONEGAL = new Location({
    id: "1010",
    displayName: "Newtown Cunningham, Donegal",
    displayValue: "newtown-cunningham-donegal",
  });

  static readonly NEWTOWN_CARLOW = new Location({
    id: "1478",
    displayName: "Newtown, Carlow",
    displayValue: "newtown-carlow",
  });

  static readonly NEWTOWN_CORK = new Location({
    id: "844",
    displayName: "Newtown, Cork",
    displayValue: "newtown-cork",
  });

  static readonly NEWTOWN_GALWAY = new Location({
    id: "2631",
    displayName: "Newtown, Galway",
    displayValue: "newtown-galway",
  });

  static readonly NEWTOWN_KERRY = new Location({
    id: "770",
    displayName: "Newtown, Kerry",
    displayValue: "newtown-kerry",
  });

  static readonly NEWTOWN_KILDARE = new Location({
    id: "2760",
    displayName: "Newtown, Kildare",
    displayValue: "newtown-kildare",
  });

  static readonly NEWTOWN_LAOIS = new Location({
    id: "2278",
    displayName: "Newtown, Laois",
    displayValue: "newtown-laois",
  });

  static readonly NEWTOWN_LIMERICK = new Location({
    id: "3049",
    displayName: "Newtown, Limerick",
    displayValue: "newtown-limerick",
  });

  static readonly NEWTOWN_OFFALY = new Location({
    id: "3374",
    displayName: "Newtown, Offaly",
    displayValue: "newtown-offaly",
  });

  static readonly NEWTOWN_ROSCOMMON = new Location({
    id: "2100",
    displayName: "Newtown, Roscommon",
    displayValue: "newtown-roscommon",
  });

  static readonly NEWTOWN_TIPPERARY = new Location({
    id: "3612",
    displayName: "Newtown, Tipperary",
    displayValue: "newtown-tipperary",
  });

  static readonly NEWTOWN_WATERFORD = new Location({
    id: "3742",
    displayName: "Newtown, Waterford",
    displayValue: "newtown-waterford",
  });

  static readonly NEWTOWN_WEXFORD = new Location({
    id: "3938",
    displayName: "Newtown, Wexford",
    displayValue: "newtown-wexford",
  });

  static readonly NEWTOWNABBEY_ANTRIM = new Location({
    id: "1413",
    displayName: "Newtownabbey, Antrim",
    displayValue: "newtownabbey-antrim",
  });

  static readonly NEWTOWNARDS_DOWN = new Location({
    id: "131",
    displayName: "Newtownards, Down",
    displayValue: "newtownards-down",
  });

  static readonly NEWTOWNBREDA_DOWN = new Location({
    id: "132",
    displayName: "Newtownbreda, Down",
    displayValue: "newtownbreda-down",
  });

  static readonly NEWTOWNBUTLER_FERMANAGH = new Location({
    id: "2204",
    displayName: "Newtownbutler, Fermanagh",
    displayValue: "newtownbutler-fermanagh",
  });

  static readonly NEWTOWNCASHEL_LONGFORD = new Location({
    id: "3004",
    displayName: "Newtowncashel, Longford",
    displayValue: "newtowncashel-longford",
  });

  static readonly NEWTOWNFORBES_LONGFORD = new Location({
    id: "3005",
    displayName: "Newtownforbes, Longford",
    displayValue: "newtownforbes-longford",
  });

  static readonly NEWTOWNGORE_LEITRIM = new Location({
    id: "2599",
    displayName: "Newtowngore, Leitrim",
    displayValue: "newtowngore-leitrim",
  });

  static readonly NEWTOWNHAMILTON_ARMAGH = new Location({
    id: "1201",
    displayName: "Newtownhamilton, Armagh",
    displayValue: "newtownhamilton-armagh",
  });

  static readonly NEWTOWNLOW_WESTMEATH = new Location({
    id: "3797",
    displayName: "Newtownlow, Westmeath",
    displayValue: "newtownlow-westmeath",
  });

  static readonly NEWTOWNLYNCH_GALWAY = new Location({
    id: "2632",
    displayName: "Newtownlynch, Galway",
    displayValue: "newtownlynch-galway",
  });

  static readonly NEWTOWNMOUNTKENNEDY_WICKLOW = new Location({
    id: "4038",
    displayName: "Newtownmountkennedy, Wicklow",
    displayValue: "newtownmountkennedy-wicklow",
  });

  static readonly NEWTOWNSHANDRUM_CORK = new Location({
    id: "846",
    displayName: "Newtownshandrum, Cork",
    displayValue: "newtownshandrum-cork",
  });

  static readonly NEWTOWNSTEWART_TYRONE = new Location({
    id: "3675",
    displayName: "Newtownstewart, Tyrone",
    displayValue: "newtownstewart-tyrone",
  });

  static readonly NEWTWOPOTHOUSE_CORK = new Location({
    id: "449",
    displayName: "Newtwopothouse, Cork",
    displayValue: "newtwopothouse-cork",
  });

  static readonly NINEMILEHOUSE_TIPPERARY = new Location({
    id: "3613",
    displayName: "Ninemilehouse, Tipperary",
    displayValue: "ninemilehouse-tipperary",
  });

  static readonly NOBBER_MEATH = new Location({
    id: "331",
    displayName: "Nobber, Meath",
    displayValue: "nobber-meath",
  });

  static readonly NOHOVAL_CORK = new Location({
    id: "851",
    displayName: "Nohoval, Cork",
    displayValue: "nohoval-cork",
  });

  static readonly NORTH_BELFAST_CITY_ANTRIM = new Location({
    id: "56",
    displayName: "North Belfast City, Antrim",
    displayValue: "north-belfast-city-antrim",
  });

  static readonly NORTH_CIRCULAR_ROAD_DUBLIN = new Location({
    id: "2176",
    displayName: "North Circular Road, Dublin",
    displayValue: "north-circular-road-dublin",
  });

  static readonly NORTH_CIRCULAR_ROAD_LIMERICK = new Location({
    id: "3050",
    displayName: "North Circular Road, Limerick",
    displayValue: "north-circular-road-limerick",
  });

  static readonly NORTH_CO_DUBLIN_DUBLIN = new Location({
    id: "42",
    displayName: "North Co. Dublin, Dublin",
    displayValue: "north-co-dublin-dublin",
  });

  static readonly NORTH_DUBLIN_CITY_DUBLIN = new Location({
    id: "40",
    displayName: "North Dublin City, Dublin",
    displayValue: "north-dublin-city-dublin",
  });

  static readonly NORTH_RING_CORK = new Location({
    id: "450",
    displayName: "North Ring, Cork",
    displayValue: "north-ring-cork",
  });

  static readonly NORTH_STRAND_DUBLIN = new Location({
    id: "2197",
    displayName: "North Strand, Dublin",
    displayValue: "north-strand-dublin",
  });

  static readonly NORTH_WALL_DUBLIN = new Location({
    id: "2198",
    displayName: "North Wall, Dublin",
    displayValue: "north-wall-dublin",
  });

  static readonly NOUGHAVAL_CLARE = new Location({
    id: "1646",
    displayName: "Noughaval, Clare",
    displayValue: "noughaval-clare",
  });

  static readonly NUN_S_ISLAND_GALWAY = new Location({
    id: "2637",
    displayName: "Nun's Island, Galway",
    displayValue: "nun-s-island-galway",
  });

  static readonly NURNEY_CARLOW = new Location({
    id: "1479",
    displayName: "Nurney, Carlow",
    displayValue: "nurney-carlow",
  });

  static readonly NURNEY_KILDARE = new Location({
    id: "2700",
    displayName: "Nurney, Kildare",
    displayValue: "nurney-kildare",
  });

  static readonly NUTT_S_CORNER_ANTRIM = new Location({
    id: "170",
    displayName: "Nutt's Corner, Antrim",
    displayValue: "nutt-s-corner-antrim",
  });

  static readonly O_BRIENSBRIDGE_CLARE = new Location({
    id: "1647",
    displayName: "O'Briensbridge, Clare",
    displayValue: "o-briensbridge-clare",
  });

  static readonly O_CALLAGHANS_MILLS_CLARE = new Location({
    id: "1648",
    displayName: "O'Callaghans Mills, Clare",
    displayValue: "o-callaghans-mills-clare",
  });

  static readonly OAGHLEY_KERRY = new Location({
    id: "771",
    displayName: "Oaghley, Kerry",
    displayValue: "oaghley-kerry",
  });

  static readonly OAK_PARK_CARLOW = new Location({
    id: "1480",
    displayName: "Oak Park, Carlow",
    displayValue: "oak-park-carlow",
  });

  static readonly OATFIELD_CLARE = new Location({
    id: "321",
    displayName: "Oatfield, Clare",
    displayValue: "oatfield-clare",
  });

  static readonly OATQUARTER_GALWAY = new Location({
    id: "2638",
    displayName: "Oatquarter, Galway",
    displayValue: "oatquarter-galway",
  });

  static readonly OGHIL_GALWAY = new Location({
    id: "2639",
    displayName: "Oghil, Galway",
    displayValue: "oghil-galway",
  });

  static readonly OGONELLOE_CLARE = new Location({
    id: "1649",
    displayName: "Ogonelloe, Clare",
    displayValue: "ogonelloe-clare",
  });

  static readonly OILGATE_WEXFORD = new Location({
    id: "3939",
    displayName: "Oilgate, Wexford",
    displayValue: "oilgate-wexford",
  });

  static readonly OLD_CONNAUGHT_DUBLIN = new Location({
    id: "1099",
    displayName: "Old Connaught, Dublin",
    displayValue: "old-connaught-dublin",
  });

  static readonly OLD_COURT_CORK = new Location({
    id: "451",
    displayName: "Old Court, Cork",
    displayValue: "old-court-cork",
  });

  static readonly OLD_HEAD_CORK = new Location({
    id: "852",
    displayName: "Old Head, Cork",
    displayValue: "old-head-cork",
  });

  static readonly OLD_KILCULLEN_KILDARE = new Location({
    id: "2701",
    displayName: "Old Kilcullen, Kildare",
    displayValue: "old-kilcullen-kildare",
  });

  static readonly OLD_KILDIMO_LIMERICK = new Location({
    id: "3051",
    displayName: "Old Kildimo, Limerick",
    displayValue: "old-kildimo-limerick",
  });

  static readonly OLD_PARISH_WATERFORD = new Location({
    id: "3743",
    displayName: "Old Parish, Waterford",
    displayValue: "old-parish-waterford",
  });

  static readonly OLD_ROSS_WEXFORD = new Location({
    id: "3940",
    displayName: "Old Ross, Wexford",
    displayValue: "old-ross-wexford",
  });

  static readonly OLD_TOWN_DONEGAL = new Location({
    id: "1011",
    displayName: "Old Town, Donegal",
    displayValue: "old-town-donegal",
  });

  static readonly OLD_TOWN_LAOIS = new Location({
    id: "847",
    displayName: "Old Town, Laois",
    displayValue: "old-town-laois",
  });

  static readonly OLD_TOWN_ROSCOMMON = new Location({
    id: "1121",
    displayName: "Old Town, Roscommon",
    displayValue: "old-town-roscommon",
  });

  static readonly OLD_TOWN_WEXFORD = new Location({
    id: "1286",
    displayName: "Old Town, Wexford",
    displayValue: "old-town-wexford",
  });

  static readonly OLD_TWOPOLDOUSE_CORK = new Location({
    id: "853",
    displayName: "Old Twopoldouse, Cork",
    displayValue: "old-twopoldouse-cork",
  });

  static readonly OLDBAWN_DUBLIN = new Location({
    id: "2199",
    displayName: "Oldbawn, Dublin",
    displayValue: "oldbawn-dublin",
  });

  static readonly OLDCASTLE_CAVAN = new Location({
    id: "279",
    displayName: "Oldcastle, Cavan",
    displayValue: "oldcastle-cavan",
  });

  static readonly OLDCASTLE_MEATH = new Location({
    id: "332",
    displayName: "Oldcastle, Meath",
    displayValue: "oldcastle-meath",
  });

  static readonly OLDCOURT_WICKLOW = new Location({
    id: "4039",
    displayName: "Oldcourt, Wicklow",
    displayValue: "oldcourt-wicklow",
  });

  static readonly OLDLEIGHLIN_CARLOW = new Location({
    id: "1481",
    displayName: "Oldleighlin, Carlow",
    displayValue: "oldleighlin-carlow",
  });

  static readonly OLDPARK_ANTRIM = new Location({
    id: "171",
    displayName: "Oldpark, Antrim",
    displayValue: "oldpark-antrim",
  });

  static readonly OLDTOWN_DUBLIN = new Location({
    id: "2200",
    displayName: "Oldtown, Dublin",
    displayValue: "oldtown-dublin",
  });

  static readonly OLDTOWN_ROSCOMMON = new Location({
    id: "2101",
    displayName: "Oldtown, Roscommon",
    displayValue: "oldtown-roscommon",
  });

  static readonly OMAGH_TYRONE = new Location({
    id: "3676",
    displayName: "Omagh, Tyrone",
    displayValue: "omagh-tyrone",
  });

  static readonly OMEATH_LOUTH = new Location({
    id: "3070",
    displayName: "Omeath, Louth",
    displayValue: "omeath-louth",
  });

  static readonly ONAGHT_GALWAY = new Location({
    id: "2640",
    displayName: "Onaght, Galway",
    displayValue: "onaght-galway",
  });

  static readonly ONGAR_DUBLIN = new Location({
    id: "693",
    displayName: "Ongar, Dublin",
    displayValue: "ongar-dublin",
  });

  static readonly OOLA_LIMERICK = new Location({
    id: "3052",
    displayName: "Oola, Limerick",
    displayValue: "oola-limerick",
  });

  static readonly OOLA_TIPPERARY = new Location({
    id: "3614",
    displayName: "Oola, Tipperary",
    displayValue: "oola-tipperary",
  });

  static readonly ORANGEFIELD_DOWN = new Location({
    id: "133",
    displayName: "Orangefield, Down",
    displayValue: "orangefield-down",
  });

  static readonly ORANHILL_GALWAY = new Location({
    id: "2641",
    displayName: "Oranhill, Galway",
    displayValue: "oranhill-galway",
  });

  static readonly ORANMORE_AND_SURROUNDS_GALWAY = new Location({
    id: "4142",
    displayName: "Oranmore (& Surrounds), Galway",
    displayValue: "oranmore-and-surrounds-galway",
  });

  static readonly ORANMORE_GALWAY = new Location({
    id: "2642",
    displayName: "Oranmore, Galway",
    displayValue: "oranmore-galway",
  });

  static readonly ORISTOWN_MEATH = new Location({
    id: "333",
    displayName: "Oristown, Meath",
    displayValue: "oristown-meath",
  });

  static readonly ORMEAU_ANTRIM = new Location({
    id: "172",
    displayName: "Ormeau, Antrim",
    displayValue: "ormeau-antrim",
  });

  static readonly ORMEAU_DOWN = new Location({
    id: "134",
    displayName: "Ormeau, Down",
    displayValue: "ormeau-down",
  });

  static readonly OUGHTERARD_GALWAY = new Location({
    id: "2643",
    displayName: "Oughterard, Galway",
    displayValue: "oughterard-galway",
  });

  static readonly OULART_WEXFORD = new Location({
    id: "3941",
    displayName: "Oulart, Wexford",
    displayValue: "oulart-wexford",
  });

  static readonly OVENS_CORK = new Location({
    id: "854",
    displayName: "Ovens, Cork",
    displayValue: "ovens-cork",
  });

  static readonly OWENBEG_SLIGO = new Location({
    id: "1170",
    displayName: "Owenbeg, Sligo",
    displayValue: "owenbeg-sligo",
  });

  static readonly OWENBRISTY_GALWAY = new Location({
    id: "1123",
    displayName: "Owenbristy, Galway",
    displayValue: "owenbristy-galway",
  });

  static readonly OWENMORE_BRIDGE_MAYO = new Location({
    id: "1028",
    displayName: "Owenmore Bridge, Mayo",
    displayValue: "owenmore-bridge-mayo",
  });

  static readonly OWER_GALWAY = new Location({
    id: "2644",
    displayName: "Ower, Galway",
    displayValue: "ower-galway",
  });

  static readonly OWNAHINCHA_CORK = new Location({
    id: "855",
    displayName: "Ownahincha, Cork",
    displayValue: "ownahincha-cork",
  });

  static readonly OWNING_KILKENNY = new Location({
    id: "232",
    displayName: "Owning, Kilkenny",
    displayValue: "owning-kilkenny",
  });

  static readonly OYSTERHAVEN_CORK = new Location({
    id: "856",
    displayName: "Oysterhaven, Cork",
    displayValue: "oysterhaven-cork",
  });

  static readonly PALACE_WEXFORD = new Location({
    id: "3942",
    displayName: "Palace, Wexford",
    displayValue: "palace-wexford",
  });

  static readonly PALATINE_CARLOW = new Location({
    id: "1482",
    displayName: "Palatine, Carlow",
    displayValue: "palatine-carlow",
  });

  static readonly PALLAS_CROSS_TIPPERARY = new Location({
    id: "87",
    displayName: "Pallas Cross, Tipperary",
    displayValue: "pallas-cross-tipperary",
  });

  static readonly PALLAS_LAOIS = new Location({
    id: "2279",
    displayName: "Pallas, Laois",
    displayValue: "pallas-laois",
  });

  static readonly PALLASGREEN_LIMERICK = new Location({
    id: "3053",
    displayName: "Pallasgreen, Limerick",
    displayValue: "pallasgreen-limerick",
  });

  static readonly PALLASKENRY_LIMERICK = new Location({
    id: "3054",
    displayName: "Pallaskenry, Limerick",
    displayValue: "pallaskenry-limerick",
  });

  static readonly PALMERSTOWN_DUBLIN = new Location({
    id: "694",
    displayName: "Palmerstown, Dublin",
    displayValue: "palmerstown-dublin",
  });

  static readonly PARK_WEST_DUBLIN = new Location({
    id: "2212",
    displayName: "Park West, Dublin",
    displayValue: "park-west-dublin",
  });

  static readonly PARK_DERRY = new Location({
    id: "1298",
    displayName: "Park, Derry",
    displayValue: "park-derry",
  });

  static readonly PARKGATE_ANTRIM = new Location({
    id: "173",
    displayName: "Parkgate, Antrim",
    displayValue: "parkgate-antrim",
  });

  static readonly PARKMORE_GALWAY = new Location({
    id: "1767",
    displayName: "Parkmore, Galway",
    displayValue: "parkmore-galway",
  });

  static readonly PARKNASILLA_KERRY = new Location({
    id: "772",
    displayName: "Parknasilla, Kerry",
    displayValue: "parknasilla-kerry",
  });

  static readonly PARSONSTOWN_MEATH = new Location({
    id: "1084",
    displayName: "Parsonstown, Meath",
    displayValue: "parsonstown-meath",
  });

  static readonly PARTEEN_CLARE = new Location({
    id: "1650",
    displayName: "Parteen, Clare",
    displayValue: "parteen-clare",
  });

  static readonly PARTRY_MAYO = new Location({
    id: "3104",
    displayName: "Partry, Mayo",
    displayValue: "partry-mayo",
  });

  static readonly PASSAGE_EAST_WATERFORD = new Location({
    id: "3744",
    displayName: "Passage East, Waterford",
    displayValue: "passage-east-waterford",
  });

  static readonly PASSAGE_WEST_AND_SURROUNDS_CORK = new Location({
    id: "4155",
    displayName: "Passage West (& Surrounds), Cork",
    displayValue: "passage-west-and-surrounds-cork",
  });

  static readonly PASSAGE_WEST_CORK = new Location({
    id: "857",
    displayName: "Passage West, Cork",
    displayValue: "passage-west-cork",
  });

  static readonly PASSAGE_ROSCOMMON = new Location({
    id: "1127",
    displayName: "Passage, Roscommon",
    displayValue: "passage-roscommon",
  });

  static readonly PATRICKSWELL_LIMERICK = new Location({
    id: "3055",
    displayName: "Patrickswell, Limerick",
    displayValue: "patrickswell-limerick",
  });

  static readonly PAUGHNSTOWN_LOUTH = new Location({
    id: "3075",
    displayName: "Paughnstown, Louth",
    displayValue: "paughnstown-louth",
  });

  static readonly PAULSTOWN_KILKENNY = new Location({
    id: "233",
    displayName: "Paulstown, Kilkenny",
    displayValue: "paulstown-kilkenny",
  });

  static readonly PEAKE_CORK = new Location({
    id: "858",
    displayName: "Peake, Cork",
    displayValue: "peake-cork",
  });

  static readonly PENNYWELL_LIMERICK = new Location({
    id: "3071",
    displayName: "Pennywell, Limerick",
    displayValue: "pennywell-limerick",
  });

  static readonly PERRYSTOWN_DUBLIN = new Location({
    id: "2223",
    displayName: "Perrystown, Dublin",
    displayValue: "perrystown-dublin",
  });

  static readonly PETERSWELL_GALWAY = new Location({
    id: "1768",
    displayName: "Peterswell, Galway",
    displayValue: "peterswell-galway",
  });

  static readonly PETTIGO_DONEGAL = new Location({
    id: "1012",
    displayName: "Pettigo, Donegal",
    displayValue: "pettigo-donegal",
  });

  static readonly PETTIGO_FERMANAGH = new Location({
    id: "664",
    displayName: "Pettigo, Fermanagh",
    displayValue: "pettigo-fermanagh",
  });

  static readonly PHIBSBOROUGH_DUBLIN = new Location({
    id: "2224",
    displayName: "Phibsborough, Dublin",
    displayValue: "phibsborough-dublin",
  });

  static readonly PIERCESTOWN_WEXFORD = new Location({
    id: "3943",
    displayName: "Piercestown, Wexford",
    displayValue: "piercestown-wexford",
  });

  static readonly PIKE_CORNER_MEATH = new Location({
    id: "1085",
    displayName: "Pike Corner, Meath",
    displayValue: "pike-corner-meath",
  });

  static readonly PIKE_OF_RUSH_HALL_LAOIS = new Location({
    id: "2280",
    displayName: "Pike of Rush Hall, Laois",
    displayValue: "pike-of-rush-hall-laois",
  });

  static readonly PIKE_TIPPERARY = new Location({
    id: "88",
    displayName: "Pike, Tipperary",
    displayValue: "pike-tipperary",
  });

  static readonly PILTOWN_KILKENNY = new Location({
    id: "234",
    displayName: "Piltown, Kilkenny",
    displayValue: "piltown-kilkenny",
  });

  static readonly PLUCK_DONEGAL = new Location({
    id: "588",
    displayName: "Pluck, Donegal",
    displayValue: "pluck-donegal",
  });

  static readonly PLUMBRIDGE_TYRONE = new Location({
    id: "3677",
    displayName: "Plumbridge, Tyrone",
    displayValue: "plumbridge-tyrone",
  });

  static readonly POLEGLASS_ANTRIM = new Location({
    id: "174",
    displayName: "Poleglass, Antrim",
    displayValue: "poleglass-antrim",
  });

  static readonly POLLAGH_OFFALY = new Location({
    id: "3375",
    displayName: "Pollagh, Offaly",
    displayValue: "pollagh-offaly",
  });

  static readonly POLLARDSTOWN_KILDARE = new Location({
    id: "2702",
    displayName: "Pollardstown, Kildare",
    displayValue: "pollardstown-kildare",
  });

  static readonly POLLATOMISH_MAYO = new Location({
    id: "3105",
    displayName: "Pollatomish, Mayo",
    displayValue: "pollatomish-mayo",
  });

  static readonly POLLERTON_CARLOW = new Location({
    id: "1483",
    displayName: "Pollerton, Carlow",
    displayValue: "pollerton-carlow",
  });

  static readonly POLLNAROOMA_GALWAY = new Location({
    id: "1769",
    displayName: "Pollnarooma, Galway",
    displayValue: "pollnarooma-galway",
  });

  static readonly POLLSHASK_GALWAY = new Location({
    id: "1129",
    displayName: "Pollshask, Galway",
    displayValue: "pollshask-galway",
  });

  static readonly POMEROY_TYRONE = new Location({
    id: "3678",
    displayName: "Pomeroy, Tyrone",
    displayValue: "pomeroy-tyrone",
  });

  static readonly PONTOON_MAYO = new Location({
    id: "3106",
    displayName: "Pontoon, Mayo",
    displayValue: "pontoon-mayo",
  });

  static readonly POPPINTREE_DUBLIN = new Location({
    id: "2225",
    displayName: "Poppintree, Dublin",
    displayValue: "poppintree-dublin",
  });

  static readonly PORT_BALLINTRAE_ANTRIM = new Location({
    id: "175",
    displayName: "Port Ballintrae, Antrim",
    displayValue: "port-ballintrae-antrim",
  });

  static readonly PORT_DONEGAL = new Location({
    id: "590",
    displayName: "Port, Donegal",
    displayValue: "port-donegal",
  });

  static readonly PORT_LOUTH = new Location({
    id: "3076",
    displayName: "Port, Louth",
    displayValue: "port-louth",
  });

  static readonly PORTACLOY_MAYO = new Location({
    id: "3107",
    displayName: "Portacloy, Mayo",
    displayValue: "portacloy-mayo",
  });

  static readonly PORTADOWN_ARMAGH = new Location({
    id: "1469",
    displayName: "Portadown, Armagh",
    displayValue: "portadown-armagh",
  });

  static readonly PORTAFERRY_DOWN = new Location({
    id: "139",
    displayName: "Portaferry, Down",
    displayValue: "portaferry-down",
  });

  static readonly PORTALEEN_DONEGAL = new Location({
    id: "591",
    displayName: "Portaleen, Donegal",
    displayValue: "portaleen-donegal",
  });

  static readonly PORTARLINGTON_AND_SURROUNDS_LAOIS = new Location({
    id: "4156",
    displayName: "Portarlington (& Surrounds), Laois",
    displayValue: "portarlington-and-surrounds-laois",
  });

  static readonly PORTARLINGTON_AND_SURROUNDS_OFFALY = new Location({
    id: "4157",
    displayName: "Portarlington (& Surrounds), Offaly",
    displayValue: "portarlington-and-surrounds-offaly",
  });

  static readonly PORTARLINGTON_LAOIS = new Location({
    id: "2281",
    displayName: "Portarlington, Laois",
    displayValue: "portarlington-laois",
  });

  static readonly PORTARLINGTON_OFFALY = new Location({
    id: "3376",
    displayName: "Portarlington, Offaly",
    displayValue: "portarlington-offaly",
  });

  static readonly PORTAVOGIE_DOWN = new Location({
    id: "140",
    displayName: "Portavogie, Down",
    displayValue: "portavogie-down",
  });

  static readonly PORTDRINE_CLARE = new Location({
    id: "1651",
    displayName: "Portdrine, Clare",
    displayValue: "portdrine-clare",
  });

  static readonly PORTERSTOWN_DUBLIN = new Location({
    id: "2226",
    displayName: "Porterstown, Dublin",
    displayValue: "porterstown-dublin",
  });

  static readonly PORTGLENONE_ANTRIM = new Location({
    id: "176",
    displayName: "Portglenone, Antrim",
    displayValue: "portglenone-antrim",
  });

  static readonly PORTGLENONE_DERRY = new Location({
    id: "515",
    displayName: "Portglenone, Derry",
    displayValue: "portglenone-derry",
  });

  static readonly PORTLAND_TIPPERARY = new Location({
    id: "3615",
    displayName: "Portland, Tipperary",
    displayValue: "portland-tipperary",
  });

  static readonly PORTLAOISE_AND_SURROUNDS_LAOIS = new Location({
    id: "4158",
    displayName: "Portlaoise (& Surrounds), Laois",
    displayValue: "portlaoise-and-surrounds-laois",
  });

  static readonly PORTLAOISE_LAOIS = new Location({
    id: "2282",
    displayName: "Portlaoise, Laois",
    displayValue: "portlaoise-laois",
  });

  static readonly PORTLAW_WATERFORD = new Location({
    id: "3745",
    displayName: "Portlaw, Waterford",
    displayValue: "portlaw-waterford",
  });

  static readonly PORTMAGEE_KERRY = new Location({
    id: "2450",
    displayName: "Portmagee, Kerry",
    displayValue: "portmagee-kerry",
  });

  static readonly PORTMARNOCK_DUBLIN = new Location({
    id: "2227",
    displayName: "Portmarnock, Dublin",
    displayValue: "portmarnock-dublin",
  });

  static readonly PORTNABLAGH_DONEGAL = new Location({
    id: "1013",
    displayName: "Portnablagh, Donegal",
    displayValue: "portnablagh-donegal",
  });

  static readonly PORTNOO_DONEGAL = new Location({
    id: "1014",
    displayName: "Portnoo, Donegal",
    displayValue: "portnoo-donegal",
  });

  static readonly PORTOBELLO_INSTITUTE_DUBLIN = new Location({
    id: "4370",
    displayName: "Portobello Institute, Dublin",
    displayValue: "portobello-institute-dublin",
  });

  static readonly PORTOBELLO_DUBLIN = new Location({
    id: "2246",
    displayName: "Portobello, Dublin",
    displayValue: "portobello-dublin",
  });

  static readonly PORTRANE_DUBLIN = new Location({
    id: "1890",
    displayName: "Portrane, Dublin",
    displayValue: "portrane-dublin",
  });

  static readonly PORTROE_TIPPERARY = new Location({
    id: "3616",
    displayName: "Portroe, Tipperary",
    displayValue: "portroe-tipperary",
  });

  static readonly PORTRUNNY_ROSCOMMON = new Location({
    id: "2102",
    displayName: "Portrunny, Roscommon",
    displayValue: "portrunny-roscommon",
  });

  static readonly PORTRUSH_ANTRIM = new Location({
    id: "177",
    displayName: "Portrush, Antrim",
    displayValue: "portrush-antrim",
  });

  static readonly PORTSALON_DONEGAL = new Location({
    id: "1015",
    displayName: "Portsalon, Donegal",
    displayValue: "portsalon-donegal",
  });

  static readonly PORTSTEWART_DERRY = new Location({
    id: "516",
    displayName: "Portstewart, Derry",
    displayValue: "portstewart-derry",
  });

  static readonly PORTUMNA_GALWAY = new Location({
    id: "1770",
    displayName: "Portumna, Galway",
    displayValue: "portumna-galway",
  });

  static readonly PORTURLIN_MAYO = new Location({
    id: "3108",
    displayName: "Porturlin, Mayo",
    displayValue: "porturlin-mayo",
  });

  static readonly POULADUFF_CORK = new Location({
    id: "870",
    displayName: "Pouladuff, Cork",
    displayValue: "pouladuff-cork",
  });

  static readonly POULMUCKA_TIPPERARY = new Location({
    id: "3617",
    displayName: "Poulmucka, Tipperary",
    displayValue: "poulmucka-tipperary",
  });

  static readonly POULSHONE_WEXFORD = new Location({
    id: "3951",
    displayName: "Poulshone, Wexford",
    displayValue: "poulshone-wexford",
  });

  static readonly POWER_S_CROSS_GALWAY = new Location({
    id: "1132",
    displayName: "Power's Cross, Galway",
    displayValue: "power-s-cross-galway",
  });

  static readonly POWERSTOWN_KILKENNY = new Location({
    id: "235",
    displayName: "Powerstown, Kilkenny",
    displayValue: "powerstown-kilkenny",
  });

  static readonly POYNTZ_PASS_ARMAGH = new Location({
    id: "1470",
    displayName: "Poyntz pass, Armagh",
    displayValue: "poyntz-pass-armagh",
  });

  static readonly PRIESTHAGGARD_WEXFORD = new Location({
    id: "3952",
    displayName: "Priesthaggard, Wexford",
    displayValue: "priesthaggard-wexford",
  });

  static readonly PRIORSWOOD_DUBLIN = new Location({
    id: "2257",
    displayName: "Priorswood, Dublin",
    displayValue: "priorswood-dublin",
  });

  static readonly PROSPECT_LIMERICK = new Location({
    id: "3072",
    displayName: "Prospect, Limerick",
    displayValue: "prospect-limerick",
  });

  static readonly PROSPEROUS_KILDARE = new Location({
    id: "2703",
    displayName: "Prosperous, Kildare",
    displayValue: "prosperous-kildare",
  });

  static readonly PUCKAUN_TIPPERARY = new Location({
    id: "3618",
    displayName: "Puckaun, Tipperary",
    displayValue: "puckaun-tipperary",
  });

  static readonly PULSE_COLLEGE_DUBLIN = new Location({
    id: "4379",
    displayName: "Pulse College, Dublin",
    displayValue: "pulse-college-dublin",
  });

  static readonly PUNCHESTOWN_KILDARE = new Location({
    id: "2704",
    displayName: "Punchestown, Kildare",
    displayValue: "punchestown-kildare",
  });

  static readonly QUEENS_UNIVERSITY_BELFAST_ANTRIM = new Location({
    id: "4354",
    displayName: "Queens University Belfast, Antrim",
    displayValue: "queens-university-belfast-antrim",
  });

  static readonly QUERRIN_CLARE = new Location({
    id: "1652",
    displayName: "Querrin, Clare",
    displayValue: "querrin-clare",
  });

  static readonly QUIGLEY_S_POINT_DONEGAL = new Location({
    id: "1016",
    displayName: "Quigley's Point, Donegal",
    displayValue: "quigley-s-point-donegal",
  });

  static readonly QUILTY_CLARE = new Location({
    id: "1653",
    displayName: "Quilty, Clare",
    displayValue: "quilty-clare",
  });

  static readonly QUIN_CLARE = new Location({
    id: "1654",
    displayName: "Quin, Clare",
    displayValue: "quin-clare",
  });

  static readonly RACE_END_DONEGAL = new Location({
    id: "1017",
    displayName: "Race End, Donegal",
    displayValue: "race-end-donegal",
  });

  static readonly RAFFREY_DOWN = new Location({
    id: "625",
    displayName: "Raffrey, Down",
    displayValue: "raffrey-down",
  });

  static readonly RAGHLY_SLIGO = new Location({
    id: "1920",
    displayName: "Raghly, Sligo",
    displayValue: "raghly-sligo",
  });

  static readonly RAHAN_OFFALY = new Location({
    id: "926",
    displayName: "Rahan, Offaly",
    displayValue: "rahan-offaly",
  });

  static readonly RAHANAGH_LIMERICK = new Location({
    id: "3073",
    displayName: "Rahanagh, Limerick",
    displayValue: "rahanagh-limerick",
  });

  static readonly RAHARA_ROSCOMMON = new Location({
    id: "2104",
    displayName: "Rahara, Roscommon",
    displayValue: "rahara-roscommon",
  });

  static readonly RAHARNEY_WESTMEATH = new Location({
    id: "3798",
    displayName: "Raharney, Westmeath",
    displayValue: "raharney-westmeath",
  });

  static readonly RAHEEN_CORK = new Location({
    id: "871",
    displayName: "Raheen, Cork",
    displayValue: "raheen-cork",
  });

  static readonly RAHEEN_LIMERICK = new Location({
    id: "3074",
    displayName: "Raheen, Limerick",
    displayValue: "raheen-limerick",
  });

  static readonly RAHEEN_WEXFORD = new Location({
    id: "3953",
    displayName: "Raheen, Wexford",
    displayValue: "raheen-wexford",
  });

  static readonly RAHENY_DUBLIN = new Location({
    id: "2258",
    displayName: "Raheny, Dublin",
    displayValue: "raheny-dublin",
  });

  static readonly RAHOON_GALWAY = new Location({
    id: "1771",
    displayName: "Rahoon, Galway",
    displayValue: "rahoon-galway",
  });

  static readonly RAIGH_GALWAY = new Location({
    id: "1130",
    displayName: "Raigh, Galway",
    displayValue: "raigh-galway",
  });

  static readonly RAILYARD_KILKENNY = new Location({
    id: "237",
    displayName: "Railyard, Kilkenny",
    displayValue: "railyard-kilkenny",
  });

  static readonly RAKE_STREET_MAYO = new Location({
    id: "3109",
    displayName: "Rake Street, Mayo",
    displayValue: "rake-street-mayo",
  });

  static readonly RAMELTON_DONEGAL = new Location({
    id: "1018",
    displayName: "Ramelton, Donegal",
    displayValue: "ramelton-donegal",
  });

  static readonly RAMSGRANGE_WEXFORD = new Location({
    id: "3954",
    displayName: "Ramsgrange, Wexford",
    displayValue: "ramsgrange-wexford",
  });

  static readonly RANDALSTOWN_ANTRIM = new Location({
    id: "179",
    displayName: "Randalstown, Antrim",
    displayValue: "randalstown-antrim",
  });

  static readonly RANELAGH_DUBLIN = new Location({
    id: "2259",
    displayName: "Ranelagh, Dublin",
    displayValue: "ranelagh-dublin",
  });

  static readonly RANSBORO_SLIGO = new Location({
    id: "1921",
    displayName: "Ransboro, Sligo",
    displayValue: "ransboro-sligo",
  });

  static readonly RAPEMILLS_OFFALY = new Location({
    id: "927",
    displayName: "Rapemills, Offaly",
    displayValue: "rapemills-offaly",
  });

  static readonly RAPHOE_DONEGAL = new Location({
    id: "1019",
    displayName: "Raphoe, Donegal",
    displayValue: "raphoe-donegal",
  });

  static readonly RASHARKIN_ANTRIM = new Location({
    id: "180",
    displayName: "Rasharkin, Antrim",
    displayValue: "rasharkin-antrim",
  });

  static readonly RASHEDOGE_DONEGAL = new Location({
    id: "592",
    displayName: "Rashedoge, Donegal",
    displayValue: "rashedoge-donegal",
  });

  static readonly RATH_LUIRC_CORK = new Location({
    id: "452",
    displayName: "Rath Luirc, Cork",
    displayValue: "rath-luirc-cork",
  });

  static readonly RATH_OFFALY = new Location({
    id: "929",
    displayName: "Rath, Offaly",
    displayValue: "rath-offaly",
  });

  static readonly RATHANGAN_KILDARE = new Location({
    id: "2705",
    displayName: "Rathangan, Kildare",
    displayValue: "rathangan-kildare",
  });

  static readonly RATHANGAN_WEXFORD = new Location({
    id: "3955",
    displayName: "Rathangan, Wexford",
    displayValue: "rathangan-wexford",
  });

  static readonly RATHARNEY_LONGFORD = new Location({
    id: "3006",
    displayName: "Ratharney, Longford",
    displayValue: "ratharney-longford",
  });

  static readonly RATHASPICK_WESTMEATH = new Location({
    id: "3799",
    displayName: "Rathaspick, Westmeath",
    displayValue: "rathaspick-westmeath",
  });

  static readonly RATHBANE_LIMERICK = new Location({
    id: "2961",
    displayName: "Rathbane, Limerick",
    displayValue: "rathbane-limerick",
  });

  static readonly RATHBRIT_TIPPERARY = new Location({
    id: "3619",
    displayName: "Rathbrit, Tipperary",
    displayValue: "rathbrit-tipperary",
  });

  static readonly RATHCABBIN_TIPPERARY = new Location({
    id: "3620",
    displayName: "Rathcabbin, Tipperary",
    displayValue: "rathcabbin-tipperary",
  });

  static readonly RATHCAIRN_MEATH = new Location({
    id: "3312",
    displayName: "Rathcairn, Meath",
    displayValue: "rathcairn-meath",
  });

  static readonly RATHCOFFEY_KILDARE = new Location({
    id: "2706",
    displayName: "Rathcoffey, Kildare",
    displayValue: "rathcoffey-kildare",
  });

  static readonly RATHCONRATH_WESTMEATH = new Location({
    id: "3800",
    displayName: "Rathconrath, Westmeath",
    displayValue: "rathconrath-westmeath",
  });

  static readonly RATHCOOL_CORK = new Location({
    id: "872",
    displayName: "Rathcool, Cork",
    displayValue: "rathcool-cork",
  });

  static readonly RATHCOOLE_AND_SURROUNDS_DUBLIN = new Location({
    id: "4160",
    displayName: "Rathcoole (& Surrounds), Dublin",
    displayValue: "rathcoole-and-surrounds-dublin",
  });

  static readonly RATHCOOLE_ANTRIM = new Location({
    id: "181",
    displayName: "Rathcoole, Antrim",
    displayValue: "rathcoole-antrim",
  });

  static readonly RATHCOOLE_DUBLIN = new Location({
    id: "2260",
    displayName: "Rathcoole, Dublin",
    displayValue: "rathcoole-dublin",
  });

  static readonly RATHCOR_LOUTH = new Location({
    id: "3077",
    displayName: "Rathcor, Louth",
    displayValue: "rathcor-louth",
  });

  static readonly RATHCORE_MEATH = new Location({
    id: "3313",
    displayName: "Rathcore, Meath",
    displayValue: "rathcore-meath",
  });

  static readonly RATHCORMAC_CORK = new Location({
    id: "873",
    displayName: "Rathcormac, Cork",
    displayValue: "rathcormac-cork",
  });

  static readonly RATHCORMAC_SLIGO = new Location({
    id: "1922",
    displayName: "Rathcormac, Sligo",
    displayValue: "rathcormac-sligo",
  });

  static readonly RATHCROGHAN_ROSCOMMON = new Location({
    id: "2109",
    displayName: "Rathcroghan, Roscommon",
    displayValue: "rathcroghan-roscommon",
  });

  static readonly RATHDANGAN_WICKLOW = new Location({
    id: "4040",
    displayName: "Rathdangan, Wicklow",
    displayValue: "rathdangan-wicklow",
  });

  static readonly RATHDOWNEY_LAOIS = new Location({
    id: "2283",
    displayName: "Rathdowney, Laois",
    displayValue: "rathdowney-laois",
  });

  static readonly RATHDRUM_WICKLOW = new Location({
    id: "4041",
    displayName: "Rathdrum, Wicklow",
    displayValue: "rathdrum-wicklow",
  });

  static readonly RATHDUFF_CORK = new Location({
    id: "875",
    displayName: "Rathduff, Cork",
    displayValue: "rathduff-cork",
  });

  static readonly RATHEDAN_CARLOW = new Location({
    id: "226",
    displayName: "Rathedan, Carlow",
    displayValue: "rathedan-carlow",
  });

  static readonly RATHFARNHAM_DUBLIN = new Location({
    id: "2261",
    displayName: "Rathfarnham, Dublin",
    displayValue: "rathfarnham-dublin",
  });

  static readonly RATHFEIGH_MEATH = new Location({
    id: "3314",
    displayName: "Rathfeigh, Meath",
    displayValue: "rathfeigh-meath",
  });

  static readonly RATHFRILAND_DOWN = new Location({
    id: "141",
    displayName: "Rathfriland, Down",
    displayValue: "rathfriland-down",
  });

  static readonly RATHFYLANE_WEXFORD = new Location({
    id: "3956",
    displayName: "Rathfylane, Wexford",
    displayValue: "rathfylane-wexford",
  });

  static readonly RATHGAR_DUBLIN = new Location({
    id: "2262",
    displayName: "Rathgar, Dublin",
    displayValue: "rathgar-dublin",
  });

  static readonly RATHGAROGUE_WEXFORD = new Location({
    id: "3957",
    displayName: "Rathgarogue, Wexford",
    displayValue: "rathgarogue-wexford",
  });

  static readonly RATHGORMACK_WATERFORD = new Location({
    id: "3746",
    displayName: "Rathgormack, Waterford",
    displayValue: "rathgormack-waterford",
  });

  static readonly RATHKEALE_AND_SURROUNDS_LIMERICK = new Location({
    id: "4161",
    displayName: "Rathkeale (& Surrounds), Limerick",
    displayValue: "rathkeale-and-surrounds-limerick",
  });

  static readonly RATHKEALE_LIMERICK = new Location({
    id: "2962",
    displayName: "Rathkeale, Limerick",
    displayValue: "rathkeale-limerick",
  });

  static readonly RATHKEEVIN_TIPPERARY = new Location({
    id: "3621",
    displayName: "Rathkeevin, Tipperary",
    displayValue: "rathkeevin-tipperary",
  });

  static readonly RATHKENNY_MEATH = new Location({
    id: "3315",
    displayName: "Rathkenny, Meath",
    displayValue: "rathkenny-meath",
  });

  static readonly RATHLACKAN_MAYO = new Location({
    id: "3110",
    displayName: "Rathlackan, Mayo",
    displayValue: "rathlackan-mayo",
  });

  static readonly RATHLEE_SLIGO = new Location({
    id: "1923",
    displayName: "Rathlee, Sligo",
    displayValue: "rathlee-sligo",
  });

  static readonly RATHMACULLIG_CORK = new Location({
    id: "876",
    displayName: "Rathmacullig, Cork",
    displayValue: "rathmacullig-cork",
  });

  static readonly RATHMICHAEL_DUBLIN = new Location({
    id: "2263",
    displayName: "Rathmichael, Dublin",
    displayValue: "rathmichael-dublin",
  });

  static readonly RATHMINES_DUBLIN = new Location({
    id: "2264",
    displayName: "Rathmines, Dublin",
    displayValue: "rathmines-dublin",
  });

  static readonly RATHMOLYON_MEATH = new Location({
    id: "3316",
    displayName: "Rathmolyon, Meath",
    displayValue: "rathmolyon-meath",
  });

  static readonly RATHMORE_KERRY = new Location({
    id: "2451",
    displayName: "Rathmore, Kerry",
    displayValue: "rathmore-kerry",
  });

  static readonly RATHMOYLE_KILKENNY = new Location({
    id: "238",
    displayName: "Rathmoyle, Kilkenny",
    displayValue: "rathmoyle-kilkenny",
  });

  static readonly RATHMULLAN_DONEGAL = new Location({
    id: "1021",
    displayName: "Rathmullan, Donegal",
    displayValue: "rathmullan-donegal",
  });

  static readonly RATHNEW_WICKLOW = new Location({
    id: "4042",
    displayName: "Rathnew, Wicklow",
    displayValue: "rathnew-wicklow",
  });

  static readonly RATHNURE_WEXFORD = new Location({
    id: "3958",
    displayName: "Rathnure, Wexford",
    displayValue: "rathnure-wexford",
  });

  static readonly RATHOE_CARLOW = new Location({
    id: "1484",
    displayName: "Rathoe, Carlow",
    displayValue: "rathoe-carlow",
  });

  static readonly RATHOMA_MAYO = new Location({
    id: "3111",
    displayName: "Rathoma, Mayo",
    displayValue: "rathoma-mayo",
  });

  static readonly RATHOWEN_WESTMEATH = new Location({
    id: "3801",
    displayName: "Rathowen, Westmeath",
    displayValue: "rathowen-westmeath",
  });

  static readonly RATHPEACON_CORK = new Location({
    id: "877",
    displayName: "Rathpeacon, Cork",
    displayValue: "rathpeacon-cork",
  });

  static readonly RATHVILLA_OFFALY = new Location({
    id: "930",
    displayName: "Rathvilla, Offaly",
    displayValue: "rathvilla-offaly",
  });

  static readonly RATHVILLY_CARLOW = new Location({
    id: "1485",
    displayName: "Rathvilly, Carlow",
    displayValue: "rathvilly-carlow",
  });

  static readonly RATOATH_AND_SURROUNDS_MEATH = new Location({
    id: "4162",
    displayName: "Ratoath (& Surrounds), Meath",
    displayValue: "ratoath-and-surrounds-meath",
  });

  static readonly RATOATH_MEATH = new Location({
    id: "3317",
    displayName: "Ratoath, Meath",
    displayValue: "ratoath-meath",
  });

  static readonly RAVENHILL_DOWN = new Location({
    id: "142",
    displayName: "Ravenhill, Down",
    displayValue: "ravenhill-down",
  });

  static readonly RAVENSDALE_LOUTH = new Location({
    id: "3078",
    displayName: "Ravensdale, Louth",
    displayValue: "ravensdale-louth",
  });

  static readonly RAY_DONEGAL = new Location({
    id: "593",
    displayName: "Ray, Donegal",
    displayValue: "ray-donegal",
  });

  static readonly REAGHSTOWN_LOUTH = new Location({
    id: "3079",
    displayName: "Reaghstown, Louth",
    displayValue: "reaghstown-louth",
  });

  static readonly REANANEREE_CORK = new Location({
    id: "453",
    displayName: "Reananeree, Cork",
    displayValue: "reananeree-cork",
  });

  static readonly REANASCREENA_CORK = new Location({
    id: "454",
    displayName: "Reanascreena, Cork",
    displayValue: "reanascreena-cork",
  });

  static readonly REARCROSS_TIPPERARY = new Location({
    id: "3622",
    displayName: "Rearcross, Tipperary",
    displayValue: "rearcross-tipperary",
  });

  static readonly RECESS_GALWAY = new Location({
    id: "1772",
    displayName: "Recess, Galway",
    displayValue: "recess-galway",
  });

  static readonly REDCASTLE_DONEGAL = new Location({
    id: "1024",
    displayName: "Redcastle, Donegal",
    displayValue: "redcastle-donegal",
  });

  static readonly REDCROSS_WICKLOW = new Location({
    id: "4043",
    displayName: "Redcross, Wicklow",
    displayValue: "redcross-wicklow",
  });

  static readonly REDDAN_S_WALK_TIPPERARY = new Location({
    id: "3623",
    displayName: "Reddan's Walk, Tipperary",
    displayValue: "reddan-s-walk-tipperary",
  });

  static readonly REDGATE_LIMERICK = new Location({
    id: "2963",
    displayName: "Redgate, Limerick",
    displayValue: "redgate-limerick",
  });

  static readonly REDGATE_WEXFORD = new Location({
    id: "1294",
    displayName: "Redgate, Wexford",
    displayValue: "redgate-wexford",
  });

  static readonly REDHILLS_CAVAN = new Location({
    id: "1533",
    displayName: "Redhills, Cavan",
    displayValue: "redhills-cavan",
  });

  static readonly REEN_KERRY = new Location({
    id: "2452",
    displayName: "Reen, Kerry",
    displayValue: "reen-kerry",
  });

  static readonly REENS_LIMERICK = new Location({
    id: "2964",
    displayName: "Reens, Limerick",
    displayValue: "reens-limerick",
  });

  static readonly REENVANAGH_KILKENNY = new Location({
    id: "239",
    displayName: "Reenvanagh, Kilkenny",
    displayValue: "reenvanagh-kilkenny",
  });

  static readonly RELAGHBEG_CAVAN = new Location({
    id: "1534",
    displayName: "Relaghbeg, Cavan",
    displayValue: "relaghbeg-cavan",
  });

  static readonly RENMORE_GALWAY = new Location({
    id: "1773",
    displayName: "Renmore, Galway",
    displayValue: "renmore-galway",
  });

  static readonly RENVYLE_GALWAY = new Location({
    id: "1774",
    displayName: "Renvyle, Galway",
    displayValue: "renvyle-galway",
  });

  static readonly RERRIN_CORK = new Location({
    id: "878",
    displayName: "Rerrin, Cork",
    displayValue: "rerrin-cork",
  });

  static readonly RHEBOGUE_LIMERICK = new Location({
    id: "3088",
    displayName: "Rhebogue, Limerick",
    displayValue: "rhebogue-limerick",
  });

  static readonly RHODE_OFFALY = new Location({
    id: "931",
    displayName: "Rhode, Offaly",
    displayValue: "rhode-offaly",
  });

  static readonly RIALTO_DUBLIN = new Location({
    id: "2267",
    displayName: "Rialto, Dublin",
    displayValue: "rialto-dublin",
  });

  static readonly RICHHILL_ARMAGH = new Location({
    id: "1471",
    displayName: "Richhill, Armagh",
    displayValue: "richhill-armagh",
  });

  static readonly RIDGE_CARLOW = new Location({
    id: "221",
    displayName: "Ridge, Carlow",
    displayValue: "ridge-carlow",
  });

  static readonly RING_WATERFORD = new Location({
    id: "3747",
    displayName: "Ring, Waterford",
    displayValue: "ring-waterford",
  });

  static readonly RINGASKIDDY_CORK = new Location({
    id: "879",
    displayName: "Ringaskiddy, Cork",
    displayValue: "ringaskiddy-cork",
  });

  static readonly RINGSEND_DERRY = new Location({
    id: "1299",
    displayName: "Ringsend, Derry",
    displayValue: "ringsend-derry",
  });

  static readonly RINGSEND_DUBLIN = new Location({
    id: "1891",
    displayName: "Ringsend, Dublin",
    displayValue: "ringsend-dublin",
  });

  static readonly RINGVILLE_WATERFORD = new Location({
    id: "3748",
    displayName: "Ringville, Waterford",
    displayValue: "ringville-waterford",
  });

  static readonly RINNEEN_CLARE = new Location({
    id: "322",
    displayName: "Rinneen, Clare",
    displayValue: "rinneen-clare",
  });

  static readonly RINNEEN_CORK = new Location({
    id: "880",
    displayName: "Rinneen, Cork",
    displayValue: "rinneen-cork",
  });

  static readonly RINVILLE_GALWAY = new Location({
    id: "1775",
    displayName: "Rinville, Galway",
    displayValue: "rinville-galway",
  });

  static readonly RIVERCHAPEL_WEXFORD = new Location({
    id: "3959",
    displayName: "Riverchapel, Wexford",
    displayValue: "riverchapel-wexford",
  });

  static readonly RIVERSTICK_CORK = new Location({
    id: "881",
    displayName: "Riverstick, Cork",
    displayValue: "riverstick-cork",
  });

  static readonly RIVERSTOWN_CORK = new Location({
    id: "882",
    displayName: "Riverstown, Cork",
    displayValue: "riverstown-cork",
  });

  static readonly RIVERSTOWN_LOUTH = new Location({
    id: "946",
    displayName: "Riverstown, Louth",
    displayValue: "riverstown-louth",
  });

  static readonly RIVERSTOWN_SLIGO = new Location({
    id: "3337",
    displayName: "Riverstown, Sligo",
    displayValue: "riverstown-sligo",
  });

  static readonly RIVERSTOWN_TIPPERARY = new Location({
    id: "3624",
    displayName: "Riverstown, Tipperary",
    displayValue: "riverstown-tipperary",
  });

  static readonly RIVERVILLE_KERRY = new Location({
    id: "773",
    displayName: "Riverville, Kerry",
    displayValue: "riverville-kerry",
  });

  static readonly ROADFORD_CLARE = new Location({
    id: "323",
    displayName: "Roadford, Clare",
    displayValue: "roadford-clare",
  });

  static readonly ROBERTSTOWN_KILDARE = new Location({
    id: "2707",
    displayName: "Robertstown, Kildare",
    displayValue: "robertstown-kildare",
  });

  static readonly ROBINSTOWN_MEATH = new Location({
    id: "3318",
    displayName: "Robinstown, Meath",
    displayValue: "robinstown-meath",
  });

  static readonly ROCHESTOWN_CORK = new Location({
    id: "889",
    displayName: "Rochestown, Cork",
    displayValue: "rochestown-cork",
  });

  static readonly ROCHESTOWN_KILKENNY = new Location({
    id: "240",
    displayName: "Rochestown, Kilkenny",
    displayValue: "rochestown-kilkenny",
  });

  static readonly ROCHFORTBRIDGE_WESTMEATH = new Location({
    id: "3802",
    displayName: "Rochfortbridge, Westmeath",
    displayValue: "rochfortbridge-westmeath",
  });

  static readonly ROCKBROOK_DUBLIN = new Location({
    id: "2288",
    displayName: "Rockbrook, Dublin",
    displayValue: "rockbrook-dublin",
  });

  static readonly ROCKCHAPEL_CORK = new Location({
    id: "890",
    displayName: "Rockchapel, Cork",
    displayValue: "rockchapel-cork",
  });

  static readonly ROCKCORRY_MONAGHAN = new Location({
    id: "534",
    displayName: "Rockcorry, Monaghan",
    displayValue: "rockcorry-monaghan",
  });

  static readonly ROCKHILL_LIMERICK = new Location({
    id: "3089",
    displayName: "Rockhill, Limerick",
    displayValue: "rockhill-limerick",
  });

  static readonly ROCKMILLS_CORK = new Location({
    id: "891",
    displayName: "Rockmills, Cork",
    displayValue: "rockmills-cork",
  });

  static readonly RODEEN_ROSCOMMON = new Location({
    id: "2110",
    displayName: "Rodeen, Roscommon",
    displayValue: "rodeen-roscommon",
  });

  static readonly ROESTOWN_LOUTH = new Location({
    id: "947",
    displayName: "Roestown, Louth",
    displayValue: "roestown-louth",
  });

  static readonly ROLESTOWN_DUBLIN = new Location({
    id: "2289",
    displayName: "Rolestown, Dublin",
    displayValue: "rolestown-dublin",
  });

  static readonly RONANSTOWN_DUBLIN = new Location({
    id: "1100",
    displayName: "Ronanstown, Dublin",
    displayValue: "ronanstown-dublin",
  });

  static readonly ROOAUN_GALWAY = new Location({
    id: "1131",
    displayName: "Rooaun, Galway",
    displayValue: "rooaun-galway",
  });

  static readonly ROONAH_QUAY_MAYO = new Location({
    id: "1031",
    displayName: "Roonah Quay, Mayo",
    displayValue: "roonah-quay-mayo",
  });

  static readonly ROOSKEY_LEITRIM = new Location({
    id: "2870",
    displayName: "Rooskey, Leitrim",
    displayValue: "rooskey-leitrim",
  });

  static readonly ROOSKEY_ROSCOMMON = new Location({
    id: "2111",
    displayName: "Rooskey, Roscommon",
    displayValue: "rooskey-roscommon",
  });

  static readonly ROOSKY_MAYO = new Location({
    id: "3113",
    displayName: "Roosky, Mayo",
    displayValue: "roosky-mayo",
  });

  static readonly ROOTIAGH_LIMERICK = new Location({
    id: "3090",
    displayName: "Rootiagh, Limerick",
    displayValue: "rootiagh-limerick",
  });

  static readonly ROPEFIELD_SLIGO = new Location({
    id: "3398",
    displayName: "Ropefield, Sligo",
    displayValue: "ropefield-sligo",
  });

  static readonly ROSAPENNA_DONEGAL = new Location({
    id: "1025",
    displayName: "Rosapenna, Donegal",
    displayValue: "rosapenna-donegal",
  });

  static readonly ROSBERCON_AND_SURROUNDS_KILKENNY = new Location({
    id: "4163",
    displayName: "Rosbercon (& Surrounds), Kilkenny",
    displayValue: "rosbercon-and-surrounds-kilkenny",
  });

  static readonly ROSBERCON_KILKENNY = new Location({
    id: "241",
    displayName: "Rosbercon, Kilkenny",
    displayValue: "rosbercon-kilkenny",
  });

  static readonly ROSCAM_GALWAY = new Location({
    id: "1776",
    displayName: "Roscam, Galway",
    displayValue: "roscam-galway",
  });

  static readonly ROSCOMMON = new Location({
    id: "21",
    displayName: "Roscommon (County)",
    displayValue: "roscommon",
  });

  static readonly ROSCOMMON_TOWN_AND_SURROUNDS_ROSCOMMON = new Location({
    id: "4164",
    displayName: "Roscommon Town (& Surrounds), Roscommon",
    displayValue: "roscommon-town-and-surrounds-roscommon",
  });

  static readonly ROSCOMMON_TOWN_ROSCOMMON = new Location({
    id: "2116",
    displayName: "Roscommon Town, Roscommon",
    displayValue: "roscommon-town-roscommon",
  });

  static readonly ROSCREA_AND_SURROUNDS_TIPPERARY = new Location({
    id: "4165",
    displayName: "Roscrea (& Surrounds), Tipperary",
    displayValue: "roscrea-and-surrounds-tipperary",
  });

  static readonly ROSCREA_TIPPERARY = new Location({
    id: "3625",
    displayName: "Roscrea, Tipperary",
    displayValue: "roscrea-tipperary",
  });

  static readonly ROSEGREEN_TIPPERARY = new Location({
    id: "3626",
    displayName: "Rosegreen, Tipperary",
    displayValue: "rosegreen-tipperary",
  });

  static readonly ROSENALLIS_LAOIS = new Location({
    id: "2285",
    displayName: "Rosenallis, Laois",
    displayValue: "rosenallis-laois",
  });

  static readonly ROSETTA_DOWN = new Location({
    id: "143",
    displayName: "Rosetta, Down",
    displayValue: "rosetta-down",
  });

  static readonly ROSMUC_GALWAY = new Location({
    id: "1777",
    displayName: "Rosmuc, Galway",
    displayValue: "rosmuc-galway",
  });

  static readonly ROSMULT_TIPPERARY = new Location({
    id: "3627",
    displayName: "Rosmult, Tipperary",
    displayValue: "rosmult-tipperary",
  });

  static readonly ROSNAKILL_DONEGAL = new Location({
    id: "614",
    displayName: "Rosnakill, Donegal",
    displayValue: "rosnakill-donegal",
  });

  static readonly ROSS_PORT_MAYO = new Location({
    id: "3114",
    displayName: "Ross Port, Mayo",
    displayValue: "ross-port-mayo",
  });

  static readonly ROSS_MEATH = new Location({
    id: "3319",
    displayName: "Ross, Meath",
    displayValue: "ross-meath",
  });

  static readonly ROSSAVEEL_GALWAY = new Location({
    id: "2028",
    displayName: "Rossaveel, Galway",
    displayValue: "rossaveel-galway",
  });

  static readonly ROSSBEG_DONEGAL = new Location({
    id: "1026",
    displayName: "Rossbeg, Donegal",
    displayValue: "rossbeg-donegal",
  });

  static readonly ROSSBRIEN_LIMERICK = new Location({
    id: "3091",
    displayName: "Rossbrien, Limerick",
    displayValue: "rossbrien-limerick",
  });

  static readonly ROSSBRIN_CORK = new Location({
    id: "892",
    displayName: "Rossbrin, Cork",
    displayValue: "rossbrin-cork",
  });

  static readonly ROSSCAHILL_GALWAY = new Location({
    id: "2029",
    displayName: "Rosscahill, Galway",
    displayValue: "rosscahill-galway",
  });

  static readonly ROSSCARBERY_CORK = new Location({
    id: "893",
    displayName: "Rosscarbery, Cork",
    displayValue: "rosscarbery-cork",
  });

  static readonly ROSSES_POINT_SLIGO = new Location({
    id: "3399",
    displayName: "Rosses Point, Sligo",
    displayValue: "rosses-point-sligo",
  });

  static readonly ROSSGEIR_DONEGAL = new Location({
    id: "2014",
    displayName: "Rossgeir, Donegal",
    displayValue: "rossgeir-donegal",
  });

  static readonly ROSSHILL_GALWAY = new Location({
    id: "2042",
    displayName: "Rosshill, Galway",
    displayValue: "rosshill-galway",
  });

  static readonly ROSSINVER_LEITRIM = new Location({
    id: "2871",
    displayName: "Rossinver, Leitrim",
    displayValue: "rossinver-leitrim",
  });

  static readonly ROSSLARE_HARBOUR_WEXFORD = new Location({
    id: "3960",
    displayName: "Rosslare Harbour, Wexford",
    displayValue: "rosslare-harbour-wexford",
  });

  static readonly ROSSLARE_STRAND_WEXFORD = new Location({
    id: "3961",
    displayName: "Rosslare Strand, Wexford",
    displayValue: "rosslare-strand-wexford",
  });

  static readonly ROSSLEA_FERMANAGH = new Location({
    id: "665",
    displayName: "Rosslea, Fermanagh",
    displayValue: "rosslea-fermanagh",
  });

  static readonly ROSSMORE_CORK = new Location({
    id: "894",
    displayName: "Rossmore, Cork",
    displayValue: "rossmore-cork",
  });

  static readonly ROSSMORE_LAOIS = new Location({
    id: "2286",
    displayName: "Rossmore, Laois",
    displayValue: "rossmore-laois",
  });

  static readonly ROSSNOWLAGH_DONEGAL = new Location({
    id: "1845",
    displayName: "Rossnowlagh, Donegal",
    displayValue: "rossnowlagh-donegal",
  });

  static readonly ROSTELLAN_CORK = new Location({
    id: "895",
    displayName: "Rostellan, Cork",
    displayValue: "rostellan-cork",
  });

  static readonly ROSTREVOR_DOWN = new Location({
    id: "144",
    displayName: "Rostrevor, Down",
    displayValue: "rostrevor-down",
  });

  static readonly ROSTURK_MAYO = new Location({
    id: "3176",
    displayName: "Rosturk, Mayo",
    displayValue: "rosturk-mayo",
  });

  static readonly ROUNDFORT_MAYO = new Location({
    id: "3177",
    displayName: "Roundfort, Mayo",
    displayValue: "roundfort-mayo",
  });

  static readonly ROUNDSTONE_GALWAY = new Location({
    id: "2043",
    displayName: "Roundstone, Galway",
    displayValue: "roundstone-galway",
  });

  static readonly ROUNDWOOD_WICKLOW = new Location({
    id: "4044",
    displayName: "Roundwood, Wicklow",
    displayValue: "roundwood-wicklow",
  });

  static readonly ROXBOROUGH_LIMERICK = new Location({
    id: "3115",
    displayName: "Roxborough, Limerick",
    displayValue: "roxborough-limerick",
  });

  static readonly ROYAL_CANAL_PARK_DUBLIN = new Location({
    id: "2309",
    displayName: "Royal Canal Park, Dublin",
    displayValue: "royal-canal-park-dublin",
  });

  static readonly ROYAL_COLLEGE_OF_SURGEONS_IN_IRELAND_YORK_ST_CAMPUS_DUBLIN =
    new Location({
      id: "4387",
      displayName:
        "Royal College of Surgeons in Ireland - York St campus, Dublin",
      displayValue:
        "royal-college-of-surgeons-in-ireland-york-st-campus-dublin",
    });

  static readonly ROYAL_COLLEGE_OF_SURGEONS_IN_IRELAND_DUBLIN = new Location({
    id: "4332",
    displayName: "Royal College of Surgeons in Ireland, Dublin",
    displayValue: "royal-college-of-surgeons-in-ireland-dublin",
  });

  static readonly ROYAL_IRISH_ACADEMY_OF_MUSIC_DUBLIN = new Location({
    id: "4377",
    displayName: "Royal Irish Academy of Music, Dublin",
    displayValue: "royal-irish-academy-of-music-dublin",
  });

  static readonly RUAN_CLARE = new Location({
    id: "1655",
    displayName: "Ruan, Clare",
    displayValue: "ruan-clare",
  });

  static readonly RUNNABACKAN_ROSCOMMON = new Location({
    id: "2117",
    displayName: "Runnabackan, Roscommon",
    displayValue: "runnabackan-roscommon",
  });

  static readonly RUSH_DUBLIN = new Location({
    id: "2310",
    displayName: "Rush, Dublin",
    displayValue: "rush-dublin",
  });

  static readonly RYEFIELD_CAVAN = new Location({
    id: "1535",
    displayName: "Ryefield, Cavan",
    displayValue: "ryefield-cavan",
  });

  static readonly RYEHILL_GALWAY = new Location({
    id: "2053",
    displayName: "Ryehill, Galway",
    displayValue: "ryehill-galway",
  });

  static readonly RYLANE_CROSS_CORK = new Location({
    id: "455",
    displayName: "Rylane Cross, Cork",
    displayValue: "rylane-cross-cork",
  });

  static readonly RYLANE_CORK = new Location({
    id: "896",
    displayName: "Rylane, Cork",
    displayValue: "rylane-cork",
  });

  static readonly SAGGART_DUBLIN = new Location({
    id: "2311",
    displayName: "Saggart, Dublin",
    displayValue: "saggart-dublin",
  });

  static readonly SAINTFIELD_DOWN = new Location({
    id: "145",
    displayName: "Saintfield, Down",
    displayValue: "saintfield-down",
  });

  static readonly SALEEN_CORK = new Location({
    id: "897",
    displayName: "Saleen, Cork",
    displayValue: "saleen-cork",
  });

  static readonly SALEEN_KERRY = new Location({
    id: "774",
    displayName: "Saleen, Kerry",
    displayValue: "saleen-kerry",
  });

  static readonly SALIA_MAYO = new Location({
    id: "1098",
    displayName: "Salia, Mayo",
    displayValue: "salia-mayo",
  });

  static readonly SALLAHIG_KERRY = new Location({
    id: "2453",
    displayName: "Sallahig, Kerry",
    displayValue: "sallahig-kerry",
  });

  static readonly SALLINS_AND_SURROUNDS_KILDARE = new Location({
    id: "4166",
    displayName: "Sallins (& Surrounds), Kildare",
    displayValue: "sallins-and-surrounds-kildare",
  });

  static readonly SALLINS_KILDARE = new Location({
    id: "2708",
    displayName: "Sallins, Kildare",
    displayValue: "sallins-kildare",
  });

  static readonly SALLYBROOK_CORK = new Location({
    id: "899",
    displayName: "Sallybrook, Cork",
    displayValue: "sallybrook-cork",
  });

  static readonly SALLYNOGGIN_DUBLIN = new Location({
    id: "2313",
    displayName: "Sallynoggin, Dublin",
    displayValue: "sallynoggin-dublin",
  });

  static readonly SALLYPARK_TIPPERARY = new Location({
    id: "3628",
    displayName: "Sallypark, Tipperary",
    displayValue: "sallypark-tipperary",
  });

  static readonly SALROCK_GALWAY = new Location({
    id: "2054",
    displayName: "Salrock, Galway",
    displayValue: "salrock-galway",
  });

  static readonly SALTHILL_GALWAY = new Location({
    id: "2079",
    displayName: "Salthill, Galway",
    displayValue: "salthill-galway",
  });

  static readonly SANDOWN_DOWN = new Location({
    id: "1073",
    displayName: "Sandown, Down",
    displayValue: "sandown-down",
  });

  static readonly SANDY_ROW_ANTRIM = new Location({
    id: "183",
    displayName: "Sandy Row, Antrim",
    displayValue: "sandy-row-antrim",
  });

  static readonly SANDYCOVE_DUBLIN = new Location({
    id: "2314",
    displayName: "Sandycove, Dublin",
    displayValue: "sandycove-dublin",
  });

  static readonly SANDYFORD_DUBLIN = new Location({
    id: "2315",
    displayName: "Sandyford, Dublin",
    displayValue: "sandyford-dublin",
  });

  static readonly SANDYMOUNT_DUBLIN = new Location({
    id: "2316",
    displayName: "Sandymount, Dublin",
    displayValue: "sandymount-dublin",
  });

  static readonly SANTRY_DUBLIN = new Location({
    id: "2317",
    displayName: "Santry, Dublin",
    displayValue: "santry-dublin",
  });

  static readonly SCARDAUN_MAYO = new Location({
    id: "3178",
    displayName: "Scardaun, Mayo",
    displayValue: "scardaun-mayo",
  });

  static readonly SCARDAUN_ROSCOMMON = new Location({
    id: "2121",
    displayName: "Scardaun, Roscommon",
    displayValue: "scardaun-roscommon",
  });

  static readonly SCARNAGH_WEXFORD = new Location({
    id: "3962",
    displayName: "Scarnagh, Wexford",
    displayValue: "scarnagh-wexford",
  });

  static readonly SCARRIFF_CLARE = new Location({
    id: "1656",
    displayName: "Scarriff, Clare",
    displayValue: "scarriff-clare",
  });

  static readonly SCARTAGLIN_KERRY = new Location({
    id: "2454",
    displayName: "Scartaglin, Kerry",
    displayValue: "scartaglin-kerry",
  });

  static readonly SCARVA_DOWN = new Location({
    id: "1074",
    displayName: "Scarva, Down",
    displayValue: "scarva-down",
  });

  static readonly SCHULL_CORK = new Location({
    id: "900",
    displayName: "Schull, Cork",
    displayValue: "schull-cork",
  });

  static readonly SCOTSHOUSE_MONAGHAN = new Location({
    id: "535",
    displayName: "Scotshouse, Monaghan",
    displayValue: "scotshouse-monaghan",
  });

  static readonly SCOTSTOWN_MONAGHAN = new Location({
    id: "536",
    displayName: "Scotstown, Monaghan",
    displayValue: "scotstown-monaghan",
  });

  static readonly SCRAMOGE_ROSCOMMON = new Location({
    id: "2137",
    displayName: "Scramoge, Roscommon",
    displayValue: "scramoge-roscommon",
  });

  static readonly SCREEBE_GALWAY = new Location({
    id: "2081",
    displayName: "Screebe, Galway",
    displayValue: "screebe-galway",
  });

  static readonly SCREEN_WEXFORD = new Location({
    id: "3924",
    displayName: "Screen, Wexford",
    displayValue: "screen-wexford",
  });

  static readonly SCREGGAN_OFFALY = new Location({
    id: "932",
    displayName: "Screggan, Offaly",
    displayValue: "screggan-offaly",
  });

  static readonly SEAFORDE_DOWN = new Location({
    id: "1075",
    displayName: "Seaforde, Down",
    displayValue: "seaforde-down",
  });

  static readonly SEAPATRICK_DOWN = new Location({
    id: "1076",
    displayName: "Seapatrick, Down",
    displayValue: "seapatrick-down",
  });

  static readonly SESKINORE_TYRONE = new Location({
    id: "3679",
    displayName: "Seskinore, Tyrone",
    displayValue: "seskinore-tyrone",
  });

  static readonly SESKINRYAN_CARLOW = new Location({
    id: "1486",
    displayName: "Seskinryan, Carlow",
    displayValue: "seskinryan-carlow",
  });

  static readonly SHALWY_DONEGAL = new Location({
    id: "606",
    displayName: "Shalwy, Donegal",
    displayValue: "shalwy-donegal",
  });

  static readonly SHANACASHEL_KERRY = new Location({
    id: "2455",
    displayName: "Shanacashel, Kerry",
    displayValue: "shanacashel-kerry",
  });

  static readonly SHANAGARRY_CORK = new Location({
    id: "901",
    displayName: "Shanagarry, Cork",
    displayValue: "shanagarry-cork",
  });

  static readonly SHANAGLISH_GALWAY = new Location({
    id: "2082",
    displayName: "Shanaglish, Galway",
    displayValue: "shanaglish-galway",
  });

  static readonly SHANAGOLDEN_LIMERICK = new Location({
    id: "3116",
    displayName: "Shanagolden, Limerick",
    displayValue: "shanagolden-limerick",
  });

  static readonly SHANAHOE_LAOIS = new Location({
    id: "2287",
    displayName: "Shanahoe, Laois",
    displayValue: "shanahoe-laois",
  });

  static readonly SHANAKIEL_CORK = new Location({
    id: "902",
    displayName: "Shanakiel, Cork",
    displayValue: "shanakiel-cork",
  });

  static readonly SHANBALLARD_GALWAY = new Location({
    id: "2083",
    displayName: "Shanballard, Galway",
    displayValue: "shanballard-galway",
  });

  static readonly SHANBALLY_CORK = new Location({
    id: "903",
    displayName: "Shanbally, Cork",
    displayValue: "shanbally-cork",
  });

  static readonly SHANBALLY_GALWAY = new Location({
    id: "2084",
    displayName: "Shanbally, Galway",
    displayValue: "shanbally-galway",
  });

  static readonly SHANBALLYMORE_CORK = new Location({
    id: "904",
    displayName: "Shanballymore, Cork",
    displayValue: "shanballymore-cork",
  });

  static readonly SHANCO_MONAGHAN = new Location({
    id: "537",
    displayName: "Shanco, Monaghan",
    displayValue: "shanco-monaghan",
  });

  static readonly SHANDON_DOWN = new Location({
    id: "1077",
    displayName: "Shandon, Down",
    displayValue: "shandon-down",
  });

  static readonly SHANKILL_ANTRIM = new Location({
    id: "184",
    displayName: "Shankill, Antrim",
    displayValue: "shankill-antrim",
  });

  static readonly SHANKILL_DUBLIN = new Location({
    id: "2318",
    displayName: "Shankill, Dublin",
    displayValue: "shankill-dublin",
  });

  static readonly SHANKILL_ROSCOMMON = new Location({
    id: "2138",
    displayName: "Shankill, Roscommon",
    displayValue: "shankill-roscommon",
  });

  static readonly SHANLARAGH_CORK = new Location({
    id: "907",
    displayName: "Shanlaragh, Cork",
    displayValue: "shanlaragh-cork",
  });

  static readonly SHANLIS_LOUTH = new Location({
    id: "948",
    displayName: "Shanlis, Louth",
    displayValue: "shanlis-louth",
  });

  static readonly SHANNAKEA_CLARE = new Location({
    id: "335",
    displayName: "Shannakea, Clare",
    displayValue: "shannakea-clare",
  });

  static readonly SHANNON_AND_SURROUNDS_CLARE = new Location({
    id: "4167",
    displayName: "Shannon (& Surrounds), Clare",
    displayValue: "shannon-and-surrounds-clare",
  });

  static readonly SHANNON_COLLEGE_OF_HOTEL_MANAGEMENT_CLARE = new Location({
    id: "4345",
    displayName: "Shannon College of Hotel Management, Clare",
    displayValue: "shannon-college-of-hotel-management-clare",
  });

  static readonly SHANNON_HARBOUR_OFFALY = new Location({
    id: "3379",
    displayName: "Shannon Harbour, Offaly",
    displayValue: "shannon-harbour-offaly",
  });

  static readonly SHANNON_CLARE = new Location({
    id: "1657",
    displayName: "Shannon, Clare",
    displayValue: "shannon-clare",
  });

  static readonly SHANNON_OFFALY = new Location({
    id: "3377",
    displayName: "Shannon, Offaly",
    displayValue: "shannon-offaly",
  });

  static readonly SHANNONBRIDGE_OFFALY = new Location({
    id: "3378",
    displayName: "Shannonbridge, Offaly",
    displayValue: "shannonbridge-offaly",
  });

  static readonly SHANRAGH_LAOIS = new Location({
    id: "2290",
    displayName: "Shanragh, Laois",
    displayValue: "shanragh-laois",
  });

  static readonly SHANTALLA_GALWAY = new Location({
    id: "2645",
    displayName: "Shantalla, Galway",
    displayValue: "shantalla-galway",
  });

  static readonly SHANTONAGH_MONAGHAN = new Location({
    id: "538",
    displayName: "Shantonagh, Monaghan",
    displayValue: "shantonagh-monaghan",
  });

  static readonly SHARAVOGUE_OFFALY = new Location({
    id: "3380",
    displayName: "Sharavogue, Offaly",
    displayValue: "sharavogue-offaly",
  });

  static readonly SHAW_S_ROAD_ANTRIM = new Location({
    id: "185",
    displayName: "Shaw's Road, Antrim",
    displayValue: "shaw-s-road-antrim",
  });

  static readonly SHEEANAMORE_WICKLOW = new Location({
    id: "1392",
    displayName: "Sheeanamore, Wicklow",
    displayValue: "sheeanamore-wicklow",
  });

  static readonly SHERCOCK_CAVAN = new Location({
    id: "1536",
    displayName: "Shercock, Cavan",
    displayValue: "shercock-cavan",
  });

  static readonly SHERKIN_ISLAND_CORK = new Location({
    id: "908",
    displayName: "Sherkin Island, Cork",
    displayValue: "sherkin-island-cork",
  });

  static readonly SHERLOCK_CAVAN = new Location({
    id: "1537",
    displayName: "Sherlock, Cavan",
    displayValue: "sherlock-cavan",
  });

  static readonly SHESKIN_MAYO = new Location({
    id: "1033",
    displayName: "Sheskin, Mayo",
    displayValue: "sheskin-mayo",
  });

  static readonly SHESKINAPOLL_DONEGAL = new Location({
    id: "615",
    displayName: "Sheskinapoll, Donegal",
    displayValue: "sheskinapoll-donegal",
  });

  static readonly SHILLELAGH_WICKLOW = new Location({
    id: "4045",
    displayName: "Shillelagh, Wicklow",
    displayValue: "shillelagh-wicklow",
  });

  static readonly SHINRONE_OFFALY = new Location({
    id: "3381",
    displayName: "Shinrone, Offaly",
    displayValue: "shinrone-offaly",
  });

  static readonly SHORE_RD_ANTRIM = new Location({
    id: "186",
    displayName: "Shore Rd, Antrim",
    displayValue: "shore-rd-antrim",
  });

  static readonly SHRULE_GALWAY = new Location({
    id: "2646",
    displayName: "Shrule, Galway",
    displayValue: "shrule-galway",
  });

  static readonly SHRULE_MAYO = new Location({
    id: "3179",
    displayName: "Shrule, Mayo",
    displayValue: "shrule-mayo",
  });

  static readonly SILVER_BRIDGE_ARMAGH = new Location({
    id: "1472",
    displayName: "Silver Bridge, Armagh",
    displayValue: "silver-bridge-armagh",
  });

  static readonly SILVERMINES_TIPPERARY = new Location({
    id: "3629",
    displayName: "Silvermines, Tipperary",
    displayValue: "silvermines-tipperary",
  });

  static readonly SILVERSPRINGS_CORK = new Location({
    id: "909",
    displayName: "Silversprings, Cork",
    displayValue: "silversprings-cork",
  });

  static readonly SINGLAND_LIMERICK = new Location({
    id: "3117",
    displayName: "Singland, Limerick",
    displayValue: "singland-limerick",
  });

  static readonly SION_MILLS_TYRONE = new Location({
    id: "3680",
    displayName: "Sion Mills, Tyrone",
    displayValue: "sion-mills-tyrone",
  });

  static readonly SIX_CROSSES_KERRY = new Location({
    id: "2456",
    displayName: "Six Crosses, Kerry",
    displayValue: "six-crosses-kerry",
  });

  static readonly SIXMILEBRIDGE_CLARE = new Location({
    id: "1658",
    displayName: "Sixmilebridge, Clare",
    displayValue: "sixmilebridge-clare",
  });

  static readonly SIXMILECROSS_TYRONE = new Location({
    id: "3681",
    displayName: "Sixmilecross, Tyrone",
    displayValue: "sixmilecross-tyrone",
  });

  static readonly SKEAGH_WESTMEATH = new Location({
    id: "3803",
    displayName: "Skeagh, Westmeath",
    displayValue: "skeagh-westmeath",
  });

  static readonly SKEGONEILL_ANTRIM = new Location({
    id: "187",
    displayName: "Skegoneill, Antrim",
    displayValue: "skegoneill-antrim",
  });

  static readonly SKEHANA_GALWAY = new Location({
    id: "2647",
    displayName: "Skehana, Galway",
    displayValue: "skehana-galway",
  });

  static readonly SKEHANA_KILKENNY = new Location({
    id: "242",
    displayName: "Skehana, Kilkenny",
    displayValue: "skehana-kilkenny",
  });

  static readonly SKEHANAGH_GALWAY = new Location({
    id: "2648",
    displayName: "Skehanagh, Galway",
    displayValue: "skehanagh-galway",
  });

  static readonly SKERRIES_DUBLIN = new Location({
    id: "2319",
    displayName: "Skerries, Dublin",
    displayValue: "skerries-dublin",
  });

  static readonly SKIBBEREEN_AND_SURROUNDS_CORK = new Location({
    id: "4169",
    displayName: "Skibbereen (& Surrounds), Cork",
    displayValue: "skibbereen-and-surrounds-cork",
  });

  static readonly SKIBBEREEN_CORK = new Location({
    id: "910",
    displayName: "Skibbereen, Cork",
    displayValue: "skibbereen-cork",
  });

  static readonly SKREEN_SLIGO = new Location({
    id: "3400",
    displayName: "Skreen, Sligo",
    displayValue: "skreen-sligo",
  });

  static readonly SKRYNE_MEATH = new Location({
    id: "3320",
    displayName: "Skryne, Meath",
    displayValue: "skryne-meath",
  });

  static readonly SLADE_WEXFORD = new Location({
    id: "3925",
    displayName: "Slade, Wexford",
    displayValue: "slade-wexford",
  });

  static readonly SLANE_MEATH = new Location({
    id: "3321",
    displayName: "Slane, Meath",
    displayValue: "slane-meath",
  });

  static readonly SLIEVEMURRY_GALWAY = new Location({
    id: "1140",
    displayName: "Slievemurry, Galway",
    displayValue: "slievemurry-galway",
  });

  static readonly SLIEVERUE_KILKENNY = new Location({
    id: "243",
    displayName: "Slieverue, Kilkenny",
    displayValue: "slieverue-kilkenny",
  });

  static readonly SLIGO_AND_SURROUNDS_SLIGO = new Location({
    id: "4170",
    displayName: "Sligo (& Surrounds), Sligo",
    displayValue: "sligo-and-surrounds-sligo",
  });

  static readonly SLIGO_SLIGO = new Location({
    id: "3401",
    displayName: "Sligo, Sligo",
    displayValue: "sligo-sligo",
  });

  static readonly SMERWICK_KERRY = new Location({
    id: "2459",
    displayName: "Smerwick, Kerry",
    displayValue: "smerwick-kerry",
  });

  static readonly SMITHBOROUGH_MONAGHAN = new Location({
    id: "540",
    displayName: "Smithborough, Monaghan",
    displayValue: "smithborough-monaghan",
  });

  static readonly SMITHFIELD_DUBLIN = new Location({
    id: "2320",
    displayName: "Smithfield, Dublin",
    displayValue: "smithfield-dublin",
  });

  static readonly SMITHSTOWN_KILKENNY = new Location({
    id: "244",
    displayName: "Smithstown, Kilkenny",
    displayValue: "smithstown-kilkenny",
  });

  static readonly SNAVE_CORK = new Location({
    id: "911",
    displayName: "Snave, Cork",
    displayValue: "snave-cork",
  });

  static readonly SNEEM_KERRY = new Location({
    id: "2460",
    displayName: "Sneem, Kerry",
    displayValue: "sneem-kerry",
  });

  static readonly SOOEY_SLIGO = new Location({
    id: "3402",
    displayName: "Sooey, Sligo",
    displayValue: "sooey-sligo",
  });

  static readonly SOUTH_BELFAST_CITY_ANTRIM = new Location({
    id: "57",
    displayName: "South Belfast City, Antrim",
    displayValue: "south-belfast-city-antrim",
  });

  static readonly SOUTH_CIRCULAR_ROAD_DUBLIN = new Location({
    id: "2321",
    displayName: "South Circular Road, Dublin",
    displayValue: "south-circular-road-dublin",
  });

  static readonly SOUTH_CIRCULAR_ROAD_LIMERICK = new Location({
    id: "3118",
    displayName: "South Circular Road, Limerick",
    displayValue: "south-circular-road-limerick",
  });

  static readonly SOUTH_CO_DUBLIN_DUBLIN = new Location({
    id: "43",
    displayName: "South Co. Dublin, Dublin",
    displayValue: "south-co-dublin-dublin",
  });

  static readonly SOUTH_DUBLIN_CITY_DUBLIN = new Location({
    id: "41",
    displayName: "South Dublin City, Dublin",
    displayValue: "south-dublin-city-dublin",
  });

  static readonly SOUTHILL_LIMERICK = new Location({
    id: "3119",
    displayName: "Southill, Limerick",
    displayValue: "southill-limerick",
  });

  static readonly SPANISH_POINT_CLARE = new Location({
    id: "1659",
    displayName: "Spanish Point, Clare",
    displayValue: "spanish-point-clare",
  });

  static readonly SPEENOGE_DONEGAL = new Location({
    id: "1743",
    displayName: "Speenoge, Donegal",
    displayValue: "speenoge-donegal",
  });

  static readonly SPIDDAL_GALWAY = new Location({
    id: "2649",
    displayName: "Spiddal, Galway",
    displayValue: "spiddal-galway",
  });

  static readonly SPINK_LAOIS = new Location({
    id: "2291",
    displayName: "Spink, Laois",
    displayValue: "spink-laois",
  });

  static readonly SPITTALTOWN_WESTMEATH = new Location({
    id: "3804",
    displayName: "Spittaltown, Westmeath",
    displayValue: "spittaltown-westmeath",
  });

  static readonly SPRINGFIELD_FERMANAGH = new Location({
    id: "666",
    displayName: "Springfield, Fermanagh",
    displayValue: "springfield-fermanagh",
  });

  static readonly SPRINGMARTIN_ANTRIM = new Location({
    id: "169",
    displayName: "Springmartin, Antrim",
    displayValue: "springmartin-antrim",
  });

  static readonly SPRINGMOUNT_CORK = new Location({
    id: "913",
    displayName: "Springmount, Cork",
    displayValue: "springmount-cork",
  });

  static readonly SRAGHMORE_WICKLOW = new Location({
    id: "1393",
    displayName: "Sraghmore, Wicklow",
    displayValue: "sraghmore-wicklow",
  });

  static readonly SRAHDUGGAUN_MAYO = new Location({
    id: "1035",
    displayName: "Srahduggaun, Mayo",
    displayValue: "srahduggaun-mayo",
  });

  static readonly SRAHMORE_MAYO = new Location({
    id: "3181",
    displayName: "Srahmore, Mayo",
    displayValue: "srahmore-mayo",
  });

  static readonly ST_ANGELAS_COLLEGE_SLIGO = new Location({
    id: "4347",
    displayName: "St Angelas College, Sligo",
    displayValue: "st-angelas-college-sligo",
  });

  static readonly ST_MARGARET_S_DUBLIN = new Location({
    id: "2124",
    displayName: "St Margaret's, Dublin",
    displayValue: "st-margaret-s-dublin",
  });

  static readonly ST_MARYS_UNIVERSITY_COLLEGE_BELFAST_ANTRIM = new Location({
    id: "4358",
    displayName: "St Marys University College Belfast, Antrim",
    displayValue: "st-marys-university-college-belfast-antrim",
  });

  static readonly ST_NICHOLAS_MONTESSORI_COLLEGE_IRELAND_DUBLIN = new Location({
    id: "4376",
    displayName: "St Nicholas Montessori College Ireland, Dublin",
    displayValue: "st-nicholas-montessori-college-ireland-dublin",
  });

  static readonly ST_PATRICKS_COLLEGE_PONTIFICAL_UNIVERSITY_KILDARE =
    new Location({
      id: "4344",
      displayName: "St Patricks College Pontifical University, Kildare",
      displayValue: "st-patricks-college-pontifical-university-kildare",
    });

  static readonly ST_PATRICKS_COLLEGE_OF_EDUCATION_DUBLIN = new Location({
    id: "4333",
    displayName: "St Patricks College of Education, Dublin",
    displayValue: "st-patricks-college-of-education-dublin",
  });

  static readonly ST_JAMES_GATE_DUBLIN = new Location({
    id: "2123",
    displayName: "St. James Gate, Dublin",
    displayValue: "st-james-gate-dublin",
  });

  static readonly ST_JOHNSTON_DONEGAL = new Location({
    id: "1846",
    displayName: "St. Johnston, Donegal",
    displayValue: "st-johnston-donegal",
  });

  static readonly ST_LUKES_CORK = new Location({
    id: "914",
    displayName: "St. Lukes, Cork",
    displayValue: "st-lukes-cork",
  });

  static readonly ST_MULLINS_CARLOW = new Location({
    id: "1487",
    displayName: "St. Mullins, Carlow",
    displayValue: "st-mullins-carlow",
  });

  static readonly STABANNAN_LOUTH = new Location({
    id: "3080",
    displayName: "Stabannan, Louth",
    displayValue: "stabannan-louth",
  });

  static readonly STACKALLEN_MEATH = new Location({
    id: "3322",
    displayName: "Stackallen, Meath",
    displayValue: "stackallen-meath",
  });

  static readonly STAMULLEN_MEATH = new Location({
    id: "3323",
    displayName: "Stamullen, Meath",
    displayValue: "stamullen-meath",
  });

  static readonly STAPLESTOWN_KILDARE = new Location({
    id: "2709",
    displayName: "Staplestown, Kildare",
    displayValue: "staplestown-kildare",
  });

  static readonly STARCH_HILL_CORK = new Location({
    id: "456",
    displayName: "Starch Hill, Cork",
    displayValue: "starch-hill-cork",
  });

  static readonly STEPASIDE_DUBLIN = new Location({
    id: "2322",
    displayName: "Stepaside, Dublin",
    displayValue: "stepaside-dublin",
  });

  static readonly STEWARTSTOWN_ANTRIM = new Location({
    id: "188",
    displayName: "Stewartstown, Antrim",
    displayValue: "stewartstown-antrim",
  });

  static readonly STEWARTSTOWN_TYRONE = new Location({
    id: "213",
    displayName: "Stewartstown, Tyrone",
    displayValue: "stewartstown-tyrone",
  });

  static readonly STICKSTOWN_CORK = new Location({
    id: "457",
    displayName: "Stickstown, Cork",
    displayValue: "stickstown-cork",
  });

  static readonly STILLORGAN_DUBLIN = new Location({
    id: "2323",
    displayName: "Stillorgan, Dublin",
    displayValue: "stillorgan-dublin",
  });

  static readonly STONE_BRIDGE_MONAGHAN = new Location({
    id: "594",
    displayName: "Stone Bridge, Monaghan",
    displayValue: "stone-bridge-monaghan",
  });

  static readonly STONEYBATTER_DUBLIN = new Location({
    id: "2130",
    displayName: "Stoneybatter, Dublin",
    displayValue: "stoneybatter-dublin",
  });

  static readonly STONEYFORD_ANTRIM = new Location({
    id: "189",
    displayName: "Stoneyford, Antrim",
    displayValue: "stoneyford-antrim",
  });

  static readonly STONEYFORD_KILKENNY = new Location({
    id: "245",
    displayName: "Stoneyford, Kilkenny",
    displayValue: "stoneyford-kilkenny",
  });

  static readonly STONYFORD_ANTRIM = new Location({
    id: "190",
    displayName: "Stonyford, Antrim",
    displayValue: "stonyford-antrim",
  });

  static readonly STORMONT_DOWN = new Location({
    id: "1078",
    displayName: "Stormont, Down",
    displayValue: "stormont-down",
  });

  static readonly STRABANE_TYRONE = new Location({
    id: "3682",
    displayName: "Strabane, Tyrone",
    displayValue: "strabane-tyrone",
  });

  static readonly STRADBALLY_KERRY = new Location({
    id: "2461",
    displayName: "Stradbally, Kerry",
    displayValue: "stradbally-kerry",
  });

  static readonly STRADBALLY_LAOIS = new Location({
    id: "2292",
    displayName: "Stradbally, Laois",
    displayValue: "stradbally-laois",
  });

  static readonly STRADBALLY_WATERFORD = new Location({
    id: "3715",
    displayName: "Stradbally, Waterford",
    displayValue: "stradbally-waterford",
  });

  static readonly STRADONE_CAVAN = new Location({
    id: "1538",
    displayName: "Stradone, Cavan",
    displayValue: "stradone-cavan",
  });

  static readonly STRAFFAN_KILDARE = new Location({
    id: "2710",
    displayName: "Straffan, Kildare",
    displayValue: "straffan-kildare",
  });

  static readonly STRAHART_WEXFORD = new Location({
    id: "3926",
    displayName: "Strahart, Wexford",
    displayValue: "strahart-wexford",
  });

  static readonly STRAID_ANTRIM = new Location({
    id: "191",
    displayName: "Straid, Antrim",
    displayValue: "straid-antrim",
  });

  static readonly STRAID_DONEGAL = new Location({
    id: "616",
    displayName: "Straid, Donegal",
    displayValue: "straid-donegal",
  });

  static readonly STRAIDE_MAYO = new Location({
    id: "3182",
    displayName: "Straide, Mayo",
    displayValue: "straide-mayo",
  });

  static readonly STRAND_LIMERICK = new Location({
    id: "3120",
    displayName: "Strand, Limerick",
    displayValue: "strand-limerick",
  });

  static readonly STRANDHILL_SLIGO = new Location({
    id: "3403",
    displayName: "Strandhill, Sligo",
    displayValue: "strandhill-sligo",
  });

  static readonly STRANDTOWN_DOWN = new Location({
    id: "1079",
    displayName: "Strandtown, Down",
    displayValue: "strandtown-down",
  });

  static readonly STRANGFORD_DOWN = new Location({
    id: "1080",
    displayName: "Strangford, Down",
    displayValue: "strangford-down",
  });

  static readonly STRANMILLIS_UNIVERSITY_COLLEGE_ANTRIM = new Location({
    id: "4357",
    displayName: "Stranmillis University College, Antrim",
    displayValue: "stranmillis-university-college-antrim",
  });

  static readonly STRANMILLIS_ANTRIM = new Location({
    id: "192",
    displayName: "Stranmillis, Antrim",
    displayValue: "stranmillis-antrim",
  });

  static readonly STRANOCUM_ANTRIM = new Location({
    id: "193",
    displayName: "Stranocum, Antrim",
    displayValue: "stranocum-antrim",
  });

  static readonly STRANORLAR_DONEGAL = new Location({
    id: "1744",
    displayName: "Stranorlar, Donegal",
    displayValue: "stranorlar-donegal",
  });

  static readonly STRATFORD_WICKLOW = new Location({
    id: "4046",
    displayName: "Stratford, Wicklow",
    displayValue: "stratford-wicklow",
  });

  static readonly STRATFORD_ON_SLANEY_WICKLOW = new Location({
    id: "4047",
    displayName: "Stratford-on-Slaney, Wicklow",
    displayValue: "stratford-on-slaney-wicklow",
  });

  static readonly STRAVALLY_DONEGAL = new Location({
    id: "607",
    displayName: "Stravally, Donegal",
    displayValue: "stravally-donegal",
  });

  static readonly STRAWBERRY_BEDS_DUBLIN = new Location({
    id: "2132",
    displayName: "Strawberry Beds, Dublin",
    displayValue: "strawberry-beds-dublin",
  });

  static readonly STREAMSTOWN_GALWAY = new Location({
    id: "2650",
    displayName: "Streamstown, Galway",
    displayValue: "streamstown-galway",
  });

  static readonly STREAMSTOWN_WESTMEATH = new Location({
    id: "3805",
    displayName: "Streamstown, Westmeath",
    displayValue: "streamstown-westmeath",
  });

  static readonly STREETE_WESTMEATH = new Location({
    id: "3806",
    displayName: "Streete, Westmeath",
    displayValue: "streete-westmeath",
  });

  static readonly STROKESTOWN_ROSCOMMON = new Location({
    id: "2139",
    displayName: "Strokestown, Roscommon",
    displayValue: "strokestown-roscommon",
  });

  static readonly STROOVE_DONEGAL = new Location({
    id: "608",
    displayName: "Stroove, Donegal",
    displayValue: "stroove-donegal",
  });

  static readonly SUFFOLK_ANTRIM = new Location({
    id: "194",
    displayName: "Suffolk, Antrim",
    displayValue: "suffolk-antrim",
  });

  static readonly SUMMERCOVE_CORK = new Location({
    id: "918",
    displayName: "Summercove, Cork",
    displayValue: "summercove-cork",
  });

  static readonly SUMMERHILL_MEATH = new Location({
    id: "3324",
    displayName: "Summerhill, Meath",
    displayValue: "summerhill-meath",
  });

  static readonly SUNCROFT_KILDARE = new Location({
    id: "2711",
    displayName: "Suncroft, Kildare",
    displayValue: "suncroft-kildare",
  });

  static readonly SUNDAY_S_WELL_CORK = new Location({
    id: "919",
    displayName: "Sunday's Well, Cork",
    displayValue: "sunday-s-well-cork",
  });

  static readonly SUTTON_DUBLIN = new Location({
    id: "2133",
    displayName: "Sutton, Dublin",
    displayValue: "sutton-dublin",
  });

  static readonly SWAN_LAOIS = new Location({
    id: "2293",
    displayName: "Swan, Laois",
    displayValue: "swan-laois",
  });

  static readonly SWANLINBAR_CAVAN = new Location({
    id: "1539",
    displayName: "Swanlinbar, Cavan",
    displayValue: "swanlinbar-cavan",
  });

  static readonly SWATRAGH_DERRY = new Location({
    id: "517",
    displayName: "Swatragh, Derry",
    displayValue: "swatragh-derry",
  });

  static readonly SWINFORD_MAYO = new Location({
    id: "3198",
    displayName: "Swinford, Mayo",
    displayValue: "swinford-mayo",
  });

  static readonly SWORDS_AND_SURROUNDS_DUBLIN = new Location({
    id: "4171",
    displayName: "Swords (& Surrounds), Dublin",
    displayValue: "swords-and-surrounds-dublin",
  });

  static readonly SWORDS_DUBLIN = new Location({
    id: "2134",
    displayName: "Swords, Dublin",
    displayValue: "swords-dublin",
  });

  static readonly SYDENHAM_DOWN = new Location({
    id: "1081",
    displayName: "Sydenham, Down",
    displayValue: "sydenham-down",
  });

  static readonly TACUMSHANE_WEXFORD = new Location({
    id: "3927",
    displayName: "Tacumshane, Wexford",
    displayValue: "tacumshane-wexford",
  });

  static readonly TAGHMACONNELL_ROSCOMMON = new Location({
    id: "2140",
    displayName: "Taghmaconnell, Roscommon",
    displayValue: "taghmaconnell-roscommon",
  });

  static readonly TAGHMON_WEXFORD = new Location({
    id: "3928",
    displayName: "Taghmon, Wexford",
    displayValue: "taghmon-wexford",
  });

  static readonly TAGHSHINNY_LONGFORD = new Location({
    id: "3007",
    displayName: "Taghshinny, Longford",
    displayValue: "taghshinny-longford",
  });

  static readonly TAGOAT_WEXFORD = new Location({
    id: "3929",
    displayName: "Tagoat, Wexford",
    displayValue: "tagoat-wexford",
  });

  static readonly TAHILLA_KERRY = new Location({
    id: "2462",
    displayName: "Tahilla, Kerry",
    displayValue: "tahilla-kerry",
  });

  static readonly TALBOTSTOWN_WICKLOW = new Location({
    id: "4048",
    displayName: "Talbotstown, Wicklow",
    displayValue: "talbotstown-wicklow",
  });

  static readonly TALLAGHT_DUBLIN = new Location({
    id: "2135",
    displayName: "Tallaght, Dublin",
    displayValue: "tallaght-dublin",
  });

  static readonly TALLANSTOWN_LOUTH = new Location({
    id: "3081",
    displayName: "Tallanstown, Louth",
    displayValue: "tallanstown-louth",
  });

  static readonly TALLOW_WATERFORD = new Location({
    id: "3716",
    displayName: "Tallow, Waterford",
    displayValue: "tallow-waterford",
  });

  static readonly TALLOWBRIDGE_WATERFORD = new Location({
    id: "3717",
    displayName: "Tallowbridge, Waterford",
    displayValue: "tallowbridge-waterford",
  });

  static readonly TAMLAGHT_FERMANAGH = new Location({
    id: "668",
    displayName: "Tamlaght, Fermanagh",
    displayValue: "tamlaght-fermanagh",
  });

  static readonly TAMNEY_DONEGAL = new Location({
    id: "1753",
    displayName: "Tamney, Donegal",
    displayValue: "tamney-donegal",
  });

  static readonly TANDRAGEE_ARMAGH = new Location({
    id: "1473",
    displayName: "Tandragee, Armagh",
    displayValue: "tandragee-armagh",
  });

  static readonly TANG_WESTMEATH = new Location({
    id: "3807",
    displayName: "Tang, Westmeath",
    displayValue: "tang-westmeath",
  });

  static readonly TANGAVEANE_DONEGAL = new Location({
    id: "617",
    displayName: "Tangaveane, Donegal",
    displayValue: "tangaveane-donegal",
  });

  static readonly TARA_HILL_WEXFORD = new Location({
    id: "3930",
    displayName: "Tara Hill, Wexford",
    displayValue: "tara-hill-wexford",
  });

  static readonly TARA_MEATH = new Location({
    id: "3325",
    displayName: "Tara, Meath",
    displayValue: "tara-meath",
  });

  static readonly TARBERT_KERRY = new Location({
    id: "2463",
    displayName: "Tarbert, Kerry",
    displayValue: "tarbert-kerry",
  });

  static readonly TARMON_LEITRIM = new Location({
    id: "865",
    displayName: "Tarmon, Leitrim",
    displayValue: "tarmon-leitrim",
  });

  static readonly TARMONBARRY_LONGFORD = new Location({
    id: "3008",
    displayName: "Tarmonbarry, Longford",
    displayValue: "tarmonbarry-longford",
  });

  static readonly TARMONBARRY_ROSCOMMON = new Location({
    id: "2142",
    displayName: "Tarmonbarry, Roscommon",
    displayValue: "tarmonbarry-roscommon",
  });

  static readonly TARVARA_CORK = new Location({
    id: "920",
    displayName: "Tarvara, Cork",
    displayValue: "tarvara-cork",
  });

  static readonly TAWIN_GALWAY = new Location({
    id: "2651",
    displayName: "Tawin, Galway",
    displayValue: "tawin-galway",
  });

  static readonly TAWNY_DONEGAL = new Location({
    id: "609",
    displayName: "Tawny, Donegal",
    displayValue: "tawny-donegal",
  });

  static readonly TAWNYINAH_MAYO = new Location({
    id: "1036",
    displayName: "Tawnyinah, Mayo",
    displayValue: "tawnyinah-mayo",
  });

  static readonly TAWNYLEA_LEITRIM = new Location({
    id: "2872",
    displayName: "Tawnylea, Leitrim",
    displayValue: "tawnylea-leitrim",
  });

  static readonly TAYLOR_S_CROSS_OFFALY = new Location({
    id: "1111",
    displayName: "Taylor's Cross, Offaly",
    displayValue: "taylor-s-cross-offaly",
  });

  static readonly TAYLOR_S_HILL_GALWAY = new Location({
    id: "2652",
    displayName: "Taylor's Hill, Galway",
    displayValue: "taylor-s-hill-galway",
  });

  static readonly TEELIN_DONEGAL = new Location({
    id: "1754",
    displayName: "Teelin, Donegal",
    displayValue: "teelin-donegal",
  });

  static readonly TEEMORE_FERMANAGH = new Location({
    id: "2205",
    displayName: "Teemore, Fermanagh",
    displayValue: "teemore-fermanagh",
  });

  static readonly TEERANEA_GALWAY = new Location({
    id: "2653",
    displayName: "Teeranea, Galway",
    displayValue: "teeranea-galway",
  });

  static readonly TEERANEARAGH_KERRY = new Location({
    id: "775",
    displayName: "Teeranearagh, Kerry",
    displayValue: "teeranearagh-kerry",
  });

  static readonly TEERELTON_CORK = new Location({
    id: "942",
    displayName: "Teerelton, Cork",
    displayValue: "teerelton-cork",
  });

  static readonly TEERMACLANE_CLARE = new Location({
    id: "1660",
    displayName: "Teermaclane, Clare",
    displayValue: "teermaclane-clare",
  });

  static readonly TEERNAKILL_GALWAY = new Location({
    id: "1141",
    displayName: "Teernakill, Galway",
    displayValue: "teernakill-galway",
  });

  static readonly TEEROMOYLE_KERRY = new Location({
    id: "2464",
    displayName: "Teeromoyle, Kerry",
    displayValue: "teeromoyle-kerry",
  });

  static readonly TEMPLE_BAR_DUBLIN = new Location({
    id: "2136",
    displayName: "Temple Bar, Dublin",
    displayValue: "temple-bar-dublin",
  });

  static readonly TEMPLEBOY_SLIGO = new Location({
    id: "3404",
    displayName: "Templeboy, Sligo",
    displayValue: "templeboy-sligo",
  });

  static readonly TEMPLEDERRY_TIPPERARY = new Location({
    id: "3630",
    displayName: "Templederry, Tipperary",
    displayValue: "templederry-tipperary",
  });

  static readonly TEMPLEGLANTINE_LIMERICK = new Location({
    id: "3121",
    displayName: "Templeglantine, Limerick",
    displayValue: "templeglantine-limerick",
  });

  static readonly TEMPLEHILL_CORK = new Location({
    id: "1995",
    displayName: "Templehill, Cork",
    displayValue: "templehill-cork",
  });

  static readonly TEMPLEMARTIN_CORK = new Location({
    id: "487",
    displayName: "Templemartin, Cork",
    displayValue: "templemartin-cork",
  });

  static readonly TEMPLEMICHAEL_WATERFORD = new Location({
    id: "3718",
    displayName: "Templemichael, Waterford",
    displayValue: "templemichael-waterford",
  });

  static readonly TEMPLEMORE_TIPPERARY = new Location({
    id: "3631",
    displayName: "Templemore, Tipperary",
    displayValue: "templemore-tipperary",
  });

  static readonly TEMPLEMUNGRET_LIMERICK = new Location({
    id: "921",
    displayName: "Templemungret, Limerick",
    displayValue: "templemungret-limerick",
  });

  static readonly TEMPLENOE_KERRY = new Location({
    id: "2465",
    displayName: "Templenoe, Kerry",
    displayValue: "templenoe-kerry",
  });

  static readonly TEMPLEOGUE_DUBLIN = new Location({
    id: "1892",
    displayName: "Templeogue, Dublin",
    displayValue: "templeogue-dublin",
  });

  static readonly TEMPLEORAN_WESTMEATH = new Location({
    id: "3808",
    displayName: "Templeoran, Westmeath",
    displayValue: "templeoran-westmeath",
  });

  static readonly TEMPLEPATRICK_ANTRIM = new Location({
    id: "1415",
    displayName: "Templepatrick, Antrim",
    displayValue: "templepatrick-antrim",
  });

  static readonly TEMPLEPORT_CAVAN = new Location({
    id: "265",
    displayName: "Templeport, Cavan",
    displayValue: "templeport-cavan",
  });

  static readonly TEMPLESHANBO_WEXFORD = new Location({
    id: "1305",
    displayName: "Templeshanbo, Wexford",
    displayValue: "templeshanbo-wexford",
  });

  static readonly TEMPLETOWN_WEXFORD = new Location({
    id: "3931",
    displayName: "Templetown, Wexford",
    displayValue: "templetown-wexford",
  });

  static readonly TEMPLETUOHY_TIPPERARY = new Location({
    id: "3632",
    displayName: "Templetuohy, Tipperary",
    displayValue: "templetuohy-tipperary",
  });

  static readonly TEMPO_FERMANAGH = new Location({
    id: "669",
    displayName: "Tempo, Fermanagh",
    displayValue: "tempo-fermanagh",
  });

  static readonly TENURE_LOUTH = new Location({
    id: "3082",
    displayName: "Tenure, Louth",
    displayValue: "tenure-louth",
  });

  static readonly TERENURE_DUBLIN = new Location({
    id: "1893",
    displayName: "Terenure, Dublin",
    displayValue: "terenure-dublin",
  });

  static readonly TERMON_CLARE = new Location({
    id: "324",
    displayName: "Termon, Clare",
    displayValue: "termon-clare",
  });

  static readonly TERMON_DONEGAL = new Location({
    id: "1755",
    displayName: "Termon, Donegal",
    displayValue: "termon-donegal",
  });

  static readonly TERMONFECKIN_LOUTH = new Location({
    id: "3083",
    displayName: "Termonfeckin, Louth",
    displayValue: "termonfeckin-louth",
  });

  static readonly TERRYGLASS_TIPPERARY = new Location({
    id: "3633",
    displayName: "Terryglass, Tipperary",
    displayValue: "terryglass-tipperary",
  });

  static readonly TERRYLAND_GALWAY = new Location({
    id: "2654",
    displayName: "Terryland, Galway",
    displayValue: "terryland-galway",
  });

  static readonly THE_BALLAGH_WEXFORD = new Location({
    id: "3944",
    displayName: "The Ballagh, Wexford",
    displayValue: "the-ballagh-wexford",
  });

  static readonly THE_BURREN_CLARE = new Location({
    id: "1661",
    displayName: "The Burren, Clare",
    displayValue: "the-burren-clare",
  });

  static readonly THE_BUSH_LOUTH = new Location({
    id: "950",
    displayName: "The Bush, Louth",
    displayValue: "the-bush-louth",
  });

  static readonly THE_BUTTS_CARLOW = new Location({
    id: "1488",
    displayName: "The Butts, Carlow",
    displayValue: "the-butts-carlow",
  });

  static readonly THE_COOMBE_DUBLIN = new Location({
    id: "2146",
    displayName: "The Coombe, Dublin",
    displayValue: "the-coombe-dublin",
  });

  static readonly THE_CURRAGH_KILDARE = new Location({
    id: "2712",
    displayName: "The Curragh, Kildare",
    displayValue: "the-curragh-kildare",
  });

  static readonly THE_DOWNS_WESTMEATH = new Location({
    id: "3809",
    displayName: "The Downs, Westmeath",
    displayValue: "the-downs-westmeath",
  });

  static readonly THE_FIVE_ROADS_DUBLIN = new Location({
    id: "1102",
    displayName: "The Five Roads, Dublin",
    displayValue: "the-five-roads-dublin",
  });

  static readonly THE_HARROW_WEXFORD = new Location({
    id: "3945",
    displayName: "The Harrow, Wexford",
    displayValue: "the-harrow-wexford",
  });

  static readonly THE_LEAP_WEXFORD = new Location({
    id: "3946",
    displayName: "The Leap, Wexford",
    displayValue: "the-leap-wexford",
  });

  static readonly THE_LOUGH_CORK = new Location({
    id: "954",
    displayName: "The Lough, Cork",
    displayValue: "the-lough-cork",
  });

  static readonly THE_LOUP_DERRY = new Location({
    id: "519",
    displayName: "The Loup, Derry",
    displayValue: "the-loup-derry",
  });

  static readonly THE_OPEN_UNIVERSITY_DUBLIN = new Location({
    id: "4356",
    displayName: "The Open University, Dublin",
    displayValue: "the-open-university-dublin",
  });

  static readonly THE_PIGEONS_WESTMEATH = new Location({
    id: "3810",
    displayName: "The Pigeons, Westmeath",
    displayValue: "the-pigeons-westmeath",
  });

  static readonly THE_PIKE_TIPPERARY = new Location({
    id: "3634",
    displayName: "The Pike, Tipperary",
    displayValue: "the-pike-tipperary",
  });

  static readonly THE_PIKE_WATERFORD = new Location({
    id: "3719",
    displayName: "The Pike, Waterford",
    displayValue: "the-pike-waterford",
  });

  static readonly THE_ROWER_KILKENNY = new Location({
    id: "246",
    displayName: "The Rower, Kilkenny",
    displayValue: "the-rower-kilkenny",
  });

  static readonly THE_SPA_KERRY = new Location({
    id: "2469",
    displayName: "The Spa, Kerry",
    displayValue: "the-spa-kerry",
  });

  static readonly THE_SWEEP_KILKENNY = new Location({
    id: "247",
    displayName: "The Sweep, Kilkenny",
    displayValue: "the-sweep-kilkenny",
  });

  static readonly THE_WARD_DUBLIN = new Location({
    id: "1894",
    displayName: "The Ward, Dublin",
    displayValue: "the-ward-dublin",
  });

  static readonly THOMAS_STREET_ROSCOMMON = new Location({
    id: "2148",
    displayName: "Thomas Street, Roscommon",
    displayValue: "thomas-street-roscommon",
  });

  static readonly THOMASTOWN_KILKENNY = new Location({
    id: "248",
    displayName: "Thomastown, Kilkenny",
    displayValue: "thomastown-kilkenny",
  });

  static readonly THOMASTOWN_MEATH = new Location({
    id: "3327",
    displayName: "Thomastown, Meath",
    displayValue: "thomastown-meath",
  });

  static readonly THOMASTOWN_TIPPERARY = new Location({
    id: "3635",
    displayName: "Thomastown, Tipperary",
    displayValue: "thomastown-tipperary",
  });

  static readonly THOMONDGATE_LIMERICK = new Location({
    id: "3122",
    displayName: "Thomondgate, Limerick",
    displayValue: "thomondgate-limerick",
  });

  static readonly THREE_CASTLES_KILKENNY = new Location({
    id: "249",
    displayName: "Three Castles, Kilkenny",
    displayValue: "three-castles-kilkenny",
  });

  static readonly THREEMILEHOUSE_MONAGHAN = new Location({
    id: "595",
    displayName: "Threemilehouse, Monaghan",
    displayValue: "threemilehouse-monaghan",
  });

  static readonly THURLES_AND_SURROUNDS_TIPPERARY = new Location({
    id: "4172",
    displayName: "Thurles (& Surrounds), Tipperary",
    displayValue: "thurles-and-surrounds-tipperary",
  });

  static readonly THURLES_TIPPERARY = new Location({
    id: "3636",
    displayName: "Thurles, Tipperary",
    displayValue: "thurles-tipperary",
  });

  static readonly TIBOHINE_ROSCOMMON = new Location({
    id: "2206",
    displayName: "Tibohine, Roscommon",
    displayValue: "tibohine-roscommon",
  });

  static readonly TICKNOCK_DUBLIN = new Location({
    id: "1895",
    displayName: "Ticknock, Dublin",
    displayValue: "ticknock-dublin",
  });

  static readonly TIDUFF_KERRY = new Location({
    id: "2470",
    displayName: "Tiduff, Kerry",
    displayValue: "tiduff-kerry",
  });

  static readonly TIEVEMORE_DONEGAL = new Location({
    id: "618",
    displayName: "Tievemore, Donegal",
    displayValue: "tievemore-donegal",
  });

  static readonly TIMAHOE_KILDARE = new Location({
    id: "2713",
    displayName: "Timahoe, Kildare",
    displayValue: "timahoe-kildare",
  });

  static readonly TIMAHOE_LAOIS = new Location({
    id: "2294",
    displayName: "Timahoe, Laois",
    displayValue: "timahoe-laois",
  });

  static readonly TIMOLEAGUE_CORK = new Location({
    id: "1521",
    displayName: "Timoleague, Cork",
    displayValue: "timoleague-cork",
  });

  static readonly TIMOLIN_KILDARE = new Location({
    id: "2714",
    displayName: "Timolin, Kildare",
    displayValue: "timolin-kildare",
  });

  static readonly TINAHELY_WICKLOW = new Location({
    id: "4049",
    displayName: "Tinahely, Wicklow",
    displayValue: "tinahely-wicklow",
  });

  static readonly TINNAHINCH_LAOIS = new Location({
    id: "2295",
    displayName: "Tinnahinch, Laois",
    displayValue: "tinnahinch-laois",
  });

  static readonly TINRYLAND_CARLOW = new Location({
    id: "1489",
    displayName: "Tinryland, Carlow",
    displayValue: "tinryland-carlow",
  });

  static readonly TIPPERARY = new Location({
    id: "18",
    displayName: "Tipperary (County)",
    displayValue: "tipperary",
  });

  static readonly TIPPERARY_TOWN_AND_SURROUNDS_TIPPERARY = new Location({
    id: "4173",
    displayName: "Tipperary Town (& Surrounds), Tipperary",
    displayValue: "tipperary-town-and-surrounds-tipperary",
  });

  static readonly TIPPERARY_TOWN_TIPPERARY = new Location({
    id: "3637",
    displayName: "Tipperary Town, Tipperary",
    displayValue: "tipperary-town-tipperary",
  });

  static readonly TIRELLAN_GALWAY = new Location({
    id: "2657",
    displayName: "Tirellan, Galway",
    displayValue: "tirellan-galway",
  });

  static readonly TIRNANEILL_MONAGHAN = new Location({
    id: "596",
    displayName: "Tirnaneill, Monaghan",
    displayValue: "tirnaneill-monaghan",
  });

  static readonly TIRNEEVIN_GALWAY = new Location({
    id: "2658",
    displayName: "Tirneevin, Galway",
    displayValue: "tirneevin-galway",
  });

  static readonly TITANIC_QUARTER_ANTRIM = new Location({
    id: "1416",
    displayName: "Titanic Quarter, Antrim",
    displayValue: "titanic-quarter-antrim",
  });

  static readonly TIVOLI_CORK = new Location({
    id: "1522",
    displayName: "Tivoli, Cork",
    displayValue: "tivoli-cork",
  });

  static readonly TOAMES_CORK = new Location({
    id: "488",
    displayName: "Toames, Cork",
    displayValue: "toames-cork",
  });

  static readonly TOBER_OFFALY = new Location({
    id: "3382",
    displayName: "Tober, Offaly",
    displayValue: "tober-offaly",
  });

  static readonly TOBERBEG_WICKLOW = new Location({
    id: "4050",
    displayName: "Toberbeg, Wicklow",
    displayValue: "toberbeg-wicklow",
  });

  static readonly TOBERMORE_DERRY = new Location({
    id: "520",
    displayName: "Tobermore, Derry",
    displayValue: "tobermore-derry",
  });

  static readonly TOBERNADARRY_MAYO = new Location({
    id: "3199",
    displayName: "Tobernadarry, Mayo",
    displayValue: "tobernadarry-mayo",
  });

  static readonly TOBERSCANAVAN_SLIGO = new Location({
    id: "1171",
    displayName: "Toberscanavan, Sligo",
    displayValue: "toberscanavan-sligo",
  });

  static readonly TOEM_TIPPERARY = new Location({
    id: "3638",
    displayName: "Toem, Tipperary",
    displayValue: "toem-tipperary",
  });

  static readonly TOGHER_CORK_CITY_CORK = new Location({
    id: "955",
    displayName: "Togher (Cork City), Cork",
    displayValue: "togher-cork-city-cork",
  });

  static readonly TOGHER_CORK = new Location({
    id: "1523",
    displayName: "Togher, Cork",
    displayValue: "togher-cork",
  });

  static readonly TOGHER_LOUTH = new Location({
    id: "3084",
    displayName: "Togher, Louth",
    displayValue: "togher-louth",
  });

  static readonly TOGHER_OFFALY = new Location({
    id: "3383",
    displayName: "Togher, Offaly",
    displayValue: "togher-offaly",
  });

  static readonly TOMBRACK_WEXFORD = new Location({
    id: "3947",
    displayName: "Tombrack, Wexford",
    displayValue: "tombrack-wexford",
  });

  static readonly TOMDARRAGH_WICKLOW = new Location({
    id: "4051",
    displayName: "Tomdarragh, Wicklow",
    displayValue: "tomdarragh-wicklow",
  });

  static readonly TOMHAGGARD_WEXFORD = new Location({
    id: "3948",
    displayName: "Tomhaggard, Wexford",
    displayValue: "tomhaggard-wexford",
  });

  static readonly TONABROCKY_GALWAY = new Location({
    id: "2659",
    displayName: "Tonabrocky, Galway",
    displayValue: "tonabrocky-galway",
  });

  static readonly TONACURRAGH_GALWAY = new Location({
    id: "1144",
    displayName: "Tonacurragh, Galway",
    displayValue: "tonacurragh-galway",
  });

  static readonly TONYDUFF_CAVAN = new Location({
    id: "266",
    displayName: "Tonyduff, Cavan",
    displayValue: "tonyduff-cavan",
  });

  static readonly TOOMAGHERA_CLARE = new Location({
    id: "1666",
    displayName: "Toomaghera, Clare",
    displayValue: "toomaghera-clare",
  });

  static readonly TOOMARD_GALWAY = new Location({
    id: "2660",
    displayName: "Toomard, Galway",
    displayValue: "toomard-galway",
  });

  static readonly TOOMBEOLA_GALWAY = new Location({
    id: "2661",
    displayName: "Toombeola, Galway",
    displayValue: "toombeola-galway",
  });

  static readonly TOOME_ANTRIM = new Location({
    id: "1799",
    displayName: "Toome, Antrim",
    displayValue: "toome-antrim",
  });

  static readonly TOOMEVARA_TIPPERARY = new Location({
    id: "3639",
    displayName: "Toomevara, Tipperary",
    displayValue: "toomevara-tipperary",
  });

  static readonly TOOR_TIPPERARY = new Location({
    id: "3640",
    displayName: "Toor, Tipperary",
    displayValue: "toor-tipperary",
  });

  static readonly TOORAREE_LIMERICK = new Location({
    id: "3123",
    displayName: "Tooraree, Limerick",
    displayValue: "tooraree-limerick",
  });

  static readonly TOOREENCAHILL_KERRY = new Location({
    id: "2474",
    displayName: "Tooreencahill, Kerry",
    displayValue: "tooreencahill-kerry",
  });

  static readonly TOORMORE_CORK = new Location({
    id: "489",
    displayName: "Toormore, Cork",
    displayValue: "toormore-cork",
  });

  static readonly TOORNAFULLA_LIMERICK = new Location({
    id: "3124",
    displayName: "Toornafulla, Limerick",
    displayValue: "toornafulla-limerick",
  });

  static readonly TOURLESTRANE_SLIGO = new Location({
    id: "3405",
    displayName: "Tourlestrane, Sligo",
    displayValue: "tourlestrane-sligo",
  });

  static readonly TOURMAKEADY_MAYO = new Location({
    id: "3200",
    displayName: "Tourmakeady, Mayo",
    displayValue: "tourmakeady-mayo",
  });

  static readonly TOURNAFULLA_LIMERICK = new Location({
    id: "3125",
    displayName: "Tournafulla, Limerick",
    displayValue: "tournafulla-limerick",
  });

  static readonly TOWER_CORK = new Location({
    id: "956",
    displayName: "Tower, Cork",
    displayValue: "tower-cork",
  });

  static readonly TOWNLEY_HALL_LOUTH = new Location({
    id: "3085",
    displayName: "Townley Hall, Louth",
    displayValue: "townley-hall-louth",
  });

  static readonly TOWNPARKS_GALWAY = new Location({
    id: "2662",
    displayName: "Townparks, Galway",
    displayValue: "townparks-galway",
  });

  static readonly TRACTON_CORK = new Location({
    id: "957",
    displayName: "Tracton, Cork",
    displayValue: "tracton-cork",
  });

  static readonly TRAFRASK_CORK = new Location({
    id: "959",
    displayName: "Trafrask, Cork",
    displayValue: "trafrask-cork",
  });

  static readonly TRAGUMNA_CORK = new Location({
    id: "960",
    displayName: "Tragumna, Cork",
    displayValue: "tragumna-cork",
  });

  static readonly TRALEE_AND_SURROUNDS_KERRY = new Location({
    id: "4174",
    displayName: "Tralee (& Surrounds), Kerry",
    displayValue: "tralee-and-surrounds-kerry",
  });

  static readonly TRALEE_KERRY = new Location({
    id: "2475",
    displayName: "Tralee, Kerry",
    displayValue: "tralee-kerry",
  });

  static readonly TRAMORE_AND_SURROUNDS_WATERFORD = new Location({
    id: "4175",
    displayName: "Tramore (& Surrounds), Waterford",
    displayValue: "tramore-and-surrounds-waterford",
  });

  static readonly TRAMORE_WATERFORD = new Location({
    id: "3720",
    displayName: "Tramore, Waterford",
    displayValue: "tramore-waterford",
  });

  static readonly TREAN_MAYO = new Location({
    id: "3201",
    displayName: "Trean, Mayo",
    displayValue: "trean-mayo",
  });

  static readonly TREANTAGH_DONEGAL = new Location({
    id: "619",
    displayName: "Treantagh, Donegal",
    displayValue: "treantagh-donegal",
  });

  static readonly TREEHOO_CAVAN = new Location({
    id: "281",
    displayName: "Treehoo, Cavan",
    displayValue: "treehoo-cavan",
  });

  static readonly TRIEN_ROSCOMMON = new Location({
    id: "2207",
    displayName: "Trien, Roscommon",
    displayValue: "trien-roscommon",
  });

  static readonly TRILLICK_TYRONE = new Location({
    id: "3683",
    displayName: "Trillick, Tyrone",
    displayValue: "trillick-tyrone",
  });

  static readonly TRIM_AND_SURROUNDS_MEATH = new Location({
    id: "4176",
    displayName: "Trim (& Surrounds), Meath",
    displayValue: "trim-and-surrounds-meath",
  });

  static readonly TRIM_MEATH = new Location({
    id: "3328",
    displayName: "Trim, Meath",
    displayValue: "trim-meath",
  });

  static readonly TRINITY_COLLEGE_DUBLIN_DUBLIN = new Location({
    id: "4334",
    displayName: "Trinity College Dublin, Dublin",
    displayValue: "trinity-college-dublin-dublin",
  });

  static readonly TRISTIA_MAYO = new Location({
    id: "3202",
    displayName: "Tristia, Mayo",
    displayValue: "tristia-mayo",
  });

  static readonly TRUST_GALWAY = new Location({
    id: "2663",
    displayName: "Trust, Galway",
    displayValue: "trust-galway",
  });

  static readonly TUAM_AND_SURROUNDS_GALWAY = new Location({
    id: "4177",
    displayName: "Tuam (& Surrounds), Galway",
    displayValue: "tuam-and-surrounds-galway",
  });

  static readonly TUAM_ROAD_GALWAY = new Location({
    id: "2665",
    displayName: "Tuam Road, Galway",
    displayValue: "tuam-road-galway",
  });

  static readonly TUAM_GALWAY = new Location({
    id: "2664",
    displayName: "Tuam, Galway",
    displayValue: "tuam-galway",
  });

  static readonly TUAMGRANEY_CLARE = new Location({
    id: "1667",
    displayName: "Tuamgraney, Clare",
    displayValue: "tuamgraney-clare",
  });

  static readonly TUBBER_CLARE = new Location({
    id: "1668",
    displayName: "Tubber, Clare",
    displayValue: "tubber-clare",
  });

  static readonly TUBBER_GALWAY = new Location({
    id: "2666",
    displayName: "Tubber, Galway",
    displayValue: "tubber-galway",
  });

  static readonly TUBBERCURRY_SLIGO = new Location({
    id: "3406",
    displayName: "Tubbercurry, Sligo",
    displayValue: "tubbercurry-sligo",
  });

  static readonly TUBBRID_KILKENNY = new Location({
    id: "250",
    displayName: "Tubbrid, Kilkenny",
    displayValue: "tubbrid-kilkenny",
  });

  static readonly TUBBRID_TIPPERARY = new Location({
    id: "109",
    displayName: "Tubbrid, Tipperary",
    displayValue: "tubbrid-tipperary",
  });

  static readonly TULLA_CLARE = new Location({
    id: "1669",
    displayName: "Tulla, Clare",
    displayValue: "tulla-clare",
  });

  static readonly TULLAGHAN_LEITRIM = new Location({
    id: "2873",
    displayName: "Tullaghan, Leitrim",
    displayValue: "tullaghan-leitrim",
  });

  static readonly TULLAGHANSTOWN_MEATH = new Location({
    id: "3329",
    displayName: "Tullaghanstown, Meath",
    displayValue: "tullaghanstown-meath",
  });

  static readonly TULLAGHOUGHT_KILKENNY = new Location({
    id: "252",
    displayName: "Tullaghought, Kilkenny",
    displayValue: "tullaghought-kilkenny",
  });

  static readonly TULLAHERIN_KILKENNY = new Location({
    id: "253",
    displayName: "Tullaherin, Kilkenny",
    displayValue: "tullaherin-kilkenny",
  });

  static readonly TULLAKEEL_KERRY = new Location({
    id: "2476",
    displayName: "Tullakeel, Kerry",
    displayValue: "tullakeel-kerry",
  });

  static readonly TULLAMORE_AND_SURROUNDS_OFFALY = new Location({
    id: "4178",
    displayName: "Tullamore (& Surrounds), Offaly",
    displayValue: "tullamore-and-surrounds-offaly",
  });

  static readonly TULLAMORE_KERRY = new Location({
    id: "2477",
    displayName: "Tullamore, Kerry",
    displayValue: "tullamore-kerry",
  });

  static readonly TULLAMORE_OFFALY = new Location({
    id: "3384",
    displayName: "Tullamore, Offaly",
    displayValue: "tullamore-offaly",
  });

  static readonly TULLAROAN_KILKENNY = new Location({
    id: "254",
    displayName: "Tullaroan, Kilkenny",
    displayValue: "tullaroan-kilkenny",
  });

  static readonly TULLIG_KERRY = new Location({
    id: "2478",
    displayName: "Tullig, Kerry",
    displayValue: "tullig-kerry",
  });

  static readonly TULLOGHER_KILKENNY = new Location({
    id: "251",
    displayName: "Tullogher, Kilkenny",
    displayValue: "tullogher-kilkenny",
  });

  static readonly TULLOKYNE_GALWAY = new Location({
    id: "2667",
    displayName: "Tullokyne, Galway",
    displayValue: "tullokyne-galway",
  });

  static readonly TULLOW_AND_SURROUNDS_CARLOW = new Location({
    id: "4179",
    displayName: "Tullow (& Surrounds), Carlow",
    displayValue: "tullow-and-surrounds-carlow",
  });

  static readonly TULLOW_CARLOW = new Location({
    id: "1490",
    displayName: "Tullow, Carlow",
    displayValue: "tullow-carlow",
  });

  static readonly TULLY_CROSS_GALWAY = new Location({
    id: "2668",
    displayName: "Tully Cross, Galway",
    displayValue: "tully-cross-galway",
  });

  static readonly TULLY_DONEGAL = new Location({
    id: "1756",
    displayName: "Tully, Donegal",
    displayValue: "tully-donegal",
  });

  static readonly TULLY_ROSCOMMON = new Location({
    id: "2208",
    displayName: "Tully, Roscommon",
    displayValue: "tully-roscommon",
  });

  static readonly TULLYALLEN_LOUTH = new Location({
    id: "3086",
    displayName: "Tullyallen, Louth",
    displayValue: "tullyallen-louth",
  });

  static readonly TULLYAMALRA_MONAGHAN = new Location({
    id: "1101",
    displayName: "Tullyamalra, Monaghan",
    displayValue: "tullyamalra-monaghan",
  });

  static readonly TULLYCANNA_WEXFORD = new Location({
    id: "3949",
    displayName: "Tullycanna, Wexford",
    displayValue: "tullycanna-wexford",
  });

  static readonly TULLYDUSH_DONEGAL = new Location({
    id: "610",
    displayName: "Tullydush, Donegal",
    displayValue: "tullydush-donegal",
  });

  static readonly TULLYLEASE_CORK = new Location({
    id: "962",
    displayName: "Tullylease, Cork",
    displayValue: "tullylease-cork",
  });

  static readonly TULLYMACREEVE_ARMAGH = new Location({
    id: "178",
    displayName: "Tullymacreeve, Armagh",
    displayValue: "tullymacreeve-armagh",
  });

  static readonly TULLYNAHA_DONEGAL = new Location({
    id: "1757",
    displayName: "Tullynaha, Donegal",
    displayValue: "tullynaha-donegal",
  });

  static readonly TULLYVIN_CAVAN = new Location({
    id: "1540",
    displayName: "Tullyvin, Cavan",
    displayValue: "tullyvin-cavan",
  });

  static readonly TULLYVOOS_DONEGAL = new Location({
    id: "611",
    displayName: "Tullyvoos, Donegal",
    displayValue: "tullyvoos-donegal",
  });

  static readonly TULROHAUN_MAYO = new Location({
    id: "2950",
    displayName: "Tulrohaun, Mayo",
    displayValue: "tulrohaun-mayo",
  });

  static readonly TULSK_ROSCOMMON = new Location({
    id: "2209",
    displayName: "Tulsk, Roscommon",
    displayValue: "tulsk-roscommon",
  });

  static readonly TUOSIST_KERRY = new Location({
    id: "2481",
    displayName: "Tuosist, Kerry",
    displayValue: "tuosist-kerry",
  });

  static readonly TURF_LODGE_ANTRIM = new Location({
    id: "1800",
    displayName: "Turf Lodge, Antrim",
    displayValue: "turf-lodge-antrim",
  });

  static readonly TURLOUGH_CLARE = new Location({
    id: "1680",
    displayName: "Turlough, Clare",
    displayValue: "turlough-clare",
  });

  static readonly TURLOUGH_MAYO = new Location({
    id: "2951",
    displayName: "Turlough, Mayo",
    displayValue: "turlough-mayo",
  });

  static readonly TURLOUGHMORE_GALWAY = new Location({
    id: "2669",
    displayName: "Turloughmore, Galway",
    displayValue: "turloughmore-galway",
  });

  static readonly TURNERS_CROSS_CORK = new Location({
    id: "963",
    displayName: "Turners Cross, Cork",
    displayValue: "turners-cross-cork",
  });

  static readonly TURREEN_LONGFORD = new Location({
    id: "925",
    displayName: "Turreen, Longford",
    displayValue: "turreen-longford",
  });

  static readonly TWINBROOK_ANTRIM = new Location({
    id: "1801",
    displayName: "Twinbrook, Antrim",
    displayValue: "twinbrook-antrim",
  });

  static readonly TWO_MILE_HOUSE_KILDARE = new Location({
    id: "2715",
    displayName: "Two Mile House, Kildare",
    displayValue: "two-mile-house-kildare",
  });

  static readonly TWOMILEBORRIS_TIPPERARY = new Location({
    id: "3641",
    displayName: "Twomileborris, Tipperary",
    displayValue: "twomileborris-tipperary",
  });

  static readonly TWOMILEDITCH_GALWAY = new Location({
    id: "1150",
    displayName: "Twomileditch, Galway",
    displayValue: "twomileditch-galway",
  });

  static readonly TYDAVNET_MONAGHAN = new Location({
    id: "597",
    displayName: "Tydavnet, Monaghan",
    displayValue: "tydavnet-monaghan",
  });

  static readonly TYLAS_MEATH = new Location({
    id: "1069",
    displayName: "Tylas, Meath",
    displayValue: "tylas-meath",
  });

  static readonly TYNAGH_GALWAY = new Location({
    id: "2670",
    displayName: "Tynagh, Galway",
    displayValue: "tynagh-galway",
  });

  static readonly TYNAN_ARMAGH = new Location({
    id: "1474",
    displayName: "Tynan, Armagh",
    displayValue: "tynan-armagh",
  });

  static readonly TYRELLA_DOWN = new Location({
    id: "1082",
    displayName: "Tyrella, Down",
    displayValue: "tyrella-down",
  });

  static readonly TYRELLSPASS_WESTMEATH = new Location({
    id: "3811",
    displayName: "Tyrellspass, Westmeath",
    displayValue: "tyrellspass-westmeath",
  });

  static readonly TYRRELSTOWN_DUBLIN = new Location({
    id: "1896",
    displayName: "Tyrrelstown, Dublin",
    displayValue: "tyrrelstown-dublin",
  });

  static readonly ULSTER_UNIVERSITY_BELFAST_ANTRIM = new Location({
    id: "4355",
    displayName: "Ulster University Belfast, Antrim",
    displayValue: "ulster-university-belfast-antrim",
  });

  static readonly ULSTER_UNIVERSITY_JORDANSTOWN_ANTRIM = new Location({
    id: "4352",
    displayName: "Ulster University Jordanstown, Antrim",
    displayValue: "ulster-university-jordanstown-antrim",
  });

  static readonly ULSTER_UNIVERSITY_MAGEE_DERRY = new Location({
    id: "4353",
    displayName: "Ulster University Magee, Derry",
    displayValue: "ulster-university-magee-derry",
  });

  static readonly UNION_HALL_CORK = new Location({
    id: "964",
    displayName: "Union Hall, Cork",
    displayValue: "union-hall-cork",
  });

  static readonly UNIVERSITY_AREA_ANTRIM = new Location({
    id: "1417",
    displayName: "University Area, Antrim",
    displayValue: "university-area-antrim",
  });

  static readonly UNIVERSITY_COLLEGE_CORK_BROOKFIELD_HEALTH_SCIENCES_CORK =
    new Location({
      id: "4383",
      displayName: "University College Cork - Brookfield Health Sciences, Cork",
      displayValue: "university-college-cork-brookfield-health-sciences-cork",
    });

  static readonly UNIVERSITY_COLLEGE_CORK_MARDYKE_ARENA_CORK = new Location({
    id: "4382",
    displayName: "University College Cork - Mardyke Arena, Cork",
    displayValue: "university-college-cork-mardyke-arena-cork",
  });

  static readonly UNIVERSITY_COLLEGE_CORK_TYNDALL_NATIONAL_INSTITUTE_CORK =
    new Location({
      id: "4384",
      displayName: "University College Cork - Tyndall National Institute, Cork",
      displayValue: "university-college-cork-tyndall-national-institute-cork",
    });

  static readonly UNIVERSITY_COLLEGE_CORK_CORK = new Location({
    id: "4312",
    displayName: "University College Cork, Cork",
    displayValue: "university-college-cork-cork",
  });

  static readonly UNIVERSITY_COLLEGE_DUBLIN_LYONS_ESTATE_KILDARE = new Location(
    {
      id: "4389",
      displayName: "University College Dublin - Lyons Estate , Kildare",
      displayValue: "university-college-dublin-lyons-estate-kildare",
    }
  );

  static readonly UNIVERSITY_COLLEGE_DUBLIN_SMURFIT_SCHOOL_OF_BUSINESS_DUBLIN =
    new Location({
      id: "4388",
      displayName:
        "University College Dublin - Smurfit School of Business, Dublin",
      displayValue:
        "university-college-dublin-smurfit-school-of-business-dublin",
    });

  static readonly UNIVERSITY_COLLEGE_DUBLIN_DUBLIN = new Location({
    id: "4335",
    displayName: "University College Dublin, Dublin",
    displayValue: "university-college-dublin-dublin",
  });

  static readonly UNIVERSITY_OF_LIMERICK_LIMERICK = new Location({
    id: "4342",
    displayName: "University of Limerick, Limerick",
    displayValue: "university-of-limerick-limerick",
  });

  static readonly UNIVERSITY_OF_ULSTER_COLERAINE_DERRY = new Location({
    id: "4351",
    displayName: "University of Ulster Coleraine, Derry",
    displayValue: "university-of-ulster-coleraine-derry",
  });

  static readonly UPPER_BALLINDERRY_ANTRIM = new Location({
    id: "1418",
    displayName: "Upper Ballinderry, Antrim",
    displayValue: "upper-ballinderry-antrim",
  });

  static readonly UPPER_MALONE_ANTRIM = new Location({
    id: "1419",
    displayName: "Upper Malone, Antrim",
    displayValue: "upper-malone-antrim",
  });

  static readonly UPPER_NEWTOWNARDS_ROAD_DOWN = new Location({
    id: "1083",
    displayName: "Upper Newtownards Road, Down",
    displayValue: "upper-newtownards-road-down",
  });

  static readonly UPPERCHURCH_TIPPERARY = new Location({
    id: "3642",
    displayName: "Upperchurch, Tipperary",
    displayValue: "upperchurch-tipperary",
  });

  static readonly UPPERLANDS_DERRY = new Location({
    id: "521",
    displayName: "Upperlands, Derry",
    displayValue: "upperlands-derry",
  });

  static readonly URBALREAGH_DONEGAL = new Location({
    id: "620",
    displayName: "Urbalreagh, Donegal",
    displayValue: "urbalreagh-donegal",
  });

  static readonly URGLIN_GLEBE_CARLOW = new Location({
    id: "1491",
    displayName: "Urglin Glebe, Carlow",
    displayValue: "urglin-glebe-carlow",
  });

  static readonly URLAUR_MAYO = new Location({
    id: "2952",
    displayName: "Urlaur, Mayo",
    displayValue: "urlaur-mayo",
  });

  static readonly URLINGFORD_KILKENNY = new Location({
    id: "256",
    displayName: "Urlingford, Kilkenny",
    displayValue: "urlingford-kilkenny",
  });

  static readonly VALENTIA_ISLAND_KERRY = new Location({
    id: "2482",
    displayName: "Valentia Island, Kerry",
    displayValue: "valentia-island-kerry",
  });

  static readonly VALLEYMOUNT_WICKLOW = new Location({
    id: "4052",
    displayName: "Valleymount, Wicklow",
    displayValue: "valleymount-wicklow",
  });

  static readonly VENTRY_KERRY = new Location({
    id: "2483",
    displayName: "Ventry, Kerry",
    displayValue: "ventry-kerry",
  });

  static readonly VICARSTOWN_CORK = new Location({
    id: "965",
    displayName: "Vicarstown, Cork",
    displayValue: "vicarstown-cork",
  });

  static readonly VICARSTOWN_LAOIS = new Location({
    id: "2296",
    displayName: "Vicarstown, Laois",
    displayValue: "vicarstown-laois",
  });

  static readonly VICTORIA_CROSS_CORK = new Location({
    id: "1996",
    displayName: "Victoria Cross, Cork",
    displayValue: "victoria-cross-cork",
  });

  static readonly VILLIERSTOWN_WATERFORD = new Location({
    id: "3721",
    displayName: "Villierstown, Waterford",
    displayValue: "villierstown-waterford",
  });

  static readonly VIRGINIA_ROAD_MEATH = new Location({
    id: "1070",
    displayName: "Virginia Road, Meath",
    displayValue: "virginia-road-meath",
  });

  static readonly VIRGINIA_CAVAN = new Location({
    id: "1541",
    displayName: "Virginia, Cavan",
    displayValue: "virginia-cavan",
  });

  static readonly WADDINGTON_WEXFORD = new Location({
    id: "3950",
    displayName: "Waddington, Wexford",
    displayValue: "waddington-wexford",
  });

  static readonly WALKINSTOWN_DUBLIN = new Location({
    id: "1897",
    displayName: "Walkinstown, Dublin",
    displayValue: "walkinstown-dublin",
  });

  static readonly WALSH_ISLAND_OFFALY = new Location({
    id: "3385",
    displayName: "Walsh Island, Offaly",
    displayValue: "walsh-island-offaly",
  });

  static readonly WALSHESTOWN_WEXFORD = new Location({
    id: "3963",
    displayName: "Walshestown, Wexford",
    displayValue: "walshestown-wexford",
  });

  static readonly WALSHTOWN_CORK = new Location({
    id: "490",
    displayName: "Walshtown, Cork",
    displayValue: "walshtown-cork",
  });

  static readonly WARD_DUBLIN = new Location({
    id: "1898",
    displayName: "Ward, Dublin",
    displayValue: "ward-dublin",
  });

  static readonly WARINGSFORD_DOWN = new Location({
    id: "1092",
    displayName: "Waringsford, Down",
    displayValue: "waringsford-down",
  });

  static readonly WARINGSTOWN_DOWN = new Location({
    id: "1093",
    displayName: "Waringstown, Down",
    displayValue: "waringstown-down",
  });

  static readonly WARRENPOINT_DOWN = new Location({
    id: "146",
    displayName: "Warrenpoint, Down",
    displayValue: "warrenpoint-down",
  });

  static readonly WATCH_HO_VILLAGE_WEXFORD = new Location({
    id: "1327",
    displayName: "Watch Ho-Village, Wexford",
    displayValue: "watch-ho-village-wexford",
  });

  static readonly WATER_WORKS_ANTRIM = new Location({
    id: "1420",
    displayName: "Water Works, Antrim",
    displayValue: "water-works-antrim",
  });

  static readonly WATERFALL_CORK = new Location({
    id: "1997",
    displayName: "Waterfall, Cork",
    displayValue: "waterfall-cork",
  });

  static readonly WATERFORD = new Location({
    id: "12",
    displayName: "Waterford (County)",
    displayValue: "waterford",
  });

  static readonly WATERFORD_CITY = new Location({
    id: "38",
    displayName: "Waterford City",
    displayValue: "waterford-city",
  });

  static readonly WATERFORD_CITY_CENTRE_WATERFORD = new Location({
    id: "61",
    displayName: "Waterford City Centre, Waterford",
    displayValue: "waterford-city-centre-waterford",
  });

  static readonly WATERFORD_INSTITUTE_OF_TECHNOLOGY_COLLEGE_ST_CAMPUS_WATERFORD =
    new Location({
      id: "4394",
      displayName:
        "Waterford Institute of Technology - College St campus, Waterford",
      displayValue:
        "waterford-institute-of-technology-college-st-campus-waterford",
    });

  static readonly WATERFORD_INSTITUTE_OF_TECHNOLOGY_CORK_RD_CAMPUS_WATERFORD =
    new Location({
      id: "4393",
      displayName:
        "Waterford Institute of Technology - Cork Rd campus, Waterford",
      displayValue:
        "waterford-institute-of-technology-cork-rd-campus-waterford",
    });

  static readonly WATERFORD_INSTITUTE_OF_TECHNOLOGY_KILDALTON_AGRICULTURAL_COLLEGE_KILKENNY =
    new Location({
      id: "4395",
      displayName:
        "Waterford Institute of Technology - Kildalton Agricultural College, Kilkenny",
      displayValue:
        "waterford-institute-of-technology-kildalton-agricultural-college-kilkenny",
    });

  static readonly WATERFORD_INSTITUTE_OF_TECHNOLOGY_WATERFORD = new Location({
    id: "4350",
    displayName: "Waterford Institute of Technology, Waterford",
    displayValue: "waterford-institute-of-technology-waterford",
  });

  static readonly WATERGRASSHILL_CORK = new Location({
    id: "1998",
    displayName: "Watergrasshill, Cork",
    displayValue: "watergrasshill-cork",
  });

  static readonly WATERVILLE_KERRY = new Location({
    id: "2484",
    displayName: "Waterville, Kerry",
    displayValue: "waterville-kerry",
  });

  static readonly WELCHTOWN_DONEGAL = new Location({
    id: "1758",
    displayName: "Welchtown, Donegal",
    displayValue: "welchtown-donegal",
  });

  static readonly WELLINGTONBRIDGE_WEXFORD = new Location({
    id: "3964",
    displayName: "Wellingtonbridge, Wexford",
    displayValue: "wellingtonbridge-wexford",
  });

  static readonly WELLPARK_GALWAY = new Location({
    id: "2671",
    displayName: "Wellpark, Galway",
    displayValue: "wellpark-galway",
  });

  static readonly WEST_BELFAST_CITY_ANTRIM = new Location({
    id: "53",
    displayName: "West Belfast City, Antrim",
    displayValue: "west-belfast-city-antrim",
  });

  static readonly WEST_CO_DUBLIN_DUBLIN = new Location({
    id: "44",
    displayName: "West Co. Dublin, Dublin",
    displayValue: "west-co-dublin-dublin",
  });

  static readonly WEST_CORK_CORK = new Location({
    id: "63",
    displayName: "West Cork, Cork",
    displayValue: "west-cork-cork",
  });

  static readonly WEST_TOWN_DONEGAL = new Location({
    id: "1759",
    displayName: "West Town, Donegal",
    displayValue: "west-town-donegal",
  });

  static readonly WESTBURY_CLARE = new Location({
    id: "1681",
    displayName: "Westbury, Clare",
    displayValue: "westbury-clare",
  });

  static readonly WESTCOVE_KERRY = new Location({
    id: "2485",
    displayName: "Westcove, Kerry",
    displayValue: "westcove-kerry",
  });

  static readonly WESTERN_ROAD_CORK = new Location({
    id: "1118",
    displayName: "Western Road, Cork",
    displayValue: "western-road-cork",
  });

  static readonly WESTMEATH = new Location({
    id: "7",
    displayName: "Westmeath (County)",
    displayValue: "westmeath",
  });

  static readonly WESTPORT_AND_SURROUNDS_MAYO = new Location({
    id: "4180",
    displayName: "Westport (& Surrounds), Mayo",
    displayValue: "westport-and-surrounds-mayo",
  });

  static readonly WESTPORT_QUAY_MAYO = new Location({
    id: "3280",
    displayName: "Westport Quay, Mayo",
    displayValue: "westport-quay-mayo",
  });

  static readonly WESTPORT_MAYO = new Location({
    id: "3279",
    displayName: "Westport, Mayo",
    displayValue: "westport-mayo",
  });

  static readonly WEXFORD_TOWN_AND_SURROUNDS_WEXFORD = new Location({
    id: "4181",
    displayName: "Wexford Town (& Surrounds), Wexford",
    displayValue: "wexford-town-and-surrounds-wexford",
  });

  static readonly WEXFORD_TOWN_WEXFORD = new Location({
    id: "3965",
    displayName: "Wexford Town, Wexford",
    displayValue: "wexford-town-wexford",
  });

  static readonly WHITE_CASTLE_DONEGAL = new Location({
    id: "1760",
    displayName: "White Castle, Donegal",
    displayValue: "white-castle-donegal",
  });

  static readonly WHITE_GATE_CROSS_ROADS_KERRY = new Location({
    id: "778",
    displayName: "White Gate Cross Roads, Kerry",
    displayValue: "white-gate-cross-roads-kerry",
  });

  static readonly WHITE_S_CROSS_CORK = new Location({
    id: "1211",
    displayName: "White's Cross, Cork",
    displayValue: "white-s-cross-cork",
  });

  static readonly WHITEABBEY_ANTRIM = new Location({
    id: "1421",
    displayName: "Whiteabbey, Antrim",
    displayValue: "whiteabbey-antrim",
  });

  static readonly WHITECHURCH_CORK = new Location({
    id: "1817",
    displayName: "Whitechurch, Cork",
    displayValue: "whitechurch-cork",
  });

  static readonly WHITECROSS_ARMAGH = new Location({
    id: "1475",
    displayName: "Whitecross, Armagh",
    displayValue: "whitecross-armagh",
  });

  static readonly WHITEGATE_CLARE = new Location({
    id: "1682",
    displayName: "Whitegate, Clare",
    displayValue: "whitegate-clare",
  });

  static readonly WHITEGATE_CORK = new Location({
    id: "1210",
    displayName: "Whitegate, Cork",
    displayValue: "whitegate-cork",
  });

  static readonly WHITEHALL_DUBLIN = new Location({
    id: "2147",
    displayName: "Whitehall, Dublin",
    displayValue: "whitehall-dublin",
  });

  static readonly WHITEHALL_KILKENNY = new Location({
    id: "2834",
    displayName: "Whitehall, Kilkenny",
    displayValue: "whitehall-kilkenny",
  });

  static readonly WHITEHALL_ROSCOMMON = new Location({
    id: "3471",
    displayName: "Whitehall, Roscommon",
    displayValue: "whitehall-roscommon",
  });

  static readonly WHITEHALL_WESTMEATH = new Location({
    id: "3812",
    displayName: "Whitehall, Westmeath",
    displayValue: "whitehall-westmeath",
  });

  static readonly WHITEHEAD_ANTRIM = new Location({
    id: "1422",
    displayName: "Whitehead, Antrim",
    displayValue: "whitehead-antrim",
  });

  static readonly WHITEROCK_ANTRIM = new Location({
    id: "1456",
    displayName: "Whiterock, Antrim",
    displayValue: "whiterock-antrim",
  });

  static readonly WHITEROCK_WEXFORD = new Location({
    id: "3966",
    displayName: "Whiterock, Wexford",
    displayValue: "whiterock-wexford",
  });

  static readonly WHITES_TOWN_LOUTH = new Location({
    id: "3087",
    displayName: "Whites Town, Louth",
    displayValue: "whites-town-louth",
  });

  static readonly WICKLOW_TOWN_AND_SURROUNDS_WICKLOW = new Location({
    id: "4182",
    displayName: "Wicklow Town (& Surrounds), Wicklow",
    displayValue: "wicklow-town-and-surrounds-wicklow",
  });

  static readonly WICKLOW_TOWN_WICKLOW = new Location({
    id: "4053",
    displayName: "Wicklow Town, Wicklow",
    displayValue: "wicklow-town-wicklow",
  });

  static readonly WILKINSTOWN_MEATH = new Location({
    id: "3330",
    displayName: "Wilkinstown, Meath",
    displayValue: "wilkinstown-meath",
  });

  static readonly WILLBROOK_CLARE = new Location({
    id: "325",
    displayName: "Willbrook, Clare",
    displayValue: "willbrook-clare",
  });

  static readonly WILLBROOK_DUBLIN = new Location({
    id: "2324",
    displayName: "Willbrook, Dublin",
    displayValue: "willbrook-dublin",
  });

  static readonly WILLIAMSTOWN_GALWAY = new Location({
    id: "2672",
    displayName: "Williamstown, Galway",
    displayValue: "williamstown-galway",
  });

  static readonly WILLIAMSTOWN_WESTMEATH = new Location({
    id: "3813",
    displayName: "Williamstown, Westmeath",
    displayValue: "williamstown-westmeath",
  });

  static readonly WILTON_CORK = new Location({
    id: "1212",
    displayName: "Wilton, Cork",
    displayValue: "wilton-cork",
  });

  static readonly WINDGAP_KILKENNY = new Location({
    id: "2835",
    displayName: "Windgap, Kilkenny",
    displayValue: "windgap-kilkenny",
  });

  static readonly WINDMILL_KILDARE = new Location({
    id: "801",
    displayName: "Windmill, Kildare",
    displayValue: "windmill-kildare",
  });

  static readonly WINDSOR_ANTRIM = new Location({
    id: "1457",
    displayName: "Windsor, Antrim",
    displayValue: "windsor-antrim",
  });

  static readonly WINDY_ARBOUR_DUBLIN = new Location({
    id: "2325",
    displayName: "Windy Arbour, Dublin",
    displayValue: "windy-arbour-dublin",
  });

  static readonly WOLFHILL_LAOIS = new Location({
    id: "2297",
    displayName: "Wolfhill, Laois",
    displayValue: "wolfhill-laois",
  });

  static readonly WOODENBRIDGE_WICKLOW = new Location({
    id: "4054",
    displayName: "Woodenbridge, Wicklow",
    displayValue: "woodenbridge-wicklow",
  });

  static readonly WOODFORD_GALWAY = new Location({
    id: "2673",
    displayName: "Woodford, Galway",
    displayValue: "woodford-galway",
  });

  static readonly WOODQUAY_GALWAY = new Location({
    id: "2678",
    displayName: "Woodquay, Galway",
    displayValue: "woodquay-galway",
  });

  static readonly WOODSTOCK_DOWN = new Location({
    id: "1094",
    displayName: "Woodstock, Down",
    displayValue: "woodstock-down",
  });

  static readonly WOODSTOWN_WATERFORD = new Location({
    id: "3723",
    displayName: "Woodstown, Waterford",
    displayValue: "woodstown-waterford",
  });

  static readonly WOODVALE_ANTRIM = new Location({
    id: "1458",
    displayName: "Woodvale, Antrim",
    displayValue: "woodvale-antrim",
  });

  static readonly YELLOW_FURZE_MEATH = new Location({
    id: "3338",
    displayName: "Yellow Furze, Meath",
    displayValue: "yellow-furze-meath",
  });

  static readonly YOUGHAL_AND_SURROUNDS_CORK = new Location({
    id: "4183",
    displayName: "Youghal (& Surrounds), Cork",
    displayValue: "youghal-and-surrounds-cork",
  });

  static readonly YOUGHAL_CORK = new Location({
    id: "1213",
    displayName: "Youghal, Cork",
    displayValue: "youghal-cork",
  });

  static readonly YOUGHAL_TIPPERARY = new Location({
    id: "3643",
    displayName: "Youghal, Tipperary",
    displayValue: "youghal-tipperary",
  });
}

// All locations as an array for iteration
export const ALL_LOCATIONS = [
  Location.ABBEY_GALWAY,
  Location.ABBEYDORNEY_KERRY,
  Location.ABBEYFEALE_KERRY,
  Location.ABBEYFEALE_LIMERICK,
  Location.ABBEYKNOCKMOY_GALWAY,
  Location.ABBEYLARA_LONGFORD,
  Location.ABBEYLEIX_LAOIS,
  Location.ABBEYSHRULE_LONGFORD,
  Location.ABINGTON_LIMERICK,
  Location.ACHILL_SOUND_MAYO,
  Location.ACHILL_MAYO,
  Location.ACHONRY_SLIGO,
  Location.ACLARE_SLIGO,
  Location.ADAMSTOWN_DUBLIN,
  Location.ADAMSTOWN_WEXFORD,
  Location.ADARE_LIMERICK,
  Location.ADRIGOLE_CORK,
  Location.AGHABOE_LAOIS,
  Location.AGHABOG_MONAGHAN,
  Location.AGHABULLOGUE_CORK,
  Location.AGHACASHEL_LEITRIM,
  Location.AGHADA_CORK,
  Location.AGHADIFFIN_MAYO,
  Location.AGHADOE_KERRY,
  Location.AGHADOON_MAYO,
  Location.AGHADOWEY_DERRY,
  Location.AGHAGALLON_ANTRIM,
  Location.AGHAGOWER_MAYO,
  Location.AGHALEE_ANTRIM,
  Location.AGHAMORE_LEITRIM,
  Location.AGHAMORE_MAYO,
  Location.AGHAVILLE_CORK,
  Location.AGHLEAM_MAYO,
  Location.AGHNABLANEY_FERMANAGH,
  Location.AGHOWLE_WICKLOW,
  Location.AGLISH_TIPPERARY,
  Location.AGLISH_WATERFORD,
  Location.AHAKISTA_CORK,
  Location.AHANE_LIMERICK,
  Location.AHARNEY_OFFALY,
  Location.AHASCRAGH_GALWAY,
  Location.AHENNY_TIPPERARY,
  Location.AHERLA_CORK,
  Location.AHERLOW_TIPPERARY,
  Location.AHOGHILL_ANTRIM,
  Location.AILLE_GALWAY,
  Location.ALBERTBRIDGE_ROAD_DOWN,
  Location.ALDERGROVE_ANTRIM,
  Location.ALL_HALLOWS_COLLEGE_DUBLIN,
  Location.ALLEN_KILDARE,
  Location.ALLENWOOD_KILDARE,
  Location.ALLIHIES_CORK,
  Location.ALLOON_LOWER_GALWAY,
  Location.ALTAGOWLAN_ROSCOMMON,
  Location.ALTNAPASTE_DONEGAL,
  Location.AMERICAN_COLLEGE_DUBLIN_DUBLIN,
  Location.AN_GEATA_MOR_MAYO,
  Location.ANASCAUL_KERRY,
  Location.ANDERSONSTOWN_ANTRIM,
  Location.ANGLESBORO_LIMERICK,
  Location.ANNACARRIGA_CLARE,
  Location.ANNACARTY_TIPPERARY,
  Location.ANNACLONE_DOWN,
  Location.ANNACLOY_DOWN,
  Location.ANNACOTTY_LIMERICK,
  Location.ANNADALE_ANTRIM,
  Location.ANNADUFF_LEITRIM,
  Location.ANNAGASSAN_LOUTH,
  Location.ANNAGHDOWN_GALWAY,
  Location.ANNAGRY_DONEGAL,
  Location.ANNAHILT_DOWN,
  Location.ANNALLONG_DOWN,
  Location.ANNAMOE_WICKLOW,
  Location.ANNAYALLA_MONAGHAN,
  Location.ANNESTOWN_WATERFORD,
  Location.ANNFIELD_TIPPERARY,
  Location.ANTRIM_ROAD_ANTRIM,
  Location.ANTRIM_ANTRIM,
  Location.ARAGLIN_CORK,
  Location.ARAN_ISLANDS_GALWAY,
  Location.ARBOUR_HILL_DUBLIN,
  Location.ARCHERSTOWN_WESTMEATH,
  Location.ARD_NA_GREINE_DUBLIN,
  Location.ARD_GALWAY,
  Location.ARDAGH_DONEGAL,
  Location.ARDAGH_LIMERICK,
  Location.ARDAGH_LONGFORD,
  Location.ARDAMINE_WEXFORD,
  Location.ARDAN_OFFALY,
  Location.ARDANAIRY_WICKLOW,
  Location.ARDANEW_MEATH,
  Location.ARDARA_DONEGAL,
  Location.ARDATTIN_CARLOW,
  Location.ARDBOE_TYRONE,
  Location.ARDCATH_MEATH,
  Location.ARDCLOON_GALWAY,
  Location.ARDCRONY_TIPPERARY,
  Location.ARDEA_KERRY,
  Location.ARDEE_AND_SURROUNDS_LOUTH,
  Location.ARDEE_LOUTH,
  Location.ARDFERT_KERRY,
  Location.ARDFIELD_CORK,
  Location.ARDFINNAN_TIPPERARY,
  Location.ARDGEHANE_CORK,
  Location.ARDGLASS_CORK,
  Location.ARDGLASS_DOWN,
  Location.ARDGROOM_CORK,
  Location.ARDKEEN_DOWN,
  Location.ARDKEEN_WATERFORD,
  Location.ARDLEA_LAOIS,
  Location.ARDLOUGHER_CAVAN,
  Location.ARDMILLAN_DOWN,
  Location.ARDMORE_DERRY,
  Location.ARDMORE_GALWAY,
  Location.ARDMORE_WATERFORD,
  Location.ARDMORNEY_WESTMEATH,
  Location.ARDMOY_SLIGO,
  Location.ARDNACRUSHA_CLARE,
  Location.ARDNADOMAN_GALWAY,
  Location.ARDNAGREEVAGH_GALWAY,
  Location.ARDNASODAN_GALWAY,
  Location.ARDOYNE_ANTRIM,
  Location.ARDPATRICK_LIMERICK,
  Location.ARDRAHAN_GALWAY,
  Location.ARDSCULL_KILDARE,
  Location.ARDSHANKILL_FERMANAGH,
  Location.ARIGNA_ROSCOMMON,
  Location.ARKLOW_AND_SURROUNDS_WICKLOW,
  Location.ARKLOW_WICKLOW,
  Location.ARLESS_LAOIS,
  Location.ARMAGH_ARMAGH,
  Location.ARMOY_ANTRIM,
  Location.ARRANMORE_DONEGAL,
  Location.ARRYHEERNABIN_DONEGAL,
  Location.ARTANE_DUBLIN,
  Location.ARTHURSTOWN_WEXFORD,
  Location.ARTICLAVE_DERRY,
  Location.ARTIGARVAN_TYRONE,
  Location.ARVA_CAVAN,
  Location.ASHBOURNE_AND_SURROUNDS_MEATH,
  Location.ASHBOURNE_MEATH,
  Location.ASHFORD_LIMERICK,
  Location.ASHFORD_WICKLOW,
  Location.ASHINGTON_DUBLIN,
  Location.ASHTON_CORK,
  Location.ASHTOWN_DUBLIN,
  Location.ASKAMORE_WEXFORD,
  Location.ASKANAGAP_WICKLOW,
  Location.ASKEATON_LIMERICK,
  Location.ASKILL_LEITRIM,
  Location.ASTEE_KERRY,
  Location.ATHBOY_MEATH,
  Location.ATHDOWN_WICKLOW,
  Location.ATHEA_LIMERICK,
  Location.ATHENRY_AND_SURROUNDS_GALWAY,
  Location.ATHENRY_GALWAY,
  Location.ATHGARVAN_KILDARE,
  Location.ATHLACCA_LIMERICK,
  Location.ATHLEAGUE_ROSCOMMON,
  Location.ATHLONE_AND_SURROUNDS_ROSCOMMON,
  Location.ATHLONE_AND_SURROUNDS_WESTMEATH,
  Location.ATHLONE_INSTITUTE_OF_TECHNOLOGY_WESTMEATH,
  Location.ATHLONE_ROSCOMMON,
  Location.ATHLONE_WESTMEATH,
  Location.ATHLUMNEY_MEATH,
  Location.ATHNID_TIPPERARY,
  Location.ATHY_AND_SURROUNDS_KILDARE,
  Location.ATHY_KILDARE,
  Location.ATTAVALLY_MAYO,
  Location.ATTICAL_DOWN,
  Location.ATTYMASS_MAYO,
  Location.ATTYMON_GALWAY,
  Location.AUCLOGGEEN_GALWAY,
  Location.AUGHA_CARLOW,
  Location.AUGHACASHEL_LEITRIM,
  Location.AUGHACASLA_KERRY,
  Location.AUGHAGAULT_DONEGAL,
  Location.AUGHAVANNAGH_WICKLOW,
  Location.AUGHAVAS_LEITRIM,
  Location.AUGHER_TYRONE,
  Location.AUGHILS_KERRY,
  Location.AUGHINISH_CLARE,
  Location.AUGHKEELY_DONEGAL,
  Location.AUGHNACLIFFE_LONGFORD,
  Location.AUGHNACLOY_TYRONE,
  Location.AUGHNAMULLEN_MONAGHAN,
  Location.AUGHNASHEELAN_LEITRIM,
  Location.AUGHRIM_GALWAY,
  Location.AUGHRIM_WICKLOW,
  Location.AUGHRIS_SLIGO,
  Location.AUGHRUS_MORE_GALWAY,
  Location.AVOCA_WICKLOW,
  Location.AYLESBURY_DUBLIN,
  Location.AYRFIELD_DUBLIN,
  Location.BAGENALSTOWN_CARLOW,
  Location.BAILIEBOROUGH_AND_SURROUNDS_CAVAN,
  Location.BAILIEBOROUGH_CAVAN,
  Location.BALBRIGGAN_AND_SURROUNDS_DUBLIN,
  Location.BALBRIGGAN_DUBLIN,
  Location.BALDONNELL_DUBLIN,
  Location.BALDOYLE_DUBLIN,
  Location.BALDWINSTOWN_WEXFORD,
  Location.BALGRIFFIN_DUBLIN,
  Location.BALLA_MAYO,
  Location.BALLACOLLA_LAOIS,
  Location.BALLAGH_FERMANAGH,
  Location.BALLAGH_GALWAY,
  Location.BALLAGH_LIMERICK,
  Location.BALLAGH_ROSCOMMON,
  Location.BALLAGH_TIPPERARY,
  Location.BALLAGHADERREEN_ROSCOMMON,
  Location.BALLAGHBEHY_LIMERICK,
  Location.BALLAGHKEEN_WEXFORD,
  Location.BALLAGHMORE_LAOIS,
  Location.BALLAGHNATRILLICK_SLIGO,
  Location.BALLARD_GALWAY,
  Location.BALLARD_WICKLOW,
  Location.BALLARDIGGAN_GALWAY,
  Location.BALLEEN_KILKENNY,
  Location.BALLICKMOYLER_LAOIS,
  Location.BALLINA_AND_SURROUNDS_MAYO,
  Location.BALLINA_MAYO,
  Location.BALLINA_TIPPERARY,
  Location.BALLINABARNA_WEXFORD,
  Location.BALLINABOOLA_WEXFORD,
  Location.BALLINABOY_GALWAY,
  Location.BALLINABRACKEY_MEATH,
  Location.BALLINABRANAGH_CARLOW,
  Location.BALLINACARROW_SLIGO,
  Location.BALLINACLASH_WICKLOW,
  Location.BALLINACOR_WICKLOW,
  Location.BALLINACURRA_LIMERICK,
  Location.BALLINADEE_CORK,
  Location.BALLINAFAD_GALWAY,
  Location.BALLINAFAD_SLIGO,
  Location.BALLINAGAR_OFFALY,
  Location.BALLINAGARE_ROSCOMMON,
  Location.BALLINAGARRANE_LIMERICK,
  Location.BALLINAGH_CAVAN,
  Location.BALLINAGLERAGH_LEITRIM,
  Location.BALLINAGORE_WESTMEATH,
  Location.BALLINAHEGLISH_ROSCOMMON,
  Location.BALLINAHINCH_TIPPERARY,
  Location.BALLINAHOW_KERRY,
  Location.BALLINAHOW_TIPPERARY,
  Location.BALLINAHOWN_WESTMEATH,
  Location.BALLINAKILL_KILKENNY,
  Location.BALLINAKILL_LAOIS,
  Location.BALLINALACK_WESTMEATH,
  Location.BALLINALEA_WICKLOW,
  Location.BALLINALEE_LONGFORD,
  Location.BALLINAMARA_KILKENNY,
  Location.BALLINAMEEN_ROSCOMMON,
  Location.BALLINAMONA_WATERFORD,
  Location.BALLINAMORE_BRIDGE_GALWAY,
  Location.BALLINAMORE_LEITRIM,
  Location.BALLINAMUCK_LONGFORD,
  Location.BALLINAMULT_WATERFORD,
  Location.BALLINASCARTY_CORK,
  Location.BALLINASCORNEY_DUBLIN,
  Location.BALLINASLOE_AND_SURROUNDS_GALWAY,
  Location.BALLINASLOE_GALWAY,
  Location.BALLINASPICK_WATERFORD,
  Location.BALLINCLASHET_CORK,
  Location.BALLINCLEA_WICKLOW,
  Location.BALLINCLOHER_KERRY,
  Location.BALLINCOLLIG_CORK,
  Location.BALLINCREA_KILKENNY,
  Location.BALLINCROKIG_CORK,
  Location.BALLINCURRIG_CORK,
  Location.BALLINDAGGAN_WEXFORD,
  Location.BALLINDERREEN_GALWAY,
  Location.BALLINDERRY_TIPPERARY,
  Location.BALLINDERRY_WICKLOW,
  Location.BALLINDINE_MAYO,
  Location.BALLINDRAIT_DONEGAL,
  Location.BALLINDUD_WATERFORD,
  Location.BALLINEANIG_KERRY,
  Location.BALLINEEN_CORK,
  Location.BALLINFULL_SLIGO,
  Location.BALLINGARRY_LIMERICK,
  Location.BALLINGARRY_TIPPERARY,
  Location.BALLINGEARY_CORK,
  Location.BALLINGURTEEN_CORK,
  Location.BALLINHASSIG_CORK,
  Location.BALLINKILLIN_CARLOW,
  Location.BALLINLEENY_LIMERICK,
  Location.BALLINLOGHIG_KERRY,
  Location.BALLINLOUGH_CORK,
  Location.BALLINLOUGH_MEATH,
  Location.BALLINLOUGH_ROSCOMMON,
  Location.BALLINLUSKA_CORK,
  Location.BALLINODE_MONAGHAN,
  Location.BALLINODE_SLIGO,
  Location.BALLINORA_CORK,
  Location.BALLINREA_CORK,
  Location.BALLINROBE_MAYO,
  Location.BALLINRUAN_CLARE,
  Location.BALLINSKELLIGS_KERRY,
  Location.BALLINSPITTLE_CORK,
  Location.BALLINTEER_DUBLIN,
  Location.BALLINTEMPLE_CORK,
  Location.BALLINTEMPLE_GALWAY,
  Location.BALLINTOGHER_SLIGO,
  Location.BALLINTOY_ANTRIM,
  Location.BALLINTRA_DONEGAL,
  Location.BALLINTRILLICK_SLIGO,
  Location.BALLINTUBBER_MAYO,
  Location.BALLINTUBBER_ROSCOMMON,
  Location.BALLINTUBBERT_LAOIS,
  Location.BALLINURE_CORK,
  Location.BALLINURE_TIPPERARY,
  Location.BALLINVARRY_KILKENNY,
  Location.BALLINVEILTIG_CORK,
  Location.BALLINVOULTIG_CORK,
  Location.BALLINVRINSIG_CORK,
  Location.BALLINVUSKIG_CORK,
  Location.BALLISODARE_SLIGO,
  Location.BALLITORE_KILDARE,
  Location.BALLIVOR_MEATH,
  Location.BALLON_CARLOW,
  Location.BALLOOR_LEITRIM,
  Location.BALLOUGHTER_WEXFORD,
  Location.BALLSBRIDGE_DUBLIN,
  Location.BALLURE_DONEGAL,
  Location.BALLYADAMS_LAOIS,
  Location.BALLYAGRAN_LIMERICK,
  Location.BALLYALLINAN_LIMERICK,
  Location.BALLYANEEN_WATERFORD,
  Location.BALLYBANE_GALWAY,
  Location.BALLYBANNON_CARLOW,
  Location.BALLYBAY_AND_SURROUNDS_MONAGHAN,
  Location.BALLYBAY_MONAGHAN,
  Location.BALLYBEG_TIPPERARY,
  Location.BALLYBODEN_DUBLIN,
  Location.BALLYBOFEY_AND_SURROUNDS_DONEGAL,
  Location.BALLYBOFEY_DONEGAL,
  Location.BALLYBOGY_ANTRIM,
  Location.BALLYBOUGH_DUBLIN,
  Location.BALLYBOUGHAL_DUBLIN,
  Location.BALLYBOY_OFFALY,
  Location.BALLYBRACK_DUBLIN,
  Location.BALLYBRACK_KERRY,
  Location.BALLYBRIT_GALWAY,
  Location.BALLYBRITTAS_LAOIS,
  Location.BALLYBROMMEL_CARLOW,
  Location.BALLYBROOD_LIMERICK,
  Location.BALLYBROPHY_LAOIS,
  Location.BALLYBRYAN_OFFALY,
  Location.BALLYBUNION_KERRY,
  Location.BALLYBURDEN_CORK,
  Location.BALLYBURKE_GALWAY,
  Location.BALLYCAHILL_TIPPERARY,
  Location.BALLYCALLAN_KILKENNY,
  Location.BALLYCANEW_WEXFORD,
  Location.BALLYCARNEY_WEXFORD,
  Location.BALLYCARRY_ANTRIM,
  Location.BALLYCASTLE_ANTRIM,
  Location.BALLYCASTLE_MAYO,
  Location.BALLYCLARE_ANTRIM,
  Location.BALLYCLARE_ROSCOMMON,
  Location.BALLYCLERAHAN_TIPPERARY,
  Location.BALLYCLERY_GALWAY,
  Location.BALLYCLOUGH_CORK,
  Location.BALLYCLOUGH_LIMERICK,
  Location.BALLYCOLLA_LAOIS,
  Location.BALLYCOMMON_TIPPERARY,
  Location.BALLYCONNEELY_GALWAY,
  Location.BALLYCONNELL_CAVAN,
  Location.BALLYCONNELL_SLIGO,
  Location.BALLYCONNELL_WICKLOW,
  Location.BALLYCONNIGAR_WEXFORD,
  Location.BALLYCOOLIN_DUBLIN,
  Location.BALLYCORICK_CLARE,
  Location.BALLYCORUS_DUBLIN,
  Location.BALLYCOTTON_CORK,
  Location.BALLYCROSSAUN_GALWAY,
  Location.BALLYCROY_MAYO,
  Location.BALLYCULLANE_WEXFORD,
  Location.BALLYCULLEN_DUBLIN,
  Location.BALLYCULLEN_WICKLOW,
  Location.BALLYCUMBER_OFFALY,
  Location.BALLYCUMMIN_LIMERICK,
  Location.BALLYDANGAN_ROSCOMMON,
  Location.BALLYDAVID_GALWAY,
  Location.BALLYDAVID_KERRY,
  Location.BALLYDAVIS_LAOIS,
  Location.BALLYDEHOB_CORK,
  Location.BALLYDESMOND_CORK,
  Location.BALLYDONEGAN_CORK,
  Location.BALLYDUFF_KERRY,
  Location.BALLYDUFF_WATERFORD,
  Location.BALLYDUFF_WEXFORD,
  Location.BALLYEDMOND_WEXFORD,
  Location.BALLYFAD_WEXFORD,
  Location.BALLYFAIR_KILDARE,
  Location.BALLYFARNAGH_MAYO,
  Location.BALLYFARNON_ROSCOMMON,
  Location.BALLYFEARD_CORK,
  Location.BALLYFERMOT_COLLEGE_OF_FURTHER_EDUCATION_DUBLIN,
  Location.BALLYFERMOT_DUBLIN,
  Location.BALLYFERRITER_KERRY,
  Location.BALLYFIN_LAOIS,
  Location.BALLYFINAGHY_ANTRIM,
  Location.BALLYFORAN_ROSCOMMON,
  Location.BALLYFORE_OFFALY,
  Location.BALLYFOYLE_KILKENNY,
  Location.BALLYGAR_GALWAY,
  Location.BALLYGARRETT_WEXFORD,
  Location.BALLYGARRIES_MAYO,
  Location.BALLYGARVAN_CORK,
  Location.BALLYGAWLEY_SLIGO,
  Location.BALLYGAWLEY_TYRONE,
  Location.BALLYGLASS_MAYO,
  Location.BALLYGLUNIN_GALWAY,
  Location.BALLYGOMARTIN_ANTRIM,
  Location.BALLYGORMAN_DONEGAL,
  Location.BALLYGOWAN_DOWN,
  Location.BALLYGRENNAN_LIMERICK,
  Location.BALLYGRIFFIN_KILKENNY,
  Location.BALLYGRIFFIN_TIPPERARY,
  Location.BALLYGUNNER_WATERFORD,
  Location.BALLYHACK_WEXFORD,
  Location.BALLYHACKAMORE_ANTRIM,
  Location.BALLYHACKET_CARLOW,
  Location.BALLYHAGHT_LIMERICK,
  Location.BALLYHAHILL_LIMERICK,
  Location.BALLYHAISE_CAVAN,
  Location.BALLYHALBERT_DOWN,
  Location.BALLYHALE_GALWAY,
  Location.BALLYHALE_KILKENNY,
  Location.BALLYHAR_KERRY,
  Location.BALLYHAUNIS_MAYO,
  Location.BALLYHEAN_MAYO,
  Location.BALLYHEAR_GALWAY,
  Location.BALLYHEELAN_CAVAN,
  Location.BALLYHEERIN_DONEGAL,
  Location.BALLYHEIGUE_KERRY,
  Location.BALLYHILLIN_DONEGAL,
  Location.BALLYHOE_MEATH,
  Location.BALLYHOGUE_WEXFORD,
  Location.BALLYHOLME_DOWN,
  Location.BALLYHOOLY_CORK,
  Location.BALLYHORNAN_DOWN,
  Location.BALLYHUPPAHANE_LAOIS,
  Location.BALLYJAMESDUFF_CAVAN,
  Location.BALLYKEAN_OFFALY,
  Location.BALLYKEEFE_KILKENNY,
  Location.BALLYKEEL_ANTRIM,
  Location.BALLYKEEL_DOWN,
  Location.BALLYKEERAN_WESTMEATH,
  Location.BALLYKELLY_DERRY,
  Location.BALLYKEOGHAN_KILKENNY,
  Location.BALLYKILLEEN_OFFALY,
  Location.BALLYKNOCKAN_WICKLOW,
  Location.BALLYLACY_WEXFORD,
  Location.BALLYLAGHNAN_CLARE,
  Location.BALLYLANDERS_LIMERICK,
  Location.BALLYLANEEN_WATERFORD,
  Location.BALLYLEAGUE_ROSCOMMON,
  Location.BALLYLESSON_DOWN,
  Location.BALLYLICKEY_CORK,
  Location.BALLYLIFFIN_DONEGAL,
  Location.BALLYLINE_KILKENNY,
  Location.BALLYLONGFORD_KERRY,
  Location.BALLYLOOBY_TIPPERARY,
  Location.BALLYLUCAS_WEXFORD,
  Location.BALLYLYNAN_LAOIS,
  Location.BALLYMACARBRY_WATERFORD,
  Location.BALLYMACARRETT_DOWN,
  Location.BALLYMACAW_WATERFORD,
  Location.BALLYMACELLIGOTT_KERRY,
  Location.BALLYMACHUGH_CAVAN,
  Location.BALLYMACK_KILKENNY,
  Location.BALLYMACKEY_TIPPERARY,
  Location.BALLYMACODA_CORK,
  Location.BALLYMACURLEY_ROSCOMMON,
  Location.BALLYMACWARD_GALWAY,
  Location.BALLYMADOG_CORK,
  Location.BALLYMAGAN_DONEGAL,
  Location.BALLYMAGARAGHY_DONEGAL,
  Location.BALLYMAGARRY_ANTRIM,
  Location.BALLYMAGORRY_TYRONE,
  Location.BALLYMAHON_LONGFORD,
  Location.BALLYMAKEAGH_CORK,
  Location.BALLYMAKEERA_CORK,
  Location.BALLYMAKENNY_LOUTH,
  Location.BALLYMARTIN_DOWN,
  Location.BALLYMARTLE_CORK,
  Location.BALLYMENA_ANTRIM,
  Location.BALLYMITTY_WEXFORD,
  Location.BALLYMOE_GALWAY,
  Location.BALLYMONEEN_GALWAY,
  Location.BALLYMONEY_ANTRIM,
  Location.BALLYMONEY_WEXFORD,
  Location.BALLYMORE_EUSTACE_KILDARE,
  Location.BALLYMORE_DONEGAL,
  Location.BALLYMORE_WESTMEATH,
  Location.BALLYMORRIS_WICKLOW,
  Location.BALLYMOTE_SLIGO,
  Location.BALLYMOUNT_DUBLIN,
  Location.BALLYMUN_DUBLIN,
  Location.BALLYMURN_WEXFORD,
  Location.BALLYMURPHY_ANTRIM,
  Location.BALLYMURPHY_CARLOW,
  Location.BALLYMURRAGH_LIMERICK,
  Location.BALLYMURRAY_ROSCOMMON,
  Location.BALLYNACALLAGH_CORK,
  Location.BALLYNACALLY_CLARE,
  Location.BALLYNACARRICK_DONEGAL,
  Location.BALLYNACARRIGA_CORK,
  Location.BALLYNACARRIGY_WESTMEATH,
  Location.BALLYNACORRA_CORK,
  Location.BALLYNACOURTY_WATERFORD,
  Location.BALLYNADRUMNY_KILDARE,
  Location.BALLYNAFEIGH_ANTRIM,
  Location.BALLYNAFID_WESTMEATH,
  Location.BALLYNAGAUL_WATERFORD,
  Location.BALLYNAGREE_CORK,
  Location.BALLYNAGUILKEE_WATERFORD,
  Location.BALLYNAHINCH_DOWN,
  Location.BALLYNAHINCH_GALWAY,
  Location.BALLYNAHOWN_GALWAY,
  Location.BALLYNAKILL_CARLOW,
  Location.BALLYNAKILL_OFFALY,
  Location.BALLYNAKILL_WESTMEATH,
  Location.BALLYNAKILLY_KERRY,
  Location.BALLYNAMALLARD_FERMANAGH,
  Location.BALLYNAMONA_CORK,
  Location.BALLYNANTY_LIMERICK,
  Location.BALLYNARE_MEATH,
  Location.BALLYNASHANNAGH_DONEGAL,
  Location.BALLYNASKREENA_KERRY,
  Location.BALLYNASTANGFORD_MAYO,
  Location.BALLYNASTRAW_WEXFORD,
  Location.BALLYNEETY_LIMERICK,
  Location.BALLYNEIL_TIPPERARY,
  Location.BALLYNOE_CORK,
  Location.BALLYNOE_DOWN,
  Location.BALLYNONTY_TIPPERARY,
  Location.BALLYNURE_ANTRIM,
  Location.BALLYORGAN_LIMERICK,
  Location.BALLYPATRICK_TIPPERARY,
  Location.BALLYPHEHANE_CORK,
  Location.BALLYPOREEN_TIPPERARY,
  Location.BALLYQUIN_KERRY,
  Location.BALLYRAGGET_KILKENNY,
  Location.BALLYROAN_LAOIS,
  Location.BALLYROBERT_ANTRIM,
  Location.BALLYRODDY_ROSCOMMON,
  Location.BALLYROE_KILDARE,
  Location.BALLYROEBUCK_WEXFORD,
  Location.BALLYRONAN_DERRY,
  Location.BALLYRONEY_DOWN,
  Location.BALLYROON_CORK,
  Location.BALLYRUSHBOY_DOWN,
  Location.BALLYSAX_KILDARE,
  Location.BALLYSHANNON_AND_SURROUNDS_DONEGAL,
  Location.BALLYSHANNON_DONEGAL,
  Location.BALLYSHANNON_KILDARE,
  Location.BALLYSHEEDY_LIMERICK,
  Location.BALLYSILLAN_ANTRIM,
  Location.BALLYSIMON_LIMERICK,
  Location.BALLYSLOE_TIPPERARY,
  Location.BALLYSTEEN_LIMERICK,
  Location.BALLYTOOHY_MAYO,
  Location.BALLYTRUCKLE_WATERFORD,
  Location.BALLYVARY_MAYO,
  Location.BALLYVAUGHAN_CLARE,
  Location.BALLYVOGE_CORK,
  Location.BALLYVOLANE_CORK,
  Location.BALLYVONEEN_GALWAY,
  Location.BALLYVOURNEY_CORK,
  Location.BALLYWALTER_DOWN,
  Location.BALLYWARD_DOWN,
  Location.BALLYWILLIAM_WEXFORD,
  Location.BALNAMORE_ANTRIM,
  Location.BALRATH_MEATH,
  Location.BALROTHERY_DUBLIN,
  Location.BALSCADDAN_DUBLIN,
  Location.BALTIMORE_CORK,
  Location.BALTINGLASS_WICKLOW,
  Location.BALTRAY_LOUTH,
  Location.BANADA_SLIGO,
  Location.BANAGHER_OFFALY,
  Location.BANBRIDGE_DOWN,
  Location.BANDON_AND_SURROUNDS_CORK,
  Location.BANDON_CORK,
  Location.BANDUFF_CORK,
  Location.BANEMORE_LIMERICK,
  Location.BANGOR_ERRIS_MAYO,
  Location.BANGOR_DOWN,
  Location.BANNA_KERRY,
  Location.BANNAGHER_GALWAY,
  Location.BANNOW_WEXFORD,
  Location.BANOGUE_LIMERICK,
  Location.BANSHA_TIPPERARY,
  Location.BANTEER_CORK,
  Location.BANTRY_AND_SURROUNDS_CORK,
  Location.BANTRY_CORK,
  Location.BAREFIELD_CLARE,
  Location.BARLEY_COVE_CORK,
  Location.BARNA_GALWAY,
  Location.BARNA_LIMERICK,
  Location.BARNA_OFFALY,
  Location.BARNACAHOGE_MAYO,
  Location.BARNADARRIG_WICKLOW,
  Location.BARNADERG_GALWAY,
  Location.BARNATRA_MAYO,
  Location.BARNAVARA_CORK,
  Location.BARNESMORE_DONEGAL,
  Location.BARNTOWN_WEXFORD,
  Location.BARNYCARROLL_MAYO,
  Location.BARRACK_VILLAGE_KILKENNY,
  Location.BARRADUFF_KERRY,
  Location.BARRIGONE_LIMERICK,
  Location.BARRINGTONSBRIDGE_LIMERICK,
  Location.BARRY_LONGFORD,
  Location.BARTLEMY_CORK,
  Location.BATTERSTOWN_MEATH,
  Location.BAUNSKEHA_KILKENNY,
  Location.BAUNTLIEVE_CLARE,
  Location.BAWNBOY_CAVAN,
  Location.BAYSIDE_DUBLIN,
  Location.BEAGH_GALWAY,
  Location.BEAGH_LEITRIM,
  Location.BEAL_KERRY,
  Location.BEALACLUGGA_CLARE,
  Location.BEALAD_CROSS_ROADS_CORK,
  Location.BEALAHA_CLARE,
  Location.BEALDANGAN_GALWAY,
  Location.BEALIN_WESTMEATH,
  Location.BEALNABLATH_CORK,
  Location.BEARA_CORK,
  Location.BEAUFORT_KERRY,
  Location.BEAUMONT_DUBLIN,
  Location.BECTIVE_MEATH,
  Location.BEECHMOUNT_ANTRIM,
  Location.BEENNASKEHY_CORK,
  Location.BEERSBRIDGE_DOWN,
  Location.BEKAN_MAYO,
  Location.BELCARRA_MAYO,
  Location.BELCLARE_GALWAY,
  Location.BELCOO_FERMANAGH,
  Location.BELDERRIG_MAYO,
  Location.BELFARSAD_MAYO,
  Location.BELFAST_CITY,
  Location.BELFAST_CITY_CENTRE_ANTRIM,
  Location.BELFAST_COMMUTER_TOWNS_ANTRIM,
  Location.BELFIELD_DUBLIN,
  Location.BELGOOLY_CORK,
  Location.BELLACORICK_MAYO,
  Location.BELLADRIHID_SLIGO,
  Location.BELLAGARVAUN_MAYO,
  Location.BELLAGHY_DERRY,
  Location.BELLAGHY_SLIGO,
  Location.BELLAHY_SLIGO,
  Location.BELLANACARGY_CAVAN,
  Location.BELLANAGARE_ROSCOMMON,
  Location.BELLANALECK_FERMANAGH,
  Location.BELLANAMORE_DONEGAL,
  Location.BELLEEK_ARMAGH,
  Location.BELLEEK_FERMANAGH,
  Location.BELLEVUE_ANTRIM,
  Location.BELLEWSTOWN_MEATH,
  Location.BELLHARBOUR_CLARE,
  Location.BELMONT_DOWN,
  Location.BELMONT_OFFALY,
  Location.BELMULLET_MAYO,
  Location.BELTRA_MAYO,
  Location.BELTRA_SLIGO,
  Location.BELTURBET_CAVAN,
  Location.BELVELLY_CORK,
  Location.BELVILLE_MAYO,
  Location.BELVOIR_DOWN,
  Location.BENBURB_TYRONE,
  Location.BENDOORAGH_ANTRIM,
  Location.BENNEKERRY_CARLOW,
  Location.BENNETTSBRIDGE_KILKENNY,
  Location.BERAGH_TYRONE,
  Location.BERE_ISLAND_CORK,
  Location.BERRINGS_CORK,
  Location.BESSBROOK_ARMAGH,
  Location.BETTYSTOWN_AND_SURROUNDS_MEATH,
  Location.BETTYSTOWN_MEATH,
  Location.BILBOA_LAOIS,
  Location.BILLIS_BRIDGE_CAVAN,
  Location.BIRDHILL_TIPPERARY,
  Location.BIRR_AND_SURROUNDS_OFFALY,
  Location.BIRR_OFFALY,
  Location.BISHOPSTOWN_CORK,
  Location.BLACK_LION_OFFALY,
  Location.BLACKBULL_MEATH,
  Location.BLACKLION_CAVAN,
  Location.BLACKPOOL_CORK,
  Location.BLACKROCK_CORK,
  Location.BLACKROCK_DUBLIN,
  Location.BLACKROCK_LOUTH,
  Location.BLACKSKULL_DOWN,
  Location.BLACKSTAFF_ANTRIM,
  Location.BLACKWATER_WEXFORD,
  Location.BLACKWATERTOWN_ARMAGH,
  Location.BLAINROE_WICKLOW,
  Location.BLANCHARDSTOWN_DUBLIN,
  Location.BLANEY_FERMANAGH,
  Location.BLARNEY_CORK,
  Location.BLEARY_DOWN,
  Location.BLESSINGTON_AND_SURROUNDS_WICKLOW,
  Location.BLESSINGTON_WICKLOW,
  Location.BLOOMFIELD_DOWN,
  Location.BLUE_BALL_OFFALY,
  Location.BLUEBELL_DUBLIN,
  Location.BLUEFORD_CORK,
  Location.BOARDMILLS_DOWN,
  Location.BODYKE_CLARE,
  Location.BOFEENAUN_MAYO,
  Location.BOGAY_DONEGAL,
  Location.BOGGAN_MEATH,
  Location.BOGGAUN_TIPPERARY,
  Location.BOHATCH_CLARE,
  Location.BOHAUN_MAYO,
  Location.BOHEESHIL_KERRY,
  Location.BOHER_LIMERICK,
  Location.BOHERAPHUCA_OFFALY,
  Location.BOHERBUE_CORK,
  Location.BOHEREEN_LIMERICK,
  Location.BOHERLAHAN_TIPPERARY,
  Location.BOHERMEEN_MEATH,
  Location.BOHERMORE_GALWAY,
  Location.BOHERNABREENA_DUBLIN,
  Location.BOHERQUILL_WESTMEATH,
  Location.BOHO_FERMANAGH,
  Location.BOHOLA_MAYO,
  Location.BOLEY_KILDARE,
  Location.BOLEYBEG_EAST_GALWAY,
  Location.BOLEYBEG_GALWAY,
  Location.BOLEYNASRUHAUN_GALWAY,
  Location.BOLINGLANNA_MAYO,
  Location.BONANE_KERRY,
  Location.BONNICONLON_MAYO,
  Location.BOOLA_WATERFORD,
  Location.BOOLAKENNEDY_TIPPERARY,
  Location.BOOLATTIN_WATERFORD,
  Location.BOOLAVOGUE_WEXFORD,
  Location.BOOLTEENS_KERRY,
  Location.BOOLYDUFF_CLARE,
  Location.BOOTERSTOWN_DUBLIN,
  Location.BORNACOOLA_LEITRIM,
  Location.BORNACOOLA_LONGFORD,
  Location.BORRIS_CARLOW,
  Location.BORRIS_IN_OSSORY_LAOIS,
  Location.BORRISOKANE_TIPPERARY,
  Location.BORRISOLEIGH_TIPPERARY,
  Location.BOSTON_CLARE,
  Location.BOTANIC_ANTRIM,
  Location.BOULADUFF_TIPPERARY,
  Location.BOYERSTOWN_MEATH,
  Location.BOYLE_AND_SURROUNDS_ROSCOMMON,
  Location.BOYLE_ROSCOMMON,
  Location.BOYLE_SLIGO,
  Location.BRACKAGH_OFFALY,
  Location.BRACKLIN_WESTMEATH,
  Location.BRACKLOON_MAYO,
  Location.BRACKLOON_ROSCOMMON,
  Location.BRACKNAGH_OFFALY,
  Location.BRACKNAGH_ROSCOMMON,
  Location.BRACKWANSHA_MAYO,
  Location.BRANDON_KERRY,
  Location.BRANIEL_DOWN,
  Location.BRANNOCKSTOWN_KILDARE,
  Location.BRAY_WICKLOW,
  Location.BREAFFY_MAYO,
  Location.BREAGHVA_CLARE,
  Location.BREANLOUGHAUN_GALWAY,
  Location.BREE_WEXFORD,
  Location.BREENAGH_DONEGAL,
  Location.BRIARFIELD_ROSCOMMON,
  Location.BRIARHILL_GALWAY,
  Location.BRICKEENS_MAYO,
  Location.BRICKETSTOWN_WEXFORD,
  Location.BRIDEBRIDGE_CORK,
  Location.BRIDESWELL_ROSCOMMON,
  Location.BRIDESWELL_WEXFORD,
  Location.BRIDGELAND_WICKLOW,
  Location.BRIDGEND_DONEGAL,
  Location.BRIDGETOWN_CLARE,
  Location.BRIDGETOWN_DONEGAL,
  Location.BRIDGETOWN_WEXFORD,
  Location.BRINLACK_DONEGAL,
  Location.BRITTAS_BAY_WICKLOW,
  Location.BRITTAS_DUBLIN,
  Location.BRITTAS_LIMERICK,
  Location.BRITWAY_CORK,
  Location.BROADFORD_CLARE,
  Location.BROADFORD_KILDARE,
  Location.BROADFORD_LIMERICK,
  Location.BROADWAY_WEXFORD,
  Location.BROCKAGH_DONEGAL,
  Location.BROCKAGH_GALWAY,
  Location.BROOKEBOROUGH_FERMANAGH,
  Location.BROOMFIELD_MONAGHAN,
  Location.BROSNA_KERRY,
  Location.BROSNA_OFFALY,
  Location.BROUGHAL_OFFALY,
  Location.BROUGHSHANE_ANTRIM,
  Location.BROWNSTOWN_WATERFORD,
  Location.BRUCKLESS_DONEGAL,
  Location.BRUFF_LIMERICK,
  Location.BRUREE_LIMERICK,
  Location.BRYANSFORD_DOWN,
  Location.BUCKODE_LEITRIM,
  Location.BULGADEN_LIMERICK,
  Location.BULLAUN_GALWAY,
  Location.BUNACURRY_MAYO,
  Location.BUNAW_KERRY,
  Location.BUNBEG_DONEGAL,
  Location.BUNBROSNA_WESTMEATH,
  Location.BUNCLODY_CARLOW,
  Location.BUNCLODY_WEXFORD,
  Location.BUNCRANA_AND_SURROUNDS_DONEGAL,
  Location.BUNCRANA_DONEGAL,
  Location.BUNDORAN_AND_SURROUNDS_DONEGAL,
  Location.BUNDORAN_DONEGAL,
  Location.BUNLAHY_LONGFORD,
  Location.BUNLICKY_LIMERICK,
  Location.BUNMAHON_WATERFORD,
  Location.BUNNAFOLLISTRAN_MAYO,
  Location.BUNNAGLASS_GALWAY,
  Location.BUNNAHOWEN_MAYO,
  Location.BUNNAHOWN_GALWAY,
  Location.BUNNANADDEN_SLIGO,
  Location.BUNNYCONNELLAN_MAYO,
  Location.BUNRATTY_CLARE,
  Location.BURNCHURCH_KILKENNY,
  Location.BURNCOURT_TIPPERARY,
  Location.BURNFOOT_DONEGAL,
  Location.BURNFORT_CORK,
  Location.BURREN_COLLEGE_OF_ART_CLARE,
  Location.BURREN_MAYO,
  Location.BURRENFADA_CLARE,
  Location.BURROW_WEXFORD,
  Location.BURT_DONEGAL,
  Location.BURTONPORT_DONEGAL,
  Location.BURTOWN_KILDARE,
  Location.BUSHFIELD_TIPPERARY,
  Location.BUSHMILLS_ANTRIM,
  Location.BUSHY_PARK_GALWAY,
  Location.BUTLER_S_BRIDGE_CAVAN,
  Location.BUTLERSTOWN_CORK,
  Location.BUTLERSTOWN_WATERFORD,
  Location.BUTTEVANT_CORK,
  Location.BWEENG_CORK,
  Location.CABINTEELY_DUBLIN,
  Location.CABRA_DUBLIN,
  Location.CADAMSTOWN_KILDARE,
  Location.CADAMSTOWN_OFFALY,
  Location.CAHER_CLARE,
  Location.CAHER_MAYO,
  Location.CAHERAGH_CORK,
  Location.CAHERBARNAGH_CORK,
  Location.CAHERBARNAGH_KERRY,
  Location.CAHERCONLISH_LIMERICK,
  Location.CAHERCONNEL_CLARE,
  Location.CAHERDANIEL_KERRY,
  Location.CAHERDAVIN_LIMERICK,
  Location.CAHEREA_CLARE,
  Location.CAHERLISTRANE_GALWAY,
  Location.CAHERMORE_CORK,
  Location.CAHERMORE_GALWAY,
  Location.CAHERMURPHY_CLARE,
  Location.CAHERNAHALLA_TIPPERARY,
  Location.CAHERONAUN_GALWAY,
  Location.CAHERSIVEEN_KERRY,
  Location.CAHIR_AND_SURROUNDS_TIPPERARY,
  Location.CAHIR_TIPPERARY,
  Location.CAHORE_WEXFORD,
  Location.CAIRNSHILL_DOWN,
  Location.CALEDON_TYRONE,
  Location.CALLAN_AND_SURROUNDS_KILKENNY,
  Location.CALLAN_KILKENNY,
  Location.CALLOW_GALWAY,
  Location.CALLOW_MAYO,
  Location.CALLOW_ROSCOMMON,
  Location.CALRY_SLIGO,
  Location.CALTRA_GALWAY,
  Location.CALTRAGHLEA_GALWAY,
  Location.CALVERSTOWN_KILDARE,
  Location.CAMLOUGH_ARMAGH,
  Location.CAMOLIN_WEXFORD,
  Location.CAMP_KERRY,
  Location.CAMPILE_WEXFORD,
  Location.CAMROSS_LAOIS,
  Location.CAMROSS_WEXFORD,
  Location.CAMUS_GALWAY,
  Location.CANNINGSTOWN_CAVAN,
  Location.CAPE_CLEAR_CORK,
  Location.CAPPAGH_WHITE_TIPPERARY,
  Location.CAPPAGH_GALWAY,
  Location.CAPPAGH_LIMERICK,
  Location.CAPPAGH_TYRONE,
  Location.CAPPAGH_WATERFORD,
  Location.CAPPAGHMORE_GALWAY,
  Location.CAPPALINNAN_LAOIS,
  Location.CAPPAMORE_LIMERICK,
  Location.CAPPANACREHA_MAYO,
  Location.CAPPANRUSH_WESTMEATH,
  Location.CAPPATAGGLE_GALWAY,
  Location.CAPPAWHITE_TIPPERARY,
  Location.CAPPEEN_CORK,
  Location.CAPPOQUIN_WATERFORD,
  Location.CARAGH_LAKE_KERRY,
  Location.CARBURY_KILDARE,
  Location.CARGAN_ANTRIM,
  Location.CARK_DONEGAL,
  Location.CARLANSTOWN_MEATH,
  Location.CARLINGFORD_LOUTH,
  Location.CARLOW_COLLEGE_CARLOW,
  Location.CARLOW_INSTITUTE_OF_TECHNOLOGY_CARLOW,
  Location.CARLOW_TOWN_AND_SURROUNDS_CARLOW,
  Location.CARLOW_TOWN_CARLOW,
  Location.CARN_DONEGAL,
  Location.CARNA_GALWAY,
  Location.CARNAGHAN_DONEGAL,
  Location.CARNAROSS_MEATH,
  Location.CARNDONAGH_AND_SURROUNDS_DONEGAL,
  Location.CARNDONAGH_DONEGAL,
  Location.CARNE_WEXFORD,
  Location.CARNEW_WICKLOW,
  Location.CARNEY_SLIGO,
  Location.CARNEY_TIPPERARY,
  Location.CARNLOUGH_ANTRIM,
  Location.CARNMORE_GALWAY,
  Location.CARNONEEN_GALWAY,
  Location.CARNOWEN_DONEGAL,
  Location.CARPENTERSTOWN_DUBLIN,
  Location.CARRACASTLE_MAYO,
  Location.CARRAGH_KILDARE,
  Location.CARRAHOLLY_MAYO,
  Location.CARRAROE_GALWAY,
  Location.CARRAROE_SLIGO,
  Location.CARRICK_DONEGAL,
  Location.CARRICK_WEXFORD,
  Location.CARRICK_ON_SHANNON_AND_SURROUNDS_LEITRIM,
  Location.CARRICK_ON_SHANNON_AND_SURROUNDS_ROSCOMMON,
  Location.CARRICK_ON_SHANNON_LEITRIM,
  Location.CARRICK_ON_SHANNON_ROSCOMMON,
  Location.CARRICK_ON_SUIR_AND_SURROUNDS_TIPPERARY,
  Location.CARRICK_ON_SUIR_AND_SURROUNDS_WATERFORD,
  Location.CARRICK_ON_SUIR_TIPPERARY,
  Location.CARRICK_ON_SUIR_WATERFORD,
  Location.CARRICKABOY_CAVAN,
  Location.CARRICKASHEDOGE_MONAGHAN,
  Location.CARRICKBEG_TIPPERARY,
  Location.CARRICKBOY_LONGFORD,
  Location.CARRICKFERGUS_ANTRIM,
  Location.CARRICKFINN_DONEGAL,
  Location.CARRICKMACROSS_AND_SURROUNDS_MONAGHAN,
  Location.CARRICKMACROSS_MONAGHAN,
  Location.CARRICKMINES_DUBLIN,
  Location.CARRICKMORE_TYRONE,
  Location.CARRICKROE_MONAGHAN,
  Location.CARRIG_BEG_CARLOW,
  Location.CARRIG_CORK,
  Location.CARRIGADROHID_CORK,
  Location.CARRIGAGULLA_CORK,
  Location.CARRIGAHOLT_CLARE,
  Location.CARRIGAHORIG_TIPPERARY,
  Location.CARRIGALINE_AND_SURROUNDS_CORK,
  Location.CARRIGALINE_CORK,
  Location.CARRIGALLEN_LEITRIM,
  Location.CARRIGAN_CAVAN,
  Location.CARRIGANS_DONEGAL,
  Location.CARRIGART_DONEGAL,
  Location.CARRIGATOGHER_TIPPERARY,
  Location.CARRIGBYRNE_WEXFORD,
  Location.CARRIGEEN_KILKENNY,
  Location.CARRIGEEN_WATERFORD,
  Location.CARRIGGOWER_WICKLOW,
  Location.CARRIGKERRY_LIMERICK,
  Location.CARRIGNAVAR_CORK,
  Location.CARRIGROHANE_CORK,
  Location.CARRIGTWOHILL_AND_SURROUNDS_CORK,
  Location.CARRIGTWOHILL_CORK,
  Location.CARRON_CLARE,
  Location.CARROWBEHY_ROSCOMMON,
  Location.CARROWDORE_DOWN,
  Location.CARROWKEEL_DONEGAL,
  Location.CARROWKEEL_GALWAY,
  Location.CARROWKEEL_SLIGO,
  Location.CARROWKENNEDY_MAYO,
  Location.CARROWMORE_GALWAY,
  Location.CARROWMORE_MAYO,
  Location.CARROWMORE_SLIGO,
  Location.CARROWMOREKNOCK_GALWAY,
  Location.CARROWNACON_MAYO,
  Location.CARROWNEDEN_SLIGO,
  Location.CARROWNTANLIS_GALWAY,
  Location.CARROWREAGH_ROSCOMMON,
  Location.CARROWREAGH_SLIGO,
  Location.CARROWRORY_LONGFORD,
  Location.CARROWTEIGE_MAYO,
  Location.CARRYDUFF_DOWN,
  Location.CASHEEN_GALWAY,
  Location.CASHEL_AND_SURROUNDS_TIPPERARY,
  Location.CASHEL_DONEGAL,
  Location.CASHEL_GALWAY,
  Location.CASHEL_LAOIS,
  Location.CASHEL_MAYO,
  Location.CASHEL_TIPPERARY,
  Location.CASHELGARRAN_SLIGO,
  Location.CASHELMORE_DONEGAL,
  Location.CASHLA_GALWAY,
  Location.CASLA_GALWAY,
  Location.CASSAGH_WEXFORD,
  Location.CASTLEBALDWIN_SLIGO,
  Location.CASTLEBAR_AND_SURROUNDS_MAYO,
  Location.CASTLEBAR_MAYO,
  Location.CASTLEBELLINGHAM_LOUTH,
  Location.CASTLEBLAKENEY_GALWAY,
  Location.CASTLEBLAYNEY_AND_SURROUNDS_MONAGHAN,
  Location.CASTLEBLAYNEY_MONAGHAN,
  Location.CASTLEBRIDGE_WEXFORD,
  Location.CASTLECARY_DONEGAL,
  Location.CASTLECAULFIELD_TYRONE,
  Location.CASTLECOMER_KILKENNY,
  Location.CASTLECONNELL_LIMERICK,
  Location.CASTLECONOR_SLIGO,
  Location.CASTLECOOTE_ROSCOMMON,
  Location.CASTLECOR_CORK,
  Location.CASTLECOVE_KERRY,
  Location.CASTLECUFFE_LAOIS,
  Location.CASTLEDAWSON_DERRY,
  Location.CASTLEDERG_TYRONE,
  Location.CASTLEDERMOT_KILDARE,
  Location.CASTLEELLIS_WEXFORD,
  Location.CASTLEFIN_DONEGAL,
  Location.CASTLEFREKE_CORK,
  Location.CASTLEGAL_SLIGO,
  Location.CASTLEGAR_GALWAY,
  Location.CASTLEGREGORY_KERRY,
  Location.CASTLEHILL_MAYO,
  Location.CASTLEINCH_KILKENNY,
  Location.CASTLEISLAND_AND_SURROUNDS_KERRY,
  Location.CASTLEISLAND_KERRY,
  Location.CASTLEJORDAN_MEATH,
  Location.CASTLEKNOCK_DUBLIN,
  Location.CASTLELYONS_CORK,
  Location.CASTLEMAGNER_CORK,
  Location.CASTLEMAHON_LIMERICK,
  Location.CASTLEMAINE_KERRY,
  Location.CASTLEMARTYR_CORK,
  Location.CASTLEPLUNKETT_ROSCOMMON,
  Location.CASTLEPOLLARD_WESTMEATH,
  Location.CASTLEQUIN_KERRY,
  Location.CASTLERAHAN_CAVAN,
  Location.CASTLEREA_AND_SURROUNDS_ROSCOMMON,
  Location.CASTLEREA_ROSCOMMON,
  Location.CASTLEREAGH_ANTRIM,
  Location.CASTLEROCK_DERRY,
  Location.CASTLEROE_DERRY,
  Location.CASTLESAMPSON_ROSCOMMON,
  Location.CASTLESHANE_MONAGHAN,
  Location.CASTLETOWN_CLARE,
  Location.CASTLETOWN_CORK,
  Location.CASTLETOWN_KILKENNY,
  Location.CASTLETOWN_LAOIS,
  Location.CASTLETOWN_LIMERICK,
  Location.CASTLETOWN_MEATH,
  Location.CASTLETOWN_WESTMEATH,
  Location.CASTLETOWN_WEXFORD,
  Location.CASTLETOWN_GEOGHEGAN_WESTMEATH,
  Location.CASTLETOWNBERE_CORK,
  Location.CASTLETOWNROCHE_CORK,
  Location.CASTLETOWNSHEND_CORK,
  Location.CASTLETROY_LIMERICK,
  Location.CASTLEVILLE_MAYO,
  Location.CASTLEWARREN_KILKENNY,
  Location.CASTLEWELLAN_DOWN,
  Location.CAUSEWAY_KERRY,
  Location.CAVAN_AND_SURROUNDS_CAVAN,
  Location.CAVAN_CAVAN,
  Location.CAVANAGARVAN_MONAGHAN,
  Location.CAVANGARDEN_DONEGAL,
  Location.CAVEHILL_ANTRIM,
  Location.CECILSTOWN_CORK,
  Location.CELBRIDGE_AND_SURROUNDS_KILDARE,
  Location.CELBRIDGE_KILDARE,
  Location.CHANONROCK_LOUTH,
  Location.CHAPELIZOD_DUBLIN,
  Location.CHAPLETOWN_KERRY,
  Location.CHARLEMONT_ARMAGH,
  Location.CHARLESTOWN_ARMAGH,
  Location.CHARLESTOWN_MAYO,
  Location.CHARLEVILLE_AND_SURROUNDS_CORK,
  Location.CHARLEVILLE_CORK,
  Location.CHEEKPOINT_WATERFORD,
  Location.CHERRY_ORCHARD_DUBLIN,
  Location.CHERRYVILLE_KILDARE,
  Location.CHERRYWOOD_DUBLIN,
  Location.CHICHESTER_PARK_ANTRIM,
  Location.CHRISTCHURCH_DUBLIN,
  Location.CHRUCHTOWN_WEXFORD,
  Location.CHURCH_CROSS_CORK,
  Location.CHURCH_TOWN_DONEGAL,
  Location.CHURCH_VILLAGE_MAYO,
  Location.CHURCHFIELD_CORK,
  Location.CHURCHILL_DONEGAL,
  Location.CHURCHSREET_ROSCOMMON,
  Location.CHURCHTOWN_CORK,
  Location.CHURCHTOWN_DUBLIN,
  Location.CHURCHTOWN_WEXFORD,
  Location.CITYWEST_DUBLIN,
  Location.CLABBY_FERMANAGH,
  Location.CLADDAGH_GALWAY,
  Location.CLADDAGHDUFF_GALWAY,
  Location.CLADY_MILLTOWN_ARMAGH,
  Location.CLADY_ANTRIM,
  Location.CLADY_DERRY,
  Location.CLAGGAN_DONEGAL,
  Location.CLAGGAN_MAYO,
  Location.CLANE_AND_SURROUNDS_KILDARE,
  Location.CLANE_KILDARE,
  Location.CLARA_KILKENNY,
  Location.CLARA_OFFALY,
  Location.CLARA_WICKLOW,
  Location.CLARAHILL_LAOIS,
  Location.CLARECASTLE_CLARE,
  Location.CLAREEN_OFFALY,
  Location.CLAREGALWAY_GALWAY,
  Location.CLAREHALL_DUBLIN,
  Location.CLAREMORRIS_AND_SURROUNDS_MAYO,
  Location.CLAREMORRIS_MAYO,
  Location.CLAREVIEW_LIMERICK,
  Location.CLARINA_LIMERICK,
  Location.CLARINBRIDGE_GALWAY,
  Location.CLASH_NORTH_LIMERICK,
  Location.CLASH_CORK,
  Location.CLASH_TIPPERARY,
  Location.CLASHMORE_WATERFORD,
  Location.CLAUDY_DERRY,
  Location.CLEARIESTOWN_WEXFORD,
  Location.CLEGGAN_GALWAY,
  Location.CLENNASCAUL_GALWAY,
  Location.CLERIHAN_TIPPERARY,
  Location.CLIFDEN_GALWAY,
  Location.CLIFF_DONEGAL,
  Location.CLIFFERNA_CAVAN,
  Location.CLIFFONEY_SLIGO,
  Location.CLIFTONVILLE_ANTRIM,
  Location.CLOGGA_KILKENNY,
  Location.CLOGGA_WICKLOW,
  Location.CLOGH_MILLS_ANTRIM,
  Location.CLOGH_ANTRIM,
  Location.CLOGH_KILKENNY,
  Location.CLOGH_WEXFORD,
  Location.CLOGHAN_DONEGAL,
  Location.CLOGHAN_OFFALY,
  Location.CLOGHAN_WESTMEATH,
  Location.CLOGHANE_KERRY,
  Location.CLOGHARINKA_KILDARE,
  Location.CLOGHAUN_GALWAY,
  Location.CLOGHBOLEY_SLIGO,
  Location.CLOGHBRACK_GALWAY,
  Location.CLOGHBRACK_MEATH,
  Location.CLOGHEEN_CORK,
  Location.CLOGHEEN_TIPPERARY,
  Location.CLOGHEENMILCON_CORK,
  Location.CLOGHER_KERRY,
  Location.CLOGHER_MAYO,
  Location.CLOGHER_ROSCOMMON,
  Location.CLOGHER_TYRONE,
  Location.CLOGHERA_CLARE,
  Location.CLOGHERHEAD_LOUTH,
  Location.CLOGHKEATING_LIMERICK,
  Location.CLOGHMACOO_MEATH,
  Location.CLOGHMORE_MAYO,
  Location.CLOGHRAN_DUBLIN,
  Location.CLOGHROE_CORK,
  Location.CLOGHROE_DONEGAL,
  Location.CLOHAMON_WEXFORD,
  Location.CLOHERNAGH_WATERFORD,
  Location.CLONAKENNY_TIPPERARY,
  Location.CLONAKILTY_AND_SURROUNDS_CORK,
  Location.CLONAKILTY_CORK,
  Location.CLONALVY_MEATH,
  Location.CLONARD_ANTRIM,
  Location.CLONARD_MEATH,
  Location.CLONARD_WEXFORD,
  Location.CLONASLEE_LAOIS,
  Location.CLONAVOE_OFFALY,
  Location.CLONBERN_GALWAY,
  Location.CLONBULLOGUE_OFFALY,
  Location.CLONBUR_GALWAY,
  Location.CLONCAGH_LIMERICK,
  Location.CLONCONNANE_LIMERICK,
  Location.CLONCULLEN_WESTMEATH,
  Location.CLONCURRY_KILDARE,
  Location.CLONDALKIN_DUBLIN,
  Location.CLONDAW_WEXFORD,
  Location.CLONDRA_LONGFORD,
  Location.CLONDRINAGH_LIMERICK,
  Location.CLONDROHID_CORK,
  Location.CLONDULANE_CORK,
  Location.CLONEA_WATERFORD,
  Location.CLONEE_DUBLIN,
  Location.CLONEE_MEATH,
  Location.CLONEEN_TIPPERARY,
  Location.CLONEGAL_CARLOW,
  Location.CLONEGAL_WEXFORD,
  Location.CLONEGAL_WICKLOW,
  Location.CLONES_AND_SURROUNDS_MONAGHAN,
  Location.CLONES_MONAGHAN,
  Location.CLONEVIN_WEXFORD,
  Location.CLONFANLOUGH_OFFALY,
  Location.CLONFERT_GALWAY,
  Location.CLONGEEN_WEXFORD,
  Location.CLONGRIFFIN_DUBLIN,
  Location.CLONLARA_CLARE,
  Location.CLONLEIGH_DONEGAL,
  Location.CLONLOST_WESTMEATH,
  Location.CLONMACKEN_LIMERICK,
  Location.CLONMACNOISE_OFFALY,
  Location.CLONMANTAGH_KILKENNY,
  Location.CLONMANY_DONEGAL,
  Location.CLONMEL_AND_SURROUNDS_TIPPERARY,
  Location.CLONMEL_TIPPERARY,
  Location.CLONMELLON_WESTMEATH,
  Location.CLONMORE_CARLOW,
  Location.CLONMORE_TIPPERARY,
  Location.CLONMULT_CORK,
  Location.CLONOMY_OFFALY,
  Location.CLONOULTY_TIPPERARY,
  Location.CLONROCHE_WEXFORD,
  Location.CLONSHAUGH_DUBLIN,
  Location.CLONSILLA_DUBLIN,
  Location.CLONSKEAGH_DUBLIN,
  Location.CLONTARF_DUBLIN,
  Location.CLONTIBRET_MONAGHAN,
  Location.CLONTUBBRID_KILKENNY,
  Location.CLONYCAVAN_MEATH,
  Location.CLONYGOWAN_OFFALY,
  Location.CLOONACOOL_SLIGO,
  Location.CLOONBARD_ROSCOMMON,
  Location.CLOONBOO_GALWAY,
  Location.CLOONDAFF_MAYO,
  Location.CLOONE_GRANGE_LEITRIM,
  Location.CLOONE_LEITRIM,
  Location.CLOONEEN_LONGFORD,
  Location.CLOONEY_CLARE,
  Location.CLOONEY_DONEGAL,
  Location.CLOONFAD_ROSCOMMON,
  Location.CLOONFALLAGH_MAYO,
  Location.CLOONFINISH_MAYO,
  Location.CLOONFOWER_ROSCOMMON,
  Location.CLOONKEEN_MAYO,
  Location.CLOONKEEN_ROSCOMMON,
  Location.CLOONKEN_KERRY,
  Location.CLOONLOOGH_SLIGO,
  Location.CLOONLUSK_LIMERICK,
  Location.CLOONMINDA_GALWAY,
  Location.CLOONMORE_MAYO,
  Location.CLOONOON_GALWAY,
  Location.CLOONTIA_MAYO,
  Location.CLOONUSKER_CLARE,
  Location.CLOONYMORRIS_GALWAY,
  Location.CLOONYQUIN_ROSCOMMON,
  Location.CLORAN_WESTMEATH,
  Location.CLOUGH_DOWN,
  Location.CLOUGH_LAOIS,
  Location.CLOUGHDUV_CORK,
  Location.CLOUGHJORDAN_OFFALY,
  Location.CLOUGHJORDAN_TIPPERARY,
  Location.CLOVERHILL_CAVAN,
  Location.CLOVERHILL_GALWAY,
  Location.CLOVERHILL_ROSCOMMON,
  Location.CLOYDAH_CARLOW,
  Location.CLOYNE_CORK,
  Location.CLYBAUN_GALWAY,
  Location.CLYNACARTAN_KERRY,
  Location.COACHFORD_CORK,
  Location.COAGH_TYRONE,
  Location.COALBROOK_TIPPERARY,
  Location.COALISLAND_TYRONE,
  Location.COAN_KILKENNY,
  Location.COBH_AND_SURROUNDS_CORK,
  Location.COILL_DUBH_KILDARE,
  Location.COLBINSTOWN_KILDARE,
  Location.COLDWOOD_GALWAY,
  Location.COLEHILL_LONGFORD,
  Location.COLERAINE_DERRY,
  Location.COLERAINE_OFFALY,
  Location.COLGAGH_SLIGO,
  Location.COLLEGE_OF_COMPUTING_TECHNOLOGY_DUBLIN,
  Location.COLLIN_GLEN_ANTRIM,
  Location.COLLINSTOWN_WESTMEATH,
  Location.COLLINSWOOD_DUBLIN,
  Location.COLLON_LOUTH,
  Location.COLLOONEY_SLIGO,
  Location.COLMANSTOWN_GALWAY,
  Location.COL_ISTE_MHUIRE_MARINO_DUBLIN,
  Location.COMBER_DOWN,
  Location.COMMONS_TIPPERARY,
  Location.CONFEY_KILDARE,
  Location.CONLIG_DOWN,
  Location.CONNA_CORK,
  Location.CONNEMARA_GALWAY,
  Location.CONNOLLY_CLARE,
  Location.CONNONAGH_CORK,
  Location.CONNOR_ANTRIM,
  Location.CONNSWATER_DOWN,
  Location.CONVOY_DONEGAL,
  Location.COOGUE_MAYO,
  Location.COOKSTOWN_TYRONE,
  Location.COOLA_SLIGO,
  Location.COOLAGARRY_ROSCOMMON,
  Location.COOLAGH_GALWAY,
  Location.COOLANEY_SLIGO,
  Location.COOLATTIN_WICKLOW,
  Location.COOLBANAGHER_LAOIS,
  Location.COOLBAUN_KILKENNY,
  Location.COOLBAWN_TIPPERARY,
  Location.COOLBOY_WICKLOW,
  Location.COOLCULL_WEXFORD,
  Location.COOLDERRY_OFFALY,
  Location.COOLE_ABBEY_CORK,
  Location.COOLE_WESTMEATH,
  Location.COOLEARAGH_KILDARE,
  Location.COOLGRANGE_KILKENNY,
  Location.COOLGREANY_WEXFORD,
  Location.COOLKELURE_CORK,
  Location.COOLMEEN_CLARE,
  Location.COOLMINE_DUBLIN,
  Location.COOLMORE_DONEGAL,
  Location.COOLOCK_DUBLIN,
  Location.COOLRAIN_LAOIS,
  Location.COOLREE_WEXFORD,
  Location.COOLROEBEG_KILKENNY,
  Location.COOLSHAGHTENA_ROSCOMMON,
  Location.COOLTEIGE_ROSCOMMON,
  Location.COOLYDUFF_CORK,
  Location.COOLYMURRAGHUE_CORK,
  Location.COOMHOLA_CORK,
  Location.COON_KILKENNY,
  Location.COONAGH_LIMERICK,
  Location.COORACLARE_CLARE,
  Location.COORLEAGH_KILKENNY,
  Location.COORNAGILLAGH_KERRY,
  Location.COOTEHALL_ROSCOMMON,
  Location.COOTEHILL_AND_SURROUNDS_CAVAN,
  Location.COOTEHILL_CAVAN,
  Location.COPANY_DONEGAL,
  Location.COPPANAGH_CAVAN,
  Location.CORALSTOWN_WESTMEATH,
  Location.CORBALLY_CORK,
  Location.CORBALLY_KILDARE,
  Location.CORBALLY_LIMERICK,
  Location.CORBALLY_SLIGO,
  Location.CORBAY_UPPER_LONGFORD,
  Location.CORCAGHAN_MONAGHAN,
  Location.CORCLOGH_MAYO,
  Location.CORCULLEN_GALWAY,
  Location.CORDAL_KERRY,
  Location.CORDARRAGH_MAYO,
  Location.CORDUFF_DUBLIN,
  Location.CORK_AIRPORT_BUSINESS_PARK_CORK,
  Location.CORK_CITY_CENTRE_CORK,
  Location.CORK_CITY_SUBURBS_CORK,
  Location.CORK_COLLEGE_OF_COMMERCE_CORK,
  Location.CORK_COMMUTER_TOWNS_CORK,
  Location.CORK_INSTITUTE_OF_TECHNOLOGY_CLONAKILTY_AGRICULTURAL_COLLEGE_CORK,
  Location.CORK_INSTITUTE_OF_TECHNOLOGY_CRAWFORD_COLLEGE_OF_ART_AND_DESIGN_CORK,
  Location.CORK_INSTITUTE_OF_TECHNOLOGY_CORK,
  Location.CORK_SCHOOL_OF_MUSIC_CIT_CORK,
  Location.CORKEY_ANTRIM,
  Location.CORLEA_LONGFORD,
  Location.CORLEE_MAYO,
  Location.CORLOUGH_CAVAN,
  Location.CORNAFEAN_CAVAN,
  Location.CORNAFULLA_ROSCOMMON,
  Location.CORNAGILLAGH_DONEGAL,
  Location.CORNAMONA_GALWAY,
  Location.CORNANAGH_MAYO,
  Location.CORNELSCOURT_DUBLIN,
  Location.COROFIN_CLARE,
  Location.COROFIN_GALWAY,
  Location.CORRACLOONA_LEITRIM,
  Location.CORRAKYLE_CLARE,
  Location.CORRALEEHAN_LEITRIM,
  Location.CORRANDULLA_GALWAY,
  Location.CORRAREE_ROSCOMMON,
  Location.CORRAWALEEN_LEITRIM,
  Location.CORREAL_ROSCOMMON,
  Location.CORRIES_CARLOW,
  Location.CORRIGA_LEITRIM,
  Location.CORRIGEENROE_ROSCOMMON,
  Location.CORROY_MAYO,
  Location.CORRY_LEITRIM,
  Location.CORSTOWN_KILKENNY,
  Location.CORTOON_GALWAY,
  Location.CORTOWN_MEATH,
  Location.CORVALLEY_MAYO,
  Location.CORVALLY_MONAGHAN,
  Location.COSTELLO_GALWAY,
  Location.COURTMACSHERRY_CORK,
  Location.COURTMATRIX_LIMERICK,
  Location.COURTOWN_WEXFORD,
  Location.CRAANFORD_WEXFORD,
  Location.CRAFFIELD_WICKLOW,
  Location.CRAIGAVAD_DOWN,
  Location.CRAIGAVON_ARMAGH,
  Location.CRAIGS_ANTRIM,
  Location.CRAIQUES_KERRY,
  Location.CRANFORD_DONEGAL,
  Location.CRANNOGEBOY_DONEGAL,
  Location.CRANNY_CLARE,
  Location.CRATLOE_CLARE,
  Location.CRAUGHWELL_GALWAY,
  Location.CRAWFORD_COLLEGE_OF_ART_AND_DESIGN_CORK,
  Location.CRAWFORDSBURN_DOWN,
  Location.CRAZY_CORNER_WESTMEATH,
  Location.CREAGH_ROSCOMMON,
  Location.CREAGHANROE_MONAGHAN,
  Location.CRECORA_LIMERICK,
  Location.CREE_CLARE,
  Location.CREEGH_CLARE,
  Location.CREESLOUGH_DONEGAL,
  Location.CREEVAGH_MAYO,
  Location.CREEVAGH_SLIGO,
  Location.CREEVES_LIMERICK,
  Location.CREGAGH_DOWN,
  Location.CREGG_CLARE,
  Location.CREGG_SLIGO,
  Location.CREGGAN_ARMAGH,
  Location.CREGGANBAUN_MAYO,
  Location.CREGGAUN_LIMERICK,
  Location.CREGGS_GALWAY,
  Location.CREGGS_ROSCOMMON,
  Location.CREGMORE_GALWAY,
  Location.CRETTYARD_LAOIS,
  Location.CRINKILL_OFFALY,
  Location.CROAGH_DONEGAL,
  Location.CROAGH_LIMERICK,
  Location.CROAGHRIMBEG_MAYO,
  Location.CROCKETS_TOWN_MAYO,
  Location.CROCKMORE_DONEGAL,
  Location.CROGHAN_OFFALY,
  Location.CROGHAN_ROSCOMMON,
  Location.CROLLY_DONEGAL,
  Location.CROMANE_KERRY,
  Location.CROMOGE_LAOIS,
  Location.CROOKEDWOOD_WESTMEATH,
  Location.CROOKHAVEN_CORK,
  Location.CROOKSTOWN_CORK,
  Location.CROOKSTOWN_KILDARE,
  Location.CROOM_LIMERICK,
  Location.CROSS_KEYS_CAVAN,
  Location.CROSS_KEYS_MEATH,
  Location.CROSS_ROADS_DONEGAL,
  Location.CROSS_CLARE,
  Location.CROSS_MAYO,
  Location.CROSS_WATERFORD,
  Location.CROSSABEG_WEXFORD,
  Location.CROSSAGALLA_LIMERICK,
  Location.CROSSAKIEL_MEATH,
  Location.CROSSBARRY_CORK,
  Location.CROSSBOYNE_MAYO,
  Location.CROSSCONNELL_GALWAY,
  Location.CROSSDONEY_CAVAN,
  Location.CROSSEA_LONGFORD,
  Location.CROSSERLOUGH_CAVAN,
  Location.CROSSGAR_DOWN,
  Location.CROSSHAVEN_CORK,
  Location.CROSSMAGLEN_ARMAGH,
  Location.CROSSMOLINA_MAYO,
  Location.CROSSNA_ROSCOMMON,
  Location.CROSSPATRICK_KILKENNY,
  Location.CROSSWELL_GALWAY,
  Location.CROVE_DONEGAL,
  Location.CRUMLIN_ROAD_ANTRIM,
  Location.CRUMLIN_ANTRIM,
  Location.CRUMLIN_DUBLIN,
  Location.CRUMLIN_GALWAY,
  Location.CRUSHEEN_CLARE,
  Location.CRUTT_KILKENNY,
  Location.CUFFESGRANGE_KILKENNY,
  Location.CUILKILLEW_MAYO,
  Location.CUILMORE_MAYO,
  Location.CULDAFF_DONEGAL,
  Location.CULFADDA_SLIGO,
  Location.CULLAHILL_LAOIS,
  Location.CULLANE_LIMERICK,
  Location.CULLEENS_SLIGO,
  Location.CULLEN_CORK,
  Location.CULLEN_TIPPERARY,
  Location.CULLENSTOWN_WEXFORD,
  Location.CULLIN_MAYO,
  Location.CULLYBACKEY_ANTRIM,
  Location.CULLYFAD_LONGFORD,
  Location.CULLYHANNA_ARMAGH,
  Location.CULMORE_DERRY,
  Location.CURRABINNY_CORK,
  Location.CURRACLOE_WEXFORD,
  Location.CURRAGH_WEST_GALWAY,
  Location.CURRAGH_WATERFORD,
  Location.CURRAGHA_MEATH,
  Location.CURRAGHBONAUN_SLIGO,
  Location.CURRAGHBOY_ROSCOMMON,
  Location.CURRAGHCHASE_LIMERICK,
  Location.CURRAGHROE_ROSCOMMON,
  Location.CURRAGLASS_CORK,
  Location.CURRAHEEN_CORK,
  Location.CURRAN_DERRY,
  Location.CURRANS_KERRY,
  Location.CURRAUN_GALWAY,
  Location.CURREENY_TIPPERARY,
  Location.CURROW_KERRY,
  Location.CURRY_MAYO,
  Location.CURRY_SLIGO,
  Location.CURRYGLASS_CORK,
  Location.CUSDUFF_CORK,
  Location.CUSHENDALL_ANTRIM,
  Location.CUSHENDUN_ANTRIM,
  Location.CUSHINA_OFFALY,
  Location.DIT_GRANGEGORMAN_DUBLIN,
  Location.DIT_MOUNT_STREET_DUBLIN,
  Location.DAINGEAN_OFFALY,
  Location.DALKEY_DUBLIN,
  Location.DALYSTOWN_GALWAY,
  Location.DAMASTOWN_DUBLIN,
  Location.DAMERSTOWN_KILKENNY,
  Location.DANESFORT_KILKENNY,
  Location.DANESFORT_LONGFORD,
  Location.DANGAN_CORK,
  Location.DANGAN_GALWAY,
  Location.DANGAN_KILKENNY,
  Location.DARBY_S_GAP_WEXFORD,
  Location.DARNDALE_DUBLIN,
  Location.DARRAGH_CLARE,
  Location.DARTRY_DUBLIN,
  Location.DARVER_LOUTH,
  Location.DAVIDSTOWN_WICKLOW,
  Location.DAWROS_GALWAY,
  Location.DEANS_GRANGE_DUBLIN,
  Location.DEELISH_CORK,
  Location.DELGANY_WICKLOW,
  Location.DELPHI_MAYO,
  Location.DELVIN_WESTMEATH,
  Location.DERNAGREE_CORK,
  Location.DERRAVOHER_LIMERICK,
  Location.DERREEN_CLARE,
  Location.DERREEN_MAYO,
  Location.DERREENDARRAGH_KERRY,
  Location.DERREENY_CORK,
  Location.DERRIAGHY_ANTRIM,
  Location.DERRIES_OFFALY,
  Location.DERRINTURN_KILDARE,
  Location.DERRY_CITY_DERRY,
  Location.DERRY_SLIGO,
  Location.DERRYBEG_DONEGAL,
  Location.DERRYBEG_LIMERICK,
  Location.DERRYBOYE_DOWN,
  Location.DERRYBRIEN_GALWAY,
  Location.DERRYCOOLY_OFFALY,
  Location.DERRYDRUEL_DONEGAL,
  Location.DERRYERGLINNA_GALWAY,
  Location.DERRYFADDA_TIPPERARY,
  Location.DERRYGOLAN_WESTMEATH,
  Location.DERRYGONNELLY_FERMANAGH,
  Location.DERRYGOOLIN_GALWAY,
  Location.DERRYGROGAN_OFFALY,
  Location.DERRYKEIGHAN_ANTRIM,
  Location.DERRYKNOCKANE_LIMERICK,
  Location.DERRYLEA_GALWAY,
  Location.DERRYLIN_FERMANAGH,
  Location.DERRYLOUGH_DONEGAL,
  Location.DERRYMORE_KERRY,
  Location.DERRYNABRIN_GALWAY,
  Location.DERRYNANE_KERRY,
  Location.DERRYNEEN_GALWAY,
  Location.DERRYRUSH_GALWAY,
  Location.DERRYTRASNA_ARMAGH,
  Location.DERRYVOHY_MAYO,
  Location.DERRYWODE_GALWAY,
  Location.DERVOCK_ANTRIM,
  Location.DESERTMARTIN_DERRY,
  Location.DILLONS_CROSS_CORK,
  Location.DINGLE_KERRY,
  Location.DOAGH_BEG_DONEGAL,
  Location.DOAGH_ANTRIM,
  Location.DOAGH_DONEGAL,
  Location.DOLLA_TIPPERARY,
  Location.DOLLINGSTOWN_DOWN,
  Location.DOLLYMOUNT_DUBLIN,
  Location.DOLPHIN_S_BARN_DUBLIN,
  Location.DONABATE_DUBLIN,
  Location.DONACARNEY_AND_SURROUNDS_MEATH,
  Location.DONACARNEY_MEATH,
  Location.DONADEA_KILDARE,
  Location.DONAGHADEE_DOWN,
  Location.DONAGHCLONEY_DOWN,
  Location.DONAGHMEDE_DUBLIN,
  Location.DONAGHMORE_LAOIS,
  Location.DONAGHMORE_TYRONE,
  Location.DONAGHPATRICK_MEATH,
  Location.DONAMON_ROSCOMMON,
  Location.DONARD_WEXFORD,
  Location.DONARD_WICKLOW,
  Location.DONASKEAGH_TIPPERARY,
  Location.DONEGAL_TOWN_AND_SURROUNDS_DONEGAL,
  Location.DONEGAL_TOWN_DONEGAL,
  Location.DONEGALL_ROAD_ANTRIM,
  Location.DONERAILE_CORK,
  Location.DONNAGHMORE_MEATH,
  Location.DONNYBROOK_CORK,
  Location.DONNYBROOK_DUBLIN,
  Location.DONNYCARNEY_DUBLIN,
  Location.DONOHILL_TIPPERARY,
  Location.DONORE_MEATH,
  Location.DONOUGHMORE_CORK,
  Location.DOOAGH_MAYO,
  Location.DOOBEHY_MAYO,
  Location.DOOCASTLE_MAYO,
  Location.DOOCASTLE_SLIGO,
  Location.DOOCHARY_DONEGAL,
  Location.DOOEGA_MAYO,
  Location.DOOGARY_CAVAN,
  Location.DOOGHBEG_MAYO,
  Location.DOOGORT_MAYO,
  Location.DOOHOMA_MAYO,
  Location.DOOKS_KERRY,
  Location.DOOLIN_CLARE,
  Location.DOON_GALWAY,
  Location.DOON_LIMERICK,
  Location.DOONAHA_EAST_CLARE,
  Location.DOONAHA_WEST_CLARE,
  Location.DOONBEG_CLARE,
  Location.DOONLOUGHAN_GALWAY,
  Location.DOONMANAGH_KERRY,
  Location.DOORADOYLE_LIMERICK,
  Location.DOOYORK_MAYO,
  Location.DORE_DONEGAL,
  Location.DORRUSAWILLIN_LEITRIM,
  Location.DORSET_COLLEGE_DUBLIN,
  Location.DOUGH_CORK,
  Location.DOUGHCLOYNE_CORK,
  Location.DOUGHISKA_GALWAY,
  Location.DOUGLAS_CORK,
  Location.DOWDALLSHILL_LOUTH,
  Location.DOWLING_KILKENNY,
  Location.DOWNHILL_DERRY,
  Location.DOWNINGS_DONEGAL,
  Location.DOWNPATRICK_DOWN,
  Location.DOWRA_CAVAN,
  Location.DOWRA_LEITRIM,
  Location.DRANGAN_TIPPERARY,
  Location.DRAPERSTOWN_DERRY,
  Location.DREENAGH_KERRY,
  Location.DRIMNAGH_DUBLIN,
  Location.DRIMOLEAGUE_CORK,
  Location.DRINAGH_CORK,
  Location.DRINAGH_WEXFORD,
  Location.DRINAGHAN_SLIGO,
  Location.DRING_LONGFORD,
  Location.DRIPSEY_CORK,
  Location.DROGHEDA_AND_SURROUNDS_LOUTH,
  Location.DROGHEDA_AND_SURROUNDS_MEATH,
  Location.DROGHEDA_LOUTH,
  Location.DROGHEDA_MEATH,
  Location.DROM_TIPPERARY,
  Location.DROMAHAIR_LEITRIM,
  Location.DROMAHANE_CORK,
  Location.DROMARA_DOWN,
  Location.DROMARD_SLIGO,
  Location.DROMASMOLE_CORK,
  Location.DROMBANE_TIPPERARY,
  Location.DROMBANNA_LIMERICK,
  Location.DROMCOLLIHER_LIMERICK,
  Location.DROMIN_CORK,
  Location.DROMIN_LIMERICK,
  Location.DROMIN_LOUTH,
  Location.DROMINA_CORK,
  Location.DROMINEER_TIPPERARY,
  Location.DROMISKIN_LOUTH,
  Location.DROMKEEN_LIMERICK,
  Location.DROMLEA_LEITRIM,
  Location.DROMOD_LEITRIM,
  Location.DROMORE_WEST_SLIGO,
  Location.DROMORE_DOWN,
  Location.DROMORE_LIMERICK,
  Location.DROMORE_TYRONE,
  Location.DROMTRASNA_LIMERICK,
  Location.DRUM_EAST_GALWAY,
  Location.DRUM_WEST_GALWAY,
  Location.DRUM_MONAGHAN,
  Location.DRUM_ROSCOMMON,
  Location.DRUM_SLIGO,
  Location.DRUMAHOE_DERRY,
  Location.DRUMALEE_CAVAN,
  Location.DRUMANDOORA_CLARE,
  Location.DRUMANESS_DOWN,
  Location.DRUMATOBER_GALWAY,
  Location.DRUMBEG_DONEGAL,
  Location.DRUMBEG_DOWN,
  Location.DRUMBO_DOWN,
  Location.DRUMCAR_LOUTH,
  Location.DRUMCLIFF_SLIGO,
  Location.DRUMCONDRA_DUBLIN,
  Location.DRUMCONG_LEITRIM,
  Location.DRUMCONRATH_MEATH,
  Location.DRUMCREE_WESTMEATH,
  Location.DRUMDUFF_FERMANAGH,
  Location.DRUMFEA_CARLOW,
  Location.DRUMFIN_SLIGO,
  Location.DRUMFREE_DONEGAL,
  Location.DRUMGOFT_WICKLOW,
  Location.DRUMKEARY_GALWAY,
  Location.DRUMKEEN_DONEGAL,
  Location.DRUMKEERAN_LEITRIM,
  Location.DRUMLISH_LONGFORD,
  Location.DRUMLOSH_ROSCOMMON,
  Location.DRUMMIN_CARLOW,
  Location.DRUMMULLIN_ROSCOMMON,
  Location.DRUMQUIN_TYRONE,
  Location.DRUMRANEY_WESTMEATH,
  Location.DRUMREAGH_MAYO,
  Location.DRUMREE_MEATH,
  Location.DRUMSHANBO_LEITRIM,
  Location.DRUMSKELT_MONAGHAN,
  Location.DRUMSNA_LEITRIM,
  Location.DRUMSURN_DERRY,
  Location.DUAGH_KERRY,
  Location.DUALLA_TIPPERARY,
  Location.DUBLIN_1_DUBLIN,
  Location.DUBLIN_10_DUBLIN,
  Location.DUBLIN_11_DUBLIN,
  Location.DUBLIN_12_DUBLIN,
  Location.DUBLIN_13_DUBLIN,
  Location.DUBLIN_14_DUBLIN,
  Location.DUBLIN_15_DUBLIN,
  Location.DUBLIN_16_DUBLIN,
  Location.DUBLIN_17_DUBLIN,
  Location.DUBLIN_18_DUBLIN,
  Location.DUBLIN_2_DUBLIN,
  Location.DUBLIN_20_DUBLIN,
  Location.DUBLIN_22_DUBLIN,
  Location.DUBLIN_24_DUBLIN,
  Location.DUBLIN_3_DUBLIN,
  Location.DUBLIN_4_DUBLIN,
  Location.DUBLIN_5_DUBLIN,
  Location.DUBLIN_6_DUBLIN,
  Location.DUBLIN_6W_DUBLIN,
  Location.DUBLIN_7_DUBLIN,
  Location.DUBLIN_8_DUBLIN,
  Location.DUBLIN_9_DUBLIN,
  Location.DUBLIN_BUSINESS_SCHOOL_DUBLIN,
  Location.DUBLIN_CITY,
  Location.DUBLIN_CITY_CENTRE_DUBLIN,
  Location.DUBLIN_CITY_UNIVERSITY_ALL_HALLOWS_CAMPUS_DUBLIN,
  Location.DUBLIN_CITY_UNIVERSITY_GLASNEVIN_CAMPUS_DUBLIN,
  Location.DUBLIN_CITY_UNIVERSITY_DUBLIN,
  Location.DUBLIN_COMMUTER_TOWNS_DUBLIN,
  Location.DUBLIN_INSTITUTE_OF_DESIGN_DUBLIN,
  Location.DUBLIN_INSTITUTE_OF_TECHNOLOGY_AUNGIER_ST_DUBLIN,
  Location.DUBLIN_INSTITUTE_OF_TECHNOLOGY_BOLTON_ST_DUBLIN,
  Location.DUBLIN_INSTITUTE_OF_TECHNOLOGY_CATHAL_BRUGHA_ST_DUBLIN,
  Location.DUBLIN_INSTITUTE_OF_TECHNOLOGY_KEVIN_ST_DUBLIN,
  Location.DUBLIN_INSTITUTE_OF_TECHNOLOGY_RATHMINES_DUBLIN,
  Location.DUBLIN_PIKE_CORK,
  Location.DUFFY_KILDARE,
  Location.DULEEK_MEATH,
  Location.DUN_LAOGHAIRE_INSTITUTE_OF_ART_DESIGN_AND_TECHNOLOGY_DUBLIN,
  Location.DUN_LAOGHAIRE_DUBLIN,
  Location.DUNADRY_ANTRIM,
  Location.DUNAFF_DONEGAL,
  Location.DUNAGHY_ANTRIM,
  Location.DUNANY_LOUTH,
  Location.DUNBEN_KILKENNY,
  Location.DUNBOYNE_AND_SURROUNDS_MEATH,
  Location.DUNBOYNE_MEATH,
  Location.DUNCAIRN_ANTRIM,
  Location.DUNCANNON_WEXFORD,
  Location.DUNCORMICK_WEXFORD,
  Location.DUNDALK_AND_SURROUNDS_LOUTH,
  Location.DUNDALK_INSTITUTE_OF_TECHNOLOGY_LOUTH,
  Location.DUNDALK_LOUTH,
  Location.DUNDERROW_CORK,
  Location.DUNDERRY_MEATH,
  Location.DUNDONALD_DOWN,
  Location.DUNDROD_ANTRIM,
  Location.DUNDRUM_DOWN,
  Location.DUNDRUM_DUBLIN,
  Location.DUNDRUM_TIPPERARY,
  Location.DUNFANAGHY_DONEGAL,
  Location.DUNGANNON_TYRONE,
  Location.DUNGANSTOWN_WEXFORD,
  Location.DUNGARVAN_AND_SURROUNDS_WATERFORD,
  Location.DUNGARVAN_KILKENNY,
  Location.DUNGARVAN_WATERFORD,
  Location.DUNGIVEN_DERRY,
  Location.DUNGLOE_DONEGAL,
  Location.DUNGOURNEY_CORK,
  Location.DUNHILL_WATERFORD,
  Location.DUNIRY_GALWAY,
  Location.DUNKERRIN_OFFALY,
  Location.DUNKINEELY_DONEGAL,
  Location.DUNKITT_KILKENNY,
  Location.DUNLAVIN_WICKLOW,
  Location.DUNLEER_LOUTH,
  Location.DUNLEWY_DONEGAL,
  Location.DUNLOY_ANTRIM,
  Location.DUNMANUS_CORK,
  Location.DUNMANWAY_CORK,
  Location.DUNMORE_EAST_WATERFORD,
  Location.DUNMORE_GALWAY,
  Location.DUNMORE_KILKENNY,
  Location.DUNMURRY_ANTRIM,
  Location.DUNNAMAGGAN_KILKENNY,
  Location.DUNNAMANAGH_TYRONE,
  Location.DUNQUIN_KERRY,
  Location.DUNSANY_MEATH,
  Location.DUNSHAUGHLIN_MEATH,
  Location.DUNWORLY_CORK,
  Location.DURROW_LAOIS,
  Location.DURRUS_CORK,
  Location.DYSART_ROSCOMMON,
  Location.DYSART_WESTMEATH,
  Location.EASKEY_SLIGO,
  Location.EAST_BELFAST_CITY_ANTRIM,
  Location.EAST_CORK_CORK,
  Location.EAST_FERRY_CORK,
  Location.EAST_WALL_DUBLIN,
  Location.EDENDERRY_AND_SURROUNDS_OFFALY,
  Location.EDENDERRY_OFFALY,
  Location.EDENMORE_DUBLIN,
  Location.EDERNEY_FERMANAGH,
  Location.EDGEWORTHSTOWN_LONGFORD,
  Location.EDMONDSTOWN_DUBLIN,
  Location.EFFIN_LIMERICK,
  Location.EGLINTON_DERRY,
  Location.EGLISH_TYRONE,
  Location.EIGHTER_CAVAN,
  Location.ELLISTRIN_DONEGAL,
  Location.ELPHIN_ROSCOMMON,
  Location.ELTON_LIMERICK,
  Location.EMLY_TIPPERARY,
  Location.EMMOO_ROSCOMMON,
  Location.EMYVALE_MONAGHAN,
  Location.ENFIELD_MEATH,
  Location.ENNIS_AND_SURROUNDS_CLARE,
  Location.ENNIS_ROAD_LIMERICK,
  Location.ENNIS_CLARE,
  Location.ENNISCORTHY_AND_SURROUNDS_WEXFORD,
  Location.ENNISCORTHY_WEXFORD,
  Location.ENNISCRONE_SLIGO,
  Location.ENNISKEANE_CORK,
  Location.ENNISKERRY_WICKLOW,
  Location.ENNISKILLEN_FERMANAGH,
  Location.ENNISTYMON_CLARE,
  Location.ENNYBEGS_LONGFORD,
  Location.ERRA_ROSCOMMON,
  Location.ERRIFF_BRIDGE_MAYO,
  Location.ERRILL_LAOIS,
  Location.ERRISLANNAN_GALWAY,
  Location.ESKER_SOUTH_LONGFORD,
  Location.ESKER_GALWAY,
  Location.ESKERAGH_MAYO,
  Location.EYERIES_CORK,
  Location.EYRECOURT_GALWAY,
  Location.FAHA_WATERFORD,
  Location.FAHAMORE_KERRY,
  Location.FAHAN_DONEGAL,
  Location.FAHY_GALWAY,
  Location.FAIR_GREEN_CLARE,
  Location.FAIRHILL_CORK,
  Location.FAIRVIEW_DUBLIN,
  Location.FAIRYMOUNT_ROSCOMMON,
  Location.FAITHLEGG_WATERFORD,
  Location.FALCARRAGH_DONEGAL,
  Location.FALLMORE_MAYO,
  Location.FALLS_PARK_ANTRIM,
  Location.FALLS_ANTRIM,
  Location.FANAD_DONEGAL,
  Location.FANORE_CLARE,
  Location.FARAHY_CORK,
  Location.FARDRUM_WESTMEATH,
  Location.FARMER_S_BRIDGE_KERRY,
  Location.FARMERS_CROSS_CORK,
  Location.FARNAGHT_LEITRIM,
  Location.FARNANES_CORK,
  Location.FARNOGE_KILKENNY,
  Location.FARRAN_CORK,
  Location.FARRANFORE_KERRY,
  Location.FARRANREE_CORK,
  Location.FARRANSHONE_LIMERICK,
  Location.FASSAROE_WICKLOW,
  Location.FAUGHART_LOUTH,
  Location.FEAGARRID_WATERFORD,
  Location.FEAKLE_CLARE,
  Location.FEDAMORE_LIMERICK,
  Location.FEEARD_CLARE,
  Location.FEENAGH_LIMERICK,
  Location.FEENY_DERRY,
  Location.FEEVAGH_ROSCOMMON,
  Location.FENAGH_CARLOW,
  Location.FENAGH_LEITRIM,
  Location.FENIT_KERRY,
  Location.FENOR_WATERFORD,
  Location.FEOHANAGH_KERRY,
  Location.FEOHANAGH_LIMERICK,
  Location.FERBANE_OFFALY,
  Location.FERMANAGH,
  Location.FERMOY_AND_SURROUNDS_CORK,
  Location.FERMOY_CORK,
  Location.FERNS_WEXFORD,
  Location.FERRY_BRIDGE_LIMERICK,
  Location.FERRYBANK_WATERFORD,
  Location.FERRYBANK_WEXFORD,
  Location.FERRYBANK_WICKLOW,
  Location.FERRYCARRIG_WEXFORD,
  Location.FETHARD_TIPPERARY,
  Location.FETHARD_WEXFORD,
  Location.FETHARD_ON_SEA_WEXFORD,
  Location.FEWS_WATERFORD,
  Location.FIDDOWN_KILKENNY,
  Location.FINAGHY_ANTRIM,
  Location.FINAVARRA_CLARE,
  Location.FINEA_WESTMEATH,
  Location.FINGLAS_DUBLIN,
  Location.FINNEA_CAVAN,
  Location.FINNISGLIN_GALWAY,
  Location.FINNY_MAYO,
  Location.FINTONA_TYRONE,
  Location.FINTOWN_DONEGAL,
  Location.FINUGE_KERRY,
  Location.FIRHOUSE_DUBLIN,
  Location.FIRIES_KERRY,
  Location.FIRKEEL_CORK,
  Location.FISHERHILL_MAYO,
  Location.FIVEALLEY_OFFALY,
  Location.FIVEMILEBRIDGE_CORK,
  Location.FIVEMILETOWN_TYRONE,
  Location.FLAGMOUNT_CLARE,
  Location.FLAGMOUNT_KILKENNY,
  Location.FOILYCLEARA_LIMERICK,
  Location.FONTSTOWN_KILDARE,
  Location.FORDSTOWN_MEATH,
  Location.FORE_WESTMEATH,
  Location.FORKILL_ARMAGH,
  Location.FORMOYLE_CLARE,
  Location.FORMOYLE_LONGFORD,
  Location.FORMOYLE_MAYO,
  Location.FORT_STEWART_DONEGAL,
  Location.FORTH_RIVER_ANTRIM,
  Location.FORTHILL_LONGFORD,
  Location.FORTWILLIAM_ANTRIM,
  Location.FOSSA_KERRY,
  Location.FOULKSMILLS_WEXFORD,
  Location.FOUNTAIN_CROSS_CLARE,
  Location.FOUNTAINSTOWN_CORK,
  Location.FOUR_MILE_HOUSE_ROSCOMMON,
  Location.FOUR_ROADS_ROSCOMMON,
  Location.FOX_AND_GEESE_DUBLIN,
  Location.FOXFORD_MAYO,
  Location.FOXHALL_GALWAY,
  Location.FOXROCK_DUBLIN,
  Location.FOYNES_LIMERICK,
  Location.FRANKFIELD_CORK,
  Location.FREEMOUNT_CORK,
  Location.FRENCHPARK_ROSCOMMON,
  Location.FRESHFORD_KILKENNY,
  Location.FREYNESTOWN_WICKLOW,
  Location.FROSSES_DONEGAL,
  Location.FUERTY_ROSCOMMON,
  Location.FUNSHIN_MORE_GALWAY,
  Location.FURBO_GALWAY,
  Location.GAINESTOWN_WESTMEATH,
  Location.GALBALLY_LIMERICK,
  Location.GALBALLY_TYRONE,
  Location.GALBALLY_WEXFORD,
  Location.GALBOLIE_CAVAN,
  Location.GALGORM_ANTRIM,
  Location.GALLARUS_KERRY,
  Location.GALLOPING_GREEN_DUBLIN,
  Location.GALLOWSTOWN_ROSCOMMON,
  Location.GALMOY_KILKENNY,
  Location.GALWALLY_DOWN,
  Location.GALWAY_CITY,
  Location.GALWAY_CITY_CENTRE_GALWAY,
  Location.GALWAY_CITY_SUBURBS_GALWAY,
  Location.GALWAY_COMMUTER_TOWNS_GALWAY,
  Location.GALWAYMAYO_INSTITUTE_OF_TECHNOLOGY_GALWAY,
  Location.GARADICE_MEATH,
  Location.GARBALLY_GALWAY,
  Location.GARNAVILLA_TIPPERARY,
  Location.GARNERVILLE_DOWN,
  Location.GARRANE_CORK,
  Location.GARRANLAHAN_ROSCOMMON,
  Location.GARRAUN_CLARE,
  Location.GARRAUN_GALWAY,
  Location.GARRAVAGH_CORK,
  Location.GARRETTSTOWN_CORK,
  Location.GARRISON_FERMANAGH,
  Location.GARRISTOWN_DUBLIN,
  Location.GARRISTOWN_MEATH,
  Location.GARRYCLOONAGH_MAYO,
  Location.GARRYCULLEN_WEXFORD,
  Location.GARRYFINE_LIMERICK,
  Location.GARRYHILL_CARLOW,
  Location.GARRYKENNEDY_TIPPERARY,
  Location.GARRYOWEN_LIMERICK,
  Location.GARRYSPILLANE_LIMERICK,
  Location.GARRYVOE_CORK,
  Location.GARVAGH_DERRY,
  Location.GARVAGH_LEITRIM,
  Location.GATTABAUN_KILKENNY,
  Location.GAWSWORTH_CORK,
  Location.GEASHILL_OFFALY,
  Location.GEESALA_MAYO,
  Location.GEEVAGH_SLIGO,
  Location.GERAHIES_CORK,
  Location.GILES_QUAY_LOUTH,
  Location.GILFORD_DOWN,
  Location.GILNAHIRK_DOWN,
  Location.GLANDORE_CORK,
  Location.GLANGEVLIN_CAVAN,
  Location.GLANMIRE_CORK,
  Location.GLANOE_KERRY,
  Location.GLANTANE_CORK,
  Location.GLANWORTH_CORK,
  Location.GLARRYFORD_ANTRIM,
  Location.GLASHEEN_CORK,
  Location.GLASLOUGH_MONAGHAN,
  Location.GLASMULLAN_DONEGAL,
  Location.GLASNEVIN_DUBLIN,
  Location.GLASSILLAUN_MAYO,
  Location.GLASSON_WESTMEATH,
  Location.GLASTHULE_DUBLIN,
  Location.GLEN_OF_AHERLOW_TIPPERARY,
  Location.GLEN_DONEGAL,
  Location.GLENADE_LEITRIM,
  Location.GLENAGEARY_DUBLIN,
  Location.GLENAMADDY_GALWAY,
  Location.GLENAMOY_MAYO,
  Location.GLENARIFF_ANTRIM,
  Location.GLENARM_ANTRIM,
  Location.GLENASMOLE_DUBLIN,
  Location.GLENAVY_ANTRIM,
  Location.GLENBEIGH_KERRY,
  Location.GLENBOY_LEITRIM,
  Location.GLENBROHANE_LIMERICK,
  Location.GLENBROOK_CORK,
  Location.GLENCAIRN_ANTRIM,
  Location.GLENCAR_KERRY,
  Location.GLENCAR_LEITRIM,
  Location.GLENCAR_SLIGO,
  Location.GLENCOLMCILLE_DONEGAL,
  Location.GLENCORRIB_MAYO,
  Location.GLENCREE_WICKLOW,
  Location.GLENCULLEN_DUBLIN,
  Location.GLENDALOUGH_WATERFORD,
  Location.GLENDALOUGH_WICKLOW,
  Location.GLENDERRY_KERRY,
  Location.GLENDINE_KILKENNY,
  Location.GLENDORRAGHA_DONEGAL,
  Location.GLENDOWAN_DONEGAL,
  Location.GLENDREE_CLARE,
  Location.GLENEALY_WICKLOW,
  Location.GLENEELY_DONEGAL,
  Location.GLENFARNE_LEITRIM,
  Location.GLENFLESK_KERRY,
  Location.GLENGARRIFF_CORK,
  Location.GLENGORMLEY_ANTRIM,
  Location.GLENISLAND_MAYO,
  Location.GLENMALURE_WICKLOW,
  Location.GLENMORE_CLARE,
  Location.GLENMORE_KILKENNY,
  Location.GLENNAGEVLAGH_GALWAY,
  Location.GLENROE_LIMERICK,
  Location.GLENTANE_GALWAY,
  Location.GLENTIES_DONEGAL,
  Location.GLENTOGHER_DONEGAL,
  Location.GLENTRASNA_GALWAY,
  Location.GLENVAR_DONEGAL,
  Location.GLENVILLE_CORK,
  Location.GLIN_LIMERICK,
  Location.GLINSK_DONEGAL,
  Location.GLINSK_GALWAY,
  Location.GLOUNTHAUNE_CORK,
  Location.GLYNN_ANTRIM,
  Location.GLYNN_WEXFORD,
  Location.GNEEVGUILLA_KERRY,
  Location.GOATSTOWN_DUBLIN,
  Location.GOLDEN_TIPPERARY,
  Location.GOLEEN_CORK,
  Location.GOOLD_S_CROSS_TIPPERARY,
  Location.GORESBRIDGE_KILKENNY,
  Location.GOREY_AND_SURROUNDS_WEXFORD,
  Location.GOREY_WEXFORD,
  Location.GORMANSTON_MEATH,
  Location.GORT_AND_SURROUNDS_GALWAY,
  Location.GORT_GALWAY,
  Location.GORTAHORK_DONEGAL,
  Location.GORTALEAM_GALWAY,
  Location.GORTAREVAN_OFFALY,
  Location.GORTAROO_CORK,
  Location.GORTATLEVA_GALWAY,
  Location.GORTAWAY_DONEGAL,
  Location.GORTEENY_GALWAY,
  Location.GORTFADDA_SLIGO,
  Location.GORTGARRIFF_CORK,
  Location.GORTGARRIGAN_LEITRIM,
  Location.GORTIN_TYRONE,
  Location.GORTLETTERAGH_LEITRIM,
  Location.GORTMORE_GALWAY,
  Location.GORTMORE_MAYO,
  Location.GORTNADEEVE_GALWAY,
  Location.GORTNAHOO_TIPPERARY,
  Location.GORTNAKESH_CAVAN,
  Location.GORTNASILLAGH_ROSCOMMON,
  Location.GORTREE_DONEGAL,
  Location.GORTYMADDEN_GALWAY,
  Location.GORVAGH_LEITRIM,
  Location.GOULADOO_CORK,
  Location.GOULDAVOHER_LIMERICK,
  Location.GOWLA_GALWAY,
  Location.GOWLAUN_GALWAY,
  Location.GOWLIN_CARLOW,
  Location.GOWRAN_KILKENNY,
  Location.GRACEDIEU_WATERFORD,
  Location.GRACEHILL_ANTRIM,
  Location.GRAFFY_DONEGAL,
  Location.GRAFTON_COLLEGE_OF_MANAGEMENT_SCIENCES_DUBLIN,
  Location.GRAIGUE_HILL_CARLOW,
  Location.GRAIGUE_MORE_WEXFORD,
  Location.GRAIGUECULLEN_CARLOW,
  Location.GRAIGUECULLEN_LAOIS,
  Location.GRAIGUENAMANAGH_CARLOW,
  Location.GRAIGUENAMANAGH_KILKENNY,
  Location.GRANABEG_WICKLOW,
  Location.GRANAGH_LIMERICK,
  Location.GRANARD_AND_SURROUNDS_LONGFORD,
  Location.GRANARD_LONGFORD,
  Location.GRAND_CANAL_DOCK_DUBLIN,
  Location.GRANEY_KILDARE,
  Location.GRANGE_CASTLE_DUBLIN,
  Location.GRANGE_CON_WICKLOW,
  Location.GRANGE_CARLOW,
  Location.GRANGE_CORK,
  Location.GRANGE_KILDARE,
  Location.GRANGE_KILKENNY,
  Location.GRANGE_LIMERICK,
  Location.GRANGE_LOUTH,
  Location.GRANGE_SLIGO,
  Location.GRANGE_WATERFORD,
  Location.GRANGEBELLEW_LOUTH,
  Location.GRANGEFORD_CARLOW,
  Location.GRANGEGEETH_MEATH,
  Location.GRANGEMOCKLER_TIPPERARY,
  Location.GRANNAGH_GALWAY,
  Location.GRANSHA_ANTRIM,
  Location.GRANTSTOWN_WATERFORD,
  Location.GRASHNA_DOWN,
  Location.GREAGH_LEITRIM,
  Location.GREENAN_WICKLOW,
  Location.GREENANSTOWN_MEATH,
  Location.GREENCASTLE_DONEGAL,
  Location.GREENCASTLE_TYRONE,
  Location.GREENFIELD_CORK,
  Location.GREENFIELD_GALWAY,
  Location.GREENHILLS_DUBLIN,
  Location.GREENISLAND_ANTRIM,
  Location.GREENORE_LOUTH,
  Location.GRENAGH_CORK,
  Location.GREYABBEY_DOWN,
  Location.GREYSTEEL_DERRY,
  Location.GREYSTONES_WICKLOW,
  Location.GRIFFITH_COLLEGE_DUBLIN_DUBLIN,
  Location.GROGAN_OFFALY,
  Location.GROOMSPORT_DOWN,
  Location.GUBAVEENY_CAVAN,
  Location.GULLADUFF_DERRY,
  Location.GURRANABRAHER_CORK,
  Location.GURTEEN_GALWAY,
  Location.GURTEEN_LEITRIM,
  Location.GURTEEN_SLIGO,
  Location.GUSSERANE_WEXFORD,
  Location.GWEEDORE_DONEGAL,
  Location.GYLEEN_CORK,
  Location.HACKETSTOWN_CARLOW,
  Location.HALFWAY_CORK,
  Location.HAMILTONSBAWN_ARMAGH,
  Location.HANNAHSTOWN_ANTRIM,
  Location.HANOVER_QUAY_DUBLIN,
  Location.HAROLD_S_CROSS_DUBLIN,
  Location.HARRISTOWN_KILKENNY,
  Location.HARTSTOWN_DUBLIN,
  Location.HEADFORD_ROAD_GALWAY,
  Location.HEADFORD_GALWAY,
  Location.HEIR_ISLAND_CORK,
  Location.HERBERTSTOWN_LIMERICK,
  Location.HIGHWOOD_SLIGO,
  Location.HILL_STREET_ROSCOMMON,
  Location.HILLFOOT_DOWN,
  Location.HILLSBOROUGH_DOWN,
  Location.HILLTOWN_DOWN,
  Location.HILLTOWN_WEXFORD,
  Location.HOLLYFORD_TIPPERARY,
  Location.HOLLYFORT_WEXFORD,
  Location.HOLLYHILL_CORK,
  Location.HOLLYMOUNT_MAYO,
  Location.HOLLYSTOWN_DUBLIN,
  Location.HOLLYWOOD_WICKLOW,
  Location.HOLY_CROSS_TIPPERARY,
  Location.HOLYCROSS_LIMERICK,
  Location.HOLYCROSS_TIPPERARY,
  Location.HOLYLANDS_ANTRIM,
  Location.HOLYWOOD_DOWN,
  Location.HORSE_AND_JOCKEY_TIPPERARY,
  Location.HORSELEAP_OFFALY,
  Location.HOSPITAL_LIMERICK,
  Location.HOWTH_DUBLIN,
  Location.HUGGINSTOWN_KILKENNY,
  Location.HUNTSTOWN_DUBLIN,
  Location.HURLERS_CROSS_CLARE,
  Location.IBAT_COLLEGE_DUBLIN_TEMPLE_BAR_CAMPUS_DUBLIN,
  Location.ICD_BUSINESS_SCHOOL_DUBLIN,
  Location.IFSC_DUBLIN,
  Location.ILLAUNSTOOKAGH_KERRY,
  Location.ILLIES_DONEGAL,
  Location.INAGH_CLARE,
  Location.INCH_DONEGAL,
  Location.INCH_KERRY,
  Location.INCH_TIPPERARY,
  Location.INCH_WEXFORD,
  Location.INCHBEG_KILKENNY,
  Location.INCHICORE_DUBLIN,
  Location.INCHIGEELAGH_CORK,
  Location.INCHNAMUCK_TIPPERARY,
  Location.INDEPENDENT_COLLEGE_DUBLIN_DUBLIN,
  Location.INISHBOFIN_ISLAND_GALWAY,
  Location.INISHCARRA_CORK,
  Location.INISHEER_GALWAY,
  Location.INISHMAAN_GALWAY,
  Location.INISHMORE_GALWAY,
  Location.INISHTURK_MAYO,
  Location.INISTIOGE_KILKENNY,
  Location.INNISCARRA_CORK,
  Location.INNISFAYE_ANTRIM,
  Location.INNISHANNON_CORK,
  Location.INNISKEEN_MONAGHAN,
  Location.INSTITUTE_OF_TECHNOLOGY_BLANCHARDSTOWN_DUBLIN,
  Location.INSTITUTE_OF_TECHNOLOGY_SLIGO_SLIGO,
  Location.INSTITUTE_OF_TECHNOLOGY_TALLAGHT_DUBLIN,
  Location.INSTITUTE_OF_TECHNOLOGY_TRALEE_KERRY,
  Location.INVER_DONEGAL,
  Location.INVER_MAYO,
  Location.INVERIN_GALWAY,
  Location.IRISH_COLLEGE_OF_HUMANITIES_AND_APPLIED_SCIENCES_LIMERICK,
  Location.IRISHTOWN_DUBLIN,
  Location.IRISHTOWN_MAYO,
  Location.IRVINESTOWN_FERMANAGH,
  Location.ISLANDBRIDGE_DUBLIN,
  Location.ISLANDEADY_MAYO,
  Location.ISLANDMAGEE_ANTRIM,
  Location.JAMESTOWN_LAOIS,
  Location.JAMESTOWN_LEITRIM,
  Location.JANESBORO_LIMERICK,
  Location.JENKINSTOWN_KILKENNY,
  Location.JENKINSTOWN_LOUTH,
  Location.JOBSTOWN_DUBLIN,
  Location.JOHNSTOWN_BRIDGE_KILDARE,
  Location.JOHNSTOWN_KILDARE,
  Location.JOHNSTOWN_KILKENNY,
  Location.JOHNSTOWN_MEATH,
  Location.JOHNSTOWN_WICKLOW,
  Location.JOHNSTOWNBRIDGE_KILDARE,
  Location.JOHNSWELL_KILKENNY,
  Location.JONESBOROUGH_ARMAGH,
  Location.JORDAN_S_ISLAND_GALWAY,
  Location.JULIANSTOWN_MEATH,
  Location.KANTURK_AND_SURROUNDS_CORK,
  Location.KANTURK_CORK,
  Location.KATESBRIDGE_DOWN,
  Location.KEADUE_ROSCOMMON,
  Location.KEADY_ARMAGH,
  Location.KEALKILL_CORK,
  Location.KEEAGH_GALWAY,
  Location.KEELOGES_GALWAY,
  Location.KEENAGH_LONGFORD,
  Location.KEENAGH_MAYO,
  Location.KEERAUN_GALWAY,
  Location.KEERAUNNAGARK_GALWAY,
  Location.KEEREEN_WATERFORD,
  Location.KELLISTOWN_WEST_CARLOW,
  Location.KELLISTOWN_CARLOW,
  Location.KELLS_AND_SURROUNDS_MEATH,
  Location.KELLS_ANTRIM,
  Location.KELLS_KERRY,
  Location.KELLS_KILKENNY,
  Location.KELLS_MEATH,
  Location.KELLYSGROVE_GALWAY,
  Location.KENMARE_AND_SURROUNDS_KERRY,
  Location.KENMARE_KERRY,
  Location.KENTFIELD_GALWAY,
  Location.KENTSTOWN_MEATH,
  Location.KERRY_PIKE_CORK,
  Location.KERRYKEEL_DONEGAL,
  Location.KESH_FERMANAGH,
  Location.KESH_SLIGO,
  Location.KESHCARRIGAN_LEITRIM,
  Location.KILANERIN_WEXFORD,
  Location.KILANNY_LOUTH,
  Location.KILBAHA_CLARE,
  Location.KILBANE_LIMERICK,
  Location.KILBANNON_GALWAY,
  Location.KILBARRACK_DUBLIN,
  Location.KILBARRY_CORK,
  Location.KILBEACANTY_GALWAY,
  Location.KILBEGGAN_WESTMEATH,
  Location.KILBEHENNY_LIMERICK,
  Location.KILBERRY_KILDARE,
  Location.KILBERRY_MEATH,
  Location.KILBREEDY_LIMERICK,
  Location.KILBRICKAN_GALWAY,
  Location.KILBRICKEN_LAOIS,
  Location.KILBRIDE_MEATH,
  Location.KILBRIDE_WICKLOW,
  Location.KILBRIEN_WATERFORD,
  Location.KILBRIN_CORK,
  Location.KILBRITTAIN_CORK,
  Location.KILCAIMIN_GALWAY,
  Location.KILCAR_DONEGAL,
  Location.KILCARN_MEATH,
  Location.KILCARRA_WICKLOW,
  Location.KILCASH_TIPPERARY,
  Location.KILCAVAN_LAOIS,
  Location.KILCHREEST_GALWAY,
  Location.KILCLARAN_CLARE,
  Location.KILCLIEF_DOWN,
  Location.KILCLOGHER_CLARE,
  Location.KILCLONFERT_OFFALY,
  Location.KILCLOON_MEATH,
  Location.KILCLOONEY_DONEGAL,
  Location.KILCLOONEY_WATERFORD,
  Location.KILCOCK_AND_SURROUNDS_KILDARE,
  Location.KILCOCK_KILDARE,
  Location.KILCOCK_MEATH,
  Location.KILCOGY_CAVAN,
  Location.KILCOLGAN_GALWAY,
  Location.KILCOLMAN_CORK,
  Location.KILCOLMAN_LIMERICK,
  Location.KILCOLTRIM_CARLOW,
  Location.KILCOMIN_OFFALY,
  Location.KILCOMMON_TIPPERARY,
  Location.KILCON_MAYO,
  Location.KILCONIERON_GALWAY,
  Location.KILCONLY_GALWAY,
  Location.KILCONLY_KERRY,
  Location.KILCONNEL_GALWAY,
  Location.KILCOO_DOWN,
  Location.KILCOOLE_WICKLOW,
  Location.KILCORMAC_OFFALY,
  Location.KILCORNAN_LIMERICK,
  Location.KILCOTTY_WEXFORD,
  Location.KILCREDAN_CORK,
  Location.KILCROHANE_CORK,
  Location.KILCULLEN_KILDARE,
  Location.KILCULLY_CORK,
  Location.KILCUMMIN_KERRY,
  Location.KILCUMMIN_MAYO,
  Location.KILCURLY_LOUTH,
  Location.KILCURRY_LOUTH,
  Location.KILDALKEY_MEATH,
  Location.KILDANGAN_KILDARE,
  Location.KILDARE_AND_SURROUNDS_KILDARE,
  Location.KILDARE_KILDARE,
  Location.KILDAVIN_CARLOW,
  Location.KILDERRY_KILKENNY,
  Location.KILDIMO_LIMERICK,
  Location.KILDINAN_CORK,
  Location.KILDORRERY_CORK,
  Location.KILDYSART_CLARE,
  Location.KILEELY_LIMERICK,
  Location.KILEENEENMORE_GALWAY,
  Location.KILFEAKLE_TIPPERARY,
  Location.KILFEARAGH_CLARE,
  Location.KILFENORA_CLARE,
  Location.KILFINANE_LIMERICK,
  Location.KILFINNY_LIMERICK,
  Location.KILFLYNN_KERRY,
  Location.KILGARVAN_KERRY,
  Location.KILGLASS_GALWAY,
  Location.KILGLASS_ROSCOMMON,
  Location.KILGLASS_SLIGO,
  Location.KILGOBNET_KERRY,
  Location.KILGOBNET_WATERFORD,
  Location.KILGOWAN_KILDARE,
  Location.KILJAMES_KILKENNY,
  Location.KILKEA_KILDARE,
  Location.KILKEARY_TIPPERARY,
  Location.KILKEASY_KILKENNY,
  Location.KILKEE_CLARE,
  Location.KILKEEL_DOWN,
  Location.KILKELLY_MAYO,
  Location.KILKENNY_AND_SURROUNDS_KILKENNY,
  Location.KILKENNY,
  Location.KILKENNY_WEST_WESTMEATH,
  Location.KILKENNY_KILKENNY,
  Location.KILKERLEY_LOUTH,
  Location.KILKERRIN_GALWAY,
  Location.KILKIERAN_GALWAY,
  Location.KILKIERNAN_KILKENNY,
  Location.KILKISHEN_CLARE,
  Location.KILL_O_THE_GRANGE_DUBLIN,
  Location.KILL_CAVAN,
  Location.KILL_KILDARE,
  Location.KILL_WATERFORD,
  Location.KILLABUNANE_KERRY,
  Location.KILLACLUG_CORK,
  Location.KILLACOLLA_LIMERICK,
  Location.KILLADANGAN_MAYO,
  Location.KILLADEAS_FERMANAGH,
  Location.KILLADOON_MAYO,
  Location.KILLADYSERT_CLARE,
  Location.KILLAFEEN_GALWAY,
  Location.KILLAG_WEXFORD,
  Location.KILLAGHTEEN_LIMERICK,
  Location.KILLAHY_KILKENNY,
  Location.KILLAKEE_DUBLIN,
  Location.KILLALA_MAYO,
  Location.KILLALLON_MEATH,
  Location.KILLALOE_CLARE,
  Location.KILLAMERY_KILKENNY,
  Location.KILLANE_OFFALY,
  Location.KILLANENA_CLARE,
  Location.KILLANNE_WEXFORD,
  Location.KILLARD_CLARE,
  Location.KILLARGA_LEITRIM,
  Location.KILLARNEY_AND_SURROUNDS_KERRY,
  Location.KILLARNEY_KERRY,
  Location.KILLARONE_GALWAY,
  Location.KILLASHEE_LONGFORD,
  Location.KILLASSER_MAYO,
  Location.KILLAVALLY_MAYO,
  Location.KILLAVALLY_WESTMEATH,
  Location.KILLAVIL_SLIGO,
  Location.KILLAVULLEN_CORK,
  Location.KILLEA_DONEGAL,
  Location.KILLEA_TIPPERARY,
  Location.KILLEAGH_CORK,
  Location.KILLEANY_GALWAY,
  Location.KILLEDMOND_CARLOW,
  Location.KILLEEDY_LIMERICK,
  Location.KILLEEN_ARMAGH,
  Location.KILLEEN_GALWAY,
  Location.KILLEENARAN_GALWAY,
  Location.KILLEENS_CORK,
  Location.KILLEEVAN_MONAGHAN,
  Location.KILLEGLAN_ROSCOMMON,
  Location.KILLEIGH_OFFALY,
  Location.KILLENAGH_WEXFORD,
  Location.KILLENARD_LAOIS,
  Location.KILLENAULE_TIPPERARY,
  Location.KILLERIG_CARLOW,
  Location.KILLESHANDRA_CAVAN,
  Location.KILLESHIL_OFFALY,
  Location.KILLESHIN_CARLOW,
  Location.KILLESHIN_LAOIS,
  Location.KILLESTER_DUBLIN,
  Location.KILLIMER_CLARE,
  Location.KILLIMOR_GALWAY,
  Location.KILLINABOY_CLARE,
  Location.KILLINASPICK_KILKENNY,
  Location.KILLINCHY_DOWN,
  Location.KILLINCOOLY_WEXFORD,
  Location.KILLINEY_DUBLIN,
  Location.KILLINICK_WEXFORD,
  Location.KILLINKERE_CAVAN,
  Location.KILLINNY_GALWAY,
  Location.KILLINTHOMAS_KILDARE,
  Location.KILLISKEA_OFFALY,
  Location.KILLISKEY_WICKLOW,
  Location.KILLMEY_KERRY,
  Location.KILLOE_LONGFORD,
  Location.KILLOGEARY_MAYO,
  Location.KILLONECAHA_KERRY,
  Location.KILLORAN_GALWAY,
  Location.KILLORGLIN_KERRY,
  Location.KILLOSCOBE_GALWAY,
  Location.KILLOUGH_DOWN,
  Location.KILLOUGH_WICKLOW,
  Location.KILLOWEN_DOWN,
  Location.KILLOWEN_WATERFORD,
  Location.KILLUCAN_WESTMEATH,
  Location.KILLUKIN_ROSCOMMON,
  Location.KILLUMNEY_CORK,
  Location.KILLURIN_OFFALY,
  Location.KILLURIN_WEXFORD,
  Location.KILLURLY_KERRY,
  Location.KILLUSTY_TIPPERARY,
  Location.KILLYBEGS_DONEGAL,
  Location.KILLYCLOGHER_TYRONE,
  Location.KILLYCLUG_DONEGAL,
  Location.KILLYGAR_LEITRIM,
  Location.KILLYGORDON_DONEGAL,
  Location.KILLYKEEN_CAVAN,
  Location.KILLYLEA_ARMAGH,
  Location.KILLYLEAGH_DOWN,
  Location.KILLYON_OFFALY,
  Location.KILMACANOGUE_WICKLOW,
  Location.KILMACOO_WICKLOW,
  Location.KILMACOW_KILKENNY,
  Location.KILMACOW_WATERFORD,
  Location.KILMACRENAN_DONEGAL,
  Location.KILMACTEIGE_SLIGO,
  Location.KILMACTHOMAS_WATERFORD,
  Location.KILMACTRANNY_SLIGO,
  Location.KILMACUD_DUBLIN,
  Location.KILMACURRAGH_WICKLOW,
  Location.KILMAINE_MAYO,
  Location.KILMAINHAM_DUBLIN,
  Location.KILMAINHAMWOOD_MEATH,
  Location.KILMALEY_CLARE,
  Location.KILMALKEDAR_KERRY,
  Location.KILMALLOCK_LIMERICK,
  Location.KILMANAGH_KILKENNY,
  Location.KILMEAD_KILDARE,
  Location.KILMEADAN_WATERFORD,
  Location.KILMEAGE_KILDARE,
  Location.KILMEEDY_LIMERICK,
  Location.KILMEELICKIN_GALWAY,
  Location.KILMEENA_MAYO,
  Location.KILMESSAN_MEATH,
  Location.KILMICHAEL_CORK,
  Location.KILMICHAEL_WEXFORD,
  Location.KILMIHIL_CLARE,
  Location.KILMINCHY_LAOIS,
  Location.KILMOGANNY_KILKENNY,
  Location.KILMONA_CORK,
  Location.KILMOON_CORK,
  Location.KILMORE_QUAY_WEXFORD,
  Location.KILMORE_ARMAGH,
  Location.KILMORE_CLARE,
  Location.KILMORE_DUBLIN,
  Location.KILMORE_MAYO,
  Location.KILMORE_ROSCOMMON,
  Location.KILMORE_WEXFORD,
  Location.KILMORNA_KERRY,
  Location.KILMORONY_LAOIS,
  Location.KILMOVEE_MAYO,
  Location.KILMUCKRIDGE_WEXFORD,
  Location.KILMURRY_MCMAHON_CLARE,
  Location.KILMURRY_CLARE,
  Location.KILMURRY_CORK,
  Location.KILMURRY_LIMERICK,
  Location.KILMURRY_WICKLOW,
  Location.KILMURVY_GALWAY,
  Location.KILMYSHALL_WEXFORD,
  Location.KILNAGROSS_LEITRIM,
  Location.KILNALAG_GALWAY,
  Location.KILNALECK_CAVAN,
  Location.KILNAMANAGH_DUBLIN,
  Location.KILNAMANAGH_WEXFORD,
  Location.KILNAMONA_CLARE,
  Location.KILNAP_CORK,
  Location.KILOSCULLY_TIPPERARY,
  Location.KILPATRICK_CORK,
  Location.KILPEACAN_CROSS_ROADS_KERRY,
  Location.KILPEDDER_WICKLOW,
  Location.KILPOOLE_WICKLOW,
  Location.KILQUADE_WICKLOW,
  Location.KILQUIGGUIN_WICKLOW,
  Location.KILRANE_WEXFORD,
  Location.KILREA_DERRY,
  Location.KILREAN_DONEGAL,
  Location.KILREEKIL_GALWAY,
  Location.KILRONAN_GALWAY,
  Location.KILROOSKEY_ROSCOMMON,
  Location.KILROSS_DONEGAL,
  Location.KILROSS_TIPPERARY,
  Location.KILRUSH_AND_SURROUNDS_CLARE,
  Location.KILRUSH_CLARE,
  Location.KILSALLAGH_GALWAY,
  Location.KILSALLAGH_MAYO,
  Location.KILSALLAGHAN_DUBLIN,
  Location.KILSARAN_LOUTH,
  Location.KILSHANCHOE_KILDARE,
  Location.KILSHANE_CROSS_DUBLIN,
  Location.KILSHANNIG_KERRY,
  Location.KILSHANNY_CLARE,
  Location.KILSHANROE_KILDARE,
  Location.KILSHEELAN_TIPPERARY,
  Location.KILSKEER_MEATH,
  Location.KILTALE_MEATH,
  Location.KILTEALY_WEXFORD,
  Location.KILTEEL_KILDARE,
  Location.KILTEELY_LIMERICK,
  Location.KILTEEVAN_ROSCOMMON,
  Location.KILTEGAN_WICKLOW,
  Location.KILTERNAN_DUBLIN,
  Location.KILTIMAGH_MAYO,
  Location.KILTIPPER_DUBLIN,
  Location.KILTOBER_WESTMEATH,
  Location.KILTOOM_ROSCOMMON,
  Location.KILTORMER_GALWAY,
  Location.KILTULLAGH_GALWAY,
  Location.KILTYCLOGHER_LEITRIM,
  Location.KILVINE_MAYO,
  Location.KILWORTH_CAMP_CORK,
  Location.KILWORTH_CORK,
  Location.KIMMAGE_DUBLIN,
  Location.KINARD_LIMERICK,
  Location.KINAWLEY_FERMANAGH,
  Location.KINCASSLAGH_DONEGAL,
  Location.KINCON_MAYO,
  Location.KINDROHID_DONEGAL,
  Location.KINDRUM_DONEGAL,
  Location.KINGARROW_DONEGAL,
  Location.KINGS_INNS_DUBLIN,
  Location.KINGSCOURT_CAVAN,
  Location.KINGSLAND_ROSCOMMON,
  Location.KINGSTON_GALWAY,
  Location.KINGSTOWN_GALWAY,
  Location.KINGSWOOD_DUBLIN,
  Location.KINLOUGH_LEITRIM,
  Location.KINNADOOHY_MAYO,
  Location.KINNEGAD_MEATH,
  Location.KINNEGAD_WESTMEATH,
  Location.KINNEGO_DONEGAL,
  Location.KINNITTY_OFFALY,
  Location.KINSALE_AND_SURROUNDS_CORK,
  Location.KINSALE_CORK,
  Location.KINSALEBEG_WATERFORD,
  Location.KINSEALY_DUBLIN,
  Location.KINVARA_GALWAY,
  Location.KIRCUBBIN_DOWN,
  Location.KISHKEAM_CORK,
  Location.KITCONNELL_GALWAY,
  Location.KNAPPAGH_MAYO,
  Location.KNIGHT_S_TOWN_KERRY,
  Location.KNOCK_CLARE,
  Location.KNOCK_DOWN,
  Location.KNOCK_MAYO,
  Location.KNOCK_TIPPERARY,
  Location.KNOCKADERRY_LIMERICK,
  Location.KNOCKAINEY_LIMERICK,
  Location.KNOCKAINY_LIMERICK,
  Location.KNOCKALOUGH_CLARE,
  Location.KNOCKANANNA_WICKLOW,
  Location.KNOCKANEVIN_CORK,
  Location.KNOCKANILLAUN_MAYO,
  Location.KNOCKANORE_WATERFORD,
  Location.KNOCKANURE_ROAD_KERRY,
  Location.KNOCKAUNALOUR_CORK,
  Location.KNOCKAUNNAGLASHY_KERRY,
  Location.KNOCKBOY_WATERFORD,
  Location.KNOCKBRACK_DONEGAL,
  Location.KNOCKBRACKEN_DOWN,
  Location.KNOCKBRANDON_WEXFORD,
  Location.KNOCKBREDA_DOWN,
  Location.KNOCKBRIDE_CAVAN,
  Location.KNOCKBRIDGE_LOUTH,
  Location.KNOCKBRIT_TIPPERARY,
  Location.KNOCKBURDEN_CORK,
  Location.KNOCKCROGHERY_ROSCOMMON,
  Location.KNOCKDRIN_WESTMEATH,
  Location.KNOCKERRY_CLARE,
  Location.KNOCKFERRY_GALWAY,
  Location.KNOCKLOFTY_TIPPERARY,
  Location.KNOCKLONG_LIMERICK,
  Location.KNOCKLOUGHRIM_DERRY,
  Location.KNOCKLYON_DUBLIN,
  Location.KNOCKMORE_MAYO,
  Location.KNOCKMOURNE_CORK,
  Location.KNOCKNABOUL_KERRY,
  Location.KNOCKNACARRA_GALWAY,
  Location.KNOCKNACREE_KILDARE,
  Location.KNOCKNAGONEY_DOWN,
  Location.KNOCKNAGOSHEL_KERRY,
  Location.KNOCKNAGREE_CORK,
  Location.KNOCKNAHEENY_CORK,
  Location.KNOCKNAHILAN_CORK,
  Location.KNOCKNALINA_MAYO,
  Location.KNOCKNALOWER_MAYO,
  Location.KNOCKRAHA_CORK,
  Location.KNOCKROBIN_WICKLOW,
  Location.KNOCKS_CORK,
  Location.KNOCKS_LAOIS,
  Location.KNOCKSKAGH_CORK,
  Location.KNOCKTOPHER_KILKENNY,
  Location.KNOCKTOWN_WEXFORD,
  Location.KNOCKUNDERVAUL_KERRY,
  Location.KNOCKVICAR_ROSCOMMON,
  Location.KNUTTERY_CORK,
  Location.KYLEBRACK_GALWAY,
  Location.KYLEMORE_GALWAY,
  Location.KYLESALIA_GALWAY,
  Location.LA_COLLEGE_OF_CREATIVE_ARTS_DUBLIN,
  Location.LABAN_GALWAY,
  Location.LABASHEEDA_CLARE,
  Location.LACK_FERMANAGH,
  Location.LACKAGH_GALWAY,
  Location.LACKAGH_KILDARE,
  Location.LACKAREAGH_CORK,
  Location.LACKAROE_WATERFORD,
  Location.LACKEN_WICKLOW,
  Location.LACKENSHONEEN_CORK,
  Location.LACONNELL_DONEGAL,
  Location.LADYBROOK_ANTRIM,
  Location.LADYSBRIDGE_CORK,
  Location.LAFFANSBRIDGE_TIPPERARY,
  Location.LAG_DONEGAL,
  Location.LAGGANSTOWN_TIPPERARY,
  Location.LAGHY_DONEGAL,
  Location.LAGMORE_ANTRIM,
  Location.LAHARDAUN_MAYO,
  Location.LAHINCH_ROAD_CLARE,
  Location.LAHINCH_CLARE,
  Location.LAKYLE_CLARE,
  Location.LANESBOROUGH_LONGFORD,
  Location.LANESBOROUGH_ROSCOMMON,
  Location.LARACOR_MEATH,
  Location.LARAGH_KILDARE,
  Location.LARAGH_MONAGHAN,
  Location.LARAGH_WICKLOW,
  Location.LARGAN_MAYO,
  Location.LARGAN_SLIGO,
  Location.LARGY_DONEGAL,
  Location.LARGYDONNELL_LEITRIM,
  Location.LARNE_ANTRIM,
  Location.LATTIN_TIPPERARY,
  Location.LAUGHANSTOWN_DUBLIN,
  Location.LAURAGH_KERRY,
  Location.LAURELVALE_ARMAGH,
  Location.LAURENCETOWN_GALWAY,
  Location.LAVAGH_SLIGO,
  Location.LAVALLY_GALWAY,
  Location.LAVEY_CAVAN,
  Location.LAW_SOCIETY_OF_IRELAND_EDUCATION_CENTRE_DUBLIN_DUBLIN,
  Location.LAWRENCETOWN_DOWN,
  Location.LAYTOWN_AND_SURROUNDS_MEATH,
  Location.LAYTOWN_MEATH,
  Location.LEABGARROW_DONEGAL,
  Location.LEAMLARA_CORK,
  Location.LECARROW_LEITRIM,
  Location.LECARROW_ROSCOMMON,
  Location.LECKANARAINEY_LEITRIM,
  Location.LECKANVY_MAYO,
  Location.LECKAUN_LEITRIM,
  Location.LECKEMY_DONEGAL,
  Location.LEENANE_GALWAY,
  Location.LEGAN_LONGFORD,
  Location.LEGGAH_LONGFORD,
  Location.LEGONIEL_ANTRIM,
  Location.LEHARDAN_DONEGAL,
  Location.LEHENAGHMORE_CORK,
  Location.LEIGHLINBRIDGE_CARLOW,
  Location.LEITRIM_CLARE,
  Location.LEITRIM_DOWN,
  Location.LEITRIM_LEITRIM,
  Location.LEIXLIP_AND_SURROUNDS_KILDARE,
  Location.LEIXLIP_KILDARE,
  Location.LEMANAGHAN_OFFALY,
  Location.LEMYBRIEN_WATERFORD,
  Location.LENABOY_GALWAY,
  Location.LEOPARDSTOWN_DUBLIN,
  Location.LERRIG_KERRY,
  Location.LETTERAGH_GALWAY,
  Location.LETTERBARRA_DONEGAL,
  Location.LETTERBREEN_FERMANAGH,
  Location.LETTERCALLOW_GALWAY,
  Location.LETTERFINISH_KERRY,
  Location.LETTERFRACK_GALWAY,
  Location.LETTERKELLY_CLARE,
  Location.LETTERKENNY_AND_SURROUNDS_DONEGAL,
  Location.LETTERKENNY_INSTITUTE_OF_TECHNOLOGY_DONEGAL,
  Location.LETTERKENNY_DONEGAL,
  Location.LETTERLEAGUE_DONEGAL,
  Location.LETTERMACAWARD_DONEGAL,
  Location.LETTERMORE_GALWAY,
  Location.LETTERMULLAN_GALWAY,
  Location.LICKETSTOWN_KILKENNY,
  Location.LIFFORD_DONEGAL,
  Location.LIMAVADY_DERRY,
  Location.LIMERICK,
  Location.LIMERICK_CITY,
  Location.LIMERICK_CITY_CENTRE_LIMERICK,
  Location.LIMERICK_CITY_SUBURBS_LIMERICK,
  Location.LIMERICK_COMMUTER_TOWNS_LIMERICK,
  Location.LIMERICK_INSTITUE_OF_TECHNOLOGY_LIT_TIPPERARY_TIPPERARY,
  Location.LIMERICK_INSTITUTE_OF_TECHNOLOGY_CLONMEL_DIGITAL_CAMPUS_TIPPERARY,
  Location.LIMERICK_INSTITUTE_OF_TECHNOLOGY_ENNIS_CAMPUS_CLARE,
  Location.LIMERICK_INSTITUTE_OF_TECHNOLOGY_MOYLISH_CAMPUS_LIMERICK,
  Location.LIMERICK_INSTITUTE_OF_TECHNOLOGY_LIMERICK,
  Location.LIMERICK_JUNCTION_TIPPERARY,
  Location.LISACUL_ROSCOMMON,
  Location.LISBANE_DOWN,
  Location.LISBELLAW_FERMANAGH,
  Location.LISBURN_ROAD_ANTRIM,
  Location.LISBURN_ANTRIM,
  Location.LISCANNOR_CLARE,
  Location.LISCARNEY_MAYO,
  Location.LISCARROL_CORK,
  Location.LISCOLMAN_ANTRIM,
  Location.LISCOOLY_DONEGAL,
  Location.LISDOONVARNA_CLARE,
  Location.LISDOWNEY_KILKENNY,
  Location.LISDUFF_CAVAN,
  Location.LISDUFF_LEITRIM,
  Location.LISDUFF_OFFALY,
  Location.LISGARODE_TIPPERARY,
  Location.LISGOOLD_CORK,
  Location.LISHEENAKEERAN_GALWAY,
  Location.LISMACAFFREY_WESTMEATH,
  Location.LISMOGHRY_DONEGAL,
  Location.LISMORE_AND_SURROUNDS_WATERFORD,
  Location.LISMORE_WATERFORD,
  Location.LISMOYLE_ROSCOMMON,
  Location.LISNAGEER_CAVAN,
  Location.LISNAGRY_LIMERICK,
  Location.LISNAGUNOGUE_ANTRIM,
  Location.LISNALTY_LIMERICK,
  Location.LISNARICK_FERMANAGH,
  Location.LISNASKEA_FERMANAGH,
  Location.LISNAVAGH_CARLOW,
  Location.LISPATRICK_CORK,
  Location.LISPOLE_KERRY,
  Location.LISROE_CLARE,
  Location.LISRONAGH_TIPPERARY,
  Location.LISRYAN_LONGFORD,
  Location.LISSALWAY_ROSCOMMON,
  Location.LISSAMONA_CORK,
  Location.LISSARDA_CORK,
  Location.LISSAVAIRD_CORK,
  Location.LISSELTON_KERRY,
  Location.LISSINAGROAGH_LEITRIM,
  Location.LISSINISKA_LEITRIM,
  Location.LISSYCASEY_CLARE,
  Location.LISTELLICK_KERRY,
  Location.LISTERLIN_KILKENNY,
  Location.LISTOWEL_AND_SURROUNDS_KERRY,
  Location.LISTOWEL_KERRY,
  Location.LITTLE_ISLAND_CORK,
  Location.LITTLETON_TIPPERARY,
  Location.LIXNAW_KERRY,
  Location.LOANENDS_ANTRIM,
  Location.LOBINSTOWN_MEATH,
  Location.LOMBARDSTOWN_CORK,
  Location.LONDONDERRY_DERRY,
  Location.LONGFORD,
  Location.LONGFORD_TOWN_AND_SURROUNDS_LONGFORD,
  Location.LONGFORD_TOWN_LONGFORD,
  Location.LONGWOOD_MEATH,
  Location.LORRHA_TIPPERARY,
  Location.LOSKERAN_WATERFORD,
  Location.LOSSET_CAVAN,
  Location.LOSSET_DONEGAL,
  Location.LOUGH_ARROW_SLIGO,
  Location.LOUGH_GOWNA_CAVAN,
  Location.LOUGHANAVALLEY_WESTMEATH,
  Location.LOUGHANURE_DONEGAL,
  Location.LOUGHBRICKLAND_DOWN,
  Location.LOUGHDUFF_CAVAN,
  Location.LOUGHER_KERRY,
  Location.LOUGHGALL_ARMAGH,
  Location.LOUGHGLYNN_ROSCOMMON,
  Location.LOUGHGUILE_ANTRIM,
  Location.LOUGHILL_LIMERICK,
  Location.LOUGHLINSTOWN_DUBLIN,
  Location.LOUGHMOE_TIPPERARY,
  Location.LOUGHMORNE_MONAGHAN,
  Location.LOUGHREA_AND_SURROUNDS_GALWAY,
  Location.LOUGHREA_GALWAY,
  Location.LOUGHSHINNY_DUBLIN,
  Location.LOUISBURGH_MAYO,
  Location.LOUTH_LOUTH,
  Location.LOWER_BALLINDERRY_ANTRIM,
  Location.LOWERTOWN_CORK,
  Location.LUCAN_DUBLIN,
  Location.LUGGACURREN_LAOIS,
  Location.LUKESWELL_KILKENNY,
  Location.LULLYMORE_KILDARE,
  Location.LURGAN_ARMAGH,
  Location.LURGAN_ROSCOMMON,
  Location.LURGANBOY_DONEGAL,
  Location.LURGANBOY_LEITRIM,
  Location.LURRAGA_LIMERICK,
  Location.LUSK_AND_SURROUNDS_DUBLIN,
  Location.LUSK_DUBLIN,
  Location.LYCRACRUMPANE_KERRY,
  Location.LYRENAGLOGH_WATERFORD,
  Location.MAAM_CROSS_GALWAY,
  Location.MAAS_DONEGAL,
  Location.MACKAN_FERMANAGH,
  Location.MACOSQUIN_DERRY,
  Location.MACROOM_AND_SURROUNDS_CORK,
  Location.MACROOM_CORK,
  Location.MADDEN_ARMAGH,
  Location.MADDENSTOWN_KILDARE,
  Location.MADDOCKSTOWN_KILKENNY,
  Location.MAGANEY_KILDARE,
  Location.MAGHABERRY_ANTRIM,
  Location.MAGHANLAWAUN_KERRY,
  Location.MAGHER_ARMAGH,
  Location.MAGHERA_DERRY,
  Location.MAGHERA_DONEGAL,
  Location.MAGHERABANE_DONEGAL,
  Location.MAGHERAFELT_DERRY,
  Location.MAGHERALAVE_ANTRIM,
  Location.MAGHERALIN_DOWN,
  Location.MAGHERAMASON_TYRONE,
  Location.MAGHERAMORNE_ANTRIM,
  Location.MAGHERY_DONEGAL,
  Location.MAGILLIGAN_DERRY,
  Location.MAGLIN_CORK,
  Location.MAGUIRESBRIDGE_FERMANAGH,
  Location.MAHON_BRIDGE_WATERFORD,
  Location.MAHON_CORK,
  Location.MAHOONAGH_LIMERICK,
  Location.MAINHAM_KILDARE,
  Location.MALAHIDE_DUBLIN,
  Location.MALIN_BEG_DONEGAL,
  Location.MALIN_MORE_DONEGAL,
  Location.MALIN_DONEGAL,
  Location.MALLOW_AND_SURROUNDS_CORK,
  Location.MALLOW_CORK,
  Location.MALONE_ANTRIM,
  Location.MANGER_DONEGAL,
  Location.MANOR_KILBRIDE_WICKLOW,
  Location.MANORCUNNINGHAM_DONEGAL,
  Location.MANORHAMILTON_LEITRIM,
  Location.MANSFIELDSTOWN_LOUTH,
  Location.MANTUA_ROSCOMMON,
  Location.MANULLA_MAYO,
  Location.MARBLE_HILL_DONEGAL,
  Location.MARDYKE_TIPPERARY,
  Location.MARINO_DUBLIN,
  Location.MARKETHILL_ARMAGH,
  Location.MARSHALSTOWN_WEXFORD,
  Location.MARTINSTOWN_ANTRIM,
  Location.MARTINSTOWN_LIMERICK,
  Location.MARTINSTOWN_MEATH,
  Location.MARY_IMMACULATE_COLLEGE_LIMERICK,
  Location.MASSHILL_SLIGO,
  Location.MASTERGREEHY_KERRY,
  Location.MASTERSTOWN_TIPPERARY,
  Location.MATEHY_CORK,
  Location.MATER_DEI_INSTITUTE_OF_EDUCATION_DUBLIN,
  Location.MAUM_GALWAY,
  Location.MAUMTRASNA_MAYO,
  Location.MAURICESMILLS_CLARE,
  Location.MAYFIELD_CORK,
  Location.MAYGLASS_WEXFORD,
  Location.MAYNOOTH_AND_SURROUNDS_KILDARE,
  Location.MAYNOOTH_UNIVERSITY_KILDARE,
  Location.MAYNOOTH_KILDARE,
  Location.MAYOBRIDGE_DOWN,
  Location.MEANUS_LIMERICK,
  Location.MEELICK_CLARE,
  Location.MEELICK_GALWAY,
  Location.MEELIN_CORK,
  Location.MEENACLADY_DONEGAL,
  Location.MEENACROSS_DONEGAL,
  Location.MEENANARWA_DONEGAL,
  Location.MEENANEARY_DONEGAL,
  Location.MEENATOTAN_DONEGAL,
  Location.MEENAVEAN_DONEGAL,
  Location.MEENCORWICK_DONEGAL,
  Location.MEENGLASS_DONEGAL,
  Location.MEENLARAGH_DONEGAL,
  Location.MEENREAGH_DONEGAL,
  Location.MEENTULLYNAGARN_DONEGAL,
  Location.MEENYBRADDAN_DONEGAL,
  Location.MEIGH_ARMAGH,
  Location.MENLO_GALWAY,
  Location.MENLOUGH_GALWAY,
  Location.MERLIN_PARK_GALWAY,
  Location.MERLIN_GALWAY,
  Location.MEROK_DOWN,
  Location.MERRION_DUBLIN,
  Location.MERVUE_GALWAY,
  Location.MIDDLETOWN_ARMAGH,
  Location.MIDDLETOWN_DONEGAL,
  Location.MIDFIELD_MAYO,
  Location.MIDLETON_AND_SURROUNDS_CORK,
  Location.MIDLETON_CORK,
  Location.MILEHOUSE_WEXFORD,
  Location.MILEMILL_KILDARE,
  Location.MILESTONE_TIPPERARY,
  Location.MILFORD_ARMAGH,
  Location.MILFORD_CORK,
  Location.MILFORD_DONEGAL,
  Location.MILL_TOWN_MONAGHAN,
  Location.MILLBROOK_MEATH,
  Location.MILLEEN_CORK,
  Location.MILLISLE_DOWN,
  Location.MILLROAD_WEXFORD,
  Location.MILLSTREET_CORK,
  Location.MILLSTREET_WATERFORD,
  Location.MILLTOWN_INSTITUTE_OF_THEOLOGY_AND_PHILOSOPHY_DUBLIN,
  Location.MILLTOWN_ANTRIM,
  Location.MILLTOWN_CAVAN,
  Location.MILLTOWN_DUBLIN,
  Location.MILLTOWN_GALWAY,
  Location.MILLTOWN_KERRY,
  Location.MILLTOWN_KILDARE,
  Location.MILLTOWN_MAYO,
  Location.MILLTOWN_WEXFORD,
  Location.MILLTOWNPASS_WESTMEATH,
  Location.MILTOWN_MALBAY_CLARE,
  Location.MINANE_BRIDGE_CORK,
  Location.MITCHELSTOWN_AND_SURROUNDS_CORK,
  Location.MITCHELSTOWN_CORK,
  Location.MOANMORE_CLARE,
  Location.MOATE_WESTMEATH,
  Location.MODEL_FARM_ROAD_CORK,
  Location.MODEL_VILLAGE_CORK,
  Location.MODELLIGO_WATERFORD,
  Location.MODREENY_TIPPERARY,
  Location.MOGEELY_CORK,
  Location.MOGLASS_TIPPERARY,
  Location.MOHIL_KILKENNY,
  Location.MOHILL_LEITRIM,
  Location.MOIRA_DOWN,
  Location.MONAGEA_LIMERICK,
  Location.MONAGEER_WEXFORD,
  Location.MONAGHAN_AND_SURROUNDS_MONAGHAN,
  Location.MONAGHAN,
  Location.MONAGHAN_MONAGHAN,
  Location.MONALEEN_LIMERICK,
  Location.MONAMOLIN_WEXFORD,
  Location.MONARD_CORK,
  Location.MONARD_TIPPERARY,
  Location.MONASEED_WEXFORD,
  Location.MONASTER_LIMERICK,
  Location.MONASTERADEN_SLIGO,
  Location.MONASTERBOICE_LOUTH,
  Location.MONASTEREVIN_AND_SURROUNDS_KILDARE,
  Location.MONASTEREVIN_KILDARE,
  Location.MONEA_FERMANAGH,
  Location.MONEEN_CLARE,
  Location.MONEEN_GALWAY,
  Location.MONEYFLUGH_CORK,
  Location.MONEYGALL_OFFALY,
  Location.MONEYGOLD_SLIGO,
  Location.MONEYLAHAN_SLIGO,
  Location.MONEYMORE_DERRY,
  Location.MONEYNEANY_DERRY,
  Location.MONEYREAGH_DOWN,
  Location.MONEYSLANE_DOWN,
  Location.MONILEA_WESTMEATH,
  Location.MONIVEA_GALWAY,
  Location.MONKSTOWN_AND_SURROUNDS_CORK,
  Location.MONKSTOWN_CORK,
  Location.MONKSTOWN_DUBLIN,
  Location.MONROE_WESTMEATH,
  Location.MONTENOTTE_CORK,
  Location.MONTESSORI_COLLEGE_DUBLIN_DUBLIN,
  Location.MONTPELIER_LIMERICK,
  Location.MOONCOIN_KILKENNY,
  Location.MOONE_KILDARE,
  Location.MOORD_WATERFORD,
  Location.MOORFIELDS_ANTRIM,
  Location.MORENANE_LIMERICK,
  Location.MORNINGTON_AND_SURROUNDS_MEATH,
  Location.MORNINGTON_MEATH,
  Location.MOSNEY_MEATH,
  Location.MOSS_SIDE_ANTRIM,
  Location.MOSSIDE_ANTRIM,
  Location.MOSTRIM_LONGFORD,
  Location.MOTHEL_WATERFORD,
  Location.MOUNT_GARRET_KILKENNY,
  Location.MOUNT_MERRION_DUBLIN,
  Location.MOUNT_TALBOT_ROSCOMMON,
  Location.MOUNT_TEMPLE_WESTMEATH,
  Location.MOUNT_UNIACKE_CORK,
  Location.MOUNTBELLEW_GALWAY,
  Location.MOUNTBOLUS_OFFALY,
  Location.MOUNTCHARLES_DONEGAL,
  Location.MOUNTCOLLINS_LIMERICK,
  Location.MOUNTHENRY_MAYO,
  Location.MOUNTMELLICK_AND_SURROUNDS_LAOIS,
  Location.MOUNTMELLICK_LAOIS,
  Location.MOUNTNUGENT_CAVAN,
  Location.MOUNTRATH_AND_SURROUNDS_LAOIS,
  Location.MOUNTRATH_LAOIS,
  Location.MOUNTSHANNON_CLARE,
  Location.MOURN_ABBEY_CORK,
  Location.MOURNEABBEY_CORK,
  Location.MOVEEN_CLARE,
  Location.MOVILLE_DONEGAL,
  Location.MOWHAN_ARMAGH,
  Location.MOY_TYRONE,
  Location.MOYARD_GALWAY,
  Location.MOYASTA_CLARE,
  Location.MOYCULLEN_GALWAY,
  Location.MOYDOW_LONGFORD,
  Location.MOYGLASS_GALWAY,
  Location.MOYLISH_LIMERICK,
  Location.MOYLOUGH_GALWAY,
  Location.MOYLOUGH_SLIGO,
  Location.MOYMORE_CLARE,
  Location.MOYNALTY_MEATH,
  Location.MOYNALVEY_MEATH,
  Location.MOYNE_LONGFORD,
  Location.MOYNE_ROSCOMMON,
  Location.MOYNE_TIPPERARY,
  Location.MOYNE_WICKLOW,
  Location.MOYROSS_LIMERICK,
  Location.MOYRUS_GALWAY,
  Location.MOYVALLEY_KILDARE,
  Location.MOYVALLY_KILDARE,
  Location.MOYVANE_KERRY,
  Location.MOYVOON_GALWAY,
  Location.MOYVORE_WESTMEATH,
  Location.MOYVOUGHLY_WESTMEATH,
  Location.MUCKAMORE_ANTRIM,
  Location.MUCKLAGH_OFFALY,
  Location.MUCKLON_KILDARE,
  Location.MUCKROSS_KERRY,
  Location.MUFF_DONEGAL,
  Location.MULGANNON_WEXFORD,
  Location.MULHUDDART_DUBLIN,
  Location.MULLAGH_CAVAN,
  Location.MULLAGH_CLARE,
  Location.MULLAGH_GALWAY,
  Location.MULLAGH_MAYO,
  Location.MULLAGH_MEATH,
  Location.MULLAGHBAWN_ARMAGH,
  Location.MULLAGHMORE_SLIGO,
  Location.MULLAGHROE_SLIGO,
  Location.MULLAN_MONAGHAN,
  Location.MULLANY_S_CROSS_SLIGO,
  Location.MULLARTOWN_DOWN,
  Location.MULLEN_ROSCOMMON,
  Location.MULLENBEG_KILKENNY,
  Location.MULLINAHONE_TIPPERARY,
  Location.MULLINAVAT_KILKENNY,
  Location.MULLINGAR_AND_SURROUNDS_WESTMEATH,
  Location.MULLINGAR_WESTMEATH,
  Location.MULRANNY_MAYO,
  Location.MULTYFARNHAM_WESTMEATH,
  Location.MUNGRET_LIMERICK,
  Location.MURREAGH_KERRY,
  Location.MURRINTOWN_WEXFORD,
  Location.MURRISK_MAYO,
  Location.MURROE_LIMERICK,
  Location.MURROOGH_CLARE,
  Location.MURROOGH_GALWAY,
  Location.MUSGRAVE_ANTRIM,
  Location.MYRTLEVILLE_CORK,
  Location.MYSHALL_CARLOW,
  Location.NAAS_AND_SURROUNDS_KILDARE,
  Location.NAAS_KILDARE,
  Location.NARAN_DONEGAL,
  Location.NARRAGHMORE_KILDARE,
  Location.NATIONAL_COLLEGE_OF_ART_AND_DESIGN_DUBLIN,
  Location.NATIONAL_COLLEGE_OF_IRELAND_NCI_DUBLIN,
  Location.NATIONAL_MARITIME_COLLEGE_OF_IRELAND_CORK,
  Location.NATIONAL_UNIVERSITY_OF_IRELAND_GALWAY_NUIG_GALWAY,
  Location.NAUL_DUBLIN,
  Location.NAUL_MEATH,
  Location.NAVAN_AND_SURROUNDS_MEATH,
  Location.NAVAN_ROAD_D7_DUBLIN,
  Location.NAVAN_MEATH,
  Location.NEALE_MAYO,
  Location.NEALSTOWN_LAOIS,
  Location.NENAGH_AND_SURROUNDS_TIPPERARY,
  Location.NENAGH_TIPPERARY,
  Location.NEW_BIRMINGHAM_TIPPERARY,
  Location.NEW_INN_CAVAN,
  Location.NEW_INN_GALWAY,
  Location.NEW_INN_TIPPERARY,
  Location.NEW_KILDIMO_LIMERICK,
  Location.NEW_LODGE_ANTRIM,
  Location.NEW_QUAY_CLARE,
  Location.NEW_ROSS_AND_SURROUNDS_WEXFORD,
  Location.NEW_ROSS_KILKENNY,
  Location.NEW_ROSS_WEXFORD,
  Location.NEWBARN_WEXFORD,
  Location.NEWBAWN_WEXFORD,
  Location.NEWBAY_WEXFORD,
  Location.NEWBLISS_MONAGHAN,
  Location.NEWBRIDGE_AND_SURROUNDS_KILDARE,
  Location.NEWBRIDGE_GALWAY,
  Location.NEWBRIDGE_KILDARE,
  Location.NEWBRIDGE_LIMERICK,
  Location.NEWCASTLE_WEST_AND_SURROUNDS_LIMERICK,
  Location.NEWCASTLE_WEST_LIMERICK,
  Location.NEWCASTLE_DOWN,
  Location.NEWCASTLE_DUBLIN,
  Location.NEWCASTLE_GALWAY,
  Location.NEWCASTLE_TIPPERARY,
  Location.NEWCASTLE_WICKLOW,
  Location.NEWCESTOWN_CORK,
  Location.NEWCHAPEL_TIPPERARY,
  Location.NEWMARKET_ON_FERGUS_CLARE,
  Location.NEWMARKET_CORK,
  Location.NEWMARKET_KILKENNY,
  Location.NEWMILLS_DONEGAL,
  Location.NEWMILLS_TYRONE,
  Location.NEWPARK_MUSIC_CENTRE_DUBLIN,
  Location.NEWPORT_MAYO,
  Location.NEWPORT_TIPPERARY,
  Location.NEWRY_DOWN,
  Location.NEWTOWN_CLOGHANS_MAYO,
  Location.NEWTOWN_CUNNINGHAM_DONEGAL,
  Location.NEWTOWN_CARLOW,
  Location.NEWTOWN_CORK,
  Location.NEWTOWN_GALWAY,
  Location.NEWTOWN_KERRY,
  Location.NEWTOWN_KILDARE,
  Location.NEWTOWN_LAOIS,
  Location.NEWTOWN_LIMERICK,
  Location.NEWTOWN_OFFALY,
  Location.NEWTOWN_ROSCOMMON,
  Location.NEWTOWN_TIPPERARY,
  Location.NEWTOWN_WATERFORD,
  Location.NEWTOWN_WEXFORD,
  Location.NEWTOWNABBEY_ANTRIM,
  Location.NEWTOWNARDS_DOWN,
  Location.NEWTOWNBREDA_DOWN,
  Location.NEWTOWNBUTLER_FERMANAGH,
  Location.NEWTOWNCASHEL_LONGFORD,
  Location.NEWTOWNFORBES_LONGFORD,
  Location.NEWTOWNGORE_LEITRIM,
  Location.NEWTOWNHAMILTON_ARMAGH,
  Location.NEWTOWNLOW_WESTMEATH,
  Location.NEWTOWNLYNCH_GALWAY,
  Location.NEWTOWNMOUNTKENNEDY_WICKLOW,
  Location.NEWTOWNSHANDRUM_CORK,
  Location.NEWTOWNSTEWART_TYRONE,
  Location.NEWTWOPOTHOUSE_CORK,
  Location.NINEMILEHOUSE_TIPPERARY,
  Location.NOBBER_MEATH,
  Location.NOHOVAL_CORK,
  Location.NORTH_BELFAST_CITY_ANTRIM,
  Location.NORTH_CIRCULAR_ROAD_DUBLIN,
  Location.NORTH_CIRCULAR_ROAD_LIMERICK,
  Location.NORTH_CO_DUBLIN_DUBLIN,
  Location.NORTH_DUBLIN_CITY_DUBLIN,
  Location.NORTH_RING_CORK,
  Location.NORTH_STRAND_DUBLIN,
  Location.NORTH_WALL_DUBLIN,
  Location.NOUGHAVAL_CLARE,
  Location.NUN_S_ISLAND_GALWAY,
  Location.NURNEY_CARLOW,
  Location.NURNEY_KILDARE,
  Location.NUTT_S_CORNER_ANTRIM,
  Location.O_BRIENSBRIDGE_CLARE,
  Location.O_CALLAGHANS_MILLS_CLARE,
  Location.OAGHLEY_KERRY,
  Location.OAK_PARK_CARLOW,
  Location.OATFIELD_CLARE,
  Location.OATQUARTER_GALWAY,
  Location.OGHIL_GALWAY,
  Location.OGONELLOE_CLARE,
  Location.OILGATE_WEXFORD,
  Location.OLD_CONNAUGHT_DUBLIN,
  Location.OLD_COURT_CORK,
  Location.OLD_HEAD_CORK,
  Location.OLD_KILCULLEN_KILDARE,
  Location.OLD_KILDIMO_LIMERICK,
  Location.OLD_PARISH_WATERFORD,
  Location.OLD_ROSS_WEXFORD,
  Location.OLD_TOWN_DONEGAL,
  Location.OLD_TOWN_LAOIS,
  Location.OLD_TOWN_ROSCOMMON,
  Location.OLD_TOWN_WEXFORD,
  Location.OLD_TWOPOLDOUSE_CORK,
  Location.OLDBAWN_DUBLIN,
  Location.OLDCASTLE_CAVAN,
  Location.OLDCASTLE_MEATH,
  Location.OLDCOURT_WICKLOW,
  Location.OLDLEIGHLIN_CARLOW,
  Location.OLDPARK_ANTRIM,
  Location.OLDTOWN_DUBLIN,
  Location.OLDTOWN_ROSCOMMON,
  Location.OMAGH_TYRONE,
  Location.OMEATH_LOUTH,
  Location.ONAGHT_GALWAY,
  Location.ONGAR_DUBLIN,
  Location.OOLA_LIMERICK,
  Location.OOLA_TIPPERARY,
  Location.ORANGEFIELD_DOWN,
  Location.ORANHILL_GALWAY,
  Location.ORANMORE_AND_SURROUNDS_GALWAY,
  Location.ORANMORE_GALWAY,
  Location.ORISTOWN_MEATH,
  Location.ORMEAU_ANTRIM,
  Location.ORMEAU_DOWN,
  Location.OUGHTERARD_GALWAY,
  Location.OULART_WEXFORD,
  Location.OVENS_CORK,
  Location.OWENBEG_SLIGO,
  Location.OWENBRISTY_GALWAY,
  Location.OWENMORE_BRIDGE_MAYO,
  Location.OWER_GALWAY,
  Location.OWNAHINCHA_CORK,
  Location.OWNING_KILKENNY,
  Location.OYSTERHAVEN_CORK,
  Location.PALACE_WEXFORD,
  Location.PALATINE_CARLOW,
  Location.PALLAS_CROSS_TIPPERARY,
  Location.PALLAS_LAOIS,
  Location.PALLASGREEN_LIMERICK,
  Location.PALLASKENRY_LIMERICK,
  Location.PALMERSTOWN_DUBLIN,
  Location.PARK_WEST_DUBLIN,
  Location.PARK_DERRY,
  Location.PARKGATE_ANTRIM,
  Location.PARKMORE_GALWAY,
  Location.PARKNASILLA_KERRY,
  Location.PARSONSTOWN_MEATH,
  Location.PARTEEN_CLARE,
  Location.PARTRY_MAYO,
  Location.PASSAGE_EAST_WATERFORD,
  Location.PASSAGE_WEST_AND_SURROUNDS_CORK,
  Location.PASSAGE_WEST_CORK,
  Location.PASSAGE_ROSCOMMON,
  Location.PATRICKSWELL_LIMERICK,
  Location.PAUGHNSTOWN_LOUTH,
  Location.PAULSTOWN_KILKENNY,
  Location.PEAKE_CORK,
  Location.PENNYWELL_LIMERICK,
  Location.PERRYSTOWN_DUBLIN,
  Location.PETERSWELL_GALWAY,
  Location.PETTIGO_DONEGAL,
  Location.PETTIGO_FERMANAGH,
  Location.PHIBSBOROUGH_DUBLIN,
  Location.PIERCESTOWN_WEXFORD,
  Location.PIKE_CORNER_MEATH,
  Location.PIKE_OF_RUSH_HALL_LAOIS,
  Location.PIKE_TIPPERARY,
  Location.PILTOWN_KILKENNY,
  Location.PLUCK_DONEGAL,
  Location.PLUMBRIDGE_TYRONE,
  Location.POLEGLASS_ANTRIM,
  Location.POLLAGH_OFFALY,
  Location.POLLARDSTOWN_KILDARE,
  Location.POLLATOMISH_MAYO,
  Location.POLLERTON_CARLOW,
  Location.POLLNAROOMA_GALWAY,
  Location.POLLSHASK_GALWAY,
  Location.POMEROY_TYRONE,
  Location.PONTOON_MAYO,
  Location.POPPINTREE_DUBLIN,
  Location.PORT_BALLINTRAE_ANTRIM,
  Location.PORT_DONEGAL,
  Location.PORT_LOUTH,
  Location.PORTACLOY_MAYO,
  Location.PORTADOWN_ARMAGH,
  Location.PORTAFERRY_DOWN,
  Location.PORTALEEN_DONEGAL,
  Location.PORTARLINGTON_AND_SURROUNDS_LAOIS,
  Location.PORTARLINGTON_AND_SURROUNDS_OFFALY,
  Location.PORTARLINGTON_LAOIS,
  Location.PORTARLINGTON_OFFALY,
  Location.PORTAVOGIE_DOWN,
  Location.PORTDRINE_CLARE,
  Location.PORTERSTOWN_DUBLIN,
  Location.PORTGLENONE_ANTRIM,
  Location.PORTGLENONE_DERRY,
  Location.PORTLAND_TIPPERARY,
  Location.PORTLAOISE_AND_SURROUNDS_LAOIS,
  Location.PORTLAOISE_LAOIS,
  Location.PORTLAW_WATERFORD,
  Location.PORTMAGEE_KERRY,
  Location.PORTMARNOCK_DUBLIN,
  Location.PORTNABLAGH_DONEGAL,
  Location.PORTNOO_DONEGAL,
  Location.PORTOBELLO_INSTITUTE_DUBLIN,
  Location.PORTOBELLO_DUBLIN,
  Location.PORTRANE_DUBLIN,
  Location.PORTROE_TIPPERARY,
  Location.PORTRUNNY_ROSCOMMON,
  Location.PORTRUSH_ANTRIM,
  Location.PORTSALON_DONEGAL,
  Location.PORTSTEWART_DERRY,
  Location.PORTUMNA_GALWAY,
  Location.PORTURLIN_MAYO,
  Location.POULADUFF_CORK,
  Location.POULMUCKA_TIPPERARY,
  Location.POULSHONE_WEXFORD,
  Location.POWER_S_CROSS_GALWAY,
  Location.POWERSTOWN_KILKENNY,
  Location.POYNTZ_PASS_ARMAGH,
  Location.PRIESTHAGGARD_WEXFORD,
  Location.PRIORSWOOD_DUBLIN,
  Location.PROSPECT_LIMERICK,
  Location.PROSPEROUS_KILDARE,
  Location.PUCKAUN_TIPPERARY,
  Location.PULSE_COLLEGE_DUBLIN,
  Location.PUNCHESTOWN_KILDARE,
  Location.QUEENS_UNIVERSITY_BELFAST_ANTRIM,
  Location.QUERRIN_CLARE,
  Location.QUIGLEY_S_POINT_DONEGAL,
  Location.QUILTY_CLARE,
  Location.QUIN_CLARE,
  Location.RACE_END_DONEGAL,
  Location.RAFFREY_DOWN,
  Location.RAGHLY_SLIGO,
  Location.RAHAN_OFFALY,
  Location.RAHANAGH_LIMERICK,
  Location.RAHARA_ROSCOMMON,
  Location.RAHARNEY_WESTMEATH,
  Location.RAHEEN_CORK,
  Location.RAHEEN_LIMERICK,
  Location.RAHEEN_WEXFORD,
  Location.RAHENY_DUBLIN,
  Location.RAHOON_GALWAY,
  Location.RAIGH_GALWAY,
  Location.RAILYARD_KILKENNY,
  Location.RAKE_STREET_MAYO,
  Location.RAMELTON_DONEGAL,
  Location.RAMSGRANGE_WEXFORD,
  Location.RANDALSTOWN_ANTRIM,
  Location.RANELAGH_DUBLIN,
  Location.RANSBORO_SLIGO,
  Location.RAPEMILLS_OFFALY,
  Location.RAPHOE_DONEGAL,
  Location.RASHARKIN_ANTRIM,
  Location.RASHEDOGE_DONEGAL,
  Location.RATH_LUIRC_CORK,
  Location.RATH_OFFALY,
  Location.RATHANGAN_KILDARE,
  Location.RATHANGAN_WEXFORD,
  Location.RATHARNEY_LONGFORD,
  Location.RATHASPICK_WESTMEATH,
  Location.RATHBANE_LIMERICK,
  Location.RATHBRIT_TIPPERARY,
  Location.RATHCABBIN_TIPPERARY,
  Location.RATHCAIRN_MEATH,
  Location.RATHCOFFEY_KILDARE,
  Location.RATHCONRATH_WESTMEATH,
  Location.RATHCOOL_CORK,
  Location.RATHCOOLE_AND_SURROUNDS_DUBLIN,
  Location.RATHCOOLE_ANTRIM,
  Location.RATHCOOLE_DUBLIN,
  Location.RATHCOR_LOUTH,
  Location.RATHCORE_MEATH,
  Location.RATHCORMAC_CORK,
  Location.RATHCORMAC_SLIGO,
  Location.RATHCROGHAN_ROSCOMMON,
  Location.RATHDANGAN_WICKLOW,
  Location.RATHDOWNEY_LAOIS,
  Location.RATHDRUM_WICKLOW,
  Location.RATHDUFF_CORK,
  Location.RATHEDAN_CARLOW,
  Location.RATHFARNHAM_DUBLIN,
  Location.RATHFEIGH_MEATH,
  Location.RATHFRILAND_DOWN,
  Location.RATHFYLANE_WEXFORD,
  Location.RATHGAR_DUBLIN,
  Location.RATHGAROGUE_WEXFORD,
  Location.RATHGORMACK_WATERFORD,
  Location.RATHKEALE_AND_SURROUNDS_LIMERICK,
  Location.RATHKEALE_LIMERICK,
  Location.RATHKEEVIN_TIPPERARY,
  Location.RATHKENNY_MEATH,
  Location.RATHLACKAN_MAYO,
  Location.RATHLEE_SLIGO,
  Location.RATHMACULLIG_CORK,
  Location.RATHMICHAEL_DUBLIN,
  Location.RATHMINES_DUBLIN,
  Location.RATHMOLYON_MEATH,
  Location.RATHMORE_KERRY,
  Location.RATHMOYLE_KILKENNY,
  Location.RATHMULLAN_DONEGAL,
  Location.RATHNEW_WICKLOW,
  Location.RATHNURE_WEXFORD,
  Location.RATHOE_CARLOW,
  Location.RATHOMA_MAYO,
  Location.RATHOWEN_WESTMEATH,
  Location.RATHPEACON_CORK,
  Location.RATHVILLA_OFFALY,
  Location.RATHVILLY_CARLOW,
  Location.RATOATH_AND_SURROUNDS_MEATH,
  Location.RATOATH_MEATH,
  Location.RAVENHILL_DOWN,
  Location.RAVENSDALE_LOUTH,
  Location.RAY_DONEGAL,
  Location.REAGHSTOWN_LOUTH,
  Location.REANANEREE_CORK,
  Location.REANASCREENA_CORK,
  Location.REARCROSS_TIPPERARY,
  Location.RECESS_GALWAY,
  Location.REDCASTLE_DONEGAL,
  Location.REDCROSS_WICKLOW,
  Location.REDDAN_S_WALK_TIPPERARY,
  Location.REDGATE_LIMERICK,
  Location.REDGATE_WEXFORD,
  Location.REDHILLS_CAVAN,
  Location.REEN_KERRY,
  Location.REENS_LIMERICK,
  Location.REENVANAGH_KILKENNY,
  Location.RELAGHBEG_CAVAN,
  Location.RENMORE_GALWAY,
  Location.RENVYLE_GALWAY,
  Location.RERRIN_CORK,
  Location.RHEBOGUE_LIMERICK,
  Location.RHODE_OFFALY,
  Location.RIALTO_DUBLIN,
  Location.RICHHILL_ARMAGH,
  Location.RIDGE_CARLOW,
  Location.RING_WATERFORD,
  Location.RINGASKIDDY_CORK,
  Location.RINGSEND_DERRY,
  Location.RINGSEND_DUBLIN,
  Location.RINGVILLE_WATERFORD,
  Location.RINNEEN_CLARE,
  Location.RINNEEN_CORK,
  Location.RINVILLE_GALWAY,
  Location.RIVERCHAPEL_WEXFORD,
  Location.RIVERSTICK_CORK,
  Location.RIVERSTOWN_CORK,
  Location.RIVERSTOWN_LOUTH,
  Location.RIVERSTOWN_SLIGO,
  Location.RIVERSTOWN_TIPPERARY,
  Location.RIVERVILLE_KERRY,
  Location.ROADFORD_CLARE,
  Location.ROBERTSTOWN_KILDARE,
  Location.ROBINSTOWN_MEATH,
  Location.ROCHESTOWN_CORK,
  Location.ROCHESTOWN_KILKENNY,
  Location.ROCHFORTBRIDGE_WESTMEATH,
  Location.ROCKBROOK_DUBLIN,
  Location.ROCKCHAPEL_CORK,
  Location.ROCKCORRY_MONAGHAN,
  Location.ROCKHILL_LIMERICK,
  Location.ROCKMILLS_CORK,
  Location.RODEEN_ROSCOMMON,
  Location.ROESTOWN_LOUTH,
  Location.ROLESTOWN_DUBLIN,
  Location.RONANSTOWN_DUBLIN,
  Location.ROOAUN_GALWAY,
  Location.ROONAH_QUAY_MAYO,
  Location.ROOSKEY_LEITRIM,
  Location.ROOSKEY_ROSCOMMON,
  Location.ROOSKY_MAYO,
  Location.ROOTIAGH_LIMERICK,
  Location.ROPEFIELD_SLIGO,
  Location.ROSAPENNA_DONEGAL,
  Location.ROSBERCON_AND_SURROUNDS_KILKENNY,
  Location.ROSBERCON_KILKENNY,
  Location.ROSCAM_GALWAY,
  Location.ROSCOMMON,
  Location.ROSCOMMON_TOWN_AND_SURROUNDS_ROSCOMMON,
  Location.ROSCOMMON_TOWN_ROSCOMMON,
  Location.ROSCREA_AND_SURROUNDS_TIPPERARY,
  Location.ROSCREA_TIPPERARY,
  Location.ROSEGREEN_TIPPERARY,
  Location.ROSENALLIS_LAOIS,
  Location.ROSETTA_DOWN,
  Location.ROSMUC_GALWAY,
  Location.ROSMULT_TIPPERARY,
  Location.ROSNAKILL_DONEGAL,
  Location.ROSS_PORT_MAYO,
  Location.ROSS_MEATH,
  Location.ROSSAVEEL_GALWAY,
  Location.ROSSBEG_DONEGAL,
  Location.ROSSBRIEN_LIMERICK,
  Location.ROSSBRIN_CORK,
  Location.ROSSCAHILL_GALWAY,
  Location.ROSSCARBERY_CORK,
  Location.ROSSES_POINT_SLIGO,
  Location.ROSSGEIR_DONEGAL,
  Location.ROSSHILL_GALWAY,
  Location.ROSSINVER_LEITRIM,
  Location.ROSSLARE_HARBOUR_WEXFORD,
  Location.ROSSLARE_STRAND_WEXFORD,
  Location.ROSSLEA_FERMANAGH,
  Location.ROSSMORE_CORK,
  Location.ROSSMORE_LAOIS,
  Location.ROSSNOWLAGH_DONEGAL,
  Location.ROSTELLAN_CORK,
  Location.ROSTREVOR_DOWN,
  Location.ROSTURK_MAYO,
  Location.ROUNDFORT_MAYO,
  Location.ROUNDSTONE_GALWAY,
  Location.ROUNDWOOD_WICKLOW,
  Location.ROXBOROUGH_LIMERICK,
  Location.ROYAL_CANAL_PARK_DUBLIN,
  Location.ROYAL_COLLEGE_OF_SURGEONS_IN_IRELAND_YORK_ST_CAMPUS_DUBLIN,
  Location.ROYAL_COLLEGE_OF_SURGEONS_IN_IRELAND_DUBLIN,
  Location.ROYAL_IRISH_ACADEMY_OF_MUSIC_DUBLIN,
  Location.RUAN_CLARE,
  Location.RUNNABACKAN_ROSCOMMON,
  Location.RUSH_DUBLIN,
  Location.RYEFIELD_CAVAN,
  Location.RYEHILL_GALWAY,
  Location.RYLANE_CROSS_CORK,
  Location.RYLANE_CORK,
  Location.SAGGART_DUBLIN,
  Location.SAINTFIELD_DOWN,
  Location.SALEEN_CORK,
  Location.SALEEN_KERRY,
  Location.SALIA_MAYO,
  Location.SALLAHIG_KERRY,
  Location.SALLINS_AND_SURROUNDS_KILDARE,
  Location.SALLINS_KILDARE,
  Location.SALLYBROOK_CORK,
  Location.SALLYNOGGIN_DUBLIN,
  Location.SALLYPARK_TIPPERARY,
  Location.SALROCK_GALWAY,
  Location.SALTHILL_GALWAY,
  Location.SANDOWN_DOWN,
  Location.SANDY_ROW_ANTRIM,
  Location.SANDYCOVE_DUBLIN,
  Location.SANDYFORD_DUBLIN,
  Location.SANDYMOUNT_DUBLIN,
  Location.SANTRY_DUBLIN,
  Location.SCARDAUN_MAYO,
  Location.SCARDAUN_ROSCOMMON,
  Location.SCARNAGH_WEXFORD,
  Location.SCARRIFF_CLARE,
  Location.SCARTAGLIN_KERRY,
  Location.SCARVA_DOWN,
  Location.SCHULL_CORK,
  Location.SCOTSHOUSE_MONAGHAN,
  Location.SCOTSTOWN_MONAGHAN,
  Location.SCRAMOGE_ROSCOMMON,
  Location.SCREEBE_GALWAY,
  Location.SCREEN_WEXFORD,
  Location.SCREGGAN_OFFALY,
  Location.SEAFORDE_DOWN,
  Location.SEAPATRICK_DOWN,
  Location.SESKINORE_TYRONE,
  Location.SESKINRYAN_CARLOW,
  Location.SHALWY_DONEGAL,
  Location.SHANACASHEL_KERRY,
  Location.SHANAGARRY_CORK,
  Location.SHANAGLISH_GALWAY,
  Location.SHANAGOLDEN_LIMERICK,
  Location.SHANAHOE_LAOIS,
  Location.SHANAKIEL_CORK,
  Location.SHANBALLARD_GALWAY,
  Location.SHANBALLY_CORK,
  Location.SHANBALLY_GALWAY,
  Location.SHANBALLYMORE_CORK,
  Location.SHANCO_MONAGHAN,
  Location.SHANDON_DOWN,
  Location.SHANKILL_ANTRIM,
  Location.SHANKILL_DUBLIN,
  Location.SHANKILL_ROSCOMMON,
  Location.SHANLARAGH_CORK,
  Location.SHANLIS_LOUTH,
  Location.SHANNAKEA_CLARE,
  Location.SHANNON_AND_SURROUNDS_CLARE,
  Location.SHANNON_COLLEGE_OF_HOTEL_MANAGEMENT_CLARE,
  Location.SHANNON_HARBOUR_OFFALY,
  Location.SHANNON_CLARE,
  Location.SHANNON_OFFALY,
  Location.SHANNONBRIDGE_OFFALY,
  Location.SHANRAGH_LAOIS,
  Location.SHANTALLA_GALWAY,
  Location.SHANTONAGH_MONAGHAN,
  Location.SHARAVOGUE_OFFALY,
  Location.SHAW_S_ROAD_ANTRIM,
  Location.SHEEANAMORE_WICKLOW,
  Location.SHERCOCK_CAVAN,
  Location.SHERKIN_ISLAND_CORK,
  Location.SHERLOCK_CAVAN,
  Location.SHESKIN_MAYO,
  Location.SHESKINAPOLL_DONEGAL,
  Location.SHILLELAGH_WICKLOW,
  Location.SHINRONE_OFFALY,
  Location.SHORE_RD_ANTRIM,
  Location.SHRULE_GALWAY,
  Location.SHRULE_MAYO,
  Location.SILVER_BRIDGE_ARMAGH,
  Location.SILVERMINES_TIPPERARY,
  Location.SILVERSPRINGS_CORK,
  Location.SINGLAND_LIMERICK,
  Location.SION_MILLS_TYRONE,
  Location.SIX_CROSSES_KERRY,
  Location.SIXMILEBRIDGE_CLARE,
  Location.SIXMILECROSS_TYRONE,
  Location.SKEAGH_WESTMEATH,
  Location.SKEGONEILL_ANTRIM,
  Location.SKEHANA_GALWAY,
  Location.SKEHANA_KILKENNY,
  Location.SKEHANAGH_GALWAY,
  Location.SKERRIES_DUBLIN,
  Location.SKIBBEREEN_AND_SURROUNDS_CORK,
  Location.SKIBBEREEN_CORK,
  Location.SKREEN_SLIGO,
  Location.SKRYNE_MEATH,
  Location.SLADE_WEXFORD,
  Location.SLANE_MEATH,
  Location.SLIEVEMURRY_GALWAY,
  Location.SLIEVERUE_KILKENNY,
  Location.SLIGO_AND_SURROUNDS_SLIGO,
  Location.SLIGO_SLIGO,
  Location.SMERWICK_KERRY,
  Location.SMITHBOROUGH_MONAGHAN,
  Location.SMITHFIELD_DUBLIN,
  Location.SMITHSTOWN_KILKENNY,
  Location.SNAVE_CORK,
  Location.SNEEM_KERRY,
  Location.SOOEY_SLIGO,
  Location.SOUTH_BELFAST_CITY_ANTRIM,
  Location.SOUTH_CIRCULAR_ROAD_DUBLIN,
  Location.SOUTH_CIRCULAR_ROAD_LIMERICK,
  Location.SOUTH_CO_DUBLIN_DUBLIN,
  Location.SOUTH_DUBLIN_CITY_DUBLIN,
  Location.SOUTHILL_LIMERICK,
  Location.SPANISH_POINT_CLARE,
  Location.SPEENOGE_DONEGAL,
  Location.SPIDDAL_GALWAY,
  Location.SPINK_LAOIS,
  Location.SPITTALTOWN_WESTMEATH,
  Location.SPRINGFIELD_FERMANAGH,
  Location.SPRINGMARTIN_ANTRIM,
  Location.SPRINGMOUNT_CORK,
  Location.SRAGHMORE_WICKLOW,
  Location.SRAHDUGGAUN_MAYO,
  Location.SRAHMORE_MAYO,
  Location.ST_ANGELAS_COLLEGE_SLIGO,
  Location.ST_MARGARET_S_DUBLIN,
  Location.ST_MARYS_UNIVERSITY_COLLEGE_BELFAST_ANTRIM,
  Location.ST_NICHOLAS_MONTESSORI_COLLEGE_IRELAND_DUBLIN,
  Location.ST_PATRICKS_COLLEGE_PONTIFICAL_UNIVERSITY_KILDARE,
  Location.ST_PATRICKS_COLLEGE_OF_EDUCATION_DUBLIN,
  Location.ST_JAMES_GATE_DUBLIN,
  Location.ST_JOHNSTON_DONEGAL,
  Location.ST_LUKES_CORK,
  Location.ST_MULLINS_CARLOW,
  Location.STABANNAN_LOUTH,
  Location.STACKALLEN_MEATH,
  Location.STAMULLEN_MEATH,
  Location.STAPLESTOWN_KILDARE,
  Location.STARCH_HILL_CORK,
  Location.STEPASIDE_DUBLIN,
  Location.STEWARTSTOWN_ANTRIM,
  Location.STEWARTSTOWN_TYRONE,
  Location.STICKSTOWN_CORK,
  Location.STILLORGAN_DUBLIN,
  Location.STONE_BRIDGE_MONAGHAN,
  Location.STONEYBATTER_DUBLIN,
  Location.STONEYFORD_ANTRIM,
  Location.STONEYFORD_KILKENNY,
  Location.STONYFORD_ANTRIM,
  Location.STORMONT_DOWN,
  Location.STRABANE_TYRONE,
  Location.STRADBALLY_KERRY,
  Location.STRADBALLY_LAOIS,
  Location.STRADBALLY_WATERFORD,
  Location.STRADONE_CAVAN,
  Location.STRAFFAN_KILDARE,
  Location.STRAHART_WEXFORD,
  Location.STRAID_ANTRIM,
  Location.STRAID_DONEGAL,
  Location.STRAIDE_MAYO,
  Location.STRAND_LIMERICK,
  Location.STRANDHILL_SLIGO,
  Location.STRANDTOWN_DOWN,
  Location.STRANGFORD_DOWN,
  Location.STRANMILLIS_UNIVERSITY_COLLEGE_ANTRIM,
  Location.STRANMILLIS_ANTRIM,
  Location.STRANOCUM_ANTRIM,
  Location.STRANORLAR_DONEGAL,
  Location.STRATFORD_WICKLOW,
  Location.STRATFORD_ON_SLANEY_WICKLOW,
  Location.STRAVALLY_DONEGAL,
  Location.STRAWBERRY_BEDS_DUBLIN,
  Location.STREAMSTOWN_GALWAY,
  Location.STREAMSTOWN_WESTMEATH,
  Location.STREETE_WESTMEATH,
  Location.STROKESTOWN_ROSCOMMON,
  Location.STROOVE_DONEGAL,
  Location.SUFFOLK_ANTRIM,
  Location.SUMMERCOVE_CORK,
  Location.SUMMERHILL_MEATH,
  Location.SUNCROFT_KILDARE,
  Location.SUNDAY_S_WELL_CORK,
  Location.SUTTON_DUBLIN,
  Location.SWAN_LAOIS,
  Location.SWANLINBAR_CAVAN,
  Location.SWATRAGH_DERRY,
  Location.SWINFORD_MAYO,
  Location.SWORDS_AND_SURROUNDS_DUBLIN,
  Location.SWORDS_DUBLIN,
  Location.SYDENHAM_DOWN,
  Location.TACUMSHANE_WEXFORD,
  Location.TAGHMACONNELL_ROSCOMMON,
  Location.TAGHMON_WEXFORD,
  Location.TAGHSHINNY_LONGFORD,
  Location.TAGOAT_WEXFORD,
  Location.TAHILLA_KERRY,
  Location.TALBOTSTOWN_WICKLOW,
  Location.TALLAGHT_DUBLIN,
  Location.TALLANSTOWN_LOUTH,
  Location.TALLOW_WATERFORD,
  Location.TALLOWBRIDGE_WATERFORD,
  Location.TAMLAGHT_FERMANAGH,
  Location.TAMNEY_DONEGAL,
  Location.TANDRAGEE_ARMAGH,
  Location.TANG_WESTMEATH,
  Location.TANGAVEANE_DONEGAL,
  Location.TARA_HILL_WEXFORD,
  Location.TARA_MEATH,
  Location.TARBERT_KERRY,
  Location.TARMON_LEITRIM,
  Location.TARMONBARRY_LONGFORD,
  Location.TARMONBARRY_ROSCOMMON,
  Location.TARVARA_CORK,
  Location.TAWIN_GALWAY,
  Location.TAWNY_DONEGAL,
  Location.TAWNYINAH_MAYO,
  Location.TAWNYLEA_LEITRIM,
  Location.TAYLOR_S_CROSS_OFFALY,
  Location.TAYLOR_S_HILL_GALWAY,
  Location.TEELIN_DONEGAL,
  Location.TEEMORE_FERMANAGH,
  Location.TEERANEA_GALWAY,
  Location.TEERANEARAGH_KERRY,
  Location.TEERELTON_CORK,
  Location.TEERMACLANE_CLARE,
  Location.TEERNAKILL_GALWAY,
  Location.TEEROMOYLE_KERRY,
  Location.TEMPLE_BAR_DUBLIN,
  Location.TEMPLEBOY_SLIGO,
  Location.TEMPLEDERRY_TIPPERARY,
  Location.TEMPLEGLANTINE_LIMERICK,
  Location.TEMPLEHILL_CORK,
  Location.TEMPLEMARTIN_CORK,
  Location.TEMPLEMICHAEL_WATERFORD,
  Location.TEMPLEMORE_TIPPERARY,
  Location.TEMPLEMUNGRET_LIMERICK,
  Location.TEMPLENOE_KERRY,
  Location.TEMPLEOGUE_DUBLIN,
  Location.TEMPLEORAN_WESTMEATH,
  Location.TEMPLEPATRICK_ANTRIM,
  Location.TEMPLEPORT_CAVAN,
  Location.TEMPLESHANBO_WEXFORD,
  Location.TEMPLETOWN_WEXFORD,
  Location.TEMPLETUOHY_TIPPERARY,
  Location.TEMPO_FERMANAGH,
  Location.TENURE_LOUTH,
  Location.TERENURE_DUBLIN,
  Location.TERMON_CLARE,
  Location.TERMON_DONEGAL,
  Location.TERMONFECKIN_LOUTH,
  Location.TERRYGLASS_TIPPERARY,
  Location.TERRYLAND_GALWAY,
  Location.THE_BALLAGH_WEXFORD,
  Location.THE_BURREN_CLARE,
  Location.THE_BUSH_LOUTH,
  Location.THE_BUTTS_CARLOW,
  Location.THE_COOMBE_DUBLIN,
  Location.THE_CURRAGH_KILDARE,
  Location.THE_DOWNS_WESTMEATH,
  Location.THE_FIVE_ROADS_DUBLIN,
  Location.THE_HARROW_WEXFORD,
  Location.THE_LEAP_WEXFORD,
  Location.THE_LOUGH_CORK,
  Location.THE_LOUP_DERRY,
  Location.THE_OPEN_UNIVERSITY_DUBLIN,
  Location.THE_PIGEONS_WESTMEATH,
  Location.THE_PIKE_TIPPERARY,
  Location.THE_PIKE_WATERFORD,
  Location.THE_ROWER_KILKENNY,
  Location.THE_SPA_KERRY,
  Location.THE_SWEEP_KILKENNY,
  Location.THE_WARD_DUBLIN,
  Location.THOMAS_STREET_ROSCOMMON,
  Location.THOMASTOWN_KILKENNY,
  Location.THOMASTOWN_MEATH,
  Location.THOMASTOWN_TIPPERARY,
  Location.THOMONDGATE_LIMERICK,
  Location.THREE_CASTLES_KILKENNY,
  Location.THREEMILEHOUSE_MONAGHAN,
  Location.THURLES_AND_SURROUNDS_TIPPERARY,
  Location.THURLES_TIPPERARY,
  Location.TIBOHINE_ROSCOMMON,
  Location.TICKNOCK_DUBLIN,
  Location.TIDUFF_KERRY,
  Location.TIEVEMORE_DONEGAL,
  Location.TIMAHOE_KILDARE,
  Location.TIMAHOE_LAOIS,
  Location.TIMOLEAGUE_CORK,
  Location.TIMOLIN_KILDARE,
  Location.TINAHELY_WICKLOW,
  Location.TINNAHINCH_LAOIS,
  Location.TINRYLAND_CARLOW,
  Location.TIPPERARY,
  Location.TIPPERARY_TOWN_AND_SURROUNDS_TIPPERARY,
  Location.TIPPERARY_TOWN_TIPPERARY,
  Location.TIRELLAN_GALWAY,
  Location.TIRNANEILL_MONAGHAN,
  Location.TIRNEEVIN_GALWAY,
  Location.TITANIC_QUARTER_ANTRIM,
  Location.TIVOLI_CORK,
  Location.TOAMES_CORK,
  Location.TOBER_OFFALY,
  Location.TOBERBEG_WICKLOW,
  Location.TOBERMORE_DERRY,
  Location.TOBERNADARRY_MAYO,
  Location.TOBERSCANAVAN_SLIGO,
  Location.TOEM_TIPPERARY,
  Location.TOGHER_CORK_CITY_CORK,
  Location.TOGHER_CORK,
  Location.TOGHER_LOUTH,
  Location.TOGHER_OFFALY,
  Location.TOMBRACK_WEXFORD,
  Location.TOMDARRAGH_WICKLOW,
  Location.TOMHAGGARD_WEXFORD,
  Location.TONABROCKY_GALWAY,
  Location.TONACURRAGH_GALWAY,
  Location.TONYDUFF_CAVAN,
  Location.TOOMAGHERA_CLARE,
  Location.TOOMARD_GALWAY,
  Location.TOOMBEOLA_GALWAY,
  Location.TOOME_ANTRIM,
  Location.TOOMEVARA_TIPPERARY,
  Location.TOOR_TIPPERARY,
  Location.TOORAREE_LIMERICK,
  Location.TOOREENCAHILL_KERRY,
  Location.TOORMORE_CORK,
  Location.TOORNAFULLA_LIMERICK,
  Location.TOURLESTRANE_SLIGO,
  Location.TOURMAKEADY_MAYO,
  Location.TOURNAFULLA_LIMERICK,
  Location.TOWER_CORK,
  Location.TOWNLEY_HALL_LOUTH,
  Location.TOWNPARKS_GALWAY,
  Location.TRACTON_CORK,
  Location.TRAFRASK_CORK,
  Location.TRAGUMNA_CORK,
  Location.TRALEE_AND_SURROUNDS_KERRY,
  Location.TRALEE_KERRY,
  Location.TRAMORE_AND_SURROUNDS_WATERFORD,
  Location.TRAMORE_WATERFORD,
  Location.TREAN_MAYO,
  Location.TREANTAGH_DONEGAL,
  Location.TREEHOO_CAVAN,
  Location.TRIEN_ROSCOMMON,
  Location.TRILLICK_TYRONE,
  Location.TRIM_AND_SURROUNDS_MEATH,
  Location.TRIM_MEATH,
  Location.TRINITY_COLLEGE_DUBLIN_DUBLIN,
  Location.TRISTIA_MAYO,
  Location.TRUST_GALWAY,
  Location.TUAM_AND_SURROUNDS_GALWAY,
  Location.TUAM_ROAD_GALWAY,
  Location.TUAM_GALWAY,
  Location.TUAMGRANEY_CLARE,
  Location.TUBBER_CLARE,
  Location.TUBBER_GALWAY,
  Location.TUBBERCURRY_SLIGO,
  Location.TUBBRID_KILKENNY,
  Location.TUBBRID_TIPPERARY,
  Location.TULLA_CLARE,
  Location.TULLAGHAN_LEITRIM,
  Location.TULLAGHANSTOWN_MEATH,
  Location.TULLAGHOUGHT_KILKENNY,
  Location.TULLAHERIN_KILKENNY,
  Location.TULLAKEEL_KERRY,
  Location.TULLAMORE_AND_SURROUNDS_OFFALY,
  Location.TULLAMORE_KERRY,
  Location.TULLAMORE_OFFALY,
  Location.TULLAROAN_KILKENNY,
  Location.TULLIG_KERRY,
  Location.TULLOGHER_KILKENNY,
  Location.TULLOKYNE_GALWAY,
  Location.TULLOW_AND_SURROUNDS_CARLOW,
  Location.TULLOW_CARLOW,
  Location.TULLY_CROSS_GALWAY,
  Location.TULLY_DONEGAL,
  Location.TULLY_ROSCOMMON,
  Location.TULLYALLEN_LOUTH,
  Location.TULLYAMALRA_MONAGHAN,
  Location.TULLYCANNA_WEXFORD,
  Location.TULLYDUSH_DONEGAL,
  Location.TULLYLEASE_CORK,
  Location.TULLYMACREEVE_ARMAGH,
  Location.TULLYNAHA_DONEGAL,
  Location.TULLYVIN_CAVAN,
  Location.TULLYVOOS_DONEGAL,
  Location.TULROHAUN_MAYO,
  Location.TULSK_ROSCOMMON,
  Location.TUOSIST_KERRY,
  Location.TURF_LODGE_ANTRIM,
  Location.TURLOUGH_CLARE,
  Location.TURLOUGH_MAYO,
  Location.TURLOUGHMORE_GALWAY,
  Location.TURNERS_CROSS_CORK,
  Location.TURREEN_LONGFORD,
  Location.TWINBROOK_ANTRIM,
  Location.TWO_MILE_HOUSE_KILDARE,
  Location.TWOMILEBORRIS_TIPPERARY,
  Location.TWOMILEDITCH_GALWAY,
  Location.TYDAVNET_MONAGHAN,
  Location.TYLAS_MEATH,
  Location.TYNAGH_GALWAY,
  Location.TYNAN_ARMAGH,
  Location.TYRELLA_DOWN,
  Location.TYRELLSPASS_WESTMEATH,
  Location.TYRRELSTOWN_DUBLIN,
  Location.ULSTER_UNIVERSITY_BELFAST_ANTRIM,
  Location.ULSTER_UNIVERSITY_JORDANSTOWN_ANTRIM,
  Location.ULSTER_UNIVERSITY_MAGEE_DERRY,
  Location.UNION_HALL_CORK,
  Location.UNIVERSITY_AREA_ANTRIM,
  Location.UNIVERSITY_COLLEGE_CORK_BROOKFIELD_HEALTH_SCIENCES_CORK,
  Location.UNIVERSITY_COLLEGE_CORK_MARDYKE_ARENA_CORK,
  Location.UNIVERSITY_COLLEGE_CORK_TYNDALL_NATIONAL_INSTITUTE_CORK,
  Location.UNIVERSITY_COLLEGE_CORK_CORK,
  Location.UNIVERSITY_COLLEGE_DUBLIN_LYONS_ESTATE_KILDARE,
  Location.UNIVERSITY_COLLEGE_DUBLIN_SMURFIT_SCHOOL_OF_BUSINESS_DUBLIN,
  Location.UNIVERSITY_COLLEGE_DUBLIN_DUBLIN,
  Location.UNIVERSITY_OF_LIMERICK_LIMERICK,
  Location.UNIVERSITY_OF_ULSTER_COLERAINE_DERRY,
  Location.UPPER_BALLINDERRY_ANTRIM,
  Location.UPPER_MALONE_ANTRIM,
  Location.UPPER_NEWTOWNARDS_ROAD_DOWN,
  Location.UPPERCHURCH_TIPPERARY,
  Location.UPPERLANDS_DERRY,
  Location.URBALREAGH_DONEGAL,
  Location.URGLIN_GLEBE_CARLOW,
  Location.URLAUR_MAYO,
  Location.URLINGFORD_KILKENNY,
  Location.VALENTIA_ISLAND_KERRY,
  Location.VALLEYMOUNT_WICKLOW,
  Location.VENTRY_KERRY,
  Location.VICARSTOWN_CORK,
  Location.VICARSTOWN_LAOIS,
  Location.VICTORIA_CROSS_CORK,
  Location.VILLIERSTOWN_WATERFORD,
  Location.VIRGINIA_ROAD_MEATH,
  Location.VIRGINIA_CAVAN,
  Location.WADDINGTON_WEXFORD,
  Location.WALKINSTOWN_DUBLIN,
  Location.WALSH_ISLAND_OFFALY,
  Location.WALSHESTOWN_WEXFORD,
  Location.WALSHTOWN_CORK,
  Location.WARD_DUBLIN,
  Location.WARINGSFORD_DOWN,
  Location.WARINGSTOWN_DOWN,
  Location.WARRENPOINT_DOWN,
  Location.WATCH_HO_VILLAGE_WEXFORD,
  Location.WATER_WORKS_ANTRIM,
  Location.WATERFALL_CORK,
  Location.WATERFORD,
  Location.WATERFORD_CITY,
  Location.WATERFORD_CITY_CENTRE_WATERFORD,
  Location.WATERFORD_INSTITUTE_OF_TECHNOLOGY_COLLEGE_ST_CAMPUS_WATERFORD,
  Location.WATERFORD_INSTITUTE_OF_TECHNOLOGY_CORK_RD_CAMPUS_WATERFORD,
  Location.WATERFORD_INSTITUTE_OF_TECHNOLOGY_KILDALTON_AGRICULTURAL_COLLEGE_KILKENNY,
  Location.WATERFORD_INSTITUTE_OF_TECHNOLOGY_WATERFORD,
  Location.WATERGRASSHILL_CORK,
  Location.WATERVILLE_KERRY,
  Location.WELCHTOWN_DONEGAL,
  Location.WELLINGTONBRIDGE_WEXFORD,
  Location.WELLPARK_GALWAY,
  Location.WEST_BELFAST_CITY_ANTRIM,
  Location.WEST_CO_DUBLIN_DUBLIN,
  Location.WEST_CORK_CORK,
  Location.WEST_TOWN_DONEGAL,
  Location.WESTBURY_CLARE,
  Location.WESTCOVE_KERRY,
  Location.WESTERN_ROAD_CORK,
  Location.WESTMEATH,
  Location.WESTPORT_AND_SURROUNDS_MAYO,
  Location.WESTPORT_QUAY_MAYO,
  Location.WESTPORT_MAYO,
  Location.WEXFORD_TOWN_AND_SURROUNDS_WEXFORD,
  Location.WEXFORD_TOWN_WEXFORD,
  Location.WHITE_CASTLE_DONEGAL,
  Location.WHITE_GATE_CROSS_ROADS_KERRY,
  Location.WHITE_S_CROSS_CORK,
  Location.WHITEABBEY_ANTRIM,
  Location.WHITECHURCH_CORK,
  Location.WHITECROSS_ARMAGH,
  Location.WHITEGATE_CLARE,
  Location.WHITEGATE_CORK,
  Location.WHITEHALL_DUBLIN,
  Location.WHITEHALL_KILKENNY,
  Location.WHITEHALL_ROSCOMMON,
  Location.WHITEHALL_WESTMEATH,
  Location.WHITEHEAD_ANTRIM,
  Location.WHITEROCK_ANTRIM,
  Location.WHITEROCK_WEXFORD,
  Location.WHITES_TOWN_LOUTH,
  Location.WICKLOW_TOWN_AND_SURROUNDS_WICKLOW,
  Location.WICKLOW_TOWN_WICKLOW,
  Location.WILKINSTOWN_MEATH,
  Location.WILLBROOK_CLARE,
  Location.WILLBROOK_DUBLIN,
  Location.WILLIAMSTOWN_GALWAY,
  Location.WILLIAMSTOWN_WESTMEATH,
  Location.WILTON_CORK,
  Location.WINDGAP_KILKENNY,
  Location.WINDMILL_KILDARE,
  Location.WINDSOR_ANTRIM,
  Location.WINDY_ARBOUR_DUBLIN,
  Location.WOLFHILL_LAOIS,
  Location.WOODENBRIDGE_WICKLOW,
  Location.WOODFORD_GALWAY,
  Location.WOODQUAY_GALWAY,
  Location.WOODSTOCK_DOWN,
  Location.WOODSTOWN_WATERFORD,
  Location.WOODVALE_ANTRIM,
  Location.YELLOW_FURZE_MEATH,
  Location.YOUGHAL_AND_SURROUNDS_CORK,
  Location.YOUGHAL_CORK,
  Location.YOUGHAL_TIPPERARY,
];
