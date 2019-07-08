import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { ConfigService, ConfigKeyEnum } from '../config/config.service';

export enum AuthProvider {
  GOOGLE = 'google',
}

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}

  async validateOAuthLogin(thirdPartyId: string, provider: AuthProvider): Promise<string> {
    try {
      // You can add some registration logic here,
      // to register the user using their thirdPartyId (in this case their googleId)
      // let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);

      // if (!user)
      // user = await this.usersService.registerOAuthUser(thirdPartyId, provider);

      const payload = {
        thirdPartyId,
        provider,
      };

      const jwtSecretKey = this.configService.get(ConfigKeyEnum.JWT_SECRET_KEY);

      const jwt: string = sign(payload, jwtSecretKey, { expiresIn: 3600 });
      return jwt;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }

}
