import { ImageProps } from "next/image";

export type SejaFranqueadoProps = {
  description: string;
  images: {
    image: ImageProps;
  }[];
};

export const sejaFranqueado: SejaFranqueadoProps = {
  description: `Tenha sua própria indústria do sistema ​construtivo revolucionário da construção ​civil, mais de 1 milhão de M² construídos ​em todo país. Sistema de vedação ​patenteado, testado e aprovado em todos ​os testes laboratoriais, trazendo ​economia, qualidade, agilidade e ​sustentabilidade. O BLOCOK ORIGINAL ​possui um alto potencial de retorno devido ​a exclusividade de seus benefícios e ​qualidade. Estamos em mais de 10 Estados ​em todo país.`,
  images: [
    {
      image: {
        src: "/franqueado/ft-01.jpg",
        alt: "Seja Franqueado",
        width: 210,
        height: 200,
      },  
    },
    {
      image: {
        src: "/franqueado/ft-02.jpg",
        alt: "Seja Franqueado",
        width: 210,
        height: 200,
      }, 
    },
    {
      image: {
        src: "/franqueado/ft-03.jpg",
        alt: "Seja Franqueado",
        width: 210,
        height: 200,
      }, 
    },
    {
      image: {
        src: "/franqueado/ft-04.jpg",
        alt: "Seja Franqueado",
        width: 210,
        height: 200,
      }, 
    },
  ],
}
