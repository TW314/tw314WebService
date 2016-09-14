module.exports = (sequelize, DataType) => {
    const Servico = sequelize.define("servico", {
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

        sigla: {
            type: DataType.STRING(2),
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
        classMethods: {
            associate: (models) => {
                Servico.belongsTo(models.ramoatividade),
                Servico.hasMany(models.relacionamento_emp_svc);
            }
        }
    })
    return Servico;
};
