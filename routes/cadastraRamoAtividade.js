module.exports = app => {
    const RamoAtividade = app.db.models.ramo_atividade;

    app.route("/cadastraRamoAtividade") //middelware de pre-execucao das rotas
        .post((req, res) => {
            RamoAtividade.create(req.body, req.params)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })
};
