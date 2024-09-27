import { EstruturaProps } from '@/configs/estrutura';
import Image from 'next/image';
import Link from 'next/link';

export function Estrutura({
  textPlacaConcreto,
  TextPlacaEPS,
  image,
  imageMalha,
}: EstruturaProps) {
  return (
    <section className="bg-gray-100 mt-8 lg:mt-12 w-full py-20 md:py-32">
      <div className="flex container px-4 mx-auto flex-col">
        <h2 className="text-5xl lg:text-7xl 2xl:text-8xl font-bold uppercase font-bebas tracking-wide w-full text-center mb-14">
          Estrutura do <span className="text-blue-300">Blocok original</span>
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-4 mb-10">
              <h3 className="text-3xl lg:text-4xl font-bebas font-bold">
                PLACA DE CONCRETO
              </h3>
              <p className="text-md lg:text-xl font-bold text-justify">
                {textPlacaConcreto}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl lg:text-4xl font-bebas font-bold">
                PLACA DE EPS (ISOPOR) INDUSTRIAL
              </h3>
              <p className="text-md lg:text-xl font-bold text-justify">
                {TextPlacaEPS}
              </p>
            </div>
            <div className="border-solid border-4 border-black  mx-auto w-full lg:w-[80%] my-8 ">
              <div className="flex flex-col gap-4 bg-blue-300 items-center py-10  justify-center border-solid border-4 border-white">
                <p className="text-5xl font-bold font-bebas uppercase">
                  Importante!
                </p>
                <p className="text-md lg:text-xl font-bold text-center px-8 uppercase">
                  O blocok não tem malha de aço em sua estrutura
                </p>
              </div>
            </div>
            <div className="w-[60%] auto mx-auto mb-6 flex justify-center">
              <Image {...imageMalha} />
            </div>
            {/* <div className="flex justify-start">
              <Link
                href="/sobre"
                className="text-md lg:text-xl font-semibold text-blue-300 uppercase hover:text-blue-300"
              >
                Saiba mais
              </Link>
            </div> */}
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="w-full lg:w-[90%]">
              <Image {...image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
