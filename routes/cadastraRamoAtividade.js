module.exports = app => {

    const controllers = app.controllers.consultaInformacoesEmpresaController;

    app.route("/cadastraRamoAtividade") //middelware de pre-execucao das rotas
        .post((req, res) => {
            controllers.cadastraRamoAtividade(app, resp => {
                res.json(resp)
            });
        });
};
