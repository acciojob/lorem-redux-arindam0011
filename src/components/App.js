import React, { useEffect, useState } from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../components/LoremData";
import 'regenerator-runtime/runtime';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loremDAta.data);
  const [loading, setLoading] = useState(true);
  const Api = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(Api);
        const fetchedData = await res.json();
        dispatch(addData(fetchedData[1] || {}));
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false); // Ensure loading is set to false even if an error occurs
      }
    };
    getData();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }

  return (
    <div>
      <h1>A short Naration of Lorem Ipsum</h1>
      <h4>Below Contains A title and Body gotten from a random API, Please take your time to Review</h4>
      {data && (
        <ul style={{ listStyle: "none" , textAlign: "left" , padding: "0" }}>
          <li className="title"><span style={{ fontWeight: "bold" }}>Title: </span>{data.title}</li>
          <li className="body"><span style={{ fontWeight: "bold" }}>Body: </span>{data.body}</li>
        </ul>
      )}
    </div>
  );
}

export default App;
