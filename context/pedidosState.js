import React, { useReducer } from 'react';

import pedidosRedicer from './pedidosRedicer';

import PedidosContext from './pedidosContext';

import { SELECT_PRODUCT } from '../types';

const PedidosState = props => {

    const initialState = {
        pedidos:[],
        platillo:null
    }

    const [ state, dispatch ] = useReducer(pedidosRedicer, initialState);

    const selectPaty = platillo => {
        dispatch({
            type:SELECT_PRODUCT,
            payload: platillo
        })
    }

    return (
        <PedidosContext.Provider
            value={{ 
                pedidos: state.pedidos,
                platillo: state.platillo,
                selectPaty
            }}
        >
            { props.children }
        </PedidosContext.Provider>
    );
}

export default PedidosState;