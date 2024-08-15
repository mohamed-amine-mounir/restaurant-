import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Home,
  Contact,
  Footer,
  Hotel,
  Fitness,
  Restaurant,
  EspaceEnfant,
} from "./sections/sections";
import { Menu, Reservation, ScrollToTop } from "./components/components";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/restaurant" element={<Restaurant />} />

          <Route path="/espace-enfant" element={<EspaceEnfant />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
