---
sidebar_position: 3
---

# Configuration

The configuration of _HuddleUp_ is achieved through environment variables and configuration files. They are separated between the **client** and the **frontend** application.

## External services

_HuddleUp_ depends on two external services: A provider for the video conference functionality, and an identity provider which is used for user authentication.

### Video conference provider

See section [Conference Providers](conference-providers.md)

### Identity provider

_HuddleUp_ supports any service that supports [OpenID Connect](https://openid.net/connect/) (OIDC). A commonly used provider is [Google](https://developers.google.com/identity/protocols/oauth2/openid-connect). If you want more control, you can use a service like [Auth0](https://auth0.com/authentication) which offers a generous offer, which should be enough for the expected user count of a _HuddleUp_ installation.

## Translations

_HuddleUp_ can support multiple languages. You can configure which language should be the default and which additional languages should be supported. The currently available languages and their language codes are:

- English (`en`)
- Deutsch (`de`)

## Reference

### Client Configuration

The configuration for the client should be placed as a `.env` file in the `config/client` folder. There is an `.env.example` file available for reference. Below is a list of available variables.

| Variable | Description | Default Value |
| -------- | ----------- | -------- |
| **Base options** | | |
| `REACT_APP_HOST` | **Required**. The base URL of the client (e.g. `https://huddle.huddle-up.org`) | -- |
| `REACT_APP_API_URI` | **Required**. The base URL of the backend (e.g. `https://api.huddle.huddle-up.org`) | -- |
| **Translations** | | |
| `REACT_APP_I18N_DEFAULT_LOCALE` | The default language used, specified with the language code (e.g. `de`) | `en` |
| `REACT_APP_I18N_AVAILABLE_LOCALES` | All languages used, specified as a comma-separated list (e.g. `"de,en"`). This **must** include the default language. | `"en"` |
| **OpenID Connect** | | |
| `REACT_APP_OIDC_CLIENT_ID` | **Required**. The id of your OIDC client. | -- |
| `REACT_APP_OIDC_CLIENT_SECRET` | **Required**. The secret of your OIDC client. | -- |
| `REACT_APP_OIDC_ISSUER` | **Required**. The domain of the issuer (e.g. `huddle-up.eu.auth0.com`) | -- |
| `REACT_APP_OIDC_REDIRECT_URI` | **Required**. The URL where the Identity Provider should redirect users to on successfull login. This should **always** include the path `/login/callback` (e.g. `https://huddle.huddle-up.org/login/callback`) | -- |
| `REACT_APP_OIDC_SCOPE` | The scope requested from the OIDC provider. If specified, it **must** at least include `openid email profile` | `openid email profile` |
| `REACT_APP_OIDC_PROVIDER_NAME` | **Required**. The name used to display to the user at login. This will be used in a sentence like 'Login with NAME' | -- |
| `REACT_APP_OIDC_PROVIDER_ICON` | The icon used to display at login. Can be one of the following values: `email`, `facebook`, `github` and `account`. | `account` |
| **Meetings** | | |
| `REACT_APP_RULES_MAXIMUM_PARTICIPANTS` | The default value for the maximum amount of users in a meeting. | `10` |

### Backend Configuration

The configuration for the backend should be placed as a `.env` file in the `config/api` folder. There is an `.env.example` file available for reference. Below is a list of available variables.

For video conference provider specific variables, see the [provider section](conference-providers.md)

| Variable | Description | Default Value |
| -------- | ----------- | -------- |
| **Base options** | | |
| `HU_PORT` | The port that the backend should listen on. | `4000` |
| `HU_LOG_DIR` | The location where errors should be logged to. If you specify a custom log directory, make sure it exists and is writeable by the system user running the backend. | `appdirectory/logs` |
| **Database** | | |
| `HU_DB_USERNAME` | **Required**. The database username | -- |
| `HU_DB_PASSWORD` | **Required**. The password of the database user | -- |
| `HU_DB_DATABASE` | **Required**. The name of the database | -- |
| `HU_DB_HOST` | **Required**. The hostname of the database | -- |
| `HU_DB_PORT` | **Required**. The port of the database | -- |
| `HU_DB_SYNCHRONIZE` | Whether the database should be synchronized automatically instead of migrations. **Important**: This option should only be used during development and _not_ in production. | `false` |
| **Authentication** | | |
| `HU_AUTH_SECRET` | **Required**. The secret used to sign the internal JWT tokens. Make sure the secret is complex enough. | -- |
| `HU_AUTH_OIDC_ISSUER_DOMAIN` | **Required**. The domain of the OIDC issuer (e.g. `huddle-up.eu.auth0.com`). This is required to verify identity tokens. | -- |
| `HU_AUTH_OIDC_AUDIENCE` | **Required**. This identical to the `REACT_APP_OIDC_CLIENT_ID` of the frontend and required to verify identity tokens. | -- |
| **Meetings** | | |
| `HU_MEETINGS_PREPARATION_TIME` | The number of minutes before a meeting starts, that the host is allowed to create the conference. | `10` |
