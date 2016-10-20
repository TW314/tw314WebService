exports.exports = app => {

    const controllers = app.controllers.empresa.consultaInformacoesEmpresaController;

    app.route("/empresa/")
        .get((req, res) => {
            controllers.list(app, resp => {
                res.json(resp)
            });
        })
        .post((req, res) => {
            controllers.cadastraEmpresa(req.body, req.params, app, resp => {
                res.json(resp)
            });
        })


    app.route("/empresa/:id")
        .get((req, res) => {
            controllers.empresa(app, req.params.id, resp => {
                res.json(resp)
            });
        })
        .put((req, res) => {
            controllers.atualizaInformacoesEmpresa(req.body, req.params, app, resp => {
                res.json(resp)
            });
        })
};
