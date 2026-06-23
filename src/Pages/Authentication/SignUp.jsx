import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // simple password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await createUser(email, password);
      await updateUserProfile(name, photoURL);

      setSuccess("Account created successfully!");
      form.reset();

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-slate-400 text-center mb-6">
          Join CareerForge BD and start building your future
        </p>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Paste your profile photo URL (optional)"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-indigo-500"
              required
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-md px-3 py-2">
              {error}
            </p>
          )}

          {success && (
            <p className="text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-md px-3 py-2">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-lg font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/signin" className="text-indigo-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;