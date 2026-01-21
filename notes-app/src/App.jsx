import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import Login from "./pages/Login";
import Register from "./pages/Register";

import useAuth from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
       className="fixed inset-0 w-full h-full object-cover -z-10"

      >
        <source src="public/videos/bg4.mp4" type="video/mp4" />
      </video>

      {user && <Navbar />}

      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/add" element={<AddNote />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>

      {/* FOOTER – now on every page */}
      {user && <Footer />}
    </>
  );
}

export default App;
