import React, { useState } from "react";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [expiry, setExpiry] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShortUrl("");

    try {
      const res = await fetch("/api/links/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          longUrl,
          alias: alias || undefined,
          expiry: expiry || undefined,
        }),
      });

      if (!res.ok) throw new Error("Failed to shorten URL");

      const data = await res.json();
      setShortUrl(data.shortUrl);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          🔗 ZapURL Shortener
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="url"
            placeholder="Enter long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Custom alias (optional)"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
          />

          <input
            type="date"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Shortening..." : "Shorten URL"}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-red-500 font-medium">{error}</p>
        )}

        {shortUrl && (
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
            <p className="mb-2 text-gray-700">Your short link:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-indigo-600 underline"
            >
              {shortUrl}
            </a>
            <button
              onClick={copyToClipboard}
              className="mt-3 w-full rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
