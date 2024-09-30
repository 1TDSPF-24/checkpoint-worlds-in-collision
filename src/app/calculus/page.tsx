import { CalculusInput } from "@/components/calculus-input"
import Image from "next/image"
import OldMap from "../../../public/img/old-map.jpg"

export default function Impact() {
    return (
        <section className="flex flex-col items-center py-8 px-14 gap-12 bg-slate-900 text-slate-50">
            <h1 className="text-3xl font-bold">Cálculo da Órbita de Vênus</h1>
            <div className="flex flex-col items-center justify-center px-4 md:flex-row md:px-8 py-4 gap-6 w-full">
                <p className="text-lg">
                    Immanuel Velikovsky propôs que Vênus era originalmente um corpo cometário, e que sua órbita ao redor do Sol não era sempre estável. Ele acreditava que o planeta passou próximo à Terra em sua fase inicial, causando grandes perturbações gravitacionais que mudaram a rotação da Terra e criaram fenômenos como a parada do Sol mencionada no Livro de Josué. Velikovsky sugeriu que Vênus estabilizou sua órbita após várias interações com outros planetas, incluindo Júpiter e Marte.
                </p>
                <Image src={OldMap} alt="Mapa Antigo" width={1500} height={1500} className="size-72 rounded-xl" />
            </div>

            <div className="flex flex-col justify-center px-8 py-4 gap-6 w-full">
                <h2 className="text-2xl font-bold">Cálculo Interativo</h2>
                <CalculusInput />
            </div>
        </section>
    )
}
