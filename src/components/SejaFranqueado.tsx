import { SejaFranqueadoProps } from '@/configs/sejaFranqueado';
import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from './FrameMotion';

export function SejaFranqueado({ description, images }: SejaFranqueadoProps) {
  return (
    <section className="mt-8 lg:mt-0 w-full">
      <div className="container mx-auto px-4 lg:px-12 py:8 lg:py-6 flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
        <div className="w-full lg:w-1/3">
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            {images.map(({ image }, index) => (
              <FadeInSection
                duration={1}
                position={50 * (index + 1)}
                key={index}
              >
                <div className="w-full flex items-center justify-center">
                  <Image {...image} />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-3/4 flex flex-col gap-4">
          <FadeInSection duration={1} position={230}>
            <h2 className="text-5xl lg:text-7xl 2xl:text-8xl mb-4 uppercase font-bebas tracking-wide font-normal">
              Por que se tornar um
              <span className="w-full block font-bold">
                ​franqueado
                <span className="text-black">?</span>
              </span>
            </h2>
          </FadeInSection>
          <FadeInSection duration={1} position={250}>
            <p className="text-md lg:text-xl font-semibold text-justify leading-normal w-full lg:w-[100%]">
              {description}
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
