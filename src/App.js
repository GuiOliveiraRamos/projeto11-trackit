import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import Application from "./components/application/Application";
import ApplicationToday from "./components/applicationToday/applicationToday";
import ApplicationHistoric from "./components/applicationHistoric/applicationHistoric";
import { useState } from "react";
import dadosContext from "./components/DataContext";

export default function App() {
  const [image, setImage] = useState("");
  const [token, setToken] = useState(undefined);
  return (
    <BrowserRouter>
      <dadosContext.Provider
        value={{
          image: image,
          setImage: setImage,
          token: token,
          setToken: setToken,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Application />} />
          <Route path="/hoje" element={<ApplicationToday />} />
          <Route path="/historico" element={<ApplicationHistoric />} />
        </Routes>
      </dadosContext.Provider>
    </BrowserRouter>
  );
}
