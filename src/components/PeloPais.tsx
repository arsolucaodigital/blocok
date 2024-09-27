import { peloPais } from '@/configs/peloPais';
import Image from 'next/image';
import Link from 'next/link';

export function PeloPais({ image }: peloPais) {
  return (
    <section className="bg-gray-100 mt-8 lg:mt-12 w-full flex py-16 lg:py-32">
      <div className="container mx-auto px-4 lg:px-12 flex flex-col-reverse lg:flex-row gap-4 items-center">
        <div className="w-full lg:w-1/2">
          <Image {...image} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-5xl lg:text-7xl 2xl:text-8xl font-bold mb-4 uppercase font-bebas tracking-wide">
            Confira nossas{' '}
            <span className="text-blue-300">franquias Blocok</span> pelo país!
          </h2>
          <p className="text-md lg:text-xl font-semibold text-justify leading-normal w-full lg:w-[80%]">
            Já somos mais de{' '}
            <span className="text-blue-300 uppercase"> 30 Franqueados</span> em{' '}
            <span className="text-blue-300 uppercase"> 14 estados</span> por
            todo o país! você também pode se tornar um franqueado
            <span className="text-blue-300 uppercase"> blocok original</span> o
            sistema construtivo revolucionário da construção civil. A franquia
            que mais cresce no país!
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
