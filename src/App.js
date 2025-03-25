import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import axios from "axios";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Panier from "./pages/Panier";
import EspacePerso from "./pages/EspacePerso";
import Footer from "./components/Footer";
import TheInfusions from "./pages/TheInfusions";
import CadeauxCoffrets from "./pages/CadeauxCoffrets";
import Cafes from "./pages/Cafes";
import Appareils from "./pages/Appareils";
import Register from "./pages/register";
import Commande from "./components/Commande";
import Livraison from "./components/Livraison";
axios.defaults.headers.common["Authorization"] =
  `Bearer ${localStorage.getItem("token")}`;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="produit/:id" element={<ProductDetails />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"panier"} element={<Panier />} />
            <Route path={"EspacePerso"} element={<EspacePerso />} />
            <Route path={"Footer"} element={<Footer />} />
            <Route path={"Cafés"} element={<Cafes />} />
            <Route path={"nos-thes-infusions"} element={<TheInfusions />} />
            <Route path={"nos-machines"} element={<Appareils />} />
            <Route
              path={"nos-cadeaux-coffrets"}
              element={<CadeauxCoffrets />}
            />
            <Route path={"register"} element={<Register />} />
            <Route path={"Commande"} element={<Commande />} />
            <Route path={"Livraison"} element={<Livraison />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
