export function numberReducer(state, action){
    switch(action.type){
        case "numberAdd2":
            return {...state, number: state.number + 2};
        case "numberMultiply7":
            return {...state, number: state.number * 7};
        case "numberDivide25":
            return {...state, number: state.number / 25};
        case "numberParse":
            return {...state, number: parseInt(state.number)};
        case "numberAddAnyNumber":
            return {...state, number: state.number + action.payload};
        default:
            return state;
    }
}