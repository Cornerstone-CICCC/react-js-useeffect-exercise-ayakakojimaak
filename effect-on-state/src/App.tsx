import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [message, setMessage] = useState("");
	const [likes, setLikes] = useState(0);
	const [color, setColor] = useState("red");

	const handleClick = () => {
		setLikes(likes + 1);
	};

	const handleChangeColor = () => {
		setColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
	};

	const handleMessageChange = () => {
		setMessage("Hello from React!");
	};

	useEffect(() => {
		console.log(`Current color: ${color}`);
	}, [color]);

	useEffect(() => {
		console.log(message);
	}, [message]);

	useEffect(() => {
		alert(`Likes updated to ${likes}`);
	}, [likes]);

	return (
		<div>
			<h2>Message Logger</h2>
			<button type="button" onClick={handleMessageChange}>
				Send Message
			</button>

			<h2>Like Counter</h2>
			<p>Likes: {likes}</p>
			<button type="button" onClick={handleClick}>
				Like
			</button>

			<h2>Color Box</h2>
			<button type="button" onClick={handleChangeColor}>
				Change Color
			</button>
			<div style={{ width: 100, height: 100, background: color }}>
				Color Box
			</div>
		</div>
	);
}

export default App;
