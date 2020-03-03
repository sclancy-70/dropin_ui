# hyperwallet_payee_verification

## Project Dependencies
nodejs: v12.x.x
yarn: v1.x.x

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build:prod
```

### Lints and fixes files
```
yarn lint
```

### Local Development
Run within Docker to start a local API. The application listens on port 8080.
Don't forget to load your 
```
docker build -t dropin-ui-app:dev .
docker run --env-file .env -it --rm -p5000:8080 dropin-ui-app:dev
```
You will then be able to access the app at http://localhost:5000/

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Environment variables <a name="env-vars"></a>
| Name | Description | Default |
|---|---|---|
| VUE_APP_AUTH_API_URL | Auth API to contact for Hyperwallet Auth token | `null`|
| VUE_APP_PAYEE_VERIFY_API_URL | Hyperwallet API URL | `null` |
| VUE_APP_PAYEE_VERIFY_API_VER | Hyperwallet client JS library version | v2_3_0 |
| VUE_APP_PAYEE_VERIFY_USER_TOKEN | Pre-generated User token to use when interacting with Hyperwallet | `null` |
| VUE_APP_PAYEE_VERIFY_API_LANGUAGE | Drop-In UI language | en |

### Environment files

Please place values from [Environment Variables](#env-vars) section within the env files.

| Path | Purpose |
|---|---|
|.env.local | Loaded for local development when running `yarn serve` |
|.env.production.local | Loaded for production build when running `yarn build:prod` |