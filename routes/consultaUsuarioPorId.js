module.exports = app => {
    const Usuario = app.db.models.usuario;
    const Perfil = app.db.models.perfil;
    const Empresa = app.db.models.empresa;
    app.route("/consultaUsuarioPorId/:id")
        .get((req, res) => {
            Usuario.findOne({
                    where: {
                        id: req.params.id
                    },
                    attributes: ['nome', 'email'],
                    include: [{
                        model: Empresa,
                        attributes: ['id', 'razao_social']
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
