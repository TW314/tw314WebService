module.exports.obterRelatorio = (app, nome, dataInicio, dataFim, callback) => {

    const Usuario = app.db.models.usuario;
    const Atendimento = app.db.models.atendimento;
    const Servico = app.db.models.servico;
    const Ticket = app.db.models.ticket;
    const RelacionamentoEmpresaServico = app.db.models.relacionamento_emp_svc;
    const StatusAtendimento = app.db.models.status_atendimento;

    const data_Inicio = new Date(dataInicio);
    const data_Fim = new Date(dataFim);

    Atendimento.find({
            where: {
                $and: [{
                    data_hora_inicio: {
                      $between: [data_Inicio, data_Fim]
                    }
                }, {
                    data_hora_fim: {
                      $between: [data_Inicio, data_Fim]
                    }
                }]
            },
            attributes: {
                exclude: ['usuarioId', 'ticketCodigoAcesso', 'statusAtendimentoId']
            },
            include: [{
                model: StatusAtendimento
            }, {
                model: Usuario,
                attributes: ['id', 'nome', 'status_ativacao'],
                where: {
                    nome: nome
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
