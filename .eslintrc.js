module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier', // Disable ESLint rules that conflict with Prettier
    'plugin:prettier/recommended', // Enable Prettier rules
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    // Prettier integration
    'prettier/prettier': 'error',

    // Best practices for game development
    'no-console': 'warn', // Allow console logs in development but warn
    'no-debugger': 'warn', // Allow debugger in development but warn
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_', // Allow unused args that start with _
        varsIgnorePattern: '^_', // Allow unused vars that start with _
      },
    ],

    // Code quality
    'prefer-const': 'error',
    'no-var': 'error',
    'no-duplicate-imports': 'error',
    'no-unused-expressions': 'error',
    'no-useless-return': 'error',
    'no-unreachable': 'error',
    'no-undef': 'error',

    // Best practices
    'eqeqeq': ['error', 'always'], // Require strict equality
    'curly': ['error', 'all'], // Require curly braces for all control statements
    'dot-notation': 'error', // Require dot notation when possible
    'no-eval': 'error', // Disallow eval()
    'no-implied-eval': 'error', // Disallow implied eval()
    'no-new-func': 'error', // Disallow Function constructor
    'no-return-assign': 'error', // Disallow assignment in return statements

    // Performance considerations for games
    'no-inner-declarations': 'error', // Avoid function declarations inside blocks
    'no-loop-func': 'error', // Avoid creating functions inside loops
    'no-new-object': 'error', // Use literal syntax instead of Object constructor
    'no-new-wrappers': 'error', // Avoid primitive wrapper instances

    // Code style (handled by Prettier, but some logical rules)
    'consistent-return': 'error', // Require consistent return statements
    'default-case': 'warn', // Require default case in switch statements
    'no-fallthrough': 'error', // Disallow fallthrough in switch cases
    'no-magic-numbers': [
      'warn',
      {
        ignore: [-1, 0, 1, 2], // Common numbers in game development
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
      },
    ],

    // Game-specific considerations
    'no-alert': 'warn', // Avoid alerts in games
    'no-confirm': 'warn', // Avoid confirms in games
    'no-global-assign': 'error', // Prevent accidental global assignments
  },
  globals: {
    // Game development globals
    PIXI: 'readonly',
    // Add other game-related globals as needed
  },
  overrides: [
    {
      files: ['*.config.js', 'vite.config.js', '.eslintrc.js'],
      env: {
        node: true,
      },
      rules: {
        'no-magic-numbers': 'off', // Config files often have magic numbers
      },
    },
    {
      files: ['src/test/**/*.js', '**/*.test.js', '**/*.spec.js'],
      rules: {
        'no-magic-numbers': 'off', // Tests often have magic numbers
        'no-console': 'off', // Allow console in tests
      },
    },
  ],
};