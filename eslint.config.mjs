// eslint.config.mjs
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import * as eslintJs from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"
import globals from "globals"
import nextPlugin from "@next/eslint-plugin-next"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintJs.configs.recommended,
})

export default [
  {
    ignores: ["**/node_modules/", "**/.next/", "**/out/"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...compat.extends("next/core-web-vitals"),
    plugins: {
      "@next/next": nextPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
]