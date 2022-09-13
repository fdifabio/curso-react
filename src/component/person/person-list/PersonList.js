import React, {useEffect, useState} from 'react';
import "./PersonList.css"
import PropTypes from "prop-types";
import Loader from "../../loader/loader";
import {Link, Navigate} from "react-router-dom";

const PersonList = (props) => {

    const [personList, setPersonList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        loadPersons();
    }, [])

    function loadPersons() {
        setLoading(true);
        const requestOptions = {
            headers: {'Authorization': process.env.REACT_APP_TOKEN},
            method: 'GET',
        }
        fetch(process.env.REACT_APP_API_PERSON, requestOptions )
            .then(response => response.json())
            .then(data =>{
                    setPersonList(data);
                    setLoading(false);
                },
                (error) =>
                    setLoading(false)
            );
    }

    function renderPersonList() {
        return (
            (personList && personList.length > 0)
                ? (<div className="person-container">
                        {personList.map(p => renderPersonRow(p))}
                   </div>)
                : (<span><Loader></Loader></span>)
        )
    }

    function renderPersonRow(person) {
        if (person) {
            return (
                <div className="person-detail" key={person.id}>
                    <span>{person.firstName + ' ' + person.lastName}</span>
                    <span>{person.age}</span>
                    <div className="button-container">
                        <Link to="/detail" className="person-button" onClick={() => {
                            props.onClickEdit(person);
                        }}>Editar</Link>
                        <button>Borrar</button>
                    </div>
                </div>
            )
        }

        return;
    }

    return (
        <div>
            <h2>Listado de personas</h2>
            {renderPersonList()}
            {/*{redirect ? <Navigate to="/detail" replace/> : ''}*/}
        </div>
    );
};

PersonList.propTypes = {
    onClickEdit: PropTypes.func.isRequired
}

export default PersonList;
