import express, { Application } from "express";
import BaseController from "./services/common/controller";
import PlayerController from "./services/players/controller";

class App {
    /* Constants, default config */
    public static readonly DEFAULT_PORT: number = 9000;
  
    /* Instance properties */
    public readonly app: Application;
    public readonly port: number;
  
    protected postStartHook: () => void;
  
    constructor({services}) {
      this.app = express();
  
      this.port = App.DEFAULT_PORT;

      this.registerServices(services);
  
      this.postStartHook = () => {
        console.log(`App listening on localhost:${this.port}`);
      };
    }
  
    public start(): void {
      this.app.listen(/* Port number */ this.port, /* Callback */ this.postStartHook);
    }

    protected registerServices(services: BaseController[]) :void {
        services.forEach((_service) => this.app.use(_service.path, _service.router))
    }
}
  
export function getDefaultApp() {
    return new App({
        services: [
            new PlayerController()
        ]
    });
  }
  
  export default App;