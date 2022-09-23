import React from 'react';
import './App.css';
import Header from "./components/Header";
import RouterComponent from "./components/RouterComponent";

function App() {

    return (
        <div className="app">
            <div className="browser">
                <Header/>
                <RouterComponent/>
            </div>

        </div>
    );
}

export default App;
