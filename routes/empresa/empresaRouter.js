import stormpath from 'express-stormpath'

module.exports = app => {

    const controllers = app.controllers.empresa.empresaController;

    app.route("/empresa")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterEmpresaOrdenadoPorRazaoSocial(app, resp => {
                res.json(resp)
            });
        })
        .post(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.cadastraEmpresa(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });


    app.route("/empresa/:id")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterEmpresaPorId(app, req.params.id, resp => {
                res.json(resp)
            });
        })
        .put(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.atualizaEmpresa(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });


    app.route("/empresa/cnpj/:cnpj")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterEmpresaPorCNPJ(app, req.params.cnpj, resp => {
                res.json(resp)
            });
        })
        .put(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.atualizaEmpresa(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });
};
