import { Route, Routes } from "react-router";
import Login from "./Login";
import ForgetPass from "./ForgetPass";
import ResetPass from "./ResetPass";

export default function Index() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forget" element={<ForgetPass />} />
      <Route path="/reset" element={<ResetPass />} />
    </Routes>
  );
}
