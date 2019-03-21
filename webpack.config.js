//для переведения относительных путей в абсолютные
let path = require('path');

let conf = {
  //точка входа
  entry: './src/index.js',
  //итоговый файл и его директория
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  //ошибка выводится на все окно на черном фоне
  devServer: {
    overlay: true
  },
  module: {
    //правила, по которым webpack перестраивает файл
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
        //exclude: '/node-modules/'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader'
        ],
      },
    ]
  },
  //для построения карты сайта
  //ссылки из консоли на реальные файлы
  //devtool: 'eval-sourcemap'
};

module.exports = (env, options) => {
  let production = options.mode === 'production';
  conf.devtool = production
                  ? false
                  : 'eval-sourcemap';
  return conf;
};