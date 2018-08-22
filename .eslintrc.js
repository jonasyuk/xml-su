module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['eslint:recommended'],
    rules: {
        'no-console': ['error'],
        'arrow-parens': ['error', 'as-needed'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'brace-style': ['error', 'stroustrup'],
        'prefer-template': 'error',
        'object-curly-spacing': ['error', 'never'],
    }
};