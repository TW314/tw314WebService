module.exports = {
    database: "tw314", //nome da base de dados
    username: "root", //nome do usuario de acesso
    password: "root", //senha do usuario
    params: {
        dialect: "mysql", //params.dialect > informa qual banco de dados esta sendo usado
        dialectOptions: {
            multipleStatements: true
        }
    },
    secret: 'TMEIA'
};
