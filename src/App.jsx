import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wallet from "./pages/Wallet";
import Transaction from "./pages/Transaction";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/wallet", element: <Wallet /> },
    {
      path: "/transaction",
      element: <Transaction />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    { path: "/register", element: <Register /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
