import * as s from './styles';
import { ProductCard } from '../ProductCard';
import { products } from '../../data/products';

export const ProductList: React.FC = () => {
  return (
    <s.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </s.Container>
  );
};