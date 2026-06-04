import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recruiter from "./pages/Recruiter";
import Developer from "./pages/Developer";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
  return <LoadingScreen />;
}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;