import reducer from './reducers';

const initialState = {
    cart: [{}],
    user: null,
    products: [{}, {}],
    //foco...
    number: 0
}

export {
    reducer, initialState
}