import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = props => (
  <Link {...props} activeClassname="active" />
);

export default NavLink;