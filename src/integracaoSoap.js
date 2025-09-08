const soap = require('soap');
const url = 'http://exemplo.com/servico-saude?wsdl';

function registrarAtendimentoSaude(dados) {
  soap.createClient(url, function(err, client) {
    client.registrarAtendimento(dados, function(err, result) {
      // Lógica de tratamento de resposta
    });
  });
}