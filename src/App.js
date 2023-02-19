import './App.css';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar loginScreen = "0" />} />
        <Route path="/profile" element={<><Navbar/> <Profile /></>}/>
      </Routes>
    </BrowserRouter>
  );
}