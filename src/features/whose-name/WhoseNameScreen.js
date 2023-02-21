import { Box, Center } from "native-base"
import React from "react"
import { Result } from "../../components/result/Result"
import { AnswerOptions } from "../../components/answer-options/AnswerOptions"
import { CurrentNickname } from "../../components/current-nickname/CurrentNickname"

export const WhoseNameScreen = () => {
  return (
    <Box flex={1} p={4} bg='muted.50'>
      <Center p={4} m={4}>
        <CurrentNickname />
      </Center>

      <AnswerOptions />

      <Result />
    </Box>
  )
}
