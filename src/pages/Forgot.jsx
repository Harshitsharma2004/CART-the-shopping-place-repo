import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating an API request
    if (email) {
      setMessage('If that email is associated with an account, a password reset link will be sent.');
      // Here you would typically call an API to send the reset link
      setEmail('');  // Clear the input field after submission
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <section className="pt-32 pb-12 lg:py-32 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-semibold text-gray-800">Forgot Password</h2>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter Your E-Mail"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-login"
              />
            </div>

            {/* Submit Button */}
            <div className="mb-6">
              <button
                type="submit"
                className="w-full py-3 bg-login text-white rounded-lg hover:bg-primary-dark focus:outline-none"
              >
                Send Reset Link
              </button>
            </div>

            {/* Message */}
            {message && (
              <div className="text-sm text-center mb-4 text-gray-600">
                {message}
              </div>
            )}

            {/* Back to Login Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Remembered your password?{' '}
                <Link to="/profile" className="text-login font-semibold hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
