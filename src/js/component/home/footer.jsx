import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	return (
		<footer className="text-muted bg-dark">
			<div className="container text-center p-5">
				<p className="float-right">
					<a href="#">Back to top</a>
				</p>
				<p>Copy Right @ {props.author}</p>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	author: PropTypes.string
};

export default Footer;
