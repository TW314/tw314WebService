import express from "express"
import consign from "consign"

const app = express();

consign() //modulo que permite carregar e injetar deṕendencias
    .include("libs/config.js") //carregando as configuracoes do banco
    .then("db.js") //carregando o db.js (a conexao com o banco)
    .then("libs/middlewares.js")
    .then("controllers")
    .then("routes") //carregando as rotas no modulo consign
    .then("libs/boot.js") //carregando boot.js
    .into(app);
