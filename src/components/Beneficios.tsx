import { BeneficiosProps } from '@/configs/beneficios';
import Image from 'next/image';

export function Beneficios({ itensList, image }: BeneficiosProps) {
  return (
    <section className="lg:mt-12 w-full">
      <div className="container mx-auto px-4 lg:px-12 py-12 flex-col-reverse flex lg:flex-row gap-12 lg:gap-24 items-center">
        <div className="w-full lg:w-1/2">
          <div className="w-full h-auto mb-5 lg:mb-0">
            <Image {...image} className="w-full" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-5xl lg:text-7xl 2xl:text-8xl mb-4 uppercase font-bebas tracking-wide font-normal">
            Benefícios do
            <span className="w-full block font-bold">
              blocok original
              <span className="text-black">?</span>
            </span>
          </h2>
          <ul>
            {itensList.map((item, index) => (
              <li
                key={index}
                className="py-4 border-b border-gray-400 last-of-type:border-b-0"
              >
                <p className="text-md lg:text-lg font-semibold text-left leading-normal w-full">
                  <span className="text-blue-300 text-bold mr-2">
                    {item.indexList})
                  </span>
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}