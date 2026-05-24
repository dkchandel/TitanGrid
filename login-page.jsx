import { useState } from "react";

const AurumLogo = () => (
  <div className="flex flex-col items-center gap-1">
    <div
      className="w-14 h-14 rounded-xl flex items-center justify-center"
      style={{ background: "#f5f0e8", border: "1.5px solid #c9b89a" }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="#5c3d1e" strokeWidth="1.5" fill="none" />
        <path
          d="M16 8 C12 8, 8 11, 8 16 C8 21, 12 24, 16 24 C20 24, 24 21, 24 16"
          stroke="#5c3d1e"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="3" fill="#5c3d1e" />
      </svg>
    </div>
    <span
      className="text-xs font-semibold tracking-[0.2em] uppercase"
      style={{ color: "#5c3d1e", fontFamily: "'Cormorant Garamond', serif" }}
    >
      Aurum
    </span>
  </div>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853" />
    <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335" />
  </svg>
);

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
    <path d="M12.68 0c.066.89-.243 1.77-.79 2.4-.54.64-1.37 1.07-2.18 1.01-.09-.85.25-1.73.76-2.35C11.02.4 11.89-.03 12.68 0zm2.51 4.7c-.93-.57-2-.87-3.09-.84-.85.02-1.68.28-2.37.74-.48.32-.85.57-1.1.57-.28 0-.67-.26-1.19-.6C6.75 4.17 5.93 3.9 5.1 3.9c-1.83.05-3.56 1.1-4.51 2.8-.99 1.76-.96 5.09.75 8.07.58 1 1.29 2.1 2.26 2.11.92.01 1.23-.58 2.29-.59 1.05-.01 1.33.6 2.25.59.97-.01 1.65-1.03 2.23-2.03.39-.67.67-1.27.84-1.67l.04-.09c-1.43-.62-2.35-2.06-2.33-3.63.02-1.33.67-2.55 1.76-3.27z" />
  </svg>
);

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreed: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("signup");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account creation — connect to your backend here!");
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#faf8f4", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* Top nav */}
      <header
        className="flex items-center justify-between px-5 py-4 border-b"
        style={{ borderColor: "#e8dfd0" }}
      >
        <button className="p-1" aria-label="Menu">
          <div className="space-y-1.5">
            <span className="block w-5 h-px bg-gray-700"></span>
            <span className="block w-5 h-px bg-gray-700"></span>
            <span className="block w-5 h-px bg-gray-700"></span>
          </div>
        </button>
        <h1
          className="text-2xl font-bold tracking-wider"
          style={{ color: "#1a1208", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.1em" }}
        >
          Heritage
        </h1>
        <div className="w-8" />
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-6 pt-8 pb-6 max-w-sm mx-auto w-full">
        {/* Logo */}
        <div className="mb-6">
          <AurumLogo />
        </div>

        {/* Heading */}
        <h2
          className="text-3xl font-bold mb-1 text-center"
          style={{ color: "#1a1208", fontFamily: "'Cormorant Garamond', serif" }}
        >
          Create Account
        </h2>
        <p
          className="text-sm text-center mb-7"
          style={{ color: "#8a7560", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          Join our refined community of professionals
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Full Name */}
          <div>
            <label
              className="block text-xs font-semibold tracking-widest uppercase mb-1.5"
              style={{ color: "#5c3d1e" }}
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
              style={{
                background: "#fff",
                border: "1px solid #ddd3c4",
                color: "#1a1208",
                fontFamily: "inherit",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#5c3d1e")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd3c4")}
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-xs font-semibold tracking-widest uppercase mb-1.5"
              style={{ color: "#5c3d1e" }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              required
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
              style={{
                background: "#fff",
                border: "1px solid #ddd3c4",
                color: "#1a1208",
                fontFamily: "inherit",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#5c3d1e")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd3c4")}
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-xs font-semibold tracking-widest uppercase mb-1.5"
              style={{ color: "#5c3d1e" }}
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 pr-10"
                style={{
                  background: "#fff",
                  border: "1px solid #ddd3c4",
                  color: "#1a1208",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#5c3d1e")}
                onBlur={(e) => (e.target.style.borderColor = "#ddd3c4")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Toggle password"
              >
                {showPassword ? (
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Terms checkbox */}
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 rounded"
              style={{ accentColor: "#5c3d1e" }}
              required
            />
            <span className="text-sm" style={{ color: "#5c3d1e" }}>
              I agree to the{" "}
              <a href="#" className="font-semibold underline" style={{ color: "#1a1208" }}>
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="font-semibold underline" style={{ color: "#1a1208" }}>
                Privacy Policy
              </a>
            </span>
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-lg font-bold tracking-[0.2em] uppercase text-sm transition-all duration-200 mt-2"
            style={{
              background: "#1a1208",
              color: "#faf8f4",
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "0.2em",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#5c3d1e")}
            onMouseLeave={(e) => (e.target.style.background = "#1a1208")}
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center w-full my-5 gap-3">
          <div className="flex-1 h-px" style={{ background: "#ddd3c4" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "#8a7560" }}>
            or continue with
          </span>
          <div className="flex-1 h-px" style={{ background: "#ddd3c4" }} />
        </div>

        {/* Social buttons */}
        <div className="flex gap-3 w-full">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border text-sm font-semibold tracking-wide transition-all duration-150"
            style={{
              border: "1px solid #ddd3c4",
              color: "#1a1208",
              background: "#fff",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f0e8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
          >
            <GoogleIcon />
            Google
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border text-sm font-semibold tracking-wide transition-all duration-150"
            style={{
              border: "1px solid #ddd3c4",
              color: "#1a1208",
              background: "#fff",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f0e8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
          >
            <AppleIcon />
            Apple
          </button>
        </div>
      </main>

      {/* Bottom tab bar */}
      <nav
        className="flex border-t sticky bottom-0"
        style={{ background: "#faf8f4", borderColor: "#e8dfd0" }}
      >
        <button
          onClick={() => setActiveTab("signin")}
          className="flex-1 flex flex-col items-center py-3 gap-1 text-xs font-semibold transition-colors"
          style={{
            color: activeTab === "signin" ? "#5c3d1e" : "#8a7560",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          Sign In
        </button>
        <button
          onClick={() => setActiveTab("signup")}
          className="flex-1 flex flex-col items-center py-3 gap-1 text-xs font-semibold transition-colors"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <span
            className="flex flex-col items-center gap-1 px-4 py-1 rounded-full"
            style={{
              background: activeTab === "signup" ? "#f5f0e8" : "transparent",
              color: activeTab === "signup" ? "#5c3d1e" : "#8a7560",
            }}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Sign Up
          </span>
        </button>
      </nav>
    </div>
  );
}
