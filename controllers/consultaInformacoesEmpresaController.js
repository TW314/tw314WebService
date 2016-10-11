module.exports.list = (app, callback) => {

    const Empresa = app.db.models.empresa;
    const RamoAtividade = app.db.models.ramo_atividade;

    Empresa.findAll({
            where: {},
            attributes: {
                exclude: ['ramoAtividadeId']
            },
            include: [{
                model: RamoAtividade,
                attributes: ['id', 'nome']
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

module.exports.empresa = (app, id, callback) => {

    const Empresa = app.db.models.empresa;
    const RamoAtividade = app.db.models.ramo_atividade;

    Empresa.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: ['ramoAtividadeId']
            },
            include: [{
                model: RamoAtividade,
                attributes: ['id', 'nome']
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
