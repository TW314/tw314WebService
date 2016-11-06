module.exports.obterEmpresaOrdenadoPorRazaoSocial = (app, callback) => {

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

module.exports.obterEmpresaPorId = (app, id, callback) => {

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

module.exports.obterEmpresaPorCNPJ = (app, cnpj, callback) => {

    const Empresa = app.db.models.empresa;
    const RamoAtividade = app.db.models.ramo_atividade;

    Empresa.findOne({
        where: {
            numero_cnpj: cnpj
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

module.exports.atualizaEmpresa = (body, params, app, callback) => {

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
