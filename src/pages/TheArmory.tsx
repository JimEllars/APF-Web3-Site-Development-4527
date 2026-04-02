const TheArmory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Shop <span className="text-gray-600 font-normal"> // The Armory</span></h1>
        <p className="font-mono text-gray-400">Equip yourself. Web3-enabled storefront for merch and digital assets.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <button key={i} aria-label={`View Federation Hoodie Item ${i}`} className="group cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-[#7100FF] focus:ring-offset-2 focus:ring-offset-[#050505] p-2 -m-2 rounded">
            <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#7100FF]/50 transition-colors relative overflow-hidden" aria-hidden="true">
               {/* Placeholder for item image */}
               <div className="font-mono text-gray-600 uppercase tracking-widest text-sm relative z-10">Item_{i}</div>
               <div className="absolute inset-0 bg-[#7100FF]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
            <h3 className="font-bold text-lg mb-1 group-hover:text-[#7100FF] transition-colors">Federation Hoodie</h3>
            <p className="font-mono text-gray-400 text-sm">0.05 ETH / $120</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TheArmory;
