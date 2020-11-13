const express = require("express");

const setupServer = () => {
    const app = express();
    app.use(express.json());

    app.get("/api/baseball/player/:name",(req,res) => {
        res.status(200).end();
    })

    return app;
}

module.exports = { setupServer };