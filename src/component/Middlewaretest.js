import {getPostThunk} from "../redux/store";
import { useDispatch } from "react-redux";


function MiddlewareTest() {
    const dispatch = useDispatch();

    const onGetData = (e) => {
    dispatch(getPostThunk());
        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then(data => data.json())
        // .then(data => console.log(data))
        // .catch(error => console.log(error))
    };

    return (
        <>
            <div>
                <h1>Middleware</h1>
                <button type="button" onClick={onGetData}>click</button>
            </div>
        </>
    );
};

export default MiddlewareTest;