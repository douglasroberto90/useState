import "./PaginaInicial.css";
import { useState } from "react";

export default function PaginaInicial(){
    let [numeroAleatorio, setNumeroAleatorio] = useState(0);

    function gerarNumero(){
        const numero = Math.floor(Math.random()*(100));
        setNumeroAleatorio(numero);
    };

    return(
        <div className='conteudo-centralizado'>
        <h3> Numero aleatório</h3>
        <h1>{numeroAleatorio}</h1>
        <div className ="area-botao">
            <label>
                Clique no botão abaixo para gerar um número aleatório:
            </label>
            <button onClick={gerarNumero}>
                Gerar numero
            </button>
        </div>
        </div>
    
        );
}