module.exports = app => {
    const Usuario = app.db.models.usuario;
    const Perfil = app.db.models.perfil;
    const Empresa = app.db.models.empresa;
    app.route("/consultaInformacoesUsuarioPorId/:id")
        .get((req, res) => {
            Usuario.findOne({
                    where: {
                        id: req.params.id
                    },
                    attributes: ['nome', 'email', 'status_ativacao'],
                    include: [{
                        model: Empresa,
                        attributes: ['id', 'razao_social', 'status_ativacao']
                    }, {
                        model: Perfil,
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
