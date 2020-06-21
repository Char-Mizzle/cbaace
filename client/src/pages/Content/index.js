import React, { Component } from 'react';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ReactDOM from 'react-dom';
import './content.styles.css';

export default class SidePanel extends Component {
  render() {
    return (
      <SideNav
        style={{}}
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav style={{}} defaultSelected="home">
          <NavItem>
            <NavText>
              <div>
                <button id="annotateButton">Annotate</button>
              </div>
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<SidePanel />, app);
