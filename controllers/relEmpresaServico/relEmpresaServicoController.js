/**
 * Created by halu on 21/11/16.
 */
module.exports.cadastraRelacionamentoEmpresaServico = (body, params, app, callback) => {

    const RelacionamentoEmpresaServico = app.db.models.relacionamento_emp_svc;

    RelacionamentoEmpresaServico.create(body, params)
        .then(result => {
            if (result) {
                callback(result);
            } else {
                callback(404);
            }
        })
        .catch(error => {
            callback({
                error: error.message
            });
        });
};
// pega todos, idependente dos cadastros
module.exports.obterRelacionamentoEmpresaServico = (app, callback) => {

    const Servico = app.db.models.servico;
    const Empresa = app.db.models.empresa;
    const RelacionamentoEmpresaServico = app.db.models.relacionamento_emp_svc;

    RelacionamentoEmpresaServico.findAll({
        where: {},
        include: [{
            model: Empresa,
            attributes: ['id', 'nome_fantasia']
        },
            {
                model: Servico,
                attributes: ['id', 'nome']
            }
        ]
    })
        .then(result => {
            if (result) {
                callback(result);
            } else {
                callback(404);
            }
        })
        .catch(error => {
            callback({
                error: error.message
            });
        });
};

// pega todos servicos por empresa
module.exports.obterServicoPorEmpresa = (app, empresa, callback) => {
    const Servico = app.db.models.servico;
    const Empresa = app.db.models.empresa;
    const RelacionamentoEmpresaServico = app.db.models.relacionamento_emp_svc;

    RelacionamentoEmpresaServico.findAll({
        where: {},
        attributes: {
            exclude: ['empresaId', 'servicoId']
        },
        include: [{
            model: Empresa,
            attributes: ['id', 'nome_fantasia', 'razao_social', 'status_ativacao'],
            where: {
                id: empresa
            }
        }, {
            model: Servico,
            attributes: ['id', 'nome'],
        }
        ]
    })
        .then(result => {
            if (result) {
                callback(result);
            } else {
                callback(404);
            }
        })
        .catch(error => {
            callback({
                error: error.message
            });
        });
};
