import { motion } from 'framer-motion';
import { ConnectButton, useActiveAccount } from 'thirdweb/react';
import { client } from '../lib/thirdwebClient';
import { useState } from 'react';
import { setDoc } from 'firebase/firestore';
import { paths, isFirebaseConfigured } from '../lib/firebase';

const MusterRoll = () => {
  const account = useActiveAccount();
  const [alias, setAlias] = useState('');
  const [ens, setEns] = useState('');
  const [isEnlisted, setIsEnlisted] = useState(false);
  const [ensError, setEnsError] = useState('');
  const [aliasError, setAliasError] = useState('');

  const handleEnlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnsError('');
    setAliasError('');

    if (!alias || alias.length < 3 || alias.length > 32 || !/^[a-zA-Z0-9_.-]+$/.test(alias)) {
      setAliasError('Alias must be 3-32 characters long and contain only alphanumeric characters, dots, dashes, and underscores.');
      return;
    }

    if (ens && !/^[a-zA-Z0-9.]+$/.test(ens)) {
      setEnsError('Invalid ENS name format. Only alphanumeric characters and dots are allowed.');
      return;
    }

    if (alias && account) {
      try {
        if (isFirebaseConfigured) {
          await setDoc(paths.user(account.address).profile, {
            alias,
            ens_name: ens,
            wallet_address: account.address,
            enlistment_date: new Date().toISOString(),
            rank: 'Initiate'
          });
        } else if (import.meta.env.DEV) {
          // Bypassed in dev to prevent production warnings
          console.warn("Transmission Bypassed: Firebase is not configured.");
        }
        setIsEnlisted(true);
      } catch (error) {
        console.error(`Transmission Failed: Registry sync error. ${error instanceof Error ? error.message : ''}`);
        // We do not fallback to update state here.
        // If it throws, we should not pretend the transmission was successful.
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Profile // The Muster Roll</h1>
        <p className="font-mono text-gray-400">Sovereign identity dashboard.</p>
      </div>

      <div className="max-w-xl mx-auto bg-white/5 border border-white/10 p-8">
        {!account ? (
          <>
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
          </>
        ) : (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Identity Confirmed</h2>
              <ConnectButton client={client} />
            </div>

            {isEnlisted ? (
              <div className="bg-[#10B981]/10 border border-[#10B981]/30 p-6 text-center">
                <span className="w-12 h-12 bg-[#10B981] rounded-full mx-auto mb-4 flex items-center justify-center">
                   <span className="text-[#050505] text-xl" aria-hidden="true">✓</span>
                </span>
                <h3 className="text-xl font-bold text-[#10B981] mb-2">Signal Received: Link Stable</h3>
                <p className="font-mono text-gray-400 text-sm">Welcome to the Federation, {alias}.</p>
                <div className="mt-4 p-3 bg-black/50 border border-white/5 font-mono text-xs text-gray-500 break-all">
                  {account.address}
                </div>
              </div>
            ) : (
              <form onSubmit={handleEnlist} className="space-y-4">
                <div>
                  <label htmlFor="alias" className="block font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">Sovereign Alias *</label>
                  <input
                    id="alias"
                    type="text"
                    required
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 p-3 font-mono text-white focus:outline-none focus:border-[#7100FF] focus:ring-1 focus:ring-[#7100FF] transition-colors"
                    placeholder="e.g. GhostProtocol"
                  />
                  {aliasError && <p className="text-red-500 font-mono text-xs mt-2">{aliasError}</p>}
                </div>
                <div>
                  <label htmlFor="ens" className="block font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">ENS Name (Optional)</label>
                  <input
                    id="ens"
                    type="text"
                    value={ens}
                    onChange={(e) => setEns(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 p-3 font-mono text-white focus:outline-none focus:border-[#7100FF] focus:ring-1 focus:ring-[#7100FF] transition-colors"
                    placeholder="e.g. ghost.eth"
                  />
                  {ensError && <p className="text-red-500 font-mono text-xs mt-2">{ensError}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#7100FF] hover:bg-[#5a00cc] text-white font-mono uppercase tracking-widest text-sm transition-colors cursor-pointer"
                >
                  Confirm Enlistment
                </button>
              </form>
            )}
          </div>
        )}

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
    </motion.div>
  );
};

export default MusterRoll;
