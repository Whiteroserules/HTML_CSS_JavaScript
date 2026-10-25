import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Student Registration</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default App;
