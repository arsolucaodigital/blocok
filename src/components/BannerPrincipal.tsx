import { BannerPrincipalProps } from "@/configs/bannerPrincipal";
import Image from "next/image";

export function BannerPrincipal({ title, image }:BannerPrincipalProps) {
  return (
    <section className="w-full">
    <div className="opacity-80 w-full h-[500px] flex items-center justify-center relative">
      <Image {...image} fill sizes="100vw"/>
      <h1 className="text-5xl lg:text-8xl font-bold text-black absolute">{title}</h1>
    </div>
  </section>
  )
}