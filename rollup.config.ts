import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import json from 'rollup-plugin-json'

const pkg = require('./package.json')

const libraryName = 'tool-zen-support-react'

export default {
  input: `src/${libraryName}.tsx`,
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
    {
      file: 'dist/support.js',
      name: 'ZenSupport',
      format: 'iife',
      sourcemap: true,
    },
  ],
  external: [
    // '@material-ui/core',
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  watch: {
    include: 'src/**',
  },
  plugins: [
    // Allow json resolution
    json(),
    external(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        'node_modules/react/react.js': [
          'Children',
          'Component',
          'PropTypes',
          'useState',
          'useEffect',
          'ReactNode',
          'createElement'
        ],
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef',
          'isFragment'
        ],
        'node_modules/@material-ui/utils/index.js': [
          'elementAcceptingRef',
          'elementTypeAcceptingRef',
          'chainPropTypes',
          'refType',
          'exactProp',
          'deepmerge',
          'ponyfillGlobal',
          'getDisplayName'
        ]
      }
    }),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
}
