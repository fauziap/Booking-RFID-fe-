import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import { Detail } from "./pages/Detail.tsx";
import { Profile } from "./pages/Profile.tsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default App;
