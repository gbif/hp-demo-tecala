var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  rootPredicate: {
    "type": "and",
    "predicates": [
      {
        "type": "or",
        "predicates": [
          {
            "type": "isNotNull",
            "key": "institutionKey"
          },
          {
            "type": "isNotNull",
            "key": "collectionKey"
          }
        ]
      },
      {
        "type": "in",
        "key": "basisOfRecord",
        "values": [
          "PRESERVED_SPECIMEN",
          "FOSSIL_SPECIMEN",
          "MATERIAL_SAMPLE",
          "LIVING_SPECIMEN"
        ]
      }
    ]
  }
};
