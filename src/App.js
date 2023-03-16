import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import Application from "./components/application/Application";
import ApplicationToday from "./components/applicationToday/applicationToday";
import ApplicationHistoric from "./components/applicationHistoric/applicationHistoric";
import { useState } from "react";
import { Context } from "./components/Context";

export default function App() {
  const [image, setImage] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Context.Provider value={{ image, setImageC: setImage }}>
          <Route path="/habitos" element={<Application />} />
          <Route path="/hoje" element={<ApplicationToday />} />
          <Route path="/historico" element={<ApplicationHistoric />} />
        </Context.Provider>
      </Routes>
    </BrowserRouter>
  );
}
