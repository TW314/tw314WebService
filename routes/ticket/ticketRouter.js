module.exports = app => {

    const controllers = app.controllers.ticket.ticketController;

    app.route("/ticket/:id")
        .get((req, res) => {
            controllers.obterTicketPorCodigoDeAcesso(app, req.params.id, resp => {
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
