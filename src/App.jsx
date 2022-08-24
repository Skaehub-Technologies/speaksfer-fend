import React from 'react';
import BaseRouter from './constants/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss';
import './utilities/Validators';

function App() {
  return (
    <div className="App">
      <BaseRouter />
    </div>
  );
}

export default App;
