export default function SurpriseButton() {
    return (
        <button className="bg-blue-300 rounded-lg text-white text-lg font-bold py-3 flex flex-row flex-nowrap justify-center align-middle gap-2 p-5">
            <img src="icons/icons8-refresh-30.png" alt="refresh" className=""/>
            <p className="">Random Pokémons!</p>
        </button>
    );
}