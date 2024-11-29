"use client"
import PokemonSearcher from "@/app/components/PokemonSeacher";
import SurpriseButton from "@/app/components/SurpriseButton";
import Sorter from "@/app/components/Sorter";
import Pokemon from "@/app/components/Pokemon";

export default function Home() {

    return (
        <main className="min-hscreen bg-container_bg">
            <section className="bg-white py-5">
                <h1 className="text-gray-500 text-3xl my-5 ml-10">Pokédex</h1>
                <div className="left-0 block">
                    <PokemonSearcher />
                </div>

                <div className="px-8">
                    <div className="flex justify-center my-5">
                        <SurpriseButton />
                    </div>

                    <div className="flex flex-col mb-10">
                        <p className="text-gray-400 text-lg my-1 font-bold">Sort By:</p>
                        <Sorter />
                    </div>

                    <div className="flex-nowrap flex-row">
                        <Pokemon id={0} name="Bulbasaur" types={["Grass", "Poison"]} image="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png"/>
                    </div>
                </div>
            </section>
        </main>
    );
}
