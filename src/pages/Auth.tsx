import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import axios from 'axios';
import { useAuth } from '@/contexts/AuthContext';

const API_URL = 'http://localhost:5001/api';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();

  // Form states
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Form error states
  const [loginErrors, setLoginErrors] = useState<Record<string, string>>({});
  const [registerErrors, setRegisterErrors] = useState<Record<string, string>>({});

  const validateLoginForm = () => {
    const errors: Record<string, string> = {};
    if (!loginData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(loginData.email)) errors.email = 'Please enter a valid email';
    if (!loginData.password) errors.password = 'Password is required';
    else if (loginData.password.length < 6) errors.password = 'Password must be at least 6 characters';
    return errors;
  };

  const validateRegisterForm = () => {
    const errors: Record<string, string> = {};
    if (!registerData.name) errors.name = 'Name is required';
    if (!registerData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(registerData.email)) errors.email = 'Please enter a valid email';
    if (!registerData.password) errors.password = 'Password is required';
    else if (registerData.password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (registerData.password !== registerData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateLoginForm();
    setLoginErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(`${API_URL}/auth/login`, loginData);
        
        // Use the login function from AuthContext
        login(response.data.token, response.data.user);
        
        toast({
          title: "Login successful",
          description: "Welcome to StockFlow!",
        });
        
        navigate("/dashboard");
      } catch (error: any) {
        console.error('Login error:', error);
        toast({
          title: "Login failed",
          description: error.response?.data?.message || "An error occurred",
          variant: "destructive",
        });
      }
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateRegisterForm();
    setRegisterErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        // Remove confirmPassword before sending to API
        const { confirmPassword, ...registerPayload } = registerData;
        
        const response = await axios.post(`${API_URL}/auth/register`, registerPayload);
        
        toast({
          title: "Registration successful",
          description: "Your account has been created. You can now log in.",
        });
        
        // Clear form
        setRegisterData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        
        setIsLogin(true);
      } catch (error: any) {
        console.error('Registration error:', error);
        toast({
          title: "Registration failed",
          description: error.response?.data?.message || "An error occurred",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-stockflow-navy bg-opacity-90 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/99fb7d4f-0028-459f-99af-71f6fd8541a9.png" 
              alt="StockFlow Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-stockflow-navy dark:text-white">
            StockFlow
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Interactive Stock Market Platform
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{isLogin ? "Login" : "Register"}</CardTitle>
            <CardDescription>
              {isLogin
                ? "Enter your credentials to access your account"
                : "Create a new account to get started"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLogin ? (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  />
                  {loginErrors.email && (
                    <p className="text-sm font-medium text-red-500">{loginErrors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  />
                  {loginErrors.password && (
                    <p className="text-sm font-medium text-red-500">{loginErrors.password}</p>
                  )}
                </div>
                <Button type="submit" className="w-full">Login</Button>
              </form>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={registerData.name}
                    onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                  />
                  {registerErrors.name && (
                    <p className="text-sm font-medium text-red-500">{registerErrors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  />
                  {registerErrors.email && (
                    <p className="text-sm font-medium text-red-500">{registerErrors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  />
                  {registerErrors.password && (
                    <p className="text-sm font-medium text-red-500">{registerErrors.password}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Confirm Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    value={registerData.confirmPassword}
                    onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  />
                  {registerErrors.confirmPassword && (
                    <p className="text-sm font-medium text-red-500">{registerErrors.confirmPassword}</p>
                  )}
                </div>
                <Button type="submit" className="w-full">Register</Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              variant="link" 
              onClick={() => {
                setIsLogin(!isLogin);
                setLoginErrors({});
                setRegisterErrors({});
              }}
              className="text-stockflow-gold hover:text-stockflow-darkGold"
            >
              {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
