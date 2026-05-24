import React, { useState, useMemo, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export type PostData = {
  id: string;
  title: string;
  description: string;
  pubDateStr: string;
  tags: string[];
  readTime: number;
  coverImage?: string;
};

export default function BlogList({ posts }: { posts: PostData[] }) {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let result = posts;
    if (selectedTag) {
      result = result.filter(p => p.tags.includes(selectedTag));
    }
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(s) || 
        p.description.toLowerCase().includes(s) ||
        p.tags.some(t => t.toLowerCase().includes(s))
      );
    }
    return result;
  }, [posts, search, selectedTag]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedTag]);

  return (
    <div className="flex flex-col gap-8">
      {/* Elegant, Foolproof Search and Filter */}
      <div className="flex flex-col gap-8 mb-16">
        <div className="relative w-full group">
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-[var(--border)] py-5 text-2xl font-heading font-medium text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-all duration-300 placeholder:text-[var(--text-muted)] placeholder:font-light tracking-tight hover:border-[var(--text-muted)]"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="Clear search"
            >
              <X size={24} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-2">
          <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest opacity-50">Filter</span>
          <button
            onClick={() => setSelectedTag(null)}
            className={`font-mono text-xs uppercase tracking-widest pb-1 border-b-2 transition-all duration-300 ${
              selectedTag === null
                ? 'text-[var(--accent)] border-[var(--accent)] drop-shadow-[0_0_8px_rgba(255,0,0,0.3)]'
                : 'text-[var(--text-muted)] border-transparent hover:text-[var(--text)] hover:border-[var(--text-muted)]'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`font-mono text-xs uppercase tracking-widest pb-1 border-b-2 transition-all duration-300 ${
                selectedTag === tag
                  ? 'text-[var(--accent)] border-[var(--accent)] drop-shadow-[0_0_8px_rgba(255,0,0,0.3)]'
                  : 'text-[var(--text-muted)] border-transparent hover:text-[var(--text)] hover:border-[var(--text-muted)]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="font-mono text-xs text-[var(--text-muted)] mb-2">
        Showing {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
      </div>

      {/* Posts Grid */}
      {currentPosts.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-[var(--border)] rounded-2xl bg-[var(--bg-surface)]">
          <p className="font-mono text-sm text-[var(--text-muted)]">No posts found matching your criteria.</p>
          <button 
            onClick={() => { setSearch(''); setSelectedTag(null); }}
            className="mt-4 text-[var(--accent)] font-mono text-xs hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-24">
          {currentPosts.map((post) => (
            <a href={`/blog/${post.id}`} key={post.id} className="group block outline-none">
              <article className="flex flex-col md:flex-row gap-16 pb-20 border-b border-[var(--border)] transition-colors duration-500 hover:border-[var(--text-muted)]">
                
                {/* Cover Image */}
                {post.coverImage && (
                  <div className="md:w-2/5 aspect-[16/10] overflow-hidden rounded-xl bg-[var(--bg-surface)] flex-shrink-0">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale opacity-70 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-4 font-mono text-[10px] text-[var(--text-muted)] mb-8 uppercase tracking-[0.2em]">
                    <time dateTime={post.pubDateStr}>{post.pubDateStr}</time>
                    <span className="text-[var(--border)]">/</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold font-heading tracking-tight text-[var(--text)] mb-8 leading-tight transition-colors group-hover:text-[var(--accent)]">
                    {post.title}
                  </h2>
                  
                  <p className="text-[var(--text-secondary)] line-clamp-3 leading-relaxed mb-12 font-sans text-lg md:text-xl font-light">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-widest transition-colors group-hover:text-[var(--text)]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <span className="font-mono text-sm uppercase tracking-widest text-[var(--accent)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-6 mt-12 border-t border-[var(--border)] pt-8">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--accent)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft size={16} /> Prev
          </button>
          
          <div className="font-mono text-sm tracking-widest text-[var(--text-muted)]">
            <span className="text-[var(--text)]">{currentPage}</span> / {totalPages}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--accent)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
