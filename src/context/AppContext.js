import React, { createContext, useState, useContext } from "react"
import { pickRandomNickname } from "../utils/pickRandomNickname"
import { useEffect } from "react"

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [currentName, setCurrentName] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [checkResult, setCheckResult] = useState(false)

  const submitAnswer = () => {
    setCheckResult(true)
  }

  const clearSubmit = () => {
    setCheckResult(false)
  }

  const getNewRandomNickname = () => {
    const newName = pickRandomNickname()
    setSelectedAnswer(null)
    setCurrentName(newName)
  }

  const onChangeAnswer = (answer) => {
    setSelectedAnswer(answer)
  }

  const clearAnswer = () => {
    setSelectedAnswer(null)
  }

  const startNewGuess = () => {
    const newName = pickRandomNickname()
    setSelectedAnswer(null)
    setCurrentName(newName)
  }

  let senderName = currentName?.sender_name ?? null

  let isCorrectAnswer =
    senderName && selectedAnswer && selectedAnswer === senderName

  let currentNickname = currentName?.content ?? ""

  useEffect(() => {
    if (!currentName?.content) {
      startNewGuess()
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        currentName,
        selectedAnswer,
        getNewRandomNickname,
        clearAnswer,
        isCorrectAnswer,
        senderName,
        startNewGuess,
        currentNickname,
        onChangeAnswer,
        checkResult,
        clearSubmit,
        submitAnswer,
      }}>
      {children}
    </AppContext.Provider>
  )
}
