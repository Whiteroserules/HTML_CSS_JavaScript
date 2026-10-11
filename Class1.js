function App() {
  const studentName = "Rahul";
  const studentClass = "10th Class";
  const marks = 85;

  return (
    <div>
      <h1>Student Profile</h1>

      <h2>Name: {studentName}</h2>
      <p>Class: {studentClass}</p>
      <p>Marks: {marks}/100</p>

      <h3>
        Result: {marks >= 35 ? "Pass" : "Fail"}
      </h3>
    </div>
  );
}

export default App;