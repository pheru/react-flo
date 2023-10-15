import './App.css';
import Counter from "./Counter";
import {useCallback, useEffect, useState} from "react";

function App() {
    let [counter, setCounter] = useState(0);
    let [kunden, setKunden] = useState([]);
    let eigenerSetCounter = wert => setCounter(wert);
    let callbackCounter =  useCallback(eigenerSetCounter, []);

    useEffect(() => {
       fetch("http://localhost:8080/kunde")
            .then(response => {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json();
                }
                return response.text();
            }, error => {
                return Promise.reject("Error fetching : " + error);
            })
           .then(json => setKunden(json), error => console.error(error))
    }, [])

    return (
        <div className="App">
            <p>{counter}</p>
            {
                kunden.map(kunde => <p>{kunde.vorname} {kunde.nachname}</p>)
            }
            <Counter initial={0} setGlobalCounter={callbackCounter}/>
            {/*<Counter initial={2} setGlobalCounter={setCounter}/>*/}
            {/*<Counter initial={10} setGlobalCounter={setCounter}/>*/}
        </div>
    );
}

export default App;
