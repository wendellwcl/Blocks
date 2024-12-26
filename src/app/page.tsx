"use client";

import AsideBar from "@/components/AsideBar/AsideBar";
import ComponentsSection from "@/components/ComponentsSection/ComponentsSection";
import MainHeader from "@/components/MainHeader/MainHeader";
import Spinner from "@/components/Spinner/Spinner";
import { fetchComponentsListRequest } from "@/redux/slices/componentsListSlice/componentsListSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const dispatch = useDispatch();
    const { allComponents, loading } = useSelector((state: RootState) => state.componentsList);

    useEffect(() => {
        dispatch(fetchComponentsListRequest());
    }, [dispatch]);

    return (
        <div className="w-full min-h-screen flex flex-col">
            <MainHeader />

            {loading && (
                <div className="container flex-1 flex flex-col items-center justify-center gap-4">
                    <Spinner size={80} />
                    <p>Carregando...</p>
                </div>
            )}

            {Boolean(allComponents.length) && (
                <main className="container grid grid-cols-1 md:grid-cols-4">
                    <AsideBar />
                    <ComponentsSection />
                </main>
            )}
        </div>
    );
}
