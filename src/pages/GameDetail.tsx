import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Download, Star, Info, ShieldCheck, Smartphone, HardDrive, ArrowLeft } from 'lucide-react';
import { games } from '../data/games';

export default function GameDetail() {
  const { id } = useParams<{ id: string }>();
  const game = games.find((g) => g.id === id);

  useEffect(() => {
    if (game) {
      document.title = `${game.title} - Download Free on Brixa`;
      
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', game.description.substring(0, 160));
    }
  }, [game]);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Game Not Found</h2>
          <Link to="/" className="text-[#00D4FF] hover:underline flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-16 min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Games
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] border border-[#333] rounded-2xl overflow-hidden shadow-2xl mb-12">
          <div className="relative h-64 md:h-96">
            <img src={game.cover} alt={game.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col md:flex-row items-end justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-[#00D4FF]/20 text-[#00D4FF] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {game.category}
                  </span>
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                    <span className="text-sm font-bold text-white">{game.rating}</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                  {game.title}
                </h1>
                <p className="text-gray-300 font-medium">{game.publisher}</p>
              </div>

              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  to={`/download/${game.id}`}
                  className="flex-1 sm:flex-none px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8A65] text-white rounded-xl font-bold text-lg hover:from-[#FF8A65] hover:to-[#FFB74D] transition-all shadow-[0_8px_25px_rgba(255,107,53,0.4)] flex items-center justify-center space-x-2 group"
                >
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  <span>Download Now</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Info Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#333] border-t border-[#333] bg-black/20">
            <div className="p-4 flex flex-col items-center justify-center text-center">
              <HardDrive className="w-5 h-5 text-gray-400 mb-1" />
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Size</span>
              <span className="text-white font-medium">{game.size}</span>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center">
              <Info className="w-5 h-5 text-gray-400 mb-1" />
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Version</span>
              <span className="text-white font-medium">{game.version}</span>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center">
              <Smartphone className="w-5 h-5 text-gray-400 mb-1" />
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Downloads</span>
              <span className="text-white font-medium">{game.downloads}+</span>
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center">
              <ShieldCheck className="w-5 h-5 text-green-400 mb-1" />
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Security</span>
              <span className="text-green-400 font-medium">Verified Safe</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-gradient-to-r from-[#00D4FF] to-[#FF6B35] w-1.5 h-6 rounded-full mr-3"></span>
                About This Game
              </h2>
              <div className="bg-[#1e1e1e] border border-[#333] rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                  {game.description}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="bg-gradient-to-r from-[#00D4FF] to-[#FF6B35] w-1.5 h-6 rounded-full mr-3"></span>
                Screenshots
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {game.screenshots.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-[#333] group">
                    <img 
                      src={img} 
                      alt={`${game.title} screenshot ${idx + 1}`} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#1e1e1e] border border-[#333] rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-[#333] pb-2">Game Details</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-gray-400">Developer</span>
                  <span className="text-white font-medium text-right">{game.publisher}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-400">Category</span>
                  <span className="text-[#00D4FF] font-medium capitalize">{game.category}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-400">Updated</span>
                  <span className="text-white font-medium">Recently</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-400">Requirements</span>
                  <span className="text-white font-medium">Android 5.0+</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#FF6B35]/10 border border-[#00D4FF]/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-[#00D4FF]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6 text-[#00D4FF]" />
              </div>
              <h4 className="text-white font-bold mb-2">100% Safe & Secure</h4>
              <p className="text-sm text-gray-400">
                All files are scanned with multiple antivirus programs before uploading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
