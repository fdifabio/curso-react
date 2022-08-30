import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Person} from "../models/person.model";

class PersonDetailClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: null
        }
    }

    componentDidMount() {
        this.setState({person: this.props.person});
    }

    handleNameChange(value) {
        this.setState({person: {...this.state.person, firstName: value}})
    }

    handleLastNameChange(value) {
        this.setState({person: {...this.state.person, lastName: value}})
    }

    handleAgeChange(value) {
        this.setState({person: {...this.state.person, age: value}})
    }

    render() {
        if (this.state.person) {
            return (
                <div>
                    <p>Editar la informacion de una persona</p>

                    <label>
                        Nombre
                        <input type="text" value={this.state.person.firstName}
                               onChange={e => this.handleNameChange(e.target.value)}/>
                    </label>
                    <br/>

                    <label>
                        Apellido
                        <input type="text" value={this.state.person.lastName}
                               onChange={e => this.handleLastNameChange(e.target.value)}/>
                    </label>
                    <br/>

                    <label>
                        Edad
                        <input type="number" value={this.state.person.age}
                               onChange={e => this.handleAgeChange(e.target.value)}/>
                    </label>
                    <br/>
                </div>
            );
        }
        else
            return (<div></div>);
    }
}

PersonDetailClass.propTypes = {
    person: PropTypes.instanceOf(Person)
}


export default PersonDetailClass;
