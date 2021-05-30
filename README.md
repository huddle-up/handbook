# HuddleUp Handbook

This handbook is built with [Docusaurus 2](https://docusaurus.io/).

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

You can specify the port with the `--port` argument (eg. `yarn start --port 1234`).

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Translations

As a starter, read the Docusaurus [i18-documentation](https://docusaurus.io/docs/i18n/introduction).

Things to keep in mind when translating:

1. Docs translations must be in a `current` folder to work
2. To extract the translation strings for a language use the following command `yarn write-translations --locale LOCALE_TO_EXTRACT`
3. To run the site locally in a specific language, use `yarn start --locale LOCALE_TO_RUN`
