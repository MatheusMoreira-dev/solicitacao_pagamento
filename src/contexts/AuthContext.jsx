import { auth } from "@/services/firebase/config";
import { loginWithEmail } from "@/services/firebase/login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (v) => {
      setUser(v);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, loginWithEmail, loading, signOut: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
