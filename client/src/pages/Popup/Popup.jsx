import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import Article from '../../modules/Article';

const Popup = () => {
  return (
    <div className="App">
      <Article url="testurl2.url"></Article>
    </div>
  );
};

export default Popup;
