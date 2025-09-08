const express = require('express');
const { startMQTT, getAlerts, addAlert } = require('./mqttClient');
const app = express();
app.use(express.json());

app.get('/api/alerts', (req, res) => {
  res.json(getAlerts());
});

app.post('/api/alerts', (req, res) => {
  try {
    const { bairro, nivel } = req.body;
    if (!bairro || typeof nivel !== 'number') {
      return res.status(400).json({ error: 'Dados inválidos' });
    }
    const alert = addAlert(bairro, nivel);
    res.status(201).json(alert);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Inicia MQTT
startMQTT();

if (require.main === module) {
  app.listen(3000, () => console.log('API rodando na porta 3000'));
}

module.exports = app;