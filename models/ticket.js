module.exports = (sequelize, DataType, models) => {

    const Ticket = sequelize.define("ticket", {
        numero_ticket: {
            type: DataType.INTEGER,
            primaryKey: true
        },

        data_hora_emissao: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            primaryKey: true
        },

        codigo_acesso: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        servicoId: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            references: {
                model: "relacionamento_emp_svcs",
                key: "servicoId"
            }
        },

        empresaId: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            references: {
                model: "relacionamento_emp_svcs",
                key: "empresaId"
            }
        }
    }, {
        classMethods: {
            associate: (models) => {
                Ticket.belongsTo(models.status_ticket, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
                Ticket.hasOne(models.atendimento, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
            }
        }
    })
    return Ticket;
};
