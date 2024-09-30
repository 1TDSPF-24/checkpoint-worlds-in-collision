import Image from "next/image";
import Link from "next/link";
import errorPic from "/public/img/404.png";

export default function NotFound() {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center bg-slate-900">
            <Image src={errorPic} alt="Picture of the author" width={500} height={500} />
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl text-slate-300 text-center">Que pena... Parece que essa página não existe!</h1>
                <Link href="/" className="px-4 py-2 bg-purple-600 rounded-full border-2 border-purple-700 font-bold text-slate-100">Página Principal</Link>
            </div>
        </div>
    )
}