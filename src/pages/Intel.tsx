import { motion } from 'framer-motion';
import { PirateText } from '../components/PirateText';

const Intel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 flex flex-wrap items-center gap-4">
          <PirateText /> News <span className="text-gray-600 font-normal whitespace-nowrap"> // Intel</span>
        </h1>
        <p className="font-mono text-gray-400">Decentralized transmissions from the fleet.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i, index) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="bg-white/5 border border-white/10 hover:border-[#7100FF]/50 transition-colors p-6 flex flex-col h-full group"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#10B981] font-mono text-xs uppercase tracking-widest bg-[#10B981]/10 px-2 py-1">Transmission</span>
              <span className="text-gray-500 font-mono text-xs">T-{i * 12}H</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-[#7100FF] transition-colors">Operation Data Sovereignty Launched</h2>
            <p className="text-gray-400 font-mono text-sm mb-6 flex-grow line-clamp-3">
              The APF has officially initiated the first phase of our core network rollout. All guild masters are required to sync their nodes...
            </p>
            <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
              <span className="font-mono text-xs text-[#7100FF]">@GhostProtocol</span>
              <button aria-label="Decrypt and read full transmission" className="text-sm font-mono uppercase tracking-widest hover:text-[#7100FF] transition-colors flex items-center gap-1 cursor-pointer">
                Decrypt <span aria-hidden="true">-&gt;</span>
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Intel;
