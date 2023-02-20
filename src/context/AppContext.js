import React, { createContext, useState, useContext } from "react"
import { pickRandomNickname } from "../utils/pickRandomNickname"

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [currentName, setCurrentName] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const getNewRandomNickname = () => {
    const newName = pickRandomNickname()
    setSelectedAnswer(null)
    setCurrentName(newName)
  }

  const setNewAnswerGuess = (answer) => {
    setSelectedAnswer(answer)
  }

  const clearAnswer = () => {
    setSelectedAnswer(null)
  }

  let senderName = currentName?.sender_name ?? null

  let isCorrectAnswer =
    !!currentName?.sender_name &&
    selectedAnswer &&
    selectedAnswer === currentName.sender_name

  return (
    <AppContext.Provider
      value={{
        currentName,
        selectedAnswer,
        getNewRandomNickname,
        clearAnswer,
        isCorrectAnswer,
        setNewAnswerGuess,
        senderName,
      }}>
      {children}
    </AppContext.Provider>
  )
}
