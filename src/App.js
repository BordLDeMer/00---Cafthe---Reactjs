import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Panier from "./context/Panier";

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
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
