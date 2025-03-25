import NavBar from "@/components/nav-bar";
import Link from "next/link";

export default function CategoriesPage(){
    return (
        <>
            <NavBar active="movimentações" />
            <main className="flex justify-center">
                <div className="bg-slate-900 m-4 p-4 rounded min-w-2/3">
                    <h2>Movimentações</h2>
                </div>
            </main>
        </>
    )
}