import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService, ConfigKeyEnum } from '../config/config.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly configService: ConfigService) {}

  @Get('google')
    @UseGuards(AuthGuard('google'))
    googleLogin() {
        // initiates the Google OAuth2 login flow
    }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleLoginCallback(@Req() req, @Res() res) {
        // handles the Google OAuth2 callback
        const jwt: string = req.user.jwt;
        if (jwt)
            res.redirect(`${this.configService.get(ConfigKeyEnum.LOGIN_SUCCESS_URL)}/${jwt}`);
        else
            res.redirect(this.configService.get(ConfigKeyEnum.LOGIN_FAILURE_URL));
    }
}
