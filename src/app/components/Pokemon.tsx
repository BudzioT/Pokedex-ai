import React from "react";
import localFont from "next/font/local";
/* eslint-disable */

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
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

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
            <h4 className="text-xl text-black pl-2 pb-2">{capitalizedName}</h4>

            <div className="flex flex-row gap-4 pl-2">
                {typePills}
            </div>
        </div>
    );
}

function TypePill({ type }: TypePillProps) {
    const color: string = typeToColor[type as keyof typeof typeToColor];
    const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);

    return (
        <div className={`${color} px-7 rounded`}>
            <p className="text-sm">{typeCapitalized}</p>
        </div>
    );
}

const typeToColor = {
    "fire": "bg-orange-400 text-white",
    "water": "bg-blue-400 text-white",
    "grass": "bg-green-400 text-black",
    "poison": "bg-purple-500 text-white",
    "bug": "bg-emerald-500 text-white",
    "dark": "bg-gray-700 text-white",
    "dragon": "bg-indigo-500 text-white",
    "electric": "bg-yellow-300 text-black",
    "fairy": "bg-pink-200 text-black",
    "fighting": "bg-amber-800 text-white",
    "flying": "bg-blue-100 text-black",
    "ghost": "bg-indigo-700 text-white",
    "ground": "bg-amber-300 text-black",
    "ice": "bg-cyan-200 text-black",
    "normal": "bg-gray-200 text-black",
    "psychic": "bg-pink-500 text-white",
    "rock": "bg-amber-500 text-white",
    "steel": "bg-slate-300 text-black",
}