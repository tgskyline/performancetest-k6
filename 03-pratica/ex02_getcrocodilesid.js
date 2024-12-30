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
import { check, sleep } from 'k6'; 
import { SharedArray } from 'k6/data'; 
// Sleep = tempo de intervalo de interações para vus

// Target = vus
export const options = {
    stages:[
        { duration: '10s', target: 10 },
        { duration: '10s', target: 10 },
        { duration: '10s', target: 0 },
    ],
    thresholds: {
        checks: ['rate > 0.95'],
        http_req_duration: ['p(95) < 200'] /// Aqui é esperado que 95% das requisições alcancem 200ms
    },
    ext: {
    loadimpact: {
        projectID: '3733461',
        name: 'Curso k6'
            },    
        }
    }

// Função para acessar o JSON e o objeto CROCODILES
const data = new SharedArray('Leitura do json', function () {  
    return JSON.parse(open('/archives/dados.json')).crocodilos
})

export default function () {
    const crocodilo = data[Math.floor(Math.random() * data.length)].id
    
    const BASE_URL = `https://test-api.k6.io/public/crocodiles/${crocodilo}`;

    const res = http.get(BASE_URL);

    check(res, {
        'status code 200': (r) => r.status === 200
    });

    sleep(1)
}