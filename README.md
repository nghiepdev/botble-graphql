# BOTBLE-GRAPHQL

> The migration for [Botble](https://botble.toiyeulaptrinh.com) from Rest(Laravel) to GraphQL

## Prerequisites

- [NodeJS](https://nodejs.org)
- [Yarnpkg](https://yarnpkg.com)
- [Docker](https://docker.com)

## Getting started

_Only for development environnement_

```bash
$ yarn install
$ yarn dev
```

## Build Docker image

```bash
$ docker build --build-arg	APP_VERSION=1.0.0 -t nghiepit/botble-graphql:1.0.0 .
```

## Deploy Docker

```bash
$ docker run --restart=unless-stopped -p 4000:4000 -d nghiepit/botble-graphql:1.0.0
```

## License

[Nghiep] <me@nghiepit.dev>
