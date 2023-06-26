import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'


const apiConfig = new Configuration({
  apiKey: process.env.CHAT_GPT,
})

const openai = new OpenAIApi(apiConfig)
export default async function GET(req) {
    
    console.log(req);
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true, // Conforme tiene la respuesta la va enviando
        messages: [
            {
                role: 'system', // Buscar cuales hay
                content: "eres un mexicano que vive en guatemala",
            },
            {
              role: 'user',
              content: "que dia es hoy",
            }
        ]
    })

    console.log(req);
    // Transformar la respueda de OpenAi e un text-stream
    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream);
}