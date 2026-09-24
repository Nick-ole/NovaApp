import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="auth-screen">
      <div className="auth-card">
        <h1>🚀 Bienvenido a NovaApp</h1>
        <p className="auth-sub">
          Si están viendo esta pantalla, su token es válido y la ruta está
          protegida. Buen trabajo, equipo.
        </p>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
}
