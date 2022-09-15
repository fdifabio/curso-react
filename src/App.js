import logo from './logo.svg';
import './App.css';
import PersonList from "./component/person/person-list/PersonList";
import {useState} from "react";
import PersonDetail from "./component/person/person-detail/PersonDetail";
import {Modal} from "react-bootstrap";
import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom";
import Login from "./component/Login/Login";
import Layout from "./component/layout/Layout";
import {useObservable} from "@ngneat/react-rxjs";
import {auth$} from "./component/auth.repository.js";

function App() {

    const [editingPerson, setEditingPerson] = useState(null);
    const [user] = useObservable(auth$);

    const renderPersonDetail = (person) => {
        setEditingPerson(person);
    }

    const ProtectedRoute = ({ user}) => {
        if (!user || !user[0]?.token) {
            return <Navigate to="/login" replace />;
        }

        return <Outlet />;
    };

    return (

        <div className="App">

            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="login" element={<Login />} />

                        <Route element={<ProtectedRoute user={user}/>}>
                            <Route path='/' element={<Layout></Layout>}>
                                <Route path="list" element={<PersonList onClickEdit={renderPersonDetail}></PersonList>} />
                                <Route path="detail" element={<PersonDetail personId={editingPerson?.id} onGoBack={renderPersonDetail} />} />
                            </Route>
                        </Route>

                        <Route path="*" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
