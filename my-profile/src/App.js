import './App.css';
import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import About from './components/about';
import Tech from './components/tech';
import Contact from './components/contact';
import Footer from './components/footer';
import Project from './components/project';
import projects from './projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><Header /></div>
        <div><Navigation /></div>
      </header>
      <div><About /></div>
      <div><Tech /></div>
      <div><Project projects={projects} /></div>
      <div><Contact /></div>
      <footer>
        <div><Footer /></div>
      </footer>
    </div>
  );
}

export default App;
