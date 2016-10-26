module.exports = (sequelize, DataType) => {
    const Chamado = sequelize.define("chamado", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        data_abertura: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        assunto: {
            type: DataType.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        mensagem: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        anexo: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate: (models) => {
                Chamado.belongsTo(models.usuario, {
                    foreignKey: {
                        allowNull: false
                    }
                });
                Chamado.belongsTo(models.status_chamado, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
                Chamado.hasMany(models.comentario);
            }
        }
    })
    return Chamado;
};
