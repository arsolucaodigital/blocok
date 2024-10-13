import { BannerPrincipalProps } from '@/configs/bannerPrincipal';
import Image from 'next/image';

export function BannerPrincipal({ image, imageMobile }: BannerPrincipalProps) {
  return (
    <section className="w-full">
      <div
        className="w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image.src})` }}
      >
        <div className="absolute top-1/2 flex items-center justify-center">
          <div className="container mx-auto text-white text-center px-3 lg:px-20">
            <div className="flex justify-center items-start flex-col w-full">
              <p className="text-lg font-bold mb-2 text-left bg-blue-300 py-1 px-2 ">
                Método Construtivo Revolucionário
              </p>
              <div className="w-full flex flex-col border border-r-0 border-y-0 border-l-[6px] border-blue-300 pl-4 border-rounded">
                <h2 className="text-4xl md:text-5xl lg:text-7xl text-left font-bold mb-4  uppercase font-bebas tracking-wide">
                  O melhor sistema <br />
                  de vedação da atualidade.
                </h2>
                <p className="text-base md:text-lg text-left font-bold">
                  Qualidade, Economia e Sustentabilidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
