// The beginning of React building the website

import React from "react";
import PortfolioContainer from "./components/portfolio-container";
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
    return (
        <div>
            <Header />
            <PortfolioContainer />
            <Footer />
        </div>
    )
}

export default App;