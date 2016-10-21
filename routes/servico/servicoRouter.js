module.exports = app => {

    const controllers = app.controllers.servico.consultaInformacoesServicoController;

    app.route("/servico/")
        .get((req, res) => {
            controllers.obterServicoOrdenadoPorNome(app, resp => {
                res.json(resp)
            })
        })
        .post((req, res) => {
            controllers.cadastraServico(req.body, req.params, app, resp => {
                res.json(resp)
            })
        });

    app.route("/servico/:id")
        .get((req, res) => {
            controllers.obterServicoPorId(app, req.params.id, resp => {
                res.json(resp)
            })
        })
        .put((req, res) => {
            controllers.atualizaServico(req.body, req.params, app, resp => {
                res.json(resp)
            })
        });
};
