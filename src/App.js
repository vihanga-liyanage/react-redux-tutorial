import React from 'react';
import {useSelector} from "react-redux";
import { incrementAction, decrementAction, loginAction } from "./actions";
import { useDispatch} from "react-redux";

function App() {

    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(incrementAction())}>+</button>
            <button onClick={() => dispatch(decrementAction())}>-</button>
            <br/>

            {isLogged ?
                <h3>You're logged in!</h3>
                :
                <div>
                    <h3>You're not logged in!</h3>
                    <button onClick={() => dispatch(loginAction())}>Login</button>
                </div>
            }
        </div>
    );
}

export default App;
