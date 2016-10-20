module.exports = app => {

    const controllers = app.controllers.usuario.consultaInformacoesUsuariosPorPerfilController

    app.route("/consultaUsuariosPorPerfil/:id")
        .get((req, res) => {
            controllers.list(app, req.params.id, resp => {
                res.json(resp)
            });
        });
};
