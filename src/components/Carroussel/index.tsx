import React, { useState } from 'react';
import * as s from './styles';

import Clotnes from '../../assets/clothes-storejpg.jpg';
import clotnesRose from '../../assets/clothes-rose.jpg';
import laptop from '../../assets/laptop-ssd.jpg';
import necklace from '../../assets/necklace.jpg';
import TV from '../../assets/tv.jpg';
import sweatshirts from '../../assets/sweatshirtsjpg.jpg';

const imagens = [clotnesRose, laptop, necklace, TV, sweatshirts, Clotnes];

const Carrossel: React.FC = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaImagem = () => {
    setIndiceAtual((prev) => (prev + 1) % imagens.length);
  };

  const imagemAnterior = () => {
    setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  return (
    <s.Container>
      <button onClick={imagemAnterior}>❮</button>
      <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} />
      <button onClick={proximaImagem}>❯</button>
    </s.Container>
  );
};

export default Carrossel;
