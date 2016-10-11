module.exports.list = (app, id, callback) => {
    const Usuario = app.db.models.usuario;
    const Empresa = app.db.models.empresa;
    const Perfil = app.db.models.perfil;
    Perfil.find({
            where: {
                id: id
            },
            attributes: ['id', 'nome'],
            include: [{
                model: Usuario,
                attributes: ['id', 'nome', 'email', 'status_ativacao'],
                include: [{
                    model: Empresa,
                    attributes: ['id', 'razao_social', 'status_ativacao']
                }]
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
