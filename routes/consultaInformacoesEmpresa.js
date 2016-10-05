module.exports = app => {
    const Empresa = app.db.models.empresa;
    const RamoAtividade = app.db.models.ramo_atividade;
    app.route("/consultaEmpresa/")
        .get((req, res) => {
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
        });

    app.route("/consultaEmpresa/:id")
        .get((req, res) => {
            Empresa.findOne({
                    where: {
                        id: req.params.id
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
