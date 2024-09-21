import { BannerPrincipalProps } from "@/configs/bannerPrincipal";
import Image from "next/image";

export function BannerPrincipal({ image }:BannerPrincipalProps) {
  return (
    <section className="w-full">
    <div className="flex items-center justify-center relative w-full">
      <Image {...image} width={1920} height={1080}/>
    </div>
  </section>
  )
}