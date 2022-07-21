import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import First from "./pages/first";
import Default from './pages/default';
import ValidatorForm from './pages/second'

function App() {

    return (
        <Routes>
            <Route element={<Default/>} path={'/'}></Route>
            <Route element={<First/>} path={'/first'}></Route>
            <Route element={<ValidatorForm/>} path={'/validator'}></Route>
        </Routes>
    );
}

export default App;
