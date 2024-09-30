import Image from "next/image"
import OldMap from "../../../public/img/old-map.jpg"
import Zeus from "../../../public/img/zeus.png"

export default function Impact() {
    return (
        <section className="flex flex-col items-center p-8 gap-12 bg-slate-900 text-white">
            <h1 className="text-3xl font-bold">Impacto nas Civilizações Antigas</h1>
            <div className="flex items-center justify-center px-8 py-4 gap-6 max-w-4xl">
                <p className="text-lg">Velikovsky acreditava que as civilizações antigas registraram, em mitos e tradições, os efeitos de eventos cósmicos devastadores. Por exemplo, ele interpretou a destruição da cidade de Jericó e o colapso da Idade do Bronze como resultados diretos de grandes perturbações celestes. Segundo ele, essas catástrofes cósmicas forçaram migrações em massa, colapsaram civilizações inteiras e alteraram o curso da história humana.</p>
                <Image src={OldMap} alt="Mapa Antigo" width={1500} height={1500} className="size-72 rounded-xl" />
            </div>
            <div className="flex items-center justify-center px-8 py-4 gap-6 max-w-4xl">
                <Image src={Zeus} alt="Zeus" width={400} height={400} className="size-72 rounded-2xl" />
                <p className="text-lg">Muitas civilizações, como os egípcios, babilônios, hebreus e os povos da Mesoamérica, possuem relatos de grandes catástrofes em seus registros históricos e mitológicos. Velikovsky argumentava que esses relatos não eram meras alegorias, mas evidências de eventos cataclísmicos reais que impactaram a vida na Terra.</p>
            </div>
        </section>
    )
}