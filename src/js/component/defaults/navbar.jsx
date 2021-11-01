import React from "react";
import PropTypes from "prop-types";

const onClickNav = function(e) {
	e.preventDefault();
	alert("Click!");
};
const style = {
	top: "0",
	position: "sticky",
	"z-index": "100"
};
const navbarLinks = [
	{
		url: "#",
		text: "Home",
		ref: "home"
	},
	{
		url: "#",
		text: "About",
		ref: "about"
	},
	{
		url: "#",
		text: "services",
		ref: "services"
	},
	{
		url: "#",
		text: "Contact",
		ref: "contact"
	}
];

const Navbar = props => {
	const links = navbarLinks.map((link, key) => {
		const is_active = props.navActive == link.ref ? "active" : "";
		return (
			<li
				key={key}
				className={`nav-link ${is_active}`}
				href={link.url}
				onClick={onClickNav}>
				{link.text}
			</li>
		);
	});

	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark bg-dark"
			style={style}>
			<div className="container">
				<a className="navbar-brand" href="#">
					{props.company}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">{links}</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	company: PropTypes.string,
	navActive: PropTypes.string
};

export default Navbar;
