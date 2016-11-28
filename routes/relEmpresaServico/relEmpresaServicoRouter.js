import stormpath from 'express-stormpath'

module.exports = app => {

    const controllers = app.controllers.relEmpresaServico.relEmpresaServicoController;

    app.route("/servicos_empresa")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterRelacionamentoEmpresaServico(app, resp => {
                res.json(resp)
            })
        })
        .post(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.cadastraRelacionamentoEmpresaServico(req.body, req.params, app, resp => {
                res.json(resp)
            })
        });

    app.route("/servicos_empresa/:empresa")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterServicoPorEmpresa(app, req.params.empresa, resp => {
                res.json(resp)
            })
        })
        .put(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.atualizaServico(req.body, req.params.id, app, resp => {
                res.json(resp)
            })
        });

    app.route("/servicos_empresa/:empresa&:servico")
        .delete(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.apagarRelacionamentoEmpresaServico(app, req.params.empresa, req.params.servico, resp => {
                res.json(resp)
            })
        })
};
