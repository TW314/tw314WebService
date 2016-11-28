module.exports = app => {

    const controllers = app.controllers.atendimento.atendimentoController;

    app.route("/atendimento/")
        .get((req, res) => {
            controllers.obterAtendimento(app, resp => {
                res.json(resp)
            })
        })
        .post((req, res) => {
            controllers.cadastraAtendimento(req.body, req.params, app, resp => {
                res.json(resp)
            })
        });

    app.route("/atendimento/:id")
        .get((req, res) => {
            controllers.obterAtendimentoPorId(app, req.params.id, resp => {
                res.json(resp)
            })
        })
        .put((req, res) => {
            controllers.atualizaAtendimento(req.body, req.params.id, app, resp => {
                res.json(resp)
            })
        });
};
