// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WrestlingEdits from "./pages/WrestlingEdits";
import MatchEdits from "./pages/MatchEdits";
import OtherEdits from "./pages/OtherEdits";

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wrestling" element={<WrestlingEdits/>} />
        <Route path="/matches" element={<MatchEdits/>} />
        <Route path="/other" element={<OtherEdits/>} />
      </Routes>
    </Layout>
  );
}
