import { motion } from 'framer-motion';
import { PirateText } from '../components/PirateText';
import { Link } from 'react-router-dom';

const Bridge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden w-full w-[100vw] left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]"
    >
      <div className="absolute inset-0 z-0 bg-grid-parallax opacity-20 pointer-events-none md:bg-[length:40px_40px] bg-[length:20px_20px]" />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#7100FF]/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none"
          >
            The New <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7100FF] to-[#10B981]">Paradigm</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-2xl mx-auto text-lg md:text-xl font-mono text-gray-400 flex flex-wrap justify-center items-center gap-x-2"
          >
            <span>Reclaiming digital sovereignty. The American</span>
            <PirateText />
            <span>Foundation is building the decentralized future.</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link to="/muster-roll" aria-label="Enlist Now" className="px-8 py-4 bg-[#7100FF] hover:bg-[#5a00cc] text-white font-mono uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" aria-hidden="true" />
              Enlist Now
            </Link>
            <Link to="/intel" aria-label="Read Manifesto" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-mono uppercase tracking-widest text-sm transition-colors cursor-pointer flex items-center justify-center">
              Read Manifesto
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Bridge;
