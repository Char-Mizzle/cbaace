import React, { Component } from 'react';
import './Sidebar.css';
import cards from 'cards.js';

import ReactDOM from 'react-dom';

export const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);
  return (
    <React.Fragment>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`,
          }}
        ></button>
        <div className="content">{children}</div>
      </div>
    </React.Fragment>
  );
};
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Sidebar />, app);
