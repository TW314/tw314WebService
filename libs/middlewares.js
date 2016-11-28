import bodyParser from "body-parser"
import stormpath from "express-stormpath"

module.exports = app => {
    app.set("port", 3000);
    app.set("json spaces", 4); //Retorna JSON tabulado de forma amigavel 
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
    app.use(stormpath.init(app, {
        application: {
            href: 'https://api.stormpath.com/v1/applications/4eWs5783xl2FRfTN9Xd3u7'
        }
        //,website: true
    }));
};
