import React from "react";
import "./App.css";
import Control from "./Control.js";
import sound001 from "./resources/001.wav";
import sound002 from "./resources/002.wav";
import sound003 from "./resources/003.wav";
import sound004 from "./resources/004.wav";
import sound005 from "./resources/005.wav";
import sound006 from "./resources/006.wav";
import sound007 from "./resources/007.wav";
import sound008 from "./resources/008.wav";
import sound009 from "./resources/009.wav";

let soundsData = [
	{ text: "Q", soundID: "Bulbasaur", source: sound001, key: 113 },
	{ text: "W", soundID: "Ivysaur", source: sound002, key: 119 },
	{ text: "E", soundID: "Venusaur", source: sound003, key: 101 },
	{ text: "A", soundID: "Charmander", source: sound004, key: 97 },
	{ text: "S", soundID: "Charmeleon", source: sound005, key: 115 },
	{ text: "D", soundID: "Charizard", source: sound006, key: 100 },
	{ text: "Z", soundID: "Squirtle", source: sound007, key: 122 },
	{ text: "X", soundID: "Wartortle", source: sound008, key: 120 },
	{ text: "C", soundID: "Blastoise", source: sound009, key: 99 }
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.playOnKeyPress = this.playOnKeyPress.bind(this);
		this.state = {
			nowPlaying: ""
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		document.addEventListener("keypress", this.playOnKeyPress);
	}
	playOnKeyPress(e) {
		let sound;
		switch (e.charCode) {
			case soundsData[0].key:
				document.getElementById(soundsData[0].text).play();
				sound = soundsData[0].soundID;
				break;
			case soundsData[1].key:
				document.getElementById(soundsData[1].text).play();
				sound = soundsData[1].soundID;
				break;
			case soundsData[2].key:
				document.getElementById(soundsData[2].text).play();
				sound = soundsData[2].soundID;
				break;
			case soundsData[3].key:
				document.getElementById(soundsData[3].text).play();
				sound = soundsData[3].soundID;
				break;
			case soundsData[4].key:
				document.getElementById(soundsData[4].text).play();
				sound = soundsData[4].soundID;
				break;
			case soundsData[5].key:
				document.getElementById(soundsData[5].text).play();
				sound = soundsData[5].soundID;
				break;
			case soundsData[6].key:
				document.getElementById(soundsData[6].text).play();
				sound = soundsData[6].soundID;
				break;
			case soundsData[7].key:
				document.getElementById(soundsData[7].text).play();
				sound = soundsData[7].soundID;
				break;
			case soundsData[8].key:
				document.getElementById(soundsData[8].text).play();
				sound = soundsData[8].soundID;
				break;
		}
		this.handleChange(sound);
	}
	handleChange(data) {
		return this.setState({
			nowPlaying: data
		});
	}
	render() {
		return (
			<div id="drum-machine">
				<div id="machine-display">
					<h3 id="display">{this.state.nowPlaying}</h3>
				</div>
				<div id="machine-controls">
					<Control data={soundsData[0]} handleChange={this.handleChange} />
					<Control data={soundsData[1]} handleChange={this.handleChange} />
					<Control data={soundsData[2]} handleChange={this.handleChange} />
					<Control data={soundsData[3]} handleChange={this.handleChange} />
					<Control data={soundsData[4]} handleChange={this.handleChange} />
					<Control data={soundsData[5]} handleChange={this.handleChange} />
					<Control data={soundsData[6]} handleChange={this.handleChange} />
					<Control data={soundsData[7]} handleChange={this.handleChange} />
					<Control data={soundsData[8]} handleChange={this.handleChange} />
				</div>
			</div>
		);
	}
}

export default App;
