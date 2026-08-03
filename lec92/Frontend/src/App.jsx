import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setnotes] = useState([
    {
      title: "test title 1",
      description: "test description 1",
    },
    {
      title: "test title 2",
      description: "test description 2",
    },
    {
      title: "test title 3",
      description: "test description 3",
    },
    {
      title: "test title 4",
      description: "test description 4",
    },
  ]);

  axios.get("http://localhost:3000/api/notes")
  .then((res)=>{
    setnotes(res.data.note)
  })

  return (
    <>
      <div className="bg-[#212121] h-screen p-8 flex gap-4">
        {notes.map((e,idx) => {
          return (
            // <div className="bg-amber-300 ">
              <div className="bg-[#525151] p-4 mb-2 max-h-fit w-fit rounded-2xl  text-white " key={idx}>
                <h1 className="font-bold font-mono uppercase">{e.title}</h1>
                <p className="text-gray-300">{e.description}</p>
              </div>
            // </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
