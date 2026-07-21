import { useState } from "react";
import { useUserLogin } from "../hook/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { mutate: userLogin, isPending } = useUserLogin();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    userLogin(
      { email, password },
      {
        onError: (e: any) => {
          toast.error(e.response.data.message);
        },
        onSuccess: (res: any) => {
          toast.success(res.data.message);
          navigate("/home");
        },
      },
    );
  };
  return (
    <div className="flex justify-center items-center h-screen p-5">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-3"
      >
        <div className="mb-3 text-center text-2xl font-semibold">
          Login Here
        </div>
        <div className="mb-3">
          <input
            value={email}
            disabled={isPending}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="input input-primary input-lg max-w-none w-full"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <input
            disabled={isPending}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="input input-primary input-lg max-w-none w-full"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-3">
          <input
            disabled={!email || !password || isPending}
            type="submit"
            className="btn w-full btn-lg btn-primary"
            value={isPending ? "loading..." : "login"}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
