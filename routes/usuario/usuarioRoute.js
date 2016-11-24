import stormpath from 'express-stormpath'

module.exports = app => {

    const controllers = app.controllers.usuario.usuarioController;

    app.route("/usuario/perfil/:id")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterUsuarioPorPerfil(app, req.params.id, resp => {
                res.json(resp)
            });
        });

    app.route("/usuario/empresa/:empresa&:perfil")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterUsuarioPorEmpresaPerfil(app, req.params.perfil, req.params.empresa, resp => {
                res.json(resp)
            });
        });

    app.route("/usuario/:id")
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterUsuarioPorId(app, req.params.id, resp => {
                res.json(resp)
            });
        })
        .put(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.atualizaUsuario(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });

    app.route("/usuario") //middelware de pre-execucao das rotas
        .get(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.obterUsuarios(app, resp => {
                res.json(resp)
            })
        })
        .post(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.cadastraUsuario(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });
};
