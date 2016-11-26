/**
 * Created by halu on 26/11/16.
 */
module.exports.obterAtendimento = (app, callback) => {

    const Ticket = app.db.models.ticket;
    const StatusAtendimento = app.db.models.status_atendimento;
    const Usuario = app.db.models.usuario;
    const Atendimento = app.db.models.atendimento;
    const Servico = app.db.models.servico;

    Atendimento.findAll({
        where: {},
        include: [{
            model: Ticket,
            attributes: ['codigo_acesso', 'servicoId', 'numero_ticket'],
            include: [{
                model:Servico,
                attributes: ['id', 'sigla', 'nome']
            }]
        },{
            model: StatusAtendimento,
            attributes: ['id', 'nome']
        },{
            model: Usuario,
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

module.exports.obterAtendimentoPorId = (app, id, callback) => {

    const Ticket = app.db.models.ticket;
    const StatusAtendimento = app.db.models.status_atendimento;
    const Usuario = app.db.models.usuario;
    const Atendimento = app.db.models.atendimento;
    const Servico = app.db.models.servico;
    const RelacionamentoEmpresaServico= app.db.models.relacionamento_emp_svc;

    Atendimento.find({
        where: {
            id: id
        },
        include: [{
            model: Ticket,
            attributes: ['codigo_acesso', 'servicoId', 'numero_ticket'],
            include: [{
                model: RelacionamentoEmpresaServico,
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'empresaId']
                },
                include: [{
                    model: Servico,
                    attributes: ['id', 'nome', 'sigla']
                }]
            }]
        },{
            model: StatusAtendimento,
            attributes: ['id', 'nome']
        },{
            model: Usuario,
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

module.exports.cadastraAtendimento = (body, params, app, callback) => {

    const Atendimento = app.db.models.atendimento;

    Atendimento.create(body, params)
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

module.exports.atualizaAtendimento = (body, id, app, callback) => {

    const Atendimento = app.db.models.atendimento;

    Atendimento.update(body, {
        where: {
            id: id
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

