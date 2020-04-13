module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat:400,600,800']
        }
      }
    },
      `gatsby-transformer-json`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `meetups`,
          path: `/Users/maja/development/getsby/redbox/src/_data`,
        },
      },
      
  ],
}
console.log(__dirname)  