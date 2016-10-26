module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("usuario", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: DataType.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        email: {
            type: DataType.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        data_ativacao: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        senha: {
            type: DataType.TEXT
        },

        data_inativacao: {
            type: DataType.DATE
        },

        status_ativacao: {
            type: DataType.ENUM('Ativo', 'Inativo'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate: (models) => {
                Usuario.belongsTo(models.empresa, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
                Usuario.belongsTo(models.perfil, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
                Usuario.hasMany(models.atendimento);
                Usuario.hasMany(models.chamado);
                Usuario.hasMany(models.comentario);
            }
        }
    })
    return Usuario;
};
