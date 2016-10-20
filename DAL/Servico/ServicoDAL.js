module.exports.obterServicOrdenadoPorNome = (app, callback) => {

    const Servico = app.db.models.servico;
    const RamoAtividade = app.db.models.ramo_atividade;
    Servico.findAll({
            where: {},
            attributes: {
                exclude: ['ramoAtividadeId']
            },
            include: [{
                model: RamoAtividade,
                attributes: ['id', 'nome', 'status_ativacao']
            }]
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

module.exports.obterServicoPorId = (app, id, callback) => {
    const Servico = app.db.models.servico;
    const RamoAtividade = app.db.models.ramo_atividade;

    Servico.find({
            where: {
                id: id
            },
            attributes: {
                exclude: ['ramoAtividadeId']
            },
            include: [{
                model: RamoAtividade,
                attributes: ['id', 'nome', 'status_ativacao']
            }]
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
