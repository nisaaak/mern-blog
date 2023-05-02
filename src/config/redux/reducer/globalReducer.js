const initialState = {
    name: 'nisak'
}

const globalReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'riku'
        }
    }
    return state
}

export default globalReducer