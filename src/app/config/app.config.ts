import { AppConfig } from './app.config.interface';

export const appConfig: AppConfig = {
  port: Number(process.env.PORT) || 3000,
};
