import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/index";
import Initial from "./components/Initial";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthProvider from "./context/index.jsx";

export default function App() {
  return (
    
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Initial />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>

        </AuthProvider>

      </BrowserRouter>


  )
}