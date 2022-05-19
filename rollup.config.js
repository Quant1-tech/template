import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

module.exports = [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/template.min.js',
      name: 'tplv',
      format: 'umd',
      sourcemap: false,
    },
    plugins: [resolve(), typescript(), terser()],
  },
];
