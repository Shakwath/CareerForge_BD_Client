import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileSearch,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "../../Context/ThemeProvider";

const StatsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [stats] = useState({
    students: 1240,
    cvsAnalyzed: 3850,
    successRate: 86,
    mentors: 32,
  });

  const [displayStats, setDisplayStats] = useState({
    students: 0,
    cvsAnalyzed: 0,
    successRate: 0,
    mentors: 0,
  });

  useEffect(() => {
    const duration = 1600;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setDisplayStats({
        students: Math.floor(stats.students * easeOut),
        cvsAnalyzed: Math.floor(stats.cvsAnalyzed * easeOut),
        successRate: Math.floor(stats.successRate * easeOut),
        mentors: Math.floor(stats.mentors * easeOut),
      });

      if (frame >= totalFrames) {
        clearInterval(counter);
        setDisplayStats(stats);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [stats]);

  const statCards = [
    {
      id: 1,
      title: "Students",
      value: displayStats.students,
      suffix: "+",
      icon: Users,
      desc: "Students building their career journey with AI-powered guidance.",
      softBg: isDark ? "bg-cyan-400/15" : "bg-cyan-500/10",
      iconColor: isDark ? "text-cyan-300" : "text-cyan-600",
      glow: "from-cyan-400/20 to-blue-500/10",
    },
    {
      id: 2,
      title: "CVs Analyzed",
      value: displayStats.cvsAnalyzed,
      suffix: "+",
      icon: FileSearch,
      desc: "CVs reviewed and improved with ATS-focused smart analysis.",
      softBg: isDark ? "bg-violet-400/15" : "bg-violet-500/10",
      iconColor: isDark ? "text-violet-300" : "text-violet-600",
      glow: "from-violet-400/20 to-fuchsia-500/10",
    },
    {
      id: 3,
      title: "Success Rate",
      value: displayStats.successRate,
      suffix: "%",
      icon: TrendingUp,
      desc: "Users improving their CV quality and preparation performance.",
      softBg: isDark ? "bg-emerald-400/15" : "bg-emerald-500/10",
      iconColor: isDark ? "text-emerald-300" : "text-emerald-600",
      glow: "from-emerald-400/20 to-lime-500/10",
    },
    {
      id: 4,
      title: "Experts & Mentors",
      value: displayStats.mentors,
      suffix: "+",
      icon: ShieldCheck,
      desc: "Support from mentors for roadmap guidance and preparation help.",
      softBg: isDark ? "bg-amber-400/15" : "bg-amber-500/10",
      iconColor: isDark ? "text-amber-300" : "text-amber-600",
      glow: "from-amber-400/20 to-orange-500/10",
    },
  ];

  return (
    <section
      className={`relative overflow-hidden px-4 py-16 transition-colors duration-300 sm:px-6 lg:px-8 lg:py-20 ${
        isDark ? "bg-[#050816]" : "bg-[#f8fbff]"
      }`}
    >
      {/* BG */}
      <div
        className={`absolute inset-0 -z-20 transition-colors duration-300 ${
          isDark
            ? "bg-linear-to-b from-[#050816] via-[#07111f] to-[#050816]"
            : "bg-linear-to-b from-[#f8fbff] via-[#fffdf8] to-[#f6f7fb]"
        }`}
      />

      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`absolute left-[-8%] top-8 h-56 w-56 rounded-full blur-3xl ${
            isDark ? "bg-cyan-500/15" : "bg-cyan-300/25"
          }`}
        />
        <div
          className={`absolute right-[-8%] top-16 h-64 w-64 rounded-full blur-3xl ${
            isDark ? "bg-violet-500/15" : "bg-violet-300/20"
          }`}
        />
        <div
          className={`absolute bottom-0 left-1/3 h-56 w-56 rounded-full blur-3xl ${
            isDark ? "bg-emerald-500/10" : "bg-emerald-300/20"
          }`}
        />
      </div>

      {/* grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] mask-[radial-gradient(circle_at_center,black,transparent_78%)]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: isDark
              ? `
                linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
              `
              : `
                linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px),
                linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)
              `,
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm backdrop-blur-xl ${
              isDark
                ? "border-white/10 bg-white/10"
                : "border-slate-200/70 bg-white/70"
            }`}
          >
            <Sparkles
              className={`h-4 w-4 ${
                isDark ? "text-cyan-300" : "text-amber-500"
              }`}
            />
            <span
              className={`text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs ${
                isDark ? "text-cyan-100" : "text-slate-700"
              }`}
            >
              Initial Platform Stats
            </span>
          </div>

          <h2
            className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Numbers That Reflect
            <span
              className={`block bg-clip-text text-transparent ${
                isDark
                  ? "bg-linear-to-r from-cyan-300 via-blue-300 to-violet-300"
                  : "bg-linear-to-r from-amber-500 via-orange-500 to-rose-500"
              }`}
            >
              Career Growth
            </span>
          </h2>

          <p
            className={`mt-4 text-sm leading-7 sm:text-base ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            These are initial platform metrics for now. Later, you can connect
            them with backend data and show real-time numbers automatically.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl border p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 ${
                  isDark
                    ? "border-white/10 bg-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
                    : "border-slate-200/70 bg-white/70 shadow-[0_10px_35px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_55px_rgba(15,23,42,0.10)]"
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-linear-to-br ${item.glow} opacity-70`}
                />

                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.softBg} ${item.iconColor} shadow-inner`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <div
                    className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-semibold shadow-sm backdrop-blur-xl ${
                      isDark
                        ? "border-white/10 bg-white/10 text-slate-200"
                        : "border-slate-200/70 bg-white/70 text-slate-600"
                    }`}
                  >
                    Initial
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="relative z-10 mt-8">
                  <p
                    className={`text-sm font-medium ${
                      isDark ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {item.title}
                  </p>

                  <div className="mt-2 flex items-end gap-1">
                    <span
                      className={`text-4xl font-black tracking-tight sm:text-5xl ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.value.toLocaleString()}
                    </span>
                    <span
                      className={`mb-1 text-lg font-bold ${
                        isDark ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {item.suffix}
                    </span>
                  </div>

                  <p
                    className={`mt-4 text-sm leading-6 ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.desc}
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

export default StatsSection;