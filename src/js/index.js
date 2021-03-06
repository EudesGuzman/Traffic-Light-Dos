//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

class Iluminar extends React.Component {
	constructor() {
		super();
		this.state = {
			iluminate: " "
		};
	}

	render() {
		let luzRoja = "";
		let luzAmarilla = "";
		let luzVerde = "";
		if (this.state.iluminate == "rojo") luzRoja = "light";
		if (this.state.iluminate == "amarillo") luzAmarilla = "light";
		if (this.state.iluminate == "verde") luzVerde = "light";

		return (
			<div className="trafficlight ">
				<div className="poste" />
				<div className="caja">
					<div
						className={"red " + luzRoja}
						onClick={() => this.setState({ iluminate: "rojo" })}
					/>
					<div
						className={"yellow " + luzAmarilla}
						onClick={() => this.setState({ iluminate: "amarillo" })}
					/>
					<div
						className={"green " + luzVerde}
						onClick={() => this.setState({ iluminate: "verde" })}
					/>
				</div>
			</div>
		);
	}
}

//render your react application
ReactDOM.render(<Iluminar />, document.querySelector("#app"));
