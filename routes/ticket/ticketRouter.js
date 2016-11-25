module.exports = app => {

    const controllers = app.controllers.ticket.ticketController;

    app.route("/ticket/:id")
        .get((req, res) => {
            controllers.obterTicketPorCodigoDeAcesso(app, req.params.id, resp => {
                res.json(resp)
            })
        })
        .put((req, res) => {
            controllers.atualizaStatusTicket(req.body, req.params.id, app, resp => {
                res.json(resp)
            })
        });

    app.route("/ticket/fila/:statusId&:empresa&:servico&:data")
        .get((req, res) => {
            controllers.obterTicketPorStatusOrdemSequencial(app, req.params.statusId, req.params.empresa, req.params.servico, req.params.data, resp => {
                res.json(resp)
            })
        });

    app.route("/ticket/ticket/:statusId&:empresa&:servico&:data")
        .get((req, res) => {
            controllers.obterUmTicketPorStatus(app, req.params.statusId, req.params.empresa, req.params.servico, req.params.data, resp => {
                res.json(resp)
            })
        });

    app.route("/ticket/gerar/:idEmpresa&:idServico&:idPrioritario")
        .post((req, res) =>{
            controllers.gerarTicket(app, req.params.idEmpresa, req.params.idServico, req.params.idPrioritario, resp => {
                res.json(resp);
            })
        });
};
