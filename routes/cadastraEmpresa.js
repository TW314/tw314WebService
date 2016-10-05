module.exports = app => {
    const Empresa = app.db.models.empresa;

    app.route("/cadastraEmpresa") //middelware de pre-execucao das rotas
        .post((req, res) => {
            Empresa.create(req.body, req.params)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })
};
