import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";
import {setAuth} from "../auth.repository.js";

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    function handleUsernameChange(value) {
        setUsername(value)
    }

    function handlePasswordChange(value) {
        setPassword(value)
    }

    function login(event) {
        //Cuidado form actualiza la pagina entera...
        event.preventDefault();

        const requestOptions = {
            headers: {'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            })
        }

        fetch(process.env.REACT_APP_API_LOGIN, requestOptions ).then(res => res.json()).then(res => {
                console.log(res);
                if (res.token) {
                    setAuth([{id: 1, token: res.token}])
                    setRedirect(true);
                }
            },
            (error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <Card>
                <Card.Body style={{color: 'black'}}>
                    <form onSubmit={(event) => login(event)} >
                        <p>Iniciar Session</p>

                        <label>
                            Username
                            <input type="text" value={username} onChange={ e => handleUsernameChange(e.target.value)}/>
                        </label>
                        <br/>

                        <label>
                            Password
                            <input type="text" value={password} onChange={e => handlePasswordChange(e.target.value)}/>
                        </label>
                        <br/>

                        <input style={{marginRight: "10px"}} type="submit" value="Login"/>
                    </form>
                </Card.Body>
            </Card>

            {redirect ? <Navigate to="/list"></Navigate> : ''}
        </div>
    );
};

export default Login;
