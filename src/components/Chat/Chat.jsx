'use client'
import { useChat } from 'ai/react'
import './Chat.css' 

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat'
    })

    return (
        <div className='chat-container'>
            <div className='chat-messages'>
                {
                    messages.map(message => {
                        const isChat = message.role !== 'user'
                        return (
                            <div key={message.id} className={`message ${isChat ? 'chatbot' : 'user'}`}>
                                <div className='message-bubble'>
                                    {message.content}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <form onSubmit={handleSubmit} className="chat-form">
                <input 
                    placeholder='Escribe al chat'
                    type='text' 
                    id="content"
                    name='content' 
                    value={input} 
                    onChange={handleInputChange} 
                    className="chat-input"
                />
                <button 
                    type="submit" 
                    className="chat-button"
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}


