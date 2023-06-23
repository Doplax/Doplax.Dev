import { useChat } from 'ai/react' // Hook especial de vercel
//import { use } from 'react'

function Chat () {
    const { messages ,input , handleInputChange, handleSubmit} = useChat()
    return (
        <div className='flex flex-col mx-auto max-w-xl px-8 '>


        {
            messages.map(message => {
                return(
                    <div key={message.id}>
                        <p>{message.content}</p>
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