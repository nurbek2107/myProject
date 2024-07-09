// rrd
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
<<<<<<< HEAD
import Likes from "./pages/Likes";

=======
import Product from "./pages/Product"
>>>>>>> 92807aa5ae07477a45a3c6984f1bdb27f4f91d23

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
<<<<<<< HEAD
          element: <Contact />
        }, 
        {
          path: `/likes`,
          element: <Likes />
=======
          element: <Contact />,
>>>>>>> 92807aa5ae07477a45a3c6984f1bdb27f4f91d23
        },
        {
          path: `/product`,
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;