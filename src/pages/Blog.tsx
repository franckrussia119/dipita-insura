import React, { useState } from "react";
import { useRouter } from "../context/RouterContext";
import { BLOG_DATA } from "../data";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";

export default function Blog() {
  const { navigateTo } = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Family Health", "Financial Tips", "Entrepreneurship", "Diaspora Insights", "Auto Care", "Education"];

  const filteredPosts = BLOG_DATA.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePostClick = (id: string) => {
    // Navigate to contact or about as template fallback, or standard service page
    navigateTo("/contact");
  };

  return (
    <div className="w-full">
      
      {/* Page Header */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('https://dipita-insura.com/wp-content/uploads/2025/03/pexels-thirdman-5060999-scaled.jpg')" }} />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-gold text-xs uppercase tracking-widest font-bold">DIPITA insights</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            Our News & Articles
          </h1>
          <div className="flex items-center gap-2 text-xs text-gray-300 mt-2 font-medium">
            <button onClick={() => navigateTo("/")} className="hover:text-gold cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="py-12 bg-white px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Categories Horizontal Scroller */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer whitespace-nowrap transition-colors ${
                  selectedCategory === cat 
                    ? "bg-gold text-navy" 
                    : "bg-light-gray text-navy/70 hover:bg-navy hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-light-gray text-navy placeholder-gray-400 text-xs rounded-xl pl-10 pr-4 py-3 border border-gray-200 focus:outline-none focus:border-gold w-full"
            />
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 md:px-8 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-150 p-8 max-w-md mx-auto">
              <span className="text-3xl" role="img" aria-label="No data">🔍</span>
              <h3 className="font-display font-bold text-navy text-lg mt-3">No articles match your search</h3>
              <p className="text-gray-500 text-xs mt-2">Try choosing a different category or adjusting search terms.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-gray-150 transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Visual Card Gradient Header */}
                    <div className={`bg-gradient-to-br ${post.bgGradient} h-48 p-6 flex flex-col justify-between items-start text-white relative overflow-hidden shrink-0`}>
                      <div className="absolute inset-0 bg-black/10" />
                      
                      <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                        <Tag size={10} className="text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                          {post.category}
                        </span>
                      </div>

                      <div className="relative z-10">
                        <span className="block text-[11px] font-sans font-medium text-white/80 uppercase tracking-widest">
                          DIPITA INSURA ARTICLES
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col gap-3">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-gold uppercase tracking-wider">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          <span>{post.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User size={11} />
                          <span>DIPITA AGENT</span>
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-base md:text-lg text-navy leading-snug group-hover:text-gold transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed mt-1">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="p-6 pt-0 border-t border-gray-50 mt-auto">
                    <button
                      onClick={() => handlePostClick(post.id)}
                      className="font-sans font-bold text-xs text-navy group-hover:text-gold transition-colors cursor-pointer flex items-center gap-1.5 mt-4"
                    >
                      <span>Read More Article</span>
                      <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </article>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
