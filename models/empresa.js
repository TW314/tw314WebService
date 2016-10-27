module.exports = (sequelize, DataType) => {
    const Empresa = sequelize.define("empresa", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome_fantasia: {
            type: DataType.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        razao_social: {
            type: DataType.STRING(80),
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        numero_cnpj: {
            type: DataType.STRING(14),
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        logradouro: {
            type: DataType.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        numero_logradouro: {
            type: DataType.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        cidade: {
            type: DataType.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        uf: {
            type: DataType.STRING(2),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        cep: {
            type: DataType.STRING(8),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        pais: {
            type: DataType.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        telefone: {
            type: DataType.STRING(11)
        },

        email: {
            type: DataType.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        nome_responsavel: {
            type: DataType.STRING(80),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        cargo_responsavel: {
            type: DataType.STRING(45),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        cpf_responsavel: {
            type: DataType.STRING(11),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        data_abertura: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
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
            associate: models => {
                Empresa.belongsTo(models.ramo_atividade, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
                Empresa.belongsToMany(models.servico, {
                    through: models.relacionamento_emp_svc
                }); //atraves da tabela de relacionamento_emp_svc
                Empresa.hasMany(models.usuario); //Uma empresa tem varios usuarios
            }
        }
    })
    return Empresa;
};
