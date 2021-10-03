import React, {useEffect} from 'react';
import {Content} from "./components/Content";
import {Login} from "./components/Login";
import {Switch, useHistory} from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import {getIsAuth, initAuthAction} from "./store/user";
import {PublicRoute} from "./hocs/PublicRoute";
import {PrivateRoute} from "./hocs/PrivateRoute";






export const App:React.FC=()=> {
    const {push} = useHistory();
    const isAuth= useSelector(getIsAuth)
    const dispatch = useDispatch();
    useEffect(()=>{

        dispatch(initAuthAction)
        push('/login');
    },[])



  return (
    <div className="App">
        <Switch>

            <PublicRoute auth={isAuth}  path="/login">
                <Login/>
            </PublicRoute>
            <PrivateRoute auth={isAuth} exact path="/content">
                <Content/>
            </PrivateRoute>
        </Switch>
    </div>
  );
}


