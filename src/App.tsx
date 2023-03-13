import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Moment from "./pages/moment";
import Default from './pages/default';
import ValidatorForm from './pages/validator'
import AppView from "./pages/3D/appView";
import BlurCanvas from "./pages/blurCanvas";
import TestUseEffect from "./pages/TestUseEffect";
import TestUseMemo from "./pages/TestUseMemo";
import TestReactHooks2 from "./pages/TestReactHooks2";
import Parent from "./pages/FunctionComponent/Parent";
import MyScale from "./pages/myScale";
import MyQrcode from "./pages/MyQrcode";
import MyDragTable from "./pages/MyDragTable";
import MyClassComponent from "./pages/MyClassComponent";
import MyCheckbox from "./pages/MyCheckbox";
import MyEditTable from "./pages/MyEditTable";


function App() {

    return (
        <Routes>
            <Route element={<Default/>} path={'/'}></Route>
            <Route element={<Moment/>} path={'/moment'}></Route>
            <Route element={<ValidatorForm/>} path={'/validator'}></Route>
            <Route element={<AppView/>} path={'/3d'}></Route>
            <Route element={<BlurCanvas/>} path={'/blurCanvas'}></Route>
            <Route element={<TestUseEffect/>} path={'/testUseEffect'}></Route>
            <Route element={<TestUseMemo/>} path={'/testUseMemo'}></Route>
            <Route element={<TestReactHooks2/>} path={'/testReactHooks2'}></Route>
            <Route element={<Parent/>} path={'/parent'}></Route>
            <Route element={<MyScale/>} path={'/myScale'}></Route>
            <Route element={<MyQrcode/>} path={'/qrcode'}></Route>
            <Route element={<MyClassComponent/>} path={'/myClassComponent'}></Route>
            <Route element={<MyCheckbox/>} path={'/myCheckbox'}></Route>
            <Route element={<MyDragTable/>} path={'/DragTable'}></Route>
            <Route element={<MyEditTable/>} path={'/editTable'}></Route>
        </Routes>
    );
}

export default App;
