
const TheCode = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Policies // The Code</h1>
        <p className="font-mono text-gray-400">Legislative drafts and active voting for the Federation.</p>
      </div>

      <div className="space-y-6">
        {[
          { status: 'Active', title: 'Consumer Data Sovereignty Act', votes: 1240 },
          { status: 'Drafting', title: 'Open Source Initiative Funding', votes: 0 },
          { status: 'Passed', title: 'Federation Charter v1.2', votes: 4502 }
        ].map((policy, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/10 transition-colors">
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <span className={`w-2 h-2 rounded-full ${
                  policy.status === 'Active' ? 'bg-[#10B981] animate-pulse' :
                  policy.status === 'Passed' ? 'bg-[#7100FF]' : 'bg-yellow-500'
                }`} />
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400">{policy.status}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold">{policy.title}</h2>
              <p className="text-gray-400 font-mono text-sm mt-2">Proposal ID: APF-2026-{100 + i}</p>
            </div>

            <div className="flex items-center gap-6 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
              <div className="text-center">
                <div className="font-mono text-xl">{policy.votes}</div>
                <div className="font-mono text-xs text-gray-500 uppercase">Power</div>
              </div>
              <button className="flex-grow md:flex-grow-0 px-6 py-3 bg-[#7100FF]/10 hover:bg-[#7100FF]/20 text-[#7100FF] border border-[#7100FF]/30 font-mono uppercase tracking-widest text-xs transition-colors">
                View / Vote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheCode;
