//Public API: Exemplo
// Realiazar cadastro de um novo usuário
// Critérios:
// Performance Test
// - Carga 10 VU por 10s
// Limites:
// - Requisição com sucesso > 95%
// - Requisição com falha inferior a %
// - Duração da requisição p(95) < 500

import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
    stages: [{ duration: '10s', target: 10 }],
    thresholds: {
        checks: ['rate > 0.95'],
        http_req_failed: ['rate < 0.01'],
        http_req_duration: ['p(95) < 500']
    }
};

export default function () { 
    const BASE_URL = 'http://test-api.k6.io';
    const USER = `${Math.random()}@mail.com;`
    const PASS = 'user123';

    console.log(USER + ' ' + PASS);

    const res = http.post(`${BASE_URL}/user/register/`, {
        username: USER,
        password: PASS,
        first_name: 'Crocodilo',
        last_name: 'Dino',
        email: USER
    });
    
    check(res, {
        'sucesso ao registrar': (r) => r.status === 201,
    });

    sleep(1)

}