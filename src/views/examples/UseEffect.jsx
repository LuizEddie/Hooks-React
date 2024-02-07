import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    if(num === "") return -1;
    const n  = parseInt(num);
    if(n < 0) return -1;
    if(n === 0) return 1;
    
    return calcFatorial(n -1) * n;
}

function calcParImpar(num){
    if(num === "") return "Erro";
    const n = parseInt(num);
    if(n % 2 === 0) return "Par";

    return "Impar";
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [parImpar, setParImpar] = useState("Impar");

    useEffect(function(){
        setFatorial(calcFatorial(number));
        setParImpar(calcParImpar(number));
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01"></SectionTitle>
            <div className="center">
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                <input type="number" className="input" value={number} onInput={e => setNumber(e.target.value)}/>
            </div>
            <SectionTitle title="Exercicio #02"></SectionTitle>
            <div className="center">
                <span className="text">Par ou Impar?</span>
                <span className="text red">{parImpar}</span>
            </div>
        </div>
    )
}

export default UseEffect
