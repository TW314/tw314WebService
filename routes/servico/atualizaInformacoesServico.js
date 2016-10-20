module.exports = app => {

    const controllers = app.controllers.servico.atualizaInformacoesServicoController;

    app.route("/atualizaInformacoesServico/:id")
        .put((req, res) => {
            controllers.atualizaInformacoesServico(req.body, req.params, app, resp => {
                res.json(resp)
            });
        })
};
