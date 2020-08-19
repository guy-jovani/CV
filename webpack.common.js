




module.exports = {
  entry: {
    poly: 'babel-polyfill',
    main: './assets/scripts/index.js',
    contact: './assets/scripts/contact.js',
    resume: './assets/scripts/resume.js',
    projects: './assets/scripts/projects.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  }
}