import InputForm from "./Input";
import Button from "./Button";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

const FormLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [loginFailed, setLoginFailed] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/menu/all";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
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
          <button
            onClick={togglePasswordVisibility}
            className="text-[#666666]"
          >
            Hide
          </button>
        </InputForm>
      </div>
      {/* {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>} */}
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
