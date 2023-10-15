import './App.css';
import {useEffect, useState} from "react";

function Counter({initial, setGlobalCounter}) {
    let [counter, setCounter] = useState(initial);
    let [liste, setListe] = useState([1,2,3,4]);

    useEffect(() => {
        console.log("useffect")
        if (counter % 2 === 0) {
            console.log(counter)
            setGlobalCounter(counter + 1)
        }
        return () => console.log("aufräumen");
    }, [counter, setGlobalCounter]);

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => {
                setCounter(oldValue => oldValue + 1);
                setGlobalCounter(oldValue => oldValue + 1);
            }}>+1</button>
            {
                liste.map(eintrag => <p>{eintrag}</p>)
            }
            <button onClick={() =>
                setListe(oldListe => [...oldListe, oldListe.length + 1])}>
                Liste
            </button>
        </div>
    );
}

export default Counter;
