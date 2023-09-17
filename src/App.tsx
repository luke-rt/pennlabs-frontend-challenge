import { useState } from "react";
import { Course } from "./lib/types";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Checkout from "./routes/checkout";
import { CartContext } from "./lib/context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/course/:courseDept/:courseNumber",
    element: <Home />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
]);

const App = () => {
  const [cart, setCart] = useState([] as Course[]);

  return(
    <CartContext.Provider value={{ cart, setCart }}>
      <main style={{
        height: '100vh',
      }}>
        <RouterProvider router={router} />
      </main>
    </CartContext.Provider>
  );
}

export default App;