module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'standard-jsx'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off'
  }
}
