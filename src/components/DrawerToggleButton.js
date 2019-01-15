import React from 'react';

const DrawerToggleButton = props => (
  <>
    <input type="checkbox" id="burger-menu" onClick={props.click} />
    <label for="burger-menu" id="burger-menu__icon">&#9776;</label>
  </>
);

export default DrawerToggleButton;
