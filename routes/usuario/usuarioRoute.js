module.exports = app => {

    const controllers = app.controllers.usuario.usuarioController;

    app.route("/login/:email")
        .get((req, res) => {
            controllers.obterUsuarioPorEmail(app, req.params.email, resp => {
                res.json(resp)
            });
        });

    app.route("/usuario/perfil/:id")
        .get((req, res) => {
            controllers.obterUsuarioPorPerfil(app, req.params.id, resp => {
                res.json(resp)
            });
        });

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
        .get((req, res) => {
            controllers.obterUsuarios(app, resp => {
                res.json(resp)
            })
        })
        .post((req, res) => {
            controllers.cadastraUsuario(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });
};
