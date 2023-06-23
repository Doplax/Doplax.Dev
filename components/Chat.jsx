import { useChat } from 'ai/react' // Hook especial de vercel
//import { use } from 'react'

function Chat () {
    const { messages ,input , handleInputChange, handleSubmit} = useChat()
    return (
        <div className='flex flex-col mx-auto max-w-xl px-8 '>


        {
            messages.map(message => {
                const isChat = message.role !== 'user'
                return(
                    <div key={message.id}>
                        <p>
                            {isChat ? "🤖" : "🧑"}
                            <span className={`${isChat ? 'text-yellow' : 'text-blue'}`}>
                                {message.content}
                            </span>
                        </p>
                    </div>
                )
            })
        }
            <form onSubmit={handleSubmit}>
                <label>Escribe al chat</label>
                <input type='text' name='content' value={input} onChange={handleInputChange} ></input>
            </form>
        </div>
    )
}


export { Chat };