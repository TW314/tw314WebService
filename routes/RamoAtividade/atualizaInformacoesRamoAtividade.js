module.exports = app => {

    const controllers = app.controllers.atualizaInformacoesRamoAtividadeController;

    app.route("/atualizaInformacoesRamoAtividade/:id")
        .put((req, res) => {
            controllers.atualizaInformacoesRamoAtividade(req.body, req.params, app, resp => {
                res.json(resp)
            });
        })
};
