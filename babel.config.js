module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@emotion/babel-preset-css-prop','babel-preset-expo'],
  };
};
