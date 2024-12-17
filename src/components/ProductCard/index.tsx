import { CiShoppingCart } from 'react-icons/ci';
import { Product } from '../../data/products';
import { FaRegStar, FaStar } from 'react-icons/fa';
import * as s from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { addProduct, removeProduct } from '../../redux/Cart/cart-slice';


interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);
  const dispatch = useDispatch();

  // variavel booleana que verifica se o produto está no carrinho
  const isProductOnCart = cart.find(productOnCart => product.id === productOnCart.id) !== undefined;

  function handleAddProductToCart() {
    // dispare a ação de adicionar o produto ao carrinho
    // dispatch({
    //   type: "cart/add-product",
    //   payload: product
    // })
    dispatch(addProduct(product));
  }

  function handleRemoveProductFromCart() {
    // dispare a ação de remover o produto do carrinho
    // dispatch({
    //   type: "cart/remove-product",
    //   payload: product
    // })
    dispatch(removeProduct(product));
  }

  return (
    <s.Card>
      <s.ProductImage src={product.image} alt={product.description} />
      <s.CardContent>
        <h2>{product.title}</h2>
        <s.ReviewPriceContainer>
          <span>
            {Array.from({ length: 5 }, (_, index) => {
              if (index < Math.round(product.rating.rate)) {
                return <FaStar key={index} />;
              }
              return <FaRegStar key={index} />;
            })}
            ({(product.rating.rate)})</span>
          <strong>R$ {product.price}</strong>
        </s.ReviewPriceContainer>

      </s.CardContent>


      {isProductOnCart ? (
        <s.RemoveFromCartButton>
          <button onClick={handleRemoveProductFromCart}>
            Remover do carrinho <CiShoppingCart />
          </button>
        </s.RemoveFromCartButton>
      ) : (
        <s.AddToCartButton>
          <button onClick={handleAddProductToCart}>
            Adicionar ao carrinho <CiShoppingCart />
          </button>
        </s.AddToCartButton>
      )}

    </s.Card>
  )
}