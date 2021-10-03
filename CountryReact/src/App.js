import React from 'react';
import {Area} from "./components/Area";
import {AreaTwo} from "./components/AreaTwo";
import {Header} from "./components/Header";
import { Route, Switch } from 'react-router-dom';



export function App() {
  return(
    <div>

      <Header/>
      <Switch>
        <Route exact path="/">
        <Area/>
        </Route>
        <Route  path="/2">
        <AreaTwo/>
        </Route>
      </Switch>

    </div>

    
  ) 
}


