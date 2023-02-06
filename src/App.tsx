import "./App.css";
import { Person, Country } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Mika"
        email="mikabibas@gmail.com"
        age={33}
        isMarried={false}
        friends={["Maya", "Shir", "Eliya"]}
        country={Country.Canada}
      />
    </div>
  );
}

export default App;
