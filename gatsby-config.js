module.exports = {
  siteMetadata: {
    title: `ETR Media Productions`,
    siteUrl: `https://www.etrmediaproductions.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ETR Media Productions`,
        short_name: `ETR`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
