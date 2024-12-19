import http from 'k6/http';

// Taxa de chegada constante
// Quando usar:
// Executor com foco em métricas RPS
// Interações permaneçam constante independente do desempenho do objeto de teste

export const options = {
    scenarios:{
        contacts:{
            executor: 'constant-arrival-rate',
            duration:'30s',
            rate:30,
            timeUnit:'1s',
            preAllocatedVUs:50,
        },
    },
};

export default function (){
    http.get('http://test.k6.io/contatcts.php');
}