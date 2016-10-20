module.exports.atualizaInformacoesRamoAtividade = (body, params, app, callback) => {

    const RamoAtividade = app.db.models.ramoAtividade;

    RamoAtividade.update(body, {
            where: {
                id: params.id
            }
        })
        .then(result => {
            if (result) {
                callback(result);
            } else {
                callback(404);
            }
        })
        .catch(error => {
            callback({
                error: error.message
            });
        });
};
