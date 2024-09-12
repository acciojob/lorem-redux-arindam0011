import React, { useEffect } from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { addData, setLoading, setError } from "../components/LoremData";
import 'regenerator-runtime/runtime';

const App = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.loremDAta);
  const Api = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const getData = async () => {
      dispatch(setLoading(true));
      try {
        const res = await fetch(Api);
        const fetchedData = await res.json();
        dispatch(addData(fetchedData.slice(0, 10) || []));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError("Failed to fetch data"));
        dispatch(setLoading(false));
      }
    };
    getData();
  }, [dispatch]);

  return (
    <div>
    <h1>A short Naration of Lorem Ipsum</h1>
    <h4>Below Contains A title and Body gotten froma random API, Please take your time to Review</h4>
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map((post, index) => (
            <ul key={index} style={{ listStyle: "none", textAlign: "left", padding: "0" }}>
              <li className="title"><span style={{ fontWeight: "bold" }}>Title: </span>{post.title}</li>
              <li className="body"><span style={{ fontWeight: "bold" }}>Body: </span>{post.body}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  </div>

  );
}

export default App;
