const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/javascript/spaceship.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    devtool: 'eval-source-map'
};