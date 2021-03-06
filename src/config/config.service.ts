import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from '@hapi/joi';

export enum ConfigKeyEnum {
  PORT = 'PORT',
  GITHUB_OAUTH_CLIENT_SECRET = 'GITHUB_OAUTH_CLIENT_SECRET',
  GITHUB_OAUTH_CLIENT_ID = 'GITHUB_OAUTH_CLIENT_ID',
  NODE_ENV = 'NODE_ENV',
}

export interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));

    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  get(key: ConfigKeyEnum): string {
    return this.envConfig[key];
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test', 'provision'])
        .default('development'),
      PORT: Joi.number().default(3030),
      GITHUB_OAUTH_CLIENT_ID: Joi.string().required(),
      GITHUB_OAUTH_CLIENT_SECRET: Joi.string().required(),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}
