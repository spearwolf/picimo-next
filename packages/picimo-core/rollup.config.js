import config from '../../shared/rollup.config';

export default config({
  root: __dirname,
  filename: 'picimo-core',
  external: [
    '@picimo/utils',
    'gl-matrix',
  ],
});
