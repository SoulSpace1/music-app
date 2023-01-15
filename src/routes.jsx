import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { CheckIn } from "./pages/check-in";
import { MyPlaylist } from "./pages/my-playlist";
import { MyTracks } from "./pages/my-tracks";
import { Account } from "./pages/account";

import { ProtectedRoute } from "./protected-route/protected-route";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/checkIn" element={<CheckIn />} />
      <Route path="/my-playlist" element={<MyPlaylist />} />
      <Route path="/my-tracks" element={<MyTracks />} />
      <Route
        path="/account"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <Account />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};