import logo from './logo.svg';
import './App.css';
import PersonList from "./component/person/person-list/PersonList";
import {useState} from "react";
import PersonDetail from "./component/person/person-detail/PersonDetail";

function App() {

    const [editingPerson, setEditingPerson] = useState(null);

    const renderPersonDetail = (person) => {
        setEditingPerson(person);
    }

    const renderPerson = () => {
        if (editingPerson)
            return (<PersonDetail personId={editingPerson.id} onGoBack={renderPersonDetail}></PersonDetail>)

        else
            return (<PersonList onClickEdit={renderPersonDetail}></PersonList>)

    }

    return (
        <div className="App">
            <header className="App-header">
                {renderPerson()}
                {/*<PersonDetailClass personId={1}></PersonDetailClass>*/}
            </header>
        </div>
    );
}

export default App;
