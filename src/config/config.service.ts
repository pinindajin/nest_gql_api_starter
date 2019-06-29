import * as dotenv from 'dotenv';
import * as fs from 'fs';

export enum ConfigKeyEnum {
  PORT = 'PORT',
  GITHUB_OAUTH_CLIENT_SECRET = 'GITHUB_OAUTH_CLIENT_SECRET',
  GITHUB_OAUTH_CLIENT_ID = 'GITHUB_OAUTH_CLIENT_ID',
}

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  get(key: ConfigKeyEnum): string {
    return this.envConfig[key];
  }
}
