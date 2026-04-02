import { ConnectButton } from 'thirdweb/react';
import { client } from '../lib/thirdwebClient';

const MusterRoll = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Profile // The Muster Roll</h1>
        <p className="font-mono text-gray-400">Sovereign identity dashboard.</p>
      </div>

      <div className="max-w-xl mx-auto bg-white/5 border border-white/10 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Enlist in the Federation</h2>
          <p className="font-mono text-sm text-gray-400">Connect your wallet to establish your sovereign identity. No email required.</p>
        </div>

        <div className="flex justify-center mb-8">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "American Pirate Foundation",
              url: "https://apf.org",
            }}
          />
        </div>

        <div className="border-t border-white/10 pt-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">The Mothership Ledger</h3>
          <div className="bg-black/50 p-4 border border-white/5 font-mono text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Status:</span>
              <span className="text-[#10B981]">Online</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Treasury:</span>
              <span>1,245.50 ETH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Active Members:</span>
              <span>12,042</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusterRoll;
