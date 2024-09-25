import { BannerPrincipal } from '@/components/BannerPrincipal';
import { Sobre } from '@/components/Sobre';
import { Estrutura } from '@/components/Estrutura';
import { TestesLaboratoriais } from '@/components/TestesLaboratoriais';
import { Obras } from '@/components/Obras';
import { SejaFranqueado } from '@/components/SejaFranqueado';
import { bannerPrincipal } from '@/configs/bannerPrincipal';
import { sobre } from '@/configs/sobre';
import { estrutura } from '@/configs/estrutura';
import { testesLaboratoriais } from '@/configs/testesLaboratoriais';
import { obras } from '@/configs/obras';
import { sejaFranqueado } from '@/configs/sejaFranqueado';
import { FaleConosco } from '@/components/FaleConosco';
import { PeloPais } from '@/components/PeloPais';
import { peloPais } from '@/configs/peloPais';
import FadeInSection from '@/components/FrameMotion';

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-between">
      {/* Banner Principal */}
      <BannerPrincipal {...bannerPrincipal} />

      {/* O que é a blocok */}
      <div id="o-que-e-a-blocok">
        <Sobre {...sobre} />
      </div>

      {/* estrutura do blocok original */}
      <div id="produtos">
        <Estrutura {...estrutura} />
      </div>

      {/* testes laboratoriais */}
      <div>
        <TestesLaboratoriais {...testesLaboratoriais} />
      </div>

      {/* OBRAS EXECUTADAS COM BLOCOK ​ORIGINAL */}
      <div id="obras">
        <Obras {...obras} />
      </div>

      {/* por que se tornar um ​franqueado? */}
      <div>
        <SejaFranqueado {...sejaFranqueado} />
      </div>

      {/* CONFIRA NOSSAS franquias ​PELO PAÍS! */}
      <div>
        <PeloPais {...peloPais} />
      </div>

      {/* Fale Conosco */}
      <div id="seja-um-franqueado">
        <FaleConosco />
      </div>
    </main>
  );
}
