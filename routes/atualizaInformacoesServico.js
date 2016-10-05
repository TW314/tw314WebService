module.exports = app => {
  const Servico = app.db.models.servico;

  app.route("/atualizaInforacoesServico/:id")
    .put((req, res) => {
      Perfil.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(result => res.sendStatus(204))
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
    })
};
