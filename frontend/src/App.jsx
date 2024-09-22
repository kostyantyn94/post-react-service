import { Outlet } from "react-router-dom";
import Footer from "./compontents/Footer";
import NavBar from "./compontents/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
