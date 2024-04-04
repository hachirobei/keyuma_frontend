import { PrimeReactProvider } from "primereact/api";
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/home/HomeComponents';
import Login from './pages/login/LoginComponents';
import Dashboard from "./pages/dashboard/DashboardComponents";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import React from "react";


function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home  /> } />
          <Route path="/login" element={ <Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </PrimeReactProvider>
  )
}
export default App;
