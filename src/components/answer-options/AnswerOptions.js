import React, { useContext } from "react"
import { Box, Button, Radio, VStack, Text, Flex, Center } from "native-base"

import { BLAIR, JIM, MARTY, MEG } from "../../constants/constants"
import { AppContext } from "../../context/AppContext"

export const AnswerOptions = () => {
  const { selectedAnswer, onChangeAnswer } = useContext(AppContext)

  return (
    <Center>
      <Radio.Group
        bg='white'
        borderRadius='4'
        colorScheme='gray'
        name='AnswerOptionsGroup'
        accessibilityLabel='Answer Options'
        value={selectedAnswer}
        onChange={(answer) => onChangeAnswer(answer)}>
        <Radio
          _stack={{
            borderColor: "coolGray.400",
            borderRadius: "4",
            borderWidth: "1",
            borderStyle: "solid",
            alignItems: "center",
            bg: "white",

            py: "2",
            px: "4",
          }}
          _text={{
            fontWeight: "medium",
            width: "90",

            textAlign: "center",
          }}
          value={JIM}>
          Jim
        </Radio>
        <Radio
          _text={{
            fontWeight: "medium",
            textAlign: "center",

            width: "90",
          }}
          bg='white'
          _stack={{
            borderColor: "coolGray.400",
            textAlign: "center",
            bg: "white",

            borderRadius: "4",
            borderWidth: "1",
            borderStyle: "solid",
            alignItems: "center",

            py: "2",
            px: "4",
          }}
          value={BLAIR}>
          Blair
        </Radio>
        <Radio
          _text={{
            fontWeight: "medium",
            textAlign: "center",

            width: "90",
          }}
          _stack={{
            borderColor: "coolGray.400",
            borderRadius: "4",
            borderWidth: "1",
            borderStyle: "solid",
            alignItems: "center",
            bg: "white",

            py: "2",
            px: "4",
          }}
          value={MEG}>
          Meg
        </Radio>
        <Radio
          _stack={{
            borderColor: "coolGray.400",
            borderRadius: "4",
            borderWidth: "1",
            borderStyle: "solid",
            alignItems: "center",
            py: "2",
            px: "4",
            bg: "white",
            justifyContent: "space-between",
          }}
          _text={{
            fontWeight: "medium",
            textAlign: "center",
            width: "90",
          }}
          value={MARTY}>
          Marty
        </Radio>
      </Radio.Group>
    </Center>
  )
}
