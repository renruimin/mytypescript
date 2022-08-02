import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Moment from "./pages/moment";
import Default from './pages/default';
import ValidatorForm from './pages/validator'
import AppView from "./pages/3D/appView";


function App() {

    return (
        <Routes>
            <Route element={<Default/>} path={'/'}></Route>
            <Route element={<Moment/>} path={'/moment'}></Route>
            <Route element={<ValidatorForm/>} path={'/validator'}></Route>
            <Route element={<AppView/>} path={'/3d'}></Route>
        </Routes>
    );
}

export default App;
