import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy/google.strategy';
import { ConfigModule } from '../config/config.module';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  providers: [
    AuthService,
    GoogleStrategy,
    JwtStrategy,
  ],
  controllers: [AuthController],
  imports: [ConfigModule],
})
export class AuthModule {}
