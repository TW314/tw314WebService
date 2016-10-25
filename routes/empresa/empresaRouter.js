exports.exports = app => {

    const controllers = app.controllers.empresa.empresaController;

    app.route("/empresa/")
        .get((req, res) => {
            controllers.obterEmpresaOrdenadoPorRazaoSocial(app, resp => {
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
            controllers.obterEmpresaPorId(app, req.params.id, resp => {
                res.json(resp)
            });
        })
        .put((req, res) => {
            controllers.atualizaEmpresa(req.body, req.params, app, resp => {
                res.json(resp)
            });
        })
};
