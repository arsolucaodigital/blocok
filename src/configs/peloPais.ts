import { ImageProps } from 'next/image';

export type peloPais = {
  image: ImageProps;
};

export const peloPais: peloPais = {
  image: {
    src: '/mapa.png',
    alt: 'mapa',
    width: 530,
    height: 500,
  },
};
