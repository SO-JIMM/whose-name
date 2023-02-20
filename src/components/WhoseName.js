import React, { useContext } from "react"
import {
  Box,
  Heading,
  // Text,
  // Container,
  Button,
  // Flex,
  Center,
  Stack,
  // HStack,
  // IconButton,
  // CloseIcon,
} from "native-base"
import { AppContext } from "../context/AppContext"

export const WhoseName = () => {
  const { currentName, getNewRandomNickname } = useContext(AppContext)
  return (
    <Stack direction='column' space={4}>
      <Box>
        <Center>
          <Heading>
            {currentName && currentName?.content ? currentName.content : ""}
          </Heading>
        </Center>
      </Box>
      <Box>
        <Center>
          <Button
            size='lg'
            _text={{
              color: "muted.700",
              fontWeight: "bold",
            }}
            p={4}
            _pressed={{
              backgroundColor: "muted.50",
              borderColor: "muted.400",
              _text: { color: "muted.500" },
            }}
            bg='muted.200'
            variant='ghost'
            borderWidth={1}
            onPress={() => getNewRandomNickname()}>
            Get NickName
          </Button>
        </Center>
      </Box>
    </Stack>
  )
}
