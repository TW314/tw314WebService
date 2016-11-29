module.exports = app => {

    const controllers = app.controllers.authenticate.authenticateController;

    app.route("/authenticate")
        .get((req, res) => {
            controllers.authenticate(app, resp => {
                res.json(resp)
            });
        });
};