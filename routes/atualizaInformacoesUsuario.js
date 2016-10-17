module.exports = app => {

    const controllers = app.controllers.atualizaInformacoesUsuarioController;

    app.route("/atualizaInformacoesUsuario/:id")
        .put((req, res) => {
            controllers.atualizaInformacoesUsuario(req.body, req.params, app, resp => {
                res.json(resp)
            });
        })
};
