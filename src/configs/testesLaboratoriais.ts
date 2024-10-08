import { ImageProps } from "next/image"

export type TestesLaboratoriaisProps = {
  itemTestes: {
    order: number;
    image: ImageProps;
  }[];
}

export const testesLaboratoriais: TestesLaboratoriaisProps = {
  itemTestes: [
    {
      image: {
        src: "/ensaios/ens-01.jpg",
        alt: "Calor e choque térmico",
        title: "Calor e choque térmico",
        width: 290,
        height: 200,
      },    
      order: 1,
    },
    {
      image: {
        src: "/ensaios/ens-02.jpg",
        alt: "Impacto corpo duro",
        title: "Impacto corpo duro",
        width: 290,
        height: 200,
      },    
      order: 3,
    },
    {
      image: {
      src: "/ensaios/ens-03.jpg",
      alt: "Impacto corpo mole",
      title: "Impacto corpo mole",
      width: 290,
      height: 200,
    },    
      order: 5,
    },    
    {
      image: {
      src: "/ensaios/ens-04.jpg",
      alt: "Ação de cargas proveniente de pecas suspensas",
      title: "Ação de cargas proveniente de pecas suspensas",
      width: 290,
      height: 200,
    },   
      order: 2, 
    },    
    {
      image: {
      src: "/ensaios/ens-05.jpg",
      alt: "Estanqueidade",
      title: "Estanqueidade",
      width: 290,
      height: 200,
    },    
      order: 4,
    },
    {
      image: {
      src: "/ensaios/ens-06.jpg",
      alt: "Desempenho estrutura à compressão excéntrica de paredes",
      title: "Desempenho estrutura à compressão excéntrica de paredes",
      width: 290,
      height: 200,
    },    
      order: 6,
    },
    {
      image: {
      src: "/ensaios/ens-07.jpg",
      alt: "Assentamento de placas cerâmicas",
      title: "Assentamento de placas cerâmicas",
      width: 290,
      height: 200,
    },  
      order: 7,
    },      
    {
      image: {
      src: "",
      alt: "Ruído externo e interno",
      title: "Ruído externo e interno",
      width: 290,
      height: 200,
    },  
      order: 8,
    },  
    {
      image: {
      src: "/ensaios/lg-origi.png",
      alt: "Selo",
      width: 290,
      height: 200,
    },
      order: 9,
    },
  ],
}