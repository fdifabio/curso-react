import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {Person} from "../models/person.model";

function PersonDetail(props) {

    const [person, setPerson] = useState({firstName: '', lastName: '', age: ''});

    // useEffect(() => {
    //     setPerson({id: props.personId, firstName: "Juan", lastName: 'Perez', age: 19})
    // }, [])
    // useEffect(() => {
    //     fetch("").then(res => setPerson(res));
    //     return () => {console.log("hacer algo al desmontar")}
    // }, [])

    useEffect(() => {
        setPerson({id: props.personId, firstName: "Juan", lastName: 'Perez', age: 19})
    }, [person])


    function handleNameChange(value) {
        setPerson({...person, firstName: value})
    }

    function handleLastNameChange(value) {
        setPerson({...person, lastName: value})
    }

    function handleAgeChange(value) {
        setPerson({...person, age: value})
    }

    if (person) {
        return (
            <div >
                <p>Editar la informacion de una persona</p>

                <label>
                    Nombre
                    <input type="text" value={person.firstName} onChange={ e => handleNameChange(e.target.value)}/>
                </label>
                <br/>

                <label>
                    Apellido
                    <input type="text" value={person.lastName} onChange={e => handleLastNameChange(e.target.value)}/>
                </label>
                <br/>

                <label>
                    Edad
                    <input type="number" value={person.age} onChange={e => handleAgeChange(e.target.value)}/>
                </label>
                <br/>
            </div>
        );
    }

    return (<div></div>);
}

PersonDetail.propTypes = {
    personId: PropTypes.number.isRequired
}

export default PersonDetail;
