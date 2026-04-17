import { motion } from 'framer-motion';

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ARMORY_ITEMS = [
  { name: 'Federation Hoodie', priceEth: '0.05', priceUsd: '120', status: 'In Stock' },
  { name: 'Sovereign Node Case', priceEth: '0.12', priceUsd: '280', status: 'Pre-order' },
  { name: 'Data Laborer Tee', priceEth: '0.02', priceUsd: '45', status: 'In Stock' },
  { name: 'APF Genesis NFT', priceEth: '0.50', priceUsd: '1150', status: 'Minting Live' },
];

const TheArmory = () => {

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Shop <span className="text-gray-600 font-normal"> // The Armory</span></h1>
        <p className="font-mono text-gray-400">Equip yourself. Web3-enabled storefront for merch and digital assets.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ARMORY_ITEMS.map((item, index) => (
          <motion.button
            key={item.name}
            variants={ITEM_VARIANTS}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`View ${item.name}`}
            className="group cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-[#7100FF] focus:ring-offset-2 focus:ring-offset-[#050505] p-4 bg-[#050505] border border-white/10 hover:border-[#7100FF]/50 hover:shadow-[0_0_20px_rgba(113,0,255,0.15)] hover:bg-white/5 transition-all duration-300 rounded-none relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#7100FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="aspect-square bg-[#050505] border border-white/5 flex items-center justify-center mb-4 group-hover:border-[#7100FF]/50 transition-colors relative overflow-hidden">
               <div className="font-mono text-gray-600 uppercase tracking-widest text-sm relative z-10 group-hover:text-gray-400 transition-colors" aria-hidden="true">Item_{index + 1}</div>

               {/* Status Badge */}
               <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 border border-white/10 z-20 shadow-md">
                 <span className={`font-mono text-[10px] uppercase tracking-widest ${item.status === 'In Stock' ? 'text-[#10B981]' : item.status === 'Pre-order' ? 'text-yellow-500' : 'text-[#7100FF]'}`} aria-label={`Status: ${item.status}`}>
                   {item.status}
                 </span>
               </div>

               <div className="absolute inset-0 bg-gradient-to-t from-[#7100FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-1 group-hover:text-[#7100FF] transition-colors line-clamp-1">{item.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-mono text-[#7100FF] text-sm bg-[#7100FF]/10 border border-[#7100FF]/20 px-2 py-0.5 shadow-[0_0_10px_rgba(113,0,255,0.2)]">{item.priceEth} ETH</span>
                <span className="font-mono text-gray-500 text-xs line-through opacity-70">${item.priceUsd}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default TheArmory;
