module.exports = app => {

    const controllers = app.controllers.ramoAtividade.ramoAtividadeController;

    app.route("/ramoAtividade")
        .get((req, res) => {
            controllers.obterRamoAtividadeOrdenadoPorNome(app, req.params.id, resp => {
                res.json(resp)
            });
        })
        .post((req, res) => {
            controllers.cadastraRamoAtividade(req.body, req.params, app, resp => {
                res.json(resp)
            });
        })

    app.route("/ramoAtividade/:id")
        .get((req, res) => {
            controllers.obterRamoAtividadePorId(app, req.params.id, resp => {
                res.json(resp)
            });
        })
        .put((req, res) => {
            controllers.atualizaRamoAtividade(req.body, req.params, app, resp => {
                res.json(resp)
            });
        })

    app.route("/contagemServicoRamoAtividade")
        .get((req, res) => {
            controllers.obterContagemServicoRamoAtividade(app, resp => {
                res.json(resp)
            });
        })

    app.route("/contagemEmpresaRamoAtividade")
        .get((req, res) => {
            controllers.obterContagemEmpresaRamoAtividade(app, resp => {
                res.json(resp)
            });
        })
};
