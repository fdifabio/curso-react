import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Person} from "../models/person.model";

class PersonDetailClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            person: null,
            error: ''
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        const requestOptions = {
            headers: {'Authorization': process.env.REACT_APP_TOKEN},
            method: 'GET',
        }
        fetch(process.env.REACT_APP_API_PERSON + this.props.personId, requestOptions )
            .then(response => response.json())
            .then(data =>
                this.setState({ loading: false, person: data }),
                 (error) =>
                this.setState({loading: false, error: error})
            );
    }

    handleNameChange(event) {
        this.setState({person: {...this.state.person, firstName: event.target.value}})
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
                        onChange={(event) => this.handleNameChange(event)}/>
                    </label>
                    <br/>

                    <label>
                        Apellido
                        <input type="text" value={this.state.person.lastName}/>
                    </label>
                    <br/>

                    <label>
                        Edad
                        <input type="number" value={this.state.person.age}/>
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
    personId: PropTypes.number.isRequired
}

export default PersonDetailClass;
