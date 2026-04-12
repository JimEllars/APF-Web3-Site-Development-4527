import { motion } from 'framer-motion';
import { useState } from 'react';

const ARCHIVES = [
  { id: 'ep41', i: 1, title: 'Episode 41: Data is Labor', aired: '1 weeks ago', duration: '45:00', episodeNum: 41 },
  { id: 'ep40', i: 2, title: 'Episode 40: Data is Labor', aired: '2 weeks ago', duration: '45:00', episodeNum: 40 },
  { id: 'ep39', i: 3, title: 'Episode 39: Data is Labor', aired: '3 weeks ago', duration: '45:00', episodeNum: 39 },
];

const TheSignal = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Podcast <span className="text-gray-600 font-normal"> // The Signal</span></h1>
        <p className="font-mono text-gray-400">Audio transmissions from the Federation.</p>
      </div>

      <div className="max-w-3xl">
        <div className="bg-white/5 border border-white/10 p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause Latest Transmission" : "Play Latest Transmission"}
              className={`w-16 h-16 bg-[#7100FF] flex items-center justify-center rounded-full ${isPlaying ? 'animate-none scale-95' : 'animate-[pulse_3s_ease-in-out_infinite] hover:scale-105'} transition-transform focus:outline-none focus:ring-2 focus:ring-[#7100FF] focus:ring-offset-2 focus:ring-offset-[#050505] cursor-pointer`}
            >
               <span className="font-black text-2xl ml-1" aria-hidden="true">{isPlaying ? '||' : '►'}</span>
            </button>
            <div>
              <p className="text-[#10B981] font-mono text-xs uppercase tracking-widest mb-1 flex items-center gap-2">
                {isPlaying ? (
                  <>
                    <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                    Receiving Signal...
                  </>
                ) : 'Latest Transmission'}
              </p>
              <h2 className="text-2xl font-bold">Episode 42: The Sovereign Web</h2>
            </div>
          </div>

          <div className="w-full bg-black/50 h-2 mb-2 rounded-full overflow-hidden" role="progressbar" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100}>
            <div className="bg-[#7100FF] w-1/3 h-full"></div>
          </div>
          <div className="flex justify-between font-mono text-xs text-gray-500">
            <span>15:42</span>
            <span>45:00</span>
          </div>
        </div>

        <h3 className="font-mono text-xl text-gray-300 uppercase tracking-widest mb-6">Archives</h3>
        <div className="space-y-4">
          {ARCHIVES.map((archive, index) => (
            <motion.button
              key={archive.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (0.1 * index), duration: 0.5 }}
              aria-label={`Play Episode ${archive.episodeNum}: Data is Labor`}
              className="w-full text-left flex items-center gap-4 p-4 bg-[#050505] border border-white/10 hover:border-[#7100FF]/50 hover:bg-white/5 transition-all duration-300 cursor-pointer group focus:outline-none focus:border-[#7100FF] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#7100FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#7100FF]/20 flex items-center justify-center transition-colors border border-white/10 group-hover:border-[#7100FF]/50 relative z-10">
                <span className="text-gray-500 font-mono text-sm group-hover:text-[#7100FF] transition-colors ml-1" aria-hidden="true">►</span>
              </div>
              <div className="flex-grow relative z-10">
                <h4 className="font-bold group-hover:text-[#7100FF] transition-colors text-lg">{archive.title}</h4>
                <p className="text-gray-500 group-hover:text-gray-400 font-mono text-xs transition-colors mt-1">Aired: {archive.aired}</p>
              </div>
              <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors relative z-10 bg-white/5 px-2 py-1 border border-white/10">{archive.duration}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TheSignal;
