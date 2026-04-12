import { motion } from 'framer-motion';

const TheCode = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Policies <span className="text-gray-600 font-normal"> // The Code</span></h1>
        <p className="font-mono text-gray-400">Legislative drafts and active voting for the Federation. Powered by Quadratic Voting.</p>
      </div>

      <div className="space-y-6">
        {[
          { id: '100', status: 'Active', title: 'Consumer Data Sovereignty Act', votes: 1240 },
          { id: '101', status: 'Drafting', title: 'Open Source Initiative Funding', votes: 0 },
          { id: '102', status: 'Passed', title: 'Federation Charter v1.2', votes: 4502 }
        ].map((policy) => (
          <motion.div
            key={policy.id}
            variants={itemVariants}
            className="group relative bg-[#050505] border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/5 transition-all duration-300 hover:border-[#7100FF]/50 hover:shadow-[0_0_30px_rgba(113,0,255,0.15)] overflow-hidden"
          >
            {/* Subtle glow effect behind item on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7100FF]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />

            <div className="flex-grow relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <span className={`w-2 h-2 rounded-full ${
                  policy.status === 'Active' ? 'bg-[#10B981] animate-pulse' :
                  policy.status === 'Passed' ? 'bg-[#7100FF]' : 'bg-yellow-500'
                }`} aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400 group-hover:text-gray-300 transition-colors">{policy.status}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold group-hover:text-[#7100FF] transition-colors duration-300">{policy.title}</h2>
              <p className="text-gray-400 font-mono text-sm mt-2">Proposal ID: APF-2026-{policy.id}</p>
            </div>

            <div className="flex items-center gap-6 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-4 md:pt-0 relative z-10 justify-between md:justify-end">
              <div className="text-left md:text-center">
                  <div className="font-mono text-xl text-[#7100FF] font-bold">{policy.votes}</div>
                  <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Power (QV)</div>
              </div>
                <button aria-label={policy.status === 'Active' ? `Cast Vote on ${policy.title}` : `View details for ${policy.title}`} className="px-6 py-3 bg-[#7100FF]/10 hover:bg-[#7100FF] text-[#7100FF] hover:text-white border border-[#7100FF]/30 hover:border-[#7100FF] font-mono uppercase tracking-widest text-xs transition-all duration-300 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#7100FF] focus:ring-offset-2 focus:ring-offset-[#050505] shadow-[0_0_15px_rgba(113,0,255,0.1)] hover:shadow-[0_0_20px_rgba(113,0,255,0.4)]">
                {policy.status === 'Active' ? 'Cast Vote' : 'View Detail'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TheCode;
