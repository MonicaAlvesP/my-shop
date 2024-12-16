import * as s from './styles';
import { CiLogin, CiShoppingCart } from 'react-icons/ci'

export const Header: React.FC = () => {
  return (
    <s.Container>
      <h1>MyShop.</h1>
      <s.Content>
        <s.ButtonAuth>
          <a href="/about">Login
            <CiLogin />
            {/* <CiLogout /> */}
          </a>
        </s.ButtonAuth>

        <s.ButtonCart>
          <a href="/contact">Carrinho
            <CiShoppingCart />
          </a>
        </s.ButtonCart>
      </s.Content>
    </s.Container>
  )
}