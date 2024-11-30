import http from 'k6/http';
import {sleep} from 'k6';

// Compartilhamento de Interações
// Cenário que delimita um tempo de execução para um número exato de interações que serão distribuidas entre as VU`s
// Quando usar:
// Usado quando é desejado um número especifico de Vus, interação não é determinado mas ter um controle do tempo total do teste 

export const options = {
    scenarios:{
        contacts:{
            executor: 'shared-iterations',
            vus:10,
            iterations: 200,
            maxDuration:'30s',
        },
    },
};

export default function (){
    http.get('http://test.k6.io/contatcts.php');
    sleep(0.5);
}