import React, { useContext } from "react"
import {
  Text,
  Button,
  Center,
  Alert,
  VStack,
  HStack,
  IconButton,
  Box,
  CloseIcon,
} from "native-base"
import { AppContext } from "../../context/AppContext"

export const Result = () => {
  const {
    isCorrectAnswer,
    checkResult,
    submitAnswer,
    clearSubmit,
    selectedAnswer,
  } = useContext(AppContext)

  return (
    <>
      <Button disabled={!selectedAnswer} onPress={submitAnswer}>
        Submit
      </Button>

      {checkResult && (
        <Alert maxW='400' status={isCorrectAnswer ? "success" : "error"}>
          <VStack space={2} flexShrink={1} w='100%'>
            <HStack
              flexShrink={1}
              space={2}
              alignItems='center'
              justifyContent='space-between'>
              <HStack flexShrink={1} space={2} alignItems='center'>
                <Alert.Icon />
                <Text fontSize='md' fontWeight='medium' color='coolGray.800'>
                  We are going live in July!
                </Text>
              </HStack>
              <IconButton
                onPress={clearSubmit}
                variant='unstyled'
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size='3' />}
                _icon={{
                  color: "coolGray.600",
                }}
              />
            </HStack>
            <Box
              pl='6'
              _text={{
                color: "coolGray.600",
              }}>
              We are happy to announce that we are going live on July 28th. Get
              ready!
            </Box>
          </VStack>
        </Alert>
      )}
    </>
  )
}
