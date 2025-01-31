"use client"
import PokemonSearcher from "@/app/components/PokemonSeacher";
import SurpriseButton from "@/app/components/SurpriseButton";
import Sorter from "@/app/components/Sorter";
import localFont from "next/font/local";
import {PokemonFetcher} from "@/app/components/Fetchers";
import {useState} from "react";
/* eslint-disable */

const subFont = localFont({ src: "../../public/fonts/GeistMonoVF.woff" });


export default function Home() {
    let [firstIndex, setFirstIndex] = useState(1);
    let [pokemonLimit, setPokemonLimit] = useState(12);

    const pokemonList = [];
    for (let i: number = firstIndex; i <= pokemonLimit; i++) {
        pokemonList.push(<PokemonFetcher pokemonId={i} key={i} />);
    }

    return (
        <main className="min-hscreen bg-container_bg">
            <section className="bg-white py-5">
                <h1 className="text-gray-500 text-3xl my-5 ml-10">Pokédex</h1>
                <div className="left-0 block">
                    <PokemonSearcher />
                </div>

                <div className="px-8">
                    <div className="flex justify-center my-5">
                        <SurpriseButton/>
                    </div>

                    <div className="flex flex-col mb-10">
                        <p className="text-gray-400 text-lg my-1 font-bold">Sort By:</p>
                        <Sorter/>
                    </div>

                    <div className="flex flex-nowrap flex-col gap-12">
                        {pokemonList}
                    </div>

                    <div className="flex justify-center pt-10">
                        <button className="bg-blue-400 w-full py-2 rounded-lg">
                            <p className={`font-bold ${subFont.className}`}>Load more Pokémon</p>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
