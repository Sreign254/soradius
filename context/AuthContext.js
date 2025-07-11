"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
export const base_url = "http://localhost:5000/api/";
// export const base_url = "https://wamukbs.org/api/";

import { useRouter } from "next/navigation"; 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const router = useRouter();


  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem("accessToken");
      if (storedToken) {
        setToken(storedToken);
        await fetchUserData(storedToken);
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
  };


  const fetchUserData = async (accessToken) => {
    try {
      const response = await fetch(`${base_url}auth/me`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      
      const data = await response.json();
      setUser(data);
      setToken(accessToken);
    } catch (error) {
      console.error("Error fetching user:", error);
      logout();
    }
  };

  const refreshUser = async () => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      await fetchUserData(storedToken);
    }
  };

  const deleteAccount = async () => {
    if (!user || !token) {
      console.error("No user is logged in.");
      return;
    }
  
    try {
      const response = await fetch(`${base_url}auth/delete/${user._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete account");
      }
  
      logout(); // Clear user session
  
      return { success: true, message: "Account deleted successfully" };
    } catch (error) {
      console.error("Error deleting account:", error);
      return { success: false, message: "Failed to delete account" };
    }
  };
  
  

 const logout = async () => {
  const storedToken = localStorage.getItem("accessToken");

  try {
    const response = await fetch(`${base_url}auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${storedToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.warn("Logout request failed:", await response.text());
    }
  } catch (error) {
    console.error("Error logging out:", error);
  } finally {
    setUser(null);
    setToken(null);
    localStorage.removeItem("accessToken");
    router.push("/"); // Optional redirect to login/home
  }
};


  return (
    <AuthContext.Provider
      value={{ user, token, loading, deleteAccount, logout, refreshUser, updateUser,  }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);