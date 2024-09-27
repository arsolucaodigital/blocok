import { ImageProps } from "next/image";

export type BannerPrincipalProps = {
  title?: string;
  image: ImageProps;
  imageMobile: ImageProps;
};

export const bannerPrincipal: BannerPrincipalProps = {
  image: {
    src: "/banner-principal.png",
    alt: "Franquia Blocok",
  },
  imageMobile: {
    src: "/banner-principal-mobile.png",
    alt: "Franquia Blocok",
  },
}