import { Dashboard } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import Trainings from "../pages/trainings";

const pages = {
  unAuth: [
    {
      path: '/login',
      element: LoginPage,
    }
  ],
  auth: [
    {
      path: '/',
      element: Dashboard,
    },
    {
      path: '/treinamentos',
      element: Trainings,
    }
  ]
}

export default pages;