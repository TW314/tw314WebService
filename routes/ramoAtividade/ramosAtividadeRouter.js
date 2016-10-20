module.exports = app => {

    const controllers = app.controllers.ramoAtividade.consultaInformacoesRamosAtividadeController;

    app.route("/ramoAtividade/")
        .get((req, res) => {
            controllers.list(app, resp => {
                res.json(resp)
            });
        })
        .post((req, res) => {
        controllers.cadastraRamoAtividade(req.body, req.params, app, resp => {
            res.json(resp)
        });
    });

    app.route("/ramoAtividade/:id")
        .get((req, res) => {
            controllers.ramoAtividade(app, req.params.id, resp => {
                res.json(resp)
            });
        })
        .put((req, res) => {
        controllers.atualizaInformacoesRamoAtividade(req.body, req.params, app, resp => {
            res.json(resp)
        });
    })
};
