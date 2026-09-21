import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { EDITORIAL_STORIES } from '../data/stories';
import { ALL_CRAFTS } from '../data/crafts';
import { ArrowLeft, Clock, Quote, ArrowRight, Share2, Sparkles } from 'lucide-react';

export const StoryDetailPage: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();

  const story = EDITORIAL_STORIES.find(s => s.id === storyId);

  if (!story) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-stone-900">
          Story Not Found
        </h2>
        <Link
          to="/stories"
          className="px-6 py-2.5 bg-[#C85A32] text-white rounded-full text-xs font-bold uppercase tracking-wider"
        >
          Return to The Varnam Journal
        </Link>
      </div>
    );
  }

  const relatedCraft = ALL_CRAFTS.find(c => c.id === story.relatedCraftIds[0]);

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-12 sm:py-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation */}
        <Link
          to="/stories"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#C85A32] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to The Varnam Journal</span>
        </Link>

        {/* Story Header */}
        <div className="space-y-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-stone-500">
            <span className="font-bold uppercase tracking-widest text-[#7A2021]">
              {story.stateName}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {story.readTime}
            </span>
            <span>•</span>
            <span>{story.publishedAt}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] leading-tight">
            {story.title}
          </h1>

          <p className="font-serif text-lg text-stone-600 italic max-w-2xl mx-auto">
            {story.subtitle}
          </p>

          <div className="pt-2 text-xs text-stone-500">
            Written by <strong>{story.author}</strong> ({story.authorTitle})
          </div>
        </div>

        {/* Cover Image */}
        <div className="aspect-16/9 rounded-3xl overflow-hidden shadow-2xl border border-[#C59B27]/30">
          <img
            src={story.coverImage}
            alt={story.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lead Quote */}
        <div className="bg-white p-8 rounded-3xl border border-[#C59B27]/30 shadow-md text-center space-y-4 my-8">
          <Quote className="w-10 h-10 text-[#C59B27] mx-auto opacity-50" />
          <p className="font-serif text-xl sm:text-2xl font-normal italic text-[#1C1917] leading-relaxed">
            "{story.quote}"
          </p>
          <span className="text-xs font-serif font-bold text-[#7A2021] block">
            — {story.quoteAuthor}
          </span>
        </div>

        {/* Story Paragraphs */}
        <div className="prose prose-stone max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-stone-800 font-serif">
          {story.content.map((paragraph, idx) => (
            <p key={idx} className="leading-loose">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Related Craft Callout */}
        {relatedCraft && (
          <div className="p-6 bg-white rounded-3xl border-2 border-[#C59B27]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={relatedCraft.images[0]}
                alt={relatedCraft.name}
                className="w-16 h-16 rounded-2xl object-cover shrink-0"
              />
              <div>
                <span className="text-[10px] uppercase font-bold text-[#7A2021] tracking-wider block">
                  Featured Masterpiece in this Article
                </span>
                <h4 className="font-serif text-base font-bold text-[#1C1917]">
                  {relatedCraft.name}
                </h4>
                <p className="text-xs text-stone-500 font-mono">
                  Varnam ID: {relatedCraft.varnamId} • {relatedCraft.giNumber}
                </p>
              </div>
            </div>

            <Link
              to={`/craft/${relatedCraft.id}`}
              className="px-6 py-3 bg-[#C85A32] hover:bg-[#B34724] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-md flex items-center gap-1.5 shrink-0"
            >
              <span>View Verified Craft</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </article>
    </div>
  );
};
