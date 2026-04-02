import { motion } from 'framer-motion';

const TheArmory = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Shop <span className="text-gray-600 font-normal"> // The Armory</span></h1>
        <p className="font-mono text-gray-400">Equip yourself. Web3-enabled storefront for merch and digital assets.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Federation Hoodie', priceEth: '0.05', priceUsd: '120', status: 'In Stock' },
          { name: 'Sovereign Node Case', priceEth: '0.12', priceUsd: '280', status: 'Pre-order' },
          { name: 'Data Laborer Tee', priceEth: '0.02', priceUsd: '45', status: 'In Stock' },
          { name: 'APF Genesis NFT', priceEth: '0.50', priceUsd: '1150', status: 'Minting Live' },
        ].map((item, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            aria-label={`View ${item.name}`}
            className="group cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-[#7100FF] focus:ring-offset-2 focus:ring-offset-[#050505] p-2 -m-2 rounded"
          >
            <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#7100FF]/50 transition-colors relative overflow-hidden" aria-hidden="true">
               <div className="font-mono text-gray-600 uppercase tracking-widest text-sm relative z-10">Item_{index + 1}</div>

               {/* Status Badge */}
               <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 border border-white/10 z-20">
                 <span className={`font-mono text-[10px] uppercase tracking-widest ${item.status === 'In Stock' ? 'text-[#10B981]' : item.status === 'Pre-order' ? 'text-yellow-500' : 'text-[#7100FF]'}`}>
                   {item.status}
                 </span>
               </div>

               <div className="absolute inset-0 bg-gradient-to-t from-[#7100FF]/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
            <h3 className="font-bold text-lg mb-1 group-hover:text-[#7100FF] transition-colors line-clamp-1">{item.name}</h3>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[#7100FF] text-sm">{item.priceEth} ETH</span>
              <span className="font-mono text-gray-500 text-xs">/ ${item.priceUsd}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default TheArmory;
