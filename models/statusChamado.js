module.exports = (sequelize, DataType) => {
    const StatusChamado = sequelize.define("status_chamado", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: DataType.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        descricao: {
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
                StatusChamado.hasMany(models.chamado, {
                    foreignKey: {
                        allowNull: false
                    },
                    //onDelete: 'CASCADE'
                });
            }
        }
    })
    return StatusChamado;
};
