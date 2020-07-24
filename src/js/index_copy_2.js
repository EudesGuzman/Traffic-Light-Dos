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
			clase: " "
		};
	}

	iluminar = () => {
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
					<div
						onClick={this.iluminar}
						className={this.state.clase}
						id="orange"
					/>
					<div
						onClick={this.ilumina}
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
