module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel'],
  extends: ['airbnb'],
  rules: {
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
  },
};
