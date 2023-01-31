import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import { BookingPage } from "./pages/BookingPage";
import { HomePage } from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { ConfirmationPage } from "./pages/ConfirmationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/booking",
    element: <BookingPage />
  },
  {
    path: "/confirmation",
    element: <ConfirmationPage />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
