import React, { useContext } from "react"
import { Box, Heading } from "native-base"
import { AppContext } from "../../context/AppContext"
export const CurrentNickname = () => {
  const { currentNickname } = useContext(AppContext)

  return (
    <Box p={4} bg='gray.700'>
      <Heading size='md' color='white'>
        {currentNickname}
      </Heading>
    </Box>
  )
}
