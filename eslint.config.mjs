import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Add ignores configuration first
  {
    ignores: [
      "lib/generated/**/*",
      "prisma/generated/**/*", 
      ".next/**/*",
      "node_modules/**/*",
      "dist/**/*",
      "build/**/*",
    ]
  },
  
  // Your existing extends
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Optional: Add custom rules to downgrade errors to warnings
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    }
  }
];

export default eslintConfig;