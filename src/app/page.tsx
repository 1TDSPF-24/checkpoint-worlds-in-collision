import Image from "next/image"
import Immanuel from "../../public/img/immanuel_velikovsky.jpg"
import Solar from "../../public/img/solar-system.jpg"

export default function Home() {
  return (
    <section className="flex flex-col items-center p-8 gap-12 bg-slate-900 text-slate-50">
      <h1 className="text-3xl font-bold">Introdução ao Worlds in Collision</h1>
      <div className="flex items-center justify-center px-8 py-4 gap-6 max-w-4xl">
        <p className="text-lg">Publicado pela primeira vez em 1950, Worlds in Collision de <span className="font-semibold italic">Immanuel Velikovsky</span> é uma obra controversa que propõe que eventos catastróficos de origem cósmica moldaram a história da Terra. Velikovsky desafiou as teorias científicas convencionais, sugerindo que eventos como a separação do Mar Vermelho e a parada do Sol, descritos em antigas escrituras, foram causados por perturbações planetárias. Ele usou mitos, registros históricos e tradições culturais de várias civilizações antigas para argumentar que corpos celestes, como cometas e planetas, colidiram ou passaram perigosamente perto da Terra, alterando o curso da história.</p>
        <Image src={Immanuel} alt="Imannuel Velikovsky" width={616} height={600} className="size-72 rounded-xl" />
      </div>
      <div className="flex items-center justify-center px-8 py-4 gap-6 max-w-4xl">
        <Image src={Solar} alt="Sistema Solar" width={1200} height={800} className="size-72 rounded-2xl" />
        <p className="text-lg">A obra de Velikovsky foi inicialmente rejeitada por astrônomos e cientistas convencionais, mas teve um impacto significativo no público em geral, abrindo debates sobre a validade dos registros históricos antigos e os efeitos de eventos cósmicos no nosso planeta.</p>
      </div>
    </section>
  )
}
