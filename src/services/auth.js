import { supabase } from "@/lib/supabase";

export async function authenticateUser({ email, password }) {
  const {
    data: { session, user, weakPassword },
    error,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return { session, user, weakPassword };
}

export async function signUpNewUser({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}
