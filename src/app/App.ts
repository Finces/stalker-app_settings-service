import express, { Express } from 'express';
import { useContainer, useExpressServer } from 'routing-controllers';
import Container, { Service } from 'typedi';
import { appConfig } from './config/app.config';

@Service()
export class App {
  private readonly appInstance: Express;

  constructor(
    appInstance = express(),
  ) {
    this.appInstance = appInstance;
  }

  async init(): Promise<void> {
    useContainer(Container);

    useExpressServer(
      this.appInstance,
      {
        controllers: [],
        middlewares: [],
        validation: true,
        classTransformer: true,
        routePrefix: '/api',
      },
    );
  }

  async start(): Promise<void> {
    this.appInstance.listen(appConfig.port);
  }
}
