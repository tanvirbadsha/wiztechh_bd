import { useState } from "react";

export default function Login() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 gap-10 lg:max-w-7xl lg:mx-auto">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
        {/* Logo */}
        <img src="/assets/logo.png" alt="logo" className="h-10 w-auto" />

        {/* Heading */}
        <div>
          <h1 className="text-[32px] font-semibold text-gray-900">
            {showEmailForm ? "Wellcome Back" : "Create New Account"}
          </h1>
          <p className="text-gray-500 font-medium">
            Let's login to grab amazing deal
          </p>
        </div>

        {/* ==========================
            SOCIAL LOGIN SECTION
           ========================== */}
        <div className="flex flex-col gap-4 w-full max-w-sm">
          {/* Google */}
          <button className="w-full flex items-center gap-3 bg-white py-3 px-5 rounded-xl shadow hover:shadow-md transition justify-center">
            <img src="/assets/icons/google.png" className="h-6 w-6" />
            <span className="text-gray-800 font-medium">
              Continue with Google
            </span>
          </button>

          {/* Apple */}
          <button className="w-full flex items-center gap-3 bg-white py-3 px-5 rounded-xl shadow hover:shadow-md transition justify-center">
            <img src="/assets/icons/apple.svg" className="h-6 w-6" />
            <span className="text-gray-800 font-medium">
              Continue with Apple
            </span>
          </button>
          {/* Divider + OR */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          {/* Email/Phone */}
          {!showEmailForm && (
            <button
              onClick={() => setShowEmailForm(true)}
              className="w-full flex items-center gap-3 bg-white py-3 px-5 rounded-xl shadow hover:shadow-md transition justify-center"
            >
              <img src="/assets/icons/email.svg" className="h-6 w-6" />
              <span className="text-gray-800 font-medium">
                Continue with Email/Phone
              </span>
            </button>
          )}
        </div>

        {/* ==========================
            EMAIL LOGIN FORM
           ========================== */}
        {showEmailForm && (
          <div className="w-full max-w-sm flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                defaultValue="rownok@gmail.com"
                className="w-full bg-gray-100 py-3 px-4 rounded-xl outline-none"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Password</label>
              <div className="w-full bg-gray-100 py-3 px-4 rounded-xl flex items-center justify-between">
                <input
                  type="password"
                  defaultValue="****************"
                  className="bg-transparent outline-none w-full"
                />
                <img
                  src="/assets/icons/eye.svg"
                  className="h-5 w-5 opacity-60"
                />
              </div>
            </div>

            {/* Remember / Forgot password */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <button className="text-purple-700 font-medium">
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button className="w-full bg-purple-800 text-white py-3 rounded-xl text-lg font-medium">
              Login
            </button>
          </div>
        )}

        {/* Sign Up */}
        <p className="text-gray-600">
          Don't have an account?{" "}
          <a className="text-purple-700 font-medium hover:underline cursor-pointer">
            Sign Up
          </a>
        </p>
      </div>

      {/* Right Side Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <div className="w-full max-w-xl rounded-[40px] overflow-hidden">
          <img
            src="/assets/login_page_clipped.png"
            alt="login showcase"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
