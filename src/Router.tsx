import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Swap from "./pages/swap";
import HomePage from "./pages/home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route element={<Layout />}>
        <Route path="/swap" element={<Swap />} />
        <Route path="*" element={<Swap />} />
      </Route>
    </Routes>
  );
}
