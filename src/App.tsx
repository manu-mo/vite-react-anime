import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/home/:animeId",
    element: <DetailPage />,
  },
  {
    path: '*',
    element: <h1 style={{ margin: '20%' }}>The Page Doesn't Exist</h1>
  }
]);


function App() {

  return <>
    <RouterProvider router={router} />
  </>;

}

export default App;