import { motion } from 'framer-motion';

const MusterPoints = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Events <span className="text-gray-600 font-normal"> // Muster Points</span></h1>
        <p className="font-mono text-gray-400">Regional staging groups and physical meetups.</p>
      </div>

      <div className="bg-white/5 border border-white/10 h-[400px] flex items-center justify-center mb-12 relative overflow-hidden" role="img" aria-label="Interactive map showing regional muster points">
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: 'radial-gradient(#7100FF 1px, transparent 1px)', backgroundSize: '20px 20px', transform: 'translateZ(0)' }}></div>
        {/* Animated scanning line */}
        <motion.div
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] bg-[#10B981]/50 shadow-[0_0_10px_#10B981] z-0"
        />
        <div className="text-center relative z-10 bg-[#050505]/80 backdrop-blur-sm p-6 border border-white/10">
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 border-2 border-[#10B981] rounded-full mx-auto mb-4 flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-[#10B981] rounded-full animate-ping" />
          </motion.div>
          <p className="font-mono text-[#10B981] mb-2 uppercase tracking-widest">[ Secure Map Interface Loading ]</p>
          <p className="font-mono text-sm text-gray-500">Awaiting encrypted geolocation coordinates...</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i, index) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (0.1 * index), duration: 0.5 }}
            className="border border-white/10 p-6 flex flex-col sm:flex-row gap-6 hover:border-white/30 transition-colors"
          >
            <div className="bg-[#7100FF]/10 text-[#7100FF] w-20 h-20 flex flex-col items-center justify-center flex-shrink-0 border border-[#7100FF]/20" aria-hidden="true">
              <span className="font-bold text-xl">APR</span>
              <span className="font-mono">{10 + i}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Cascadia Guild Assembly</h3>
              <p className="text-gray-400 font-mono text-sm mb-4">Sector 4 // Seattle, WA</p>
              <button aria-label="View Details for Cascadia Guild Assembly" className="text-sm font-mono text-[#7100FF] uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                View Details <span aria-hidden="true">-&gt;</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MusterPoints;
