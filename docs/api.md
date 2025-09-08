# Documentação das Rotas da API

## GET /api/alerts
- Retorna lista de alertas registrados.
- Exemplo de resposta:
```json
[
  { "bairro": "Mucuripe", "nivel": 110, "timestamp": 1694189256000 }
]
```

## POST /api/alerts
- Cria novo alerta manualmente.
- Corpo esperado:
```json
{ "bairro": "Pirambu", "nivel": 130 }
```
- Resposta:
```json
{ "bairro": "Pirambu", "nivel": 130, "timestamp": 1694189256000 }
```

## Erros
- 400: Dados inválidos
- 500: Erro interno do servidor