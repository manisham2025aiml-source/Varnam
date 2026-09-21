import React from 'react';
import { Link } from 'react-router-dom';
import { EDITORIAL_STORIES } from '../data/stories';
import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';

export const StoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF6F0] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#C85A32]">
            The Varnam Journal
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1C1917]">
            Stories of Hand, Earth & Memory
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            In-depth cultural journalism exploring ancient metallurgical secrets, natural dye alchemies, and the philosophical soul of Indian master craftsmanship.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDITORIAL_STORIES.map(story => (
            <Link
              key={story.id}
              to={`/story/${story.id}`}
              className="group bg-white rounded-3xl overflow-hidden border border-[#C59B27]/25 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="aspect-16/10 relative overflow-hidden bg-stone-100">
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1B2A4A]/90 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                  {story.stateName}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <span>{story.readTime}</span>
                    <span>•</span>
                    <span>By {story.author}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#C85A32] transition-colors leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-medium">
                    {story.craftName}
                  </span>
                  <span className="text-[#C85A32] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};
