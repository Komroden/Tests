import {Provider} from "react-redux";


import React from "react";
import {store} from "./store";
import {App} from "./App";

export const AppWrapper = () => {

    return (
        <Provider store={store}>
            <App/>
        </Provider>

    );
}