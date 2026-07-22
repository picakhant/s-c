import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useMe } from "../hook/auth";

const ProtectedLayout = () => {
  const { isLoading, isError } = useMe();

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center flex-col">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (isError) {
    return <Navigate to={"/login"} replace />;
  }
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  );
};

export default ProtectedLayout;
