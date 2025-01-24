import { Route, Routes } from "react-router";
import Frontend from "./Frontend";
export default function Index() {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
    </Routes>
  );
}
