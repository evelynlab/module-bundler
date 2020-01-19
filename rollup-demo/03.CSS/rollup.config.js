import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife', // iife, cjs, amd, esm, umd
    // format: 'cjs',
    // format: 'umd',
    // format: 'esm',
  },
  plugins: [postcss()]
}
