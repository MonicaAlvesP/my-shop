import { Provider } from "react-redux";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { store } from "./redux/store";
import Carrossel from "./components/Carroussel";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Carrossel />
      <ProductList />
    </Provider>
  )
}