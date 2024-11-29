"use client";

import {useState} from "react";

export default function StoryGenerator() {
    const [prompt, setPrompt] = useState('');
    const [story, setStory] = useState('');
    const [loading, setLoading] = useState(false);

    const generateStory = async () => {
        try {
            setLoading(false);
            const response = await fetch("/api/llm", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({prompt}),
            });

            console.log('Response received:', response.status);

            const data = await response.json();
            setStory(data.result.response);
        } catch(error) {
            console.error("Error requesting data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <textarea className="w-full p-2 border rounded mb-4"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder={"Enter smth..."}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                    onClick={generateStory}
                    disabled={loading}
            >
                {loading ? "Generating..." : "Generate story"}
            </button>

            {story && (
                <div className="mt-4 p-4 border rounded">
                    <h2 className="font-bold mb-2">Generated story:</h2>
                    <p>{story}</p>
                </div>
            )}
        </div>
    )
}
