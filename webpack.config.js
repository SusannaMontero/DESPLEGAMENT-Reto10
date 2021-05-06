// Ejecuta el archivo mian.js y lo crea de nuevo en una carpeta llamada dist con el nombre bundle.js
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            // Webpack loader de css
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
          },
          {
            // Webpack loader de sass
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader"
            ]
          }
        ],
      },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}