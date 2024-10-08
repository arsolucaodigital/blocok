import { TestesLaboratoriaisProps } from '@/configs/testesLaboratoriais';
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import Image from 'next/image';

export function TestesLaboratoriais({ itemTestes }: TestesLaboratoriaisProps) {
  return (
    <section className="mt-8 lg:mt-12 w-full">
      <div className="container mx-auto px-4 py-6 lg:py-12 flex gap-4 items-center flex-col">
        <h2 className="text-5xl lg:text-7xl 2xl:text-8xl uppercase font-bebas tracking-wide w-full text-center mb-14 font-light">
          Testes laboratoriais
        </h2>
        <div className="w-full flex gap-4 items-center mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 w-full">
            {itemTestes.map(({ image }, index) => (
              <>
              {image.src && (
                <div
                  key={index}
                  className="w-full flex items-center justify-center"
                >
                  <Image {...image} />
                </div>
              )}
              </>
            ))}
          </div>
        </div>
        <p className="text-3xl lg:text-5xl font-bold uppercase font-bebas tracking-wide w-full text-center mb-10 lg:mb-14">
          O BLOCOK ORIGINAL passou por todos os testes laboratoriais:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:px-8">
          {itemTestes
            .sort((a, b) => a.order - b.order) // Ordena o array pelo campo `order`
            .map(
              ({ image }, index) =>
                image.title && (
                  <div key={index} className="flex gap-2 items-center w-full">
                    <div className="min-w-[30px]">
                      <IconRosetteDiscountCheckFilled className="text-blue-300 w-[30px] h-[30px]" />
                    </div>
                    <p className="text-lg lg:text-2xl text-black uppercase font-bold">
                      {image.title}
                    </p>
                  </div>
                ),
            )}
        </div>
      </div>
    </section>
  );
}
