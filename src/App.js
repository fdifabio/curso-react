import logo from './logo.svg';
import './App.css';
// import Welcome from "./Welcome";
// import WelcomeClass from "./WelcomeClass";
import PersonDetail from "./component/PersonDetail";
import {Person} from "./models/person.model";
import PersonDetailClass from "./component/PersonDetailClass";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                {/*<Welcome name={'Federico'}></Welcome>*/}
                {/*<WelcomeClass></WelcomeClass>*/}

                {/*<PersonDetail personId={1}></PersonDetail>*/}
                <PersonDetailClass personId={1}></PersonDetailClass>
            </header>
        </div>
    );
}

export default App;
