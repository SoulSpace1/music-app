import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { CheckIn } from "./pages/check-in";
import { MyPlaylist } from "./pages/my-playlist";
import { MyTracks } from "./pages/my-tracks";
import { Account } from "./pages/account";

import { ProtectedRoute } from "./protected-route/protected-route";
import { PublicRoute } from "./protected-route/public-route";



export const AppRoutes = ({ user }) => {
  return (
    <Routes>

    <Route element={<PublicRoute isAuth={Boolean(user)}/>}>
      <Route path="/login" element={<Login />} />
      <Route path="/checkIn" element={<CheckIn />} />
     </Route>
      
     <Route element={<ProtectedRoute isAuth={Boolean(user)}/>}>
      <Route path="/my-playlist" element={<MyPlaylist />} />
      <Route path="/my-tracks" element={<MyTracks />} />
      <Route
        path="/account"
        element={<Account />}/>
     </Route>
    </Routes>
  );
};