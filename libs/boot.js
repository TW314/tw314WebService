import socket from "socket.io"

module.exports = app => {
    app.db.sequelize.sync().done(() => {
        const io = socket.listen(app.listen(app.get("port"), () => { //app.listen > funcao responsavel por iniciar o servidor
            console.log(`TW314 API - porta ${app.get("port")}`);
        }));

        io.on('connection', function(socket){
            console.log('Conectou');
            socket.on('proximo', (empresa, servico) => {
                console.log('proximo');
                io.emit('proximo', empresa, servico);
            });
        });
    });
};
