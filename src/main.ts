import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService, ConfigKeyEnum } from './config/config.service';
import { AppServicesEnum } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(AppServicesEnum.CONFIG_SERVICE);
  await app.listen(config.get(ConfigKeyEnum.PORT));
}
bootstrap();
