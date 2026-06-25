import { motion } from "framer-motion";
import { useTheme } from "../../Context/ThemeProvider";
import {
  UploadCloud,
  ClipboardPaste,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Upload CV",
    description:
      "Upload your resume in seconds and let CareerForge BD understand your current profile, skills, and experience.",
    icon: UploadCloud,
  },
  {
    id: "02",
    title: "Paste Job Description",
    description:
      "Add the job post or role requirements so our AI can compare your CV against the target opportunity.",
    icon: ClipboardPaste,
  },
  {
    id: "03",
    title: "AI Analysis & Roadmap",
    description:
      "Get ATS insights, skill gap analysis, smart recommendations, and a personalized roadmap to improve your chances.",
    icon: BrainCircuit,
  },
];

const HowItWorks = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`relative overflow-hidden py-20 md:py-24 transition-colors duration-300 ${
        isDark ? "bg-[#050816]" : "bg-[#fffaf2]"
      }`}
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5%] top-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[-5%] bottom-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-500">
              How It Works
            </span>
          </div>

          <h2
            className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            From CV to Career Strategy in{" "}
            <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>

          <p
            className={`mt-4 text-base leading-8 sm:text-lg ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            CareerForge BD helps you analyze your CV, match it with your target
            role, and build a smart roadmap for better job preparation.
          </p>
        </motion.div>

        {/* cards */}
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative"
              >
                {/* connector arrow for desktop */}
                {index !== steps.length - 1 && (
                  <div className="pointer-events-none absolute left-[calc(100%-10px)] top-1/2 z-20 hidden -translate-y-1/2 lg:block">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-xl ${
                        isDark
                          ? "border-white/10 bg-white/5 text-slate-400"
                          : "border-slate-200 bg-white/80 text-slate-500"
                      }`}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                )}

                <div
                  className={`group relative h-full overflow-hidden rounded-3xl border p-6 sm:p-7 transition duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                      : "border-slate-200 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                  }`}
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-indigo-500/10 to-transparent" />
                  </div>

                  {/* step number */}
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold tracking-[0.2em] ${
                        isDark
                          ? "bg-white/10 text-slate-300"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      STEP {step.id}
                    </span>

                    <div className="h-px flex-1 mx-4 bg-linear-to-r from-indigo-500/30 to-transparent" />
                  </div>

                  {/* icon */}
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/20">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* content */}
                  <h3
                    className={`text-xl font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-7 sm:text-[15px] ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;