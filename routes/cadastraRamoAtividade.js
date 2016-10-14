module.exports = app => {

    const controllers = app.controllers.cadastraRamoAtividadeController;

    app.route("/cadastraRamoAtividade") //middelware de pre-execucao das rotas
        .post((req, res) => {
            controllers.cadastraRamoAtividade(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });
};
