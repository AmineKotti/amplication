const DocMenuConfig = [
  {
    pages: [
      {
        heading: "Home",
        route: "/",
        svgIcon: "svg/icons/art002.svg",
        fontIcon: "bi-app-indicator",
      },
    ],
  },
  {
    heading: "produits",
    route: "/produits",
    pages: [
      {
        heading: "All produits",
        route: "/produits",
        svgIcon: "svg/icons/gen014.svg",
        fontIcon: "bi-calendar3-event",
      },
      {
        heading: "create produits",
        route: "/produits/create",
        svgIcon: "svg/icons/gen014.svg",
        fontIcon: "bi-calendar3-event",
      },
      {
        heading: "edit produits",
        route: "/produits/edit",
        svgIcon: "svg/icons/gen014.svg",
        fontIcon: "bi-calendar3-event",
      },
    ],
  },
  {
    heading: "categories",
    route: "/categories",
    pages: [
      {
        heading: "All categories",
        route: "/categories",
        svgIcon: "svg/icons/gen014.svg",
        fontIcon: "bi-calendar3-event",
      },
      {
        heading: "create categories",
        route: "/categories/create",
        svgIcon: "svg/icons/gen014.svg",
        fontIcon: "bi-calendar3-event",
      },
      {
        heading: "edit categories",
        route: "/categories/edit",
        svgIcon: "svg/icons/gen014.svg",
        fontIcon: "bi-calendar3-event",
      },
    ],
  },

  {
    sectionTitle: "authentication",
    svgIcon: "svg/icons//teh004.svg",
    fontIcon: "bi-sticky",
    sub: [
      {
        sectionTitle: "basicFlow",
        sub: [
          {
            heading: "signIn",
            route: "/sign-in",
          },
          {
            heading: "signUp",
            route: "/sign-up",
          },
          {
            heading: "signUpMember",
            route: "/sign-up-member",
          },
          {
            heading: "passwordReset",
            route: "/password-reset",
          },
        ],
      },
      {
        heading: "error404",
        route: "/404",
      },
      {
        heading: "error500",
        route: "/500",
      },
    ],
  },
  {
    pages: [],
  },
];
export default DocMenuConfig;
