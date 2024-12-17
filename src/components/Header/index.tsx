import { useState } from 'react';
import * as s from './styles';
import { CiLogin, CiLogout, CiShoppingCart } from 'react-icons/ci'

import { Cart } from '../Cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { login, logout } from '../../redux/User/user-slice';
import { FaSearch } from 'react-icons/fa';

export const Header: React.FC = () => {
  const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  const isLogged = user !== null;

  const handleUserAuth = () => {
    if (user === null) {
      // dispatch action login
      // dispatch({
      //   type: 'user/login',
      //   payload: {
      //     name: 'Mônica Alves',
      //     email: 'monica@mail.com'
      //   },
      // });
      dispatch(
        login({
          name: 'Mônica Alves',
          email: 'monica@mail.com'
        }))
    } else {
      // dispatch action logout
      dispatch(logout());
    }
  }

  return (
    <s.Container>
      <h1>MyShop.</h1>
      <s.ContentInput>
        <input type="text" placeholder='Busque por produtos...' />
        <FaSearch />
      </s.ContentInput>
      <s.Content>
        <s.ButtonAuth
          isLogged={isLogged} onClick={handleUserAuth}>
          {isLogged ? "Logout" : "Login"}
          {isLogged ? <CiLogout /> : <CiLogin />}
        </s.ButtonAuth>

        <s.ButtonCart onClick={() => setShowCart(!showCart)}>
          Carrinho <CiShoppingCart />
        </s.ButtonCart>
      </s.Content>
      <Cart showCart={showCart} />
    </s.Container>
  )
}