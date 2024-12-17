import { useDispatch, useSelector } from 'react-redux';
import * as s from './styles'
import { RootReducer } from '../../redux/root-reducer';
import { CiTrash } from 'react-icons/ci';
import { removeProduct } from '../../redux/Cart/cart-slice';

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);

  const dispatch = useDispatch();

  const totalPrice = cart ? cart.reduce((total, product) => {
    return total + product.price;
  }, 0) : 0;

  return (
    <s.Aside showCart={showCart}>
      <s.Title>Carrinho</s.Title>
      <s.CartList>
        {cart && cart.length > 0 ? (
          cart.map(product => (
            <s.ProductItem key={product.id}>
              <div>
                <strong>{product.title}</strong> - R${product.price}
              </div>
              <button onClick={() => dispatch(removeProduct(product))}><CiTrash /></button>
            </s.ProductItem>
          ))
        ) : (
          <s.EmptyMessage>Adicione items no carrinho</s.EmptyMessage>
        )}
      </s.CartList>
      <s.TotalPrice>
        <p>Total: R$ <span>{totalPrice}</span></p>
      </s.TotalPrice>
    </s.Aside>
  )
}