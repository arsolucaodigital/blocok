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
      <FadeInSection linkId="o-que-e-a-blocok">
        <Sobre {...sobre} />
      </FadeInSection>

      {/* estrutura do blocok original */}
      <FadeInSection linkId="produtos">
        <Estrutura {...estrutura} />
      </FadeInSection>

      {/* testes laboratoriais */}
      <FadeInSection>
        <TestesLaboratoriais {...testesLaboratoriais} />
      </FadeInSection>

      {/* OBRAS EXECUTADAS COM BLOCOK ​ORIGINAL */}
      <FadeInSection linkId="obras">
        <Obras {...obras} />
      </FadeInSection>

      {/* por que se tornar um ​franqueado? */}
      <FadeInSection>
        <SejaFranqueado {...sejaFranqueado} />
      </FadeInSection>

      {/* CONFIRA NOSSAS franquias ​PELO PAÍS! */}
      <FadeInSection>
        <PeloPais {...peloPais} />
      </FadeInSection>

      {/* Fale Conosco */}
      <FadeInSection linkId="seja-um-franqueado">
        <FaleConosco />
      </FadeInSection>
    </main>
  );
}
