import { motion } from 'framer-motion';
import { PirateText } from '../components/PirateText';

const Intel = () => {
  const newsItems = [
    {
      title: 'Operation Data Sovereignty Launched',
      content: 'The APF has officially initiated the first phase of our core network rollout. All guild masters are required to sync their nodes...',
      author: '@GhostProtocol',
      time: 'T-12H',
    },
    {
      title: 'Decentralized Identifiers (DIDs) Integration Complete',
      content: 'Members can now register their DIDs to the Federation Ledger. Ensure your vault is securely backed up before initiating the process.',
      author: '@CipherPunk',
      time: 'T-24H',
    },
    {
      title: 'Guild Muster: East Coast Division',
      content: 'All available operatives in Sector 1 are requested to muster. Coordinates will be broadcast on secure channels 1 hour prior to the event.',
      author: '@NeonSamurai',
      time: 'T-48H',
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="mb-12 border-b border-white/10 pb-8 flex justify-between items-end flex-wrap gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 flex flex-wrap items-center gap-4">
            <PirateText /> News <span className="text-gray-600 font-normal whitespace-nowrap"> // Intel</span>
          </h1>
          <p className="font-mono text-gray-400">Decentralized transmissions from the fleet.</p>
        </div>
        <div className="flex items-center gap-2 text-sm font-mono text-gray-500 bg-white/5 border border-white/10 px-4 py-2">
           <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" aria-hidden="true" />
           Syncing IPFS nodes...
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="bg-white/5 border border-white/10 hover:border-[#7100FF]/50 transition-colors p-6 flex flex-col h-full group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7100FF]"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="M2 15h10"/><path d="m9 18 3-3-3-3"/></svg>
            </div>
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <span className="text-[#10B981] font-mono text-xs uppercase tracking-widest bg-[#10B981]/10 px-2 py-1">Transmission</span>
              <span className="text-gray-500 font-mono text-xs">{item.time}</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-[#7100FF] transition-colors relative z-10">{item.title}</h2>
            <p className="text-gray-400 font-mono text-sm mb-6 flex-grow line-clamp-3 relative z-10">
              {item.content}
            </p>
            <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto relative z-10">
              <span className="font-mono text-xs text-[#7100FF]">{item.author}</span>
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
