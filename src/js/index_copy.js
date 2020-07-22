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
			nombre: "Alvaro"
		};
	}

	despedirse = () => {
		//	alert("adios");
		this.setState({
			nombre: "Alexis"
		});
	};

	render() {
		return (
			<div className="trafficlight ">
				<div className="poste" />
				<div className="caja">
					<h1 onClick={this.despedirse}>Hola {this.state.nombre}</h1>
					<div className="red" />
					<div className="orange" />
					<div className="green" />
				</div>
			</div>
		);
	}
}

//render your react application
ReactDOM.render(<Iluminar />, document.querySelector("#app"));
