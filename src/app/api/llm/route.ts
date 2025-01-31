import {NextResponse} from "next/server";
/* eslint-disable */

export async function POST(request: Request) {
    try {
        console.log('API route hit');

        const body = await request.json();

        console.log('Processing request with body:', body);

        const response = await fetch(
            "https://api.cloudflare.com/client/v4/accounts/c3264d748a5009b2807b7070472c80b2/ai/run/@cf/meta/llama-3-8b-instruct",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
                    "Content-type": "application/json",
                },

                body: JSON.stringify({
                    messages: [
                        {
                            role: "system",
                            content: "You are a friendly assistant that helps write stories",
                        },
                        {
                            role: "user",
                            content: body.prompt,
                        },
                    ]
                })
            }
        );

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error in POST:", error);
        return NextResponse.json({error: "failed to process request"}, {status: 500});
    }
}