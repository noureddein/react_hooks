import { Link } from 'react-router-dom'

import Part1 from "./Part_1";
import Part2 from "./Part_2";
import Part3 from "./Part_3";
import User from './User';

export default function Main() {
  return (
    <div>
        <h5><Link to="/posts">Go to Posts page</Link></h5>
        {/* <User /> */}
    </div>
  )
}
