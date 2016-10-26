module.exports = app => {

    const controllers = app.controllers.usuario.usuarioController

    app.route("/consultaUsuarioPorPerfil/:id")
        .get((req, res) => {
            controllers.obterUsuarioPorPerfil(app, req.params.id, resp => {
                res.json(resp)
            });
        });

    app.route("/consultaUsuarioPorId/:id")
        .get((req, res) => {
            controllers.obterUsuarioPorId(app, req.params.id, resp => {
                res.json(resp)
            });
        });

    app.route("/cadastraUsuario") //middelware de pre-execucao das rotas
        .post((req, res) => {
            controllers.cadastraUsuario(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });

    app.route("/atualizaUsuario/:id")
        .put((req, res) => {
            controllers.atualizaUsuario(req.body, req.params, app, resp => {
                res.json(resp)
            });
        })
};
