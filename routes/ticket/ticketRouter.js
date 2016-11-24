import stormpath from 'express-stormpath'

module.exports = app => {

    const controllers = app.controllers.ticket.ticketController;

    app.route("/ticket/:id")
        .get((req, res) => {
            controllers.obterTicketPorCodigoDeAcesso(app, req.params.id, resp => {
                res.json(resp)
            })
        })
        .put(stormpath.apiAuthenticationRequired, (req, res) => {
            controllers.atualizaStatusTicket(req.body, req.params.id, app, resp => {
                res.json(resp)
            })
        });

    app.route("/ticket/gerar/:idEmpresa&:idServico&:idPrioritario")
        .post(stormpath.apiAuthenticationRequired, (req, res) =>{
            controllers.gerarTicket(app, req.params.idEmpresa, req.params.idServico, req.params.idPrioritario, resp => {
                res.json(resp);
            })
        });
};
