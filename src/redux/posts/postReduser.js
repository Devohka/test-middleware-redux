import {
    getPosts,
    searchPost
} from "./postActions";


const defaultState = {
    posts: [],
    search: '',
};



export const postReduser = (state = defaultState, action) => {
    switch (action.type) {
        case getPosts:
            return {
                ...state,
                posts: action.payload
            }
        case searchPost:
            return {
                ...state,
                search: action.payload
            }

        default:
            return state;
    }
}