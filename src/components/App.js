
import React, { useEffect } from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../components/LoremData";
import 'regenerator-runtime/runtime';
const App = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.loremDAta.data);
  const Api="https://jsonplaceholder.typicode.com/posts"

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(Api);
      const data = await res.json();
      console.log(data.slice(0, 9))
      dispatch(addData(data.slice(0, 9)));
    };
    getData();
  }, []);

  return (
    <div>
        <h1>A short nation of Lorem Ipsum</h1>
        <h4>Below contentent is getten from a random API. Please take you timr to review it.</h4>
        <div style={{border:"1px solid black", padding:"10px", display:"flex", flexWrap:"wrap"}}>
          {
            data.map((item, index) => {
              return (
                <div key={index} style={{border:"1px solid black", padding:"10px", margin:"10px" , width:"300px"}}>
                  <ul style={{listStyle:"none"}}>
                  <li><span style={{fontWeight:"bold"}}>Title: </span>{item.title}</li>
                  <li><span style={{fontWeight:"bold"}}>Body: </span>{item.body}</li>
                  </ul>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default App
