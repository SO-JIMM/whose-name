import React, { useContext } from "react"
import {
  Text,
  Button,
  Center,
} from "native-base"

import { BLAIR, JIM, MARTY, MEG } from "../constants/constants"
import { Alert,Modal } from "native-base"
import { AppContext } from "../context/AppContext"

export const GuessName = () => {
  const { clearAnswer, selectedAnswer, senderName, setNewAnswerGuess } =
    useContext(AppContext)

  return (
    <>
      <Modal size='sm' isOpen={!!(selectedAnswer && senderName)}>
        <Modal.Content>
          <Modal.CloseButton onPress={clearAnswer} />

          <Modal.Header>
            <Text>Hello</Text>
          </Modal.Header>
          <Modal.Body>
            {selectedAnswer && senderName && (
              <Center>
                <Alert
                  status={selectedAnswer === senderName ? "success" : "error"}>
                  <Text>
                    {selectedAnswer === senderName
                      ? "Correct!"
                      : "Incorrect! Try Again..."}
                  </Text>
                </Alert>
              </Center>
            )}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal.Content>
      </Modal>
      <Center py={4}>
        <Button.Group>
          <Button
            bg='muted.600'
            minW='75px'
            borderWidth={2}
            borderColor={selectedAnswer === JIM ? "yellow.400" : "dark.600"}
            onPress={() => setNewAnswerGuess(JIM)}>
            Jim
          </Button>
          <Button
            bg='muted.600'
            minW='75px'
            borderWidth={2}
            borderColor={selectedAnswer === BLAIR ? "yellow.400" : "dark.600"}
            onPress={() => setNewAnswerGuess(BLAIR)}>
            Blair
          </Button>
          <Button
            bg='muted.600'
            minW='75px'
            borderWidth={2}
            borderColor={selectedAnswer === MEG ? "yellow.400" : "dark.600"}
            onPress={() => setNewAnswerGuess(MEG)}>
            Meg
          </Button>
          <Button
            bg='muted.600'
            minW='75px'
            borderWidth={2}
            borderColor={selectedAnswer === MARTY ? "yellow.400" : "dark.600"}
            onPress={() => setNewAnswerGuess(MARTY)}>
            Marty
          </Button>
        </Button.Group>
      </Center>
    </>
  )
}
