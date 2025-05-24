'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function PasswordProtection() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isAuthenticated, authenticate } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authenticate(password)) {
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-pearl/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4 p-8 bg-white rounded-lg shadow-lg border border-gold/20">
        <h2 className="text-3xl font-exmouth text-gold text-center mb-6">
          Welcome
        </h2>
        <p className="text-dark text-center mb-8">
          Please enter the password to view our wedding website
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gold/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
              placeholder="Enter password"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-gold text-white py-2 rounded-md hover:bg-gold/90 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
} 