module.exports.usuario = (app, id, callback) => {
    const Usuario = app.db.models.usuario;
    const Perfil = app.db.models.perfil;
    const Empresa = app.db.models.empresa;

    Usuario.findOne({
            where: {
                id: id
            },
            attributes: ['id','nome', 'email', 'status_ativacao'],
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
