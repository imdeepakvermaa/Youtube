import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div>
        <img src="https://imgs.search.brave.com/9IEl1PF7dviJo9V_Hf6HnBZmDE6Dx7SnKUsz62u5ddM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzEyL1VzZXJfaWNv/bl8yLnN2Zw.svg" alt="" />


        <span>{name}</span>
        <span>{message}</span>
      
    </div>
  )
}

export default ChatMessage;
