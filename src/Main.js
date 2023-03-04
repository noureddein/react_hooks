import { Link } from 'react-router-dom'

// ** useEffect lesson
import Part1 from "./useEffect/Part_1";
import Part2 from "./useEffect/Part_2";
import Part3 from "./useEffect/Part_3";

// ** useReducer lesson
import Post from './useReducer/Post';
import Form from './useReducer/Form';

export default function Main() {
  return (
    <div>
        {/* <h5><Link to="/posts">Go to Posts page</Link></h5> */}
        <Form />
    </div>
  )
}
