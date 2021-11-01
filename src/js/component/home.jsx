import React from "react";
import Header from "./home/header.jsx";
import Body from "./home/body.jsx";
import Footer from "./home/footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Header navActive="home" company="Start Bootstrap" />
			<Body />
			<Footer author="Jon Egaña" />
		</div>
	);
};

export default Home;
