import { Route, Routes } from "react-router";
import Frontend from "./Frontend";
import Auth from "./Auth";

export default function Index() {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route path="/auth/*" element={<Auth />} />
    </Routes>
  );
}
