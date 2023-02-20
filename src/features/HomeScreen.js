import { Box, Heading, Text, Container } from "native-base"
import React from "react"
import { WhoseName } from "../components/WhoseName"
import { GuessName } from "../components/GuessName"

export const HomeScreen = () => {
  return (
    <Box flex={1} p={4} bg='muted.50'>
      <WhoseName />
      <GuessName />
    </Box>
  )
}
