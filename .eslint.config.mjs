import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', '.env*'],
  },

  {
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      eqeqeq: ['error', 'always'],
    },
  },

  // отключает все правила ESLint,
  // которые могут конфликтовать с Prettier
  prettier,
];
