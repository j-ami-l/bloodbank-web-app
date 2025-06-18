import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Components/Error/Error";
import PatientForm from "../Pages/PatientForm/PatientForm";







export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error></Error>,
    children: [
        {
            index : true,
            path: '/',
            Component: Home
        },
        {
          path : '/patientForm',
          Component: PatientForm
        }
    ]
  }
]);
