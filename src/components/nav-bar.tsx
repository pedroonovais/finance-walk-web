import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="flex justify-between items-center bg-slate-900 p-6">
            <h1 className="text-2xl font-bold">Finance Walk</h1>
            <ul className="flex gap-4">
                <li><Link href="#">dashboard</Link></li>
                <li><Link href="#">movimentações</Link></li>
                <li className="border-b-4 border-pink-600"><Link href="#">categorias</Link></li>
            </ul>
            <img className="size-12 rounded-full" src="http://github.com/pedroonovais.png" alt="Foto de perfil" />
        </nav>
    )
}