/* eslint-env node */

module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended'
	],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],
		// 'semi': ['error', 'always', { 'omitLastInOneLineBlock': false}],
		'semi': ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		quotes: ['error', 'single'],
		'react/prop-types': [0],
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'no-mixed-spaces-and-tabs': 'error'
		
	}
}
