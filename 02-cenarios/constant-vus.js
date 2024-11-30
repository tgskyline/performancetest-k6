import http from 'k6/http';
import {sleep} from 'k6';

// Executa quanta requisições forem possíveis dentro da duração máxima desejada
// Quando usar:
// Com o número específico de Vus seja executado em um período especificado de tempo

export const options = {
    scenarios:{
        contacts:{
            executor: 'constant-vus',
            vus:10,
            duration:'30s',
        },
    },
};

export default function (){
    http.get('http://test.k6.io/contatcts.php');
    sleep(0.5);
}