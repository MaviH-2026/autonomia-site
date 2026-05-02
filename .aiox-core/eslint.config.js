export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '.git/',
      'development/templates/**',
      'product/templates/**',
      'scripts/diagnostics/**',
      '**/*.jsx',
      '**/components/**'
    ]
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  }
];
