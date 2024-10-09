module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        '@nuxtjs/eslint-config-typescript',
        'prettier', // Disables ESLint rules that conflict with Prettier
        'plugin:prettier/recommended' // Runs Prettier as an ESLint rule
    ],
    rules: {
        'prettier/prettier': ['error'], // Prettier errors will show as ESLint errors
    }
}
