module.exports.cadastraServico = (body, params, app, callback) => {

    const Servico = app.db.models.servico;

    Servico.create(body, params)
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
