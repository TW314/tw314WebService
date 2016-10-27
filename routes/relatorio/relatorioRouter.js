module.exports = app => {

    const controllers = app.controllers.relatorio.relatorioController;

    app.route("/relatorio/:nome&:dataInicio&:dataFim")
        .get((req, res) => {
            controllers.obterRelatorio(app, req.params.nome, req.params.dataInicio, req.params.dataFim, resp => {
                res.json(resp)
            })
        })
};
