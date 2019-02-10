const initialState = {
    results: [],
    data: {},
    isLoading: false,
    isError: false
}

export default function projectReducer(state=initialState, action){
    switch(action.type){
        case "ALL_PROJECTS_PENDING":
            return {...state, isLoading: true}
        case "ALL_PROJECTS_FULFILLED":
            return {...state, isLoading: false, results: action.payload.data}
        case "ALL_PROJECTS_REJECTED":
            return {...state, isLoading: false, isError: true}
        case "GET_PROJECT":
            return {...state, data: action.payload}
        default:
            return state
    }
}