module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
  },
};
