module.exports = {
    parser: '@babel/eslint-parser',
    // env: {
    //     "browser": true,
    //     "es2021": true,
    //     "jest": true
    // },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:prettier/recommended",
        // "plugin:jsx-a11y/recommended"
        // "airbnb"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: "module"
    },
    settings: {
        react: {
            version: "detect"
        },
        "import/resolver": {
            "eslint-import-resolver-custom-alias": {
                alias: {
                    Assets: "./src/assets",
                    Pages: "./src/pages",
                    Shared: "./src/shared",
                    Components: "./src/components",
                    Mocks: "./src/mocks",
                },
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    // plugins: [
    //     "react"
    //     // "prettier"
    // ],
    rules: {
        // "linebreak-style": 0,
        // "react/react-in-jsx-scope": "off",
        // "camelcase": "off",
        // "import/prefer-default-export": "off",
        // "import/order": "off",
        // "no-confusing-arrow": "off",
        // "eol-last": "off",
        // "react/jsx-props-no-spreading": "off",
        // "object-curly-newline": "off",
        // "semi": "off",
        // "comma-dangle": "off",
        // "implicit-arrow-linebreak": "off"
        //
        "react/prop-types": "off",
        "no-unused-vars": "off",
        "import/no-unresolved": "off",
        "react/display-name": "off",
        "react/jsx-key": "off",
        //
        "no-undef": "off",
        "no-extra-boolean-cast": "off"
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            env: {browser: true, node: true },
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended'
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: 2018,
                sourceType: 'module',
                project: './tsconfig.json'
            },
            plugins: ['@typescript-eslint'],
            rules: {
                indent: ['error', 2, { SwitchCase: 1 }],
                'linebreak-style': ['error', 'unix'],
                quotes: ['error', 'single'],
                'comma-dangle': ['error', 'always-multiline'],
                '@typescript-eslint/no-explicit-any': 0,
                'prettier/prettier': ['error', { singleQuote: true }]
            }
        }
    ]
    // "eslint.rules.customizations": [
    //     {
    //         "rule": "*",
    //         "severity": "warn"
    //     }
    // ]
}