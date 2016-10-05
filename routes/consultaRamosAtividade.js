const Sequelize = require('sequelize');

module.exports = app => {
    const RamoAtividade = app.db.models.ramo_atividade;
    const Servico = app.db.models.servico;
    app.route("/consultaRamoAtividade/")
        .get((req, res) => {
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
        });

    app.route("/consultaRamoAtividade/:id")
        .get((req, res) => {
            RamoAtividade.find({
                    where: {
                        id: req.params.id
                    }
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
        });
};
