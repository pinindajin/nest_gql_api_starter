import { PassportStrategy } from '@nestjs/passport';
import { Strategy as PassportGoogleOauth20Strategy } from 'passport-google-oauth20';
import { ConfigKeyEnum, ConfigService } from '../../config/config.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(PassportGoogleOauth20Strategy, 'google') {

  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get(ConfigKeyEnum.GOOGLE_OAUTH_CLIENT_ID),     // <- Replace this with your client id
      clientSecret: configService.get(ConfigKeyEnum.GOOGLE_OAUTH_CLIENT_SECRET), // <- Replace this with your client secret
      callbackURL: configService.get(ConfigKeyEnum.GOOGLE_OAUTH_CALLBACK_URL),
      passReqToCallback: true,
      scope: ['profile'],
    });
  }

  async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function) {
    try {
      console.log(profile);

      const jwt: string = 'placeholderJWT';
      const user = {
        jwt,
      };

      done(null, user);
    } catch (err) {
      // console.log(err)
      done(err, false);
    }
  }
}
