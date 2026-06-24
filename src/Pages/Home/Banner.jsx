import bannerImg from "../../assets/banner-laptop.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, ScanSearch, Route, Brain } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/40 px-6 py-16 md:px-12 lg:px-20 lg:py-24">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-24 right-0 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-7"
        >
          {/* top badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700 md:text-xs">
              AI-Powered Career Catalyst
            </span>
          </motion.div>

          {/* heading */}
          <div className="space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl xl:text-[68px]"
            >
              Precision Path to
              <br />
              <span className="text-slate-900">Your </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text italic text-transparent">
                <Typewriter
                  words={["Dream Career.", "Best CV.", "Future Role."]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={45}
                  delaySpeed={1800}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
            >
              Unlock your next opportunity with Bangladesh&apos;s AI-powered career platform 
              optimize your CV for ATS, build a clear roadmap, and practice smarter with
              interview intelligence designed for modern job seekers.
            </motion.p>
          </div>

          {/* mini feature chips */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <FeatureChip icon={<ScanSearch className="h-4 w-4" />} text="ATS Resume Scan" />
            <FeatureChip icon={<Route className="h-4 w-4" />} text="Career Roadmap" />
            <FeatureChip icon={<Brain className="h-4 w-4" />} text="Interview Intelligence" />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="flex flex-col gap-4 pt-2 sm:flex-row"
          >
            <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/30">
              Optimize Your CV
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="rounded-2xl border border-slate-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition duration-300 hover:border-slate-300 hover:bg-white">
              Explore Roadmap
            </button>
          </motion.div>

          {/* trust row */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-wrap items-center gap-5 pt-2"
          >
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              ATS-ready suggestions
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Personalized roadmap
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Interview practice insights
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE / VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[580px]">
            {/* floating background card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 hidden h-32 w-32 rounded-3xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 blur-2xl md:block"
            />

            {/* main image card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl"
            >
              {/* top shine */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent z-10" />

              <img
                src={bannerImg}
                alt="Career Banner"
                className="h-[340px] w-full object-cover md:h-[420px]"
              />

              {/* overlay bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/15 to-transparent" />
            </motion.div>

            {/* ATS Score Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute bottom-5 left-1/2 z-20 w-[92%] -translate-x-1/2 rounded-3xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 shadow-inner">
                    ⚙️
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      ATS Readiness
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                      92% Match Score
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    +12% improved
                  </div>
                  <span className="hidden text-xs text-slate-400 sm:block">
                    Updated 2m ago
                  </span>
                </div>
              </div>
            </motion.div>

            {/* floating stat 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 0.95, duration: 0.5 },
                scale: { delay: 0.95, duration: 0.5 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -left-3 top-8 hidden rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-lg backdrop-blur md:block"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Interview IQ
              </p>
              <p className="text-lg font-bold text-slate-900">87%</p>
            </motion.div>

            {/* floating stat 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, 6, 0] }}
              transition={{
                opacity: { delay: 1.05, duration: 0.5 },
                scale: { delay: 1.05, duration: 0.5 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -right-4 top-14 hidden rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-lg backdrop-blur lg:block"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Resume Boost
              </p>
              <p className="text-lg font-bold text-slate-900">+24%</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function FeatureChip({ icon, text }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
      <span className="text-blue-600">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default Banner;