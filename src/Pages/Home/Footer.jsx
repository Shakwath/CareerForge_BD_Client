
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo Icon */}
              <svg className="h-8 w-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span className="text-xl font-bold text-white tracking-tight">
                CareerForge <span className="text-indigo-500">BD</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-4 max-w-sm">
              AI-powered ATS screening, personalized preparation roadmaps, and mock interviews tailored for job seekers in Bangladesh.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#facebook" className="text-slate-400 hover:text-indigo-500 transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#linkedin" className="text-slate-400 hover:text-indigo-500 transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#analyzer" className="hover:text-white transition-colors">AI CV Analyzer</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">Preparation Roadmap</a></li>
              <li><a href="#interviews" className="hover:text-white transition-colors">Mock Interview Suite</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Column 3: Support & Contact */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#report" className="hover:text-white transition-colors">Report an Issue</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Admin</a></li>
              <li><span className="text-xs text-slate-500">support@careerforgebd.com</span></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#refund" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

        </div>

        <hr className="border-slate-800 my-6" />

        {/* Bottom Section: Copyright & Payment Partners */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright text */}
          <div className="text-xs text-slate-500 order-2 md:order-1">
            &copy; {new Date().getFullYear()} CareerForge BD. All rights reserved. Built for Academic Project.
          </div>
          
          {/* Payment Logos (SSLCommerz Gateway Indication) */}
          <div className="flex flex-col items-center md:items-end order-1 md:order-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Secured Payment Partner</span>
            <div className="flex items-center space-x-3 opacity-60 filter grayscale hover:grayscale-0 transition-all duration-300">
              <span className="bg-pink-600 text-[10px] text-white px-2 py-0.5 rounded font-bold">bKash</span>
              <span className="bg-orange-600 text-[10px] text-white px-2 py-0.5 rounded font-bold">Nagad</span>
              <span className="bg-slate-700 text-[10px] text-white px-2 py-0.5 rounded font-semibold">Cards (SSLCommerz)</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;