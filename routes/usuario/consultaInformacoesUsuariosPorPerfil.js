module.exports = app => {

    const controllers = app.controllers.usuario.consultaInformacoesUsuariosPorPerfilController

    app.route("/consultaUsuariosPorPerfil/:id")
        .get((req, res) => {
            controllers.obterUsuarioPorPerfil(app, req.params.id, resp => {
                res.json(resp)
            });
        });
};

module.exports = app => {

    const controllers = app.controllers.usuario.consultaInformacoesUsuarioPorIdController;

    app.route("/consultaInformacoesUsuarioPorId/:id")
        .get((req, res) => {
            controllers.obterUsuarioPorId(app, req.params.id, resp => {
                res.json(resp)
            });
        });
};

module.exports = app => {

    const controllers = app.controllers.usuario.cadastraUsuarioController;

    app.route("/cadastraUsuario") //middelware de pre-execucao das rotas
        .post((req, res) => {
            controllers.cadastraUsuario(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });
};

module.exports = app => {

    const controllers = app.controllers.usuario.atualizaInformacoesUsuarioController;

    app.route("/atualizaInformacoesUsuario/:id")
        .put((req, res) => {
            controllers.atualizaUsuario(req.body, req.params, app, resp => {
                res.json(resp)
            });
        })
};
