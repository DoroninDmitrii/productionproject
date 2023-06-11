module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts.tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: [
    'react',
    'i18next',
    'react-hooks',
    'plugin'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/jsx-indent': [2, 4],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'plugin/path-checker': ['error', { alias: '@' }],
    'plugin/public-api-imports': [
      'error', 
      { 
        alias: '@',
        testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'] 
      }
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-non-null-assertion': ['warn'],
    '@typescript-eslint/prefer-nullish-coalescing': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn',
      { argsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    'no-unused-vars': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['as', 'role', 'data-testid', 'justify', 'direction', 'align', 'gap', 'target', 'border']
      }
    ],
    'react/display-name': 'off',
    '@typescript-eslint/prefer-includes': 'off',
  }
}
