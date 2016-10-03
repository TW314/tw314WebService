module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => { //app.listen > funcao responsavel por iniciar o servidor 
            console.log('NTask API - porta ${app.get("port")}');
        });
    });
}
