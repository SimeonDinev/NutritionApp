import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NutritionTable from "./components/NutritionTable/NutritionTable.jsx";
import AddFood from "./components/AddFood/AddFood.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <NutritionTable />, errorElement: <NotFoundPage /> },
  { path: "/addFood", element: <AddFood /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
