import React from 'react';
import './App.css';
import AuthorInfo from './components/AuthorInfo';
import ProjectList from './components/ProjectList';

function App() {
    return (
        <div className="App">
            <AuthorInfo />
            <h1>Projects</h1>
            <ProjectList />
        </div>
    );
}

export default App;