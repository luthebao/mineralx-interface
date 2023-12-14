import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Swap from "./pages/swap";
import HomePage from "./pages/home";
import ComingSoon from "./pages/coming-soon";

export default function Router() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route element={<Layout />}>
        <Route path="/transfer" element={<Swap />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}
