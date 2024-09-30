import { NextResponse } from "next/server"

export async function GET(request: Request) {
    try {
        const data = await fetch('https://api.nasa.gov/planetary/apod?count=3&api_key=Gp46NTWkIy0RnqiBj8cZFgR004wrkwt0DBpJurF2')
        const imageOfDay = await data.json()

        return NextResponse.json(imageOfDay)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
    }
}