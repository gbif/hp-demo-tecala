var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    "type": "and",
    "predicates": [
      {
        "type": "in",
        "key": "basisOfRecord",
        "values": [
          "PRESERVED_SPECIMEN",
          "MATERIAL_SAMPLE",
          "FOSSIL_SPECIMEN",
          "LIVING_SPECIMEN"
        ]
      },
      {
        "type": "in",
        "key": "taxonKey",
        "values": [
          797
        ]
      }
    ]
  }
};
