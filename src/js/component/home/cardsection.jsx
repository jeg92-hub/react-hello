import React from "react";
import Card from "./../defaults/card.jsx";

const number_cards = 12;

const CardSection = () => {
	const cards = [];
	for (var i = 0; i < number_cards; i++) {
		cards.push(<Card />);
	}

	return (
		<div className="album py-5 bg-light">
			<div className="container">
				<div className="row">{cards}</div>
			</div>
		</div>
	);
};

export default CardSection;
