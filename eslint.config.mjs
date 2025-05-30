import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["sonarjs"],
    rules: {
      semi: ["error"],
      quotes: ["error", "double"],
      "prefer-arrow-callback": "error",
      "sonarjs/no-implicit-dependencies": "off",
      "@typescript-eslint/no-unused-vars":"warn",
      "no-console": "error",
      "react-hooks/exhaustive-deps": "off",
    },
  }),
];

export default eslintConfig;
