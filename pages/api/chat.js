import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

// Le decimos a vercel donde queremos ejecutar el endpoint
export const runtime = 'edge'


// Creacion del cliente de OpenAi
const config = new Configuration({
    apiKey: process.env.CHAT_GPT,
})

const openai = new OpenAIApi(config)

export default async function POST(req) {
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true, // Conforme tiene la respuesta la va enviando
        messages: [
            {
                role: 'system', // Buscar cuales hay
                content: "Hola, soy un bot",
            },
        ]
    })

    console.log(response);
    // Transformar la respueda de OpenAi e un text-stream
    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream);
}