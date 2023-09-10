import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./store";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Detail from "./pages/Content/Detail";
import About from "./pages/About-us";
import Content from "./pages/Content";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Content/Detail/:id",
    element: <Detail />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Content",
    element: <Content />,
  },
  {
    path: "/Search",
    element: <Search />,
  },
 ]);

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </div>
  );
}

export default App;
