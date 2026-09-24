import { Navigate } from "react-router-dom";

// ─────────────────────────────────────────────────────────────
// ESTACIÓN 2 · Fortaleza protegida
// ─────────────────────────────────────────────────────────────

export default function ProtectedRoute({ children }) {
  // TODO 1: leer el token guardado en localStorage
  const token = localStorage.getItem("token");

  // TODO 2: si NO hay token, redirigir a "/login"
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // TODO 3: si SÍ hay token, renderizar children con normalidad
  return children;
}
