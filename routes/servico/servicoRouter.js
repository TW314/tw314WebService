import stormpath from 'express-stormpath'

module.exports = app => {

    const controllers = app.controllers.servico.servicoController;

    app.route("/servico/")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterServicoOrdenadoPorNome(app, resp => {
                res.json(resp)
            })
        })
        .post(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.cadastraServico(req.body, req.params, app, resp => {
                res.json(resp)
            })
        });

    app.route("/servico/:id")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterServicoPorId(app, req.params.id, resp => {
                res.json(resp)
            })
        })
        .put(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.atualizaServico(req.body, req.params.id, app, resp => {
                res.json(resp)
            })
        });
};
