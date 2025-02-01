import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left side */}
      <div className="w-1/2 bg-blue-600 text-white flex items-center justify-center">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to StreamLine</h1>
          <p className="text-xl mb-8">
            Streamline your workflow and boost productivity with our intuitive SaaS platform.
          </p>
          <Link to="/" className="text-blue-200 hover:text-white underline">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-md w-full px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Sign in to your account</h2>
          <div className="space-y-4 mb-8">
            <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6 mr-2" />
              Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center bg-gray-800 text-white rounded-md py-2 px-4 hover:bg-gray-700">
              <i className="bi bi-github text-xl mr-2"></i>
              Sign in with GitHub
            </button>
          </div>
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign in
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
