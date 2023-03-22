module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:consistent-default-export-name/fixed',
    'prettier',
  ],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/react-in-jsx-scope': 0,
    'no-param-reassign': ['error', { props: false }],
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    curly: [2, 'all'],
    'consistent-default-export-name/default-export-match-filename': 'error',
    'consistent-default-export-name/default-import-match-filename': 0,
    'react/function-component-definition': 0,
    'no-restricted-exports': 0,
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
    {
      // enable the rule specifically for testing files
      files: ['*.test.ts', '*.test.tsx'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'testing-library/no-debugging-utils': 'warn',
      },
    },
  ],
};
