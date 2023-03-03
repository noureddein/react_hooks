/* 
    * - When useEffect runs ?
        - useEffect runs after rendering the component.
        - So we will notice a delay between the text on 
        screen and the title of the page. 

    * - How useEffect runs and works?
        - Without passing dependency array : 
            The useEffect will rerender every time the 
            component change.

            1. Component render.
            2. useEffect render.

        - With a non-empty dependency array :
            The useEffect will rerender ONLY when the value
            change.

            1. Component render.
            2. useEffect render initially.
            3. useEffect rendered when the value change.

        - With an empty dependency array :
            The useEffect will run only once, after the component render.

            1. Component render.
            2. useEffect render. 

*/

import { useEffect, useState } from "react";

function Part_1() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("useEffect runs ONLY when the number changes.");

        // document.title = `You clicked ${number} times.`;
    }, [number]);

    useEffect(() => {
        console.log("useEffect runs only once, after the component render.");

        document.title = `Title of the app.`;
    }, []);

    console.count("Component rerendered!");
    return (
        <div className="App">
            <div>You clicked {number} times.</div>
            <button onClick={() => setNumber((prev) => prev + 1)}>
                Increase
            </button>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                style={{ display: "block" }}
            />
        </div>
    );
}

export default Part_1;
