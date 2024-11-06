import { supabase } from "@/lib/supabase";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";

export default function ProtectedRoute({ children }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  console.log(`isAuthenticated`, isAuthenticated);

  const getSession = async () => {
    console.log(`getSession`);

    setisLoading(true);
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      console.log(`session`, session);
      if (error) throw error;

      setIsAuthenticated(!!session);
    } catch (error) {
      console.log("ProtectedRoute > getSession > Error:", error);
    } finally {
      setisLoading(false);
      setIsInitialized(true);
    }
  };

  useEffect(() => {
    console.log(`ProtectedRoute`);
    // the listener.
    getSession();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log(`_event`, _event);
      console.log(`session`, session);
      setIsAuthenticated(!!session);
    });

    return () => {
      // cleanup the listener
      subscription.unsubscribe();
    };
  }, []);

  if (!isInitialized) return null;

  if (isLoading) {
    console.log(`isLoading`);
    return <Loader loadingText="Logging in" />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
