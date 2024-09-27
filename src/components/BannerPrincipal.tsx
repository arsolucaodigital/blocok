import { BannerPrincipalProps } from '@/configs/bannerPrincipal';
import Image from 'next/image';

export function BannerPrincipal({ image, imageMobile }: BannerPrincipalProps) {
  return (
    <section className="w-full">
      <div className="flex items-center justify-center relative w-full">
        <div className="w-full h-auto md:flex hidden">
          <Image {...image} width={1920} height={1080} />
        </div>
        <div className="w-full h-auto md:hidden">
          <Image {...imageMobile} width={640} height={785} />
        </div>
      </div>
    </section>
  );
}
