// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`



module.exports = {
  titleTemplate: '%s | Cooper Hollmaier',
  icon: './src/assets/img/favicon.png',
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
