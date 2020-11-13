import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import { Application } from "express";
import { getDefaultApp } from "../app";
import DatabaseConnectionManager from "../database";

chai.use(chaiHttp);

const expect = chai.expect;

describe("Baseball API Server", () =>{
    let app: Application;

    before(async () => {
        await DatabaseConnectionManager.connect();
        app = getDefaultApp().app;
    });

    describe("/api/baseball/players/:familyName", () =>{
        it("ファミリーネームを指定して該当する選手データを返す(Status:200)",async () => {
            const res = await chai.request(app).get(`/api/baseball/players/Ohtani`);
            expect(res).to.have.status(200);
        });
        it("ファミリーネームを指定して該当する選手データを返す(レスポンス確認)",async () => {
            // Setup
            // DBに確認用データを登録
            const expected = {};

            // Exercise
            const res = await chai.request(app).get(`/api/baseball/players/Ohtani`);

            // Assert
            expect(res.body).to.deep.equal(expected);

            // Teardown
            // 登録した確認用データを削除

        });
    });

});