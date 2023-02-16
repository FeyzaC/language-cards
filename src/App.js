import "./App.css";
import { Container } from "react-bootstrap";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Container className="text-center mt-4 p-4">
        <Header />
        <Card />
      </Container>
    </div>
  );
}

export default App;
