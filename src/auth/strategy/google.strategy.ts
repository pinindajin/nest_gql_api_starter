import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { ConfigKeyEnum, ConfigService } from '../../config/config.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor(private readonly congigService: ConfigService) {
    super({
      clientID: congigService.get(ConfigKeyEnum.GOOGLE_OAUTH_CLIENT_ID),     // <- Replace this with your client id
      clientSecret: congigService.get(ConfigKeyEnum.GOOGLE_OAUTH_CLIENT_SECRET), // <- Replace this with your client secret
      callbackURL: 'http://localhost:3000/auth/google/callback',
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
