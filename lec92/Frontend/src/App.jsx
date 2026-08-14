import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [notes, setnotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/notes")
      .then((res) => {
        setnotes(res.data.note);
      })
      .catch((err) => console.error("Failed to fetch notes:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-neutral-900 to-zinc-900 text-white flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-6xl">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">My Notes</h1>
            <p className="text-gray-400 mt-1">Glassmorphism · Dark theme</p>
          </div>
        </header>

        <main className="mt-8">
          <input type="text" placeholder="enter test title" />
          <input type="text" placeholder="enter test description" />
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-t-transparent border-white/30 rounded-full animate-spin" />
            </div>
          ) : notes.length === 0 ? (
            <div className="text-center text-gray-400 py-12">
              No notes found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {notes.map((e, idx) => (
                <article
                  key={idx}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition"
                >
                  <h2 className="text-lg font-semibold mb-2">{e.title}</h2>
                  <p className="text-gray-300">{e.description}</p>
                </article>
              ))}
            </div>
          )}
        </main>
        {/* <footer classname="mt-12 text-center text-gray-400">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Made with ❤️ by ARNAV
            </p>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default App;
