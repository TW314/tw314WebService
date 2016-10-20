module.exports = app => {

    const controllers = app.controllers.consultaInformacoesRamosAtividadeController;

    app.route("/consultaInformacoesRamoAtividade/")
        .get((req, res) => {
            controllers.list(app, resp => {
                res.json(resp)
            });
        });

    app.route("/consultaInformacoesRamoAtividade/:id")
        .get((req, res) => {
            controllers.ramoAtividade(app, req.params.id, resp => {
                res.json(resp)
            });
        });
};
