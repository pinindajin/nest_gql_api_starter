import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy/google.strategy';
import { ConfigModule } from '../config/config.module';

@Module({
  providers: [AuthService, GoogleStrategy],
  controllers: [AuthController],
  imports: [ConfigModule],
})
export class AuthModule {}
