module.exports = app => {
    const Servico = app.db.models.servico;
    const RamoAtividade = app.db.models.ramo_atividade;
    app.route("/consultaServico/")
        .get((req, res) => {
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

    app.route("/consultaServico/:id")
        .get((req, res) => {
            Servico.find({
                    where: {id: req.params.id},
                    attributes: {
                        exclude: ['ramoAtividadeId']
                    },
                    include: [{
                        model: RamoAtividade,
                        attributes: ['id', 'nome','status_ativacao']
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
        });
};
