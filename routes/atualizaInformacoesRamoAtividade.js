module.exports = app => {
  const RamoAtividade = app.db.models.ramoAtividade;

  app.route("/atualizaInforacoesRamoAtividade/:id")
    .put((req, res) => {
      Usuario.update(req.body, {
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
