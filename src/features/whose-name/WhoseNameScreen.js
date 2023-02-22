import { Box } from "native-base"
import React from "react"
import { Result } from "../../components/result/Result"
import { AnswerOptions } from "../../components/answer-options/AnswerOptions"
import { CurrentNickname } from "../../components/current-nickname/CurrentNickname"

export const WhoseNameScreen = () => {
  return (
    <Box p={4} alignItems='center' justifyContent='center'>
      <Box
        mt={6}
        bg='muted.200'
        height='md'
        justifyContent='space-between'
        borderWidth={1}
        borderColor='coolGray.700'
        borderRadius={8}
        width='xs'>
        <CurrentNickname />
        <AnswerOptions />
        <Box justifyContent='space-between' p={4}>
          <Result />
        </Box>
      </Box>
    </Box>
  )
}
