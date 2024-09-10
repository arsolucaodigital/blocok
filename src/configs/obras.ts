import { ImageProps } from "next/image";

export type ObrasProps = {
  images: {
    image: ImageProps;
  }[];
}

export const obras: ObrasProps = {
  images: [
    {
      image: {
        src: "/obras/obra-01.jpg",
        alt: "Blocok Obra",
        width: 410,
        height: 300,
      },
    },
    {
      image: {
        src: "/obras/obra-02.jpg",
        alt: "Blocok Obra",
        width: 410,
        height: 300,
      },
    },    
    {
      image: {
        src: "/obras/obra-03.jpg",
        alt: "Blocok Obra",
        width: 410,
        height: 300,
      },
    },    
    {
      image: {
        src: "/obras/obra-04.jpg",
        alt: "Blocok Obra",
        width: 410,
        height: 300,
      },
    },    
    {
      image: {
        src: "/obras/obra-05.jpg",
        alt: "Blocok Obra",
        width: 410,
        height: 300,
      },
    },    
    {
      image: {
        src: "/obras/obra-06.jpg",
        alt: "Blocok Obra",
        width: 410,
        height: 300,
      },
    },    
    {
      image: {
        src: "/obras/obra-07.jpg",
        alt: "Blocok Obra",
        width: 410,
        height: 300,
      },
    },
  ],
}