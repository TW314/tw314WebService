module.exports = app => {

    const controllers = app.controllers.cadastraEmpresaController;

    app.route("/cadastraEmpresa") //middelware de pre-execucao das rotas
        .post((req, res) => {
            controllers.cadastraEmpresa(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });
};