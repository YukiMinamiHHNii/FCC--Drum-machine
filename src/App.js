import React, { Component } from "react";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div id="drum-machine">
				<div id="display">
					<h3>Placeholder</h3>
				</div>
				<div id="machine-controls">
					<div id="sound1" className="drum-pad">
						<audio src="#" />Q
					</div>
					<div id="sound1" className="drum-pad">
						<audio src="#" />W
					</div>
					<div id="sound2" className="drum-pad">
						<audio src="#" />E
					</div>
					<div id="sound3" className="drum-pad">
						<audio src="#" />A
					</div>
					<div id="sound4" className="drum-pad">
						<audio src="#" />S
					</div>
					<div id="sound5" className="drum-pad">
						<audio src="#" />D
					</div>
					<div id="sound6" className="drum-pad">
						<audio src="#" />Z
					</div>
					<div id="sound7" className="drum-pad">
						<audio src="#" />X
					</div>
					<div id="sound8" className="drum-pad">
						<audio src="#" />C
					</div>
				</div>
			</div>
		);
	}
}

export default App;
