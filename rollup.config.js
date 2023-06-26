const {nodeResolve} = require("@rollup/plugin-node-resolve")
const commonjs = require("@rollup/plugin-commonjs")
const typescript = require("@rollup/plugin-typescript")
const terser = require("@rollup/plugin-terser")

const plugins = [
    nodeResolve(),
    typescript(),
    commonjs()
]
module.exports = [
    {
        input: "./src/index.ts",
        output: {
            file: "./dist/index.js",
            format: "es",
            exports: "auto",
            sourcemap: false
        },
        plugins: [
            ...plugins
        ]
    },
    {
        input: "./src/index.ts",
        output: {
            file: "./dist/index.min.js",
            format: "es",
            exports: "auto",
            sourcemap: false
        },
        plugins: [
            ...plugins,
            terser()
        ]
    }
]