module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    env: {
        node: true
    },
    extends: ['eslint:recommended'],
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'brace-style': ['error', 'stroustrup'],
        'prefer-template': 'error',
        'object-curly-spacing': ['error', 'never'],
    }
};