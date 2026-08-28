import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, User, Pencil } from "lucide-react";
import { AuthContext } from "../../Context/AuthProvider";
import { useTheme } from "../../Context/ThemeProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ScrollRestoration } from "react-router";

// Theme accent — indigo, matching the dashboard navigation's active state
// (indigo-400/indigo-300 on dark, indigo-600/indigo-700 on light).
const ACC = { dark: "#34d399", light: "#059669" };
const PREMIUM = { dark: "#fbbf24", light: "#f59e0b" };
const GRADIENT = "linear-gradient(135deg, #6366f1, #8b5cf6)";

const ROLE_LABELS = {
  free_user: "Free Member",
  premium_user: "Premium",
  admin: "Admin",
};

const EXP_LABELS = {
  entry: "Entry Level",
  junior: "Junior",
  mid: "Mid Level",
  senior: "Senior",
  lead: "Lead",
  executive: "Executive",
};

const SectionTag = ({ children, acc }) => (
  <div className="mb-3 sm:mb-4 flex items-center gap-2">
    <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: acc }} />
    <span className="font-data text-[10px] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-base-content/45">
      {children}
    </span>
    <span className="h-px flex-1 bg-base-content/8" />
  </div>
);

const Field = ({ label, value, muted }) => (
  <div className="min-w-0">
    <p className="font-data text-[10px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-base-content/40">
      {label}
    </p>
    <p
      title={value || undefined}
      className={`mt-1.5 text-[15px] sm:text-sm font-medium leading-snug break-words ${
        muted ? "text-base-content/40" : "text-base-content"
      }`}
    >
      {value || "Not set"}
    </p>
  </div>
);

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { isDark } = useTheme();
  const prefersReduced = useReducedMotion();

  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  const acc = isDark ? ACC.dark : ACC.light;
  const premium = isDark ? PREMIUM.dark : PREMIUM.light;

  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .get(`/api/users/me/${user.email}`)
      .then((res) => {
        if (res.data.success) setProfile(res.data.data);
      })
      .catch((err) => {
        console.error("Failed to fetch profile:", err);
      })
      .finally(() => setLoadingProfile(false));
  }, [user?.email, axiosSecure]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.1, 0, 1] },
    },
  };

  if (!user) {
    return (
      <div className="mx-auto max-w-md py-16 sm:py-20 text-center px-2">
        <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-base-300 text-base-content/30">
          <User className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <h2 className="font-display mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-base-content">
          This page is only for signed-in members
        </h2>
        <p className="mt-2 text-sm text-base-content/50 px-4">
          Sign in to see and edit your professional profile.
        </p>
      </div>
    );
  }

  if (loadingProfile) {
    return (
      <div className="mx-auto max-w-3xl animate-pulse space-y-5 sm:space-y-6 py-4">
        <div className="h-5 w-32 rounded bg-base-content/10" />
        <div className="h-40 rounded-3xl bg-base-content/8" />
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
          <div className="h-36 rounded-2xl bg-base-content/8" />
          <div className="h-36 rounded-2xl bg-base-content/8" />
        </div>
        <div className="h-48 rounded-2xl bg-base-content/8" />
        <div className="h-14 rounded-2xl bg-base-content/8" />
      </div>
    );
  }
  const displayName = profile?.name || user?.displayName || 'User';
  const photo = profile?.photoURL;
  const hasPhoto = Boolean(photo);
  const displayEmail = profile?.email || user?.email || "";

  const target = profile?.target_role || "";
  const exp = profile?.experience_level || "";
  const expLabel = EXP_LABELS[exp] || "";
  const roleKey = profile?.role || "free_user";
  const roleLabel = ROLE_LABELS[roleKey] || roleKey;
  const roleColor =
    roleKey === "premium_user" ? premium : roleKey === "admin" ? acc : null;

  const initials =
    displayName
      .split(" ")
      .filter(Boolean)
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "CF";

  const handleEdit = () => navigate("/dashboard/updateprofile");

  return (
    <div className="mx-auto w-full max-w-3xl py-2 sm:py-4">
      {/* Breadcrumb eyebrow — tighter tracking on mobile */}
      <div className="mb-4 sm:mb-6 flex items-center gap-2 font-data text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-base-content/40">
        <span>CareerForge</span>
        <span className="text-base-content/25">/</span>
        <span style={{ color: acc }}>My Profile</span>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="space-y-5 sm:space-y-6"
      >
        {/* ── Forged identity record (signature) ─────────────── */}
        <motion.section
          variants={item}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-base-content/10 bg-base-300/60 p-5 sm:p-6 lg:p-8"
        >
          <div aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 sm:-right-12 sm:-top-12 h-36 w-36 sm:h-44 sm:w-44 rounded-full blur-3xl opacity-60"
            style={{
              background: isDark
                ? "radial-gradient(circle, rgba(16,185,129,0.18), transparent 70%)"
                : "radial-gradient(circle, rgba(99,102,241,0.10), transparent 70%)",
            }}
          />
          {/* corner forge brackets — desktop only */}
          <div aria-hidden className="hidden sm:block pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-emerald-500/15 rounded-tl-2xl lg:rounded-tl-3xl" />
          <div aria-hidden className="hidden sm:block pointer-events-none absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-emerald-500/15 rounded-tr-2xl lg:rounded-tr-3xl" />

          <div className="relative flex flex-col gap-5 sm:gap-6 sm:flex-row sm:items-center">
            {/* Medallion — 80px mobile → 96px desktop */}
            <div className="relative shrink-0 self-center sm:self-auto">
              <div
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full p-px sm:p-0.75"
                style={{
                  background: `linear-gradient(135deg, ${acc}, transparent 62%)`,
                }}
              >
                <div className="h-full w-full overflow-hidden rounded-full bg-base-200 ring-1 ring-emerald-500/10">
                  {hasPhoto ? (
                    <img
                      src={photo}
                      alt={displayName}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center font-display text-xl sm:text-2xl font-semibold text-base-content/70"
                      style={{
                        backgroundColor: isDark ? "#1a212c" : "#eef1f6",
                      }}
                    >
                      {initials}
                    </div>
                  )}
                </div>
              </div>
              <span
                className="absolute -bottom-0.5 -right-0.5 h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full border-2"
                style={{
                  background: roleColor || "currentColor",
                  borderColor: isDark ? "#0B0F1A" : "#F8FAFC",
                  boxShadow: `0 0 0 2px ${isDark ? "#1f2937" : "#e5e7eb"}`,
                }}
              />
            </div>

            {/* Name + role spec — centered on mobile, left on desktop */}
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <p className="font-data text-[10px] uppercase tracking-[0.20em] sm:tracking-[0.24em] text-base-content/45">
                Identity Record
              </p>
              <h1 className="font-display mt-1.5 text-[1.65rem] sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-none text-base-content break-words">
                {displayName}
              </h1>
              <div
                className="mt-3 h-0.5 w-12 sm:w-14 rounded-full mx-auto sm:mx-0"
                style={{ background: acc }}
              />
              <div className="font-data mt-3 sm:mt-4 flex flex-wrap justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-1.5 text-xs sm:text-[13px]">
                <p>
                  <span className="text-base-content/40">grade / </span>
                  <span
                    className={
                      expLabel ? "text-base-content" : "text-base-content/40"
                    }
                  >
                    {expLabel || "Not set"}
                  </span>
                </p>
              </div>
            </div>

            {/* Role badge — centered on mobile */}
            <div className="self-center sm:self-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 px-3 py-1.5 sm:py-1 font-data text-[11px] uppercase tracking-wider text-emerald-600 dark:border-emerald-400/20 dark:text-emerald-400">
                <span
                  className="h-1.5 w-1.5 rounded-full shrink-0"
                  style={{ background: roleColor || "currentColor" }}
                />
                {roleLabel}
              </span>
            </div>
          </div>
        </motion.section>

        {/* ── Details ────────────────────────────────────────── */}
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
          <motion.section
            variants={item}
            className="rounded-2xl border border-base-content/10 bg-base-300/60 p-5 sm:p-6"
          >
            <SectionTag acc={acc}>Contact</SectionTag>
            <div className="space-y-4 sm:space-y-5">
              <Field
                label="Name"
                value={displayName}
                muted={!profile?.name && !user?.displayName}
              />
              <div className="min-w-0">
                <p className="font-data text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-base-content/40">
                  Email
                </p>
                <p
                  title={displayEmail || undefined}
                  className="mt-1.5 flex items-start gap-2 text-[15px] sm:text-sm font-medium text-base-content break-words"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-base-content/40 mt-0.5" />
                  <span className="min-w-0 break-all">
                    {displayEmail || "Not provided"}
                  </span>
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={item}
            className="rounded-2xl border border-base-content/10 bg-base-300/60 p-5 sm:p-6"
          >
            <SectionTag acc={acc}>Positioning</SectionTag>
            <div className="space-y-4 sm:space-y-5">
              <Field label="Experience" value={expLabel} muted={!expLabel} />
              <div className="min-w-0">
                <p className="font-data text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-base-content/40">
                  Status
                </p>
                <p className="mt-1.5 text-[15px] sm:text-sm font-medium text-base-content">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: acc }} />
                    Active record
                  </span>
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        {/* ── Skills / toolkit ───────────────────────────────── */}
        <motion.section
          variants={item}
          className="rounded-2xl border border-base-content/10 bg-base-300/60 p-5 sm:p-6"
        >
          <SectionTag acc={acc}>Toolkit</SectionTag>
          {profile?.skills?.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  title={skill}
                  className="inline-flex items-center gap-1.5 max-w-full rounded-full border border-base-content/10 bg-base-200/60 px-3 py-1.5 font-data text-xs text-base-content/80"
                >
                  <span
                    className="h-1 w-1 rounded-full shrink-0"
                    style={{ background: acc }}
                  />
                  <span className="truncate min-w-0 max-w-[16ch] sm:max-w-none">{skill}</span>
                </span>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-base-content/12 p-5 sm:p-6 text-center">
              <p className="font-data text-xs text-base-content/45">
                No skills on your profile yet
              </p>
              <p className="mt-1 text-xs sm:text-xs text-base-content/30 leading-relaxed px-2">
                Add skills so job matches can see what you can do.
              </p>
            </div>
          )}
        </motion.section>

        {/* ── Edit action — 48px min height for thumb ────────── */}
        <motion.button
          variants={item}
          whileTap={{ scale: prefersReduced ? 1 : 0.99 }}
          onClick={handleEdit}
          className="group flex w-full min-h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-[15px] sm:text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/30 active:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-base-100 dark:focus-visible:ring-offset-[#0B0F1A]"
        >
          <Pencil className="h-4 w-4 shrink-0" />
          <span>Edit Profile</span>
          <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.button>
        
      </motion.div>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Profile;
