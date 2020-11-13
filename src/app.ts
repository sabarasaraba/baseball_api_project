import express, { Application } from "express";

class App {
    /* Constants, default config */
    public static readonly DEFAULT_PORT: number = 9000;
  
    /* Instance properties */
    public readonly app: Application;
    public readonly port: number;
  
    protected postStartHook: () => void;
  
    constructor() {
      this.app = express();
  
      this.port = App.DEFAULT_PORT;
  
      this.postStartHook = () => {
        console.log(`App listening on localhost:${this.port}`);
      };
    }
  
    public start(): void {
      this.app.listen(/* Port number */ this.port, /* Callback */ this.postStartHook);
    }
  }
  
export function getDefaultApp() {
    return new App();
  }
  
  export default App;