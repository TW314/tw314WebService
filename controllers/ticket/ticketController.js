module.exports.obterTicketPorCodigoDeAcesso = (app, callback) => {

const Ticket = app.db.models.ticket;
const RelacionamentoEmpresaServico = app.db.models.relacionamento_emp_svc;
const Empresa = app.db.models.empresa;
const Servico = app.db.models.servico;
const StatusTicket = app.db.models.status_ticket

Ticket.findOne({
        where: {
            codigo_acesso: req.params.id
        },
        attributes: ['numero_ticket'],
        include: [{
            model: StatusTicket,
            attributes: ['id', 'nome']
        }, {
            model: RelacionamentoEmpresaServico,
            attributes: ['status_ativacao'],
            include: [{
                model: Servico,
                attributes: ['id', 'nome', 'sigla']
            }, {
                model: Empresa,
                attributes: ['id', 'razao_social']
            }, ]
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
}
