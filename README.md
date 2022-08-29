# Next TypeScript TailwindCSS NextAuth Base Template

## Template Cloning

```bash
git clone -b template https://github.com/haneulab/next-ts-tailwind-auth-template ./my-app
```

## Prepare Project

```bash
yarn && yarn prepare
```

## Add Husky Hooks

```bash
npx husky add .husky/pre-commit 'yarn format && yarn lint'
npx hussky add .husky/pre-push 'yarn type-check && yarn build`
```
