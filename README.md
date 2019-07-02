## Getting Started
```
npm install
cd prisma && docker-compose up -d
prisma deploy
npm run start
```

## Adding a new model
- Add new model to datamodel.prisma
- Run ```prisma/sync-new-model.sh``` from project root
- Write module and resolvers for new models and import them in app.module

## Config
- Create **.env** file based on options in **.env.example** file.
Note: defaults and validations defined in **validateInput** method in **src/config/config.service.ts**.
