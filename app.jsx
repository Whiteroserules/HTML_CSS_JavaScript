
function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <p>Course: {props.course}</p>
    </div>
  );
}

function App() {
  return (
    <Student
      name="Ravi"
      age={20}
      course="MCA"
    />
  );
}

export default App; 
