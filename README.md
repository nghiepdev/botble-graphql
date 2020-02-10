# BOTBLE-GRAPHQL

[![](https://img.shields.io/docker/pulls/nghiepit/botble-graphql?label=botble-graphql&style=flat-square)](https://hub.docker.com/r/nghiepit/botble-graphql)
[![](https://images.microbadger.com/badges/version/nghiepit/botble-graphql.svg)](https://hub.docker.com/r/nghiepit/botble-graphql)

> The migration for [Botble](https://botble.toiyeulaptrinh.com) from Rest(Laravel) to GraphQL
>
> GraphQL Playground: https://botble-graphql.toiyeulaptrinh.com
>
> Frontend Demo: https://graphql-next.toiyeulaptrinh.com

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
$ docker build --build-arg APP_VERSION=0.0.1 -t nghiepit/botble-graphql:0.0.1 .
```

## Deploy Docker

```bash
$ docker run --restart=unless-stopped -p 4000:4000 -d nghiepit/botble-graphql:0.0.1
```

## License

[Nghiep] <me@nghiepit.dev>
