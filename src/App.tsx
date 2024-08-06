import { Route, Routes } from "react-router-dom";
import Home from "pages/Home.tsx";
import { Detail } from "pages/Detail.tsx";
import { Profile } from "pages/Profile.tsx";
import EditProfile from "pages/profile/EditProfile.tsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/edit-profile' element={<EditProfile />} />
      <Route path='/change-password' element={<EditProfile />} />
      <Route path='/edit-profile' element={<EditProfile />} />
    </Routes>
  );
}

export default App;
