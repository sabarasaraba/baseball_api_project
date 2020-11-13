import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import { Application } from "express";
import { getDefaultApp } from "../app";
import DatabaseConnectionManager from "../database";
import { getRepository, Repository, Connection, createConnection, createQueryBuilder,getManager } from 'typeorm';
import Player from '../entities/PlayerModel'

chai.use(chaiHttp);

const expect = chai.expect;

describe("Baseball API Server", () =>{
    let app: Application;
    let playerRepo: Repository<Player>;

    before(async () => {
        await DatabaseConnectionManager.connect();
        app = getDefaultApp().app;
        playerRepo = getRepository(Player);
    });

    describe("/api/baseball/players/:familyName", () =>{
        it("ファミリーネームを指定して該当する選手データを返す(Status:200)",async () => {
            const res = await chai.request(app).get(`/api/baseball/players/Ohtani`);
            expect(res).to.have.status(200);
        });
        it("ファミリーネームを指定して該当する選手データを返す(レスポンス確認)",async () => {
            // Setup
            // DBに確認用データを登録
            const expected = {
                // playerID:"ohtansh01",
                birthYear:1994,
                birthMonth:7,
                birthDay:5,
                birthCountry:"Japan",
                birthState:"Iwate",
                birthCity:"Oshu",
                deathYear:null,
                deathMonth:null,
                deathDay:null,
                deathCountry:"",
                deathState:"",
                deathCity:"",
                nameFirst:"Shohei",
                nameLast:"Ohtani",
                nameGiven:"Shohei",
                weight:210,
                height:76,
                bats:"L",
                throws:"R",
                debut:"2018/3/29",
                finalGame:"2020/9/27",
                retroID:"ohtas001",
                bbrefID:"ohtansh01"
            };

            // DBに直接データをInsert
            let ohtani = new Player();
            // ohtani.playerID = expected.playerID
            ohtani.birthYear = expected.birthYear
            ohtani.birthMonth = expected.birthMonth
            ohtani.birthDay = expected.birthDay
            ohtani.birthCountry = expected.birthCountry
            ohtani.birthState = expected.birthState
            ohtani.birthCity = expected.birthCity
            ohtani.deathYear = expected.deathYear
            ohtani.deathMonth = expected.deathMonth
            ohtani.deathDay = expected.deathDay
            ohtani.deathCountry = expected.deathCountry
            ohtani.deathState = expected.deathState
            ohtani.deathCity = expected.deathCity
            ohtani.nameFirst = expected.nameFirst
            ohtani.nameLast = expected.nameLast
            ohtani.nameGiven = expected.nameGiven
            ohtani.weight = expected.weight
            ohtani.height = expected.height
            ohtani.bats = expected.bats
            ohtani.throws = expected.throws
            // ohtani.debut = expected.debut
            // ohtani.finalGame = expected.finalGame
            ohtani.retroID = expected.retroID
            ohtani.bbrefID = expected.bbrefID

            ohtani = await playerRepo.save(ohtani);
            

            // Exercise
            const res = await chai.request(app).get(`/api/baseball/players/Ohtani`);

            // Assert
            expect(res.body).to.deep.equal(expected);

            // Teardown
            // 登録した確認用データを削除

        });
    });

});