import globals from "globals";

/** @type {import('eslint').Linter.Config} */
export default {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  rules: {
    // Adicionar regras personalizadas aqui
  },
};