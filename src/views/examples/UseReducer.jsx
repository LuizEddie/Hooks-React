import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer} from "../../store/index";
import { numberAdd2, login} from '../../store/actions';


const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {
                    state.user ? 
                    <span className="text">{state.user.name}</span>
                    :
                    <span className="text">Sem usuário</span>
                }
                
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={()=>login(dispatch, 'João')}>Login</button>
                    <button className="btn" onClick={()=>numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={()=>dispatch({type: 'numberMultiply7'})}>x7</button>
                    <button className="btn" onClick={()=>dispatch({type: 'numberDivide25'})}>/2</button>
                    <button className="btn" onClick={()=>dispatch({type: 'numberParse'})}>Tranformar em Inteiro</button>
                    <button className="btn" onClick={()=>dispatch({type: 'numberAddAnyNumber', payload: 50})}>+50</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
