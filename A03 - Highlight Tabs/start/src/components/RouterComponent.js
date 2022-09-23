import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Features from "./Features";
import About from "./About";

const RouterComponent = () => {
    return (
        <div className="viewport">
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/features'} element={<Features/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </div>
    );
};

export default RouterComponent;
