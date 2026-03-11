import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Download as DownloadIcon, ArrowLeft, ShieldCheck, Smartphone, HardDrive, Clock } from 'lucide-react';
import { games } from '../data/games';

export default function Download() {
  const { id } = useParams<{ id: string }>();
  const game = games.find((g) => g.id === id);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (game) {
      document.title = `Download ${game.title} - Brixa`;
    }
  }, [game]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsReady(true);
    }
  }, [timeLeft]);

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
      className="pt-32 pb-16 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-3xl w-full mx-auto px-4">
        <div className="bg-[#1e1e1e] border border-[#333] rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="p-8 border-b border-[#333] flex items-center space-x-6">
            <img 
              src={game.cover} 
              alt={game.title} 
              className="w-24 h-24 object-cover rounded-xl shadow-lg border border-[#333]"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{game.title}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center"><HardDrive className="w-4 h-4 mr-1" /> {game.size}</span>
                <span className="flex items-center"><Smartphone className="w-4 h-4 mr-1" /> v{game.version}</span>
              </div>
            </div>
          </div>

          {/* Download Area */}
          <div className="p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
            {!isReady ? (
              <div className="space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      className="text-[#333] stroke-current"
                      strokeWidth="8"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    ></circle>
                    <circle
                      className="text-[#00D4FF] stroke-current transition-all duration-1000 ease-linear"
                      strokeWidth="8"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * (10 - timeLeft)) / 10}
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{timeLeft}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center">
                    <Clock className="w-5 h-5 mr-2 text-[#00D4FF]" />
                    Preparing Download...
                  </h3>
                  <p className="text-gray-400">Please wait while we generate your secure download link.</p>
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="space-y-8 w-full max-w-md mx-auto"
              >
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center justify-center text-green-400 mb-8">
                  <ShieldCheck className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Your link is ready and secure!</span>
                </div>

                <div className="grid gap-4">
                  <a
                    href={game.androidLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg hover:shadow-green-500/30 group"
                  >
                    <DownloadIcon className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                    Download for Android
                  </a>
                  <a
                    href={game.iosLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold text-lg hover:from-indigo-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 group"
                  >
                    <DownloadIcon className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                    Download for iOS
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer Info */}
          <div className="bg-black/20 p-6 border-t border-[#333] text-center">
            <p className="text-sm text-gray-500">
              By downloading, you agree to our Terms of Service and Privacy Policy.
              File is hosted on secure third-party servers.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to={`/game/${game.id}`} className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Game Details
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
