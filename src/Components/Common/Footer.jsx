import { Link } from "react-router-dom";
import { useTheme } from "../../Context/ThemeProvider";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isDark
          ? "border-white/10 bg-[#050816] text-slate-300"
          : "border-slate-200 bg-[#fffaf2] text-slate-700"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= MAIN FOOTER ================= */}
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-start md:justify-between">
          {/* brand */}
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-3">
            

              <div>
                <h3
                  className={`text-lg font-bold tracking-tight ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  CareerForge <span className="text-indigo-500">BD</span>
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Smart career platform for students & job seekers.
                </p>
              </div>
            </Link>
          </div>

          {/* footer links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              to="/terms"
              className={`transition ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Terms & Conditions
            </Link>

            <Link
              to="/privacy"
              className={`transition ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              className={`transition ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div
          className={`flex flex-col gap-4  py-5 text-sm md:flex-row md:items-center md:justify-between ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <p className={isDark ? "text-slate-400" : "text-slate-600"}>
            © 2026 CareerForge BD. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span className={isDark ? "text-slate-400" : "text-slate-600"}>
              We accept:
            </span>

            {/* Visa */}
            <PaymentBadge isDark={isDark}>
              <span className="text-[#1A1F71] font-black tracking-wide">VISA</span>
            </PaymentBadge>

            {/* Mastercard */}
            <PaymentBadge isDark={isDark}>
              <div className="flex items-center gap-1">
                <span className="relative inline-block h-3.5 w-3.5 rounded-full bg-[#EB001B]" />
                <span className="relative -ml-2 inline-block h-3.5 w-3.5 rounded-full bg-[#F79E1B]" />
                <span className="ml-1 font-semibold text-slate-700 dark:text-slate-200">
                  Mastercard
                </span>
              </div>
            </PaymentBadge>

            {/* PayPal */}
            <PaymentBadge isDark={isDark}>
              <span className="font-black italic text-[#0070BA]">PayPal</span>
            </PaymentBadge>

            {/* bKash */}
            <PaymentBadge isDark={isDark}>
              <span className="font-bold text-[#E2136E]">bKash</span>
            </PaymentBadge>

            {/* Nagad */}
            <PaymentBadge isDark={isDark}>
              <span className="font-bold text-[#F97316]">Nagad</span>
            </PaymentBadge>
          </div>
        </div>
      </div>
    </footer>
  );
};

function PaymentBadge({ children, isDark }) {
  return (
    <div
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs shadow-sm transition ${
        isDark
          ? "border border-white/10 bg-white/10 text-white"
          : "border border-slate-200 bg-white text-slate-800"
      }`}
    >
      {children}
    </div>
  );
}

export default Footer;