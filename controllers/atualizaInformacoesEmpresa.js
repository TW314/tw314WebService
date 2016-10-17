module.exports.atualizaInformacoesEmpresa = (body, params, app, callback) => {

    const Empresa = app.db.models.empresa;

    Empresa.update(body, {
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
