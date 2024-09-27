import { SobreProps } from '@/configs/sobre';
import Image from 'next/image';
import Link from 'next/link';

export function Sobre({ description, image }: SobreProps) {
  return (
    <section className="lg:mt-12 w-full">
      <div className="container mx-auto px-4 lg:px-12 py-12 flex-col-reverse flex lg:flex-row gap-4 items-center">
        <div className="w-full lg:w-1/2">
          <div className="w-full lg:w-[90%] h-auto lg:h-[500px] mb-5 lg:mb-0">
            <Image {...image} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-5xl lg:text-7xl 2xl:text-8xl font-bold mb-4 uppercase font-bebas tracking-wide">
            o que é o{' '}
            <span className="text-blue-300 w-full block">
              blocok original
              <span className="text-black">?</span>
            </span>
          </h2>
          <p className="text-md lg:text-xl font-semibold text-justify leading-normal w-full lg:w-[80%]">
            {description}
          </p>
          {/* <div className="flex justify-end w-full lg:w-[80%]">
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
