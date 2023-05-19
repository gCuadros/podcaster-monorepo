## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) Podcast app
- `ui`: a stub React component library shared by applications based on chakra-ui
- `eslint-config-custom`: `eslint` configurations default
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`) for react projects
- `jest-config-common`: `jest` configurations default
- `jest-config-react`: `eslint` configurations for react projects
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `types`: a stub React types library shared by applications
- `web-tests`: a stub React component library shared by applications based on playwright

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Install

The first step, necessary to install all libraries

```
In the root directory
npm install
```

### Build

To build all apps and packages, run the following command:

```
In the root directory
npm run build
```

### Web Develop

To only develop web app, run the following command:

```
In the root directory
npm run dev:web
```

### Develop

To develop all apps and packages, run the following command:

```
In the root directory
npm run dev
```

### end2end Tests

To execute tests, run the following command:

```
In the root directory
npm run test:dev
```

### unit Tests

To execute tests, run the following command:

```
In apps/web root directory
npm run test
```

### Deployment

Currently, the develop branch is deployed through Vercel at the following [URL](https://podcaster-monorepo-web.vercel.app/)

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
