import React from 'react';
import Stopwatch from './components/Stopwatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center py-5">
          <h1 className="display-4 text-white mb-3">
            <i className="fas fa-stopwatch me-3" style={{ color: '#aa00ff' }}></i>
            Stopwatch App
          </h1>
          <p className="lead text-white-50">
            A precise stopwatch with lap timing functionality
          </p>
        </header>
        
        <main>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="card-custom">
                <Stopwatch />
              </div>
            </div>
          </div>
        </main>
        
        <footer className="text-center py-4 mt-5">
          <p className="text-white-50 mb-2">
            Built with React & TypeScript
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a 
              href="https://github.com/AlperDog/stopwatch-app" 
              className="btn btn-outline-light btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github me-2"></i>
              Source Code
            </a>
            <a 
              href="https://alperdog.github.io/portfolio" 
              className="btn btn-outline-light btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-user me-2"></i>
              Portfolio
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App; 