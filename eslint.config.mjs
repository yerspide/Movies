import { withNuxt } from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.{ts,tsx,vue}'],
  rules: {
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/consistent-type-imports': ['error'],
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always'
      }
    ]
  }
})
