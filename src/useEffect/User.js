import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

/* 
    - Without clean-up function:
        if we fetched user 1 , user 2, and user 3 we will notice that
        the component show us the data of user 1 and user 2 and user 3

    - With clean-up function:
        If we fetched the user 1, user 2, and user 3, we will notice the 
        the third user will only appear

        with clean up function we can abort any unneeded request and stick 
        with the last request

*/

export default function User() {
    const [user, setUser] = useState({});
    const id = useLocation().pathname.split("/")[2];

    // ! This way use the clean up without cancelling the API request
    // useEffect(() => {
    //     let unsubscribed = false;

    //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (!unsubscribed) {
    //                 setUser(data);
    //             }
    //         });

    //     return () => {
    //         console.log("Cancelled!");
    //         unsubscribed = true;
    //     };
    // }, [id]);

    // ! This way use the clean up and cancelling the API request for js fetch method
    // useEffect(() => {
    //     // * More professional way to intercept an API call

    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setUser(data);
    //         })
    //         .catch((err) => {
    //             if (err.name) console.log("Request Cancelled!");
    //         });

    //     return () => {
    //         controller.abort();
    //     };
    // }, [id]);


     // ! This way use the clean up and cancelling the API request for axios method
    useEffect(() => {
        // * More professional way to intercept an API call

        const cancelToken = axios.CancelToken.source()

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, { cancelToken: cancelToken.token })
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                if (axios.isCancel(err)) console.log("Request Cancelled!");
            });

        return () => {
            cancelToken.cancel()
        };
    }, [id]);

    return (
        <div>
            <section>
                <div>{user.name}</div>
                <div>{user.username}</div>
                <div>{user.email}</div>
            </section>

            <section>
                <Link to="/user/1">Fetch user 1</Link>
                <br />
                <Link to="/user/2">Fetch user 2</Link>
                <br />
                <Link to="/user/3">Fetch user 3</Link>
            </section>
        </div>
    );
}
