import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="btn btn-primary">Create Account</button>
      <button
        onClick={() => {
          navigate("/login");
        }}
        className="btn btn-secondary"
      >
        Login
      </button>
    </div>
  );
};

export default Landing;
