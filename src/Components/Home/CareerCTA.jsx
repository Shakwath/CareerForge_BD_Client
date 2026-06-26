const CareerCTA = () => {
  return (
    <section
      className="
      relative overflow-hidden
      py-24 px-6
      bg-gray-50 dark:bg-[#080b18]
      transition-colors duration-500
      before:absolute
      before:inset-0
      before:bg-gradient-to-b
      before:from-transparent
      before:via-purple-500/5
      before:to-transparent
      "
    >
      {/* Background Grid */}
      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)]
        bg-[size:40px_40px]
        dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
        pointer-events-none
        "
      />
      {/* Background Glow */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-purple-500/20
        blur-[120px]
        rounded-full
        "
      />
      <div
        className="
        relative
        z-10
        max-w-5xl
        mx-auto
        "
      >
        {/* Main CTA Card */}
        <div
          className="
          rounded-[35px]
          p-10
          md:p-16
          text-center
          bg-white/80
          dark:bg-white/5
          backdrop-blur-xl
          border
          border-gray-200
          dark:border-white/10
          shadow-2xl
          "
        >
          {/* Badge */}
          <div
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            bg-purple-100
            dark:bg-purple-500/20
            text-purple-600
            dark:text-purple-300
            text-sm
            font-semibold
            mb-8
            "
          >
            🤖 AI Powered Career Growth
          </div>
          {/* Heading */}
          <h2
            className="
            text-4xl
            md:text-6xl
            font-extrabold
            leading-tight
            text-gray-900
            dark:text-white
            "
          >
            Your Dream Job
            <br />
            <span
              className="
              bg-gradient-to-r
              from-purple-500
              to-blue-500
              bg-clip-text
              text-transparent
              "
            >
              Starts With One Click
            </span>
          </h2>
          {/* Description */}
          <p
            className="
            max-w-2xl
            mx-auto
            mt-6
            text-lg
            text-gray-600
            dark:text-gray-300
            "
          >
            Upload your CV and let CareerForge BD analyze your skills, detect
            gaps, and create a personalized roadmap that moves you closer to
            your dream career.
          </p>
          {/* CTA Buttons */}
          <div
            className="
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-5
            mt-10
            "
          >
            <button
              className="
              group
              px-8
              py-4
              rounded-2xl
              bg-purple-600
              hover:bg-purple-700
              text-white
              font-semibold
              shadow-lg
              shadow-purple-500/30
              transition
              "
            >
              Analyze My CV
              <span
                className="
                inline-block
                ml-2
                group-hover:translate-x-1
                transition
                "
              >
                →
              </span>
            </button>
            <button
              className="
              px-8
              py-4
              rounded-2xl
              border
              border-gray-300
              dark:border-white/20
              text-gray-800
              dark:text-white
              hover:bg-gray-100
              dark:hover:bg-white/10
              transition
              "
            >
              Explore Features
            </button>
          </div>
          {/* Trust Section */}
          <div
            className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-8
            text-sm
            text-gray-500
            dark:text-gray-400
            "
          >
            <div>⭐ 95% ATS Accuracy</div>
            <div>🚀 Instant Career Roadmap</div>
            <div>🔒 Secure CV Analysis</div>
          </div>
        </div>
        {/* Floating Card Left */}
        <div
          className="
          hidden
          md:block
          absolute
          -left-10
          top-20
          bg-white
          dark:bg-gray-900
          p-5
          rounded-2xl
          shadow-xl
          border
          border-gray-200
          dark:border-white/10
          animate-pulse
          "
        >
          <p className="text-sm text-gray-500">Skill Match</p>
          <h3
            className="
            text-3xl
            font-bold
            text-purple-600
            "
          >
            94%
          </h3>
        </div>
        {/* Floating Card Right */}
        <div
          className="
          hidden
          md:block
          absolute
          -right-10
          bottom-20
          bg-white
          dark:bg-gray-900
          p-5
          rounded-2xl
          shadow-xl
          border
          border-gray-200
          dark:border-white/10
          "
        >
          <p className="text-sm text-gray-500">Jobs Found</p>
          <h3
            className="
            text-3xl
            font-bold
            text-green-500
            "
          >
            250+
          </h3>
        </div>
      </div>
    </section>
  );
};
export default CareerCTA;
