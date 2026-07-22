import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menu = [
    { id: 1, name: "Home", path: "/dashboard" },
    { id: 2, name: "Post Note", path: "/dashboard/post-note" },
    { id: 3, name: "Update Note", path: "/dashboard/update-note" },
  ];

  return (
    <div className="navbar bg-base-300 justify-center gap-3">
      {menu.map((i) => {
        return (
          <div
            key={i.id}
            className={`cursor-pointer select-none ${pathname === i.path && "bg-primary p-3 rounded-2xl "}`}
            onClick={()=> navigate(i.path)}
          >
            {i.name}
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
