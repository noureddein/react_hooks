import { Link } from 'react-router-dom'

import Part1 from "./useEffect/Part_1";
import Part2 from "./useEffect/Part_2";
import Part3 from "./useEffect/Part_3";

export default function Main() {
  return (
    <div>
        <h5><Link to="/posts">Go to Posts page</Link></h5>
        <Part3 />
    </div>
  )
}
