import { supabase } from "@/lib/supabase";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";

export default function AuthGuard({ children }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const getSession = async () => {
    setisLoading(true);
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) throw error;

      setIsAuthenticated(!!session);
    } catch (error) {
    } finally {
      setisLoading(false);
      setIsInitialized(true);
    }
  };

  useEffect(() => {
    getSession();
  }, []);

  if (!isInitialized) return null;

  if (isLoading) {
    return <Loader loadingText="Logging in" />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
