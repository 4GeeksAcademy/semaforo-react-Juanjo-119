import React, { useState } from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	const cycleColor = () => {
		if (color === "red") setColor("green");
		else if (color === "green") setColor("yellow");
		else setColor("red");
	};

	return (
		<div className="traffic-light">
			<div
				className={`light red ${color === "red" ? "active" : ""}`}
				onClick={() => setColor("red")}
			></div>
			<div
				className={`light yellow ${color === "yellow" ? "active" : ""}`}
				onClick={() => setColor("yellow")}
			></div>
			<div
				className={`light green ${color === "green" ? "active" : ""}`}
				onClick={() => setColor("green")}
			></div>
			<button onClick={cycleColor} className="toggle-btn">Cambia</button>
		</div>
	);
}

export default Home;