import React from "react";

class Control extends React.Component {
	constructor(props) {
		super(props);
		this.playOnClick = this.playOnClick.bind(this);
	}
	playOnClick(e) {
		document.getElementById(this.props.data.text).play();
		this.props.handleChange(this.props.data.soundID);
	}
	render() {
		return (
			<div id={this.props.data.soundID} className="drum-pad" onClick={this.playOnClick}>
				<audio id={this.props.data.text} className="clip" src={this.props.data.source}/>
				{this.props.data.text}
			</div>
		);
	}
}

export default Control;
