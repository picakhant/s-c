import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import PostNote from "./pages/PostNote";
import UpdateNote from "./pages/UpdateNote";
import ProtectedLayout from "./layout/ProtectedLayout";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* protected page */}
        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route index element={<Home />} />
          <Route path="post-note" element={<PostNote />} />
          <Route path="update-note" element={<UpdateNote />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
