import logo from './logo.svg';
import './App.css';
import PersonList from "./component/person/person-list/PersonList";
import {useState} from "react";
import PersonDetail from "./component/person/person-detail/PersonDetail";
import {Modal} from "react-bootstrap";

function App() {

    const [editingPerson, setEditingPerson] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const renderPersonDetail = (person) => {
        setEditingPerson(person);
        setShowModal(person != null);
    }

    return (
        <div className="App">
            <header className="App-header">
                <PersonList onClickEdit={renderPersonDetail}></PersonList>
                <Modal show={showModal}>
                    <PersonDetail personId={editingPerson?.id} onGoBack={renderPersonDetail}></PersonDetail>
                </Modal>
            </header>
        </div>
    );
}

export default App;
