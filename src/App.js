import logo from './logo.svg';
import './App.css';
import PersonList from "./component/person/person-list/PersonList";
import {useState} from "react";
import PersonDetail from "./component/person/person-detail/PersonDetail";
import {Modal} from "react-bootstrap";
import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom";
import Login from "./component/Login/Login";
import Layout from "./component/layout/Layout";

function App() {

    const [editingPerson, setEditingPerson] = useState(null);
    const [user, setUser] = useState(null);

    const renderPersonDetail = (person) => {
        setEditingPerson(person);
    }

    const setLoggedUser = (user) => {
        setUser(user)
    }

    const ProtectedRoute = ({ user}) => {
        if (!user) {
            return <Navigate to="/login" replace />;
        }

        return <Outlet />;
    };

    return (

        <div className="App">

            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="login" element={<Login onLogin={setLoggedUser} />} />

                        <Route element={<ProtectedRoute user={user}/>}>
                            <Route path='/' element={<Layout></Layout>}>
                                <Route path="list" element={<PersonList onClickEdit={renderPersonDetail}></PersonList>} />
                                <Route path="detail" element={<PersonDetail personId={editingPerson?.id} onGoBack={renderPersonDetail} />} />
                            </Route>
                        </Route>

                        <Route path="*" element={<Login onLogin={setLoggedUser} />} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
