"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import ComponentsCard from "../ComponentsCard/ComponentsCard";

export default function ComponentsSection() {
    const { filteredComponents } = useSelector((state: RootState) => state.componentsList);

    return (
        <section className="col-span-full md:col-span-3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 sm:gap-y-12 md:pl-4 pb-12">
            {filteredComponents.length ? (
                filteredComponents.map((component, idx) => (
                    <ComponentsCard
                        key={idx}
                        title={component.name}
                        imgAlt={`imagem do componente ${component.name}`}
                        imgSrc={component.img}
                    />
                ))
            ) : (
                <span className="w-full self-start col-span-full text-center text-theme_neutral-50 ">
                    Não encontrado.
                </span>
            )}
        </section>
    );
}
