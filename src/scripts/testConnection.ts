import DatabaseConnectionManager from "../database";

DatabaseConnectionManager.connect()
    .then(() => {
        console.info("データベースへの接続に成功しました！");
    })
    .catch((err) => {
        console.error(err);
        console.error("データベースに接続できませんでした…設定を確認してください");
    });