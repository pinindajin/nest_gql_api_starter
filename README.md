<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).

# Development Log

## Initial Nest App
Ran ```nest new <app-name>```

## Prisma Local
Followed instructions at https://www.prisma.io/docs/1.34/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/ to get local prisma set up (with postgres). Followed through step 6.

To get prisma and postgres up ```docker-compose up -d``` in the prisma dir of the project root

Ran ```prisma deploy``` to create the model in the datamodel.prisma in postgres

## Integrating Prisma with Nestjs
Following instructions at https://docs.nestjs.com/recipes/prisma

Installed graphql-cli ```npm install -g graphql-cli```

Created a graphql config file ```touch .graphqlconfig.yml // put this in root dir of project```

Download Prisma GraphQL schema to src ```graphql get-schema --project database```. The docs say this creates a *prisma/prisma-types.graphql* file, but it actually creates a *src/prisma/datamodel.graphql* file.

NOTE had to make change to the graphqlconfig.yml - changed to 

```
projects:
  database:
    schemaPath: src/prisma/datamodel.graphql
    extensions:
      endpoints:
        default: http://localhost:4466
      codegen:
        - generator: prisma-binding
          language: typescript
          output:
            binding: src/prisma/prisma.binding.ts
  ```

Generate Prisma client ```graphql codegen --project database```. Nest Docs say this creates a *prisma/prisma.binding.graphql* file but it actually creates a *src/prisma/prisma.binding.ts* file.

## GraphQL NestJs API Part

Following https://docs.nestjs.com/graphql/quick-start

Install required tools ```npm i --save @nestjs/graphql apollo-server-express graphql-tools graphql```

Import GraphQLModule using forRoot in the app module ```imports: [GraphQLModule.forRoot({})],```

Follow instructions for schema first building our argument to GraphQLModule. Final GraphQLModule looks like this
```
const graphQLDefinitionsFactory = new GraphQLDefinitionsFactory();
graphQLDefinitionsFactory.generate({
  typePaths: ['./**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  // watch: true,
});
```
This exists in a different script that when run generates typings.

You end up with a scaled down GraphQLModule import for now
```
imports: [GraphQLModule.forRoot({
  typePaths: ['./**/*.graphql'],
})],
```

Running ```ts-node generate-typings``` generates your typings.


## IMPORTANT DOCS
- Prisma Deploy https://www.prisma.io/docs/prisma-cli-and-configuration/cli-command-reference/prisma-deploy-xcv9/
- Prisma Admin http://localhost:4466/_admin