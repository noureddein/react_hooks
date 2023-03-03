import React, { useState, useEffect } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let isCancelled = false
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                if (!isCancelled){
                    alert("Posts are ready, updating state.");
                    setPosts(data)
                    console.log(data)
                }
            });

            return ()=>{
                isCancelled = true
            }
    }, []);

    return (
        <div>
            {posts?.map(({ id, title }) => (
                <p key={id}>{title}</p>
            ))}
        </div>
    );
}
