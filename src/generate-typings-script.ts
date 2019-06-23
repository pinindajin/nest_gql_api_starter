import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

/**
 * TODO: Figure out how to generate typings manually...
 * ...cannot use this script since the following...
 * ...property doesn't exist on argument type to...
 * ...generate.
 *
 * resolverValidationOptions: {
 *   requireResolversForResolveType: false,
 * },
 */
const graphQLDefinitionsFactory = new GraphQLDefinitionsFactory();
graphQLDefinitionsFactory.generate({
  typePaths: ['./**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.schema.d.ts'),
  outputAs: 'class',
  // watch: true,
});

// ts-node generate-typings
