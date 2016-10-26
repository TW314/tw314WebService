module.exports = (sequelize, DataType) => {
    const RamoAtividade = sequelize.define("ramo_atividade", {
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
                RamoAtividade.hasMany(models.servico);
                RamoAtividade.hasMany(models.empresa);
            }
        }
    })
    return RamoAtividade;
};
