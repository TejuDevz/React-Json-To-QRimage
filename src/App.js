import "./App.css";

// These are components:
import Header from "./Components/UI/Header";
import Form from "./Components/Form";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App__formQR">
        <Form />
      </div>
    </div>
  );
};

export default App;
