import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import InformationInput from './components/random/InformationInput';
import FoodRandomizer from './components/random/Randomizer';
import Winner from './components/random/Winner';


class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavLink to="/">
          <strong style={{ color: "White" }}>WWEQ</strong>
        </NavLink >

        <Route exact path="/" component={InformationInput} />
        <Route exact path="/random" component={FoodRandomizer} />
        <Route exact path="/winner" component={Winner} />
      </React.Fragment >
    );
  };
}

export default Navigation;