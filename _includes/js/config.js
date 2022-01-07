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

let routeConfig = {
  collectionKey: {
    route: '/',
    isHref: true,
    url: ({key}) => {
      return `/collection/${key}`;
    }
  },
  collectionSearch: {
    url: () => `/collection/`
  },
  collectionSpecimens: {
    url: ({key}) => `/collection/${key}/specimens`
  },

  institutionKey: {
    isHref: true,
    url: ({key}) => {
      return `/institution/${key}`;
    }
  },
  institutionSearch: {
    url: () => `/institution/`
  },
}