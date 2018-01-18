const H5 = require("html-webpack-plugin");
const wp = require('webpack');

module.exports = {
    "entry": "./src",
    "output": {
        "filename": "bundle.min.js",
        "path": __dirname + "/dist"
    },
    "loader": {
        "rules": [
            {
                "test": /\.jsx?$/,
                "use": "babel-loader"
            }
        ]
    },
    "plugins": [
        new wp.optimize.UglifyJsPlugin(),
        new H5({
            "template": "src/index.html"
        })
    ]
};
