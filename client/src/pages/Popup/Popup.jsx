import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import AnnoCard from "../../containers/Cards/Card";

const Popup = () => {
  return (
    <div className="App">
      <AnnoCard
        tag={"correct"}
        summary={"Don’t confuse with Redwood"}
        annoText={"It was indeed Greenwood. Some are confused between Redwood and Greenwood."}
        reference={"http://www.phinneyridge.org/phinney-ridge-greenwood/"}
        date={"12.12.12"}
        userName={"Sudara_Ran"}
      ></AnnoCard>
    </div>
  );
};

export default Popup;
