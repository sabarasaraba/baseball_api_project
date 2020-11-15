import { Router, Request, Response, NextFunction } from "express";
import BaseController from "../common/controller";
import PlayerManager from "./manager";

class PlayerController extends BaseController {
    public path: string = "/api/baseball/players";
    public router: Router;

    protected manager: PlayerManager;

    constructor() {
      super();
      this.router = this.createRouter();
      this.manager = new PlayerManager();
    }
  
    protected createRouter(): Router {
      const router = Router();
  
      router.get("/:familyName",this.get);
  
      return router;
    }
  
    protected get = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { familyName } = req.params;
        const player = await this.manager.getPlayer(familyName);
        if (!player) {
          res.status(404).send({ error: "player not found" });
          return;
        }

        res.status(200).send(player);
      
    };
  }
  
  export default PlayerController;
  