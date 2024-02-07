import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge(s1, s2){
    let array1 = [...s1];
    let array2 = [...s2];
    let finalWord = "";
    let forLenght = array1.length >= array2.length ? array1.length : array2.length;

    for(let c = 0; c < forLenght; c++){
        if(c < array1.length){
            finalWord += array1[c];
        }

        if(c < array2.length){
            finalWord += array2[c];
        }
    }

    return finalWord;
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect(function(){
        count.current = count.current + 1;
        myInput2.current.focus();
    }, [value1]);

    useEffect(function(){
        count.current++;
        myInput1.current.focus();
    }, [value2]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className='center'>
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" ref={myInput1} className="input" value={value1} onChange={e => setValue1(e.target.value)} />   
            </div>
            <SectionTitle title="Exercício #02"></SectionTitle>
            <div className='center'>
                <input type="text" ref={myInput2} className="input" value={value2} onChange={(e => setValue2(e.target.value))}/>
            </div>
        </div>
    )
}

export default UseRef
