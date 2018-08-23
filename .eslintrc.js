module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
