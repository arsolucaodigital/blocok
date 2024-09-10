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

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-between">
      {/* Banner Principal */}
      <BannerPrincipal {...bannerPrincipal} />

      {/* O que é a blocok */}
      <Sobre {...sobre} />

      {/* estrutura do blocok original */}
      <Estrutura {...estrutura} />

      {/* testes laboratoriais */}
      <TestesLaboratoriais {...testesLaboratoriais} />

      {/* OBRAS EXECUTADAS COM BLOCOK ​ORIGINAL */}
      <Obras {...obras} />

      {/* por que se tornar um ​franqueado? */}
      <SejaFranqueado {...sejaFranqueado} />

      {/* CONFIRA NOSSAS franquias ​PELO PAÍS! */}
      <PeloPais />

      {/* Fale Conosco */}
      <FaleConosco />
    </main>
  );
}
