import Header from "./components/header";
import Slider from "./components/slider";
import Services from "./components/services";
import Players from "./components/players";
import Gallery from "./components/gallery";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Services />
      <Players />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
