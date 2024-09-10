import Link from "next/link";

export function PeloPais() {
  return (
    <section className="bg-gray-100 mt-8 lg:mt-12 w-full flex py-32">
        <div className="container mx-auto px-4 lg:px-12 flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-full lg:w-1/2">
            <div className="w-full lg:w-[90%] h-[500px] bg-blue-300 mb-5 lg:mb-0"></div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h2 className="text-5xl lg:text-8xl font-bold mb-4 uppercase font-bebas tracking-wide">
              Confira nossas{' '}
              <span className="text-blue-200">franquias Blocok</span> pelo país!
            </h2>
            <p className="text-xl font-semibold text-justify leading-normal w-full lg:w-[80%]">
              Já estamos presente em mais de{' '}
              <span className="text-blue-200">10 ​Estados</span> em todo o país,{' '}
              <span className="text-blue-200">
                você pode se ​tornar um franqueado
              </span>{' '}
              do método ​construtivo que está revolucionando a ​área da
              construção civil!
            </p>
            <div className="flex justify-end w-full lg:w-[80%]">
              <Link
                href="/sobre"
                className="text-md lg:text-xl font-semibold text-blue-300 uppercase hover:text-blue-200"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}