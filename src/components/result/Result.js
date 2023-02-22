import React, { useContext } from "react"
import { Text, Button, AlertDialog, Alert, Heading } from "native-base"
import { AppContext } from "../../context/AppContext"

export const Result = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const onClose = () => setIsOpen(false)

  const cancelRef = React.useRef(null)
  const {
    isCorrectAnswer,

    startNewGuess,
    selectedAnswer,
  } = useContext(AppContext)

  const handleNext = () => {
    startNewGuess()
    onClose()
  }

  return (
    <>
      <Button
        bg='gray.600'
        variant={!selectedAnswer ? "unstyled" : "solid"}
        color='white'
        isDisabled={!selectedAnswer}
        onPress={() => setIsOpen(!isOpen)}>
        Submit
      </Button>
      <AlertDialog
        safeAreaTop={true}
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content marginBottom='auto' marginTop='40%'>
          <AlertDialog.Body>
            <Alert status={isCorrectAnswer ? "success" : "error"}>
              {isCorrectAnswer ? (
                <Heading>Correct!</Heading>
              ) : (
                <Text>Incorrect!</Text>
              )}
            </Alert>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group w='full' justifyContent='space-around' space={2}>
              <Button
                isDisabled={!!isCorrectAnswer}
                variant='unstyled'
                colorScheme='coolGray'
                onPress={onClose}
                ref={cancelRef}>
                Try Again
              </Button>
              <Button
                colorScheme={isCorrectAnswer ? "success" : "error"}
                onPress={handleNext}>
                Continue
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      {/* {checkResult && (
        <Alert status={isCorrectAnswer ? "success" : "error"}>
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
      )} */}
    </>
  )
}
