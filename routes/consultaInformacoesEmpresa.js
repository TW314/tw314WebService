module.exports = app => {

    const controllers = app.controllers.consultaInformacoesEmpresaController;

    app.route("/consultaInformacoesEmpresa/")
        .get((req, res) => {
            controllers.list(app, resp => {
                res.json(resp)
            });
        });

    app.route("/consultaInformacoesEmpresa/:id")
        .get((req, res) => {
            controllers.empresa(app, req.params.id, resp => {
                res.json(resp)
            });
        });
};
