module.exports = app => {
    const Empresa = app.db.models.empresa;
    const RamoAtividade = app.db.models.ramo_atividade;
};

exports.list = callback => {

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
                callback.json(result);
            } else {
                callback.sendStatus(404);
            }
        })
        .catch(error => {
            callback.status(412).json({
                msg: error.message
            });
        });
};

module.exports.empresa = (id, callback) => {
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
                res.json(result);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(error => {
            res.status(412).json({
                msg: error.message
            });
        });
};
