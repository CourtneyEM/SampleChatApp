module.exports = function (api) {
  api.cache(true);
  const presets = [
    "@babel/preset-env",
    "@babel/preset-react"
  ];
  const plugins = [
    ['@emotion'],
    ['@babel/plugin-transform-runtime'],
    ['babel-plugin-import', {
      libraryName: '@mui/material',
      libraryDirectory: '',
      camel2DashComponentName: false
    }, 'core'],
    ['babel-plugin-import', {
      libraryName: '@mui/icons-material',
      libraryDirectory: '',
      camel2DashComponentName: false
    }, 'icons']];

  return {
    presets,
    plugins
  };
};