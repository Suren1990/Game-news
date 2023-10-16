import RoutIng from "./RoutIng";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./assets/styles/globals.scss";

function App() {
  return (
    <div className="main">
        <Header />
      <main className="main__container">
        <RoutIng />
      </main>
      <Footer />
    </div>
  );
}

export default App;
