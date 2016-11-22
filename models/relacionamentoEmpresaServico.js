module.exports = (sequelize, DataType) => {
    const RelacionamentoEmpresaServico = sequelize.define("relacionamento_emp_svc", {

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
