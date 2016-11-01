import Sequelize from 'sequelize'

module.exports.obterContagemServicoRamoAtividade = (app, callback) => {

    const RamoAtividade = app.db.models.ramo_atividade;
    const Servico = app.db.models.servico;

    RamoAtividade.findAll({
            attributes: ['id', 'nome', 'descricao', 'status_ativacao', [Sequelize.fn('COUNT', Sequelize.col('servicos.id')), 'numeroServicos']],
            include: [{
                model: Servico,
                attributes: []
            }],
            group: ['id', 'nome', 'descricao', 'status_ativacao']
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

module.exports.obterContagemEmpresaRamoAtividade = (app, callback) => {

    const RamoAtividade = app.db.models.ramo_atividade;
    const Empresa = app.db.models.empresa;

    RamoAtividade.findAll({
            attributes: ['id', 'nome', 'descricao', 'status_ativacao', [Sequelize.fn('COUNT', Sequelize.col('empresas.id')), 'numeroEmpresas']],
            include: [{
                model: Empresa,
                attributes: []
            }],
            group: ['id', 'nome', 'descricao', 'status_ativacao']
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

module.exports.obterRamoAtividadeOrdenadoPorNome = (app, callback) => {

    const RamoAtividade = app.db.models.ramo_atividade;
    const Servico = app.db.models.servico;
    const Empresa = app.db.models.empresa;
    RamoAtividade.findAll({})
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

module.exports.obterRamoAtividadePorId = (app, id, callback) => {

    const RamoAtividade = app.db.models.ramo_atividade;

    RamoAtividade.findOne({
            where: {
                id: id
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


module.exports.atualizaRamoAtividade = (body, params, app, callback) => {

    const RamoAtividade = app.db.models.ramoAtividade;

    RamoAtividade.update(body, {
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
}

module.exports.cadastraRamoAtividade = (body, params, app, callback) => {

    const RamoAtividade = app.db.models.ramo_atividade;

    RamoAtividade.create(body, params)
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
}