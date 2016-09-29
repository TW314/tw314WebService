import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

let db = null;

module.exports = app => {
    if (!db) {
        const config = app.libs.config; //utilizando as configuracoes de banco
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );
        db = {
            sequelize,
            Sequelize,
            models: {}
        };
        const dir = path.join(__dirname, "models");
        fs.readdirSync(dir).forEach(file => { //retorna um array de strings referente aos arquivos do models
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir); //carregando os models
            db.models[model.name] = model; //inserindo dentro da estrutura db.models
        });
        Object.keys(db.models).forEach(key => { //garante relacionamento correto entre os models 
            db.models[key].associate(db.models);
        });
    }
    return db;
};
