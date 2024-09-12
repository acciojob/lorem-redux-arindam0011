import { configureStore } from "@reduxjs/toolkit";
import LoremDataReuducer from "./LoremData";

const store = configureStore({
    reducer: {
        loremDAta: LoremDataReuducer
    }
});


export default store