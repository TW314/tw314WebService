module.exports.cadastraRamoAtividade = (body, params, app, callback) => {

    const RamoAtividade = app.db.models.ramo_atividade;

    RamoAtividade.create(body, params)
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
