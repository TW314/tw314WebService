module.exports = (sequelize, DataType) => {

    const Atendimento = sequelize.define("atendimento", { //criando a tabela no banco, ocorre quando o sequelize faz uma sincronizacao com o boot

        id: {
            type: DataType.INTEGER, //tipo do campo
            primaryKey: true, //chave primaria
            autoIncrement: true //com autoincremento
        },

        data_hora_inicio: {
            type: DataType.DATE, //tipo do campo
            defaultValue: DataType.NOW, //data atual
            allowNull: false, //nao permite valores nulos
            validate: { //verifica se a data nao eh vazia
                notEmpty: true
            }
        },

        data_hora_fim: {
            type: DataType.DATE
        }

    }, {
        freezeTableName: true,
        classMethods: {
            associate: (models) => { //permite realizar uma associacao entre os modelos
                Atendimento.belongsTo(models.ticket, { //estabelecendo o relacionamento
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
                Atendimento.belongsTo(models.usuario, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
                Atendimento.belongsTo(models.status_atendimento, {
                    foreignKey: {
                        allowNull: false
                    }
                    //onDelete: 'CASCADE'
                });
            }
        }
    });
    return Atendimento;
}
