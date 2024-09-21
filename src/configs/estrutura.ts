import { ImageProps } from 'next/image';

export type EstruturaProps = {
  textPlacaConcreto: string;
  TextPlacaEPS: string;
  image: ImageProps;
  imageMalha: ImageProps;
};

export const estrutura: EstruturaProps = {
  textPlacaConcreto: `A placa de concreto é composta ​por areia industrial,
                pedriscos de ​granito, cimento de ALTA ​RESISTENCIA INICIAL
                CP-v`,
  TextPlacaEPS: `A placa de EPS do tipo F contém ​tecnologia antichama
                conferindo ​maior segurança em caso de ​incêndio e varia de
                espessura de ​acordo com o tipo de Blocok`,
  imageMalha: {
    src: '/malha.png',
    alt: 'Placa de concreto',
    width: 180,
    height: 180,
  },
  image: {
    src: '/blocok-02.png',
    alt: 'Placa de concreto',
    width: 580,
    height: 500,
  },
};
