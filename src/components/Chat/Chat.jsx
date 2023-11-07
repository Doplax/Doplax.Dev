"use client";
import { useChat } from "ai/react";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat/",
  });

  return (
    <div className="flex flex-col p-4 h-[90vh]">
      {" "}
      {/* Chat container with full height and padding */}
      <MessageList messages={messages} />
      <ChatForm
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

// MessageList.js
function MessageList({ messages }) {
  return (
    <div className="flex-grow overflow-auto flex flex-col p-4 mb-4">
      {" "}
      {/* Messages container */}
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

// Message.js
function Message({ message }) {
  const isChat = message.role !== "user";
  return (
    <div className={`mb-2.5 ${isChat ? "self-start" : "self-end"}`}>
      {" "}
      {/* Message with dynamic alignment */}
      <div
        className={`rounded-3xl px-4 py-2.5 ${
          isChat ? "bg-blue-500" : "bg-slate-600"
        }`}
      >
        {" "}
        {/* Message bubble */}
        {message.content}
      </div>
    </div>
  );
}

// ChatForm.js
function ChatForm({ input, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex justify-between">
      {" "}
      {/* Chat form container */}
      <input
    placeholder="Escribe al chat"
    type="text"
    id="content"
    name="content"
    value={input}
    onChange={handleInputChange}
    className="flex-grow p-2.5 rounded-3xl outline-none mr-2.5 text-white border-2 border-gray-300 focus:border-yellow-500 transition-colors"
    style={{ transitionDuration: '5000ms' }}
/>


      <button
        type="submit"
        className="px-5 py-2.5 border-2 border-yellow-500 text-yellow-500 hover:text-white rounded-3xl cursor-pointer font-bold outline-none transition duration-300 hover:bg-yellow-500"
      >
        Enviar
      </button>
    </form>
  );
}

export default Chat;
