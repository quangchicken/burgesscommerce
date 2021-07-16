const { linkResolver } = require("./src/utils/common");

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.info(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "Burgess Commerce",
    siteUrl: "https://www.example.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_REPOSITORY_NAME,
        accessToken: process.env.ACCESS_TOKEN,
        linkResolver: () => linkResolver,
        schemas: {
          navigation: require("./custom_types/navigation.json"),
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `rowanburgess`,
      },
    },
  ],
};
