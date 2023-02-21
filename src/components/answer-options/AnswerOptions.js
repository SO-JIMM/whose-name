import React, { useContext } from "react"
import { Box, Button, Radio, VStack, Text, Flex, Center } from "native-base"

import { BLAIR, JIM, MARTY, MEG } from "../../constants/constants"
import { AppContext } from "../../context/AppContext"

export const AnswerOptions = () => {
  const { selectedAnswer, onChangeAnswer } = useContext(AppContext)

  return (
    <>
      <VStack alignItems='center'>
        <Radio.Group
          size='lg'
          name='AnswerOptionsGroup'
          accessibilityLabel='Answer Options'
          value={selectedAnswer}
          onChange={(answer) => onChangeAnswer(answer)}>
          <Radio my={2} size='lg' value={JIM}>
            Jim
          </Radio>
          <Radio my={2} size='lg' value={BLAIR}>
            Blair
          </Radio>
          <Radio my={2} size='lg' value={MEG}>
            Meg
          </Radio>
          <Radio my={2} size='lg' value={MARTY}>
            Marty
          </Radio>
        </Radio.Group>
      </VStack>
      <Box>
        <Center>
          <Text fontSize='xl'>Answer: {selectedAnswer ?? ""}</Text>
        </Center>
      </Box>
    </>
  )
}
