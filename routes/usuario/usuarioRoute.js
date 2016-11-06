module.exports = app => {

    const controllers = app.controllers.usuario.usuarioController;

    app.route("/usuario/perfil/:empresa&:id")
        .get((req, res) => {
            controllers.obterUsuarioPorPerfil(app, req.params.id, req.params.empresa, resp => {
                res.json(resp)
            });
        });

    app.route("/usuario/:id")
        .get((req, res) => {
            controllers.obterUsuarioPorId(app, req.params.id, resp => {
                res.json(resp)
            });
        })
        .put((req, res) => {
            controllers.atualizaUsuario(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });

    app.route("/usuario") //middelware de pre-execucao das rotas
        .post((req, res) => {
            controllers.cadastraUsuario(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });
};
