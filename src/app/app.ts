import express, { Express } from 'express';
import { useContainer, useExpressServer } from 'routing-controllers';
import Container, { Service } from 'typedi';
import { appConfig } from './config/app.config';
import { PrismaClient } from '@prisma/client';
import path from 'path';

@Service()
export class App {
  private readonly appInstance: Express;

  constructor() {
    this.appInstance = express();
  }

  async init(): Promise<void> {
    useContainer(Container);

    useExpressServer(
      this.appInstance,
      {
        controllers: [
          path.join(`${__dirname}/**/*.controller{.ts,.js}`)
        ],
        middlewares: [],
        validation: true,
        classTransformer: true,
        routePrefix: '/api',
      },
    );

    const prismaClient = new PrismaClient();
    Container.set(PrismaClient, prismaClient);
  }

  start(): void {
    this.appInstance.listen(appConfig.port);
  }
}
