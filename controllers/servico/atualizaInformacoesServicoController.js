module.exports.atualizaInformacoesServico = (body, params, app, callback) => {

    const Servico = app.db.models.servico;

    Servico.update(body, {
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
