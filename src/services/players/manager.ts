import { getRepository, Repository } from "typeorm";
import Player from "../../entities/PlayerModel";
import { IManager } from "../common/manager";

class PlayerManager implements IManager {
  protected playerRepository: Repository<Player>;

  constructor() {
    this.playerRepository = getRepository(Player);
  }

  /**
   * Get user by primary key
   *
   */
  public async getPlayer(familyName: string): Promise<Player> {
    return this.playerRepository.findOne({nameLast: familyName});
  }
}

export default PlayerManager;
