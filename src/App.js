import "./App.css";
import Logo from "./components/Logo.js";
import Navbar from "./components/Navbar.js";
import OwnRoutes from "./components/OwnRoutes.js";
// import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <section>
        <AuthProvider>
          <Logo />
          <Navbar />
          <OwnRoutes />
          {/* <Footer /> */}
        </AuthProvider>
    </section>
  );
}

export default App;
