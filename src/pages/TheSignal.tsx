
const TheSignal = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Podcast // The Signal</h1>
        <p className="font-mono text-gray-400">Audio transmissions from the Federation.</p>
      </div>

      <div className="max-w-3xl">
        <div className="bg-white/5 border border-white/10 p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#7100FF] flex items-center justify-center rounded-full animate-pulse">
               <span className="font-black text-2xl">►</span>
            </div>
            <div>
              <p className="text-[#10B981] font-mono text-xs uppercase tracking-widest mb-1">Latest Transmission</p>
              <h2 className="text-2xl font-bold">Episode 42: The Sovereign Web</h2>
            </div>
          </div>

          <div className="w-full bg-black/50 h-2 mb-2 rounded-full overflow-hidden">
            <div className="bg-[#7100FF] w-1/3 h-full"></div>
          </div>
          <div className="flex justify-between font-mono text-xs text-gray-500">
            <span>15:42</span>
            <span>45:00</span>
          </div>
        </div>

        <h3 className="font-mono text-xl text-gray-300 uppercase tracking-widest mb-6">Archives</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-4 border border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
              <span className="text-gray-500 font-mono text-sm group-hover:text-[#7100FF] transition-colors">►</span>
              <div className="flex-grow">
                <h4 className="font-bold">Episode {42 - i}: Data is Labor</h4>
                <p className="text-gray-500 font-mono text-xs">Aired: {i} weeks ago</p>
              </div>
              <span className="font-mono text-sm text-gray-400">45:00</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheSignal;
