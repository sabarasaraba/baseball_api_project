import App, { getDefaultApp } from "./app";
import DatabaseConnectionManager from "./database";

DatabaseConnectionManager.connect().then(() => {
  const app: App = getDefaultApp();
  app.start();
});
