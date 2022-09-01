import React from "react";

class WelcomeClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            state1: 0
        }
    }

    componentDidUpdate(prevPros, prevState, snapshot) {
        //Bucle infinito
        this.setState({state1: 1});
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h1>{this.state.state1}</h1>
            </div>
        );
    }
}

export default WelcomeClass;

