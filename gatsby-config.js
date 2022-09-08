module.exports = {
  siteMetadata: {
    title: `ETR Media`,
    description: `Empower the Rebel - Media Productions. We are a consulting and production company for digital media.`,
    image: 'src/assets/favicon.png',
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
