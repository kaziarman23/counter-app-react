import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(10);
    const [addButtonDisabled, setAddButton] = useState(false);
    const [removeButtonDisabled, setRemoveButton] = useState(false);

    const AddValue = function () {
        if (count !== 20) {
            RemoveButtonOn();
            setCount(count + 1);
        } else {
            setAddButton(true);
        }
    };

    const RemoveValue = function () {
        if (count !== 0) {
            AddButtonOn();
            setCount(count - 1);
        } else {
            setRemoveButton(true);
        }
    };

    // function's for again activing the buttons
    function AddButtonOn() {
        setAddButton(false);
    }
    function RemoveButtonOn() {
        setRemoveButton(false);
    }
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>React Counter App</h1>
            <h2>Point : {count}</h2>
            <button disabled={addButtonDisabled} onClick={AddValue}>
                Add points
            </button>
            <br />
            <br />
            <button disabled={removeButtonDisabled} onClick={RemoveValue}>
                Remove points
            </button>
        </>
    );
}

export default App;
