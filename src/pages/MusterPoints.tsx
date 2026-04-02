
const MusterPoints = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Events // Muster Points</h1>
        <p className="font-mono text-gray-400">Regional staging groups and physical meetups.</p>
      </div>

      <div className="bg-white/5 border border-white/10 h-[400px] flex items-center justify-center mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: 'radial-gradient(#7100FF 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="text-center relative z-10">
          <p className="font-mono text-[#10B981] mb-2 uppercase tracking-widest">[ Map Interface Loading ]</p>
          <p className="font-mono text-sm text-gray-500">Awaiting geolocation coordinates...</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="border border-white/10 p-6 flex flex-col sm:flex-row gap-6">
            <div className="bg-[#7100FF]/10 text-[#7100FF] w-20 h-20 flex flex-col items-center justify-center flex-shrink-0 border border-[#7100FF]/20">
              <span className="font-bold text-xl">APR</span>
              <span className="font-mono">{10 + i}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Cascadia Guild Assembly</h3>
              <p className="text-gray-400 font-mono text-sm mb-4">Sector 4 // Seattle, WA</p>
              <button className="text-sm font-mono text-[#7100FF] uppercase tracking-widest hover:text-white transition-colors">
                View Details -{'>'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusterPoints;
