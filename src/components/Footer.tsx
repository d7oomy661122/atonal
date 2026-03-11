import { Gamepad2, Github, Twitter, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-gray-800 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="https://dso8.raed.net:455/files/2025100916574601.png" alt="Brixa Logo" className="w-10 h-10 object-contain" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF6B35] bg-clip-text text-transparent">
                Brixa
              </h1>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover and download the latest premium mobile games. From action-packed adventures to thrilling racing games, find your next gaming obsession at Brixa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00D4FF]/20 hover:text-[#00D4FF] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF6B35]/20 hover:text-[#FF6B35] transition-all">
                <Disc className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/20 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">Home</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">New Releases</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">Top Charts</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">Categories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest updates on new games and exclusive content.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[#00D4FF] transition-colors text-sm"
              />
              <button className="w-full px-4 py-2 bg-gradient-to-r from-[#00D4FF] to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Brixa Gaming Hub. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm">Made for Gamers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
