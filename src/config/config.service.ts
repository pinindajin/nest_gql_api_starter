import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Joi } from '@hapi/joi';

export enum ConfigKeyEnum {
  PORT = 'PORT',
  GOOGLE_OAUTH_CLIENT_SECRET = 'GOOGLE_OAUTH_CLIENT_SECRET',
  GOOGLE_OAUTH_CLIENT_ID = 'GOOGLE_OAUTH_CLIENT_ID',
  GOOGLE_OAUTH_CALLBACK_URL = 'GOOGLE_OAUTH_CALLBACK_URL',
  LOGIN_SUCCESS_URL = 'LOGIN_SUCCESS_URL',
  LOGIN_FAILURE_URL = 'LOGIN_FAILURE_URL',
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
      GOOGLE_OAUTH_CLIENT_ID: Joi.string().required(),
      GOOGLE_OAUTH_CLIENT_SECRET: Joi.string().required(),
      GOOGLE_OAUTH_CALLBACK_URL: Joi.string().required(),
      LOGIN_SUCCESS_URL: Joi.string().required(),
      LOGIN_FAILURE_URL: Joi.string().required(),
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
