import Image from 'next/image';
import banner from '/public/BK-02.png';
import { obras } from '@/configs/obras';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import FadeInSection from '@/components/FrameMotion';

export default function Page() {
  return (
    <>
      <section className="w-full">
        <div
          className="w-full max-h-screen h-[400px] bg-cover relative bg-fixed bg-bottom"
          style={{ backgroundImage: `url(${banner.src})` }}
        >
          <div className="absolute top-1/2 transform left-0 -translate-y-1/2 flex items-center justify-center">
            <div className="container mx-auto text-white text-center px-3 lg:px-20">
              <div className="flex justify-center items-start flex-col w-full">
                <div className="w-full flex flex-col border border-r-0 border-y-0 border-l-[6px] border-blue-300 pl-4 border-rounded">
                  <h1 className="text-4xl md:text-5xl text-left font-bold mb-4 uppercase font-bebas tracking-wide">
                    Blocok Original <br />
                    sistema construtivo revolucionário de paredes prontas.
                  </h1>
                  <p className="text-base md:text-lg 2xl:text-xl text-left font-bold">
                    Qualidade, Economia e Sustentabilidade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-12 px-4">
        <div className="w-full flex flex-col gap-4">
          <FadeInSection duration={1} position={230}>
            <h2 className="text-4xl md:text-5xl text-left font-bold mb-4 uppercase font-bebas tracking-wide">
              O que é o blocok original?
            </h2>
          </FadeInSection>
          <FadeInSection duration={1} position={240}>
            <p className="text-md lg:text-lg font-semibold text-justify leading-normal w-full">
              O BLOCOK ORIGINAL é um sistema construtivo revolucionário de
              paredes prontas. É composto por duas placas cimentícias de
              microconcreto de 15mm cada e uma placa de EPS industrial do tipo F
              com tecnologia antichama, com tamanho padrão de 90x90cm e
              variações em sua espessura, que são: 10cm, 13cm, 15cm e 20cm. O
              BLOCOK possui alta resistência de 12MPa e também proporciona maior
              conforto por ser termoacústico. Estrutura do Blocok Original
            </p>
          </FadeInSection>
          <FadeInSection duration={1} position={250}>
            <div className="w-full mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {obras.images.map(({ image }, index) => (
                  <div key={index}>
                    <Zoom>
                      <Image {...image} />
                    </Zoom>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
