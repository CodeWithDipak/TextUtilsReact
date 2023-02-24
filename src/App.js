import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import About from './components/About';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [changeMode, setChangeMode] = useState({
    backgroundColor: "white",
    color: "black",
    btnStyle: "dark"
  })

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const onClick1 = () => {
    setChangeMode({
      backgroundColor: "#7f1111",
      color: "white",
      btnStyle: "light"
    })
  }

  const onClick2 = () => {
    setChangeMode({
      backgroundColor: "#11387f",
      color: "white",
      btnStyle: "light"
    })
  }
  const onClick3 = () => {
    setChangeMode({
      backgroundColor: "#911c7f",
      color: "white",
      btnStyle: "light"
    })
  }
  const onClick4 = () => {
    setChangeMode({
      backgroundColor: "#000000",
      color: "white",
      btnStyle: "light"
    })
  }
  const onClick5 = () => {
    setChangeMode({
      backgroundColor: "white",
      color: "black",
      btnStyle: "dark"
    })
  }

  return (
    <>
    {/* <BrowserRouter> */}

      <Navbar title="TextUtils" about="About us" onClick1={onClick1} onClick2={onClick2} onClick3={onClick3} onClick4={onClick4} onClick5={onClick5} changeMode={changeMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} changeMode={changeMode} />

      {/* <About changeMode={changeMode} /> */}

    {/* <Routes>
      <Route path = "/" element = {<TextForm showAlert={showAlert} changeMode={changeMode} />} exact/>
      <Route path = "/about" element = {<About changeMode={changeMode} />} exact />
    </Routes>

    </BrowserRouter> */}
    </>
  );
}

export default App;
