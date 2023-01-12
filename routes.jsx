import { Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Login } from "./pages/login";
import { CheckIn } from "./pages/check-in";
import { MyPlaylist } from "./pages/my-playlist";
import { MyTracks } from "./pages/my-tracks";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/checkIn" element={<CheckIn />} />
      <Route path="/my-playlist" element={<MyPlaylist />} />
      <Route path="/my-tracks" element={<MyTracks />} />
    </Routes>
  );
};