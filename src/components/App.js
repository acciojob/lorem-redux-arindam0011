
import React, { useEffect } from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../components/LoremData";
import 'regenerator-runtime/runtime';
const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loremDAta.data);
  const Api = "https://jsonplaceholder.typicode.com/posts"

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(Api);
      const data = await res.json();
      console.log(data[1])
      dispatch(addData(data[1] || []));
    };
    getData();
  }, []);

  return (
    <div>
      <h1>A short Naration of Lorem Ipsum</h1>
      <h4>Below Contains A title and Body gotten froma random API, Please take your time to Review</h4>
      {

        data ? (
            <ul style={{ listStyle: "none" }}>
              <li className="title"><span style={{ fontWeight: "bold" }}>Title: </span>{data.title}</li>
              <li className="body"><span style={{ fontWeight: "bold" }}>Body: </span>{data.body}</li>
            </ul>
          )
          : <div>Loading...</div>
      }
    </div>
  )
}

export default App
