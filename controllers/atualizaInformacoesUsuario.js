module.exports.atualizaInformacoesUsuario = (body, params, app, callback) => {

    const Usuario = app.db.models.usuario;

    Usuario.update(body, {
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