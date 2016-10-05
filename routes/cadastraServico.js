module.exports = app => {
    const Servico = app.db.models.servico;

    app.route("/cadastraServico") //middelware de pre-execucao das rotas
        .post((req, res) => {
            Servico.create(req.body, req.params)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })
};
