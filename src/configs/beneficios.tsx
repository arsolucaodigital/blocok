import { ImageProps } from 'next/image';

export type BeneficiosProps = {
  itensList: {
    indexList: string | number;
    text: string;
  }[];
  image: ImageProps;
};

export const beneficios: BeneficiosProps = {
  itensList: [
    {
      indexList: 'a',
      text: 'Altíssima resistência;',
    },
    {
      indexList: 'b',
      text: 'Dispensa chapisco, emboço e reboco interno e externo;',
    },
    {
      indexList: 'c',
      text: 'Facilita a passagem elétrica e hidráulica;',
    },
    {
      indexList: 'd',
      text: 'Dispensa mão de obra especializada;',
    },
    {
      indexList: 'e',
      text: 'Praticamente zera o uso de madeira na fase cinza;',
    },
    {
      indexList: 'f',
      text: 'Possui alto isolamento térmico proporcionando um ambiente com temperatura mais ameno e consequentemente economia no consumo de energia para refrigeração interna;',
    },
    {
      indexList: 'g',
      text: 'Possui alto isolamento acústico proporcionando um ambiente mais silencioso dos barulhos externos e maior privacidade Inter ambiente;',
    },
    {
      indexList: 'h',
      text: 'Reduz a umidade e consequentemente o surgimento de mofos e proliferação de fungos;',
    },
    {
      indexList: 'i',
      text: 'Reduz os custos de manutenção provocados por umidades e infiltrações;',
    },
    {
      indexList: 'j',
      text: 'Como já possui acabamento fino, reduz o gasto com massa corrida, argamassa e demais acabamentos; ',
    },
    {
      indexList: 'k',
      text: 'Não requer mão de obra especializada, sendo a mesma empregada na alvenaria convencional e reduz o tempo de conclusão da obra em aproximadamente 50%;',
    },
    {
      indexList: 'l',
      text: 'Proporciona uma alta economia financeira para o consumidor no custo final da obra se comparado com a alvenaria convencional.',
    },
  ],
  image: {
    src: '/beneficios.jpg',
    alt: 'beneficios',
    width: 608,
    height: 1024,
  },
};
