import React from 'react';
<<<<<<< HEAD:client/src/App.js
import './App.css';
import Modal from './Components/Modal';
import ModalProvider from './Contexts/ModalProvider';

/**
 * @return {null}
 */
function App() {
  return (
    <ModalProvider>
      <Modal />
    </ModalProvider>
=======
import logo from '../../assets/img/logo.svg';
import './Newtab.css';

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Newtab/Newtab.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 1c1af23cf4f17ddc441fff6ba1a50d5709651de1:client/src/pages/Newtab/Newtab.jsx
  );
};

export default Newtab;
