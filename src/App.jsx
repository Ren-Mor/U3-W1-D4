import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Welcome from "./Components/Welcome";
import Books from "./Components/Books";

function App() {
  return (
    <>
      <Nav />
      <Welcome />
      <Books /> {/* qui uso Books */}
      <Footer />
    </>
  );
}

export default App;
