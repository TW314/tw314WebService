module.exports = (sequelize, DataType) => {

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
        }
    }, {
        classMethods: {
            associate: (models) => {
                Ticket.belongsTo(models.status_ticket, {
                    foreignKey: {
                        allowNull: false
                    }
                });
                Ticket.hasOne(models.atendimento, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
                Ticket.belongsTo(models.relacionamento_emp_svc, {
                  foreignKey: {
                      name: "empresaId",
                      allowNull: false
                  },
                    targetKey: "empresaId"
                });
                Ticket.belongsTo(models.relacionamento_emp_svc, {
                    foreignKey: {
                        name: "servicoId",
                        allowNull: false
                    },
                    targetKey: "servicoId"
                });
            }
        }
    })
    return Ticket;
};
