module.exports = {
  siteMetadata: {
    title: `My Blog`,
    author: `Osama Aamer`,
    description: `I write code and occasionally go out for a walk`,
    siteUrl: `https://osamaaamer.com/`,
    social: {
      twitter: `osamaaamer`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "neyoform", // required
        defaultLang: "en-us", // optional, but recommended
        accessToken: process.env.PRISMIC_ACCESS_TOKEN, // optional
        path: "/preview",
        previews: true, // optional, default: false
        pages: [
          {
            type: "Article", // TypeName from prismic
            match: "/article/:uid", // pages will be generated under this pattern (optional)
            path: "/article-preview", // placeholder page for unpublished documents
            component: require.resolve("./src/templates/article.js"),
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-99268613-2`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Osama Aamer`,
        short_name: `I write things`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
