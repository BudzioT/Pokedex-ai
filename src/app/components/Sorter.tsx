export default function Sorter() {
    return (
        <select className="bg-gray-800 text-white text-center text-lg mx-auto w-full py-2 rounded">
            <option className="bg-gray-500">Number ascending</option>
            <option className="bg-gray-500">Number descending</option>
            <option className="bg-gray-500">A-Z</option>
            <option className="bg-gray-500">Z-A</option>
        </select>
    );
}