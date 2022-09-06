import React, {Component} from 'react';
import PropTypes from "prop-types";
import './PersonList.css'
import PersonDetail from "../person-detail/PersonDetail";

class PersonListClass extends Component {

    constructor() {
        super();
        this.state = {
            personList: [],
            loading: false,
            selectedPerson: null
        }
    }

    componentDidMount() {
        this.loadPerson();
    }

    loadPerson() {
        this.setState({loading: true});
        const requestOptions = {
            headers: {'Authorization': process.env.REACT_APP_TOKEN},
            method: 'GET',
        }
        fetch(process.env.REACT_APP_API_PERSON, requestOptions )
            .then(response => response.json())
            .then(data =>{
                    this.setState({
                        loading: false,
                        personList: data
                    })
                },
                (error) =>
                    this.setState({loading: false})
            );
    }

    renderPersonList() {
        if (this.state.personList) {
            return (
                <div className="person-container">
                    {this.state.personList.map(p => this.renderPerson(p))}
                </div>
            )
        }
        return (<span>No hay elementos</span>)
    }

    renderPerson(person) {
        if (person) {
            return (
                <div className="person-detail" key={person.id}>
                    <span>{person.firstName + ' ' + person.lastName}</span>
                    <span>{person.age}</span>
                    <div className="button-container">
                        <button className="person-button" onClick={() => this.setState({selectedPerson: person})}>Editar</button>
                        <button>Borrar</button>
                    </div>
                </div>
            );
        }

        return;
    }

    renderDetail() {
        if (this.state.selectedPerson) {
            return (<div>
                <PersonDetail personId={this.state.selectedPerson.id} onGoBack={this.unSetSelectedPerson}></PersonDetail>
            </div>)
        }
        return ;
    }

    unSetSelectedPerson() {
        this.setState({selectedPerson: null})
    }

    render() {
        return (
            <div>
                <h2>Listado de personas</h2>
                {this.renderPersonList()}
                {this.renderDetail()}
            </div>
        );
    }
}

PersonListClass.propTypes = {
    onClickEdit: PropTypes.func.isRequired
}

export default PersonListClass;
