import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog";

function App() {
  const [newTitle, setNewTitle] = useState("Default Title");
  const [newDescription, setNewDescription] = useState("Default Description");

  return (
    <div className="App">
      <Blog
        title={newTitle}
        description={newDescription}
        setNewTitle={setNewTitle}
        setNewDescription={setNewDescription}
      />
    </div>
  );
}

export default App;
