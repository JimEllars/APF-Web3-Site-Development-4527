
const TheArmory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Shop // The Armory</h1>
        <p className="font-mono text-gray-400">Equip yourself. Web3-enabled storefront for merch and digital assets.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#7100FF]/50 transition-colors relative overflow-hidden">
               {/* Placeholder for item image */}
               <div className="font-mono text-gray-600 uppercase tracking-widest text-sm">Item_{i}</div>
               <div className="absolute inset-0 bg-[#7100FF]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
            <h3 className="font-bold text-lg mb-1 group-hover:text-[#7100FF] transition-colors">Federation Hoodie</h3>
            <p className="font-mono text-gray-400 text-sm">0.05 ETH / $120</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheArmory;
