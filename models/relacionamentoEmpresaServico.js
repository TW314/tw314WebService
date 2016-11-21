module.exports = (sequelize, DataType) => {
    const RelacionamentoEmpresaServico = sequelize.define("relacionamento_emp_svc", {
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
                RelacionamentoEmpresaServico.belongsTo(models.servico, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
                RelacionamentoEmpresaServico.belongsTo(models.empresa, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
            }
        }
    });
    return RelacionamentoEmpresaServico;
};
