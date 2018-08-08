import merge from 'webpack-merge';

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
    }
});
