import AdvancedFilter from "@/app/components/AdvancedFilter";

export default function PokemonSearcher() {
    return (
        <>
            <section className="bg-body_bg text-white text-xl lg:text-2xl pt-10 pl-10 pr-4 flex items-center flex-wrap">
                <h1>Name or Number</h1>

                <div className="flex items-center justify-around">
                    <input className="border-2 rounded border-gray-400 mt-2" type="text"/>
                    <button className="bg-amber-600 p-2 mx-3 rounded mt-2">
                        <img src="input-search-bg.png" className="min-w-4"/>
                    </button>
                </div>
                <p className="mt-3 text-lg">Use Advanced Search to explore Pokémon by type, weakness, Ability, and more! </p>

                <div className="bg-green-500 mt-10 rounded-r-md p-3 pl-5 -ml-10 mb-6">
                    <p>Search for a Pokémon by name or by its Pokédex number</p>
                </div>
            </section>

            <AdvancedFilter />
        </>
    )
}