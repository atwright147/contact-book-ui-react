import merge from 'webpack-merge';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import path from 'path';

import common from './webpack.config.common.babel.js';

export default merge(common, {
    devtool: 'inline-source-map',
    output: { publicPath: '/' },
    devServer: {
        contentBase: 'src',
        historyApiFallback: {
            index: '/'
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8882',
                secure: false
            }
        }
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: path.join('..', 'analysis', 'bundle-size-analysis.html')
        })
    ]
});
