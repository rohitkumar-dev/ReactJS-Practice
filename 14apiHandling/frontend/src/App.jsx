import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Api from "./components/Api";

function App() {
  const [search, setSearch] = useState("");

  
  return (
    <>
      <h1>Handling API (Practice)</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{fontSize: '22px'}}
      />
      <Api search={search}/>
    </>
  );
}

export default App;
