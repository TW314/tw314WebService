module.exports.obterRelatorio = (app, id, nome, callback) => {

    const Usuario = app.db.models.usuario;
    const Atendimento = app.db.models.atendimento;
    const Servico = app.db.models.servico;
    const Ticket = app.db.models.ticket;
    const RelacionamentoEmpresaServico = app.db.models.relacionamento_emp_svc;

    Atendimento.findAll({
            where: {},
            include: [{
                model: Usuario,
                attributes: ['id', 'nome', 'status_ativacao'],
                where: {
                    //nome: nome
                }
            }, {
                model: Ticket,
                attributes: ['numero_ticket', 'data_hora_emissao', 'prioridade'],
                include: [{
                    model: RelacionamentoEmpresaServico,
                    attributes: ['status_ativacao'],
                    include: [{
                      model: Servico
                    }]
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
