module.exports.cadastraEmpresa = (body, params, app, callback) => {
    const Empresa = app.db.models.empresa;

    Empresa.create(body, params)
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
