import Link from 'next/link';
import { Logo } from './Logo';
import {
  BrandFacebook,
  BrandInstagram,
  MapPin,
  Mail,
} from 'tabler-icons-react';
import { LogoBranca } from './LogoBranca';

export function Footer() {
  return (
    <footer className="bg-black mt-8 lg:mt-12 w-full flex flex-col">
      <div className="container mx-auto px-4 lg:px-12 flex flex-col lg:flex-row gap-4 items-center py-12 ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full flex flex-col gap-4">
            <LogoBranca />
            <p className="text-md lg:text-lg text-white">
              <span className="text-blue-300 uppercase">
                BLOCOK Paredes Prontas ORIGINAL
              </span>{' '}
              é mais do ​que uma empresa de construção. Nós somos ​uma revolução
              no setor da construção civil, ​proporcionando oportunidades de
              investimento ​sólidas e seguras para empreendedores ​visionários.
            </p>
          </div>
          <div className="w-full flex flex-col gap-8">
            <div className="flex flex-col gap-2 justify-start">
              <p className="text-lg lg:text-lg text-white font-bold">Contato</p>
              <ul className="flex gap-4 items-start pl-2 flex-col">
                <li className="flex gap-6">
                  <Link
                    href=""
                    className="text-white font-extralight hover:text-blue-300 flex gap-2"
                  >
                    <MapPin size={26} className="w-[26px] min-w-[26px]" />
                    <p className="text-md lg:text-lg">
                      Rua Major Augusto Marques Braga N° 7, sala 105 - Centro
                      ​Nova Friburgo - RJ
                    </p>
                  </Link>
                </li>
                {/* <li className="flex gap-6">
                  <Link
                    href=""
                    className="text-white text-md lg:text-lg font-extralight hover:text-blue-300 flex gap-2"
                  >
                    <BrandWhatsapp
                      size={26}
                      className="w-[26px] min-w-[26px]"
                    />
                    <p className="text-md lg:text-lg">(21) 99999-9999</p>
                  </Link>
                </li> */}
                <li className="flex gap-6">
                  <Link
                    href="mailto:franquiablocok@gmail.com"
                    className="text-white font-extralight hover:text-blue-300 flex gap-2"
                  >
                    <Mail size={26} className="w-[26px] min-w-[26px]" />
                    <p>franquiablocok@gmail.com</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg lg:text-lg text-white font-bold">
                Siga-nos
              </p>
              <ul className="flex gap-2 items-center pl-2">
                <li>
                  <Link
                    href="https://www.instagram.com/franquiablocok/"
                    className="text-white font-extralight hover:text-blue-300"
                    target="_blank"
                  >
                    <BrandInstagram size={32} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/franquiablocok"
                    className="text-white font-extralight hover:text-blue-300"
                    target="_blank"
                  >
                    <BrandFacebook size={32} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-white py-4">
        <div className="container mx-auto px-4 lg:px-12 flex flex-col lg:flex-row gap-4 items-center">
          <p className="text-xs text-center lg:text-sm text-black font-bold w-full">
            Todos os direitos reservados ©Blocok Paredes Prontas ORIGINAL -
            2024
          </p>
        </div>
      </div>
    </footer>
  );
}
