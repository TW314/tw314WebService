const Sequelize = require('sequelize');

module.exports.list = (app, callback) => {

    const RamoAtividade = app.db.models.ramo_atividade;
    const Servico = app.db.models.servico;
    const Empresa = app.db.models.empresa;


    RamoAtividade.findAll({
            attributes: ['id', 'nome', 'descricao', 'status_ativacao', [Sequelize.fn('COUNT', Sequelize.col('servicos.id')), 'numeroServicos'],
                [Sequelize.fn('COUNT', Sequelize.col('empresas.id')), 'numeroEmpresas']
            ],
            include: [{
                model: Servico,
                attributes: []
            }, {
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

module.exports.ramoAtividade = (app, id, callback) => {

    const RamoAtividade = app.db.models.ramo_atividade;
    const Servico = app.db.models.servico;
    const Empresa = app.db.models.empresa;
    RamoAtividade.findOne({
            where: {
                id: id
            },
            attributes: ['id', 'nome', 'descricao', 'status_ativacao', [Sequelize.fn('COUNT', Sequelize.col('servicos.id')), 'numeroServicos'],
                [Sequelize.fn('COUNT', Sequelize.col('empresas.id')), 'numeroEmpresas']
            ],
            include: [{
                model: Servico,
                attributes: []
            }, {
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
