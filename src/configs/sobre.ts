import { ImageProps } from 'next/image';

export type SobreProps = {
  description: string;
  image: ImageProps;
  id: string;
};

export const sobre: SobreProps = {
  description: `O BLOCOK ORIGINAL é um sistema construtivo revolucionário de paredes prontas. É composto por duas placas cimentícias de microconcreto de 15mm cada e uma placa de EPS industrial do tipo F com tecnologia antichama, com tamanho padrão de 90x90cm e variações em sua espessura, que são: 10cm, 13cm, 15cm e 20cm. O BLOCOK possui alta resistência de 12MPa e também proporciona maior conforto por ser termoacústico.

Estrutura do Blocok Original`,
  image: {
    src: '/blocok-01.png',
    alt: 'Blocok',
    width: 580,
    height: 500,
  },
  id: 'o-que-e-a-blocok',
};
