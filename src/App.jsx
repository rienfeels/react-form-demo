// import { useState } from 'react'
import MyForm from "./components/MyForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [someText, setSomeText] = useState("");
  const getFormData = (text) => {
    setSomeText(text);
  };
  return (
    <>
      <h1>My Form</h1>
      <MyForm action={getFormData} />
      <p>{someText}</p>
    </>
  );
}

export default App;
