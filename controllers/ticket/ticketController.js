module.exports.obterTicketPorCodigoDeAcesso = (app, id, callback) => {

    const Ticket = app.db.models.ticket;
    const RelacionamentoEmpresaServico = app.db.models.relacionamento_emp_svc;
    const Empresa = app.db.models.empresa;
    const Servico = app.db.models.servico;
    const StatusTicket = app.db.models.status_ticket;

    Ticket.findOne({
            where: {
                codigo_acesso: id
            },
            attributes: ['codigo_acesso', 'numero_ticket'],
            include: [{
                model: StatusTicket,
                attributes: ['id', 'nome']
            }, {
                model: RelacionamentoEmpresaServico,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [{
                    model: Servico,
                    attributes: ['id', 'nome', 'sigla']
                }, {
                    model: Empresa,
                    attributes: ['id', 'razao_social']
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
            })
        })
};

module.exports.gerarTicket = (app, idEmpresa, idServico, idPrioritario, callback) => {

    const query = "set @erro = 0, @codigo_ticket = 0, @ticket = 0, @mensagem = 0; call prc_gerar_ticket (:idEmpresa, :idServico, :idPrioritario, @codigo_ticket, @ticket, @erro, @mensagem); select @erro, @codigo_ticket, @ticket, @mensagem";
    app.db.sequelize.query(query, {
            replacements: {
                idEmpresa: idEmpresa,
                idServico: idServico,
                idPrioritario: idPrioritario
            }
        })
        .then(result => {
            console.log(result);
            if (result) {
                callback(result[0]); // retorna apenas os valores OUT da procedure
            } else {
                callback(404);
            }
        })
        .catch(error => {
            callback({
                error: error.message
            })
        })
};

module.exports.atualizaStatusTicket = (body, id, app, callback) => {

    const Ticket = app.db.models.ticket;

    Ticket.update(body, {
            where: {
                codigo_acesso: id
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

module.exports.obterTicketOrdemSequencial = (app, statusTicketId, empresaId, servicoId, data_hora_emissao, callback) => {

    const query = "select * from ticket where date(data_hora_emissao) = :data_hora_emissao and empresaId = :empresaId  and servicoId = :servicoId  and statusTicketId = :statusTicketId order by numero_sequencial ASC limit 6;";

    app.db.sequelize.query(query, {
        replacements: {
            statusTicketId: statusTicketId,
            empresaId: empresaId,
            servicoId: servicoId,
            data_hora_emissao: data_hora_emissao
        }
    })
        .then(result => {
            console.log(result);
            if (result) {
                callback(result[0]); // não duplica os resultados
            } else {
                callback(404);
            }
        })
        .catch(error => {
            callback({
                error: error.message
            })
        });
};
