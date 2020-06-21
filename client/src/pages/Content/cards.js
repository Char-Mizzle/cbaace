import React, { Component } from 'react';
import './Sidebar.css';
import ReactDOM from 'react-dom';

class cards extends Component {
  render() {
    return (
      <Sidebar width={300} height={'100vh'}>
        <h1>Nav Item</h1>
        <h1>Nav Item</h1>
        <h1>Nav Item</h1>
        <h1>Nav Item</h1>
        <h1>Nav Item</h1>
      </Sidebar>
    );
  }
}
export default cards;
