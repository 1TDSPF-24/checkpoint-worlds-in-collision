import Image from "next/image"
import Bible from "../../../public/img/bible.jpg"
import Comet from "../../../public/img/comet.jpg"

export default function Catastrophe() {
    return (
        <section className="flex flex-col items-center p-8 gap-12 bg-slate-900 text-slate-50">
            <h1 className="text-3xl font-bold">Teoria das Catástrofes Cósmicas</h1>
            <div className="flex flex-col items-center justify-center px-4 md:flex-row md:px-8 py-4 gap-6 w-full">
                <p className="text-lg">Velikovsky propôs que a história da Terra foi marcada por catástrofes cósmicas, nas quais grandes corpos celestes passaram próximos ou colidiram com nosso planeta. Ele acreditava que tais eventos, como a suposta colisão entre a Terra e um grande cometa, desencadearam desastres naturais em uma escala global. Esses eventos, segundo ele, causaram mudanças abruptas no clima, movimentos tectônicos e grandes tsunamis, que foram documentados em mitos e textos religiosos de culturas ao redor do mundo.</p>
                <Image src={Comet} alt="Cometa" width={1000} height={1000} className="size-72 rounded-xl" />
            </div>
            <div className="flex flex-col items-center justify-center px-4 md:flex-row md:px-8 py-4 gap-6 w-full">
                <Image src={Bible} alt="Bíblia" width={800} height={800} className="size-72 rounded-2xl" />
                <p className="text-lg">Um dos exemplos mais famosos da teoria de Velikovsky é a explicação para a parada do Sol descrita no Livro de Josué, na Bíblia. Ele sugeriu que este evento foi o resultado de uma interação gravitacional entre a Terra e um cometa que passou muito próximo, alterando o eixo de rotação da Terra momentaneamente.</p>
            </div>
        </section>
    )
}