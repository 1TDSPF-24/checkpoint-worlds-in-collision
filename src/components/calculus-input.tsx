'use client'

import { useState } from "react"

const GravitationalConstant = 6.67430e-11
const MassOfEarth = 5.972e24
const MassOfVenus = 4.867e24

const calculateOrbit = (distance: number, velocity: number) => {
    const r = distance * 1e9
    const v = velocity * 1e3
    const kineticEnergy = 0.5 * MassOfVenus * v * v
    const potentialEnergy = (GravitationalConstant * MassOfEarth * MassOfVenus) / r
    const totalEnergy = kineticEnergy - potentialEnergy

    if (totalEnergy < 0) {
        return 'Órbita elíptica - Vênus seria capturado em uma órbita estável.'
    } else if (totalEnergy === 0) {
        return 'Órbita circular - Vênus se moveria em uma órbita estável e circular.'
    } else {
        return 'Órbita hiperbólica - Vênus escaparia da gravidade da Terra.'
    }
}

export function CalculusInput() {
    const [distance, setDistance] = useState(100)
    const [velocity, setVelocity] = useState(20)
    const [result, setResult] = useState('')

    const handleCalculate = () => {
        const orbitResult = calculateOrbit(distance, velocity)
        setResult(orbitResult)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col input-group gap-2 justify-between w-full">
                <label htmlFor="distance">Distância de Vênus à Terra (milhões de km):</label>
                <input
                    type="number"
                    id="distance"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="p-2 border rounded-md bg-slate-900 w-full"
                />
            </div>
            <div className="flex flex-col input-group gap-2 justify-between w-full">
                <label htmlFor="velocity">Velocidade de Vênus (km/s):</label>
                <input
                    type="number"
                    id="velocity"
                    value={velocity}
                    onChange={(e) => setVelocity(Number(e.target.value))}
                    className="p-2 border rounded-md bg-slate-900 w-full"
                />
            </div>
            <button
                onClick={handleCalculate}
                className="mt-4 px-4 py-2 bg-blue-500 rounded-md"
            >
                Calcular Órbita
            </button>
            {result && <p className="mt-4 text-lg">Resultado: {result}</p>}
        </div>
    )
}