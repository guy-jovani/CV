




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
      },
      {
        test: /\.(svg|png|jpg|jpeg|PNG)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: '../images'
          }
        }
      },
    ]
  }
}
























// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const common = {
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: {
//               publicPath: '../styles/',
//             },
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               url: true
//             }
//           },
//         ]
//       },
//       {
//         test: /\.html$/,
//         use: ['html-loader']
//       },
//       {
//         test: /\.(svg|png|jpg|jpeg|PNG)$/,
//         use: {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[hash].[ext]',
//             outputPath: '../images'
//           }
//         }
//       },
//     ]
//   }
// }

// const index = Object.assign({}, common, {
//   entry: {
//     main: './assets/scripts/index.js'
//   }
// });
// const contact = Object.assign({}, common, {
//   entry: {
//     contact: './assets/scripts/contact.js'
//   }
// });
// const resume = Object.assign({}, common, {
//   entry: {
//     resume: './assets/scripts/resume.js'
//   }
// });
// const projects = Object.assign({}, common, {
//   entry: {
//     projects: './assets/scripts/projects.js'
//   }
// });

// module.exports = [
//   index, contact, resume, projects
// ]