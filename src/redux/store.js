import { createStore, applyMiddleware } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReduser } from "./reduser";

import { getPostsApi } from "../servies/getPostApi";


// import Middleware from "../component/Middlewaretest";

// const middlewareOne = (store) => {
//     // return (next) => {
//     //     return (actionOne) => {
//     //         console.log(actionOne);
//     //         actionOne(store.dispatch);
//     //     }
//     // }
// };

const middlewareOne = (store) => (next) => (actionOne) => {
// У асинхроному коді actions приходять у вигляді функції ,
// а у синхроному actions є об'єктами в яких є ключ type тa payload 
    if (typeof actionOne === "function") {
        console.log(actionOne);
       return actionOne(store.dispatch);
    } 


    return next(actionOne);

};

// const middlewareTwo= (store) => (next) => (actionOne) => {
//     console.log(actionOne);
//     actionOne(store.dispatch);
// };

export const getPostThunk = () => async (dispatch) => {
    // dispatch({type: "getPosts"})
    try {
        const data = await getPostsApi();
        dispatch({type: "getPostsSuccessful", payload: data});
    } catch (error) {
        // console.log(error);
        dispatch({type: "getPostsError", payload: error});
    }
    // await fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(data => data.json())
    //     .then(data => dispatch({ type: "getPosts", payload: data }))
    //     .catch(error => console.log(error))

};


// const getPostThunk = () => {
//     return async (dispatch) => {
//         await fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(data => data.json())
//             .then(data => console.log(data))
//             .catch(error => console.log(error))
//     }
// }

export const store = createStore(rootReduser, devToolsEnhancer(applyMiddleware(middlewareOne)));

console.log(store)


