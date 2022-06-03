import 'reflect-metadata';
import 'dotenv/config';
import Container from 'typedi';
import { App } from './app/App';

const app = Container.get(App);

(async () => {
  await app.init();

  await app.start();

  console.log('App started');
})();
