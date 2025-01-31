import {NextResponse} from "next/server";
/* eslint-disable */

const POKEAPI_URL = "https://pokeapi.co/api/v2";


// Fetch pokemon by ID
async function fetchPokemon(pokemonId: number) {
    try {
        const response: Response = await fetch(`${POKEAPI_URL}/pokemon/${pokemonId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch Pokémon(#${pokemonId}) data`);
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        throw error;
    }
}

export async function GET(request: Request) {
    try {
        const url: URL = new URL(request.url);
        const type = url.searchParams.get("type");

        if (type == "pokemon") {
            const pokemonId: number = parseInt(url.searchParams.get("id") || "1", 10);
            const pokemonData = await fetchPokemon(pokemonId);
            return NextResponse.json(pokemonData);
        }
        else {
            return NextResponse.json({error: "unknown type for GET"}, {status: 500})
        }
    } catch (error) {
        console.error("Error in GET:", error);
        return NextResponse.json({error: "failed to data by GET"}, {status: 500});
    }
}