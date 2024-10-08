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
import { beneficios } from '@/configs/beneficios';
import { Beneficios } from '@/components/Beneficios';

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-between">
      {/* Banner Principal */}
      <BannerPrincipal {...bannerPrincipal} />

      {/* O que é a blocok */}
      <div id="o-que-e-a-blocok" className="w-full">
        <Sobre {...sobre} />
      </div>

      {/* estrutura do blocok original */}
      <div id="produtos" className="w-full">
        <Estrutura {...estrutura} />
      </div>

      {/* estrutura do blocok original */}
      <div id="beneficios" className="w-full">
        <Beneficios {...beneficios} />
      </div>

      {/* testes laboratoriais */}
      <div className="w-full">
        <TestesLaboratoriais {...testesLaboratoriais} />
      </div>

      {/* OBRAS EXECUTADAS COM BLOCOK ​ORIGINAL */}
      <div id="obras" className="w-full">
        <Obras {...obras} />
      </div>

      {/* por que se tornar um ​franqueado? */}
      <div className="w-full">
        <SejaFranqueado {...sejaFranqueado} />
      </div>

      {/* CONFIRA NOSSAS franquias ​PELO PAÍS! */}
      <div className="w-full">
        <PeloPais {...peloPais} />
      </div>

      {/* Fale Conosco */}
      <div id="seja-um-franqueado" className="w-full">
        <FaleConosco />
      </div>
    </main>
  );
}
