module.exports = app => {

    const controllers = app.controllers.cadastraUsuarioController;

    app.route("/cadastraUsuario") //middelware de pre-execucao das rotas
        .post((req, res) => {
            controllers.cadastraUsuario(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });
};
