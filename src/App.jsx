import Login from "./routes/Login";
import PlanBuilder from "./routes/PlanBuilder";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./routes/SignUp";
import ForgetPassword from "./routes/ForgetPassword";
import VerifyEmail from "./routes/VerifyEmail";
import UpdatePassword from "./routes/UpdatePassword";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthGuard from "./components/AuthGuard";
import Header from "./components/Header/Header";

function AuthLayout({ children }) {
  return (
    <div className="mt-10">
      <Header />
      <div className="w-1/4 mx-auto mt-20">{children}</div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoute>
      <PlanBuilder />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthGuard>
        <AuthLayout title="Login title">
          <Login />
        </AuthLayout>
      </AuthGuard>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthGuard>
        <AuthLayout>
          <SignUp />
        </AuthLayout>
      </AuthGuard>
    ),
  },
  {
    path: "/forget-password",
    element: (
      <AuthGuard>
        <AuthLayout>
          <ForgetPassword />
        </AuthLayout>
      </AuthGuard>
    ),
  },
  {
    path: "/verify-email",
    element: (
      <AuthGuard>
        <AuthLayout>
          <VerifyEmail />
        </AuthLayout>
      </AuthGuard>
    ),
  },
  {
    path: "/update-password",
    element: (
      <AuthGuard>
        <UpdatePassword />
      </AuthGuard>
    ),
  },
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
