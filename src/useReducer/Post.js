import React, { useState, useReducer } from "react";
import {
    INITIAL_STATE,
    postReducer,
    ACTIONS_TYPE,
} from "./reducers/postReducer";
const { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } = ACTIONS_TYPE;

export default function Post() {
    return (
        <div>
            <BestPractice />
        </div>
    );
}

const BadPractice = () => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState({});
    const [error, setError] = useState(false);

    /* 
        ! The problem here that we are using setState six times
    */

    const handleFetch = () => {
        setLoading(true);
        setError(false);

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setPost(data);
            })
            .catch((err) => {
                setError(true);
                setLoading(false);
            });
    };

    return (
        <div>
            <button onClick={handleFetch}>
                {loading ? "Wait..." : "Fetch the post"}
            </button>
            <p>{post?.title}</p>
            <span style={{ color: "red", fontSize: "14px" }}>
                {error && "Something went wrong!"}
            </span>
        </div>
    );
};

const BestPractice = () => {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
    const { error, loading, post } = state;

    const handleFetch = () => {
        dispatch({ type: FETCH_START });

        fetch("https://jsonplaceholder.typicode.comm/posts/5")
            .then((res) => res.json())
            .then((data) => dispatch({ type: FETCH_SUCCESS, payload: data }))
            .catch((err) => dispatch({ type: FETCH_ERROR }));
    };

    return (
        <div>
            <button onClick={handleFetch}>
                {loading ? "Wait..." : "Fetch the post"}
            </button>
            <p>{post?.title}</p>
            <span style={{ color: "red", fontSize: "14px" }}>
                {error && "Something went wrong!"}
            </span>
        </div>
    );
};
