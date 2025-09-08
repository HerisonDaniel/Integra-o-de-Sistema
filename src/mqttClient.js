const mqtt = require('mqtt');
let alerts = [];

function addAlert(bairro, nivel) {
  const alert = { bairro, nivel, timestamp: Date.now() };
  alerts.push(alert);
  return alert;
}

function getAlerts() {
  return alerts;
}

function startMQTT() {
  const client = mqtt.connect('mqtt://broker.hivemq.com');
  client.on('connect', () => {
    client.subscribe('fortaleza/pluviometria');
  });
  client.on('message', (topic, message) => {
    try {
      const data = JSON.parse(message.toString());
      if (data.nivel > 100) {
        addAlert(data.bairro, data.nivel);
      }
    } catch (err) {
      // Tratamento de erro de mensagem inválida
    }
  });
}

module.exports = { startMQTT, getAlerts, addAlert };