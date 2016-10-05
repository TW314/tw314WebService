module.exports = app => {
    const Usuario = app.db.models.usuario;

    app.route("/cadastraUsuario") //middelware de pre-execucao das rotas
        .post((req, res) => {
            Usuario.create(req.body, req.params)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })
};
