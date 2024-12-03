import {useEffect, useState} from "react";
import Pokemon from "./Pokemon";

interface PokemonFetcherProps {
    pokemonId: number,
}

export function PokemonFetcher({pokemonId}: PokemonFetcherProps) {
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchPokemonData = async() => {
        setLoading(true);
        try {
            const response: Response = await fetch(`/api/pokeapi?type=pokemon&id=${pokemonId}`);
            const data = await response.json();
            setPokemonData(data);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemonData();
    }, [pokemonId]);

    // @ts-ignore
    return (
        <>
            {pokemonData && (
                <Pokemon
                    id={pokemonId}
                    name={pokemonData.name}
                    types={pokemonData.types.map((typeInfo: any) => typeInfo.type.name)}
                    image={pokemonData.sprites.other["official-artwork"].front_default}
                />
            )}
        </>
    )
}