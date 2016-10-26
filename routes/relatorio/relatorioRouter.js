module.exports = app => {

    const controllers = app.controllers.relatorio.relatorioController;

    app.route("/relatorio/")
        .get((req, res) => {
            controllers.obterRelatorio(app, req.params.id, req.params.nome, resp => {
                res.json(resp)
            })
        })
};
