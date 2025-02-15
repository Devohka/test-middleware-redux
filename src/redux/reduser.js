
import { combineReducers } from "redux";
import {postReduser} from "./posts/postReduser";


export const rootReduser = combineReducers({
    posts: postReduser,
}) 

