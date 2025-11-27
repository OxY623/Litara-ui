import { useState } from 'react';

export default function DonationTon() {
  const wallet = 'UQBKH60IlUIGBd6Fd4-JYQ5YmYh9pYXJ90kz6HC3uNMoSb6F';

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(wallet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-2xl border border-gray-200 max-w-sm">
      <h2 className="text-lg font-semibold">Support via TON</h2>

      <p className="mt-3 text-sm text-gray-700">Send your donation to:</p>

      <p className="mt-2 font-mono text-xs break-all bg-gray-100 p-2 rounded-lg border border-gray-300">
        {wallet}
      </p>

      <button
        onClick={copyToClipboard}
        className="mt-3 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition active:scale-95"
      >
        {copied ? 'Copied ✓' : 'Copy Address'}
      </button>
    </div>
  );
}
