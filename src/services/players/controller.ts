import { Router, Request, Response, NextFunction } from "express";
import BaseController from "../common/controller";

class PlayerController extends BaseController {
    public path: string = "/api/baseball/players";
    public router: Router;
  

    constructor() {
      super();
      this.router = this.createRouter();
    }
  
    protected createRouter(): Router {
      const router = Router();
  
      router.get("/:familyName",this.get);
  
      return router;
    }
  
    protected get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        
        res.status(200).end();
      
    };
  }
  
  export default PlayerController;
  