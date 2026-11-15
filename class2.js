import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("Welcome");

  return (
    <div>

        <h2>Student Activity</h2>

        {/* Click Event */}

      <button onClick={() => setMessage("Button Clicked!")}>
        Click Me
      </button>

      <h3>{message}</h3>

      {/* Change Event */}

      <input 
      type = "text"
      placeholder = "Enter Student Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />

      <h3>Student Name: {name}</h3>

      {/* Mouse Over Event */}

      <h3 onMouseOver={()=> setMessage("Mouse Over!")}>
        Mouse Over Here
      </h3>

      {/* Double Click Event */}

      <button onDoubleClick={() => setMessage("Double Clicked!")}>
        Double Click
      </button>

      {/* Keyboard Event */}

      <input
        type="text"
        placeholder="Press any key"
        onKeyDown={() => setMessage("Key Pressed!")}
      />

    </div>
  );
}

export default App;