// rrd
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import Likes from "./pages/Likes";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import CheckoutPage from "./pages/CheckoutPage";
import SinglePrudact from "./pages/SinglePrudact";

// layout
import MainLayout from "./layout/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: `/about`,
          element: <About />,
        },
        {
          path: `/blog`,
          element: <Blog />,
        },
        {
          path: `/terms`,
          element: <Terms />,
        },
        {
          path: `/policy`,
          element: <Policy />,
        },
        {
          path: `/contact`,
          element: <Contact />
        },
        {
          path: `/likes`,
          element: <Likes />,
        },
        {
          path: `/cart`,
          element: <Cart />,
        },
        {
          path: `/checkoutpage`,
          element: <CheckoutPage />,
        },
        {
          path: `/likes`,
          element: <Likes />
        },
        {
          path: `/SinglePage`,
          element: <SinglePrudact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
