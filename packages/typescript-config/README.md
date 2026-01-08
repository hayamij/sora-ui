# @workspace/typescript-config

Shared TypeScript configuration for the monorepo.

## Usage

### For Packages

Extend the base config in your `tsconfig.json`:

```json
{
  "extends": "@workspace/typescript-config/base.json"
}
```

### For Next.js Apps

Extend the Next.js config in your `tsconfig.json`:

```json
{
  "extends": "@workspace/typescript-config/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]
}
```
