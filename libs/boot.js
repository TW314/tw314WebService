import socket from 'socket.io'

module.exports = app => {
    app.db.sequelize.sync().done(() => {
        socket.listen(app.listen(app.get("port"), () => { //app.listen > funcao responsavel por iniciar o servidor
            console.log(`TW314 API - porta ${app.get("port")}`);
        }));
    });
};
