/**
 * Created by Dino2.0 on 28/11/2016.
 */

import jwt from "jsonwebtoken"

module.exports.authenticate = (app, callback) => {
    const Ticket = app.db.models.ticket;

    Ticket.findOne({
        where: {
            codigo_acesso: "120161123CB11"
        },
        attributes: ['codigo_acesso']
    })
        .then(result => {
            if (result) {
                let token = jwt.sign(JSON.stringify(result), app.get("superSecret"));

                callback(token)

            } else {
                callback(404);
            }
        })
        .catch(error => {
            callback({
                error: error.message
            })
        })

};