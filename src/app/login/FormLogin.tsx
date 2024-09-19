import InputForm from "./Input";
import Button from "./Button";
import { useRef, useEffect, useState } from "react";

const FormLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginFailed, setLoginFailed] = useState("");
  const usernameRef = useRef<HTMLInputElement | null>(null); // Set the correct ref type

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (event: any) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status: boolean, res: any) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/menu/all";
      } else {
        setLoginFailed(res.response?.data || "Login failed");
      }
    });
  };

  useEffect(() => {
    usernameRef.current?.focus(); // Optional chaining to safely handle null
  }, []);

  return (
    <form onSubmit={handleLogin} className="mt-8">
      <InputForm
        label="username"
        labelForm="Username"
        type="text"
        placeholder="John Doe"
        name="username"
        ref={usernameRef}
      />
      <div className="mt-4 relative">
        <InputForm
          label="Password"
          labelForm="Password"
          type={passwordVisible ? "text" : "password"}
          placeholder="*****"
          name="password"
        >
          <button onClick={togglePasswordVisibility} className="text-[#666666]">
            {passwordVisible ? "Hide" : "Show"}
          </button>
        </InputForm>
      </div>
      <button
        className="mt-6 w-full bg-[#FF8A00] text-white font-bold py-3 px-4 rounded-full"
        type="submit"
      >
        Login
      </button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;

// Define or import the login function
const login = async (data: { username: string; password: string }, callback: (status: boolean, res: any) => void) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const result = await response.json();
    callback(true, result.token); // Assuming the token is in result.token
  } catch (error) {
    callback(false, error);
  }
};
