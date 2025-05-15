import Nav from "./Nav";
import Footer from "./Footer";
import Welcome from "./Welcome";
import Books from "./Books";

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
