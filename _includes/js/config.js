var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    "type": "range",
    "key": "decimalLatitude",
    "value": {
      "gte": -23.43659,
      "lte": 23.43659
    }
  }
};
