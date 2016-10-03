module.exports = app => {
    const Usuario = app.db.models.usuario;
    const Empresa = app.db.models.empresa;
    const Perfil = app.db.models.perfil;
    app.route("/consultaUsuariosPorPerfil/:id")
        .get((req, res) => {
            Perfil.find({
                    where: {
                        id: req.params.id
                    },
                    attributes: ['nome', 'status_ativacao'],
                    include: [{
                        model: Usuario,
                        attributes: ['id', 'nome', 'email']
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
