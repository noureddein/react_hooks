import React, { useEffect, useState } from "react";
/* 
    * - When we should use clean up functions ?
*/
export default function Part_3() {
    return (
        <div>
            <CleanUpExplained />

            <Example1 />
        </div>
    );
}

const CleanUpExplained = () => {
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        console.log("Effect runs!");

        // toggle statement

        // return a clean-up function
        return () => {
            console.log(
                "Wait! before running the effect, I should clear something!"
            );
            // clear something from the previous effect

            console.log("Done clearing! You can run the effect.");
        };
    }, [toggle]);

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
    );
};

const Example1 = () => {
    // ! useEffect updating state correctly

    const [number, setNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setNumber((prev) => prev + 1), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div>{number}</div>;
};

