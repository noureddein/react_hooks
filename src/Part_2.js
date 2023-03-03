import { useState, useEffect, useMemo } from "react";

/* 
    * - Primitive and none-primitive dependencies
        - Strings, numbers, undefined, null, booleans are primitive data types.
        - Objects, arrays are non-primitive data types.
          ex. 
              const x = {name: "John"}
              const y = {name: "John"}

              x == y // false, because x and y have a different memory locations

              const z = y

              z == y // true, because z referencing to the same location of y in memory.
*/
export default function Part_2() {
    return (
        <>
            {/* <Mistake_1 />) */}
            <Mistake_2 />
        </>
    );
}

const Mistake_1 = () => {
    // ! useEffect dependency mistakes

    const [name, setName] = useState("");
    const [state, setState] = useState({
        name,
        selected: false,
    });

    const user = useMemo(
        () => ({
            name: state.name,
            selected: state.selected,
        }),
        [state.name, state.selected]
    );

    const handleAdd = () => setState((prev) => ({ ...prev, name }));
    const handleSelect = () =>
        setState((prev) => ({ ...prev, selected: true }));

    useEffect(() => {
    /* 
        If state is a non-primitive data type and used directly 
        with the useEffect, this will leeds to fire up the useEffect hook every time 
        we click the handleAdd or handleSelect function even if the values didn't changed.
    */
        // console.log(`The state has changed, useEffect runs!`);
    }, [state]);

    useEffect(() => {
        console.log(`The state has changed, useEffect runs!`);

        /* 
        OR the dependency can be [ state.name, state.selected ]
      */
    }, [user]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                style={{ display: "block" }}
            />
            <button onClick={handleAdd}>Add name</button>
            <button onClick={handleSelect}>select</button>

            <div>
                {`{
        name: ${state.name},
        selected: ${state.selected}
      }`}
            </div>
        </div>
    );
};

const Mistake_2 = () => {
    // ! useEffect updating state correctly

    const [number, setNumber] = useState(0);

    useEffect(() => {
        /* 
        ! This way is wrong because it leeds to infinite loop and create
        ! new interval every time the useEffect fire up.
      */
        //     setInterval(() => setNumber(number + 1), 1000);
    }, [number]);

    useEffect(() => {
        /* 
          ! Tis way is wrong because every time the component render
          ! we create a new setInterval without clear the previous one.

          To solve this problem we should use Clean-up function
      */
        // console.log("effect");
        // setInterval(() => setNumber(prev => prev + 1), 1000);
    }, []);

    useEffect(() => {
        // ! This way is wrong because and leeds to infinite loop
        //     setInterval(() => setNumber(number + 1), 1000);
    }, []);

    return <div>{number}</div>;
};
