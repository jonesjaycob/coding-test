import "./App.css";
import { useState } from "react";
import { entries } from "./library";
function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <ul>
        {value !== "" &&
          entries
            .filter((entry) =>
              entry.title.toLowerCase().includes(value.toLowerCase())
            )
            .map((x) => <li key={x.id}>{x.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
