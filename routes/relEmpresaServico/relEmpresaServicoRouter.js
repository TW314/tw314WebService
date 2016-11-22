module.exports = app => {

    const controllers = app.controllers.relEmpresaServico.relEmpresaServicoController;

    app.route("/servicos_empresa")
        .get((req, res) => {
            controllers.obterRelacionamentoEmpresaServico(app, resp => {
                res.json(resp)
            })
        })
        .post((req, res) => {
            controllers.cadastraRelacionamentoEmpresaServico(req.body, req.params, app, resp => {
                res.json(resp)
            })
        });

    app.route("/servicos_empresa/:empresa")
        .get((req, res) => {
            controllers.obterServicoPorEmpresa(app, req.params.empresa, resp => {
                res.json(resp)
            })
        })
        .put((req, res) => {
            controllers.atualizaServico(req.body, req.params.id, app, resp => {
                res.json(resp)
            })
        });

    app.route("/servicos_empresa/:empresa&:servico")
        .delete((req, res) => {
            controllers.apagarRelacionamentoEmpresaServico(app, req.params.empresa, req.params.servico, resp => {
                res.json(resp)
            })
        })
};
