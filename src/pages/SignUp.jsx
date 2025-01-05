import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  // Main array for storing user credentials
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : [];
  });

  // States for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Password Match
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    // Clear error if passwords match
    setError("");

    // Create user object
    const newUser = {
      username,
      email,
      phone,
      password,
    };

    // Add new user to the data array
    setData((prevData) => [...prevData, newUser]);

    // Clear form fields
    setUsername("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");

    console.log("User signed up with:", newUser);
  };

  // Save data to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <section className="pt-32 pb-12 lg:py-32 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-semibold text-gray-800">Sign Up</h2>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-4">
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="User Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-800"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-800"
                  required
                />
                <button
                  type="button"
                  className="w-24 p-3 border border-gray-300 rounded-r-lg text-white bg-green-400 hover:bg-blue-600"
                  onClick={() => alert("Verification email sent!")}
                >
                  Verify
                </button>
              </div>
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Mobile Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-800"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-800"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-800"
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-600 mb-4">{error}</p>}

            {/* Sign Up Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-pink-800 text-white p-3 rounded-lg hover:bg-pink-700"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Already Have an Account */}
          <div className="text-center">
            <p>
              Already have an account?{" "}
              <Link to="/profile" className="text-pink-800 underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
