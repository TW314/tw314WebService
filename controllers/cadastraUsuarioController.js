module.exports.cadastraUsuario = (body, params, app, callback) => {

    const Usuario = app.db.models.usuario;

    Usuario.create(body, params)
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
