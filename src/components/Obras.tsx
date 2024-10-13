import { ObrasProps } from '@/configs/obras';
import { SliderObras } from './Slider';

export function Obras({ images }: ObrasProps) {
  return (
    <section className="mt-8 lg:mt-6 w-full max-w-[100vw]">
      <div className="container mx-auto px-4 py-6 lg:py-12 flex gap-4 items-center flex-col">
        <h2 className="text-5xl lg:text-7xl 2xl:text-8xl uppercase font-bebas tracking-wide w-full text-center mb-14 font-light">
          OBRAS EXECUTADAS COM{' '}
          <span className="font-bold">Blocok original</span>
        </h2>
        <div className="w-full flex gap-4 items-center">
          <div className="block w-full obras">
            <SliderObras images={images} />
          </div>
        </div>
        <div className="w-full mt-14 flex justify-end">
          <h2 className="text-5xl lg:text-9xl font-bold font-bebas tracking-wide w-full mb-6 text-end text-blue-300">
            + de 1 milhão{' '}
            <span className="text:4xl lg:text-5xl w-full block text-black">
              de M² construídos
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
