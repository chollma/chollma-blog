// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`



module.exports = {
  siteName: 'Cooper Hollmaier',
  titleTemplate: '%s | Cooper Hollmaier',
  siteURL: 'https://cooperhollmaier.com',
  permalinks: 
    {
      trailingSlash:false
    }
  ,
  plugins: [
    {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'content/posts/**/*.md',
      typeName: 'Post',
      route: '/article/:title'
    },
    
   

  }]
}
