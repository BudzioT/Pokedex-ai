import React from "react";
import localFont from "next/font/local";

const subFont = localFont({ src: "../../../public/fonts/GeistMonoVF.woff" });

interface  PokemonProps {
    id: number;
    name: string;
    types: Array<string>;
    image: string;
}

interface TypePillProps {
    type: string;
}

export default function Pokemon({id, name, types, image}: PokemonProps) {
    const typePills: Array<React.JSX.Element> = setTypes();

    function setTypes() {
        const pills: Array<React.JSX.Element> = [];
        for (const type of types) {
            pills.push(<TypePill key={type} type={type} />);
        }

        return pills;
    }

    return (
        <div key={id} className={`flex flex-col ${subFont.className}`}>
            <img src={image} alt={name} className="bg-gray-200" />
            <p className="text-gray-400 text-sm pl-2">#{id.toString().padStart(4, '0')}</p>
            <h4 className="text-xl pl-2 pb-2">{name}</h4>

            <div className="flex flex-row gap-4 pl-2">
                {typePills}
            </div>
        </div>
    );
}

function TypePill({type}: TypePillProps) {
    const typeToColor: object = {
        "fire": ["bg-orange-400", ""],
        "water": ["bg-blue-400", ""],
        "grass": ["bg-green-400", ""],
        "poison": ["bg-purple-500", ""],
        "bug": ["bg-green-300", ""],
        "dark": ["bg-gray-700", ""],
        "dragon": ["bg-indigo-500", ""],
        "electric": ["bg-yellow-300", ""],
        "fairy": ["bg-pink-200", ""],
        "fighting": ["bg-amber-800", ""],
        "flying": ["bg-blue-100", ""],
        "ghost": ["bg-indigo-700", ""],
        "ground": ["bg-amber-300", ""],
        "ice": ["bg-cyan-200", ""],
        "normal": ["", ""],
        "psychic": ["bg-pink-500", ""],
        "rock": ["", ""],
        "steel": ["", ""],
    }

    return (
        <div className="bg-pink-500 px-5">
            <p className=" text-sm">{type}</p>
        </div>
    );
}