import { PassportStrategy } from '@nestjs/passport';
import { Strategy as PassportGoogleOauth20Strategy } from 'passport-google-oauth20';
import { ConfigKeyEnum, ConfigService } from '../../config/config.service';
import { Injectable } from '@nestjs/common';
import { AuthService, AuthProvider } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(PassportGoogleOauth20Strategy, 'google') {

  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: configService.get(ConfigKeyEnum.GOOGLE_OAUTH_CLIENT_ID),
      clientSecret: configService.get(ConfigKeyEnum.GOOGLE_OAUTH_CLIENT_SECRET),
      callbackURL: configService.get(ConfigKeyEnum.GOOGLE_OAUTH_CALLBACK_URL),
      passReqToCallback: true,
      scope: ['profile'],
    });
  }

  async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function) {
    try {
      console.log(profile);

      const jwt: string = await this.authService.validateOAuthLogin(profile.id, AuthProvider.GOOGLE);
      const user = { jwt };

      done(null, user);
    } catch (err) {
      // console.log(err)
      done(err, false);
    }
  }
}
