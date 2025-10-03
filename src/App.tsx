import { Route, Routes, Navigate } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Blog from "./components/Blog";
import Blogs from "./components/Blogs";
import Error from "./components/ui/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Publish from "./components/ui/Publish";


const App = () => {
  return (
      <Routes>
        {/* Redirect / to /signin */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Public routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
  );
};

export default App;
