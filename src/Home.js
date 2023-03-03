import { Link } from "react-router-dom";

import Posts from "./Posts";

export default function Home() {
    return (
        <div>
            <h6>
                <Link to="/" style={{color: 'red', textDecoration: 'none'}}>Go Back</Link>
            </h6>
            <Posts />
        </div>
    );
}
