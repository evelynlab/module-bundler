import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife', // iife, cjs, amd, esm, umd
  },
  plugins: [babel({
    exclude: 'node_modules/**'
  })]
}
