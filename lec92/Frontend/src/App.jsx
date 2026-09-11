import React, { useState, useEffect } from "react";
import axios from "axios";
import 'remixicon/fonts/remixicon.css'


const App = () => {
  const [notes, setnotes] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/notes")
      // console.log(res.data.note)
      setnotes(res.data.note)
    } catch (error) {
      console.error("failed to fetch notes", error)
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements)
    const { title, description } = e.target.elements
    // console.log(title.value, description.value)

    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })
      .then(res => 
        // { console.log(res.data) },
        fetchNotes(),
      )
  }

  function handleDeleteNote(noteID){
    console.log(noteID)

    axios.delete("http://localhost:3000/api/notes/" + noteID)
    .then(res => {alert(res.data.message)
    },
    fetchNotes()
  )

  }

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-black via-neutral-900 to-zinc-900 text-white flex items-start justify-center py-12 px-4">
        <div className="w-full max-w-6xl">
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">My Notes</h1>
              <p className="text-gray-400 mt-1">Glassmorphism · Dark theme</p>
            </div>
          </header>

          <main className="mt-8 gap-1">
            <form className="mb-8 flex gap-2" onSubmit={handleSubmit}>
              <input
                name="title"
                className="border-2 border-amber-100 rounded-2xl p-2 text-sm"
                type="text"
                placeholder="enter test title"
              />
              <input
                name="description"
                className="border-2 border-amber-100 rounded-2xl p-2 text-sm"
                type="text"
                placeholder="enter test description"
              />
              <button type="submit" className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-4 cursor-pointer shadow-lg transform hover:scale-105 transition">Create Note</button>
            </form>
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

                  <div
                    key={idx}
                    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition"
                  >
                    <h2 className="text-lg font-semibold mb-2">{e.title}</h2>
                    <p className="text-gray-300">{e.description}</p>
                    <button className="absolute px-4 py-2 mt-2 cursor-pointer  rounded-4xl right-0 bottom-2"
                    onClick={()=>{
                      handleDeleteNote(e._id)
                    }}
                    ><i className="ri-delete-bin-line"></i></button>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}


export default App
