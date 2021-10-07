module.exports = {
  siteMetadata: {
    title: `Techradar`,
    author: {
      name: `Niels Langlotz`,
      summary: `Webentwickler mit Schwerpunkt TYPO3 aus Halle (Saale)`,
    },
    description: `Niels Langlotz ist professioneller TYPO3-Webentwickler aus Halle (Saale).`,
    siteUrl: `https://radar.niels-langlotz.com`,
    social: {
      website: `www.typoniels.de`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: `assets`,
      },
    },
    {
      resolve: "@fika/gatsby-source-cockpit",
      options: {
        token: "9a1744cbb4740081b74bdf7c54eb35",
        baseUrl: "https://cockpit.typoniels.de",
        locales: ["default", "en"],
        collections: ["Techseiten", "techradar", "leanplan", "Quadrant"],
        singletons: ["working-project", "nl-cta", "WorkingLernplan"],
        // brokenImageReplacement: 'AN_URL_TO_AN_IMAGE',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "2",
        matomoUrl: "https://matomo.typoniels.eu",
        siteUrl: "https://www.niels-langlotz.com",
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["src/styles/niels-langlotz.scss"],
        }
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
        // develop: true, // Enable while using `gatsby develop`
        whitelist: ['fas', 'fa-toolbox', 'fa-screwdriver', 'fa-language', 'bg-gray-300'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Niels TechRadar`,
        short_name: `TechRadar`,
        start_url: `/`,
        background_color: `#003441`,
        theme_color: `#00bbff`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
