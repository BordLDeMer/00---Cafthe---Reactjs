import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Panier from "./context/Panier";
import EspacePerso from "./pages/EspacePerso";
import Footer from "./components/Footer";
import TheInfusions from "./pages/TheInfusions";
import CadeauxCoffrets from "./pages/CadeauxCoffrets";
import Cafes from "./pages/Cafes";
import Appareils from "./pages/Appareils";
import Register from "./pages/register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="produit/:id" element={<ProductDetails />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"panier"} element={<Panier />}/>
            <Route path={"EspacePerso"} element={<EspacePerso />}/>
            <Route path={"Footer"} element={<Footer />}/>
            <Route path={"Cafés"} element={<Cafes />}/>
            <Route path={"nos-thes-infusions"} element={<TheInfusions />}/>
            <Route path={"nos-machines"} element={<Appareils />}/>
            <Route path={"CadeauxCoffrets"} element={<CadeauxCoffrets />}/>
            <Route path={"inscription"} element={<Register />}/>

          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
