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
	/* 	constructor() {
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
    }; */

	constructor() {
		super();
		this.state = {
			clase: " "
		};
	}

	iluminar = () => {
		//	alert("adios");

		this.setState({
			clase: "light"
		});
	};

	render() {
		return (
			<div className="trafficlight ">
				<div className="poste" />
				<div className="caja">
					<div
						onClick={this.iluminar}
						className={this.state.clase}
						id="red"
					/>
					<div className={this.state.clase} id="orange" />
					<div
						onClick={this.iluminaDos}
						className={this.state.clase}
						id="green"
					/>
				</div>
			</div>
		);
	}
}

//render your react application
ReactDOM.render(<Iluminar />, document.querySelector("#app"));
