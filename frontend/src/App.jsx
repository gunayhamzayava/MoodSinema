import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import MoodAnalytics from "./pages/MoodAnalytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mood-analytics",
        element: <MoodAnalytics />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
