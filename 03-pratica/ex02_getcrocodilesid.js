//Public API: Exemplo 2
// Buscar crocodilos por id
// Critérios:
// Performance Test
// - Ramp up 10 VU em 10s
// - Carga 10 VU por 10s
// - Ramp Down 0 VU em 10s
// Limites:
// - Requisição com sucesso > 95%
// - Tempo requisição p(90) < 200

import http from 'k6/http';
import { check,sleep } from 'k6';
// Sleep = tempo de intervalo entre vus

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