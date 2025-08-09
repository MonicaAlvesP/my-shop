import { Provider } from "react-redux";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { store } from "./redux/store";
import Carrossel from "./components/Carroussel";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Carrossel />
      <ProductList />
      <Footer />
    </Provider>
  )
}