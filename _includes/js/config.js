var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    "type": "in",
    "key": "taxonKey",
    "values": [
      797
    ]
  }
};
