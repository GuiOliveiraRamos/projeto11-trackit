import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import Application from "./components/application/Application";
import ApplicationToday from "./components/applicationToday/applicationToday";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Application />} />
        <Route path="/hoje" element={<ApplicationToday />} />
      </Routes>
    </BrowserRouter>
  );
}
