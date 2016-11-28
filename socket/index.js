import socket from "socket.io"


module.exports = app =>{
    app.route("/index")
        .get((req, res) => {
            res.sendfile('index.html');
        });
};