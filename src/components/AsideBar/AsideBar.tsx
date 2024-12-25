"use client";

import { filterComponents } from "@/redux/slices/componentsListSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function AsideBar() {
    const filteredComponents = useSelector((state: RootState) => state.componentsList.filteredComponents);
    const dispatch = useDispatch();

    return (
        <aside className="w-full self-start hidden md:block p-4 border border-theme_neutral-500 rounded">
            <div className="w-full flex flex-col gap-2">
                <div className="w-full flex gap-2">
                    <span className="text-lg">🔮</span>
                    <input
                        type="text"
                        placeholder="pesquisar..."
                        className="w-full bg-transparent border-b border-theme_neutral-500 focus:outline-none"
                        onChange={(e) => dispatch(filterComponents({ query: e.target.value }))}
                    />
                </div>
                <ul className="pl-2 py-2 flex flex-col gap-1">
                    {filteredComponents.length ? (
                        filteredComponents.map((component, idx) => (
                            <li key={idx}>
                                <Link
                                    href={"/"}
                                    className="w-full relative flex items-center gap-2 pl-4 text-left font-[600] capitalize transition hover:text-theme_brand before:content-[attr(data-icon)] before:absolute before:left-0 before:rotate-45 before:text-[0.3rem]"
                                    data-icon="🟪"
                                >
                                    {component.name}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li className="text-sm text-theme_neutral-50">Não encontrado.</li>
                    )}
                </ul>
            </div>
        </aside>
    );
}
