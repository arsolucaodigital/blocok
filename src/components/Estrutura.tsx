import { EstruturaProps } from '@/configs/estrutura';
import Image from 'next/image';

export function Estrutura({
  textPlacaConcreto,
  TextPlacaEPS,
  image,
  imageMalha,
}: EstruturaProps) {
  return (
    <section className="bg-gray-100 mt-8 lg:mt-12 w-full py-20 md:py-18">
      <div className="flex container px-4 mx-auto flex-col">
        <h2 className="text-5xl lg:text-7xl 2xl:text-8xl uppercase font-bebas tracking-wide w-full text-center mb-14 font-light">
          Estrutura do <span className="font-bold">Blocok original</span>
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
          </div>
          <div className="w-full lg:w-1/2 flex justify-end weight-400">
            <div className="w-full lg:w-[90%]">
              <Image {...image} />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col-reverse justify-around lg:flex-row gap-4 lg:gap-8 items-center mt-10 lg:mt-20">
          <div className="w-full lg:w-1/2 flex justify-center weight-400">
            <div className="w-[80%] lg:w-[50%]">
              <Image {...imageMalha} />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-">
            <div className="border-solid border-4 border-black  mx-auto w-full lg:w-[80%] my-8 ">
              <div className="flex flex-col gap-4 bg-blue-100 items-center py-10  justify-center border-solid border-4 border-white">
                <p className="text-5xl font-bold font-bebas uppercase">
                  Importante!
                </p>
                <p className="text-md lg:text-xl font-bold text-center px-8 uppercase">
                  O blocok não tem malha de aço em sua estrutura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
