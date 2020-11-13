import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Player from '../entities/PlayerModel'

export default class CreatePlayers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //JSONファイルからシード元データを読み込み
        const playersObject = require('./players.json');
        //シードデータを登録
        await connection
            .createQueryBuilder()
            .insert()
            .into(Player)
            .values([
                {   playerID:playersObject[0].playerID,
                    birthYear:playersObject[0].birthYear,
                    birthMonth:playersObject[0].birthMonth,
                    birthDay:playersObject[0].birthDay,
                    birthCountry:playersObject[0].birthCountry,
                    birthState:playersObject[0].birthState,
                    birthCity:playersObject[0].birthCity,
                    deathYear:playersObject[0].deathYear,
                    deathMonth:playersObject[0].deathMonth,
                    deathDay:playersObject[0].deathDay,
                    deathCountry:playersObject[0].deathCountry,
                    deathState:playersObject[0].deathState,
                    deathCity:playersObject[0].deathCity,
                    nameFirst:playersObject[0].nameFirst,
                    nameLast:playersObject[0].nameLast,
                    nameGiven:playersObject[0].nameGiven,
                    weight:playersObject[0].weight,
                    height:playersObject[0].height,
                    bats:playersObject[0].bats,
                    throws:playersObject[0].throws,
                    debut:playersObject[0].debut,
                    finalGame:playersObject[0].finalGame,
                    retroID:playersObject[0].retroID,
                    bbrefID:playersObject[0].bbrefID
                }
            ])
            .execute();
    }
}