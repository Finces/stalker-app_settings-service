import 'reflect-metadata';
import 'dotenv/config';
import Container from 'typedi';
import { App } from './app/app';

const app = Container.get(App);

(async () => {
  await app.init();

  app.start();

  console.log('App started');
})();
