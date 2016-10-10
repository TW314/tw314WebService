module.exports = app => {

    //const controllers = app.controllers.consultaInformacoesEmpresaController;
    const controllers = require("../controllers/consultaInformacoesEmpresaController.js");

    app.route("/consultaInformacoesEmpresa/")
        .get((req, res) => {
            controllers.list(resp => {
                res.json(resp)
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
