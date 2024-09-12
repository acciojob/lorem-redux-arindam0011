
import React, { useEffect } from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../components/LoremData";
import 'regenerator-runtime/runtime';
const App = () => {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.loremDAta.data);
  const Api="https://storage.googleapis.com/acciojob-open-file-collections/lorem-redux.gif"

  useEffect(() => {
    const getData = async () => {
      // Fetch the image as a Blob and create a URL
      const res = await fetch(Api);
      const blob = await res.blob();
      const imageUrl = URL.createObjectURL(blob);
      
      // Dispatch the URL to the Redux store
      dispatch(addData(imageUrl));
    };
    getData();
  }, [dispatch]);

  return (
    <div>
        {
          <img src={data} alt=""/>
        }
    </div>
  )
}

export default App
