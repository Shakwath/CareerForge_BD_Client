import { motion } from "framer-motion";
import {
  ScanSearch,
  Brain,
  PenSquare,
  Map,
  Mic,
  GaugeCircle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "ATS Score",
    icon: ScanSearch,
    description:
      "Get an instant ATS compatibility score for your CV and understand how well it matches recruiter screening systems.",
    badge: "Smart Scan",
    iconWrap:
      "bg-cyan-500/15 text-cyan-600 dark:bg-cyan-400/15 dark:text-cyan-300",
    glow: "from-cyan-500/20 via-sky-500/10 to-blue-500/20",
    borderGlow: "group-hover:border-cyan-400/40 dark:group-hover:border-cyan-300/30",
  },
  {
    id: 2,
    title: "Skill Gap",
    icon: Brain,
    description:
      "Identify missing skills between your current CV and the target job role so you know exactly what to improve next.",
    badge: "Gap Analysis",
    iconWrap:
      "bg-violet-500/15 text-violet-600 dark:bg-violet-400/15 dark:text-violet-300",
    glow: "from-violet-500/20 via-fuchsia-500/10 to-pink-500/20",
    borderGlow:
      "group-hover:border-violet-400/40 dark:group-hover:border-violet-300/30",
  },
  {
    id: 3,
    title: "STAR Rewrite",
    icon: PenSquare,
    description:
      "Rewrite weak experience bullets into strong STAR-based achievements that sound clearer, sharper, and more professional.",
    badge: "AI Rewrite",
    iconWrap:
      "bg-amber-500/15 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
    glow: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
    borderGlow:
      "group-hover:border-amber-400/40 dark:group-hover:border-amber-300/30",
  },
  {
    id: 4,
    title: "Roadmap",
    icon: Map,
    description:
      "Receive a personalized step-by-step preparation roadmap based on your target role, missing skills, and improvement areas.",
    badge: "Career Plan",
    iconWrap:
      "bg-emerald-500/15 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300",
    glow: "from-emerald-500/20 via-green-500/10 to-lime-500/20",
    borderGlow:
      "group-hover:border-emerald-400/40 dark:group-hover:border-emerald-300/30",
  },
  {
    id: 5,
    title: "Mock Interview",
    icon: Mic,
    description:
      "Practice interview questions with AI-driven mock sessions and improve your confidence, structure, and answer quality.",
    badge: "Practice Mode",
    iconWrap:
      "bg-indigo-500/15 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300",
    glow: "from-indigo-500/20 via-violet-500/10 to-purple-500/20",
    borderGlow:
      "group-hover:border-indigo-400/40 dark:group-hover:border-indigo-300/30",
  },
  {
    id: 6,
    title: "Readiness Score",
    icon: GaugeCircle,
    description:
      "Track how prepared you are for applications with a readiness score built from CV quality, skill match, and interview progress.",
    badge: "Progress Check",
    iconWrap:
      "bg-rose-500/15 text-rose-600 dark:bg-rose-400/15 dark:text-rose-300",
    glow: "from-rose-500/20 via-pink-500/10 to-red-500/20",
    borderGlow:
      "group-hover:border-rose-400/40 dark:group-hover:border-rose-300/30",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-slate-50 via-white to-slate-100 transition-colors duration-300 dark:from-[#030712] dark:via-[#07111f] dark:to-[#030712]" />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute left-[-5%] top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/15" />
        <div className="absolute right-[-6%] top-20 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/15" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-500/10" />
      </div>

      {/* grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10] dark:opacity-[0.08] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
            <Sparkles className="h-4 w-4 text-amber-500 dark:text-cyan-300" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 dark:text-cyan-100 sm:text-xs">
              Core Features
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Powerful Tools To
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-300 dark:to-violet-300">
              Build Your Career Faster
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            CareerForge BD combines CV analysis, skill-gap detection, roadmap
            planning, and interview preparation into one smart career platform.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 [perspective:1400px]">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{
                  y: -10,
                  rotateX: 4,
                  rotateY: index % 2 === 0 ? -4 : 4,
                  transition: { duration: 0.25 },
                }}
                className="group relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* outer glow */}
                <div
                  className={`absolute -inset-[1px] rounded-[30px] bg-gradient-to-br ${feature.glow} opacity-0 blur-xl transition duration-500 group-hover:opacity-100`}
                />

                <div
                  className={`relative h-full overflow-hidden rounded-[30px] border border-slate-200/70 bg-white/75 p-6 shadow-[0_15px_45px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition duration-300 dark:border-white/10 dark:bg-white/10 dark:shadow-[0_18px_50px_rgba(0,0,0,0.30)] ${feature.borderGlow}`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* glass shine */}
                  <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.38),transparent_28%,transparent_72%,rgba(255,255,255,0.10))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_28%,transparent_72%,rgba(255,255,255,0.04))]" />

                  {/* floating gradient layer */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${feature.glow} opacity-80`}
                  />

                  {/* top */}
                  <div
                    className="relative z-10 flex items-start justify-between"
                    style={{ transform: "translateZ(28px)" }}
                  >
                    <div
                      className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconWrap} shadow-inner ring-1 ring-white/20`}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-white/20 dark:bg-white/5" />
                      <Icon className="relative z-10 h-7 w-7" />
                    </div>

                    <div className="inline-flex items-center gap-1 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
                      {feature.badge}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* middle */}
                  <div
                    className="relative z-10 mt-8"
                    style={{ transform: "translateZ(36px)" }}
                  >
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* bottom line */}
                  <div
                    className="relative z-10 mt-6"
                    style={{ transform: "translateZ(24px)" }}
                  >
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10">
                      <div className="h-full w-0 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>

                  {/* tiny accent dots */}
                  <div className="pointer-events-none absolute bottom-4 right-4 flex gap-1.5 opacity-70">
                    <span className="h-2 w-2 rounded-full bg-white/70 dark:bg-white/40" />
                    <span className="h-2 w-2 rounded-full bg-white/40 dark:bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/25 dark:bg-white/10" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;