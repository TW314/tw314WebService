module.exports.obterUsuarioPorPerfil = (app, id, callback) => {
    const Usuario = app.db.models.usuario;
    const Perfil = app.db.models.perfil;
    Perfil.find({
        where: {
            id: id
        },
        attributes: ['id', 'nome'],
        include: [{
            model: Usuario,
            attributes: ['id', 'nome', 'email', 'status_ativacao']
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

module.exports.obterUsuarioPorEmpresaPerfil = (app, perfil, empresa, callback) => {
    const Usuario = app.db.models.usuario;
    const Empresa = app.db.models.empresa;
    const Perfil = app.db.models.perfil;

    Usuario.findAll({
        where: {},
        attributes: ['id', 'nome', 'email', 'status_ativacao'],
        include: [{
            model: Empresa,
            attributes: ['id', 'razao_social', 'status_ativacao'],
            where: {
                id: empresa
            }
        }, {
            model: Perfil,
            attributes: ['id', 'nome'],
            where: {
                id: perfil
            }
        }
        ]
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

module.exports.obterUsuarios = (app, callback) => {
    const Usuario = app.db.models.usuario;
    const Empresa = app.db.models.empresa;
    const Perfil = app.db.models.perfil;

    Usuario.findAll({
        where: {},
        attributes: ['id', 'nome', 'email', 'status_ativacao', 'senha'],
        include: [
            {
                model: Empresa,
                attributes: ['id', 'razao_social', 'status_ativacao'],
            },
            {
                model: Perfil,
                attributes: ['id', 'nome'],
            }
        ]
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

module.exports.obterUsuarioPorId = (app, id, callback) => {
    const Usuario = app.db.models.usuario;
    const Perfil = app.db.models.perfil;
    const Empresa = app.db.models.empresa;

    Usuario.findOne({
        where: {
            id: id
        },
        attributes: ['id', 'nome', 'email', 'status_ativacao'],
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

module.exports.obterUsuarioPorEmail = (app, email, callback) => {
    const Usuario = app.db.models.usuario;
    const Perfil = app.db.models.perfil;
    const Empresa = app.db.models.empresa;

    Usuario.findOne({
        where: {
            email: email
        },
        attributes: ['id', 'nome', 'email', 'status_ativacao', 'senha'],
        include: [{
            model: Empresa,
            attributes: ['id', 'razao_social', 'nome_fantasia', 'status_ativacao']
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

module.exports.cadastraUsuario = (body, params, app, callback) => {

    const Usuario = app.db.models.usuario;

    Usuario.create(body, params)
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

module.exports.atualizaUsuario = (body, params, app, callback) => {
    const Usuario = app.db.models.usuario;

    Usuario.update(body, {
        where: {
            id: params.id
        }
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
