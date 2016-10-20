module.exports = app => {

    const controllers = app.controllers.consultaInformacoesUsuarioPorIdController;

    app.route("/consultaInformacoesUsuarioPorId/:id")
        .get((req, res) => {
            controllers.usuario(app, req.params.id, resp => {
                res.json(resp)
            });
        });
};
