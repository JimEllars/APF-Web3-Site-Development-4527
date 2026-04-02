const Bridge = () => {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-grid-parallax opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#7100FF]/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            The New <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7100FF] to-[#10B981]">Paradigm</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-mono text-gray-400">
            Reclaiming digital sovereignty. The American Pirate Foundation is building the decentralized future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button aria-label="Enlist Now" className="px-8 py-4 bg-[#7100FF] hover:bg-[#5a00cc] text-white font-mono uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" aria-hidden="true" />
              Enlist Now
            </button>
            <button aria-label="Read Manifesto" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-mono uppercase tracking-widest text-sm transition-colors">
              Read Manifesto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bridge;
