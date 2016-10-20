module.exports = app => {

    const controllers = app.controllers.empresa.atualizaInformacoesEmpresaController;

    app.route("/atualizaInformacoesEmpresa/:id")
        .put((req, res) => {
            controllers.atualizaInformacoesEmpresa(req.body, req.params, app, resp => {
                res.json(resp)
            });
        })
};
