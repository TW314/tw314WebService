module.exports = app => {
  const Perfil = app.db.models.perfil;

  app.route("/perfil") //middelware de pre-execucao das rotas
    .get((req, res) => {
      Perfil.findAll({})
      .then(result => res.json(result)) //resultado da pesquisa
      .catch(error => { //se der algum erro
        res.status(412).json({msg: error.message});
      });
    })
    .post((req, res) => {
      Perfil.create(req.body, req.params)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    });

  app.route("/perfil/:id")
    .get((req, res) => {
      Perfil.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(result => {
        if (result) {
          res.json(result);
        } else {
          res.sendStatus(404);
        }
      })
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
    })
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
    .delete((req, res) => {
      Perfil.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => res.sendStatus(204))
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
    });
};
