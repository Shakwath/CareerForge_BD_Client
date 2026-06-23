import bannerImg from "../../assets/banner-laptop.png";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block text-[11px] md:text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-700 px-4 py-1 rounded-full">
            AI-Powered Career Catalyst
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0f172a]">
            Precision Path to <br />
            <span className="text-[#0f172a]">Your </span>
            <span className="italic text-blue-600 font-semibold">
              <Typewriter
                words={["Dream Career."]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-xl leading-8">
            Unlock potential with Bangladesh&apos;s most advanced AI suite for
            ATS optimization, career roadmapping, and simulated interview
            intelligence.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300">
              Optimize Your CV Now 🚀
            </button>

            <button className="border border-gray-300 hover:border-gray-400 bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl transition duration-300">
              Explore Roadmap
            </button>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px] rounded-2xl overflow-hidden shadow-xl bg-white">
            <img
              src={bannerImg}
              alt="Career Banner"
              className="w-full h-[320px] md:h-[380px] object-cover"
            />

            {/* Floating Match Score Card */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-lg">
                  ⚙️
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
                    ATS Readiness
                  </p>
                  <h3 className="text-xl font-bold text-[#0f172a]">
                    92% Match Score
                  </h3>
                </div>
              </div>

              <span className="text-xs text-gray-400 hidden sm:block">
                Updated 2m ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;