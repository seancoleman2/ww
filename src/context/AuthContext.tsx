'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  authenticate: (password: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing authentication on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const authStatus = localStorage.getItem('wedding-auth');
        const authTimestamp = localStorage.getItem('wedding-auth-time');
        
        if (authStatus === 'true' && authTimestamp) {
          const timestamp = parseInt(authTimestamp);
          const now = Date.now();
          const twentyFourHours = 24 * 60 * 60 * 1000;
          
          // Keep authentication for 24 hours
          if (now - timestamp < twentyFourHours) {
            setIsAuthenticated(true);
          } else {
            // Clear expired authentication
            localStorage.removeItem('wedding-auth');
            localStorage.removeItem('wedding-auth-time');
          }
        }
      } catch {
        // Handle localStorage not being available (private browsing, etc.)
        console.log('localStorage not available');
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const authenticate = (password: string) => {
    if (password === 'metclub2026') {
      setIsAuthenticated(true);
      try {
        localStorage.setItem('wedding-auth', 'true');
        localStorage.setItem('wedding-auth-time', Date.now().toString());
      } catch {
        console.log('Could not save to localStorage');
      }
      return true;
    }
    return false;
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-pearl flex items-center justify-center">
        <div className="text-gold font-exmouth text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}