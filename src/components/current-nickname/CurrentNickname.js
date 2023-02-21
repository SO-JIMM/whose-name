import React, { useContext } from "react"
import { Button, Heading } from "native-base"
import { AppContext } from "../../context/AppContext"
export const CurrentNickname = () => {
  const { currentNickname } = useContext(AppContext)

  return <Heading>{currentNickname}</Heading>
}
