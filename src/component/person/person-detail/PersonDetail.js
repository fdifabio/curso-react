import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import './PersonDetail.css'
import Loader from "../../loader/loader";

function PersonDetail(props) {

    const [person, setPerson] = useState({firstName: '', lastName: '', age: ''});
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        loadPerson()
    }, [])

    function loadPerson() {
        setLoading(true);
        const requestOptions = {
            headers: {'Authorization': process.env.REACT_APP_TOKEN},
            method: 'GET',
        }
        fetch(process.env.REACT_APP_API_PERSON + props.personId, requestOptions )
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setPerson(data)
            },
                (error) =>
                    setLoading(false)
            );
    }

    function handleNameChange(value) {
        setPerson({...person, firstName: value})
    }

    function handleLastNameChange(value) {
        setPerson({...person, lastName: value})
    }

    function handleAgeChange(value) {
        setPerson({...person, age: value})
    }

    function updatePerson(event) {
        //Cuidado form actualiza la pagina entera...
        event.preventDefault();

        setLoading(true)
        const requestOptions = {
            headers: {'Authorization': process.env.REACT_APP_TOKEN, 'Content-Type': 'application/json' },
            method: 'PUT',
            body: JSON.stringify(person)
        }

        fetch(process.env.REACT_APP_API_PERSON, requestOptions ).then(res => {
                if (res.status && res.status !== 200)
                    setLoading(false)

                else
                    props.onGoBack()
            },
            (error) => {
                setLoading(false)
            })
    }

    if (person) {
        return (
            <form onSubmit={(event) => updatePerson(event)} >
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

                <input style={{marginRight: "10px"}} type="submit" value="Guardar"/>
                <button onClick={() => props.onGoBack()} type="button">Cancelar</button>
            </form>
        );
    }

    else
        return (<div><Loader></Loader></div>);
}

PersonDetail.propTypes = {
    personId: PropTypes.number.isRequired,
    onGoBack: PropTypes.func.isRequired
}

export default PersonDetail;