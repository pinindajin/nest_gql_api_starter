echo "INFO: Deploying Prisma model to server and db."
prisma deploy

echo "Generating graphql schema."
graphql get-schema --project database

echo "Generating project code for Prisma bindings."
graphql codegen --project database

echo "Generating Typescript type definitions for Prisma models."
ts-node ./src/graphql/generate-typings-script.ts

echo "Done. Be sure to add a module and resolver for your new model."
