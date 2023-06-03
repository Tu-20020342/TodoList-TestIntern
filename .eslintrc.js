module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'linebreak-style': ['off', 'unix'],
    'semi': 'off',
    'padded-blocks': 'off',
    'eol-last': 'off',
    'indent': 'off',
    'object-curly-spacing': 'off',
    'react/prop-types': 'off',
  },
};
