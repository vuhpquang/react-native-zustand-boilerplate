module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['import'],
  rules: {
    'no-console': ['error', { allow: ['error', 'debug'] }],
    // Import:
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-commonjs': 0,
    'import/no-amd': 2,
    'import/imports-first': 2,
    'import/no-duplicates': 2,
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index',
        ] /* builtin & external are mingled */,
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'src/contexts/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order:
            'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
    'no-unused-vars': [2, { argsIgnorePattern: 'React' }],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
    'import/ignore': ['react-native'],
  },
};