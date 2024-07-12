const createStore = (reducer) => {
    let state = reducer(undefined, { type: '__INIT__' })

    return {
        getState: () => state,
        dispatch: action => state = reducer(state, action),
    }
}

const initialState = {
    count: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.payload
            }

        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.payload
            }

        default:
            return {
                ...state
            }
    }
}

const store = createStore(reducer)

console.log(store.getState());