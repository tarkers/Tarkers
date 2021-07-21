const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: { // 打包入口
        index: "./src/index.tsx",
        // vendor: [// 將react和react-dom這些單獨打包出來，減小打包檔案體積
        // "react",
        // "react-dom"
        // ]
    },
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },

    devServer: {
        contentBase: path.join(__dirname, "src"),
        port: 3000,
        open: true,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
            }
        }
    },
    // devServer: { contentBase: path.join(__dirname, "src") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            // {
            //     test: /.ts$/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/typescript', '@babel/preset-env'],
            //         },
            //     },
            // },
            // {
            //     test: /.tsx$/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/typescript', '@babel/preset-react', '@babel/preset-env'],
            //         },
            //     },
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                fiber: false,
                            },
                        },
                    },
                ],
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[path][name].[ext]',
            //     },
            // },
            // {
            //     test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            //     use: ["file-loader"],
            // }, 
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg|webp)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192,
            //                 name: 'img/[name].[ext]',
            //             },
            //         },
            //         // 配置 image-webpack-loader (第一步)
            //         {
            //             loader: 'image-webpack-loader',
            //             options: {
            //                 // 只在 production 環境啟用壓縮 (第二步)
            //                 disable: process.env.NODE_ENV === 'production' ? false : true,
            //             },
            //         },
            //     ],
            // },
            
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};