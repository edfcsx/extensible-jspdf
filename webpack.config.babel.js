import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './index',
  output: {
    path: join(__dirname, 'umd'),
    libraryTarget: 'umd',
    library: 'extensibleJspdf',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', include }
    ]
  }  
}