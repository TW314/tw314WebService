import bodyParser from "body-parser"

module.exports = app => {

    const config = app.libs.config;

    app.set("port", 3000);
    app.set("json spaces", 4); //Retorna JSON tabulado de forma amigavel
    app.set('superSecret', config.secret);
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
};
