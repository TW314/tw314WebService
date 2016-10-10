module.exports.list = (Empresa, RamoAtividade, callback) => {

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

module.exports.empresa = (id, Empresa, RamoAtividade, callback) => {

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
