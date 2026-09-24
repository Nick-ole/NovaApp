# NovaApp — código base de la misión

Punto de partida para el laboratorio **"Misión: Login & Lanzamiento"**
(Desarrollo Full Stack, Unidad II). Ya trae el proyecto de React + Vite
armado, el enrutador configurado y los archivos donde van a trabajar
marcados con comentarios `TODO`. Ustedes no arrancan de cero: arrancan
de aquí.

## 1. Preparar el proyecto (antes de la Estación 1)

```bash
npm install
cp .env.example .env
npm run dev
```

Abran la URL que muestra la terminal (normalmente `http://localhost:5173`).
Deberían ver el formulario de login de NovaApp.

## 2. API de pruebas

Este starter apunta a **reqres.in**, una API pública pensada para practicar
login sin tener que montar su propio backend. Úsenla así:

| Campo | Valor |
|---|---|
| Correo | `eve.holt@reqres.in` |
| Contraseña | `cityslicka` |

Con esas credenciales el login responde con un token. Con cualquier otro
correo o sin contraseña, responde un error — sirve para probar el camino
de error del formulario (checklist de la Estación 1).

## 3. Dónde trabaja cada estación

| Estación | Archivo(s) | Qué buscan los `TODO` |
|---|---|---|
| 1 · Puerta de entrada | `src/pages/LoginForm.jsx` | POST con Axios, guardar el token, mostrar errores, redirigir |
| 2 · Fortaleza protegida | `src/components/ProtectedRoute.jsx`<br>`src/api/axiosClient.js` | Bloquear `/dashboard` sin token, interceptores de request/response |
| 4 · Cuenta regresiva | — (usan el proyecto completo) | `npm run build`, revisar `dist/`, desplegar |

La Estación 3 (caza-vulnerabilidades) se juega directamente en la app del
laboratorio, no en este código.

## 4. Antes de dar por cerrada la Estación 4

```bash
npm run build      # genera dist/
npm run preview    # para revisar el build localmente, opcional
```

Luego desplieguen `dist/` en Vercel, Netlify o GitHub Pages, y registren
la URL pública en la app del laboratorio. Recuerden: las variables de
entorno reales van en el panel de la plataforma, no en el código.

## 5. Estructura del proyecto

```
src/
├── api/
│   └── axiosClient.js     ← TODO: interceptores (Estación 2)
├── components/
│   └── ProtectedRoute.jsx ← TODO: bloqueo de ruta (Estación 2)
├── pages/
│   ├── LoginForm.jsx      ← TODO: login (Estación 1)
│   └── Dashboard.jsx      ← página protegida, ya lista
├── App.jsx                ← rutas ya configuradas
└── main.jsx
```
