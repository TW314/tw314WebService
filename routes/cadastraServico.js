module.exports = app => {

    const controllers = app.controllers.cadastraServicoController;

    app.route("/cadastraServico") //middelware de pre-execucao das rotas
        .post((req, res) => {
            controllers.cadastraServico(req.body, req.params, app, resp => {
                res.json(resp)
            });
        });
};
