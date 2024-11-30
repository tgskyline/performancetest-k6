//Public API: Exemplo 1
// Buscar todos os crocodilos
// Critérios:
// Smoke Test
// - 1 Usuário por 30 segundos
// Limites:
// - Requisição com sucesso > 99%

import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus:1,
    duration: '30s',
    thresholds: {
        checks: ['rate > 0.99']
    }
}

export default function() {
    const BASE_URL = 'https://test-api.k6.io/public/crocodiles/';

    const res = http.get(BASE_URL);

    check(res, {
        'status code 200': (r) => r.status === 200
    });
}