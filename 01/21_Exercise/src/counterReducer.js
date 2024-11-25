const initialState = { count:0 }
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return {count: state.count + 1}
            break;
        case 'Decrement':
            return {count: state.count - 1}
            break;
        case 'incrementByAmount':
            return {count: state.count + action.payload}
            break;
        case 'decrementByAmount':
            return {count: state.count - action.payload}
            break;
        default:
            return state;
    }
}

export {initialState, counterReducer}