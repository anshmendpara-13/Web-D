import React, { Component } from 'react';
import "../gharnicss.css";

class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: props.message,
            isToggled: false
        }
    }

    toggleMessage() {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled,
            message: prevState.isToggled ? this.props.message : "Thank you for subscribing!"
        }));
    }

    render() {
        return (
            <div>
                <h1 className='bluecolor'>{this.state.message}!</h1>
                <button onClick={() => this.toggleMessage()}>
                    {this.state.isToggled ? "Un-Subscribe" : "Subscribe"}
                </button>

            </div>
        );
    }
}

export default ClassComponent;
