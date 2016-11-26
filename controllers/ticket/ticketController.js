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
                attributes: ['id']
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

module.exports.obterTicketPorStatusOrdemSequencial = (app, statusTicketId, empresaId, servicoId, data_hora_emissao, callback) => {

    const query = "select concat(`relacionamento_emp_svc.servico`.sigla, numero_ticket) as ticket, `relacionamento_emp_svc.servico`.nome as servico_nome, status_ticket.id as status_id,   status_ticket.nome as status_nome,     `relacionamento_emp_svc.empresa`.id as empresa_id,    `relacionamento_emp_svc.empresa`.nome_fantasia as empresa_nome,    prioridade_ticket.id as prioridade_id,    prioridade_ticket.nome as prioridade_nome from ticket	left outer join status_ticket	 on statusTicketId = status_ticket.id	left outer join prioridade_ticket	 on prioridadeTicketId = prioridade_ticket.id	left outer join relacionamento_emp_svc     on ticket.servicoId = relacionamento_emp_svc.servicoId and ticket.empresaId = relacionamento_emp_svc.empresaId	left outer join servico AS `relacionamento_emp_svc.servico`     on relacionamento_emp_svc.servicoId = `relacionamento_emp_svc.servico`.id left outer join empresa as `relacionamento_emp_svc.empresa`     on relacionamento_emp_svc.empresaId = `relacionamento_emp_svc.empresa`.id where date(data_hora_emissao) = date(:data_hora_emissao)  and ticket.empresaId = :empresaId and ticket.servicoId = :servicoId and statusTicketId = :statusTicketId  order by numero_sequencial ASC limit 5;";

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

module.exports.obterUmTicketPorStatus = (app, statusTicketId, empresaId, servicoId, data_hora_emissao, callback) => {

    const query = "select codigo_acesso, concat(`relacionamento_emp_svc.servico`.sigla, numero_ticket) as ticket, `relacionamento_emp_svc.servico`.nome as servico_nome, status_ticket.id as status_id,   status_ticket.nome as status_nome,     `relacionamento_emp_svc.empresa`.id as empresa_id,    `relacionamento_emp_svc.empresa`.nome_fantasia as empresa_nome,    prioridade_ticket.id as prioridade_id,    prioridade_ticket.nome as prioridade_nome from ticket	left outer join status_ticket	 on statusTicketId = status_ticket.id	left outer join prioridade_ticket	 on prioridadeTicketId = prioridade_ticket.id	left outer join relacionamento_emp_svc     on ticket.servicoId = relacionamento_emp_svc.servicoId and ticket.empresaId = relacionamento_emp_svc.empresaId	left outer join servico AS `relacionamento_emp_svc.servico`     on relacionamento_emp_svc.servicoId = `relacionamento_emp_svc.servico`.id left outer join empresa as `relacionamento_emp_svc.empresa`     on relacionamento_emp_svc.empresaId = `relacionamento_emp_svc.empresa`.id where date(data_hora_emissao) = date(:data_hora_emissao)  and ticket.empresaId = :empresaId and ticket.servicoId = :servicoId and statusTicketId = :statusTicketId  order by numero_sequencial ASC limit 1;";

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

module.exports.obterPessoasNaFrente = (app, codigo, callback) => {

    const query = "" +
        "SELECT numero_sequencial INTO @sequencial FROM ticket WHERE codigo_acesso = :codigo; " +
        "SELECT data_hora_emissao INTO @data_hora FROM ticket WHERE codigo_acesso = :codigo; " +
        "SELECT empresaId INTO @empresa FROM ticket WHERE codigo_acesso = :codigo; " +
        "SELECT servicoId INTO @servico FROM ticket WHERE codigo_acesso = :codigo; " +
        "select count(codigo_acesso) as pessoas_na_frente from ticket where numero_sequencial < @sequencial and date(data_hora_emissao) = date('2016-11-23') and empresaId = @empresa and servicoId = @servico and statusTicketId = 1;";

    app.db.sequelize.query(query, {
        replacements: {
            codigo: codigo
        }
    })
        .then(result => {
            console.log(result);
            if (result) {
                callback(result[0][4]); // não duplica os resultados
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
