import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  //main array of login details;

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // For simplicity, let's assume these are the correct login credentials.
    // const validEmail = 'user@example.com';
    // const validPassword = 'password123';
    localStorage.setItem('user', JSON.stringify({ email: email, username: email, token: password }));
    // navigate('/'); // Replace with the actual path after login
    // Check if the entered email and password are correct
    // if (email === validEmail && password === validPassword) {
    //   // Store session data in localStorage
    //   localStorage.setItem('user', JSON.stringify({ email: email, username: 'John Doe', token: 'abcd1234' }));

    //   // Redirect to the dashboard or profile page
    //   
    // } else {
    //   alert('Invalid credentials');
    // }
  };

  return (
    <section className="pt-32 pb-12 lg:py-32 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-semibold text-gray-800">Login</h2>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <form onSubmit={handleLogin}>
            {/* Email/Phone Input */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-login"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-login"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-4">
              <Link to="/forgot" className="text-sm text-login hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <div className="mb-6">
              <button
                type="submit"
                className="w-full py-3 bg-login text-white rounded-lg hover:bg-primary-dark focus:outline-none"
              >
                Login
              </button>
            </div>

            {/* SignUp Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-login font-semibold hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
