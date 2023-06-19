# typescript-react-chrome-extension

![build](https://github.com/mikezzb/typescript-react-chrome-extension/workflows/build/badge.svg)


## Prerequisites

* [node.js](https://nodejs.org/) + [yarn](https://yarnpkg.com/)

## Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

## Setup

```
yarn install
```

## Build

```
yarn build
```

## Build in watch mode

### terminal

```
yarn watch
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Test
`npx jest` or `yarn test`
