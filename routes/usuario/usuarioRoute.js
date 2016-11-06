module.exports = app => {

    const controllers = app.controllers.usuario.usuarioController;

    app.route("/usuario/empresa/:empresa&:perfil")
        .get((req, res) => {
            controllers.obterUsuarioPorEmpresaPerfil(app, req.params.perfil, req.params.empresa, resp => {
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
