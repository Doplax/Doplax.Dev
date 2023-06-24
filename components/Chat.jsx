import { useChat } from 'ai/react' // Hook especial de vercel
//import { use } from 'react'

function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat()
    return (
        <div className='flex flex-col mx-auto max-w-xl px-8 py-9'>


            {
                messages.map(message => {
                    const isChat = message.role !== 'user'
                    return (
                        <div key={message.id}>
                            <p>
                                {isChat ? "🤖" : "🧑"}
                                <span className={`${isChat ? 'text-orange' : 'text-blue'}`}>
                                    {message.content}
                                </span>
                            </p>
                        </div>
                    )
                })
            }
            <form onSubmit={handleSubmit} className="flex flex-col mt-5">
    <input 
        placeholder='Escribe al chat'
        type='text' 
        id="content"
        name='content' 
        value={input} 
        onChange={handleInputChange} 
        className="p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
    />
    <button 
        type="submit" 
        className="mt-3 bg-orange text-white text-base py-2 px-2 rounded-lg shadow-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200"
    >
        Enviar
    </button>
</form>


        </div>
    )
}


export { Chat };