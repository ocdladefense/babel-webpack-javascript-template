const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyPlugin = require("copy-webpack-plugin");

module.exports = env => {
    console.log(env);

    return {
        mode: "development",
        entry: {
            app: path.resolve(__dirname, "./src/js/index.js")
            // helper: path.resolve(__dirname, './src/js/helper.js')
        },
        snapshot: {
            managedPaths: ["/node_modules"],
            unmanagedPaths: ["/dev_modules"]
        },
        watchOptions: {
            followSymlinks: true
        },
        resolve: {
            symlinks: false,
            extensions: [".js", ".jsx"]
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            publicPath: "/",
            filename: "[name].bundle.js",
            assetModuleFilename: "images/[name][ext]",
            clean: true
        },
        target: "web",
        devServer: {
            static: path.resolve(__dirname, "./src"),
            port: 8080,
            open: true,
            hot: true,
            compress: true,
            historyApiFallback: true
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.html$/i,
                    loader: "html-loader"
                },
                {
                    test: /\.(js|jsx)$/,
                    // exclude: /(node_modules)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                ["@babel/preset-env", { modules: false }],
                                [
                                    "@babel/preset-react",
                                    {
                                        pragma: "vNode", // default pragma is React.createElement (only in classic runtime)
                                        pragmaFrag: "Fragment", // default is React.Fragment (only in classic runtime)
                                        throwIfNamespace: false, // defaults to true
                                        runtime: "classic", // defaults to classic
                                        targets: {
                                            chrome: "120"
                                        }
                                        // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
                                    }
                                ]
                            ]
                        }
                    }
                },
                {
                    test: /\.ts$/,
                    use: "ts-loader"
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader", "postcss-loader"]
                },
                {
                    test: /\.(svg|eot|ttf|woff|woff2)$/i,
                    type: "asset/resource"
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    type: "asset/resource"
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                APP_TYPE: JSON.stringify(env.APP_TYPE || "ors-viewer"),
                USE_MOCK_BON: JSON.stringify(env.USE_MOCK_BON || false) // Can we even pass booleans from the CLI?
            }),
            new htmlWebpackPlugin({
                template: path.resolve(__dirname, "./src/index.html"),
                chunks: ["app"],
                inject: "body",
                filename: "index.html"
            }),
            new copyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, "src/images"),
                        to: path.resolve(__dirname, "dist/images")
                    },
                    "src/.nojekyll",
                    "src/manifest.json",
                    "src/sw.js",
                    "src/robots.txt"
                ]
            })
        ]
    };
};
