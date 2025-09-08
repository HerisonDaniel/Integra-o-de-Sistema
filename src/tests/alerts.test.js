const request = require('supertest');
const app = require('../app');

describe('Alert Endpoints', () => {
  it('deve criar um novo alerta', async () => {
    const res = await request(app)
      .post('/api/alerts')
      .send({ bairro: 'Praia do Futuro', nivel: 120 });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('bairro', 'Praia do Futuro');
    expect(res.body).toHaveProperty('nivel', 120);
  });

  it('deve retornar erro se dados inválidos', async () => {
    const res = await request(app)
      .post('/api/alerts')
      .send({ bairro: '' });
    expect(res.statusCode).toEqual(400);
  });

  it('deve listar alertas', async () => {
    await request(app)
      .post('/api/alerts')
      .send({ bairro: 'Mucuripe', nivel: 150 });
    const res = await request(app)
      .get('/api/alerts');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});