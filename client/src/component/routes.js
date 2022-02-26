import { useRoutes, Navigate } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import StudentForm from "./dashboard/student-form/StudentForm";
import ViewStudent from "./dashboard/view-students/ViewStudent";
import DashboardHome from "./dashboard/home/DashboardHome";
import Login from "./login/Login";
import PrivateRoute from "../helpers/PrivateRoute";
import StudentProfile from "./dashboard/student-profile/StudentProfile";

export default function Router() {
  return useRoutes([
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
      children: [
        {
          path: "",
          element: <Navigate to="/dashboard/home" replace />,
        },
        { path: "home", element: <DashboardHome /> },
        { path: "student-form", element: <StudentForm /> },
        { path: "view-students", element: <ViewStudent /> },

        {
          path: "view-students/student-profile/:id",
          element: <StudentProfile />,
        },
      ],
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);
}
