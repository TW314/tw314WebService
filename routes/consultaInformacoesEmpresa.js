module.exports = app => {

    const controllers = app.controllers.consultaInformacoesEmpresaController;
    
    const Empresa = app.db.models.empresa;
    const RamoAtividade = app.db.models.ramo_atividade;

    app.route("/consultaInformacoesEmpresa/")
        .get((req, res) => {
            controllers.list(Empresa, RamoAtividade, (resp) => {
                res.json(resp)
            });
        });

    app.route("/consultaInformacoesEmpresa/:id")
        .get((req, res) => {
            controllers.empresa(req.params.id, Empresa, RamoAtividade, (resp) => {
                res.json(resp)
            });
        });
};
