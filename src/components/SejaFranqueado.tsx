import { SejaFranqueadoProps } from '@/configs/sejaFranqueado';
import Image from 'next/image';
import Link from 'next/link';

export function SejaFranqueado({ description, images }: SejaFranqueadoProps) {
  return (
    <section className="mt-8 lg:mt-0 w-full">
      <div className="container mx-auto px-4 lg:px-12 py:8 lg:py-6 flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4 lg:gap-8">
            {images.map(({ image }, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center"
              >
                <Image {...image} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-3/4 flex flex-col gap-4">
          <h2 className="text-5xl lg:text-7xl 2xl:text-8xl mb-4 uppercase font-bebas tracking-wide font-normal">
            Por que se tornar um
            <span className="w-full block font-bold">
              ​franqueado
              <span className="text-black">?</span>
            </span>
          </h2>
          <p className="text-md lg:text-xl font-semibold text-justify leading-normal w-full lg:w-[80%]">
            {description}
          </p>
          {/* <div className="flex justify-end w-[80%]">
            <Link
              href="/sobre"
              className="text-md lg:text-xl font-semibold text-blue-300 uppercase hover:text-blue-300"
            >
              Saiba mais
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
