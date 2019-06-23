import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const graphQLDefinitionsFactory = new GraphQLDefinitionsFactory();
graphQLDefinitionsFactory.generate({
  typePaths: ['./**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.schema.d.ts'),
  outputAs: 'class',
  // watch: true,
});

// ts-node generate-typings
