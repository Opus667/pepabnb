import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { data: userDoc } = await axios.post("/users/login", {
          email,
          password,
        });

        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        alert(`erro ao logar; ${error.response.data}`);
      }
    } else {
      alert("preencha tudo!!!");
    }
  };

  if (redirect || user) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça seu login</h1>
        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full rounded-full border border-gray-300 px-4 py-2 dark:border-gray-600"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full rounded-full border border-gray-300 px-4 py-2 dark:border-gray-600"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-primary-400 hover:bg-primary-500 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white dark:border-gray-600">
            Login
          </button>
        </form>

        <p>
          Ainda nao tem conta?{" "}
          <Link to="/register" className="font-semibold underline">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
