import stormpath from 'express-stormpath'
module.exports = app => {

    const controllers = app.controllers.ramoAtividade.ramoAtividadeController;

    app.route("/ramoAtividade")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterRamoAtividadeOrdenadoPorNome(app, resp => {
                res.json(resp)
            });
        })
        .post(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.cadastraRamoAtividade(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });

    app.route("/ramoAtividade/:id")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterRamoAtividadePorId(app, req.params.id, resp => {
                res.json(resp)
            });
        })
        .put(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.atualizaRamoAtividade(req.body, req.params.id, app, resp => {
                res.json(resp)
            });
        });

    app.route("/ramoAtividade/contagem/servico/")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterContagemServicoRamoAtividade(app, resp => {
                res.json(resp)
            });
        });

    app.route("/ramoAtividade/contagem/empresa/")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterContagemEmpresaRamoAtividade(app, resp => {
                res.json(resp)
            });
        })
};
