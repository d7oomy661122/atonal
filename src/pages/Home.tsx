import { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { games } from '../data/games';
import GameCard from '../components/GameCard';

interface HomeProps {
  searchTerm: string;
  currentCategory: string;
}

const ITEMS_PER_PAGE = 8;

export default function Home({ searchTerm, currentCategory }: HomeProps) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.title = 'Brixa Gaming Hub - Premium Mobile Games';
  }, []);

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            game.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = currentCategory === 'all' || game.category === currentCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, currentCategory]);

  const totalPages = Math.ceil(filteredGames.length / ITEMS_PER_PAGE);
  const currentGames = filteredGames.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-8 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4">
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {searchTerm ? 'Search Results' : currentCategory === 'all' ? 'Featured Games' : `${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)} Games`}
            </h2>
          </div>

          {currentGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-white/5 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No games found</h3>
              <p className="text-gray-400 max-w-md">
                We couldn't find any games matching your criteria. Try adjusting your search or category filter.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                Previous
              </button>
              
              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-[#00D4FF] to-[#FF6B35] text-white shadow-lg'
                        : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </motion.main>
  );
}
