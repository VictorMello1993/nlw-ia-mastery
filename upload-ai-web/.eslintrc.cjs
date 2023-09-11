module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'standard'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "quotes": [
      2,
      "double",
      {
        "avoidEscape": true
      }
    ],
    "semi": [
      2,
      "always"
    ],
    "space-before-function-paren": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {}
    },
  },
}
