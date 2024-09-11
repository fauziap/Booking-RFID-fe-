import { Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Profile  from "pages/profile";
import EditProfile from "pages/profile/EditProfile.tsx";
import DetailHotel from "pages/hotel/DetailHotel";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail-hotel' element={<DetailHotel />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/edit-profile' element={<EditProfile />} />
      <Route path='/change-password' element={<EditProfile />} />
      <Route path='/edit-profile' element={<EditProfile />} />
    </Routes>
  );
}

export default App;
