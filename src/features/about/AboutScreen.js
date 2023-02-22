import { Box, Center, Heading, Text } from "native-base"
import { AntDesign } from "@expo/vector-icons"
import React from "react"
import * as WebBrowser from "expo-web-browser"
export const AboutScreen = () => {
  const _handlePressButtonAsync = async () => {
    await WebBrowser.openBrowserAsync("https://github.com/SO-JIMM")
  }
  return (
    <Box flex={1} p={4} bg='muted.50'>
      <Center>
        <Heading>Jim Grace</Heading>
      </Center>
      <Center>
        <Heading fontStyle='italic' p={4} size='sm'>
          React And Front-End Developer
        </Heading>
      </Center>
      <Box
        mt={12}
        p={4}
        justifyContent='center'
        alignItems='center'
        borderWidth={1}
        borderStyle='solid'
        borderColor='gray.400'
        borderRadius={8}>
        <AntDesign
          onPress={_handlePressButtonAsync}
          name='github'
          size={48}
          color='black'
        />
        <Text
          onPress={_handlePressButtonAsync}
          p={4}
          fontWeight='bold'
          style={{
            textDecorationLine: "underline",
          }}>
          https://github.com/SO-JIMM
        </Text>
      </Box>
    </Box>
  )
}
