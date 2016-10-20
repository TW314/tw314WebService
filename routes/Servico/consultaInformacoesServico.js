module.exports = app => {

    const controllers = app.controllers.consultaInformacoesServicoController;

    app.route("/consultaInformacoesServico/")
        .get((req, res) => {
            controllers.list(app, resp => {
                res.json(resp)
            });
        });

    app.route("/consultaInformacoesServico/:id")
        .get((req, res) => {
            controllers.servico(app, req.params.id, resp => {
                res.json(resp)
            });
        });
};
