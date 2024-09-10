import { ImageProps } from "next/image";

export type BannerPrincipalProps = {
  title?: string;
  image: ImageProps;
};

export const bannerPrincipal: BannerPrincipalProps = {
  image: {
    src: "/banner-principal.jpg",
    alt: "Franquia Blocok",
  },
}