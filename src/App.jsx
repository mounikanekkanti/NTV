import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ScreenScreen } from "./screens/ScreenScreen";
import { Screen } from "./screens/Screen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ScreenScreen />,
  },
  {
    path: "/screen-1",
    element: <ScreenScreen />,
  },
  {
    path: "/screen-2",
    element: <Screen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
