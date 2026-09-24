import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosClient.js";

// Credenciales de prueba contra la API pública reqres.in (Estación 1):
//   email:    eve.holt@reqres.in
//   password: cityslicka
// Cualquier otro correo/clave responde 400 "Missing password" o similar,
// perfecto para probar también el camino de error.

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // TODO 1: hacer POST a "/login" con { email, password } usando `api`
      const { data } = await api.post("/login", { email, password });

      // TODO 2: guardar el token en localStorage
      localStorage.setItem("token", data.token);

      // TODO 4: redirigir al dashboard si fue exitoso
      navigate("/dashboard");
    } catch (err) {
      // TODO 3: guardar un mensaje de error legible
      const msg = err.response?.data?.error || "Error al iniciar sesión. Verifica tus datos.";
    setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-screen">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>NovaApp</h1>
        <p className="auth-sub">Inicia sesión para continuar</p>

        <label htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="eve.holt@reqres.in"
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="cityslicka"
          required
        />

        {error && <p className="auth-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
}