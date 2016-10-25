module.exports = app => {

    const controllers = app.controllers.ticket.ticketController;

    app.route("/ticket/:id")
        .get((req, res) => {
            controllers.obterTicketPorCodigoDeAcesso(app, req.params.id, resp => {
                res.json(resp)
            })
        })
}
