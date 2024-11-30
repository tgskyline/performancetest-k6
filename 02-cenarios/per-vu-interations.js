import http from 'k6/http';
import {sleep} from 'k6';

// Número exato de interações por usuário
// Dada a multiplicação entre VUS e Interações teremos o total de interações do teste
// Quando Usar:
// Usado quando é desejado um número exato de interações e um número exato de Vus, sua execução irá dividir as interações entre as Vus, 
// mas não por igual 

export const options = {
    scenarios:{
        contacts:{
            executor: 'per-vu-iterations',
            vus:10,
            iterations:20,
            maxDuration:'30s',
        },
    },
};

export default function (){
    http.get('http://test.k6.io/contatcts.php');
    sleep(0.5);
}