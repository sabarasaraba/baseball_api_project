const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");

describe("Baseball API Server", () =>{
    let request;
    const server = setupServer();
    beforeEach(() => {
        request = chai.request(server);
    });

    describe("/api/baseball/player/:familyName", () =>{
        it("ファミリーネームを指定して該当する選手データを返す(Status:200)",function(done) {
            const expected = 200;
            request.get("/api/baseball/player/Ohtani").end(function(err, res) {
                if (err) console.error(err);
                expect(res).to.have.status(expected);
                done();
            });
        });
    });
});


