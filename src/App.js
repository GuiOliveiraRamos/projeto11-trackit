import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import Application from "./components/application/Application";
import ApplicationToday from "./components/applicationToday/applicationToday";
import ApplicationHistoric from "./components/applicationHistoric/applicationHistoric";
import { useState } from "react";
import { UsuarioContext, HabitosContext } from "./components/DataContext";

export default function App() {
  const [dados, setDados] = useState(null);
  const [habitos, setHabitos] = useState(0);

  return (
    <BrowserRouter>
      <UsuarioContext.Provider value={{ dados, setDados }}>
        <HabitosContext.Provider value={{ habitos, setHabitos }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Application />} />
            <Route path="/hoje" element={<ApplicationToday />} />
            <Route path="/historico" element={<ApplicationHistoric />} />
          </Routes>
        </HabitosContext.Provider>
      </UsuarioContext.Provider>
    </BrowserRouter>
  );
}
