import React from 'react';
import { Star, Download, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Game } from '../data/games';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`} className="block group">
      <article className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] border border-[#333] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,212,255,0.15),0_0_20px_rgba(255,107,53,0.1)] hover:border-[#00D4FF]">
        <div className="relative mb-4 overflow-hidden rounded-lg aspect-video">
          <img
            src={game.cover}
            alt={game.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-bold text-white line-clamp-1">{game.title}</h3>
            <div className="flex items-center space-x-1 text-sm text-gray-400 shrink-0">
              <Zap className="w-4 h-4 text-[#00D4FF]" />
              <span>{game.downloads}</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-400 line-clamp-2">{game.description}</p>
          
          <div className="flex items-center space-x-2">
            <span className="bg-[#00D4FF]/20 text-[#00D4FF] text-xs px-2 py-1 rounded-md capitalize">
              {game.category}
            </span>
            <span className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-md">
              {game.size}
            </span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
              <span className="text-sm font-medium text-white">{game.rating}</span>
            </div>
            
            <button className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A65] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-[#FF8A65] hover:to-[#FFB74D] transition-all shadow-[0_4px_15px_rgba(255,107,53,0.3)] hover:shadow-[0_8px_25px_rgba(255,107,53,0.4)] flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Get</span>
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default GameCard;
