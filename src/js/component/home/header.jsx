import React from "react";
import Navbar from "./../defaults/navbar.jsx";
import PropTypes from "prop-types";

const Header = props => {
	return <Navbar company={props.company} navActive={props.navActive} />;
};

Header.propTypes = {
	company: PropTypes.string,
	navActive: PropTypes.string
};

export default Header;
