import bodyParser from "body-parser"

module.exports = app => {
    app.set("port", 3000);
    app.set("json spaces", 4); //Retorna JSON tabulado de forma amigavel 
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
};
